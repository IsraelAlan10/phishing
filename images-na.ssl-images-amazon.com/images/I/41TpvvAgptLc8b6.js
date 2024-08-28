P.register("cvfVersion",function(){return{version:"0.1.0.0-2024-08-20"}});"use strict";
P.when("A","cvfFormDataGenerator","cvf-client-side-counters-util","ready").register("cvf-account-switcher",function(b,k,a){function n(a,d){a.preventDefault();var c=k.retrieveFormData(a.target),h=c.inputData.serializeArray();h.push(e(a.target));b.ajax(window.location.protocol+"//"+window.location.host+c.requestPath,{method:"POST",params:h,success:d,error:f})}function e(a){a=h(a);var b=a.attr("name");b||(b=a.closest(".cvf-account-switcher-sign-out-link").attr("data-name"));var d=a.attr("value");d||
(d=a.closest(".cvf-account-switcher-sign-out-link").attr("data-value"));return{name:b,value:d}}function f(a,d,c){b.trigger(p.error,c)}function c(a){var b=/([^@\s]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9._-]+)/ig.exec(a);if(null!==b){a=b[1];a=h.trim(a);var d=a.length;if(1!==d){for(var c=a.charAt(0),e=0;e<d-2;e++)c+="*";a=c+=a.charAt(d-1)}a+="@";c=b[2];c=h.trim(c);d=c.length;c=c.charAt(0);for(e=0;e<d-1;e++)c+="*";return a+c+b[3]}b=h.trim(a);a=b.length;if(!(4>=a)){d="";for(c=0;c<a-4;c++)d+="*";b=d+b.substr(a-
4,a-1)}return b}function d(){0===h(".cvf-account-switcher-check-mark:visible").length&&(h(".cvf-account-switcher-check-mark-area").remove(),h(".cvf-account-switcher-profile-details").toggleClass("cvf-account-switcher-profile-details cvf-account-switcher-profile-details-after-account-removed"))}function g(d){var c=new URLSearchParams(window.location.search);c.delete("switch_to_cid");c.has("errorCodes")||c.append("errorCodes","ACCOUNT_SWITCH_FAILED");a.addMetricCount(d);b.trigger(p.error,"automaticAccountSwitchFailure");
window.location.search=c}function r(){if(0!==h(".cvf-switch-to-cid").length)try{a.startMetricTimer(m.latency);var d=h(".cvf-switch-to-cid")[0].getAttribute("value");h(".cvf-automatic-switch-"+d)[0].click();setTimeout(function(){g(m.failureTimeout)},7E3);b.trigger(p.success,"automaticAccountSwitchSuccess");return!0}catch(t){g(m.failureClicking)}finally{a.endMetricTimer(m.latency)}return!1}var h=b.$,p={success:"cvf:account_switcher:success",error:"cvf:account_switcher:error"},m={latency:"AutomaticAccountSwitch_Latency",
failureClicking:"AutomaticAccountSwitch_FailureClicking",failureTimeout:"AutomaticAccountSwitch_FailureTimeout"};(function(){var a=h("#ap-account-switcher-container")[0],b=window.MutationObserver||window.WebKitMutationObserver;if(void 0!==a&&void 0!==b){var c=new b(function(a){for(var b=0;b<a.length;b++)if(null!==a[b].addedNodes){r()||d();c.disconnect();break}});c.observe(a,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}})();(function(){h(".cvf-account-switcher-sign-out-link").live("click",
function(a){n(a,function(e){if(e.redirectUrl)window.location=e.redirectUrl,b.trigger("cvf:account_switcher","redirectOnSignOut");else if(e.succeeded){var f="."+h(a.target).attr("class").match(/cvf-account-switcher-account-group-\w+/g)[0];h(f+"-hide").hide();h(f+"-name").text(h("#cvf-account-switcher-sign-out-replace-text").text());h(f+"-claim").text(c(h(f+"-claim").text()));h(f+"-image").replaceWith(h("\x3cdiv /\x3e").append(h("#cvf-account-switcher-sign-out-replace-image").clone().removeClass("cvf-hidden")).html());
h(f+"-button").removeClass("cvf-widget-btn-val cvf-widget-btn-verify-account-switcher");e=e.switchedAccountId;void 0!==e&&h(".cvf-account-switcher-account-group-"+e+"-check-mark").show();d();window.location.reload()}else b.trigger(p.error,e)})})})();return{automaticAccountSwitch:r}});"use strict";
P.when("A","cvfInputValidatorConfig","ready").register("cvfInputValidator",function(b,k){return{getValidationResult:function(a){var n=!0,e=[],f=[];k.forEach(function(c){var d=b.$(c.invalidFieldAlertSelector),g=b.$(c.emptyFieldAlertSelector);c=a.find(c.inputSelector);c[0].required&&!c.val().trim()?(n=!1,0<g.length?(e.push(g),0<d.length&&f.push(d)):0<d.length&&e.push(d)):(0<g.length&&f.push(g),g=c[0].checkValidity&&!c[0].checkValidity(),n=n&&!g,d.length&&(g?e.push(d):f.push(d)))});return{isValid:n,
activeAlerts:e,inactiveAlerts:f}}}});"use strict";P.when("A","ready").register("cvfInputValidatorConfig",function(b){return[{inputSelector:".cvf-widget-input-code",invalidFieldAlertSelector:".cvf-widget-invalid-code-alert",emptyFieldAlertSelector:".cvf-widget-empty-field-alert"}]});P.register("a-sheet-wrapper",function(){return null});"use strict";
P.when("A","cvfFormDataGenerator","ready").register("cvfCaptcha",function(b,k){b=b.$;0===b(".cvf-widget-input-captcha").children("input").length?(b(".cvf-widget-input-captcha").attr("autocapitalize","off"),b(".cvf-widget-input-captcha").attr("autocorrect","off")):(b(".cvf-widget-input-captcha").children("input").attr("autocapitalize","off"),b(".cvf-widget-input-captcha").children("input").attr("autocorrect","off"))});"use strict";
P.when("A").register("cvf-client-side-counters-util",function(b){function k(a,b){var e=window.ue;e&&"function"===typeof e.count&&(b||(b=(e.count(a)||0)+1),e.count(a,b))}return{incrementCounter:function(a){k(a)},insertCounter:k,addMetricCount:function(a){window.ue&&"function"===typeof window.ue.count&&window.ue.count(a,1)},startMetricTimer:function(a){window.uet&&"function"===typeof window.uet&&window.uet("bb",a,{wb:1})},endMetricTimer:function(a){window.uex&&"function"===typeof window.uex&&window.uex("ld",
a,{wb:1})}}});
P.when("A","3p-promise","a-alert","codeResendTimer","cvf-client-side-counters-util","sms-retriever-handler","ready").execute("client-sms-request-controller",function(b,k,a,n,e,f){function c(){b.show("#cvf-otp-autoread-progress");e.incrementCounter(u.SHOW_AUTOREAD_WIDGET);var a=d();x.delegate("#cvf-input-code","input",function(){clearTimeout(a);b.hide("#cvf-otp-autoread-progress");var d=m("#cvf-auto-read-status");d.val()!==t.AUTOREAD_TIMEOUT&&d.val()!==t.AUTOREAD_SUCCESS&&(e.incrementCounter(u.CANCEL_AUTOREAD_WIDGET),d.val(t.AUTOREAD_CANCELLED))})}
function d(){return setTimeout(function(){var d=m("#cvf-auto-read-status");b.hide("#cvf-otp-autoread-progress");e.incrementCounter(u.AUTOREAD_WIDGET_TIMEOUT);d.val(t.AUTOREAD_TIMEOUT);a("#cvf-otp-autoread-timeout").show()},3E4)}function g(a){y=a;a=m("#cvf-auto-read-status");l&&a.val()!==t.AUTOREAD_TIMEOUT&&a.val()!==t.AUTOREAD_CANCELLED&&(a=y,m("#cvf-auto-read-status").val(t.AUTOREAD_SUCCESS),m("#cvf-input-code").val(a).trigger("input"),b.show("#cvf-otp-autoread-success"),x.submit())}function r(a){n.createTimer(Number(a.timeRemaining),
m("#resend-timer-message-id").val(),m("#resend-timer-complete-id").val().replace(/"/g,""),"timer","timer",!1);a=m("#wait-resend-auto-read");a.submit(function(a){a.preventDefault()});m(".wait-one-minute-continue").click(function(){z.location.reload()});a.removeClass("aok-hidden");x.addClass("aok-hidden")}function h(){a("#otp-request-failed-alert").show();m("#cvf-input-code").attr("disabled","disabled").addClass("a-form-disabled");m("#cvf-submit-otp-button").addClass("a-button-disabled");m("#cvf-resend-link").unbind().click(function(){z.location.reload()})}
function p(a){b.get(a,{success:function(a){a.wait?(e.incrementCounter(u.WAIT_RESEND),r(a)):a.redirect?(e.incrementCounter(u.REDIRECT),z.location.replace(a.redirect)):(a=a.smsFormat)?(e.incrementCounter(u.RECEIVED_FORMAT+":"+a),"androidAutoReadSmsWithAppHash"===a&&(l=!0,c(),y&&g(y))):(e.incrementCounter(u.FORMAT_NOT_RECEIVED),console.error("Failed to receive sms format"))},error:function(a,b,d){e.incrementCounter(u.AJAX_SMS_REQUEST_FAILED+":"+d);h();console.error("Ajax request failed",d)}})}var m=
b.$,z=this;f=[f];var t=Object.freeze({AUTOREAD_SUCCESS:"autoreadWidgetSuccess",AUTOREAD_CANCELLED:"autoreadWidgetCancelled",AUTOREAD_TIMEOUT:"autoreadWidgetTimeout"}),u=Object.freeze({SHOW_AUTOREAD_WIDGET:"OTPAutoReadShowWidget",CANCEL_AUTOREAD_WIDGET:"OTPAutoReadCanceWidgetForManualInput",AUTOREAD_WIDGET_TIMEOUT:"OTPAutoReadWidgetTimeout",RECEIVED_FORMAT:"OTPAutoReadReceivedFormat",FORMAT_NOT_RECEIVED:"OTPAutoReadFormatNotReceived",REDIRECT:"OTPAutoReadClientRedirect",AJAX_SMS_REQUEST_FAILED:"OTPAutoReadAjaxSmsRequestFailed",
WAIT_RESEND:"OTPAutoReadWaitResend"}),w=b.state("autoReadAttrs");if(w&&w.isClientDrivenOtpSendingEnabled){var A=w.arbParam;if(A){var x=m("#verification-code-form");if(0!==x.length){var y=null,l=!1;b.capabilities.android?(f=f.map(function(a){return a.isEnabled().then(function(b){return b?a.registerListener(g).then(function(a){return a}):{}})}),k.all(f).then(function(a){var b=[],d={};a.forEach(function(a){a.handlerCapability&&b.push(a.handlerCapability);a.handlerQueryParams&&m.extend(d,a.handlerQueryParams)});
a={arb:A,mode:"page_ajax",sendClientDrivenOtp:!0,capabilities:b.join()};m.extend(a,d);a=z.location.origin+"/ap/cvf/request?"+m.param(a);p(a)})):(k=z.location.origin+"/ap/cvf/request?"+m.param({arb:A,mode:"page_ajax",sendClientDrivenOtp:!0}),p(k))}}}});"use strict";
P.when("A","ready").register("codeResendTimer",function(b){function k(k,e,f,c,d,g){var n=(new Date).getTime();g&&(clearInterval(a),window.localStorage.removeItem("icaCVFTimeId"));a=setInterval(function(){var h=(new Date).getTime()-n,p=k-h;g&&window.localStorage.setItem("icaCVFTimeId",p);0>=p?(clearInterval(a),g&&window.localStorage.removeItem("icaCVFTimeId"),g?(b.$("#"+c).hide(),b.$("#"+d).show()):b.$("#"+d).html(f)):(h=e.split(" +timeleft+ "),g?(p=(new Date(p)).toISOString().slice(14,19),h=h[0].split('"').join("")+
p+h[1].split('"').join("")):h=h[0].split('"').join("")+Math.floor(p/1E3)+h[1].split('"').join(""),b.$("#"+c).html(h))},100)}var a;return{createTimer:function(a,b,f,c,d,g){return new k(a,b,f,c,d,g)},showTimer:function(){b.$("#cvf-resend-link").hide();b.$("#cvf-resend-text").removeClass("cvf-hidden")}}});"use strict";
P.when("A","cvfFormDataGenerator","ready").execute(function(b,k){var a=b.$;a(".cvf-widget-btn-val").click(function(b){var e=a(b.target).closest(".cvf-widget-form");b=k.getNameValue(a(b.target));e.append('\x3cinput type\x3d"hidden" name\x3d"'+b.name+'" value\x3d"'+b.value+'"\x3e').submit()})});"use strict";
P.when("A","cvfVersion","cvfFormDataGenerator","cvfInputValidator","ready").register("cvf",function(b,k,a,n){function e(e){function h(a){"string"===typeof l.options.widgetMetricsScope&&"function"===typeof window.uet&&window.uex("ld",l.options.widgetMetricsScope,{wb:1});l.options.spinnerTarget&&l.options.spinnerTarget.hide();if(a.hasOwnProperty("error"))b.trigger(v.error,a.error);else if(a.redirectUrl)window.location=a.redirectUrl;else if(a.redirect){b.trigger(v.success,a.token,a.status,a.redirect);
if(l.options.showICALoadingAnimationOnSuccess){var d=c("#in-context-auth-loading-animation").prop("outerHTML");q.html(d)}l.options.autoDestroy?l.destroy():(c(".cvf-widget-alert").hide(),a.status?c(".cvf-widget-status-success").show():c(".cvf-widget-status-error").show(),y());b.trigger("cvf:verification:complete",a.status);q.find(".cvf-widget-btn").unbind("click",f);q.find(".cvf-widget-btn-val").unbind("click",f);b.off(v.success);b.off(v.error);b.off(v.content)}else q.html(a.replace(/<form/g,"\x3cdiv").replace(/<\/form/g,
"\x3c/div")),d=c(".cvf-widget-form-keep").clone().empty(),a=c(".cvf-widget-form-keep").children().clone(!0,!0),d=(new String(d.prop("outerHTML"))).replace(/<div/g,"\x3cform").replace(/<\/div/g,"\x3c/form"),c(".cvf-widget-form-keep").replaceWith(d),c(".cvf-widget-form-keep").html(a),w(),b.trigger(v.content)}function f(d,e,f){d.preventDefault();c(".cvf-widget-alert").hide();l.options.spinnerTarget&&l.options.spinnerTarget.show();var g=a.retrieveFormData(d.target,f);if(r()){if(l.options.showICAClaimUIOnClickChangeLink){l.options.showICAClaimUIOnClickChangeLink=
!1;l.options.spinnerTarget&&l.options.spinnerTarget.hide();d=c("#change-signin-claim-link-id").val();b.ajax(d,{method:"GET",dataType:"html",success:function(a){b.trigger("in-context-auth-content-update-event",a)},error:function(){c("#cvf-change-contact-link").hide();console.error("AJAX request to /ax/claim/ica failed.",this.error)}});return}if(f)q.find(".cvf-widget-input").removeClass("cvf-widget-input-error");else if(f=n.getValidationResult(g.form),f.inactiveAlerts.forEach(function(a){a.hide()}),
f.activeAlerts.forEach(function(a){a.show()}),f.isValid)q.find(".cvf-widget-input").removeClass("cvf-widget-input-error");else{l.options.spinnerTarget&&l.options.spinnerTarget.hide();q.find(".cvf-widget-input").addClass("cvf-widget-input-error");t();u();return}}f=g.inputData.serializeArray();e&&f.push(a.getNameValue(d.target));b.ajax(B+g.requestPath,{method:"POST",params:f,success:h,error:x})}function m(a){13===a.keyCode&&f(a)}function r(){return 0<q.find('input[name\x3d"is_in_context_auth"]').length}
function t(){q.find('input[name\x3d"code"]').focus()}function u(){q.find('input[name\x3d"code"]').keypress(m)}function w(){q.find(".cvf-widget-btn").click(function(a){f(a,!1)});q.find(".cvf-widget-btn-val").click(function(a){f(a,!0)});r()||t();u();q.find(".cvf-widget-v2-link-resend").click(function(a){f(a,!1,!0)});q.find("#cvf-signin-with-password").click(function(a){a.preventDefault();q.find("#cvf-signin-with-password-instead-form").submit()});q.find(".cvf-widget-v2-change-contact-link").click(function(a){l.options.showICAClaimUIOnClickChangeLink=
!0;f(a,!1)})}function A(a){return function(d,c,e){"timeout"!==c||3<=C?b.trigger(v.error,e):b.delay(a,10*C++)}}function x(a,d,c){l.options.spinnerTarget&&l.options.spinnerTarget.hide();b.trigger(v.error,c)}function y(){c.each(q.find("input"),function(a,b){a=c(b);a.attr("disabled","disabled");a.hasClass("a-input-text")?a.addClass("a-form-disabled"):a.hasClass("a-button-input")?a.closest(".a-button").addClass("a-button-disabled"):a.closest(".a-input-text-wrapper").length&&a.closest(".a-input-text-wrapper").addClass("a-form-disabled")});
c.each(q.find("a"),function(a,b){a=c(b);a.hasClass("cvf-widget-link-disable-target")&&a.addClass("cvf-link-disabled")})}var l=this;g++;var v={success:"cvf:"+g+":success",error:"cvf:"+g+":error",content:"cvf:"+g+":content"};l.options={};c.extend(l.options,d,e);(function(a){if(1!==c(a.target).length)throw Error("The CVF widget requires a unique element.");if(!c.isFunction(a.onSuccess))throw Error("The CVF widget requires a success callback function.");if(!c.isFunction(a.onError))throw Error("The CVF widget requires an error callback function.");
})(l.options);var B=l.options.server,q=c(l.options.target);b.on(v.success,l.options.onSuccess);b.on(v.error,l.options.onError);b.on(v.content,l.options.onContent);l.start=function(){var a=B+"/ap/cvf/request.embed",d=l.options.requestToken,e=l.options.requestArbToken,f=l.options.associationHandle,g=l.options.language,n=0===c.trim(d).length,m=0===c.trim(e).length;if(n&&m)throw Error("The CVF widget requires a request token or arb token.");n=0!==c.trim(f).length;var r=0!==c.trim(g).length,p={};m?p.requestToken=
d:p.arb=e;p.CVFVersion=k.version;p.AUIVersion=P.AUI_BUILD_DATE;r&&(p.language=g);n&&(p["openid.assoc_handle"]=f);"string"===typeof l.options.widgetMetricsScope&&"function"===typeof window.uet&&window.uet("bb",l.options.widgetMetricsScope,{wb:1});b.ajax(a,{method:"GET",params:p,success:h,error:A(l.start)})};l.destroy=function(){q.html("")};w();var C=0;l.options.autoStart&&l.start()}function f(a){return new e(a)}var c=b.$,d={server:"",target:void 0,requestToken:void 0,requestArbToken:void 0,onSuccess:void 0,
onError:void 0,onContent:function(){},spinnerTarget:void 0,autoStart:!0,autoDestroy:!0,widgetMetricsScope:void 0,associationHandle:void 0,language:void 0,showICALoadingAnimationOnSuccess:!1,showICAClaimUIOnClickChangeLink:!1},g=0;b.on("cvf:verification:request",function(a){var d=c("#"+a),e=d.data("token"),g=d.data("spinnerId");g=c("#"+g);f({target:d,spinnerTarget:g,requestToken:e,onSuccess:function(d,c,e){b.trigger("cvf:verification:complete:"+a,d,c,e)},onError:function(d){b.trigger("cvf:verification:error:"+
a,d)},autoStart:!0,autoDestroy:!1})});return{create:f}});"use strict";
P.when("A","ready").register("cvfFormDataGenerator",function(b){var k=b.$;return{retrieveFormData:function(a,b){a=k(a).closest(".cvf-widget-form");b&&(a=k(".cvf-widget-form-resend"));return{requestPath:a.data("use-only-form-action")?a.attr("action"):"/ap/cvf/"+a.attr("action")+".embed",inputData:a.find(".cvf-widget-input,.cvf-widget-hidden-fields,.cvf-widget-input :input"),form:a}},getNameValue:function(a){a=k(a);var b=a.attr("name");b||(b=a.closest(".cvf-widget-btn-val").attr("data-name"));var e=
a.attr("value");e||(e=a.closest(".cvf-widget-btn-val").attr("data-value"));return{name:b,value:e}}}});"use strict";
P.when("A","cvf","ready").execute(function(b,k){var a=b.$;a(document).ready(function(){function b(a,b,d){window.location=d;console.log("Client Side: "+a)}function e(a){console.log(a)}var f=a(".cvf-widget-spinner"),c=a("#cvf-widget-content");if(1===c.length){var d=a('[name\x3d"requestToken"]').first().attr("value");k.create({target:c,spinnerTarget:f,requestToken:d,onSuccess:b,onError:e,autoStart:!1})}})});"use strict";
P.when("A","ready").register("phoneFormField",function(b){function k(){a:{for(var b=a("select[name\x3d'cvf_phone_cc']").val()||"",c=0;c<e.length;c++){var d=e[c];if(b.toUpperCase()===d){a("#mobileClaimDisclosureMessageV2").removeClass("a-hidden aok-hidden").show();a("#mobileClaimDisclosureMessage").addClass("aok-hidden").hide();a("#mobileClaimDisclosureMessageRelaxed").addClass("aok-hidden").hide();break a}}for(c=0;c<n.length;c++)if(d=n[c],b.toUpperCase()===d){a("#mobileClaimDisclosureMessage").removeClass("a-hidden aok-hidden").show();
a("#mobileClaimDisclosureMessageV2").addClass("aok-hidden").hide();a("#mobileClaimDisclosureMessageRelaxed").addClass("aok-hidden").hide();break a}a("#mobileClaimDisclosureMessageRelaxed").removeClass("a-hidden aok-hidden").show();a("#mobileClaimDisclosureMessage").addClass("aok-hidden").hide();a("#mobileClaimDisclosureMessageV2").addClass("aok-hidden").hide()}}var a=b.$,n=["CA","FR"],e=["US"];0<a("select[name\x3d'cvf_phone_cc']").length&&0<a("#mobileClaimDisclosureMessage").length&&0<a("#mobileClaimDisclosureMessageRelaxed").length&&
0<a("#mobileClaimDisclosureMessageV2").length&&(k(),a("select[name\x3d'cvf_phone_cc']").change(k))});"use strict";P.when("A","ready").execute(function(b){function k(a){var b=a.value.match(n);b&&1===b.length?a.setAttribute("aria-invalid","false"):a.setAttribute("aria-invalid","true")}function a(a){a.addEventListener("change",function(b){k(a)})}var n=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;b=b.$("input[id\x3d'cvfEmail']");b.length&&(a(b[0]),k(b[0]))});"use strict";
P.when("A").execute(function(b){b.declarative("auth-popup","click",function(b){var a=b.data;b=b.$target.closest("a")[0];(a=window.open(b.href,b.target,a.windowOptions))&&a.focus()})});P.register("android-sms-otp-parser",function(){return{parseOtpCode:function(b){if(b&&(b=b.match(/(([\s\S]*[^0-9])|(^))([0-9]{4,6})[^0-9][\s\S]*[a-zA-Z0-9+\\\/]{11}/)||[],0<b.length))return b[4]}}});
P.when("A","mobile-auth-platform","3p-promise","android-sms-otp-parser","cvf-client-side-counters-util","ready").register("sms-retriever-handler",function(b,k,a,n,e){function f(a){(g=a.isSupported)?e.incrementCounter(d.ENABLED):e.incrementCounter(d.DISABLED);r={appHash:a.appHash}}function c(){return new a(function(a){r?a(r):k.isSmsRetrieverEnabled(function(b){f(b);a(r)})})}var d=Object.freeze({ENABLED:"SmsRetrieverEnabled",DISABLED:"SmsRetrieverDisabled",SMS_LISTENER_FAILED:"SmsRetrieverListenerFailedToRegister",
RECEIVED_INVALID_SMS:"SmsRetrieverListenerReceivedInvalidSms",RECEIVED_VALID_SMS:"SmsRetrieverListenerReceivedValidSms"}),g=null,r=null;return{isEnabled:function(){return new a(function(a){null!==g?a(g):k.isSmsRetrieverEnabled(function(b){f(b);a(g)})})},registerListener:function(b){return new a(function(a){k.registerMAPSmsReceiver(function(a){a.isRegistered?(a=n.parseOtpCode(a.sms))?(e.incrementCounter(d.RECEIVED_VALID_SMS),b(a)):e.incrementCounter(d.RECEIVED_INVALID_SMS):e.incrementCounter(d.SMS_LISTENER_FAILED)});
c().then(function(b){g?a({handlerCapability:"smsRetriever",handlerQueryParams:b}):a({})})})}}});"use strict";
P.when("A","a-spinner","ready").execute(function(b,k){function a(){f(".otp-input-box").attr("disabled","disabled");f("input[name\x3d'code']").val(n());(null!==f(".otp-input-box-container").data("isembed")?f(".otp-input-box-container").data("isembed"):1)?f(".cvf-widget-btn-verify").click():(b.capabilities.isAmazonApp||k("#otp-input-spinner").show(),f("#verification-code-form").submit())}function n(){var a="";f("input[name^\x3dotc]").each(function(b){a+=f(this).val()});return a}function e(){f(".cvf-widget-alert").is(":visible")&&
(f(".otp-input-box").removeClass("otp-input-box-alert"),f(".cvf-widget-alert").hide())}var f=b.$,c=/^\d+$/;b.declarative("otp-inputbox-handler","focusin",function(a){a=a.$target;a.is(".otp-input-box")&&(a.attr("name").match("otc-1")||""===a.prev().val()&&a.prev().focus())});b.declarative("otp-inputbox-handler","keyup",function(b){var d=b.$event;b=b.$target;b.is(".otp-input-box")&&(d=d.which||d.keyCode,-1===[16,9,224,18,17].indexOf(d))&&(-1!==[8,37,46].indexOf(d)?b.prev()&&!b.attr("name").match("otc-1")&&
(b.val(""),b.prev().select()):c.test(b.val())?b.attr("name").match("otc-6")?a():b.next()&&(e(),b.next().select()):b.val(""))});f(".otp-input-box").live("input",function(b){b=f(b.target);var d=b.val();e();if(1!==d.length)for(var c=0;c<d.length;c++){b.val(d.charAt(c));if(b.attr("name").match("otc-6")){a();break}b=b.next();b.focus()}});b.declarative("otp-inputbox-handler","click",function(){f("input[name^\x3dotc]").each(function(a){""===f(this).val()&&f(this).focus()})})});
P.when("A","ready").execute(function(b){function k(){var b=parseInt(a("input#clickCountHidden").val());0===parseInt(a("input#clickCountHidden").val())&&a("#clickCreationTimeHidden").val(Date.now());a("input#clickCountHidden").val(b+1);var e=parseInt(a("input#clickCreationTimeHidden").val());e=Date.now()-e;4<=b||15E3<e?(a("#defaultAlert").css("display","none"),a("#notReceivedWarningAlert").css("display","none"),a("#notReceivedErrorAlert").css("display","block")):(a("#defaultAlert").css("display","none"),
a("#notReceivedWarningAlert").css("display","block"),a("#notReceivedErrorAlert").css("display","none"))}var a=b.$;b.declarative("incoming-sms-action","click",function(b){b=a("#marketplaceIdHidden").val();var e=a("#amazonAPIAjaxEndpointHidden").val(),f=a("#codeHandleHidden").val(),c=document.querySelector('meta[name\x3d"encrypted-slate-token"]');c=c?c.content:c;a.ajax({url:function(a,b,c){return"https://{apiEndpoint}/custom/authxprivateapicontracts/marketplaces/{marketplaceId}/challenge/two-way-sms/otp-code-transaction-status?codeHandle\x3d{codeHandle}".replaceAll("{apiEndpoint}",
a).replaceAll("{marketplaceId}",b).replaceAll("{codeHandle}",c)}(e,b,f),type:"GET",headers:{"Accept-Language":"en-US",Accept:'application/vnd.com.amazon.api+json; type\x3d"aapi.authxprivateapicontracts.custom.authx.two-way-sms.otp-code-transaction-status.response/v1"',"X-API-CSRF-TOKEN":a("#aapiCsrfTokenHidden").val(),"x-amzn-encrypted-slate-token":c},xhrFields:{withCredentials:!0},success:function(b){b=b.entity.status;"IncomingSMSValidated"===b||"OutgoingNotificationSent"===b?a("#two-way-sms-one").submit():
k()},error:function(a){k()}})})});