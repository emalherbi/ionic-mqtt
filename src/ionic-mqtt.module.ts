import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { IonicMqttService } from './providers/ionic-mqtt.provider';

@NgModule({
  imports: [IonicModule],
  declarations: [],
  exports: [],
})
export class IonicMqttModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicMqttModule,
      providers: [IonicMqttService],
    };
  }
}
