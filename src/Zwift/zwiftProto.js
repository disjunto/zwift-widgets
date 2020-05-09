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
  SegmentResult: {
    fields: {
      id: {
        type: "int64",
        id: 1
      },
      riderId: {
        type: "int64",
        id: 2
      },
      eventSubgroupId: {
        type: "int64",
        id: 6
      },
      firstName: {
        type: "string",
        id: 7
      },
      lastName: {
        type: "string",
        id: 8
      },
      finishTimeStr: {
        type: "string",
        id: 10
      },
      elapsedMs: {
        type: "int64",
        id: 11
      },
      powermeter: {
        type: "int32",
        id: 12
      },
      weight: {
        type: "int32",
        id: 13
      },
      power: {
        type: "int32",
        id: 15
      },
      heartrate: {
        type: "int32",
        id: 19
      }
    }
  },
  SegmentResults: {
    fields: {
      worldId: {
        type: "int64",
        id: 1
      },
      segmentId: {
        type: "int64",
        id: 2
      },
      eventSubgroupId: {
        type: "int64",
        id: 3
      },
      segmentResults: {
        rule: "repeated",
        type: "SegmentResult",
        id: 4
      }
    }
  },
  UnknownMessage1: {
    fields: {}
  },
  UnknownMessage: {
    fields: {}
  },
  ServerToClient: {
    fields: {
      tag1: {
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
      seqno: {
        type: "int32",
        id: 4
      },
      playerStates: {
        rule: "repeated",
        type: "PlayerState",
        id: 8
      },
      playerUpdates: {
        rule: "repeated",
        type: "UnknownMessage",
        id: 9
      },
      tag11: {
        type: "int64",
        id: 11
      },
      tag17: {
        type: "int64",
        id: 17
      },
      numMsgs: {
        type: "int32",
        id: 18
      },
      msgnum: {
        type: "int32",
        id: 19
      }
    }
  },
  WorldAttributes: {
    fields: {
      worldId: {
        type: "int32",
        id: 1
      },
      name: {
        type: "string",
        id: 2
      },
      tag3: {
        type: "int64",
        id: 3
      },
      tag5: {
        type: "int64",
        id: 4
      },
      worldTime: {
        type: "int64",
        id: 6
      },
      clockTime: {
        type: "int64",
        id: 7
      }
    }
  },
  WorldAttribute: {
    fields: {
      worldTime: {
        type: "int64",
        id: 2
      }
    }
  },
  EventSubgroupProtobuf: {
    fields: {
      id: {
        type: "int32",
        id: 1
      },
      name: {
        type: "string",
        id: 2
      },
      rules: {
        type: "int32",
        id: 8
      },
      route: {
        type: "int32",
        id: 22
      },
      laps: {
        type: "int32",
        id: 25
      },
      startLocation: {
        type: "int32",
        id: 29
      },
      label: {
        type: "int32",
        id: 30
      },
      paceType: {
        type: "int32",
        id: 31
      },
      jerseyHash: {
        type: "int32",
        id: 36
      }
    }
  },
  RiderAttributes: {
    fields: {
      f2: {
        type: "int32",
        id: 2
      },
      f3: {
        type: "int32",
        id: 3
      },
      attributeMessage: {
        type: "AttributeMessage",
        id: 4
      },
      theirId: {
        type: "int32",
        id: 10
      },
      f13: {
        type: "int32",
        id: 13
      }
    },
    nested: {
      AttributeMessage: {
        fields: {
          myId: {
            type: "int32",
            id: 1
          },
          theirId: {
            type: "int32",
            id: 2
          },
          firstName: {
            type: "string",
            id: 3
          },
          lastName: {
            type: "string",
            id: 4
          },
          countryCode: {
            type: "int32",
            id: 5
          }
        }
      }
    }
  },
  Profiles: {
    fields: {
      profiles: {
        rule: "repeated",
        type: "Profile",
        id: 1
      }
    }
  },
  Profile: {
    fields: {
      id: {
        type: "int32",
        id: 1
      },
      firstName: {
        type: "string",
        id: 4
      },
      lastName: {
        type: "string",
        id: 5
      },
      male: {
        type: "int32",
        id: 6
      },
      weight: {
        type: "int32",
        id: 9
      },
      bodyType: {
        type: "int32",
        id: 12
      },
      countryCode: {
        type: "int32",
        id: 34
      },
      totalDistance: {
        type: "int32",
        id: 35
      },
      totalDistanceClimbed: {
        type: "int32",
        id: 36
      },
      totalTimeInMinutes: {
        type: "int32",
        id: 37
      },
      totalWattHours: {
        type: "int32",
        id: 41
      },
      height: {
        type: "int32",
        id: 42
      },
      totalExperiencePoints: {
        type: "int32",
        id: 46
      },
      achievementLevel: {
        type: "int32",
        id: 49
      },
      powerSource: {
        type: "int32",
        id: 52
      },
      age: {
        type: "int32",
        id: 55
      },
      launchedGameClient: {
        type: "string",
        id: 108
      },
      currentActivityId: {
        type: "int32",
        id: 109
      }
    }
  },
  Vector3: {
    fields: {
      x: {
        type: "float",
        id: 1
      },
      y: {
        type: "float",
        id: 2
      },
      z: {
        type: "float",
        id: 3
      }
    }
  },
  PlayerInfo: {
    fields: {
      id: {
        type: "int32",
        id: 1
      },
      f2: {
        type: "int32",
        id: 2
      },
      position: {
        type: "Vector3",
        id: 3
      },
      profile: {
        type: "string",
        id: 5
      },
      id2: {
        type: "int32",
        id: 6
      },
      f7: {
        type: "int32",
        id: 7
      },
      name: {
        type: "string",
        id: 11
      },
      countryCode: {
        type: "int32",
        id: 12
      },
      worldTime: {
        type: "fixed32",
        id: 13
      },
      f16: {
        type: "int32",
        id: 16
      }
    }
  },
  GTPC21_6_1: {
    fields: {
      seqno: {
        type: "int32",
        id: 1
      },
      playerInfos: {
        rule: "repeated",
        type: "PlayerInfo",
        id: 2
      },
      f3: {
        type: "int32",
        id: 3
      }
    }
  },
  GTPC21_6: {
    fields: {
      gtpc21_6_1: {
        rule: "repeated",
        type: "GTPC21_6_1",
        id: 1
      }
    }
  },
  GTPC21_4: {
    fields: {
      f1: {
        type: "int32",
        id: 1
      },
      f6: {
        type: "string",
        id: 6
      },
      f7: {
        type: "int32",
        id: 7
      },
      f8: {
        type: "int32",
        id: 8
      }
    }
  },
  GTPC21_8: {
    fields: {
      f1: {
        type: "int32",
        id: 1
      },
      f2: {
        type: "int32",
        id: 2
      }
    }
  },
  GTPC21: {
    fields: {
      f1: {
        type: "int32",
        id: 1
      },
      gtpc21_4: {
        type: "GTPC21_4",
        id: 4
      },
      gtpc21_6: {
        type: "GTPC21_6",
        id: 6
      },
      gtpc21_8: {
        type: "GTPC21_8",
        id: 8
      }
    }
  },
  GameToPhoneCommand: {
    fields: {
      seqno: {
        type: "int32",
        id: 1
      },
      f2: {
        type: "int32",
        id: 2
      },
      gtpc21: {
        type: "GTPC21",
        id: 21
      }
    }
  },
  GameToPhone: {
    fields: {
      f1: {
        type: "int32",
        id: 1
      },
      f2: {
        type: "int32",
        id: 2
      },
      id: {
        type: "int32",
        id: 3
      },
      f4: {
        type: "int32",
        id: 4
      },
      f6: {
        type: "int32",
        id: 6
      },
      f7: {
        type: "int32",
        id: 7
      },
      commands: {
        rule: "repeated",
        type: "GameToPhoneCommand",
        id: 11
      }
    }
  },
  ZMLClientInfo: {
    fields: {
      appVersion: {
        type: "string",
        id: 1
      },
      systemOSVersion: {
        type: "string",
        id: 2
      },
      systemOS: {
        type: "string",
        id: 3
      },
      systemHardware: {
        type: "string",
        id: 4
      }
    }
  },
  ZMLClientCapabilities: {
    fields: {
      f1: {
        type: "int32",
        id: 1
      },
      info: {
        type: "ZMLClientInfo",
        id: 5
      }
    }
  },
  PhoneToGameCommand: {
    fields: {
      seqno: {
        type: "int32",
        id: 1
      },
      command: {
        type: "int32",
        id: 2
      },
      subject: {
        type: "int32",
        id: 3
      },
      f5: {
        type: "int32",
        id: 5
      },
      f6: {
        type: "string",
        id: 6
      },
      f7: {
        type: "int32",
        id: 7
      },
      playerId: {
        type: "int32",
        id: 19
      },
      capabilities: {
        type: "ZMLClientCapabilities",
        id: 21
      }
    }
  },
  PhoneToGame: {
    fields: {
      id: {
        type: "int32",
        id: 1
      },
      command: {
        type: "PhoneToGameCommand",
        id: 2
      },
      f10: {
        type: "int32",
        id: 10
      }
    }
  }
});

export { $root as default };
