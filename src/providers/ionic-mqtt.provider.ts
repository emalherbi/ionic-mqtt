import { Injectable } from '@angular/core';

declare const mqtt: any;
declare const document: any;

@Injectable()
export class IonicMqttService {
  private scripts: any = {};

  constructor() {
    [
      {
        name: 'mqtt',
        src: 'https://unpkg.com/mqtt@4.1.0/dist/mqtt.js',
        // src: '../lib/mqtt/mqtt.js',
        // src: 'https://unpkg.com/mqtt/dist/mqtt.min.js',
        // src: 'https://unpkg.com/mqtt@4.0.0/dist/mqtt.min.js',
      },
    ].forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src,
      };
    });
  }

  private _load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this._script(script)));
    return Promise.all(promises);
  }

  private _script(name: string) {
    return new Promise((resolve, reject) => {
      if (this.scripts[name].loaded) {
        resolve({ name, loaded: true, status: 'Already Loaded' });
      } else {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {
          // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({
                name,
                loaded: true,
                status: 'Loaded',
                script,
                src: script.src,
              });
            }
          };
        } else {
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({
              name,
              loaded: true,
              status: 'Loaded',
              script,
              src: script.src,
            });
          };
        }
        script.onerror = (error: any) => resolve({ name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

  public connect(CONFIG: { host: string; username: string; password: string }): any {
    return this._load('mqtt')
      .then((data) => {
        return mqtt.connect(CONFIG.host, {
          username: CONFIG.username,
          password: CONFIG.password,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
