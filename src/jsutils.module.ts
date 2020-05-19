import { NgModule, ModuleWithProviders } from "@angular/core";
import { JSUtilsService } from "./providers/jsutils-provider";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [IonicModule],
  declarations: [],
  exports: [],
})
export class JSUtilsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JSUtilsModule,
      providers: [JSUtilsService],
    };
  }
}
