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
                    var path = "/resources/" + type + "/" + name + "." + extension;
                    return new Promise(function (resolve, reject) {
                        $.get(path, function (data) {
                            resolve(data);
                        });
                    });
                };
                Fetch.prototype.template = function (name) {
                    return this.get(name, 'templates', 'hbs')
                        .then(function (template) {
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
