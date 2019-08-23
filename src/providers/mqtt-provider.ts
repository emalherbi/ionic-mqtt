// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class MqttProvider {
//   reasonToJoin() {
//     return 'The Ionic Academy helps you to learn everything Ionic!';
//   }
// }

import { Injectable } from "@angular/core";

// mqtt
declare const Paho: any;
declare const document: any;

@Injectable()

export class MQTTService {

  protected client: any;
  private scripts: any = {};
  private ScriptStore: Scripts[] = [
    {
      name: 'paho_mqtt', src: '../assets/scripts/paho-mqtt-min.js'
    }
  ];

  constructor() {
    this.ScriptStore.forEach((script: any) => {
        this.scripts[script.name] = {
            loaded: false,
            src: script.src
        };
    });
  }

  // load script
  private _load(...scripts: string[]) {
      var promises: any[] = [];
      scripts.forEach((script) => promises.push(this._loadScript(script)));
      return Promise.all(promises);
  }

  private _loadScript(name: string) {
      return new Promise((resolve, reject) => {
          //resolve if already loaded
          if (this.scripts[name].loaded) {
              resolve({name, loaded: true, status: 'Already Loaded'});
          }
          else {
              //load script
              let script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = this.scripts[name].src;
              if (script.readyState) {  //IE
                  script.onreadystatechange = () => {
                      if (script.readyState === "loaded" || script.readyState === "complete") {
                          script.onreadystatechange = null;
                          this.scripts[name].loaded = true;
                          resolve({name, loaded: true, status: 'Loaded', script, src: script.src});
                      }
                  };
              } else {  //Others
                  script.onload = () => {
                      this.scripts[name].loaded = true;
                      resolve({name, loaded: true, status: 'Loaded', script, src: script.src});
                  };
              }
              script.onerror = (error: any) => resolve({name, loaded: false, status: 'Loaded'});
              document.getElementsByTagName('head')[0].appendChild(script);
          }
      });
  }

  // mqtt
  // Load the paho-mqtt mqtt and create a client instance
  public loadingMqtt(onConnectionLost, onMessageArrived, topic: string[], MQTT_CONFIG: {
    domain: string,
    port: number,
    clientId: string,
    }) {
    return this._load('paho_mqtt').then(data => {
      // set callback handlers
      this.client = new Paho.MQTT.Client(MQTT_CONFIG.domain, Number(MQTT_CONFIG.port), MQTT_CONFIG.clientId);
      this.client.onConnectionLost = onConnectionLost.bind(this);
      this.client.onMessageArrived = onMessageArrived.bind(this);
      // client connect and subscribe
      // console.log(this.client);
      return this.client.connect({onSuccess: this._onConnect.bind(this, topic)});
    }).catch(error => {
      console.log(error);
    });
  };

  // called when the client connects
  private _onConnect(topic: string[]) {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    // subscribe the topic
    topic.forEach((tp) => {
      this.client.subscribe(tp);
    });

    return this.client;
  }
}


interface Scripts {
   name: string;
   src: string;
}