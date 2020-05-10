export type ClientToServer = {
    connected: number;
    worldTime: number;
    state: PlayerState;
};

export type PlayerState = {
    id: number;
    worldTime: number;
    distance: number;
    roadTime: number;
    laps: number;
    speed: number;
    roadPosition: number;
    cadenceUHz: number;
    heartrate: number;
    power: number;
    heading: number;
    lean: number;
    climbing: number;
    time: number;
    f19: number;
    f20: number;
    progress: number;
    customisationId: number;
    justWatching: number;
    calories: number;
    x: number;
    altitude: number;
    y: number;
    watchingRiderId: number;
    groupId: number;
    sport: number;
};
