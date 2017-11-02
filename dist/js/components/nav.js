System.register(["jquery", "../page-events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_events_1, init;
    return {
        setters: [
            function (_1) {
            },
            function (page_events_1_1) {
                page_events_1 = page_events_1_1;
            }
        ],
        execute: function () {
            init = function (selectors) {
                var $nav = $("." + selectors.nav);
                var $navContainer = $("." + selectors.container);
                var $mobileTrigger = $("." + selectors.mobile);
                var $buttons = $("." + selectors.nav + " ." + selectors.button);
                var classActive = selectors.button + "_active";
                var classExpanded = selectors.nav + "__container__is-expanded";
                $nav.on('click', function (event) {
                    event.preventDefault();
                    var $this = $(event.target);
                    if ($this.hasClass(selectors.button)) {
                        $buttons.removeClass(classActive);
                        $this.addClass(classActive);
                        page_events_1.emitter.emit('page-change', $this.html().toLowerCase());
                        $navContainer.removeClass(classExpanded);
                    }
                });
                $mobileTrigger.on('click', $mobileTrigger, function (event) {
                    event.preventDefault();
                    var $this = $(event.target);
                    $this.next().addClass(classExpanded);
                });
            };
            exports_1("init", init);
        }
    };
});
