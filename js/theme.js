function custom_slide() { new fullpage(".Slider_custom", { afterRender: function() { $(window).scrollTop() < 1 ? ($("html").addClass("fixedHtml"), fullpage_api.setAllowScrolling(!0, "down")) : fullpage_api.setAllowScrolling(!1, "down") }, navigation: !0, navigationPosition: "right", normalScrollElements: ".scrollable-content", onLeave: function(e, t, n) { "down" === n && ($(t.item).prev().addClass("passed"), !0 === t.isLast && ($("html").removeClass("fixedHtml"), $(window).unbind("scroll"), window.matchMedia("(pointer: coarse)").matches && ($("html").removeClass("fp-enabled"), fullpage_api.destroy()))), "up" === n && $(t.item).removeClass("passed"), scroll_() } }) }

function scroll_() { let t = !1;
    $(window).scroll(function() { var e = $(window).scrollTop();
        100 < e && fullpage_api.setAllowScrolling(!1, "up"), e < 1 && (fullpage_api.setAllowScrolling(!0, "up"), fullpage_api.setAllowScrolling(!0, "down"), $("html").addClass("fixedHtml"), window.matchMedia("(pointer: coarse)").matches && !1 === t && (custom_slide(), t = !0)) }) }! function(e, t, n, o) { "function" == typeof define && define.amd ? define(function() { return e.fullpage = o(t, n), e.fullpage }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n) }(this, window, document, function(Rt, Nt) { "use strict"; var zt = "fullpage-wrapper",
        jt = "." + zt,
        Pt = "fp-responsive",
        _t = "fp-notransition",
        Dt = "fp-destroyed",
        $t = "fp-enabled",
        Vt = "fp-viewing",
        Wt = "active",
        Yt = "." + Wt,
        Ft = "fp-completely",
        Ut = "fp-section",
        Xt = "." + Ut,
        Kt = Xt + Yt,
        qt = "fp-tableCell",
        Qt = "." + qt,
        Gt = "fp-auto-height",
        Jt = "fp-normal-scroll",
        Zt = "fp-nav",
        en = "#" + Zt,
        tn = "fp-tooltip",
        nn = "fp-slide",
        on = "." + nn,
        rn = on + Yt,
        ln = "fp-slides",
        an = "." + ln,
        sn = "fp-slidesContainer",
        cn = "." + sn,
        un = "fp-table",
        fn = "fp-slidesNav",
        dn = "." + fn,
        pn = dn + " a",
        e = "fp-controlArrow",
        vn = "." + e,
        hn = "fp-prev",
        gn = vn + ".fp-prev",
        mn = vn + ".fp-next";

    function wn(e, t) { Rt.console && Rt.console[e] && Rt.console[e]("fullPage: " + t) }

    function Sn(e, t) { return (t = 1 < arguments.length ? t : Nt) ? t.querySelectorAll(e) : null }

    function bn(e) { e = e || {}; for (var t = 1, n = arguments.length; t < n; ++t) { var o = arguments[t]; if (o)
                for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = bn(e[r], o[r])) } return e }

    function yn(e, t) { return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)) }

    function En() { return "innerHeight" in Rt ? Rt.innerHeight : Nt.documentElement.offsetHeight }

    function Ln() { return Rt.innerWidth }

    function xn(e, t) { for (var n in e = l(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) e[o].style[n] = t[n]; return e }

    function n(e, t, n) { for (var o = e[n]; o && !Xn(o, t);) o = o[n]; return o }

    function An(e, t) { return n(e, t, "previousElementSibling") }

    function Tn(e, t) { return n(e, t, "nextElementSibling") }

    function kn(e) { return e.previousElementSibling }

    function On(e) { return e.nextElementSibling }

    function Mn(e) { return e[e.length - 1] }

    function Cn(e, t) { e = i(e) ? e[0] : e; for (var n = null != t ? Sn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) { if (n[r] == e) return o;
            1 == n[r].nodeType && o++ } return -1 }

    function l(e) { return i(e) ? e : [e] }

    function Hn(e) { e = l(e); for (var t = 0; t < e.length; t++) e[t].style.display = "none"; return e }

    function In(e) { e = l(e); for (var t = 0; t < e.length; t++) e[t].style.display = "block"; return e }

    function i(e) { return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e) }

    function Bn(e, t) { e = l(e); for (var n = 0; n < e.length; n++) { var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t } return e }

    function Rn(e, t) { e = l(e); for (var n = t.split(" "), o = 0; o < n.length; o++) { t = n[o]; for (var r = 0; r < e.length; r++) { var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ") } } return e }

    function Nn(e, t) { t.appendChild(e) }

    function o(e, t, n) { var o;
        t = t || Nt.createElement("div"); for (var r = 0; r < e.length; r++) { var i = e[r];
            (!n || r) && n || (o = t.cloneNode(!0), i.parentNode.insertBefore(o, i)), o.appendChild(i) } return e }

    function zn(e, t) { o(e, t, !0) }

    function jn(e, t) { for ("string" == typeof t && (t = qn(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild) }

    function Pn(e) { for (var t = Nt.createDocumentFragment(); e.firstChild;) t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e) }

    function _n(e, t) { return e && 1 === e.nodeType ? Xn(e, t) ? e : _n(e.parentNode, t) : null }

    function Dn(e, t) { r(e, e.nextSibling, t) }

    function $n(e, t) { r(e, e, t) }

    function r(e, t, n) { i(n) || ("string" == typeof n && (n = qn(n)), n = [n]); for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t) }

    function Vn() { var e = Nt.documentElement; return (Rt.pageYOffset || e.scrollTop) - (e.clientTop || 0) }

    function Wn(t) { return Array.prototype.filter.call(t.parentNode.children, function(e) { return e !== t }) }

    function Yn(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

    function Fn(e) { if ("function" == typeof e) return !0;
        e = Object.prototype.toString(e); return "[object Function]" === e || "[object GeneratorFunction]" === e }

    function Un(e, t, n) { var o;
        n = void 0 === n ? {} : n, "function" == typeof Rt.CustomEvent ? o = new CustomEvent(t, { detail: n }) : (o = Nt.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o) }

    function Xn(e, t) { return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t) }

    function Kn(e, t) { if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none"; return e }

    function qn(e) { var t = Nt.createElement("div"); return t.innerHTML = e.trim(), t.firstChild }

    function Qn(e) { e = l(e); for (var t = 0; t < e.length; t++) { var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n) } }

    function a(e, t, n) { for (var o = e[n], r = []; o;) !Xn(o, t) && null != t || r.push(o), o = o[n]; return r }

    function Gn(e, t) { return a(e, t, "nextElementSibling") }

    function Jn(e, t) { return a(e, t, "previousElementSibling") } return Rt.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) { t = t || Rt; for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this) }), Rt.fp_utils = { $: Sn, deepExtend: bn, hasClass: yn, getWindowHeight: En, css: xn, until: n, prevUntil: An, nextUntil: Tn, prev: kn, next: On, last: Mn, index: Cn, getList: l, hide: Hn, show: In, isArrayOrList: i, addClass: Bn, removeClass: Rn, appendTo: Nn, wrap: o, wrapAll: zn, wrapInner: jn, unwrap: Pn, closest: _n, after: Dn, before: $n, insertBefore: r, getScrollTop: Vn, siblings: Wn, preventDefault: Yn, isFunction: Fn, trigger: Un, matches: Xn, toggle: Kn, createElementFromHTML: qn, remove: Qn, filter: function(e, t) { Array.prototype.filter.call(e, t) }, untilAll: a, nextAll: Gn, prevAll: Jn, showError: wn },
        function(e, d) { var n = d && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(d.licenseKey) || -1 < Nt.domain.indexOf("alvarotrigo.com"),
                p = Sn("html, body"),
                l = Sn("html")[0],
                v = Sn("body")[0]; if (!yn(l, $t)) { var h = {};
                d = bn({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: Rt.fp_scrolloverflow ? Rt.fp_scrolloverflow.iscrollHandler : null, scrollOverflowOptions: null, touchSensitivity: 5, touchWrapper: "string" == typeof e ? Sn(e)[0] : e, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", v2compatible: !1, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, d); var g, r, s, a, c = !1,
                    o = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    i = "ontouchstart" in Rt || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    u = "string" == typeof e ? Sn(e)[0] : e,
                    m = En(),
                    f = Ln(),
                    w = !1,
                    t = !0,
                    S = !0,
                    b = [],
                    y = { m: { up: !0, down: !0, left: !0, right: !0 } };
                y.k = bn({}, y.m); var E, L, x, A, T, k, O, M, C, e = function() { var e;
                        e = Rt.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" }; return e }(),
                    H = { touchmove: "ontouchmove" in Rt ? "touchmove" : e.move, touchstart: "ontouchstart" in Rt ? "touchstart" : e.down },
                    I = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    B = !1; try { var R = Object.defineProperty({}, "passive", { get: function() { B = !0 } });
                    Rt.addEventListener("testPassive", null, R), Rt.removeEventListener("testPassive", null, R) } catch (e) {} var N, z, j, P = bn({}, d),
                    _ = !1,
                    D = !0,
                    $ = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];
                Ot(), Rt.fp_easings = bn(Rt.fp_easings, { easeInOutCubic: function(e, t, n, o) { return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t } }), u && (h.version = "3.1.0", h.setAutoScrolling = J, h.setRecordHistory = Z, h.setScrollingSpeed = ee, h.setFitToSection = te, h.setLockAnchors = function(e) { d.lockAnchors = e }, h.setMouseWheelScrolling = ne, h.setAllowScrolling = oe, h.setKeyboardScrolling = ie, h.moveSectionUp = le, h.moveSectionDown = ae, h.silentMoveTo = se, h.moveTo = ce, h.moveSlideRight = ue, h.moveSlideLeft = fe, h.fitToSection = Ee, h.reBuild = de, h.setResponsive = ve, h.getFullpageData = function() { return d }, h.destroy = function(e) { J(!1, "internal"), oe(!0), re(!1), ie(!1), Bn(u, Dt), [T, A, L, k, O, C, x, j].forEach(function(e) { clearTimeout(e) }), Rt.removeEventListener("scroll", ye), Rt.removeEventListener("hashchange", Xe), Rt.removeEventListener("resize", it), Nt.removeEventListener("keydown", qe), Nt.removeEventListener("keyup", Qe), ["click", "touchstart"].forEach(function(e) { Nt.removeEventListener(e, he) }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) { Nt.removeEventListener(e, me, !0) }), e && (xt(0), Sn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", u).forEach(function(e) { Pe(e, "src") }), Sn("img[data-srcset]").forEach(function(e) { Pe(e, "srcset") }), Qn(Sn(en + ", " + dn + ", " + vn)), xn(Sn(Xt), { height: "", "background-color": "", padding: "" }), xn(Sn(on), { width: "" }), xn(u, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), xn(p, { overflow: "", height: "" }), Rn(l, $t), Rn(v, Pt), v.className.split(/\s+/).forEach(function(e) { 0 === e.indexOf(Vt) && Rn(v, e) }), Sn(Xt + ", " + on).forEach(function(e) { d.scrollOverflowHandler && d.scrollOverflow && d.scrollOverflowHandler.remove(e), Rn(e, un + " " + Wt + " " + Ft), e.getAttribute("data-fp-styles") && e.setAttribute("style", e.getAttribute("data-fp-styles")), yn(e, Ut) && !_ && e.removeAttribute("data-anchor") }), ct(u), [Qt, cn, an].forEach(function(e) { Sn(e, u).forEach(function(e) { Pn(e) }) }), xn(u, { "-webkit-transition": "none", transition: "none" }), Rt.scrollTo(0, 0), [Ut, nn, sn].forEach(function(e) { Rn(Sn("." + e), e) })) }, h.getActiveSection = function() { return new It(Sn(Kt)[0]) }, h.getActiveSlide = function() { return Ne(Sn(rn, Sn(Kt)[0])[0]) }, h.test = { top: "0px", translate3d: "translate3d(0px, 0px, 0px)", translate3dH: function() { for (var e = [], t = 0; t < Sn(d.sectionSelector, u).length; t++) e.push("translate3d(0px, 0px, 0px)"); return e }(), left: function() { for (var e = [], t = 0; t < Sn(d.sectionSelector, u).length; t++) e.push(0); return e }(), options: d, setAutoScrolling: J }, h.shared = { afterRenderActions: be, isNormalScrollElement: !1 }, Rt.fullpage_api = h, d.$ && Object.keys(h).forEach(function(e) { d.$.fn.fullpage[e] = h[e] }), d.css3 && (d.css3 = function() { var e, t, n = Nt.createElement("p"),
                        o = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" }; for (t in n.style.display = "block", Nt.body.insertBefore(n, null), o) void 0 !== n.style[t] && (n.style[t] = "translate3d(1px,1px,1px)", e = Rt.getComputedStyle(n).getPropertyValue(o[t])); return Nt.body.removeChild(n), void 0 !== e && 0 < e.length && "none" !== e }()), d.scrollBar = d.scrollBar || d.hybrid, function() { var e;
                    d.anchors.length || (e = "[data-anchor]", (e = Sn(d.sectionSelector.split(",").join(e + ",") + e, u)).length && e.length === Sn(d.sectionSelector, u).length && (_ = !0, e.forEach(function(e) { d.anchors.push(e.getAttribute("data-anchor").toString()) }))), d.navigationTooltips.length || (e = "[data-tooltip]", (e = Sn(d.sectionSelector.split(",").join(e + ",") + e, u)).length && e.forEach(function(e) { d.navigationTooltips.push(e.getAttribute("data-tooltip").toString()) })) }(), function() { xn(u, { height: "100%", position: "relative" }), Bn(u, zt), Bn(l, $t), m = En(), Rn(u, Dt), Bn(Sn(d.sectionSelector, u), Ut), Bn(Sn(d.slideSelector, u), nn); for (var e = Sn(Xt), t = 0; t < e.length; t++) { var n = t,
                            o = e[t],
                            r = Sn(on, o),
                            i = r.length;
                        o.setAttribute("data-fp-styles", o.getAttribute("style")),
                            function(e, t) { t || null != Sn(Kt)[0] || Bn(e, Wt), a = Sn(Kt)[0], xn(e, { height: m + "px" }), d.paddingTop && xn(e, { "padding-top": d.paddingTop }), d.paddingBottom && xn(e, { "padding-bottom": d.paddingBottom }), void 0 !== d.sectionsColor[t] && xn(e, { "background-color": d.sectionsColor[t] }), void 0 !== d.anchors[t] && e.setAttribute("data-anchor", d.anchors[t]) }(o, n),
                            function(e, t) { void 0 !== d.anchors[t] && yn(e, Wt) && ut(d.anchors[t], t), d.menu && d.css3 && null != _n(Sn(d.menu)[0], jt) && Sn(d.menu).forEach(function(e) { v.appendChild(e) }) }(o, n), 0 < i ? function(e, t, n) { var o = 100 * n,
                                    r = 100 / n,
                                    i = Nt.createElement("div");
                                i.className = ln, zn(t, i), (i = Nt.createElement("div")).className = sn, zn(t, i), xn(Sn(cn, e), { width: o + "%" }), 1 < n && (d.controlArrows && function(e) { var t = [qn('<div class="fp-controlArrow fp-prev"></div>'), qn('<div class="fp-controlArrow fp-next"></div>')];
                                    Dn(Sn(an, e)[0], t), "#fff" !== d.controlArrowColor && (xn(Sn(mn, e), { "border-color": "transparent transparent transparent " + d.controlArrowColor }), xn(Sn(gn, e), { "border-color": "transparent " + d.controlArrowColor + " transparent transparent" })), d.loopHorizontal || Hn(Sn(gn, e)) }(e), d.slidesNavigation && function(e, t) { Nn(qn('<div class="' + fn + '"><ul></ul></div>'), e); var n = Sn(dn, e)[0];
                                    Bn(n, "fp-" + d.slidesNavPosition); for (var o = 0; o < t; o++) { var r = Sn(on, e)[o];
                                        Nn(qn('<li><a href="#"><span class="fp-sr-only">' + Se(o, "Slide", r) + "</span><span></span></a></li>"), Sn("ul", n)[0]) } xn(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), Bn(Sn("a", Sn("li", n)[0]), Wt) }(e, n)), t.forEach(function(e) { xn(e, { width: r + "%" }), d.verticalCentered && dt(e) }), null != (e = Sn(rn, e)[0]) && (0 !== Cn(Sn(Kt), Xt) || 0 === Cn(Sn(Kt), Xt) && 0 !== Cn(e)) ? Lt(e, "internal") : Bn(t[0], Wt) }(o, r, i) : d.verticalCentered && dt(o) } d.fixedElements && d.css3 && Sn(d.fixedElements).forEach(function(e) { v.appendChild(e) }), d.navigation && function() { var e = Nt.createElement("div");
                        e.setAttribute("id", Zt); var t = Nt.createElement("ul");
                        e.appendChild(t), Nn(e, v), Bn(e = Sn(en)[0], "fp-" + d.navigationPosition), d.showActiveTooltip && Bn(e, "fp-show-active"); for (var n = "", o = 0; o < Sn(Xt).length; o++) { var r = "";
                            d.anchors.length && (r = d.anchors[o]), n += '<li><a href="#' + r + '"><span class="fp-sr-only">' + Se(o, "Section") + "</span><span></span></a>";
                            r = d.navigationTooltips[o];
                            void 0 !== r && "" !== r && (n += '<div class="' + tn + " fp-" + d.navigationPosition + '">' + r + "</div>"), n += "</li>" } Sn("ul", e)[0].innerHTML = n, e = Sn("li", Sn(en)[0])[Cn(Sn(Kt)[0], Xt)], Bn(Sn("a", e), Wt) }(), Sn('iframe[src*="youtube.com/embed/"]', u).forEach(function(e) { var t, n;
                        n = "enablejsapi=1", e = (t = e).getAttribute("src"), t.setAttribute("src", e + function(e) { return /\?/.test(e) ? "&" : "?" }(e) + n) }), d.scrollOverflow && (E = d.scrollOverflowHandler.init(d)) }(), oe(!0), re(!0), J(d.autoScrolling, "internal"), at(), yt(), "complete" === Nt.readyState && Ue(), Rt.addEventListener("load", Ue), d.scrollOverflow || be(), function() { for (var e = 1; e < 4; e++) C = setTimeout(we, 350 * e) }(), Rt.addEventListener("scroll", ye), Rt.addEventListener("hashchange", Xe), Rt.addEventListener("focus", et), Rt.addEventListener("blur", tt), Rt.addEventListener("resize", it), Nt.addEventListener("keydown", qe), Nt.addEventListener("keyup", Qe), ["click", "touchstart"].forEach(function(e) { Nt.addEventListener(e, he) }), d.normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) { ge(e, !1) }), ["mouseleave", "touchend"].forEach(function(e) { ge(e, !0) }))); var V = !1,
                    W = 0,
                    Y = 0,
                    F = 0,
                    U = 0,
                    X = 0,
                    K = (new Date).getTime(),
                    q = 0,
                    Q = 0,
                    G = m; return h }

            function J(e, t) { e || xt(0), kt("autoScrolling", e, t);
                t = Sn(Kt)[0];
                d.autoScrolling && !d.scrollBar ? (xn(p, {}), Z(P.recordHistory, "internal"), xn(u, { "-ms-touch-action": "none", "touch-action": "none" }), null != t && xt(t.offsetTop)) : (xn(p, {}), Z(!!d.autoScrolling && P.recordHistory, "internal"), xn(u, { "-ms-touch-action": "", "touch-action": "" }), null != t && (t = ze(t.offsetTop)).element.scrollTo(0, t.options)) }

            function Z(e, t) { kt("recordHistory", e, t) }

            function ee(e, t) { kt("scrollingSpeed", e, t) }

            function te(e, t) { kt("fitToSection", e, t) }

            function ne(e) { e ? (function() { var e, t = "";
                    Rt.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on"); var n = "onwheel" in Nt.createElement("div") ? "wheel" : void 0 !== Nt.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                        o = !!B && { passive: !1 }; "DOMMouseScroll" == n ? Nt[e](t + "MozMousePixelScroll", Me, o) : Nt[e](t + n, Me, o) }(), u.addEventListener("mousedown", Ge), u.addEventListener("mouseup", Je)) : (Nt.addEventListener ? (Nt.removeEventListener("mousewheel", Me, !1), Nt.removeEventListener("wheel", Me, !1), Nt.removeEventListener("MozMousePixelScroll", Me, !1)) : Nt.detachEvent("onmousewheel", Me), u.removeEventListener("mousedown", Ge), u.removeEventListener("mouseup", Je)) }

            function oe(t, e) { void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) { Tt(t, e, "m") }) : Tt(t, "all", "m") }

            function re(e) { var t;
                e ? (ne(!0), (o || i) && (d.autoScrolling && (v.removeEventListener(H.touchmove, xe, { passive: !1 }), v.addEventListener(H.touchmove, xe, { passive: !1 })), (t = d.touchWrapper).removeEventListener(H.touchstart, ke), t.removeEventListener(H.touchmove, Ae, { passive: !1 }), t.addEventListener(H.touchstart, ke), t.addEventListener(H.touchmove, Ae, { passive: !1 }))) : (ne(!1), (o || i) && (d.autoScrolling && (v.removeEventListener(H.touchmove, Ae, { passive: !1 }), v.removeEventListener(H.touchmove, xe, { passive: !1 })), (t = d.touchWrapper).removeEventListener(H.touchstart, ke), t.removeEventListener(H.touchmove, Ae, { passive: !1 }))) }

            function ie(t, e) { void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) { Tt(t, e, "k") }) : (Tt(t, "all", "k"), d.keyboardScrolling = t) }

            function le() { var e = An(Sn(Kt)[0], Xt);
                e || !d.loopTop && !d.continuousVertical || (e = Mn(Sn(Xt))), null != e && Ie(e, null, !0) }

            function ae() { var e = Tn(Sn(Kt)[0], Xt);
                e || !d.loopBottom && !d.continuousVertical || (e = Sn(Xt)[0]), null != e && Ie(e, null, !1) }

            function se(e, t) { ee(0, "internal"), ce(e, t), ee(P.scrollingSpeed, "internal") }

            function ce(e, t) { var n = ht(e);
                void 0 !== t ? gt(e, t) : null != n && Ie(n) }

            function ue(e) { Ce("right", e) }

            function fe(e) { Ce("left", e) }

            function de(e) { if (!yn(u, Dt)) { w = !0, m = En(), f = Ln(); for (var t = Sn(Xt), n = 0; n < t.length; ++n) { var o = t[n],
                            r = Sn(an, o)[0],
                            i = Sn(on, o);
                        d.verticalCentered && xn(Sn(Qt, o), { height: pt(o) + "px" }), xn(o, { height: m + "px" }), 1 < i.length && ot(r, Sn(rn, r)[0]) } d.scrollOverflow && E.createScrollBarForAll(); var l = Cn(Sn(Kt)[0], Xt);
                    l && se(l + 1), Fn(d.afterResize) && e && d.afterResize.call(u, Rt.innerWidth, Rt.innerHeight), Fn(d.afterReBuild) && !e && d.afterReBuild.call(u) } }

            function pe() { return yn(v, Pt) }

            function ve(e) { var t = pe();
                e ? t || (J(!1, "internal"), te(!1, "internal"), Hn(Sn(en)), Bn(v, Pt), Fn(d.afterResponsive) && d.afterResponsive.call(u, e), d.scrollOverflow && E.createScrollBarForAll()) : t && (J(P.autoScrolling, "internal"), te(P.autoScrolling, "internal"), In(Sn(en)), Rn(v, Pt), Fn(d.afterResponsive) && d.afterResponsive.call(u, e)) }

            function he(e) { var t = e.target;
                t && _n(t, en + " a") ? function(e) { Yn(e);
                    e = Cn(_n(this, en + " li"));
                    Ie(Sn(Xt)[e]) }.call(t, e) : Xn(t, ".fp-tooltip") ? function() { Un(kn(this), "click") }.call(t) : Xn(t, vn) ? function() { var e = _n(this, Xt);
                    yn(this, hn) ? y.m.left && fe(e) : y.m.right && ue(e) }.call(t, e) : Xn(t, pn) || null != _n(t, pn) ? function(e) { Yn(e); var t = Sn(an, _n(this, Xt))[0],
                        e = Sn(on, t)[Cn(_n(this, "li"))];
                    ot(t, e) }.call(t, e) : _n(t, d.menu + " [data-menuanchor]") && function(e) {!Sn(d.menu)[0] || !d.lockAnchors && d.anchors.length || (Yn(e), ce(this.getAttribute("data-menuanchor"))) }.call(t, e) }

            function ge(e, t) { Nt["fp_" + e] = t, Nt.addEventListener(e, me, !0) }

            function me(e) { var t = e.type,
                    n = !1,
                    o = d.scrollOverflow,
                    r = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target; if (r == Nt || !r) return re(!0), void(o && d.scrollOverflowHandler.setIscroll(r, !0)); "touchend" === t && (D = !1, setTimeout(function() { D = !0 }, 800)), "mouseenter" === t && !D || (d.normalScrollElements.split(",").forEach(function(e) { var t;
                    n || (t = Xn(r, e), e = _n(r, e), (t || e) && (h.shared.isNormalScrollElement || (re(!1), o && d.scrollOverflowHandler.setIscroll(r, !1)), h.shared.isNormalScrollElement = !0, n = !0)) }), !n && h.shared.isNormalScrollElement && (re(!0), o && d.scrollOverflowHandler.setIscroll(r, !0), h.shared.isNormalScrollElement = !1)) }

            function we() { var e = En(),
                    t = Ln();
                m === e && f === t || (m = e, f = t, de(!0)) }

            function Se(e, t, n) { n = "Section" === t ? d.anchors[e] : n.getAttribute("data-anchor"); return d.navigationTooltips[e] || n || t + " " + (e + 1) }

            function be() { var e, t, n = Sn(Kt)[0];
                Bn(n, Ft), De(n), _e(), Ve(n), d.scrollOverflow && d.scrollOverflowHandler.afterLoad(), e = Ke(), t = ht(e.section), e.section && t && (void 0 === t || Cn(t) !== Cn(a)) || !Fn(d.afterLoad) || Be("afterLoad", { activeSection: n, element: n, direction: null, anchorLink: n.getAttribute("data-anchor"), sectionIndex: Cn(n, Xt) }), Fn(d.afterRender) && Be("afterRender") }

            function ye() { if (!w && (!d.autoScrolling || d.scrollBar)) { var e, t, n, o, r, i = Vn(),
                        l = (t = W < (e = i) ? "down" : "up", q = W = e, t),
                        a = 0,
                        s = i + En() / 2,
                        c = v.offsetHeight - En() === i,
                        u = Sn(Xt); if (c) a = u.length - 1;
                    else if (i)
                        for (var f = 0; f < u.length; ++f) u[f].offsetTop <= s && (a = f);
                    else a = 0;
                    n = l, e = Sn(Kt)[0].offsetTop, t = e + En(), ("up" != n ? e <= Vn() : t >= Vn() + En()) && (yn(Sn(Kt)[0], Ft) || (Bn(Sn(Kt)[0], Ft), Rn(Wn(Sn(Kt)[0]), Ft))), yn(c = u[a], Wt) || (V = !0, l = Cn(i = Sn(Kt)[0], Xt) + 1, n = ft(c), e = c.getAttribute("data-anchor"), l = { activeSection: i, sectionIndex: (t = Cn(c, Xt) + 1) - 1, anchorLink: e, element: c, leavingSection: l, direction: n }, (n = Sn(rn, c)[0]) && (r = n.getAttribute("data-anchor"), o = Cn(n)), S && (Bn(c, Wt), Rn(Wn(c), Wt), Fn(d.onLeave) && Be("onLeave", l), Fn(d.afterLoad) && Be("afterLoad", l), Ye(i), De(c), Ve(c), ut(e, t - 1), d.anchors.length && (g = e), wt(o, r, e)), clearTimeout(k), k = setTimeout(function() { V = !1 }, 100)), d.fitToSection && (clearTimeout(O), O = setTimeout(function() { d.fitToSection && Sn(Kt)[0].offsetHeight <= m && Ee() }, d.fitToSectionDelay)) } }

            function Ee() { S && (w = !0, Ie(Sn(Kt)[0]), w = !1) }

            function Le(e) { if (y.m[e]) { var t = "down" === e ? ae : le; if (d.scrollOverflow) { var n = d.scrollOverflowHandler.scrollable(Sn(Kt)[0]),
                            e = "down" === e ? "bottom" : "top"; if (null != n) { if (!d.scrollOverflowHandler.isScrolled(e, n)) return 1;
                            t() } else t() } else t() } }

            function xe(e) { d.autoScrolling && Te(e) && y.m.up && Yn(e) }

            function Ae(e) { var t = _n(e.target, Xt) || Sn(Kt)[0];
                Te(e) && (d.autoScrolling && Yn(e), e = Et(e), U = e.y, X = e.x, Sn(an, t).length && Math.abs(F - X) > Math.abs(Y - U) ? !c && Math.abs(F - X) > Ln() / 100 * d.touchSensitivity && (X < F ? y.m.right && ue(t) : y.m.left && fe(t)) : d.autoScrolling && S && Math.abs(Y - U) > Rt.innerHeight / 100 * d.touchSensitivity && (U < Y ? Le("down") : Y < U && Le("up"))) }

            function Te(e) { return void 0 === e.pointerType || "mouse" != e.pointerType }

            function ke(e) { d.fitToSection && (N = !1), Te(e) && (e = Et(e), Y = e.y, F = e.x) }

            function Oe(e, t) { for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r]; return Math.ceil(n / t) }

            function Me(e) { var t = (new Date).getTime(),
                    n = yn(Sn(".fp-completely")[0], Jt); if (!y.m.down && !y.m.up) return Yn(e), !1; if (d.autoScrolling && !s && !n) { var o = (e = e || Rt.event).wheelDelta || -e.deltaY || -e.detail,
                        r = Math.max(-1, Math.min(1, o)),
                        n = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        n = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !n;
                    149 < b.length && b.shift(), b.push(Math.abs(o)), d.scrollBar && Yn(e);
                    e = t - K; return K = t, 200 < e && (b = []), S && (e = Oe(b, 10), Oe(b, 70) <= e && n && Le(r < 0 ? "down" : "up")), !1 } d.fitToSection && (N = !1) }

            function Ce(e, t) { var n = null == t ? Sn(Kt)[0] : t,
                    o = Sn(an, n)[0]; if (!(null == o || c || Sn(on, o).length < 2)) { t = Sn(rn, o)[0], n = null; if (null == (n = ("left" === e ? An : Tn)(t, on))) { if (!d.loopHorizontal) return;
                        t = Wn(t), n = "left" === e ? t[t.length - 1] : t[0] } c = !h.test.isTesting, ot(o, n, e) } }

            function He() { for (var e = Sn(rn), t = 0; t < e.length; t++) Lt(e[t], "internal") }

            function Ie(e, t, n) { if (null != e) { var o, r, i, l, a, s, c, u, t = { element: e, callback: t, isMovementUp: n, dtop: (r = (o = e).offsetHeight, f = l = o.offsetTop, i = q < l, t = f - m + r, l = d.bigSectionsDestination, m < r ? (i || l) && "bottom" !== l || (f = t) : (i || w && null == On(o)) && (f = t), q = f), yMovement: ft(e), anchorLink: e.getAttribute("data-anchor"), sectionIndex: Cn(e, Xt), activeSlide: Sn(rn, e)[0], activeSection: Sn(Kt)[0], leavingSection: Cn(Sn(Kt), Xt) + 1, localIsResizing: w }; if (!(t.activeSection == e && !w || d.scrollBar && Vn() === t.dtop && !yn(e, Gt))) { if (null != t.activeSlide && (s = t.activeSlide.getAttribute("data-anchor"), u = Cn(t.activeSlide)), !t.localIsResizing) { var f = t.yMovement; if (void 0 !== n && (f = n ? "up" : "down"), t.direction = f, Fn(d.onLeave) && !1 === Be("onLeave", t)) return } d.autoScrolling && d.continuousVertical && void 0 !== t.isMovementUp && (!t.isMovementUp && "up" == t.yMovement || t.isMovementUp && "down" == t.yMovement) && (t = function(e) { e.isMovementUp ? $n(Sn(Kt)[0], Gn(e.activeSection, Xt)) : Dn(Sn(Kt)[0], Jn(e.activeSection, Xt).reverse()); return xt(Sn(Kt)[0].offsetTop), He(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.offsetTop, e.yMovement = ft(e.element), e }(t)), t.localIsResizing || Ye(t.activeSection), d.scrollOverflow && d.scrollOverflowHandler.beforeLeave(), Bn(e, Wt), Rn(Wn(e), Wt), De(e), d.scrollOverflow && d.scrollOverflowHandler.onLeave(), S = h.test.isTesting, wt(u, s, t.anchorLink, t.sectionIndex), a = t, c = d.scrollingSpeed < 700, u = c ? 700 : d.scrollingSpeed, d.css3 && d.autoScrolling && !d.scrollBar ? (vt("translate3d(0px, -" + Math.round(a.dtop) + "px, 0px)", !0), d.scrollingSpeed ? (clearTimeout(A), A = setTimeout(function() { je(a), S = !c }, d.scrollingSpeed)) : je(a)) : (s = ze(a.dtop), h.test.top = -a.dtop + "px", xn(p, { "scroll-behavior": "unset" }), Mt(s.element, s.options, d.scrollingSpeed, function() { d.scrollBar ? setTimeout(function() { je(a) }, 30) : (je(a), S = !c) })), c && (clearTimeout(j), j = setTimeout(function() { S = !0 }, u)), g = t.anchorLink, ut(t.anchorLink, t.sectionIndex) } } }

            function Be(e, t) { var n, t = function(e, t) { var n;
                    n = d.v2compatible ? { afterRender: function() { return [u] }, onLeave: function() { return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction] }, afterLoad: function() { return [t.element, t.anchorLink, t.sectionIndex + 1] }, afterSlideLoad: function() { return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex] }, onSlideLeave: function() { return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex] } } : { afterRender: function() { return { section: Re(Sn(Kt)[0]), slide: Ne(Sn(rn, Sn(Kt)[0])[0]) } }, onLeave: function() { return { origin: Re(t.activeSection), destination: Re(t.element), direction: t.direction } }, afterLoad: function() { return n.onLeave() }, afterSlideLoad: function() { return { section: Re(t.section), origin: Ne(t.prevSlide), destination: Ne(t.destiny), direction: t.direction } }, onSlideLeave: function() { return n.afterSlideLoad() } }; return n[e]() }(e, t); if (d.v2compatible) { if (!1 === d[e].apply(t[0], t.slice(1))) return !1 } else if (Un(u, e, t), !1 === d[e].apply(t[Object.keys(t)[0]], (n = t, Object.keys(n).map(function(e) { return n[e] })))) return !1; return !0 }

            function Re(e) { return e ? new It(e) : null }

            function Ne(e) { return e ? new Bt(e) : null }

            function ze(e) { var t = {}; return d.autoScrolling && !d.scrollBar ? (t.options = -e, t.element = Sn(jt)[0]) : (t.options = e, t.element = Rt), t }

            function je(e) { var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? $n(Sn(Xt)[0], t.wrapAroundElements) : Dn(Sn(Xt)[Sn(Xt).length - 1], t.wrapAroundElements), xt(Sn(Kt)[0].offsetTop), He()), Fn(d.afterLoad) && !e.localIsResizing && Be("afterLoad", e), d.scrollOverflow && d.scrollOverflowHandler.afterLoad(), e.localIsResizing || Ve(e.element), Bn(e.element, Ft), Rn(Wn(e.element), Ft), _e(), S = !0, Fn(e.callback) && e.callback() }

            function Pe(e, t) { e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t) }

            function _e() { var e = Sn(".fp-auto-height")[0] || pe() && Sn(".fp-auto-height-responsive")[0];
                d.lazyLoading && e && Sn(Xt + ":not(" + Yt + ")").forEach(function(e) { var t, n;
                    t = (n = (t = e).getBoundingClientRect()).top, n = n.bottom, (t + 2 < m && 0 < t || 2 < n && n < m) && De(e) }) }

            function De(o) { d.lazyLoading && Sn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Fe(o)).forEach(function(n) { var e;
                    ["src", "srcset"].forEach(function(e) { var t = n.getAttribute("data-" + e);
                        null != t && t && (Pe(n, e), n.addEventListener("load", function() { $e(o) })) }), !Xn(n, "source") || (e = _n(n, "video, audio")) && (e.load(), e.onloadeddata = function() { $e(o) }) }) }

            function $e(e) { d.scrollOverflow && (clearTimeout(z), z = setTimeout(function() { yn(v, Pt) || E.createScrollBar(e) }, 200)) }

            function Ve(e) { e = Fe(e);
                Sn("video, audio", e).forEach(function(e) { e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play() }), Sn('iframe[src*="youtube.com/embed/"]', e).forEach(function(e) { e.hasAttribute("data-autoplay") && We(e), e.onload = function() { e.hasAttribute("data-autoplay") && We(e) } }) }

            function We(e) { e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") }

            function Ye(e) { e = Fe(e);
                Sn("video, audio", e).forEach(function(e) { e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause() }), Sn('iframe[src*="youtube.com/embed/"]', e).forEach(function(e) { /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") }) }

            function Fe(e) { var t = Sn(rn, e); return t.length && (e = t[0]), e }

            function Ue() { var e = Ke(),
                    t = e.section,
                    e = e.slide;
                t && (d.animateAnchor ? gt : se)(t, e) }

            function Xe() { var e, t, n, o;
                V || d.lockAnchors || (e = (o = Ke()).section, t = o.slide, o = (n = void 0 === g) && void 0 === t && !c, e && e.length && (e && e !== g && !n || o || !c && r != t) && gt(e, t)) }

            function Ke() { var e, t, n, o = Rt.location.hash; return o.length && (n = o.replace("#", "").split("/"), t = (o = -1 < o.indexOf("#/")) ? "/" + n[1] : decodeURIComponent(n[0]), (n = o ? n[2] : n[1]) && n.length && (e = decodeURIComponent(n))), { section: t, slide: e } }

            function qe(e) { clearTimeout(M); var t, n, o, r, i = Nt.activeElement,
                    l = e.keyCode;

                function a(e) { return Yn(e), r[0] ? r[0].focus() : null } 9 === l ? (n = (t = e).shiftKey, o = Nt.activeElement, r = Ze(Fe(Sn(Kt)[0])), function(e) { var t = Ze(Nt),
                        n = t.indexOf(Nt.activeElement),
                        n = e.shiftKey ? n - 1 : n + 1,
                        t = t[n],
                        n = Ne(_n(t, on)),
                        t = Re(_n(t, Xt)); return !n && !t }(t) || (o ? null == _n(o, Kt + "," + Kt + " " + rn) && (o = a(t)) : a(t), (!n && o == r[r.length - 1] || n && o == r[0]) && Yn(t))) : Xn(i, "textarea") || Xn(i, "input") || Xn(i, "select") || "true" === i.getAttribute("contentEditable") || "" === i.getAttribute("contentEditable") || !d.keyboardScrolling || !d.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(l) && Yn(e), s = e.ctrlKey, M = setTimeout(function() {! function(e) { var t = e.shiftKey,
                            n = Nt.activeElement,
                            o = Xn(n, "video") || Xn(n, "audio"); if (S || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
                            case 38:
                            case 33:
                                y.k.up && le(); break;
                            case 32:
                                if (t && y.k.up && !o) { le(); break }
                            case 40:
                            case 34:
                                y.k.down && (32 === e.keyCode && o || ae()); break;
                            case 36:
                                y.k.up && ce(1); break;
                            case 35:
                                y.k.down && ce(Sn(Xt).length); break;
                            case 37:
                                y.k.left && fe(); break;
                            case 39:
                                y.k.right && ue(); break;
                            default:
                                ; } }(e) }, 150)) }

            function Qe(e) { t && (s = e.ctrlKey) }

            function Ge(e) { 2 == e.which && (Q = e.pageY, u.addEventListener("mousemove", nt)) }

            function Je(e) { 2 == e.which && u.removeEventListener("mousemove", nt) }

            function Ze(e) { return [].slice.call(Sn(I, e)).filter(function(e) { return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent }) }

            function et() { t = !0 }

            function tt() { s = t = !1 }

            function nt(e) { d.autoScrolling && (S && (e.pageY < Q && y.m.up ? le() : e.pageY > Q && y.m.down && ae()), Q = e.pageY) }

            function ot(e, t, n) { var o, r, i = _n(e, Xt),
                    n = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: Cn(t), section: i, sectionIndex: Cn(i, Xt), anchorLink: i.getAttribute("data-anchor"), slidesNav: Sn(dn, i)[0], slideAnchor: bt(t), prevSlide: Sn(rn, i)[0], prevSlideIndex: Cn(Sn(rn, i)[0]), localIsResizing: w };
                n.xMovement = function(e, t) { if (e == t) return "none"; if (t < e) return "left"; return "right" }(n.prevSlideIndex, n.slideIndex), n.direction = n.direction || n.xMovement, n.localIsResizing || (S = !1), d.onSlideLeave && !n.localIsResizing && "none" !== n.xMovement && Fn(d.onSlideLeave) && !1 === Be("onSlideLeave", n) ? c = !1 : (Bn(t, Wt), Rn(Wn(t), Wt), n.localIsResizing || (Ye(n.prevSlide), De(t)), !d.loopHorizontal && d.controlArrows && (Kn(Sn(gn, i), 0 !== n.slideIndex), Kn(Sn(mn, i), null != On(t))), yn(i, Wt) && !n.localIsResizing && wt(n.slideIndex, n.slideAnchor, n.anchorLink, n.sectionIndex), i = e, r = !0, e = (o = n).destinyPos, d.css3 ? (n = "translate3d(-" + Math.round(e.left) + "px, 0px, 0px)", h.test.translate3dH[o.sectionIndex] = n, xn(st(Sn(cn, i)), At(n)), T = setTimeout(function() { r && rt(o) }, d.scrollingSpeed)) : (h.test.left[o.sectionIndex] = Math.round(e.left), Mt(i, Math.round(e.left), d.scrollingSpeed, function() { r && rt(o) }))) }

            function rt(e) { var t, n;
                t = e.slidesNav, n = e.slideIndex, d.slidesNavigation && null != t && (Rn(Sn(Yt, t), Wt), Bn(Sn("a", Sn("li", t)[n]), Wt)), e.localIsResizing || (Fn(d.afterSlideLoad) && Be("afterSlideLoad", e), S = !0, Ve(e.destiny)), c = !1 }

            function it() { clearTimeout(L), L = setTimeout(function() { for (var e = 0; e < 4; e++) x = setTimeout(lt, 200 * e) }, 200) }

            function lt() { var e;
                w = !0, at(), o ? Xn(e = Nt.activeElement, "textarea") || Xn(e, "input") || Xn(e, "select") || (e = En(), Math.abs(e - G) > 20 * Math.max(G, e) / 100 && (de(!0), G = e)) : we(), w = !1 }

            function at() { var e = d.responsive || d.responsiveWidth,
                    t = d.responsiveHeight,
                    n = e && Rt.innerWidth < e,
                    o = t && Rt.innerHeight < t;
                e && t ? ve(n || o) : e ? ve(n) : t && ve(o) }

            function st(e) { var t = "all " + d.scrollingSpeed + "ms " + d.easingcss3; return Rn(e, _t), xn(e, { "-webkit-transition": t, transition: t }) }

            function ct(e) { return Bn(e, _t) }

            function ut(e, t) { var n;
                n = e, Sn(d.menu).forEach(function(e) { d.menu && null != e && (Rn(Sn(Yt, e), Wt), Bn(Sn('[data-menuanchor="' + n + '"]', e), Wt)) }), e = e, t = t, d.navigation && null != Sn(en)[0] && (Rn(Sn(Yt, Sn(en)[0]), Wt), Bn(e ? Sn('a[href="#' + e + '"]', Sn(en)[0]) : Sn("a", Sn("li", Sn(en)[0])[t]), Wt)) }

            function ft(e) { var t = Cn(Sn(Kt)[0], Xt),
                    e = Cn(e, Xt); return t == e ? "none" : e < t ? "up" : "down" }

            function dt(e) { var t;
                yn(e, un) || ((t = Nt.createElement("div")).className = qt, t.style.height = pt(e) + "px", Bn(e, un), jn(e, t)) }

            function pt(e) { var t, n = m; return (d.paddingTop || d.paddingBottom) && (yn(t = e, Ut) || (t = _n(e, Xt)), t = parseInt(getComputedStyle(t)["padding-top"]) + parseInt(getComputedStyle(t)["padding-bottom"]), n = m - t), n }

            function vt(e, t) {
                (t ? st : ct)(u), xn(u, At(e)), h.test.translate3d = e, setTimeout(function() { Rn(u, _t) }, 10) }

            function ht(e) { var t = Sn(Xt + '[data-anchor="' + e + '"]', u)[0]; return t || (e = void 0 !== e ? e - 1 : 0, t = Sn(Xt)[e]), t }

            function gt(e, t) { var n, o, r = ht(e);
                null != r && (null == (t = Sn(on + '[data-anchor="' + (o = t) + '"]', e = r)[0]) && (o = void 0 !== o ? o : 0, t = Sn(on, e)[o]), n = t, bt(r) === g || yn(r, Wt) ? mt(n) : Ie(r, function() { mt(n) })) }

            function mt(e) { null != e && ot(_n(e, an), e) }

            function wt(e, t, n) { var o = "";
                d.anchors.length && !d.lockAnchors && (e ? (null != n && (o = n), null == t && (t = e), St(o + "/" + (r = t))) : (null != e && (r = t), St(n))), yt() }

            function St(e) { var t;
                d.recordHistory ? location.hash = e : o || i ? Rt.history.replaceState(void 0, void 0, "#" + e) : (t = Rt.location.href.split("#")[0], Rt.location.replace(t + "#" + e)) }

            function bt(e) { if (!e) return null; var t = e.getAttribute("data-anchor"),
                    e = Cn(e); return null == t && (t = e), t }

            function yt() { var e = Sn(Kt)[0],
                    t = Sn(rn, e)[0],
                    n = bt(e),
                    e = bt(t),
                    n = String(n);
                t && (n = n + "-" + e), n = n.replace("/", "-").replace("#", "");
                e = new RegExp("\\b\\s?" + Vt + "-[^\\s]+\\b", "g");
                v.className = v.className.replace(e, ""), Bn(v, Vt + "-" + n) }

            function Et(e) { var t = []; return t.y = (void 0 !== e.pageY && (e.pageY || e.pageX) ? e : e.touches[0]).pageY, t.x = (void 0 !== e.pageX && (e.pageY || e.pageX) ? e : e.touches[0]).pageX, i && Te(e) && d.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t }

            function Lt(e, t) { ee(0, "internal"), void 0 !== t && (w = !0), ot(_n(e, an), e), void 0 !== t && (w = !1), ee(P.scrollingSpeed, "internal") }

            function xt(e) { e = Math.round(e);
                d.css3 && d.autoScrolling && !d.scrollBar ? vt("translate3d(0px, -" + e + "px, 0px)", !1) : d.autoScrolling && !d.scrollBar ? (xn(u, { top: -e + "px" }), h.test.top = -e + "px") : Ct((e = ze(e)).element, e.options) }

            function At(e) { return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

            function Tt(t, e, n) { "all" !== e ? y[n][e] = t : Object.keys(y[n]).forEach(function(e) { y[n][e] = t }) }

            function kt(e, t, n) { d[e] = t, "internal" !== n && (P[e] = t) }

            function Ot() { var e = d.licenseKey,
                    t = "font-size: 15px;background:yellow;";
                n && e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t)), yn(l, $t) ? wn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (d.continuousVertical && (d.loopTop || d.loopBottom) && (d.continuousVertical = !1, wn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !d.scrollOverflow || !d.scrollBar && d.autoScrolling || wn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !d.continuousVertical || !d.scrollBar && d.autoScrolling || (d.continuousVertical = !1, wn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), d.scrollOverflow && null == d.scrollOverflowHandler && (d.scrollOverflow = !1, wn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), $.forEach(function(e) { d[e] && wn("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e) }), d.anchors.forEach(function(t) { var e, n = [].slice.call(Sn("[name]")).filter(function(e) { return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase() }),
                        o = [].slice.call(Sn("[id]")).filter(function(e) { return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase() });
                    (o.length || n.length) && (wn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), e = o.length ? "id" : "name", (o.length || n.length) && wn("error", '"' + t + '" is is being used by another element `' + e + "` property")) })) }

            function Mt(t, n, o, r) { var e, i = e = (e = t).self != Rt && yn(e, ln) ? e.scrollLeft : !d.autoScrolling || d.scrollBar ? Vn() : e.offsetTop,
                    l = n - i,
                    a = 0;
                N = !0; var s = function() { var e;
                    N ? (e = n, a += 20, o && (e = Rt.fp_easings[d.easing](a, i, l, o)), Ct(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r()) : a < o && r() };
                s() }

            function Ct(e, t) {!d.autoScrolling || d.scrollBar || e.self != Rt && yn(e, ln) ? e.self != Rt && yn(e, ln) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px" }

            function Ht(e, t) { this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = Cn(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index }

            function It(e) { Ht.call(this, e, Xt) }

            function Bt(e) { Ht.call(this, e, on) } Ot() } }), window.jQuery && window.fullpage && function(t, n) { "use strict";
    t && n ? t.fn.fullpage = function(e) { e = t.extend({}, e, { $: t });
        new n(this[0], e) } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!") }(window.jQuery, window.fullpage), custom_slide(), scroll_();