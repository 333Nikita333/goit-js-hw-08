var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function E(e){return l=e,f=setTimeout(x,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=i}function x(){var e=d();if(S(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-u);return v?m(n,i-(e-l)):n}(e))}function O(e){return f=void 0,b&&r?y(e):(r=o=void 0,a)}function j(){var e=d(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return E(u);if(v)return f=setTimeout(x,t),y(u)}return void 0===f&&(f=setTimeout(x,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},j.flush=function(){return void 0===f?a:O(d())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector(".feedback-form input"),textareaEl:document.querySelector(".feedback-form textarea")};b.formEl.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),e.target.reset(),localStorage.removeItem("feedback-form-state")}));const y={email:"",message:""};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)b.inputEl.value=e.email,b.textareaEl.value=e.message}(),function(){b.textareaEl.value&&(y.message=b.textareaEl.value,localStorage.setItem("feedback-form-state",JSON.stringify(y)));b.inputEl.value&&(y.email=b.inputEl.value,localStorage.setItem("feedback-form-state",JSON.stringify(y)))}();
//# sourceMappingURL=03-feedback.a2fa2852.js.map
