!function(){function e(r,i,u){"use strict";var s;return i=void 0!==i?i:20,u=void 0===u||u,function(){var e=this,t=arguments,n=function(){s=null,u||r.apply(e,t)},a=u&&!s;clearTimeout(s),s=setTimeout(n,i),a&&r.apply(e,t)}}function s(e,t){e.className.match("(?:^|\\s)"+t+"(?!\\S)")||(e.className+=" "+t)}function l(e,t){e.className=e.className.replace(new RegExp("(?:^|\\s)"+t+"(?!\\S)"),"")}function c(e,t){if(e.className.match("(?:^|\\s)"+t+"(?!\\S)"))return!0}function r(e){"use strict";var t=e.getAttribute("aria-expanded");t="true"===t?"false":"true",e.setAttribute("aria-expanded",t)}function n(e){"use strict";e.parentElement.className+=" off-canvas",e.parentElement.lastElementChild.className+=" expanded-true",r(e.previousSibling)}function a(e){"use strict";var t=m(e,".menu-item"),n=t.querySelector("a[aria-expanded]"),a=e.closest(".sub-menu");m(e,"ul").classList.contains("sub-menu")?(t.className=t.className.replace("off-canvas",""),a.className=a.className.replace("expanded-true","")):(t.className=t.className.replace("off-canvas",""),t.lastElementChild.className=t.lastElementChild.className.replace("expanded-true","")),r(n)}function m(e,t,n){for(var a=null;e;){if(e.matches(t)){a=e;break}if(n&&e.matches(n))break;e=e.parentElement}return a}function i(){"use strict";var e=document.querySelectorAll(":hover, :focus, :focus-within"),t;for(t=0;t<e.length;t++)e[t].blur()}function t(){document.addEventListener("touchstart",function(e){if(e.target.matches("a")){var t=e.target.getAttribute("href")?e.target.getAttribute("href"):"";"#"!==t&&""!==t?window.location=t:"#"===t&&e.target.nextSibling.matches(".submenu-expand")?n(e.target):e.preventDefault()}e.target.matches(".submenu-expand")?n(e.target):null!=m(e.target,".submenu-expand")&&m(e.target,".submenu-expand").matches(".submenu-expand")?n(m(e.target,".submenu-expand")):e.target.matches(".menu-item-link-return")?a(e.target):null!=m(e.target,".menu-item-link-return")&&m(e.target,".menu-item-link-return").matches(".menu-item-link-return")&&a(e.target),i()},!1),document.addEventListener("touchend",function(e){var t=m(e.target,".main-navigation");null!=t&&c(t,".main-navigation")&&e.preventDefault(),e.preventDefault(),i()},!1),document.addEventListener("focus",function(e){if(e.target.matches(".main-navigation > div > ul > li > a")){var t=m(e.target,"div"),n,a=(null===t.previousElementSibling?t.nextElementSibling:t.previousElementSibling).querySelector(".is-focused"),r="is-focused",i=e.target.parentNode.previousElementSibling,u=e.target.parentNode.nextElementSibling;null!==a&&null!==c(a,r)&&l(a,r),e.target.parentNode.querySelector(".main-navigation ul ul")&&s(e.target.parentNode,r),i&&c(i,r)&&l(i,r),u&&c(u,r)&&l(u,r)}},!0)}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector),document.addEventListener("DOMContentLoaded",function(){t()});var u=!1;window.addEventListener("resize",e(function(){u||(u=!0,setTimeout(function(){t(),u=!1},150))}))}();