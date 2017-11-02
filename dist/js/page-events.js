System.register(["./utils/event-emitter", "./utils/fetch"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var event_emitter_1, fetch_1, emitter, fetch, $context;
    return {
        setters: [
            function (event_emitter_1_1) {
                event_emitter_1 = event_emitter_1_1;
            },
            function (fetch_1_1) {
                fetch_1 = fetch_1_1;
            }
        ],
        execute: function () {
            emitter = new event_emitter_1.MyEventEmitter();
            exports_1("emitter", emitter);
            fetch = new fetch_1.Fetch();
            $context = $('.content');
            emitter.on('page-change', function (page) {
                var template;
                $("#" + page).addClass('nav__button_active');
                return fetch.template(page)
                    .then(function (output) {
                    template = output;
                    return fetch.content(page);
                })
                    .then(function (output) {
                    $context.html(template(output));
                });
            });
            emitter.on('language-change', function (language) {
            });
        }
    };
});
