export declare class MQTTService {
    client: any;
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
