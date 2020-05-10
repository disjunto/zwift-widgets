import { EventEmitter } from 'events';

/* eslint-disable */
declare module 'cap' {
    export class Cap extends EventEmitter {
        static findDevice(interface: string): string;
        static deviceList(): Array<any>;

        open(device: string, filter: string, bufferSize: number, buffer: Buffer): string;
        close(): void;
        setMinBytes?(numBytes: number): void;
        send(buffer: Buffer, numBytes?: number): void;
    }

    export class decoders {
        static PROTOCOL: string;

        static Ethernet(buffer: Buffer, offset?: number): object;

        static IPV4(buffer: Buffer, offset?: number): object;
        static IPV6(buffer: Buffer, offset?: number): object;
        static ICMPV4(buffer: Buffer, numBytes?: number, offset?: number): object;

        static TCP(buffer: Buffer, offset?: number): object;
        static UDP(buffer: Buffer, offset?: number): object;
        static SCTP(buffer: Buffer, offset?: number): object;
    }
}
