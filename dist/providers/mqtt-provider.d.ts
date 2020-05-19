export declare class MQTTService {
    private scripts;
    constructor();
    private _load;
    private _script;
    clientMqtt(CONFIG: {
        host: string;
        username?: string;
        password?: string;
    }): any;
}
