var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { JSUtilsService } from "./providers/jsutils-provider";
import { IonicModule } from "@ionic/angular";
var IonicMqttModule = /** @class */ (function () {
    function IonicMqttModule() {
    }
    IonicMqttModule_1 = IonicMqttModule;
    IonicMqttModule.forRoot = function () {
        return {
            ngModule: IonicMqttModule_1,
            providers: [JSUtilsService],
        };
    };
    var IonicMqttModule_1;
    IonicMqttModule = IonicMqttModule_1 = __decorate([
        NgModule({
            imports: [IonicModule],
            declarations: [],
            exports: [],
        })
    ], IonicMqttModule);
    return IonicMqttModule;
}());
export { IonicMqttModule };
//# sourceMappingURL=mqtt.module.js.map