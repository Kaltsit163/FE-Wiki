/*
 * @Author: liuye
 * @Date: 2017-06-06 10:50:47
 * @Last Modified by: liuye
 */

export default {
  /*
   * @Tool: canvas 效果
   * @Param: string 
   */
  initCanvas(IdString) {
    window._ = function () {
      var t = {};
      "object" == typeof window && window._ && (t = window._);
      var n = t.isObj = function () {
          function t(t) {
            var n = typeof t;
            return !!t && ("function" === n || "object" === n)
          }
          return t
        }(),
        e = t.isUndef = function () {
          function t(t) {
            return void 0 === t
          }
          return t
        }(),
        r = t.inherits = function () {
          function t(t, r) {
            if (e) return t.prototype = e(r.prototype);
            n.prototype = r.prototype, t.prototype = new n
          }

          function n() {}
          var e = Object.create;
          return t
        }(),
        i = t.has = function () {
          function t(t, e) {
            return n.call(t, e)
          }
          var n = Object.prototype.hasOwnProperty;
          return t
        }(),
        o = t.noop = function () {
          function t() {}
          return t
        }(),
        u = t.allKeys = function () {
          function t(t) {
            var n, e = [];
            for (n in t) e.push(n);
            return e
          }
          return t
        }(),
        a = t.idxOf = function () {
          function t(t, n, e) {
            return Array.prototype.indexOf.call(t, n, e)
          }
          return t
        }(),
        c = t.keys = function (t) {
          return Object.keys || function (t) {
            var n, e = [];
            for (n in t) i(t, n) && e.push(n);
            return e
          }
        }(),
        s = t.optimizeCb = function () {
          function t(t, n, r) {
            if (e(n)) return t;
            switch (null == r ? 3 : r) {
              case 1:
                return function (e) {
                  return t.call(n, e)
                };
              case 3:
                return function (e, r, i) {
                  return t.call(n, e, r, i)
                };
              case 4:
                return function (e, r, i, o) {
                  return t.call(n, e, r, i, o)
                }
            }
            return function () {
              return t.apply(n, arguments)
            }
          }
          return t
        }(),
        f = t.identity = function () {
          function t(t) {
            return t
          }
          return t
        }(),
        l = t.loadJs = function () {
          function t(t, n) {
            var e = document.createElement("script");
            e.src = t, e.onload = function () {
              var t = e.readyState && "complete" != e.readyState && "loaded" != e.readyState;
              n && n(!t)
            }, document.body.appendChild(e)
          }
          return t
        }(),
        d = t.objToStr = function () {
          function t(t) {
            return n.call(t)
          }
          var n = Object.prototype.toString;
          return t
        }(),
        h = t.isArgs = function () {
          function t(t) {
            return "[object Arguments]" === d(t)
          }
          return t
        }(),
        p = t.isFn = function () {
          function t(t) {
            var n = d(t);
            return "[object Function]" === n || "[object GeneratorFunction]" === n
          }
          return t
        }(),
        g = t.isStr = function () {
          function t(t) {
            return "[object String]" === d(t)
          }
          return t
        }(),
        m = t.safeGet = function () {
          function t(t, n) {
            g(n) && (n = n.split("."));
            for (var r; r = n.shift();)
              if (t = t[r], e(t)) return;
            return t
          }
          return t
        }(),
        v = t.isArr = function (t) {
          return Array.isArray || function (t) {
            return "[object Array]" === d(t)
          }
        }(),
        y = t.isNum = function () {
          function t(t) {
            return "[object Number]" === d(t)
          }
          return t
        }(),
        w = t.isArrLike = function () {
          function t(t) {
            if (!i(t, "length")) return !1;
            var e = t.length;
            return y(e) && e >= 0 && e <= n && !p(t)
          }
          var n = Math.pow(2, 53) - 1;
          return t
        }(),
        b = t.each = function () {
          function t(t, n, e) {
            n = s(n, e);
            var r, i;
            if (w(t))
              for (r = 0, i = t.length; r < i; r++) n(t[r], r, t);
            else {
              var o = c(t);
              for (r = 0, i = o.length; r < i; r++) n(t[o[r]], o[r], t)
            }
            return t
          }
          return t
        }(),
        T = t.createAssigner = function () {
          function t(t, n) {
            return function (r) {
              return b(arguments, function (i, o) {
                if (0 !== o) {
                  var u = t(i);
                  b(u, function (t) {
                    n && !e(r[t]) || (r[t] = i[t])
                  })
                }
              }), r
            }
          }
          return t
        }(),
        x = t.defaults = function (t) {
          return T(u, !0)
        }(),
        S = t.extend = function (t) {
          return T(u)
        }(),
        M = t.extendOwn = function (t) {
          return T(c)
        }(),
        C = t.values = function () {
          function t(t) {
            var n = [];
            return b(t, function (t) {
              n.push(t)
            }), n
          }
          return t
        }(),
        A = t.contain = function () {
          function t(t, n) {
            return w(t) || (t = C(t)), a(t, n) >= 0
          }
          return t
        }(),
        j = t.isBrowser = function (t) {
          return "object" == typeof window && "object" == typeof document && 9 === document.nodeType
        }(),
        P = t.isEmpty = function () {
          function t(t) {
            return null == t || (w(t) && (v(t) || g(t) || h(t)) ? 0 === t.length : 0 === c(t).length)
          }
          return t
        }(),
        k = t.isMatch = function () {
          function t(t, n) {
            var e = c(n),
              r = e.length;
            if (null == t) return !r;
            t = Object(t);
            for (var i = 0; i < r; i++) {
              var o = e[i];
              if (n[o] !== t[o] || !(o in t)) return !1
            }
            return !0
          }
          return t
        }(),
        I = t.ltrim = function () {
          function t(t, e) {
            if (null == e) return t.replace(n, "");
            for (var r, i, o = 0, u = t.length, a = e.length, c = !0; c && o < u;)
              for (c = !1, r = -1, i = t.charAt(o); ++r < a;)
                if (i === e[r]) {
                  c = !0, o++;
                  break
                }
            return o >= u ? "" : t.substr(o, u)
          }
          var n = /^\s+/;
          return t
        }(),
        E = t.matcher = function () {
          function t(t) {
            return t = M({}, t),
              function (n) {
                return k(n, t)
              }
          }
          return t
        }(),
        O = t.safeCb = function (t) {
          return function (t, e, r) {
            return null == t ? f : p(t) ? s(t, e, r) : n(t) ? E(t) : function (t) {
              return function (n) {
                return null == n ? void 0 : n[t]
              }
            }
          }
        }(),
        z = t.filter = function () {
          function t(t, n, e) {
            var r = [];
            return n = O(n, e), b(t, function (t, e, i) {
              n(t, e, i) && r.push(t)
            }), r
          }
          return t
        }(),
        L = t.map = function () {
          function t(t, n, e) {
            n = O(n, e);
            for (var r = !w(t) && c(t), i = (r || t).length, o = Array(i), u = 0; u < i; u++) {
              var a = r ? r[u] : u;
              o[u] = n(t[a], a, t)
            }
            return o
          }
          return t
        }(),
        R = t.toArr = function () {
          function t(t) {
            return t ? v(t) ? t : w(t) && !g(t) ? L(t) : [t] : []
          }
          return t
        }(),
        D = t.Class = function () {
          function t(t, n) {
            return e.extend(t, n)
          }

          function n(t, e, i) {
            i = i || {};
            var o = e.className || m(e, "initialize.name") || "";
            delete e.className;
            var u = new Function("toArr", "return function " + o + "(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};")(R);
            return r(u, t), u.prototype.constructor = u, u.extend = function (t, e) {
              return n(u, t, e)
            }, u.inherits = function (t) {
              r(u, t)
            }, u.methods = function (t) {
              return S(u.prototype, t), u
            }, u.statics = function (t) {
              return S(u, t), u
            }, u.methods(e).statics(i), u
          }
          var e = t.Base = n(Object, {
            className: "Base",
            callSuper: function (t, n, e) {
              return t.prototype[n].apply(this, e)
            },
            toString: function () {
              return this.constructor.name
            }
          });
          return t
        }(),
        F = t.Select = function (t) {
          function n(t, n) {
            for (var e = n.length, r = t.length, i = 0; i < e; i++) t[r++] = n[i];
            return t.length = r, t
          }
          t = D({
            className: "Select",
            initialize: function (t) {
              return this.length = 0, t ? g(t) ? e.find(t) : void(t.nodeType && (this[0] = t, this.length = 1)) : this
            },
            find: function (t) {
              var e = new F;
              return this.each(function () {
                n(e, this.querySelectorAll(t))
              }), e
            },
            each: function (t) {
              return b(this, function (n, e) {
                t.call(n, e, n)
              }), this
            }
          });
          var e = new t(document);
          return t
        }({}),
        N = t.$safeEls = function () {
          function t(t) {
            return R(g(t) ? new F(t) : t)
          }
          return t
        }(),
        q = t.$attr = function () {
          function t(t, o, u) {
            if (t = N(t), e(u) && g(o)) return r(t[0], o);
            var a = o;
            n(a) || (a = {}, a[o] = u), i(t, a)
          }

          function r(t, n) {
            return t.getAttribute(n)
          }

          function i(t, n) {
            b(t, function (t) {
              b(n, function (n, e) {
                t.setAttribute(e, n)
              })
            })
          }
          return t.remove = function (t, n) {
            t = N(t), n = R(n), b(t, function (t) {
              b(n, function (n) {
                t.removeAttribute(n)
              })
            })
          }, t
        }(),
        B = t.$data = function () {
          function t(t, e, r) {
            var i = e;
            return g(e) && (i = "data-" + e), n(e) && (i = {}, b(e, function (t, n) {
              i["data-" + n] = t
            })), q(t, i, r)
          }
          return t
        }(),
        U = t.delegate = function (t) {
          function n() {
            return !0
          }

          function e() {
            return !1
          }

          function r(n) {
            var e, r = this.events[n.type],
              o = i.call(this, n, r);
            n = new t.Event(n);
            for (var u, a, c = 0;
              (a = o[c++]) && !n.isPropagationStopped();)
              for (n.curTarget = a.el, u = 0;
                (e = a.handlers[u++]) && !n.isImmediatePropagationStopped();) !1 === e.handler.apply(a.el, [n]) && (n.preventDefault(), n.stopPropagation())
          }

          function i(t, n) {
            var e, r, i, o, u = t.target,
              a = [],
              c = n.delegateCount;
            if (u.nodeType)
              for (; u !== this; u = u.parentNode || this) {
                for (r = [], o = 0; o < c; o++) i = n[o], e = i.selector + " ", void 0 === r[e] && (r[e] = A(this.querySelectorAll(e), u)), r[e] && r.push(i);
                r.length && a.push({
                  el: u,
                  handlers: r
                })
              }
            return c < n.length && a.push({
              el: this,
              handlers: n.slice(c)
            }), a
          }
          return t = {
            add: function (t, n, e, i) {
              var o, u = {
                selector: e,
                handler: i
              };
              t.events || (t.events = {}), (o = t.events[n]) || (o = t.events[n] = [], o.delegateCount = 0, t.addEventListener(n, function (n) {
                r.apply(t, arguments)
              }, !1)), e ? o.splice(o.delegateCount++, 0, u) : o.push(u)
            },
            remove: function (t, n, e, r) {
              var i = t.events;
              if (i && i[n])
                for (var o, u = i[n], a = u.length; a--;) o = u[a], e && o.selector != e || o.handler != r || (u.splice(a, 1), o.selector && u.delegateCount--)
            },
            Event: D({
              className: "Event",
              initialize: function (t) {
                this.origEvent = t
              },
              isDefaultPrevented: e,
              isPropagationStopped: e,
              isImmediatePropagationStopped: e,
              preventDefault: function () {
                var t = this.origEvent;
                this.isDefaultPrevented = n, t && t.preventDefault && t.preventDefault()
              },
              stopPropagation: function () {
                var t = this.origEvent;
                this.isPropagationStopped = n, t && t.stopPropagation && t.stopPropagation()
              },
              stopImmediatePropagation: function () {
                var t = this.origEvent;
                this.isImmediatePropagationStopped = n, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
              }
            })
          }
        }({}),
        X = t.$event = function (t) {
          function n(t) {
            return function (n, r, i, o) {
              n = N(n), e(o) && (o = i, i = void 0), b(n, function (n) {
                U[t](n, r, i, o)
              })
            }
          }
          return {
            on: n("add"),
            off: n("remove")
          }
        }(),
        $ = t.now = function (t) {
          return Date.now || function () {
            return (new Date).getTime()
          }
        }(),
        G = t.raf = function (t) {
          var n, e;
          if (j) {
            n = window.requestAnimationFrame, e = window.cancelAnimationFrame;
            for (var r = 0, i = ["ms", "moz", "webkit", "o"], o = 0, u = i.length; o < u && !n; o++) n = window[i[o] + "RequestAnimationFrame"], e = window[i[o] + "CancelAnimationFrame"] || window[i[o] + "CancelRequestAnimationFrame"]
          }
          return n = n || function (t) {
            var n = $(),
              e = Math.max(0, 16 - (n - r)),
              i = setTimeout(function () {
                t(n + e)
              }, e);
            return r = n + e, i
          }, e = e || function (t) {
            clearTimeout(t)
          }, n.cancel = e, n
        }(),
        Y = t.rtrim = function () {
          function t(t, e) {
            if (null == e) return t.replace(n, "");
            for (var r, i, o = t.length - 1, u = e.length, a = !0; a && o >= 0;)
              for (a = !1, r = -1, i = t.charAt(o); ++r < u;)
                if (i === e[r]) {
                  a = !0, o--;
                  break
                }
            return o >= 0 ? t.substring(0, o + 1) : ""
          }
          var n = /\s+$/;
          return t
        }(),
        H = t.trim = function () {
          function t(t, e) {
            return null == e ? t.replace(n, "") : I(Y(t, e), e)
          }
          var n = /^\s+|\s+$/g;
          return t
        }(),
        _ = t.query = function (t) {
          t = {
            parse: function (t) {
              var n = {};
              return t = H(t).replace(r, ""), b(t.split("&"), function (t) {
                var r = t.split("="),
                  i = r.shift(),
                  o = r.length > 0 ? r.join("=") : null;
                i = decodeURIComponent(i), o = decodeURIComponent(o), e(n[i]) ? n[i] = o : v(n[i]) ? n[i].push(o) : n[i] = [n[i], o]
              }), n
            },
            stringify: function (e, r) {
              return z(L(e, function (e, i) {
                return n(e) && P(e) ? "" : v(e) ? t.stringify(e, i) : (r ? encodeURIComponent(r) : encodeURIComponent(i)) + "=" + encodeURIComponent(e)
              }), function (t) {
                return t.length > 0
              }).join("&")
            }
          };
          var r = /^(\?|#|&)/g;
          return t
        }({}),
        J = t.ajax = function () {
          function t(e) {
            x(e, t.setting);
            var r, i = e.type,
              u = e.url,
              a = e.data,
              c = e.dataType,
              s = e.success,
              f = e.error,
              l = e.timeout,
              d = e.complete,
              h = e.xhr();
            return h.onreadystatechange = function () {
              if (4 === h.readyState) {
                clearTimeout(r);
                var t, n = h.status;
                if (n >= 200 && n < 300 || 304 === n) {
                  t = h.responseText, "xml" === c && (t = h.responseXML);
                  try {
                    "json" === c && (t = JSON.parse(t))
                  } catch (t) {}
                  s(t, h)
                } else f(h);
                d(h)
              }
            }, "GET" === i ? (a = _.stringify(a), u += u.indexOf("?") > -1 ? "&" + a : "?" + a) : n(a) && (a = _.stringify(a)), h.open(i, u, !0), h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l > 0 && (r = setTimeout(function () {
              h.onreadystatechange = o, h.abort(), f(h, "timeout"), d(h)
            }, l)), h.send("GET" === i ? null : a), h
          }

          function e(t, n, e, r) {
            return p(n) && (r = e, e = n, n = {}), {
              url: t,
              data: n,
              success: e,
              dataType: r
            }
          }
          return t.setting = {
            type: "GET",
            success: o,
            error: o,
            complete: o,
            dataType: "json",
            data: {},
            xhr: function () {
              return new XMLHttpRequest
            },
            timeout: 0
          }, t.get = function () {
            return t(e.apply(null, arguments))
          }, t.post = function () {
            var n = e.apply(null, arguments);
            return n.type = "POST", t(n)
          }, t
        }();
      return function () {
        function t() {
          G(t), ++a, o.globalCompositeOperation = "source-over", o.shadowBlur = 0, o.fillStyle = "rgba(237, 162, 155,alp)".replace("alp", u.repaintAlpha), o.fillRect(0, 0, r, i), o.globalCompositeOperation = "lighter", c.length < u.count && Math.random() < u.spawnChance && c.push(new h), c.map(function (t) {
            t.step()
          })
        }

        function n() {
          return window.innerWidth > 800 ? 800 : window.innerWidth
        }
        console.log.apply(console, ["%c %c %c 如果你有幸看到这个Console，那就证明2.X的重构重启了，还是很开心的不是吗？ :) %c %c ",
            "background: #707d8b; padding:5px 0;",
            "background: #707d8b; padding:5px 0;",
            "color: #fff; background: #76a2ee; padding: 5px 0;",
            "background: #707d8b; padding:5px 0;",
            "background: #707d8b; padding:5px 0;"
          ]),
          X.on("#error-btn", "click", function () {
            TriggerError()
          }), X.on("#ajax-btn", "click", function () {
            J.get("test.json")
          }), X.on("#fps-btn", "click", function () {
            window.erudaFps || l(B(this, "src"), function () {
              eruda.add(erudaFps).show("fps").show()
            })
          });
        var e = document.getElementById(IdString),
          r = e.width = n(),
          i = e.height = 210,
          o = e.getContext("2d"),
          u = {
            len: 20,
            count: 50,
            baseTime: 10,
            addedTime: 10,
            dieChance: .05,
            spawnChance: 1,
            sparkChance: .1,
            sparkDist: 10,
            sparkSize: 2,
            color: "hsl(hue,100%,light%)",
            baseLight: 50,
            addedLight: 10,
            shadowToTimePropMult: 6,
            baseLightInputMultiplier: .01,
            addedLightInputMultiplier: .02,
            cx: r / 2,
            cy: i / 2,
            repaintAlpha: .04,
            hueChange: .1
          },
          a = 0,
          c = [],
          s = r / 2 / u.len,
          f = i / 2 / u.len,
          d = 2 * Math.PI / 6;
        o.fillStyle = "#eda29b", o.fillRect(0, 0, r, i);
        var h = D({
          className: "Line",
          initialize: function () {
            this.reset()
          },
          reset: function () {
            this.x = 0, this.y = 0, this.addedX = 0, this.addedY = 0, this.rad = 0, this.lightInputMultiplier = u.baseLightInputMultiplier + u.addedLightInputMultiplier * Math.random(), this.color = u.color.replace("hue", a * u.hueChange), this.cumulativeTime = 0, this.beginPhase()
          },
          beginPhase: function () {
            this.x += this.addedX, this.y += this.addedY, this.time = 0, this.targetTime = u.baseTime + u.addedTime * Math.random() | 0, this.rad += d * (Math.random() < .5 ? 1 : -1), this.addedX = Math.cos(this.rad), this.addedY = Math.sin(this.rad), (Math.random() < u.dieChance || this.x > s || this.x < -s || this.y > f || this.y < -f) && this.reset()
          },
          step: function () {
            ++this.time, ++this.cumulativeTime, this.time >= this.targetTime && this.beginPhase();
            var t = this.time / this.targetTime,
              n = Math.sin(t * Math.PI / 2),
              e = this.addedX * n,
              r = this.addedY * n;
            o.shadowBlur = t * u.shadowToTimePropMult, o.fillStyle = o.shadowColor = this.color.replace("light", u.baseLight + u.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)), o.fillRect(u.cx + (this.x + e) * u.len, u.cy + (this.y + r) * u.len, 2, 2), Math.random() < u.sparkChance && o.fillRect(u.cx + (this.x + e) * u.len + Math.random() * u.sparkDist * (Math.random() < .5 ? 1 : -1) - u.sparkSize / 2, u.cy + (this.y + r) * u.len + Math.random() * u.sparkDist * (Math.random() < .5 ? 1 : -1) - u.sparkSize / 2, u.sparkSize, u.sparkSize)
          }
        });
        t(), window.addEventListener("resize", function () {
          r = e.width = n(), i = e.height = 210, o.fillStyle = "#eda29b", o.fillRect(0, 0, r, i), u.cx = r / 2, u.cy = i / 2, s = r / 2 / u.len, f = i / 2 / u.len
        })
      }(), t
    }();
  }
};
