/* eslint-disable no-undef */
(function(a) {
    function e(b, c) {
        var d = b.data("balloon") && b.data("balloon").get(0);
        return !(d && (d == c.relatedTarget || a.contains(d, c.relatedTarget)))
    }

    function d(d, e, f) {
        function n(a, b, c, d, e) {
            var f = Math.round(d / 1.7320508);
            b.inactive()["setBorder" + c.camel.pos.f](d)["setBorder" + c.camel.pos.c1](f)["setBorder" + c.camel.pos.c2](f)["set" + c.camel.pos.p1](c.isTopLeft ? -d : a.inner[c.size.p])["set" + c.camel.pos.c1](a.inner[c.size.c] / 2 - f).active().$.css("border-" + c.pos.f + "-color", e)
        }
        e.stop(true, true);
        var g, h, i = {
                position: "absolute",
                height: "0",
                width: "0",
                border: "solid 0 transparent"
            },
            j = new c(d),
            k = new c(e);
        k.setTop(-f.offsetY + (f.position && f.position.indexOf("top") >= 0 ? j.top - k.height : f.position && f.position.indexOf("bottom") >= 0 ? j.bottom : j.center.top - k.height / 2));
        k.setLeft(f.offsetX + (f.position && f.position.indexOf("left") >= 0 ? j.left - k.width : f.position && f.position.indexOf("right") >= 0 ? j.right : j.center.left - k.width / 2));
        if (f.tipSize > 0) {
            if (e.data("outerTip")) {
                e.data("outerTip").remove();
                e.removeData("outerTip")
            }
            if (e.data("innerTip")) {
                e.data("innerTip").remove();
                e.removeData("innerTip")
            }
            g = new c(a("<div>").css(i).appendTo(e));
            h = new c(a("<div>").css(i).appendTo(e));
            var l;
            for (var m = 0; m < b.pos.length; m++) {
                l = b.getRelativeNames(m);
                if (k.center[l.pos.c1] >= j[l.pos.c1] && k.center[l.pos.c1] <= j[l.pos.c2]) {
                    if (m % 2 == 0) {
                        if (k[l.pos.o] >= j[l.pos.o] && k[l.pos.f] >= j[l.pos.f]) break
                    } else {
                        if (k[l.pos.o] <= j[l.pos.o] && k[l.pos.f] <= j[l.pos.f]) break
                    }
                }
                l = null
            }
            if (l) {
                k["set" + l.camel.pos.p1](k[l.pos.p1] + (l.isTopLeft ? 1 : -1) * (f.tipSize - k["border" + l.camel.pos.o]));
                n(k, g, l, f.tipSize, e.css("border-" + l.pos.o + "-color"));
                n(k, h, l, f.tipSize - 2 * k["border" + l.camel.pos.o], e.css("background-color"));
                e.data("outerTip", g.$).data("innerTip", h.$)
            } else {
                a.each([g.$, h.$], function() {
                    this.remove()
                })
            }
        }
    }

    function c() {
        this.initialize.apply(this, arguments)
    }
    var b = {};
    b.pos = a.extend(["top", "bottom", "left", "right"], {
        camel: ["Top", "Bottom", "Left", "Right"]
    });
    b.size = a.extend(["height", "width"], {
        camel: ["Height", "Width"]
    });
    b.getRelativeNames = function(a) {
        var c = {
            pos: {
                o: a,
                f: a % 2 == 0 ? a + 1 : a - 1,
                p1: a % 2 == 0 ? a : a - 1,
                p2: a % 2 == 0 ? a + 1 : a,
                c1: a < 2 ? 2 : 0,
                c2: a < 2 ? 3 : 1
            },
            size: {
                p: a < 2 ? 0 : 1,
                c: a < 2 ? 1 : 0
            }
        };
        var d = {};
        for (var e in c) {
            if (!d[e]) d[e] = {};
            for (var f in c[e]) {
                d[e][f] = b[e][c[e][f]];
                if (!d.camel) d.camel = {};
                if (!d.camel[e]) d.camel[e] = {};
                d.camel[e][f] = b[e].camel[c[e][f]]
            }
        }
        d.isTopLeft = d.pos.o == d.pos.p1;
        return d
    };
    (function() {
        function f(a, c) {
            if (c == undefined) {
                f(a, true);
                return f(a, false)
            }
            var d = b.getRelativeNames(c ? 0 : 2);
            a[d.size.p] = a.$["outer" + d.camel.size.p]();
            a[d.pos.f] = a[d.pos.o] + a[d.size.p];
            a.center[d.pos.o] = a[d.pos.o] + a[d.size.p] / 2;
            a.inner[d.pos.o] = a[d.pos.o] + a["border" + d.camel.pos.o];
            a.inner[d.size.p] = a.$["inner" + d.camel.size.p]();
            a.inner[d.pos.f] = a.inner[d.pos.o] + a.inner[d.size.p];
            a.inner.center[d.pos.o] = a.inner[d.pos.f] + a.inner[d.size.p] / 2;
            return a
        }
        var d = {
            setBorder: function(a, b) {
                return function(c) {
                    this.$.css("border-" + a.toLowerCase() + "-width", c + "px");
                    this["border" + a] = c;
                    return this.isActive ? f(this, b) : this
                }
            },
            setPosition: function(a, b) {
                return function(c) {
                    this.$.css(a.toLowerCase(), c + "px");
                    this[a.toLowerCase()] = c;
                    return this.isActive ? f(this, b) : this
                }
            }
        };
        c.prototype = {
            initialize: function(c) {
                this.$ = c;
                a.extend(true, this, this.$.offset(), {
                    center: {},
                    inner: {
                        center: {}
                    }
                });
                for (var d = 0; d < b.pos.length; d++) {
                    this["border" + b.pos.camel[d]] = parseInt(this.$.css("border-" + b.pos[d] + "-width")) || 0
                }
                this.active()
            },
            active: function() {
                this.isActive = true;
                f(this);
                return this
            },
            inactive: function() {
                this.isActive = false;
                return this
            }
        };
        for (var e = 0; e < b.pos.length; e++) {
            c.prototype["setBorder" + b.pos.camel[e]] = d.setBorder(b.pos.camel[e], e < 2);
            if (e % 2 == 0) c.prototype["set" + b.pos.camel[e]] = d.setPosition(b.pos.camel[e], e < 2)
        }
    })();
    a.fn.balloon = function(b) {
        b = a.extend(true, {}, a.balloon.defaults, b);
        return this.one("mouseenter", function(c) {
            var d = a(this),
                f = this;
            var g = d.unbind("mouseenter", arguments.callee).showBalloon(b).mouseenter(function(a) {
                e(d, a) && d.showBalloon()
            }).data("balloon");
            if (g) {
                g.mouseleave(function(b) {
                    if (f == b.relatedTarget || a.contains(f, b.relatedTarget)) return;
                    d.hideBalloon()
                }).mouseenter(function(a) {
                    d.showBalloon()
                })
            }
        }).mouseleave(function(b) {
            var c = a(this);
            e(c, b) && c.hideBalloon()
        })
    };
    a.fn.showBalloon = function(b) {
        var c, e, f;
        if (!a.balloon.defaults.css) a.balloon.defaults.css = {};
        if (b || !this.data("options")) this.data("options", a.extend(true, {}, a.balloon.defaults, b));
        b = this.data("options");
        return this.each(function() {
            c = a(this);
            (f = c.data("offTimer")) && clearTimeout(f);
            var g = a.isFunction(b.contents) ? b.contents() : b.contents || c.attr("title");
            var h = !(e = c.data("balloon"));
            if (h) e = a("<div>").append(g);
            if (!b.url && (!e || e.html() == "")) return;
            if (!h && g && g != e.html()) e.empty().append(g);
            c.removeAttr("title");
            if (b.url) {
                e.load(a.isFunction(b.url) ? b.url(this) : b.url, function(a, f, g) {
                    if (b.ajaxComplete) b.ajaxComplete(a, f, g);
                    d(c, e, b)
                })
            }
            if (h) {
                e.addClass(b.classname).css(b.css).css({
                    visibility: "hidden",
                    position: "absolute"
                }).appendTo("body");
                c.data("balloon", e);
                d(c, e, b);
                e.hide().css("visibility", "visible")
            } else {
                d(c, e, b)
            }
            c.data("onTimer", setTimeout(function() {
                if (b.showAnimation) {
                    b.showAnimation.apply(e.stop(true, true), [b.showDuration])
                } else {
                    e.show(b.showDuration, function() {
                        if (this.style.removeAttribute) {
                            this.style.removeAttribute("filter")
                        }
                    })
                }
            }, b.delay))
        })
    };
    a.fn.hideBalloon = function() {
        var b = this.data("options"),
            c, d;
        return this.each(function() {
            var e = a(this);
            (c = e.data("onTimer")) && clearTimeout(c);
            (d = e.data("offTimer")) && clearTimeout(d);
            e.data("offTimer", setTimeout(function() {
                var a = e.data("balloon");
                if (b.hideAnimation) {
                    a && b.hideAnimation.apply(a.stop(true, true), [b.hideDuration])
                } else {
                    a && a.stop(true, true).hide(b.hideDuration)
                }
            }, b.minLifetime))
        })
    };
    a.balloon = {
        defaults: {
            contents: null,
            url: null,
            ajaxComplete: null,
            classname: null,
            position: "top",
            offsetX: 0,
            offsetY: 0,
            tipSize: 12,
            delay: 0,
            minLifetime: 200,
            showDuration: 100,
            showAnimation: null,
            hideDuration: 80,
            hideAnimation: function(a) {
                this.fadeOut(a)
            },
            css: {
                minWidth: "20px",
                padding: "5px",
                borderRadius: "6px",
                border: "solid 1px #777",
                boxShadow: "4px 4px 4px #555",
                color: "#666",
                backgroundColor: "#efefef",
                opacity: a.support.opacity ? "0.85" : null,
                zIndex: "32767",
                textAlign: "left"
            }
        }
    }
})(jQuery)