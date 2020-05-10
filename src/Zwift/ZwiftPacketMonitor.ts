import zwiftProtoRoot from './zwiftProto';
import { Cap, decoders } from 'cap';
import { EventEmitter } from 'tsee';
import { ClientToServer } from './proto';
import { Type } from 'protobufjs';

const PROTOCOL = decoders.PROTOCOL;
const buffer = Buffer.alloc(65535);
const clientToServerPacket = (zwiftProtoRoot.lookup('ClientToServer') as unknown) as Type;

// TODO: Rewrite this nicely in TS with sensible conventions

export default class ZwiftPacketMonitor extends EventEmitter {
    private cap: Cap;
    private linkType?: string;
    private interfaceName: string;

    /**
     * Constructor.
     *
     * @param {string} interfaceName Name of interface to attach to
     */
    constructor(interfaceName: string) {
        super();
        this.cap = new Cap();
        this.linkType = null;
        if (/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/.exec(interfaceName)) {
            this.interfaceName = Cap.findDevice(interfaceName);
        } else {
            this.interfaceName = interfaceName;
        }
    }

    /**
     * Start monitoring packets to Zwift servers
     */
    public start(): void {
        this.linkType = this.cap.open(this.interfaceName, 'port 3022', 10 * 1024 * 1024, buffer);
        this.cap.setMinBytes && this.cap.setMinBytes(0);
        this.cap.on('packet', this.processPacket.bind(this));
    }

    /**
     * Stop monitoring
     */
    public stop(): void {
        this.cap.close();
    }

    /**
     * Process an intercepted packet
     */
    public processPacket(): void {
        if (this.linkType !== 'ETHERNET') {
            return;
        }
        let ret = decoders.Ethernet(buffer);
        if (ret.info.type !== PROTOCOL.ETHERNET.IPV4) {
            return;
        }

        ret = decoders.IPV4(buffer, ret.offset);
        if (ret.info.protocol !== PROTOCOL.IP.UDP) {
            return;
        }

        ret = decoders.UDP(buffer, ret.offset);
        try {
            if (ret.info.dstport === 3022) {
                const packet = (clientToServerPacket.decode(
                    buffer.slice(ret.offset, ret.offset + ret.info.length - 4),
                ) as unknown) as ClientToServer;
                if (packet.state) {
                    this.emit(
                        'outgoingPlayerState',
                        packet.state,
                        packet.worldTime,
                        ret.info.srcport,
                        ret.info.srcaddr,
                    );
                }
            }
        } catch (ex) {
            return;
        }
    }
}
