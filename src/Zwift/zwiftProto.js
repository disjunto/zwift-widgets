/*eslint-disable */
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
    .addJSON({
        PlayerState: {
            fields: {
                id: {
                    type: "int32",
                    id: 1
                },
                worldTime: {
                    type: "int64",
                    id: 2
                },
                distance: {
                    type: "int32",
                    id: 3
                },
                roadTime: {
                    type: "int32",
                    id: 4
                },
                laps: {
                    type: "int32",
                    id: 5
                },
                speed: {
                    type: "int32",
                    id: 6
                },
                roadPosition: {
                    type: "int32",
                    id: 8
                },
                cadenceUHz: {
                    type: "int32",
                    id: 9
                },
                heartrate: {
                    type: "int32",
                    id: 11
                },
                power: {
                    type: "int32",
                    id: 12
                },
                heading: {
                    type: "int64",
                    id: 13
                },
                lean: {
                    type: "int32",
                    id: 14
                },
                climbing: {
                    type: "int32",
                    id: 15
                },
                time: {
                    type: "int32",
                    id: 16
                },
                f19: {
                    type: "int32",
                    id: 19
                },
                f20: {
                    type: "int32",
                    id: 20
                },
                progress: {
                    type: "int32",
                    id: 21
                },
                customisationId: {
                    type: "int64",
                    id: 22
                },
                justWatching: {
                    type: "int32",
                    id: 23
                },
                calories: {
                    type: "int32",
                    id: 24
                },
                x: {
                    type: "float",
                    id: 25
                },
                altitude: {
                    type: "float",
                    id: 26
                },
                y: {
                    type: "float",
                    id: 27
                },
                watchingRiderId: {
                    type: "int32",
                    id: 28
                },
                groupId: {
                    type: "int32",
                    id: 29
                },
                sport: {
                    type: "int64",
                    id: 31
                }
            }
        },
        ClientToServer: {
            fields: {
                connected: {
                    type: "int32",
                    id: 1
                },
                riderId: {
                    type: "int32",
                    id: 2
                },
                worldTime: {
                    type: "int64",
                    id: 3
                },
                state: {
                    type: "PlayerState",
                    id: 7
                },
                seqno: {
                    type: "int32",
                    id: 4
                },
                tag8: {
                    type: "int64",
                    id: 8
                },
                tag9: {
                    type: "int64",
                    id: 9
                },
                lastUpdate: {
                    type: "int64",
                    id: 10
                },
                tag11: {
                    type: "int64",
                    id: 11
                },
                lastPlayerUpdate: {
                    type: "int64",
                    id: 12
                }
            }
        },
    });

export { $root as default };