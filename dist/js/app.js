System.register(["./components/nav", "./page-events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var nav, page_events_1;
    return {
        setters: [
            function (nav_1) {
                nav = nav_1;
            },
            function (page_events_1_1) {
                page_events_1 = page_events_1_1;
            }
        ],
        execute: function () {
            nav.init({
                nav: 'nav',
                mobile: 'nav__mobile',
                button: 'nav__button'
            });
            page_events_1.emitter.emit('page-change', 'home');
        }
    };
});
