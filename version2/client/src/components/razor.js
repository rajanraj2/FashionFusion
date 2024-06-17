export const razor = !(function () {
  "use strict";
  var e, c, n, u, f, l;
  Array.prototype.fill ||
    Object.defineProperty(Array.prototype, "fill", {
      value: function (t) {
        if (null == this) throw new TypeError("this is null or not defined");
        for (
          var e = Object(this),
            n = e.length >>> 0,
            r = arguments[1] >> 0,
            o = r < 0 ? Math.max(n + r, 0) : Math.min(r, n),
            r = arguments[2],
            r = void 0 === r ? n : r >> 0,
            i = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
          o < i;

        )
          (e[o] = t), o++;
        return e;
      },
    }),
    Array.prototype.find ||
      Object.defineProperty(Array.prototype, "find", {
        value: function (t) {
          if (null == this) throw TypeError('"this" is null or not defined');
          var e = Object(this),
            n = e.length >>> 0;
          if ("function" != typeof t)
            throw TypeError("predicate must be a function");
          for (var r = arguments[1], o = 0; o < n; ) {
            var i = e[o];
            if (t.call(r, i, o, e)) return i;
            o++;
          }
        },
        configurable: !0,
        writable: !0,
      }),
    Array.from ||
      (Array.from =
        ((e = Object.prototype.toString),
        (c = function (t) {
          return "function" == typeof t || "[object Function]" === e.call(t);
        }),
        (n = Math.pow(2, 53) - 1),
        (u = function (t) {
          (t = Number(t)),
            (t = isNaN(t)
              ? 0
              : 0 !== t && isFinite(t)
              ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t))
              : t);
          return Math.min(Math.max(t, 0), n);
        }),
        (f = function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              return e.push(t);
            }),
            e
          );
        }),
        function (t) {
          if (t instanceof Set) return f(t);
          var e = Object(t);
          if (null == t)
            throw new TypeError(
              "Array.from requires an array-like object - not null or undefined"
            );
          var n,
            r = 1 < arguments.length ? arguments[1] : void 0;
          if (void 0 !== r) {
            if (!c(r))
              throw new TypeError(
                "Array.from: when provided, the second argument must be a function"
              );
            2 < arguments.length && (n = arguments[2]);
          }
          for (
            var o,
              i = u(e.length),
              a = c(this) ? Object(new this(i)) : new Array(i),
              s = 0;
            s < i;

          )
            (o = e[s]),
              (a[s] = r ? (void 0 === n ? r(o, s) : r.call(n, o, s)) : o),
              (s += 1);
          return (a.length = i), a;
        })),
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var e = this;
        do {
          if (Element.prototype.matches.call(e, t)) return e;
        } while (
          null !== (e = e.parentElement || e.parentNode) &&
          1 === e.nodeType
        );
        return null;
      }),
    "currentScript" in (l = document) ||
      Object.defineProperty(l, "currentScript", {
        get: function () {
          try {
            throw new Error();
          } catch (t) {
            var e,
              n = 0,
              r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(t.stack),
              o = (r && r[1]) || !1,
              i = (r && r[2]) || !1,
              a = l.location.href.replace(l.location.hash, ""),
              s = l.getElementsByTagName("script");
            for (
              o === a &&
              ((r = l.documentElement.outerHTML),
              (i = new RegExp(
                "(?:[^\\n]+?\\n){0," +
                  (i - 2) +
                  "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                "i"
              )),
              (e = r.replace(i, "$1").trim()));
              n < s.length;
              n++
            ) {
              if ("interactive" === s[n].readyState) return s[n];
              if (s[n].src === o) return s[n];
              if (o === a && s[n].innerHTML && s[n].innerHTML.trim() === e)
                return s[n];
            }
            return null;
          }
        },
      }),
    "function" != typeof Object.assign &&
      Object.defineProperty(Object, "assign", {
        value: function (t, e) {
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var n = Object(t), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (null != o)
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
          }
          return n;
        },
        writable: !0,
        configurable: !0,
      });
  var m,
    C =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function t(t, e, n) {
    return e && r(t.prototype, e), n && r(t, n), t;
  }
  function o(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function i(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function g(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
      })(t, e) ||
      s(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function s(t, e) {
    if (t) {
      if ("string" == typeof t) return d(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? d(t, e)
          : void 0
      );
    }
  }
  function d(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function b() {}
  function p(t) {
    return t();
  }
  function h() {
    return Object.create(null);
  }
  function v(t) {
    t.forEach(p);
  }
  function y(t) {
    return "function" == typeof t;
  }
  function w(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function a(t) {
    if (null == t) return b;
    for (
      var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1;
      r < e;
      r++
    )
      n[r - 1] = arguments[r];
    var o = t.subscribe.apply(t, n);
    return o.unsubscribe
      ? function () {
          return o.unsubscribe();
        }
      : o;
  }
  function S(t, e, n) {
    t.$$.on_destroy.push(a(e, n));
  }
  function x(t) {
    return null == t ? "" : t;
  }
  function P(t, e) {
    t.appendChild(e);
  }
  function R(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function _(t) {
    t.parentNode.removeChild(t);
  }
  function A(t) {
    return document.createElement(t);
  }
  function B(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function D(t) {
    return document.createTextNode(t);
  }
  function E() {
    return D(" ");
  }
  function T(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function O(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function k(t, e, n, r) {
    t.style.setProperty(e, n, r ? "important" : "");
  }
  function $(t) {
    m = t;
  }
  function L(t) {
    (function () {
      if (!m)
        throw new Error("Function called outside component initialization");
      return m;
    })().$$.on_mount.push(t);
  }
  ((Et = { exports: {} }).exports = (function () {
    function c(t) {
      return "function" == typeof t;
    }
    var n =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
      r = 0,
      e = void 0,
      o = void 0,
      s = function (t, e) {
        (l[r] = t), (l[r + 1] = e), 2 === (r += 2) && (o ? o(m) : v());
      },
      t = "undefined" != typeof window ? window : void 0,
      i = t || {},
      a = i.MutationObserver || i.WebKitMutationObserver,
      u =
        "undefined" == typeof self &&
        "undefined" != typeof process &&
        "[object process]" === {}.toString.call(process),
      i =
        "undefined" != typeof Uint8ClampedArray &&
        "undefined" != typeof importScripts &&
        "undefined" != typeof MessageChannel;
    function f() {
      var t = setTimeout;
      return function () {
        return t(m, 1);
      };
    }
    var l = new Array(1e3);
    function m() {
      for (var t = 0; t < r; t += 2)
        (0, l[t])(l[t + 1]), (l[t] = void 0), (l[t + 1] = void 0);
      r = 0;
    }
    var d,
      p,
      h,
      v = void 0;
    function y(t, e) {
      var n = this,
        r = new this.constructor(w);
      void 0 === r[b] && T(r);
      var o,
        i = n._state;
      return (
        i
          ? ((o = arguments[i - 1]),
            s(function () {
              return D(i, r, o, n._result);
            }))
          : A(n, r, t, e),
        r
      );
    }
    function g(t) {
      if (t && "object" == typeof t && t.constructor === this) return t;
      var e = new this(w);
      return x(e, t), e;
    }
    v = u
      ? function () {
          return process.nextTick(m);
        }
      : a
      ? ((p = 0),
        (a = new a(m)),
        (h = document.createTextNode("")),
        a.observe(h, { characterData: !0 }),
        function () {
          h.data = p = ++p % 2;
        })
      : i
      ? (((d = new MessageChannel()).port1.onmessage = m),
        function () {
          return d.port2.postMessage(0);
        })
      : (void 0 === t
          ? function () {
              try {
                var t = Function("return this")().require("vertx");
                return void 0 !== (e = t.runOnLoop || t.runOnContext)
                  ? function () {
                      e(m);
                    }
                  : f();
              } catch (t) {
                return f();
              }
            }
          : f)();
    var b = Math.random().toString(36).substring(2);
    function w() {}
    function S(t, e, n) {
      var o, i, r, a;
      e.constructor === t.constructor && n === y && e.constructor.resolve === g
        ? ((r = t),
          1 === (a = e)._state
            ? R(r, a._result)
            : 2 === a._state
            ? _(r, a._result)
            : A(
                a,
                void 0,
                function (t) {
                  return x(r, t);
                },
                function (t) {
                  return _(r, t);
                }
              ))
        : void 0 !== n && c(n)
        ? ((o = e),
          (i = n),
          s(function (n) {
            var r = !1,
              t = (function (t, e) {
                try {
                  t.call(
                    e,
                    function (t) {
                      r || ((r = !0), o !== t ? x(n, t) : R(n, t));
                    },
                    function (t) {
                      r || ((r = !0), _(n, t));
                    }
                  );
                } catch (t) {
                  return t;
                }
              })(i, o);
            !r && t && ((r = !0), _(n, t));
          }, t))
        : R(t, e);
    }
    function x(t, e) {
      if (t === e)
        _(t, new TypeError("You cannot resolve a promise with itself"));
      else if (
        ((r = typeof e), null === e || ("object" != r && "function" != r))
      )
        R(t, e);
      else {
        var n = void 0;
        try {
          n = e.then;
        } catch (e) {
          return void _(t, e);
        }
        S(t, e, n);
      }
      var r;
    }
    function P(t) {
      t._onerror && t._onerror(t._result), B(t);
    }
    function R(t, e) {
      void 0 === t._state &&
        ((t._result = e),
        (t._state = 1),
        0 !== t._subscribers.length && s(B, t));
    }
    function _(t, e) {
      void 0 === t._state && ((t._state = 2), (t._result = e), s(P, t));
    }
    function A(t, e, n, r) {
      var o = t._subscribers,
        i = o.length;
      (t._onerror = null),
        (o[i] = e),
        (o[i + 1] = n),
        (o[i + 2] = r),
        0 === i && t._state && s(B, t);
    }
    function B(t) {
      var e = t._subscribers,
        n = t._state;
      if (0 !== e.length) {
        for (var r, o = void 0, i = t._result, a = 0; a < e.length; a += 3)
          (r = e[a]), (o = e[a + n]), r ? D(n, r, o, i) : o(i);
        t._subscribers.length = 0;
      }
    }
    function D(t, e, n, r) {
      var o = c(n),
        i = void 0,
        a = void 0,
        s = !0;
      if (o) {
        try {
          i = n(r);
        } catch (t) {
          (s = !1), (a = t);
        }
        if (e === i)
          return void _(
            e,
            new TypeError(
              "A promises callback cannot return that same promise."
            )
          );
      } else i = r;
      void 0 !== e._state ||
        (o && s
          ? x(e, i)
          : !1 === s
          ? _(e, a)
          : 1 === t
          ? R(e, i)
          : 2 === t && _(e, i));
    }
    var E = 0;
    function T(t) {
      (t[b] = E++),
        (t._state = void 0),
        (t._result = void 0),
        (t._subscribers = []);
    }
    var O =
      ((k.prototype._enumerate = function (t) {
        for (var e = 0; void 0 === this._state && e < t.length; e++)
          this._eachEntry(t[e], e);
      }),
      (k.prototype._eachEntry = function (e, t) {
        var n = this._instanceConstructor,
          r = n.resolve;
        if (r === g) {
          var o,
            i = void 0,
            a = void 0,
            s = !1;
          try {
            i = e.then;
          } catch (e) {
            (s = !0), (a = e);
          }
          i === y && void 0 !== e._state
            ? this._settledAt(e._state, t, e._result)
            : "function" != typeof i
            ? (this._remaining--, (this._result[t] = e))
            : n === $
            ? ((o = new n(w)),
              s ? _(o, a) : S(o, e, i),
              this._willSettleAt(o, t))
            : this._willSettleAt(
                new n(function (t) {
                  return t(e);
                }),
                t
              );
        } else this._willSettleAt(r(e), t);
      }),
      (k.prototype._settledAt = function (t, e, n) {
        var r = this.promise;
        void 0 === r._state &&
          (this._remaining--, 2 === t ? _(r, n) : (this._result[e] = n)),
          0 === this._remaining && R(r, this._result);
      }),
      (k.prototype._willSettleAt = function (t, e) {
        var n = this;
        A(
          t,
          void 0,
          function (t) {
            return n._settledAt(1, e, t);
          },
          function (t) {
            return n._settledAt(2, e, t);
          }
        );
      }),
      k);
    function k(t, e) {
      (this._instanceConstructor = t),
        (this.promise = new t(w)),
        this.promise[b] || T(this.promise),
        n(e)
          ? ((this.length = e.length),
            (this._remaining = e.length),
            (this._result = new Array(this.length)),
            0 === this.length
              ? R(this.promise, this._result)
              : ((this.length = this.length || 0),
                this._enumerate(e),
                0 === this._remaining && R(this.promise, this._result)))
          : _(
              this.promise,
              new Error("Array Methods must be provided an Array")
            );
    }
    var $ =
      ((L.prototype.catch = function (t) {
        return this.then(null, t);
      }),
      (L.prototype.finally = function (e) {
        var n = this.constructor;
        return c(e)
          ? this.then(
              function (t) {
                return n.resolve(e()).then(function () {
                  return t;
                });
              },
              function (t) {
                return n.resolve(e()).then(function () {
                  throw t;
                });
              }
            )
          : this.then(e, e);
      }),
      L);
    function L(t) {
      (this[b] = E++),
        (this._result = this._state = void 0),
        (this._subscribers = []),
        w !== t &&
          ("function" != typeof t &&
            (function () {
              throw new TypeError(
                "You must pass a resolver function as the first argument to the promise constructor"
              );
            })(),
          this instanceof L
            ? (function (e, t) {
                try {
                  t(
                    function (t) {
                      x(e, t);
                    },
                    function (t) {
                      _(e, t);
                    }
                  );
                } catch (t) {
                  _(e, t);
                }
              })(this, t)
            : (function () {
                throw new TypeError(
                  "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                );
              })());
    }
    return (
      ($.prototype.then = y),
      ($.all = function (t) {
        return new O(this, t).promise;
      }),
      ($.race = function (o) {
        var i = this;
        return n(o)
          ? new i(function (t, e) {
              for (var n = o.length, r = 0; r < n; r++)
                i.resolve(o[r]).then(t, e);
            })
          : new i(function (t, e) {
              return e(new TypeError("You must pass an array to race."));
            });
      }),
      ($.resolve = g),
      ($.reject = function (t) {
        var e = new this(w);
        return _(e, t), e;
      }),
      ($._setScheduler = function (t) {
        o = t;
      }),
      ($._setAsap = function (t) {
        s = t;
      }),
      ($._asap = s),
      ($.polyfill = function () {
        var t = void 0,
          e = (t = C).Promise;
        if (e) {
          var n = null;
          try {
            n = Object.prototype.toString.call(e.resolve());
          } catch (t) {}
          if ("[object Promise]" === n && !e.cast) return;
        }
        t.Promise = $;
      }),
      ($.Promise = $)
    );
  })()),
    Et.exports.polyfill(),
    String.prototype.includes ||
      (String.prototype.includes = function (t, e) {
        if (t instanceof RegExp)
          throw TypeError("first argument must not be a RegExp");
        return void 0 === e && (e = 0), -1 !== this.indexOf(t, e);
      });
  var N = [],
    j = [],
    M = [],
    K = [],
    z = Promise.resolve(),
    F = !1;
  function U(t) {
    M.push(t);
  }
  var G = !1,
    I = new Set();
  function Z() {
    if (!G) {
      G = !0;
      do {
        for (var t = 0; t < N.length; t += 1) {
          var e = N[t];
          $(e),
            (o = e.$$),
            (e = void 0),
            void (
              null !== o.fragment &&
              (o.update(),
              v(o.before_update),
              (e = o.dirty),
              (o.dirty = [-1]),
              o.fragment && o.fragment.p(o.ctx, e),
              o.after_update.forEach(U))
            );
        }
        for (N.length = 0; j.length; ) j.pop()();
        for (var n = 0; n < M.length; n += 1) {
          var r = M[n];
          I.has(r) || (I.add(r), r());
        }
      } while (((M.length = 0), N.length));
      for (; K.length; ) K.pop()();
      (G = F = !1), I.clear();
    }
    var o;
  }
  var H,
    q = new Set();
  function Y(t, e) {
    t && t.i && (q.delete(t), t.i(e));
  }
  function Q(t, e, n, r) {
    t &&
      t.o &&
      (q.has(t) ||
        (q.add(t),
        H.c.push(function () {
          q.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e)));
  }
  var W =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;
  function J(t) {
    t && t.c();
  }
  function V(n, t, e) {
    var r = n.$$,
      o = r.fragment,
      i = r.on_mount,
      a = r.on_destroy,
      r = r.after_update;
    o && o.m(t, e),
      U(function () {
        var t,
          e = i.map(p).filter(y);
        a
          ? a.push.apply(
              a,
              (function (t) {
                if (Array.isArray(t)) return d(t);
              })((t = e)) ||
                (function (t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(t)
                  )
                    return Array.from(t);
                })(t) ||
                s(t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
            )
          : v(e),
          (n.$$.on_mount = []);
      }),
      r.forEach(U);
  }
  function X(t, e) {
    t = t.$$;
    null !== t.fragment &&
      (v(t.on_destroy),
      t.fragment && t.fragment.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function tt(r, t, e, n, o, i, a) {
    void 0 === a && (a = [-1]);
    var s = m;
    $(r);
    var c = t.props || {},
      u = (r.$$ = {
        fragment: null,
        ctx: null,
        props: i,
        update: b,
        not_equal: o,
        bound: h(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(s ? s.$$.context : []),
        callbacks: h(),
        dirty: a,
        skip_bound: !1,
      }),
      f = !1;
    (u.ctx = e
      ? e(r, c, function (t, e) {
          var n =
            !(arguments.length <= 2) && arguments.length - 2
              ? arguments.length <= 2
                ? void 0
                : arguments[2]
              : e;
          return (
            u.ctx &&
              o(u.ctx[t], (u.ctx[t] = n)) &&
              (!u.skip_bound && u.bound[t] && u.bound[t](n),
              f &&
                ((n = t),
                -1 === (t = r).$$.dirty[0] &&
                  (N.push(t), F || ((F = !0), z.then(Z)), t.$$.dirty.fill(0)),
                (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31))),
            e
          );
        })
      : []),
      u.update(),
      (f = !0),
      v(u.before_update),
      (u.fragment = !!n && n(u.ctx)),
      t.target &&
        (t.hydrate
          ? ((n = t.target),
            (n = Array.from(n.childNodes)),
            u.fragment && u.fragment.l(n),
            n.forEach(_))
          : u.fragment && u.fragment.c(),
        t.intro && Y(r.$$.fragment),
        V(r, t.target, t.anchor),
        Z()),
      $(s);
  }
  var et =
      (((lt = rt.prototype).$destroy = function () {
        X(this, 1), (this.$destroy = b);
      }),
      (lt.$on = function (t, e) {
        var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          n.push(e),
          function () {
            var t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        );
      }),
      (lt.$set = function (t) {
        this.$$set &&
          0 !== Object.keys(t).length &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }),
      rt),
    nt = [];
  function rt() {}
  var ot = (function (o, r) {
    var i;
    void 0 === r && (r = b);
    var a = [];
    function s(t) {
      if (w(o, t) && ((o = t), i)) {
        for (var t = !nt.length, e = 0; e < a.length; e += 1) {
          var n = a[e];
          n[1](), nt.push(n, o);
        }
        if (t) {
          for (var r = 0; r < nt.length; r += 2) nt[r][0](nt[r + 1]);
          nt.length = 0;
        }
      }
    }
    return {
      set: s,
      update: function (t) {
        s(t(o));
      },
      subscribe: function (t, e) {
        void 0 === e && (e = b);
        var n = [t, e];
        return (
          a.push(n),
          1 === a.length && (i = r(s) || b),
          t(o),
          function () {
            var t = a.indexOf(n);
            -1 !== t && a.splice(t, 1), 0 === a.length && (i(), (i = null));
          }
        );
      },
    };
  })({
    baseUrl: "https://api.razorpay.com/v1",
    paymentButtonOptions: null,
    isTestMode: null,
    isQATestMode: null,
    isColorJSLoading: !1,
    buttonPreferences: { isFetching: !1, data: null, error: null },
    modalFrameEl: null,
    isIframeContentsLoaded: !1,
    isPaymentFormOpened: !1,
  });
  function it() {
    return (
      a(ot, function (t) {
        return (e = t);
      })(),
      e
    );
    var e;
  }
  function at(e) {
    ot.update(function (t) {
      return Object.assign({}, t, e);
    });
  }
  function st(r, o) {
    return (
      void 0 === o && (o = "."),
      function (t) {
        for (var e = o, n = 0; n < r; n++) e += "0";
        return t.replace(e, "");
      }
    );
  }
  function ct(t, e) {
    return void 0 === e && (e = ","), t.replace(/\./, e);
  }
  var ut = {
      default: {
        decimals: 2,
        format: (Et = {
          three: function (t, e) {
            t = String(t).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"),
              "$1,"
            );
            return st(e)(t);
          },
          threecommadecimal: function (t, e) {
            t = ct(String(t)).replace(
              new RegExp("(.{1,3})(?=(...)+(\\,.{" + e + "})$)", "g"),
              "$1."
            );
            return st(e, ",")(t);
          },
          threespaceseparator: function (t, e) {
            t = String(t).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"),
              "$1 "
            );
            return st(e)(t);
          },
          threespacecommadecimal: function (t, e) {
            t = ct(String(t)).replace(
              new RegExp("(.{1,3})(?=(...)+(\\,.{" + e + "})$)", "g"),
              "$1 "
            );
            return st(e, ",")(t);
          },
          szl: function (t, e) {
            t = String(t).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"),
              "$1, "
            );
            return st(e)(t);
          },
          chf: function (t, e) {
            t = String(t).replace(
              new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"),
              "$1'"
            );
            return st(e)(t);
          },
          inr: function (t, e) {
            t = String(t).replace(
              new RegExp("(.{1,2})(?=.(..)+(\\..{" + e + "})$)", "g"),
              "$1,"
            );
            return st(e)(t);
          },
          none: function (t) {
            return String(t);
          },
        }).three,
        separator: ".",
        minimum: 100,
      },
      AED: { minor: "fil" },
      AFN: { minor: "pul" },
      ALL: { minor: "qindarka" },
      AMD: { minor: "luma" },
      ANG: { minor: "cent" },
      AOA: { minor: "lwei" },
      ARS: { format: Et.threecommadecimal, separator: ",", minor: "centavo" },
      AUD: { format: Et.threespaceseparator, minimum: 50, minor: "cent" },
      AWG: { minor: "cent" },
      AZN: { minor: "qÃ¤pik" },
      BAM: { minor: "fenning" },
      BBD: { minor: "cent" },
      BDT: { minor: "paisa" },
      BGN: { minor: "stotinki" },
      BHD: { decimals: 3, minor: "fils" },
      BIF: { decimals: 0, major: "franc", minor: "centime" },
      BMD: { minor: "cent" },
      BND: { minor: "sen" },
      BOB: { minor: "centavo" },
      BRL: {
        format: Et.threecommadecimal,
        separator: ",",
        minimum: 50,
        minor: "centavo",
      },
      BSD: { minor: "cent" },
      BTN: { minor: "chetrum" },
      BWP: { minor: "thebe" },
      BYR: { decimals: 0, major: "ruble" },
      BZD: { minor: "cent" },
      CAD: { minimum: 50, minor: "cent" },
      CDF: { minor: "centime" },
      CHF: { format: Et.chf, minimum: 50, minor: "rappen" },
      CLP: { decimals: 0, format: Et.none, major: "peso", minor: "centavo" },
      CNY: { minor: "jiao" },
      COP: { format: Et.threecommadecimal, separator: ",", minor: "centavo" },
      CRC: { format: Et.threecommadecimal, separator: ",", minor: "centimo" },
      CUC: { minor: "centavo" },
      CUP: { minor: "centavo" },
      CVE: { minor: "centavo" },
      CZK: { format: Et.threecommadecimal, separator: ",", minor: "haler" },
      DJF: { decimals: 0, major: "franc", minor: "centime" },
      DKK: { minimum: 250, minor: "Ã¸re" },
      DOP: { minor: "centavo" },
      DZD: { minor: "centime" },
      EGP: { minor: "piaster" },
      ERN: { minor: "cent" },
      ETB: { minor: "cent" },
      EUR: { minimum: 50, minor: "cent" },
      FJD: { minor: "cent" },
      FKP: { minor: "pence" },
      GBP: { minimum: 30, minor: "pence" },
      GEL: { minor: "tetri" },
      GIP: { minor: "pence" },
      GMD: { minor: "butut" },
      GTQ: { minor: "centavo" },
      GYD: { minor: "cent" },
      HKD: { minimum: 400, minor: "cent" },
      HNL: { minor: "centavo" },
      HRK: { format: Et.threecommadecimal, separator: ",", minor: "lipa" },
      HTG: { minor: "centime" },
      HUF: { decimals: 0, format: Et.none, major: "forint" },
      IDR: { format: Et.threecommadecimal, separator: ",", minor: "sen" },
      ILS: { minor: "agorot" },
      INR: { format: Et.inr, minor: "paise" },
      IQD: { decimals: 3, minor: "fil" },
      IRR: { minor: "rials" },
      ISK: { decimals: 0, format: Et.none, major: "krÃ³na", minor: "aurar" },
      JMD: { minor: "cent" },
      JOD: { decimals: 3, minor: "fil" },
      JPY: { decimals: 0, minimum: 50, minor: "sen" },
      KES: { minor: "cent" },
      KGS: { minor: "tyyn" },
      KHR: { minor: "sen" },
      KMF: { decimals: 0, major: "franc", minor: "centime" },
      KPW: { minor: "chon" },
      KRW: { decimals: 0, major: "won", minor: "chon" },
      KWD: { decimals: 3, minor: "fil" },
      KYD: { minor: "cent" },
      KZT: { minor: "tiyn" },
      LAK: { minor: "at" },
      LBP: { format: Et.threespaceseparator, minor: "piastre" },
      LKR: { minor: "cent" },
      LRD: { minor: "cent" },
      LSL: { minor: "lisente" },
      LTL: {
        format: Et.threespacecommadecimal,
        separator: ",",
        minor: "centu",
      },
      LVL: { minor: "santim" },
      LYD: { decimals: 3, minor: "dirham" },
      MAD: { minor: "centime" },
      MDL: { minor: "ban" },
      MGA: { decimals: 0, major: "ariary" },
      MKD: { minor: "deni" },
      MMK: { minor: "pya" },
      MNT: { minor: "mongo" },
      MOP: { minor: "avo" },
      MRO: { minor: "khoum" },
      MUR: { minor: "cent" },
      MVR: { minor: "lari" },
      MWK: { minor: "tambala" },
      MXN: { minimum: 1e3, minor: "centavo" },
      MYR: { minor: "sen" },
      MZN: { decimals: 0, major: "metical" },
      NAD: { minor: "cent" },
      NGN: { minor: "kobo" },
      NIO: { minor: "centavo" },
      NOK: {
        format: Et.threecommadecimal,
        separator: ",",
        minimum: 300,
        minor: "Ã¸re",
      },
      NPR: { minor: "paise" },
      NZD: { minimum: 50, minor: "cent" },
      OMR: { minor: "baiza", decimals: 3 },
      PAB: { minor: "centesimo" },
      PEN: { minor: "centimo" },
      PGK: { minor: "toea" },
      PHP: { minor: "centavo" },
      PKR: { minor: "paisa" },
      PLN: {
        format: Et.threespacecommadecimal,
        separator: ",",
        minor: "grosz",
      },
      PYG: { decimals: 0, major: "guarani", minor: "centimo" },
      QAR: { minor: "dirham" },
      RON: { format: Et.threecommadecimal, separator: ",", minor: "bani" },
      RUB: { format: Et.threecommadecimal, separator: ",", minor: "kopeck" },
      RWF: { decimals: 0, major: "franc", minor: "centime" },
      SAR: { minor: "halalat" },
      SBD: { minor: "cent" },
      SCR: { minor: "cent" },
      SEK: {
        format: Et.threespacecommadecimal,
        separator: ",",
        minimum: 300,
        minor: "Ã¶re",
      },
      SGD: { minimum: 50, minor: "cent" },
      SHP: { minor: "new pence" },
      SLL: { minor: "cent" },
      SOS: { minor: "centesimi" },
      SRD: { minor: "cent" },
      STD: { minor: "centimo" },
      SVC: { minor: "centavo" },
      SYP: { minor: "piaster" },
      SZL: { format: Et.szl, minor: "cent" },
      THB: { minor: "satang" },
      TJS: { minor: "diram" },
      TMT: { minor: "tenga" },
      TND: { decimals: 3, minor: "millime" },
      TOP: { minor: "seniti" },
      TRY: { minor: "kurus" },
      TTD: { minor: "cent" },
      TWD: { minor: "cent" },
      TZS: { minor: "cent" },
      UAH: {
        format: Et.threespacecommadecimal,
        separator: ",",
        minor: "kopiyka",
      },
      UGX: { minor: "cent" },
      USD: { minimum: 50, minor: "cent" },
      UYU: { format: Et.threecommadecimal, separator: ",", minor: "centÃ©" },
      UZS: { minor: "tiyin" },
      VND: { format: Et.none, minor: "hao,xu" },
      VUV: { decimals: 0, major: "vatu", minor: "centime" },
      WST: { minor: "sene" },
      XAF: { decimals: 0, major: "franc", minor: "centime" },
      XCD: { minor: "cent" },
      XPF: { decimals: 0, major: "franc", minor: "centime" },
      YER: { minor: "fil" },
      ZAR: { format: Et.threespaceseparator, minor: "cent" },
      ZMK: { minor: "ngwee" },
    },
    ft = function (t) {
      return ut[t] || ut.default;
    },
    lt = [
      "AED",
      "ALL",
      "AMD",
      "ARS",
      "AUD",
      "AWG",
      "BBD",
      "BDT",
      "BMD",
      "BND",
      "BOB",
      "BSD",
      "BWP",
      "BZD",
      "CAD",
      "CHF",
      "CNY",
      "COP",
      "CRC",
      "CUP",
      "CZK",
      "DKK",
      "DOP",
      "DZD",
      "EGP",
      "ETB",
      "EUR",
      "FJD",
      "GBP",
      "GIP",
      "GMD",
      "GTQ",
      "GYD",
      "HKD",
      "HNL",
      "HRK",
      "HTG",
      "HUF",
      "IDR",
      "ILS",
      "INR",
      "JMD",
      "KES",
      "KGS",
      "KHR",
      "KYD",
      "KZT",
      "LAK",
      "LBP",
      "LKR",
      "LRD",
      "LSL",
      "MAD",
      "MDL",
      "MKD",
      "MMK",
      "MNT",
      "MOP",
      "MUR",
      "MVR",
      "MWK",
      "MXN",
      "MYR",
      "NAD",
      "NGN",
      "NIO",
      "NOK",
      "NPR",
      "NZD",
      "PEN",
      "PGK",
      "PHP",
      "PKR",
      "QAR",
      "RUB",
      "SAR",
      "SCR",
      "SEK",
      "SGD",
      "SLL",
      "SOS",
      "SSP",
      "SVC",
      "SZL",
      "THB",
      "TTD",
      "TZS",
      "USD",
      "UYU",
      "UZS",
      "YER",
      "ZAR",
    ],
    mt = {
      AED: "Ø¯.Ø¥",
      AFN: "&#x60b;",
      ALL: "&#x6b;",
      AMD: "&#1423;",
      ANG: "Æ’",
      AOA: "Kz",
      ARS: "$",
      AUD: "A$",
      AWG: "Æ’",
      AZN: "Ð¼Ð°Ð½",
      BAM: "KM",
      BBD: "Bds$",
      BDT: "&#x9f3;",
      BGN: "Ð»Ð²",
      BHD: "Ø¯.Ø¨",
      BIF: "FBu",
      BMD: "BD$",
      BND: "B$",
      BOB: "Bs.",
      BRL: "R$",
      BSD: "B$",
      BTN: "Nu.",
      BWP: "P",
      BYR: "Br",
      BZD: "BZ$",
      CAD: "C$",
      CDF: "FC",
      CHF: "Fr",
      CLP: "$",
      CNY: "&#165;",
      COP: "$",
      CRC: "&#x20a1;",
      CUC: "&#x20b1;",
      CUP: "$",
      CVE: "Esc",
      CZK: "KÄ",
      DJF: "Fdj",
      DKK: "Kr.",
      DOP: "RD$",
      DZD: "Ø¯.Ø¬",
      EGP: "E&#163;",
      ERN: "Nfa",
      ETB: "Br",
      EUR: "&#8364;",
      FJD: "FJ$",
      FKP: "FK&#163;",
      GBP: "&#163;",
      GEL: "áƒš",
      GHS: "&#x20b5;",
      GIP: "&#163;",
      GMD: "D",
      GNF: "FG",
      GTQ: "Q",
      GYD: "GY$",
      HKD: "HK$",
      HNL: "L",
      HRK: "Kn",
      HTG: "G",
      HUF: "Ft",
      IDR: "Rp",
      ILS: "&#x20aa;",
      INR: "â‚¹",
      IQD: "Ø¹.Ø¯",
      IRR: "&#xfdfc;",
      ISK: "Kr",
      JMD: "J$",
      JOD: "Ø¯.Ø§",
      JPY: "&#165;",
      KES: "KSh",
      KGS: "Ð»Ð²",
      KHR: "áŸ›",
      KMF: "CF",
      KPW: "â‚©",
      KRW: "â‚©",
      KWD: "Ø¯.Ùƒ",
      KYD: "KY$",
      KZT: "&#x20b8;",
      LAK: "&#x20ad;",
      LBP: "L&#163;",
      LD: "Ù„.Ø¯",
      LKR: "Rs",
      LRD: "L$",
      LSL: "L",
      LTL: "Lt",
      LVL: "Ls",
      LYD: "Ù„.Ø¯",
      MAD: "Ø¯.Ù….",
      MDL: "L",
      MGA: "Ar",
      MKD: "Ð´ÐµÐ½",
      MMK: "K",
      MNT: "&#x20ae;",
      MOP: "P",
      MRO: "UM",
      MUR: "ÉŒs",
      MVR: "Rf",
      MWK: "MK",
      MXN: "$",
      MYR: "RM",
      MZN: "MT",
      NAD: "N$",
      NGN: "&#x20a6;",
      NIO: "C$",
      NOK: "Kr",
      NPR: "NÉŒs",
      NZD: "NZ$",
      OMR: "Ø±.Ø¹.",
      PAB: "B/.",
      PEN: "S/.",
      PGK: "K",
      PHP: "&#x20b1;",
      PKR: "ÉŒs",
      PLN: "ZÅ‚",
      PYG: "&#x20b2;",
      QAR: "QAR",
      RON: "L",
      RSD: "Ð”Ð¸Ð½.",
      RUB: "&#8381;",
      RWF: "RF",
      SAR: "Ø±.Ø³",
      SBD: "SI$",
      SCR: "ÉŒs",
      SDG: "&#163;Sd",
      SEK: "Kr",
      SFR: "Fr",
      SGD: "S$",
      SHP: "&#163;",
      SLL: "Le",
      SOS: "So. Sh.",
      SRD: "$",
      SSP: "&#163;",
      STD: "Db",
      SVC: "&#x20a1;",
      SYP: "S&#163;",
      SZL: "L",
      THB: "&#x0e3f;",
      TJS: "SM",
      TMT: "M",
      TND: "Ø¯.Øª",
      TOP: "T$",
      TRY: "TL",
      TTD: "TT$",
      TWD: "NT$",
      TZS: "TSh",
      UAH: "&#x20b4;",
      UGX: "USh",
      USD: "$",
      UYU: "$U",
      UZS: "Ð»Ð²",
      VEF: "Bs",
      VND: "&#x20ab;",
      VUV: "VT",
      WST: "T",
      XAF: "CFA",
      XCD: "EC$",
      XOF: "CFA",
      XPF: "F",
      YER: "&#xfdfc;",
      ZAR: "R",
      ZMK: "ZK",
      ZWL: "Z$",
    };
  "function" != typeof Object.assign &&
    Object.defineProperty(Object, "assign", {
      value: function (t, e) {
        if (null === t)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(t), r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          if (null !== o)
            for (var i in o)
              Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
        }
        return n;
      },
      writable: !0,
      configurable: !0,
    });
  for (var dt = Object.keys(mt), pt = 0; pt < dt.length; pt++) {
    var ht = dt[pt];
    (ut[ht] = Object.assign({}, ut.default, ut[ht] || {})),
      (ut[ht].code = ht),
      mt[ht] && (ut[ht].symbol = mt[ht]);
  }
  function vt(t, e) {
    (e = ft(e)), (t /= Math.pow(10, e.decimals));
    return e.format(t.toFixed(e.decimals), e.decimals);
  }
  function yt(t, e) {
    return mt[e] + vt(t, e);
  }
  function gt(t, e, n) {
    var r;
    t &&
      (((r = document.createElement("script")).src = t),
      (r.onload = e),
      n && (r.onerror = n),
      document.head.appendChild(r));
  }
  function bt() {
    "object" == typeof window.RZP && window.RZP.environment;
  }
  function wt() {
    return (window.performance || Date).now();
  }
  (Et = lt.reduce(function (t, e) {
    return (t[e] = mt[e]), t;
  }, {})),
    (Et = {
      getCurrencyConfig: ft,
      supportedCurrencies: lt,
      displayCurrencies: mt,
      currencies: Et,
      formatAmount: vt,
      formatAmountWithSymbol: yt,
      formatAmountWithDecimals: function (t, e) {
        (t = vt(t, e)), (e = ft(e));
        return t.split(e.separator)[1]
          ? t
          : (t + e.separator).padEnd(t.length + e.decimals + 1, "0");
      },
      displayAmount: function (t, e) {
        var n = t.get,
          r = n("display_currency");
        return r
          ? mt[r] + vt(n("display_amount"), r)
          : yt(t.display_amount || e || n("amount"), n("currency"));
      },
      getDecimalAmount: function (t) {
        return (t / 100).toFixed(2).replace(".00", "");
      },
    }),
    (window.currencyLib = Et),
    (Et = navigator.userAgent),
    /iPhone/.test(Et),
    (function () {
      var t;
      if ("undefined" != typeof global) t = global;
      else if ("undefined" != typeof self) t = self;
      else
        try {
          t = Function("return this")();
        } catch (t) {
          throw new Error(
            "polyfill failed because global object is unavailable in this environment"
          );
        }
      var e = t.Promise;
      if (e) {
        var n = null;
        try {
          n = Object.prototype.toString.call(e.resolve());
        } catch (t) {}
        if ("[object Promise]" === n && !e.cast) return;
      }
      document.write(
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js"></script>'
      );
    })();
  var St,
    xt,
    Pt,
    Rt = (((Et = {}).lj = "96df432a283745908a06f711acd9e5eb"), Et),
    _t = ["ga", "hotjar", "perf"],
    At =
      ((xt = []),
      (Pt = !0),
      {
        buttonLoaded: function () {
          return Dt("loaded");
        },
        buttonClicked: function () {
          return Dt("clicked");
        },
        modalOpenSuccess: function () {
          return Dt("modal_success");
        },
        performance: {
          renderStart: function (t) {
            return Dt("performance.render:start", { timeSinceOpen: t });
          },
          renderEnd: function (t) {
            return Dt("performance.render:stop", { timeSinceOpen: t });
          },
        },
        init: function (t, e) {
          (St = e),
            window.rzpQ ||
              ((e = t),
              (t = window.analytics || window.razorpayAnalytics)
                ? t.createQ && (window.rzpQ = t.createQ({ pollFreq: 500 }))
                : ((t = function () {}),
                  (window.rzpQ = Object.assign(
                    {
                      interaction: t,
                      initiated: t,
                      dropped: t,
                      success: t,
                      failed: t,
                      push: t,
                      now: function () {
                        return window.rzpQ;
                      },
                      defineEventModifiers: t,
                    },
                    e
                  ))));
        },
        flushQueue: function () {
          if (window.rzpQ && window.rzpQ.paymentButton)
            for (var t = 0; t < xt.length; t++) {
              var e = xt[t];
              Dt(e.key, e.value);
            }
          Pt = !1;
        },
      }),
    Bt = {
      lj: At,
      init: function (o, i) {
        gt(
          "https://cdn.razorpay.com/static/analytics/bundle.js",
          function () {
            var e, n;
            void 0 === (r = ["lj"]) && (r = _t),
              window.razorpayAnalytics || window.analytics
                ? ((e = []),
                  (n = {}),
                  r.forEach(function (t) {
                    e.push(t), Rt[t] && (n[t] = Rt[t]);
                  }),
                  (window.razorpayAnalytics || window.analytics).init(
                    e,
                    n,
                    !1,
                    void 0,
                    !1,
                    void 0
                  ))
                : (window.analytics = { track: function () {} });
            var t = {
                paymentButton: function () {
                  return window.rzpQ;
                },
              },
              r = {
                pluginSource: i || "native",
                button_id: o,
                local_order_id:
                  Date.now() +
                  "_" +
                  window.location.href +
                  "_" +
                  Math.floor(1e7 * Math.random()),
              };
            At.init(t, r),
              window.rzpQ &&
                window.rzpQ.defineEventModifiers({
                  paymentButton: [
                    { propertyName: "event_type", value: "paymentbuttons" },
                    {
                      propertyName: "event_group",
                      value: "paymentbuttons-button",
                    },
                    { propertyName: "location", value: window.location.href },
                  ],
                }),
              At.flushQueue(),
              At.buttonLoaded();
          },
          function () {
            At.flushQueue();
          }
        );
      },
    };
  function Dt(t, e) {
    window.rzpQ && window.rzpQ.paymentButton
      ? window.rzpQ.push(
          window.rzpQ
            .now()
            .paymentButton()
            .interaction(
              "button.website." + t,
              Object.assign({}, e, { mode: "live", type: "payment" }, St)
            )
        )
      : Pt && xt.push({ key: t, value: e });
  }
  var Et = navigator.userAgent,
    Tt = /iPhone/.test(Et);
  function Ot(t) {
    var n, r;
    return {
      c: function () {
        T((n = A("div")), "class", "razorpay-loader svelte-q4m8xw"),
          T(n, "style", (r = t[0] ? "opacity: 1" : ""));
      },
      m: function (t, e) {
        R(t, n, e);
      },
      p: function (t, e) {
        1 & g(e, 1)[0] &&
          r !== (r = t[0] ? "opacity: 1" : "") &&
          T(n, "style", r);
      },
      i: b,
      o: b,
      d: function (t) {
        t && _(n);
      },
    };
  }
  function kt(t, e, n) {
    var e = e.show,
      r = void 0 !== e && e;
    return (
      (t.$$set = function (t) {
        "show" in t && n(0, (r = t.show));
      }),
      [r]
    );
  }
  (Et = window.addEventListener ? "addEventListener" : "attachEvent"),
    (0, window[Et])(
      "attachEvent" == Et ? "onmessage" : "message",
      function (t) {
        event.origin;
        var e,
          n,
          r,
          o = t[t.message ? "message" : "data"];
        switch ((bt(o.event_type, o.data), o.event_type)) {
          case "close_modal":
            bt(), at({ isPaymentFormOpened: !1 });
            break;
          case "redirect_to_on_payment_success":
            (e = o.data.redirectTo) &&
              ((r = !1),
              (n = e) &&
                (r = new RegExp(
                  /^(?:(?:http|https|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:(\/|\?|#)[^\s]*)?$/i
                ).test(n)),
              r) &&
              (location.href = e);
            break;
          case "iframe_contents_loaded":
            at({ isIframeContentsLoaded: !0 });
        }
      },
      !1
    );
  var $t,
    Lt =
      (o(Ct, ($t = et)),
      t(Ct, [
        {
          key: "show",
          get: function () {
            return this.$$.ctx[0];
          },
          set: function (t) {
            this.$set({ show: t }), Z();
          },
        },
      ]),
      Ct);
  function Ct(t) {
    var e,
      n = $t.call(this) || this;
    return (
      document.getElementById("svelte-q4m8xw-style") ||
        (((e = A("style")).id = "svelte-q4m8xw-style"),
        (e.textContent =
          ".razorpay-loader.svelte-q4m8xw{position:relative;height:50px;width:50px;border-radius:50%;top:30%;margin:0 auto;border:1px solid rgba(255,255,255,0.2);border-top-color:rgba(255,255,255,0.7);animation:svelte-q4m8xw-rzp-rot 1s infinite linear;transition:.2s;opacity:0}@-moz-keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}@-webkit-keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}@-o-keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}@keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}"),
        P(document.head, e)),
      tt(i(n), t, kt, Ot, w, { show: 0 }),
      n
    );
  }
  function Nt(n) {
    var r,
      o,
      i,
      a,
      s,
      c,
      u,
      f,
      l,
      m = new Lt({ props: { show: n[1] } });
    return {
      c: function () {
        (r = A("div")),
          (o = A("div")),
          (i = A("span")),
          (a = D("Test Mode")),
          (s = E()),
          J(m.$$.fragment),
          (c = E()),
          (u = A("iframe")),
          T(i, "class", "test-mode-badge svelte-7tbrl8"),
          T(i, "style", n[5]),
          T(o, "class", "razorpay-backdrop svelte-7tbrl8"),
          T(o, "style", n[4]),
          T(u, "title", "payment-form"),
          T(u, "class", "razorpay-payment-form-frame svelte-7tbrl8"),
          T(u, "frameborder", "0"),
          T(u, "height", "100%"),
          T(u, "width", "100%"),
          T(u, "allowtransparency", "true"),
          (u.allowPaymentRequest = "true"),
          u.src !== (f = n[0]) && T(u, "src", f),
          T(r, "class", "razorpay-payment-form-container svelte-7tbrl8"),
          T(r, "style", n[2]);
      },
      m: function (t, e) {
        R(t, r, e),
          P(r, o),
          P(o, i),
          P(i, a),
          P(r, s),
          V(m, r, null),
          P(r, c),
          P(r, u),
          n[6](u),
          (l = !0);
      },
      p: function (t, e) {
        var n = g(e, 1)[0];
        (!l || 32 & n) && T(i, "style", t[5]),
          (!l || 16 & n) && T(o, "style", t[4]);
        e = {};
        2 & n && (e.show = t[1]),
          m.$set(e),
          (!l || (1 & n && u.src !== (f = t[0]))) && T(u, "src", f),
          (!l || 4 & n) && T(r, "style", t[2]);
      },
      i: function (t) {
        l || (Y(m.$$.fragment, t), (l = !0));
      },
      o: function (t) {
        Q(m.$$.fragment, t), (l = !1);
      },
      d: function (t) {
        t && _(r), X(m), n[6](null);
      },
    };
  }
  function jt(t, e, n) {
    var r;
    S(t, ot, function (t) {
      return n(3, (r = t));
    });
    var o,
      i,
      a,
      s,
      c,
      u = r.paymentFormUrl;
    return (
      r.isQATestMode &&
        ((c = r.paymentButtonOptions.payment_button_id),
        (u = r.baseUrl + "/payment_buttons/" + c + "/view")),
      (t.$$.update = function () {
        8 & t.$$.dirty &&
          n(2, (i = r.isPaymentFormOpened ? "" : "display: none;")),
          8 & t.$$.dirty &&
            n(4, (a = r.isPaymentFormOpened ? "opacity:1;" : "")),
          8 & t.$$.dirty && n(5, (s = r.isTestMode ? "opacity:1;" : "")),
          8 & t.$$.dirty &&
            (r.isPaymentFormOpened
              ? (n(1, (o = !0)),
                r.isIframeContentsLoaded &&
                  setTimeout(function () {
                    n(1, (o = !1));
                  }, 1e3))
              : n(1, (o = !1)));
      }),
      [
        u,
        o,
        i,
        r,
        a,
        s,
        function (t) {
          j[t ? "unshift" : "push"](function () {
            (r.modalFrameEl = t), ot.set(r);
          });
        },
      ]
    );
  }
  var Mt,
    Kt = (o(Ft, (Mt = et)), Ft),
    zt = {
      RZP_DARK_STANDARD: "rzp-dark-standard",
      RZP_OUTLINE_STANDARD: "rzp-outline-standard",
      RZP_LIGHT_STANDARD: "rzp-light-standard",
      BRAND_COLOR: "brand-color",
    };
  function Ft(t) {
    var e,
      n = Mt.call(this) || this;
    return (
      document.getElementById("svelte-7tbrl8-style") ||
        (((e = A("style")).id = "svelte-7tbrl8-style"),
        (e.textContent =
          ".razorpay-payment-form-container.svelte-7tbrl8{z-index:1000000000;position:fixed;top:0;display:block;left:0;height:100%;width:100%;backface-visibility:hidden;overflow-y:visible}.razorpay-payment-form-frame.svelte-7tbrl8{opacity:1;min-height:100% !important;position:fixed;top:0;background:none;display:block;border:0 none transparent;margin:0;padding:0;z-index:2;width:100% !important}.razorpay-backdrop.svelte-7tbrl8{min-height:100%;transition:all .3s ease-out 0s;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);opacity:0}.test-mode-badge.svelte-7tbrl8{text-decoration:none;background:#d64444;border:1px dashed #fff;padding:3px;opacity:0;transform:rotate(45deg);transition:opacity .3s ease-in 0s;font-family:lato,ubuntu,helvetica,sans-serif;color:#fff;position:absolute;width:200px;text-align:center;right:-50px;top:50px}"),
        P(document.head, e)),
      tt(i(n), t, jt, Nt, w, {}),
      n
    );
  }
  function Ut(t) {
    var n, r;
    return {
      c: function () {
        (n = D("Secured by ")), (r = D(t[5]));
      },
      m: function (t, e) {
        R(t, n, e), R(t, r, e);
      },
      p: b,
      d: function (t) {
        t && _(n), t && _(r);
      },
    };
  }
  function Gt(t) {
    var n, r, e;
    return {
      c: function () {
        (n = D("Secured by ")),
          T((r = A("img")), "class", "secured-by-logo svelte-ekc7fv"),
          r.src !== (e = t[4]) && T(r, "src", e),
          T(r, "alt", "brand"),
          T(r, "height", "14px");
      },
      m: function (t, e) {
        R(t, n, e), R(t, r, e);
      },
      p: b,
      d: function (t) {
        t && _(n), t && _(r);
      },
    };
  }
  function It(o) {
    var i,
      a,
      s,
      c,
      u,
      f,
      l,
      n,
      m,
      d,
      r,
      p,
      h,
      v = o[3] && {
        c: function () {
          (r = B("svg")),
            (p = B("path")),
            (h = B("path")),
            T(
              p,
              "d",
              "M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z"
            ),
            T(p, "fill", "#fff"),
            T(p, "class", "svelte-ekc7fv"),
            T(h, "d", "M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z"),
            T(h, "fill", "#fff"),
            T(h, "class", "svelte-ekc7fv"),
            T(r, "width", "18"),
            T(r, "height", "20"),
            T(r, "viewBox", "0 0 18 20"),
            T(r, "fill", "none"),
            T(r, "xmlns", "http://www.w3.org/2000/svg"),
            T(r, "class", "svelte-ekc7fv");
        },
        m: function (t, e) {
          R(t, r, e), P(r, p), P(r, h);
        },
        d: function (t) {
          t && _(r);
        },
      },
      y = (o[4] ? Gt : Ut)(o);
    return {
      c: function () {
        (i = A("a")),
          v && v.c(),
          (a = E()),
          (s = A("div")),
          (c = A("span")),
          (u = D(o[0])),
          (f = E()),
          (l = A("div")),
          y.c(),
          T(c, "class", "PaymentButton-text svelte-ekc7fv"),
          T(l, "class", "PaymentButton-securedBy svelte-ekc7fv"),
          T(s, "class", "PaymentButton-contents svelte-ekc7fv"),
          T(i, "href", o[6]),
          T(i, "type", "submit"),
          T(i, "class", (n = x(o[1]) + " svelte-ekc7fv")),
          k(i, "background", o[2] || "");
      },
      m: function (t, e) {
        var n, r;
        R(t, i, e),
          v && v.m(i, null),
          P(i, a),
          P(i, s),
          P(s, c),
          P(c, u),
          P(s, f),
          P(s, l),
          y.m(l, null),
          m ||
            ((n = i),
            (r = o[10]),
            n.addEventListener("click", r, void 0),
            (d = function () {
              return n.removeEventListener("click", r, void 0);
            }),
            (m = !0));
      },
      p: function (t, e) {
        e = g(e, 1)[0];
        1 & e && O(u, t[0]),
          y.p(t, e),
          2 & e && n !== (n = x(t[1]) + " svelte-ekc7fv") && T(i, "class", n),
          4 & e && k(i, "background", t[2] || "");
      },
      i: b,
      o: b,
      d: function (t) {
        t && _(i), v && v.d(), y.d(), (m = !1), d();
      },
    };
  }
  function Zt(n, t, e) {
    var r;
    S(n, ot, function (t) {
      return e(11, (r = t));
    });
    var o,
      i = t.brandColor,
      a = t.buttonTheme,
      s = t.buttonText,
      c = t.brandingOptions,
      s = s.substring(0, 20),
      u = void 0 === c.show_rzp_logo || c.show_rzp_logo,
      f = c.branding_logo,
      l = c.business_name,
      m =
        r.paymentFormUrl +
        "/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button",
      d =
        -1 <
        [
          zt.RZP_DARK_STANDARD,
          zt.RZP_LIGHT_STANDARD,
          zt.RZP_OUTLINE_STANDARD,
        ].indexOf(a),
      p = !0;
    return (
      d
        ? zt.RZP_DARK_STANDARD === a && (p = !1)
        : ((o = zt.BRAND_COLOR === a ? i : a),
          (p = !(colorLib && colorLib.isDark(o)))),
      (t = "PaymentButton"),
      (t += " PaymentButton--" + (p ? "light" : "dark")),
      d && ((t += " PaymentButton--rzpTheme"), (t += " PaymentButton--" + a)),
      u || (t += " PaymentButton--noRzpLogo"),
      f && (t += " PaymentButton--customSecuredByLogo"),
      (n.$$set = function (t) {
        "brandColor" in t && e(7, (i = t.brandColor)),
          "buttonTheme" in t && e(8, (a = t.buttonTheme)),
          "buttonText" in t && e(0, (s = t.buttonText)),
          "brandingOptions" in t && e(9, (c = t.brandingOptions));
      }),
      [
        s,
        t,
        o,
        u,
        f,
        l,
        m,
        i,
        a,
        c,
        function (t) {
          var e;
          (e = t),
            (t = n.$$.callbacks[e.type]) &&
              t.slice().forEach(function (t) {
                return t(e);
              });
        },
      ]
    );
  }
  var Ht,
    qt =
      (o(Yt, (Ht = et)),
      t(Yt, [
        {
          key: "brandColor",
          get: function () {
            return this.$$.ctx[7];
          },
          set: function (t) {
            this.$set({ brandColor: t }), Z();
          },
        },
        {
          key: "buttonTheme",
          get: function () {
            return this.$$.ctx[8];
          },
          set: function (t) {
            this.$set({ buttonTheme: t }), Z();
          },
        },
        {
          key: "buttonText",
          get: function () {
            return this.$$.ctx[0];
          },
          set: function (t) {
            this.$set({ buttonText: t }), Z();
          },
        },
        {
          key: "brandingOptions",
          get: function () {
            return this.$$.ctx[9];
          },
          set: function (t) {
            this.$set({ brandingOptions: t }), Z();
          },
        },
      ]),
      Yt);
  function Yt(t) {
    var e,
      n = Ht.call(this) || this;
    return (
      document.getElementById("svelte-ekc7fv-style") ||
        (((e = A("style")).id = "svelte-ekc7fv-style"),
        (e.textContent =
          "@import url(\"https://fonts.googleapis.com/css2?family=Muli:wght@700;800&display=swap\");.PaymentButton.svelte-ekc7fv.svelte-ekc7fv{position:relative;display:inline-block;min-width:160px;height:40px;padding:0;border-radius:3px;text-align:center;font-style:italic;font-family:Muli,helvetica,sans-serif;font-display:swap;overflow:hidden;border:1px solid transparent;outline:none;cursor:pointer;-webkit-tap-highlight-color:transparent;text-decoration:none}.PaymentButton--customSecuredByLogo.svelte-ekc7fv.svelte-ekc7fv{height:48px}.PaymentButton--light.svelte-ekc7fv.svelte-ekc7fv{color:#072654}.PaymentButton--dark.svelte-ekc7fv.svelte-ekc7fv{color:#fff}.PaymentButton--rzpTheme.svelte-ekc7fv.svelte-ekc7fv::before{content:'';position:absolute;left:-6px;top:0;width:46px;height:100%;background:#1e40a0;border-radius:2px 0 0 2px;transform:skew(-15deg,0)}.PaymentButton--rzp-dark-standard.svelte-ekc7fv.svelte-ekc7fv{background:#072654;border-color:#072654}.PaymentButton--rzp-outline-standard.svelte-ekc7fv.svelte-ekc7fv{background:#eaf2fe;border-color:#1e40a0}.PaymentButton--rzp-outline-standard.svelte-ekc7fv.svelte-ekc7fv::before{box-shadow:2px 0 4px rgba(0,0,0,0.15)}.PaymentButton--rzp-light-standard.svelte-ekc7fv.svelte-ekc7fv{background:#fff;border-color:#fff}.PaymentButton--rzp-light-standard.svelte-ekc7fv.svelte-ekc7fv::before{box-shadow:2px 0 4px rgba(0,0,0,0.15)}svg.svelte-ekc7fv.svelte-ekc7fv{position:absolute;top:0;left:0;margin:9px 11px}svg.svelte-ekc7fv svg path.svelte-ekc7fv{fill:#fff}.PaymentButton--rzpTheme.svelte-ekc7fv svg path.svelte-ekc7fv{fill:#fff}.PaymentButton--light.svelte-ekc7fv:not(.PaymentButton--rzpTheme) svg path.svelte-ekc7fv{fill:#072654}.PaymentButton.svelte-ekc7fv.svelte-ekc7fv:not(.PaymentButton--rzpTheme):not(.PaymentButton--noRzpLogo)::before{content:'';position:absolute;bottom:0;left:0;top:0;right:0;background:linear-gradient(121deg,rgba(255,255,255,0) 40%,rgba(255,255,255,0.2) 100%)}.PaymentButton-contents.svelte-ekc7fv.svelte-ekc7fv{padding:4px 28px 4px 44px;margin:1px 0}.PaymentButton--noRzpLogo.svelte-ekc7fv .PaymentButton-contents.svelte-ekc7fv{padding-left:28px !important}.PaymentButton--rzpTheme.svelte-ekc7fv .PaymentButton-contents.svelte-ekc7fv{padding-left:60px}.PaymentButton-text.svelte-ekc7fv.svelte-ekc7fv{display:block;min-height:18px;line-height:18px;font-size:14px;font-weight:800;opacity:1;text-transform:initial}.PaymentButton-securedBy.svelte-ekc7fv.svelte-ekc7fv{font-size:8px;line-height:10px;text-transform:initial;margin-top:0;opacity:.6}.PaymentButton--customSecuredByLogo.svelte-ekc7fv .PaymentButton-securedBy.svelte-ekc7fv{opacity:1;margin-top:1px}.secured-by-logo.svelte-ekc7fv.svelte-ekc7fv{vertical-align:middle}"),
        P(document.head, e)),
      tt(i(n), t, Zt, It, w, {
        brandColor: 7,
        buttonTheme: 8,
        buttonText: 0,
        brandingOptions: 9,
      }),
      n
    );
  }
  function Qt(t) {
    var r, n;
    return (
      (r = new qt({
        props: {
          buttonText: t[1],
          buttonTheme: t[0],
          brandColor: t[2],
          brandingOptions: t[3],
        },
      })).$on("click", t[4]),
      {
        c: function () {
          J(r.$$.fragment);
        },
        m: function (t, e) {
          V(r, t, e), (n = !0);
        },
        p: function (t, e) {
          var n = g(e, 1)[0],
            e = {};
          2 & n && (e.buttonText = t[1]),
            1 & n && (e.buttonTheme = t[0]),
            4 & n && (e.brandColor = t[2]),
            8 & n && (e.brandingOptions = t[3]),
            r.$set(e);
        },
        i: function (t) {
          n || (Y(r.$$.fragment, t), (n = !0));
        },
        o: function (t) {
          Q(r.$$.fragment, t), (n = !1);
        },
        d: function (t) {
          X(r, t);
        },
      }
    );
  }
  function Wt(t, e, n) {
    var i, r, o, a, s;
    S(t, ot, function (t) {
      return n(6, (i = t));
    }),
      L(function () {
        Bt.lj.performance.renderEnd(wt());
      });
    var c = i.paymentButtonOptions;
    function u(t) {
      var n,
        r,
        e = i.paymentButtonOptions,
        o =
          ((n = i.paymentButtonOptions),
          (r = {}),
          Object.keys(n).forEach(function (t) {
            var e = (function (t, e) {
              e = new RegExp("prefill.amount" + t).exec(e);
              return e && e[1];
            })(".((.*?)*)", t);
            e && ((t = n[t]), (r[e] = t));
          }),
          r);
      return {
        notes: Object.assign({}, e.notes, t),
        amount: o,
        callback_url: e.callback_url,
      };
    }
    return (
      (a = i.buttonPreferences.data.merchant_brand_color),
      (o = c.button_text),
      (r = c.button_theme),
      (c = i.buttonPreferences.data.branding || {}),
      Object.keys(zt).find(function (t) {
        return zt[t] === r;
      }) || (r = ""),
      (r = r || i.buttonPreferences.data.payment_button_theme),
      (o = o || i.buttonPreferences.data.payment_button_text),
      c.business_name || (c.business_name = "Razorpay"),
      (t.$$.update = function () {
        96 & t.$$.dirty &&
          i.isPaymentFormOpened &&
          i.isIframeContentsLoaded &&
          (function (t) {
            bt();
            var e = it(),
              n = e.modalFrameEl;
            e.isQATestMode &&
              ((e = e.baseUrl), (t.base_url = e.replace("/v1", ""))),
              (t.is_mobile =
                (window.innerWidth && window.innerWidth < 450) ||
                Tt ||
                window.matchMedia(
                  "(max-device-height: 450px),(max-device-width: 450px)"
                ).matches),
              (t = { event_type: "init_payment_form", data: t }),
              Bt.lj.modalOpenSuccess(),
              n.contentWindow.postMessage(t, "*");
          })(s);
      }),
      [
        r,
        o,
        a,
        c,
        function (t) {
          t.preventDefault(),
            bt(),
            n(5, (s = u({}))),
            at({ isPaymentFormOpened: !0 }),
            Bt.lj.buttonClicked();
        },
      ]
    );
  }
  var Jt,
    Vt,
    Xt = (o(te, (Vt = et)), te);
  function te(t) {
    var e;
    return tt(i((e = Vt.call(this) || this)), t, Wt, Qt, w, {}), e;
  }
  function ee(e, n) {
    function t() {
      var t;
      (Jt =
        !1 !== (t = e).defaultIntegrations
          ? (window.Sentry.init(t), window.Sentry)
          : ((t.integrations = [
              new window.Sentry.Integrations.InboundFilters(),
              new window.Sentry.Integrations.FunctionToString(),
              new window.Sentry.Integrations.Breadcrumbs(),
              new window.Sentry.Integrations.LinkedErrors(),
              new window.Sentry.Integrations.UserAgent(),
            ]),
            (t = new window.Sentry.BrowserClient(t)),
            new window.Sentry.Hub(t))),
        n && n();
    }
    window.Sentry &&
    window.Sentry.BrowserClient &&
    window.Sentry.captureException
      ? t()
      : gt("https://browser.sentry-cdn.com/6.16.1/bundle.min.js", t);
  }
  function ne(e) {
    if (Jt && e)
      return Jt.run
        ? Jt.run(function (t) {
            t.captureException(e);
          })
        : void Jt.captureException(e);
  }
  var re = [];
  function oe() {
    re.length && Jt && re.forEach(ne), (re = []);
  }
  window.addEventListener("error", function (t) {
    0 <= t.filename.indexOf("payment-button.js") && (Jt ? ne(t) : re.push(t));
  });
  var ie = W.document;
  function ae(t) {
    var n,
      r,
      o = t[0].buttonPreferences.error + "";
    return {
      c: function () {
        (n = A("span")), (r = D(o));
      },
      m: function (t, e) {
        R(t, n, e), P(n, r);
      },
      p: function (t, e) {
        1 & e && o !== (o = t[0].buttonPreferences.error + "") && O(r, o);
      },
      i: b,
      o: b,
      d: function (t) {
        t && _(n);
      },
    };
  }
  function se(t) {
    var n,
      r = new Xt({});
    return {
      c: function () {
        J(r.$$.fragment);
      },
      m: function (t, e) {
        V(r, t, e), (n = !0);
      },
      p: b,
      i: function (t) {
        n || (Y(r.$$.fragment, t), (n = !0));
      },
      o: function (t) {
        Q(r.$$.fragment, t), (n = !1);
      },
      d: function (t) {
        X(r, t);
      },
    };
  }
  function ce(t) {
    var r,
      o,
      i,
      n,
      a = [se, ae],
      s = [];
    function c(t) {
      return t[0].buttonPreferences.data && !t[0].isColorJSLoading
        ? 0
        : t[0].buttonPreferences.error
        ? 1
        : -1;
    }
    return (
      ~(o = c(t)) && (i = s[o] = a[o](t)),
      {
        c: function () {
          (r = A("span")),
            i && i.c(),
            T(r, "class", "razorpay-payment-button svelte-ohbfj8");
        },
        m: function (t, e) {
          R(t, r, e), ~o && s[o].m(r, null), (n = !0);
        },
        p: function (t, e) {
          var e = g(e, 1)[0],
            n = o;
          (o = c(t)) === n
            ? ~o && s[o].p(t, e)
            : (i &&
                ((H = { r: 0, c: [], p: H }),
                Q(s[n], 1, 1, function () {
                  s[n] = null;
                }),
                H.r || v(H.c),
                (H = H.p)),
              ~o
                ? ((i = s[o]) || (i = s[o] = a[o](t)).c(),
                  Y(i, 1),
                  i.m(r, null))
                : (i = null));
        },
        i: function (t) {
          n || (Y(i), (n = !0));
        },
        o: function (t) {
          Q(i), (n = !1);
        },
        d: function (t) {
          t && _(r), ~o && s[o].d();
        },
      }
    );
  }
  function ue(t, e, n) {
    var r;
    return (
      S(t, ot, function (t) {
        return n(0, (r = t));
      }),
      L(function () {
        new Kt({ target: document.body }),
          ee(
            {
              dsn: "https://a9fa294c5e224e028cc57801fee46dd0@o515678.ingest.sentry.io/6726576",
              defaultIntegrations: !1,
            },
            oe
          ),
          Bt.init(
            r.paymentButtonOptions.payment_button_id,
            r.paymentButtonOptions.plugin
          );
      }),
      [r]
    );
  }
  function fe(n, r) {
    return function () {
      for (var t = new Array(arguments.length), e = 0; e < t.length; e++)
        t[e] = arguments[e];
      return n.apply(r, t);
    };
  }
  var le,
    me = (o(pe, (le = et)), pe),
    de = Object.prototype.toString;
  function pe(t) {
    var e,
      n = le.call(this) || this;
    return (
      ie.getElementById("svelte-ohbfj8-style") ||
        (((e = A("style")).id = "svelte-ohbfj8-style"),
        (e.textContent =
          ".razorpay-payment-button.svelte-ohbfj8,.razorpay-payment-button.svelte-ohbfj8 *,.razorpay-payment-button.svelte-ohbfj8 *::before,.razorpay-payment-button.svelte-ohbfj8 *::after{box-sizing:border-box}.razorpay-payment-button.svelte-ohbfj8{position:relative;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}"),
        P(ie.head, e)),
      tt(i(n), t, ue, ce, w, {}),
      n
    );
  }
  function he(t) {
    return "[object Array]" === de.call(t);
  }
  function ve(t) {
    return void 0 === t;
  }
  function ye(t) {
    return null !== t && "object" == typeof t;
  }
  function ge(t) {
    if ("[object Object]" !== de.call(t)) return !1;
    t = Object.getPrototypeOf(t);
    return null === t || t === Object.prototype;
  }
  function be(t) {
    return "[object Function]" === de.call(t);
  }
  function we(t, e) {
    if (null != t)
      if (("object" != typeof t && (t = [t]), he(t)))
        for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
      else
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) &&
            e.call(null, t[o], o, t);
  }
  var Se = {
    isArray: he,
    isArrayBuffer: function (t) {
      return "[object ArrayBuffer]" === de.call(t);
    },
    isBuffer: function (t) {
      return (
        null !== t &&
        !ve(t) &&
        null !== t.constructor &&
        !ve(t.constructor) &&
        "function" == typeof t.constructor.isBuffer &&
        t.constructor.isBuffer(t)
      );
    },
    isFormData: function (t) {
      return "undefined" != typeof FormData && t instanceof FormData;
    },
    isArrayBufferView: function (t) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(t)
        : t && t.buffer && t.buffer instanceof ArrayBuffer;
    },
    isString: function (t) {
      return "string" == typeof t;
    },
    isNumber: function (t) {
      return "number" == typeof t;
    },
    isObject: ye,
    isPlainObject: ge,
    isUndefined: ve,
    isDate: function (t) {
      return "[object Date]" === de.call(t);
    },
    isFile: function (t) {
      return "[object File]" === de.call(t);
    },
    isBlob: function (t) {
      return "[object Blob]" === de.call(t);
    },
    isFunction: be,
    isStream: function (t) {
      return ye(t) && be(t.pipe);
    },
    isURLSearchParams: function (t) {
      return (
        "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
      );
    },
    isStandardBrowserEnv: function () {
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      );
    },
    forEach: we,
    merge: function n() {
      var r = {};
      function t(t, e) {
        ge(r[e]) && ge(t)
          ? (r[e] = n(r[e], t))
          : ge(t)
          ? (r[e] = n({}, t))
          : he(t)
          ? (r[e] = t.slice())
          : (r[e] = t);
      }
      for (var e = 0, o = arguments.length; e < o; e++) we(arguments[e], t);
      return r;
    },
    extend: function (n, t, r) {
      return (
        we(t, function (t, e) {
          n[e] = r && "function" == typeof t ? fe(t, r) : t;
        }),
        n
      );
    },
    trim: function (t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "");
    },
    stripBOM: function (t) {
      return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
    },
  };
  function xe(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function Pe(t, e, n) {
    return (
      e &&
        (n = n
          ? n(e)
          : Se.isURLSearchParams(e)
          ? e.toString()
          : ((r = []),
            Se.forEach(e, function (t, e) {
              null != t &&
                (Se.isArray(t) ? (e += "[]") : (t = [t]),
                Se.forEach(t, function (t) {
                  Se.isDate(t)
                    ? (t = t.toISOString())
                    : Se.isObject(t) && (t = JSON.stringify(t)),
                    r.push(xe(e) + "=" + xe(t));
                }));
            }),
            r.join("&"))) &&
        (-1 !== (e = t.indexOf("#")) && (t = t.slice(0, e)),
        (t += (-1 === t.indexOf("?") ? "?" : "&") + n)),
      t
    );
    var r;
  }
  function Re() {
    this.handlers = [];
  }
  function _e(e, n, t) {
    return (
      Se.forEach(t, function (t) {
        e = t(e, n);
      }),
      e
    );
  }
  function Ae(t) {
    return !(!t || !t.__CANCEL__);
  }
  function Be(n, r) {
    Se.forEach(n, function (t, e) {
      e !== r &&
        e.toUpperCase() === r.toUpperCase() &&
        ((n[r] = t), delete n[e]);
    });
  }
  function De(t, e, n, r, o) {
    return (
      (t = new Error(t)),
      (n = n),
      (r = r),
      (o = o),
      (t.config = e),
      n && (t.code = n),
      (t.request = r),
      (t.response = o),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
        };
      }),
      t
    );
  }
  (Re.prototype.use = function (t, e) {
    return (
      this.handlers.push({ fulfilled: t, rejected: e }),
      this.handlers.length - 1
    );
  }),
    (Re.prototype.eject = function (t) {
      this.handlers[t] && (this.handlers[t] = null);
    }),
    (Re.prototype.forEach = function (e) {
      Se.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    });
  var Ee,
    Te,
    Oe,
    ke = Re,
    $e = Se.isStandardBrowserEnv()
      ? {
          write: function (t, e, n, r, o, i) {
            var a = [];
            a.push(t + "=" + encodeURIComponent(e)),
              Se.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
              Se.isString(r) && a.push("path=" + r),
              Se.isString(o) && a.push("domain=" + o),
              !0 === i && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (t) {
            t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (t) {
            this.write(t, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        },
    Le = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ],
    Ce = Se.isStandardBrowserEnv()
      ? ((Te = /(msie|trident)/i.test(navigator.userAgent)),
        (Oe = document.createElement("a")),
        (Ee = je(window.location.href)),
        function (t) {
          t = Se.isString(t) ? je(t) : t;
          return t.protocol === Ee.protocol && t.host === Ee.host;
        })
      : function () {
          return !0;
        },
    Ne = { "Content-Type": "application/x-www-form-urlencoded" };
  function je(t) {
    return (
      Te && (Oe.setAttribute("href", t), (t = Oe.href)),
      Oe.setAttribute("href", t),
      {
        href: Oe.href,
        protocol: Oe.protocol ? Oe.protocol.replace(/:$/, "") : "",
        host: Oe.host,
        search: Oe.search ? Oe.search.replace(/^\?/, "") : "",
        hash: Oe.hash ? Oe.hash.replace(/^#/, "") : "",
        hostname: Oe.hostname,
        port: Oe.port,
        pathname:
          "/" === Oe.pathname.charAt(0) ? Oe.pathname : "/" + Oe.pathname,
      }
    );
  }
  function Me(t, e) {
    !Se.isUndefined(t) &&
      Se.isUndefined(t["Content-Type"]) &&
      (t["Content-Type"] = e);
  }
  var Ke = {
    adapter:
      (("undefined" != typeof XMLHttpRequest ||
        ("undefined" != typeof process &&
          "[object process]" === Object.prototype.toString.call(process))) &&
        (Je = function (f) {
          return new Promise(function (s, c) {
            var n = f.data,
              r = f.headers;
            Se.isFormData(n) && delete r["Content-Type"];
            var u = new XMLHttpRequest();
            f.auth &&
              ((i = f.auth.username || ""),
              (t = f.auth.password
                ? unescape(encodeURIComponent(f.auth.password))
                : ""),
              (r.Authorization = "Basic " + btoa(i + ":" + t)));
            var t,
              e,
              o,
              i =
                ((e = f.baseURL),
                (i = f.url),
                e && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(i)
                  ? ((t = e),
                    (e = i)
                      ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
                      : t)
                  : i);
            if (
              (u.open(
                f.method.toUpperCase(),
                Pe(i, f.params, f.paramsSerializer),
                !0
              ),
              (u.timeout = f.timeout),
              (u.onreadystatechange = function () {
                var t, e, n, r, o, i, a;
                u &&
                  4 === u.readyState &&
                  (0 !== u.status ||
                    (u.responseURL && 0 === u.responseURL.indexOf("file:"))) &&
                  ((e =
                    "getAllResponseHeaders" in u
                      ? ((r = u.getAllResponseHeaders()),
                        (a = {}),
                        r &&
                          Se.forEach(r.split("\n"), function (t) {
                            (i = t.indexOf(":")),
                              (o = Se.trim(t.substr(0, i)).toLowerCase()),
                              (i = Se.trim(t.substr(i + 1))),
                              o &&
                                ((a[o] && 0 <= Le.indexOf(o)) ||
                                  (a[o] =
                                    "set-cookie" === o
                                      ? (a[o] || []).concat([i])
                                      : a[o]
                                      ? a[o] + ", " + i
                                      : i));
                          }),
                        a)
                      : null),
                  (n = {
                    data:
                      f.responseType && "text" !== f.responseType
                        ? u.response
                        : u.responseText,
                    status: u.status,
                    statusText: u.statusText,
                    headers: e,
                    config: f,
                    request: u,
                  }),
                  (t = s),
                  (r = c),
                  (n = (e = n).config.validateStatus),
                  e.status && n && !n(e.status)
                    ? r(
                        De(
                          "Request failed with status code " + e.status,
                          e.config,
                          null,
                          e.request,
                          e
                        )
                      )
                    : t(e),
                  (u = null));
              }),
              (u.onabort = function () {
                u &&
                  (c(De("Request aborted", f, "ECONNABORTED", u)), (u = null));
              }),
              (u.onerror = function () {
                c(De("Network Error", f, null, u)), (u = null);
              }),
              (u.ontimeout = function () {
                var t = "timeout of " + f.timeout + "ms exceeded";
                f.timeoutErrorMessage && (t = f.timeoutErrorMessage),
                  c(De(t, f, "ECONNABORTED", u)),
                  (u = null);
              }),
              Se.isStandardBrowserEnv() &&
                (o =
                  (f.withCredentials || Ce(i)) && f.xsrfCookieName
                    ? $e.read(f.xsrfCookieName)
                    : void 0) &&
                (r[f.xsrfHeaderName] = o),
              "setRequestHeader" in u &&
                Se.forEach(r, function (t, e) {
                  void 0 === n && "content-type" === e.toLowerCase()
                    ? delete r[e]
                    : u.setRequestHeader(e, t);
                }),
              Se.isUndefined(f.withCredentials) ||
                (u.withCredentials = !!f.withCredentials),
              f.responseType)
            )
              try {
                u.responseType = f.responseType;
              } catch (s) {
                if ("json" !== f.responseType) throw s;
              }
            "function" == typeof f.onDownloadProgress &&
              u.addEventListener("progress", f.onDownloadProgress),
              "function" == typeof f.onUploadProgress &&
                u.upload &&
                u.upload.addEventListener("progress", f.onUploadProgress),
              f.cancelToken &&
                f.cancelToken.promise.then(function (t) {
                  u && (u.abort(), c(t), (u = null));
                }),
              (n = n || null),
              u.send(n);
          });
        }),
      Je),
    transformRequest: [
      function (t, e) {
        return (
          Be(e, "Accept"),
          Be(e, "Content-Type"),
          Se.isFormData(t) ||
          Se.isArrayBuffer(t) ||
          Se.isBuffer(t) ||
          Se.isStream(t) ||
          Se.isFile(t) ||
          Se.isBlob(t)
            ? t
            : Se.isArrayBufferView(t)
            ? t.buffer
            : Se.isURLSearchParams(t)
            ? (Me(e, "application/x-www-form-urlencoded;charset=utf-8"),
              t.toString())
            : Se.isObject(t)
            ? (Me(e, "application/json;charset=utf-8"), JSON.stringify(t))
            : t
        );
      },
    ],
    transformResponse: [
      function (t) {
        if ("string" == typeof t)
          try {
            t = JSON.parse(t);
          } catch (t) {}
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
      return 200 <= t && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  Se.forEach(["delete", "get", "head"], function (t) {
    Ke.headers[t] = {};
  }),
    Se.forEach(["post", "put", "patch"], function (t) {
      Ke.headers[t] = Se.merge(Ne);
    });
  var ze = Ke;
  function Fe(t) {
    t.cancelToken && t.cancelToken.throwIfRequested();
  }
  function Ue(e) {
    return (
      Fe(e),
      (e.headers = e.headers || {}),
      (e.data = _e(e.data, e.headers, e.transformRequest)),
      (e.headers = Se.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      Se.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (t) {
          delete e.headers[t];
        }
      ),
      (e.adapter || ze.adapter)(e).then(
        function (t) {
          return (
            Fe(e), (t.data = _e(t.data, t.headers, e.transformResponse)), t
          );
        },
        function (t) {
          return (
            Ae(t) ||
              (Fe(e),
              t &&
                t.response &&
                (t.response.data = _e(
                  t.response.data,
                  t.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  function Ge(e, n) {
    n = n || {};
    var r = {},
      t = ["url", "method", "data"],
      o = ["headers", "auth", "proxy", "params"],
      i = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding",
      ],
      a = ["validateStatus"];
    function s(t, e) {
      return Se.isPlainObject(t) && Se.isPlainObject(e)
        ? Se.merge(t, e)
        : Se.isPlainObject(e)
        ? Se.merge({}, e)
        : Se.isArray(e)
        ? e.slice()
        : e;
    }
    function c(t) {
      Se.isUndefined(n[t])
        ? Se.isUndefined(e[t]) || (r[t] = s(void 0, e[t]))
        : (r[t] = s(e[t], n[t]));
    }
    Se.forEach(t, function (t) {
      Se.isUndefined(n[t]) || (r[t] = s(void 0, n[t]));
    }),
      Se.forEach(o, c),
      Se.forEach(i, function (t) {
        Se.isUndefined(n[t])
          ? Se.isUndefined(e[t]) || (r[t] = s(void 0, e[t]))
          : (r[t] = s(void 0, n[t]));
      }),
      Se.forEach(a, function (t) {
        t in n ? (r[t] = s(e[t], n[t])) : t in e && (r[t] = s(void 0, e[t]));
      });
    var u = t.concat(o).concat(i).concat(a),
      a = Object.keys(e)
        .concat(Object.keys(n))
        .filter(function (t) {
          return -1 === u.indexOf(t);
        });
    return Se.forEach(a, c), r;
  }
  function Ie(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ke(), response: new ke() });
  }
  (Ie.prototype.request = function (t) {
    "string" == typeof t
      ? ((t = arguments[1] || {}).url = arguments[0])
      : (t = t || {}),
      (t = Ge(this.defaults, t)).method
        ? (t.method = t.method.toLowerCase())
        : this.defaults.method
        ? (t.method = this.defaults.method.toLowerCase())
        : (t.method = "get");
    var e = [Ue, void 0],
      n = Promise.resolve(t);
    for (
      this.interceptors.request.forEach(function (t) {
        e.unshift(t.fulfilled, t.rejected);
      }),
        this.interceptors.response.forEach(function (t) {
          e.push(t.fulfilled, t.rejected);
        });
      e.length;

    )
      n = n.then(e.shift(), e.shift());
    return n;
  }),
    (Ie.prototype.getUri = function (t) {
      return (
        (t = Ge(this.defaults, t)),
        Pe(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
      );
    }),
    Se.forEach(["delete", "get", "head", "options"], function (n) {
      Ie.prototype[n] = function (t, e) {
        return this.request(
          Ge(e || {}, { method: n, url: t, data: (e || {}).data })
        );
      };
    }),
    Se.forEach(["post", "put", "patch"], function (r) {
      Ie.prototype[r] = function (t, e, n) {
        return this.request(Ge(n || {}, { method: r, url: t, data: e }));
      };
    });
  var Ze = Ie;
  function He(t) {
    this.message = t;
  }
  (He.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }),
    (He.prototype.__CANCEL__ = !0);
  var qe = He;
  function Ye(t) {
    if ("function" != typeof t)
      throw new TypeError("executor must be a function.");
    var e;
    this.promise = new Promise(function (t) {
      e = t;
    });
    var n = this;
    t(function (t) {
      n.reason || ((n.reason = new qe(t)), e(n.reason));
    });
  }
  (Ye.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }),
    (Ye.source = function () {
      var e;
      return {
        token: new Ye(function (t) {
          e = t;
        }),
        cancel: e,
      };
    });
  var et = Ye;
  function Qe(t) {
    var e = new Ze(t),
      t = fe(Ze.prototype.request, e);
    return Se.extend(t, Ze.prototype, e), Se.extend(t, e), t;
  }
  var We = Qe(ze);
  (We.Axios = Ze),
    (We.create = function (t) {
      return Qe(Ge(We.defaults, t));
    }),
    (We.Cancel = qe),
    (We.CancelToken = et),
    (We.isCancel = Ae),
    (We.all = function (t) {
      return Promise.all(t);
    }),
    (We.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (We.isAxiosError = function (t) {
      return "object" == typeof t && !0 === t.isAxiosError;
    });
  var Je = We;
  Je.default = We;
  var Ve = Je;
  function Xe(t, e) {
    if (!e.payment_button_id) {
      var n =
        "Payment Button cannot be added. Provide a valid payment button id";
      throw (window.alert(n), n);
    }
    t ||
      window.console.log(
        "Payment Button is added inside 'body' tag, because Target element is missing"
      );
    t = t || document.body;
    if ((t instanceof Element || (t = document.getElementById(t)), !t)) {
      var r =
        "Payment Button is not added. Provide target element/id which is present in DOM";
      throw (window.alert(r), r);
    }
    r = "https://api.razorpay.com/v1";
    return (
      "test" === window.RZP.environment &&
        window.RZP.base_url &&
        (r = window.RZP.base_url),
      (Ve.defaults.baseURL = r || "https://api.razorpay.com/v1"),
      (function (t, e) {
        var n = it(),
          n = JSON.parse(JSON.stringify(n));
        (n.baseUrl = e),
          (n.paymentButtonOptions = t),
          (n.isQATestMode = window.RZP && "test" === window.RZP.environment);
        t = t.payment_button_id;
        (n.paymentFormUrl =
          "https://razorpay.com/payment-button/" + t + "/view"),
          ot.set(n);
      })(e, r),
      (function () {
        bt();
        var t =
          "payment_buttons/" +
          it().paymentButtonOptions.payment_button_id +
          "/button_preferences";
        At.performance.renderStart(wt()),
          at({ buttonPreferences: { isFetching: !0 } }),
          Ve(t)
            .then(function (t) {
              t = t.data;
              at({
                isTestMode: t.is_test_mode,
                buttonPreferences: { isFetching: !1, data: t.preferences },
              });
            })
            .catch(function (n) {
              var t;
              bt(),
                at({
                  buttonPreferences: {
                    isFetching: !1,
                    error: "Some error occurred",
                  },
                }),
                At.performance.renderEnd(wt()),
                !n.response &&
                  -1 <
                    (null == (t = n.message) || null == t.toLowerCase
                      ? void 0
                      : t.toLowerCase().indexOf("network error")) &&
                  Jt &&
                  Jt.run(function (e) {
                    e.withScope(function (t) {
                      t.setLevel(Sentry.Severity.Fatal),
                        (n.message = "P0_4XX_PBS: " + n.message),
                        e.captureException(n);
                    });
                  });
            });
      })(),
      ((r = it().paymentButtonOptions.button_theme) && zt.BRAND_COLOR !== r) ||
        (at({ isColorJSLoading: !0 }),
        gt("https://cdn.razorpay.com/static/assets/color.js", function () {
          at({ isColorJSLoading: !1 });
        })),
      new me({ target: t, store: ot })
    );
  }
  (window.RZP = window.RZP || {}),
    (et = document.currentScript),
    "FORM" !== (Je = et.parentElement).tagName &&
      window.alert(
        "Payment Button is not added. Add Button script inside 'form' tag."
      ),
    (et = et.dataset),
    bt(),
    Xe(Je, et);
})();
