System.register([],function(e,s){"use strict";var t;s&&s.id;return{setters:[],execute:function(){e("init",t=function(){var e=$("#email-form");e.on("submit",function(s){s.preventDefault();var t=$(s.target),i=t.next();return t.addClass("hidden"),i.removeClass("hidden"),new Promise(function(s,t){$.ajax({url:"https://formspree.io/haifischy91@gmail.com",method:"POST",data:e.serialize(),dataType:"json",success:function(e){s(e)},error:function(e){t(e)}})}).then(function(){i.addClass("hidden")}).then(function(e){$(".success").addClass("success__is-visible")}).catch(function(e){$(".error").addClass("error__is-visible")})})})}}});