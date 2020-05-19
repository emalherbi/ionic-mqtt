var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { JSUtilsService } from "./providers/jsutils-provider";
import { IonicModule } from "@ionic/angular";
var JSUtilsModule = /** @class */ (function () {
    function JSUtilsModule() {
    }
    JSUtilsModule_1 = JSUtilsModule;
    JSUtilsModule.forRoot = function () {
        return {
            ngModule: JSUtilsModule_1,
            providers: [JSUtilsService],
        };
    };
    var JSUtilsModule_1;
    JSUtilsModule = JSUtilsModule_1 = __decorate([
        NgModule({
            imports: [IonicModule],
            declarations: [],
            exports: [],
        })
    ], JSUtilsModule);
    return JSUtilsModule;
}());
export { JSUtilsModule };
//# sourceMappingURL=jsutils.module.js.map