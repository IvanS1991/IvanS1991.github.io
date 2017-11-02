System.register(["handlebars"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var handlebars_1, Fetch;
    return {
        setters: [
            function (handlebars_1_1) {
                handlebars_1 = handlebars_1_1;
            }
        ],
        execute: function () {
            Fetch = /** @class */ (function () {
                function Fetch() {
                    this.templateRegistry = {};
                    this.contentRegistry = {};
                }
                Fetch.prototype.get = function (name, type, extension) {
                    var _this = this;
                    var path = "/resources/" + type + "/" + name + "." + extension;
                    return new Promise(function (resolve, reject) {
                        if (type === 'templates' && _this.templateRegistry[name]) {
                            return resolve(_this.templateRegistry[name]);
                        }
                        if (type === 'content' && _this.contentRegistry[name]) {
                            return resolve(_this.contentRegistry[name]);
                        }
                        $.get(path, function (data) {
                            resolve(data);
                        });
                    });
                };
                Fetch.prototype.template = function (name) {
                    var _this = this;
                    return this.get(name, 'templates', 'hbs')
                        .then(function (template) {
                        if (!_this.templateRegistry[name]) {
                            _this.templateRegistry[name];
                        }
                        return handlebars_1.default.compile(template);
                    });
                };
                Fetch.prototype.content = function (name) {
                    return this.get(name, 'content', 'json');
                };
                return Fetch;
            }());
            exports_1("Fetch", Fetch);
        }
    };
});
