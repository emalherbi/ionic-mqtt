import { NgModule, ModuleWithProviders } from "@angular/core";
import { IonicMqttService } from "./providers/ionic-mqtt.provider";
import { IonicModule } from "@ionic/angular";

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
