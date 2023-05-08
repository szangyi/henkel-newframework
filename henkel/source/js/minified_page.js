"use strict";
function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
}
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
    }
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
addEventListener("load", function () {
    scrollTo(0, 0);
});
var ua = navigator.userAgent.toLowerCase(),
    isSafari = -1 != ua.indexOf("safari") && -1 == ua.indexOf("chrome");
isSafari && document.documentElement.classList.add("safari");
var videoWP = document.querySelector(".video"),
    videoOpen = document.querySelector(".video-open"),
    videoClose = document.querySelector(".video-close"),
    video = document.querySelector(".video video");
if (video) {
    var open = function () {
            videoWP.classList.add("open"),
                (videoWP.style.transform = "none"),
                (videoWP.style.opacity = 1),
                (videoWP.style.pointerEvents = "auto"),
                setTimeout(function () {
                    video.play();
                }, 600);
        },
        close = function () {
            videoWP.classList.remove("open"), (videoWP.style.transform = ""), (videoWP.style.opacity = ""), (videoWP.style.pointerEvents = ""), video.pause(), (video.currentTime = 0);
        };
    videoOpen.addEventListener("click", open), videoClose.addEventListener("click", close), video.addEventListener("ended", close);
}
_toConsumableArray(document.querySelectorAll(".wallpaper")).forEach(function (e) {
    var t = e.querySelector("video");
    if (t) {
        var n = new Image();
        (n.src = t.poster),
            n.addEventListener("load", function () {
                e.append(n);
            }),
            t.addEventListener("loadeddata", function () {
                var r = document.createElement("canvas"), // creating canvas unsuccessfull
                    o = r.getContext("2d");
                (r.width = t.videoWidth),
                    (r.height = t.videoHeight),
                    (r.style.cssText = "position: fixed; top: 0; left: 0;"),
                    o.drawImage(t, 0, 0, r.width, r.height),
                    e.append(r),
                    t.addEventListener("playing", function () {
                        e.removeChild(r), e.removeChild(n);
                    });
            });
    }
}),
    (function (e, t) {
        "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Splitting = t());
    })(window, function () {
        var e = document,
            t = e.createTextNode.bind(e);
        function n(e, t, n) {
            e.style.setProperty(t, n);
        }
        function r(e, t) {
            return e.appendChild(t);
        }
        function o(t, n, o, i) {
            var a = e.createElement("span");
            return n && (a.className = n), o && (!i && a.setAttribute("data-" + n, o), (a.textContent = o)), (t && r(t, a)) || a;
        }
        function i(e, t) {
            return e.getAttribute("data-" + t);
        }
        function a(t, n) {
            return t && 0 != t.length ? (t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (n || e).querySelectorAll(t))) : [];
        }
        function u(e) {
            for (var t = []; e--; ) t[e] = [];
            return t;
        }
        function c(e, t) {
            e && e.some(t);
        }
        function s(e) {
            return function (t) {
                return e[t];
            };
        }
        var l = {};
        function d(e, t, n) {
            var r = n.indexOf(e);
            if (-1 == r)
                n.unshift(e),
                    c(l[e].depends, function (t) {
                        d(t, e, n);
                    });
            else {
                var o = n.indexOf(t);
                n.splice(r, 1), n.splice(o, 0, e);
            }
            return n;
        }
        function f(e, t, n, r) {
            return { by: e, depends: t, key: n, split: r };
        }
        function p(e) {
            return d(e, 0, []).map(s(l));
        }
        function y(e) {
            l[e.by] = e;
        }
        function m(e, n, i, u, s) {
            e.normalize();
            var l = [],
                d = document.createDocumentFragment();
            u && l.push(e.previousSibling);
            var f = [];
            return (
                a(e.childNodes).some(function (e) {
                    if (!e.tagName || e.hasChildNodes()) {
                        if (e.childNodes && e.childNodes.length) return f.push(e), void l.push.apply(l, m(e, n, i, u, s));
                        var r = e.wholeText || "",
                            a = r.trim();
                        a.length &&
                            (" " === r[0] && f.push(t(" ")),
                            c(a.split(i), function (e, t) {
                                t && s && f.push(o(d, "whitespace", " ", s));
                                var r = o(d, n, e);
                                l.push(r), f.push(r);
                            }),
                            " " === r[r.length - 1] && f.push(t(" ")));
                    } else f.push(e);
                }),
                c(f, function (e) {
                    r(d, e);
                }),
                (e.innerHTML = ""),
                r(e, d),
                l
            );
        }
        var v = "words",
            h = f(v, 0, "word", function (e) {
                return m(e, "word", /\s+/, 0, 1);
            }),
            g = "chars",
            b = f(g, [v], "char", function (e, t, n) {
                var r = [];
                return (
                    c(n.words, function (e, n) {
                        r.push.apply(r, m(e, "char", "", t.whitespace && n));
                    }),
                    r
                );
            });
        function w(e) {
            var t = (e = e || {}).key;
            return a(e.target || "[data-splitting]").map(function (r) {
                var o = r["🍌"];
                if (!e.force && o) return o;
                o = r["🍌"] = { el: r };
                var a = p(e.by || i(r, "splitting") || g),
                    u = (function (e, t) {
                        for (var n in t) e[n] = t[n];
                        return e;
                    })({}, e);
                return (
                    c(a, function (e) {
                        if (e.split) {
                            var i = e.by,
                                a = (t ? "-" + t : "") + e.key,
                                s = e.split(r, u, o);
                            a &&
                                (function (e, t, r) {
                                    var o = "--" + t,
                                        i = o + "-index";
                                    c(r, function (e, t) {
                                        Array.isArray(e)
                                            ? c(e, function (e) {
                                                  n(e, i, t);
                                              })
                                            : n(e, i, t);
                                    }),
                                        n(e, o + "-total", r.length);
                                })(r, a, s),
                                (o[i] = s),
                                r.classList.add(i);
                        }
                    }),
                    r.classList.add("splitting"),
                    o
                );
            });
        }
        function S(e, t, n) {
            var r = a(t.matching || e.children, e),
                o = {};
            return (
                c(r, function (e) {
                    var t = Math.round(e[n]);
                    (o[t] || (o[t] = [])).push(e);
                }),
                Object.keys(o).map(Number).sort(A).map(s(o))
            );
        }
        function A(e, t) {
            return e - t;
        }
        (w.html = function (e) {
            var t = ((e = e || {}).target = o());
            return (t.innerHTML = e.content), w(e), t.outerHTML;
        }),
            (w.add = y);
        var L = f("lines", [v], "line", function (e, t, n) {
                return S(e, { matching: n.words }, "offsetTop");
            }),
            T = f("items", 0, "item", function (e, t) {
                return a(t.matching || e.children, e);
            }),
            _ = f("rows", 0, "row", function (e, t) {
                return S(e, t, "offsetTop");
            }),
            x = f("cols", 0, "col", function (e, t) {
                return S(e, t, "offsetLeft");
            }),
            C = f("grid", ["rows", "cols"]),
            E = "layout",
            W = f(E, 0, 0, function (e, t) {
                var u = (t.rows = +(t.rows || i(e, "rows") || 1)),
                    c = (t.columns = +(t.columns || i(e, "columns") || 1));
                if (((t.image = t.image || i(e, "image") || e.currentSrc || e.src), t.image)) {
                    var s = a("img", e)[0];
                    t.image = s && (s.currentSrc || s.src);
                }
                t.image && n(e, "background-image", "url(" + t.image + ")");
                for (var l = u * c, d = [], f = o(0, "cell-grid"); l--; ) {
                    var p = o(f, "cell");
                    o(p, "cell-inner"), d.push(p);
                }
                return r(e, f), d;
            }),
            k = f("cellRows", [E], "row", function (e, t, n) {
                var r = t.rows,
                    o = u(r);
                return (
                    c(n.layout, function (e, t, n) {
                        o[Math.floor(t / (n.length / r))].push(e);
                    }),
                    o
                );
            }),
            N = f("cellColumns", [E], "col", function (e, t, n) {
                var r = t.columns,
                    o = u(r);
                return (
                    c(n.layout, function (e, t) {
                        o[t % r].push(e);
                    }),
                    o
                );
            }),
            O = f("cells", ["cellRows", "cellColumns"], "cell", function (e, t, n) {
                return n.layout;
            });
        return y(h), y(b), y(L), y(T), y(_), y(x), y(C), y(W), y(k), y(N), y(O), w;
    });
