System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyEventEmitter;
    return {
        setters: [],
        execute: function () {
            MyEventEmitter = /** @class */ (function () {
                function MyEventEmitter() {
                    this.registry = {};
                }
                MyEventEmitter.prototype.on = function (event, callback) {
                    if (!this.registry[event]) {
                        this.registry[event] = callback;
                    }
                };
                MyEventEmitter.prototype.emit = function (event, value) {
                    this.registry[event](value);
                };
                return MyEventEmitter;
            }());
            exports_1("MyEventEmitter", MyEventEmitter);
        }
    };
});
