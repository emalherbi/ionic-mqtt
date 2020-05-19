var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
var JSUtilsService = /** @class */ (function () {
    function JSUtilsService() {
        var _this = this;
        this.scripts = {};
        [
            {
                name: "mqtt",
                src: "https://unpkg.com/mqtt/dist/mqtt.min.js",
            },
        ].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    JSUtilsService.prototype._load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this._script(script)); });
        return Promise.all(promises);
    };
    JSUtilsService.prototype._script = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.scripts[name].loaded) {
                resolve({ name: name, loaded: true, status: "Already Loaded" });
            }
            else {
                var script_1 = document.createElement("script");
                script_1.type = "text/javascript";
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    // IE
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" ||
                            script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({
                                name: name,
                                loaded: true,
                                status: "Loaded",
                                script: script_1,
                                src: script_1.src,
                            });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({
                            name: name,
                            loaded: true,
                            status: "Loaded",
                            script: script_1,
                            src: script_1.src,
                        });
                    };
                }
                script_1.onerror = function (error) {
                    return resolve({ name: name, loaded: false, status: "Loaded" });
                };
                document.getElementsByTagName("head")[0].appendChild(script_1);
            }
        });
    };
    JSUtilsService.prototype.load = function (name) {
        return this._load(name)
            .then(function (data) {
            console.log(data);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    JSUtilsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], JSUtilsService);
    return JSUtilsService;
}());
export { JSUtilsService };
//# sourceMappingURL=jsutils-provider.js.map