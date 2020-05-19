import { NgModule, ModuleWithProviders } from "@angular/core";
import { MQTTService } from "./providers/mqtt-provider";
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
      providers: [MQTTService],
    };
  }
}
