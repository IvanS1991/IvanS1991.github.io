System.register(["jquery","../page-events"],function(t,e){"use strict";var c;e&&e.id;return{setters:[function(t){},function(t){c=t}],execute:function(){t("init",function(n){var t=$("."+n.nav),a=$("."+n.container),e=$("."+n.mobile),i=$("."+n.langSwitch),o=$("."+n.nav+" ."+n.button),r=n.button+"_active",s=n.nav+"__container__is-expanded";t.on("click",function(t){t.preventDefault();var t=$(t.target),e=t.attr("data-page");t.hasClass(n.button)&&(c.emitter.emit("page-change",e),o.removeClass(r),t.addClass(r),a.removeClass(s),sessionStorage.setItem("currentPage",e))}),e.on("click",function(t){t.preventDefault(),$(t.target).next().toggleClass(s)}),i.on("click",function(t){t.preventDefault();t=$(t.target);console.log(t)})})}}});