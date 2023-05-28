import ve, { createContext as br, useMemo as Me, useState as yr, useContext as gr, useEffect as Er } from "react";
function _r(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var de = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Rr() {
  if (We)
    return M;
  We = 1;
  var n = ve, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(E, c, O) {
    var p, C = {}, j = null, A = null;
    O !== void 0 && (j = "" + O), c.key !== void 0 && (j = "" + c.key), c.ref !== void 0 && (A = c.ref);
    for (p in c)
      f.call(c, p) && !v.hasOwnProperty(p) && (C[p] = c[p]);
    if (E && E.defaultProps)
      for (p in c = E.defaultProps, c)
        C[p] === void 0 && (C[p] = c[p]);
    return { $$typeof: i, type: E, key: j, ref: A, props: C, _owner: h.current };
  }
  return M.Fragment = l, M.jsx = R, M.jsxs = R, M;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Cr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ve, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), E = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), X = Symbol.iterator, L = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[L];
      return typeof r == "function" ? r : null;
    }
    var T = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Y("error", e, t);
      }
    }
    function Y(e, r, t) {
      {
        var a = T.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var V = !1, U = !1, Z = !1, Q = !1, ee = !1, B;
    B = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === v || ee || e === h || e === O || e === p || Q || e === A || V || U || Z || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === C || e.$$typeof === R || e.$$typeof === E || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function he(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case l:
          return "Portal";
        case v:
          return "Profiler";
        case h:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return te(r) + ".Consumer";
          case R:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return he(e, e.render, "ForwardRef");
          case C:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case j: {
            var u = e, d = u._payload, s = u._init;
            try {
              return S(s(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, P = 0, me, be, ye, ge, Ee, _e, Re;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function qe() {
      {
        if (P === 0) {
          me = console.log, be = console.info, ye = console.warn, ge = console.error, Ee = console.group, _e = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        P++;
      }
    }
    function Je() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, e, {
              value: me
            }),
            info: g({}, e, {
              value: be
            }),
            warn: g({}, e, {
              value: ye
            }),
            error: g({}, e, {
              value: ge
            }),
            group: g({}, e, {
              value: Ee
            }),
            groupCollapsed: g({}, e, {
              value: _e
            }),
            groupEnd: g({}, e, {
              value: Re
            })
          });
        }
        P < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = T.ReactCurrentDispatcher, ae;
    function z(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            ae = a && a[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var oe = !1, q;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ge();
    }
    function Oe(e, r) {
      if (!e || oe)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      oe = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ne.current, ne.current = null, qe();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch ($) {
              a = $;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch ($) {
              a = $;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            a = $;
          }
          e();
        }
      } catch ($) {
        if ($ && a && typeof $.stack == "string") {
          for (var o = $.stack.split(`
`), _ = a.stack.split(`
`), m = o.length - 1, b = _.length - 1; m >= 1 && b >= 0 && o[m] !== _[b]; )
            b--;
          for (; m >= 1 && b >= 0; m--, b--)
            if (o[m] !== _[b]) {
              if (m !== 1 || b !== 1)
                do
                  if (m--, b--, b < 0 || o[m] !== _[b]) {
                    var w = `
` + o[m].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, w), w;
                  }
                while (m >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = d, Je(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", Ne = I ? z(I) : "";
      return typeof e == "function" && q.set(e, Ne), Ne;
    }
    function Ke(e, r, t) {
      return Oe(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, He(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case O:
          return z("Suspense");
        case p:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ke(e.render);
          case C:
            return J(e.type, r, t);
          case j: {
            var a = e, u = a._payload, d = a._init;
            try {
              return J(d(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, Te = {}, we = T.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function Xe(e, r, t, a, u) {
      {
        var d = Function.call.bind(G);
        for (var s in e)
          if (d(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              o = m;
            }
            o && !(o instanceof Error) && (K(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), K(null)), o instanceof Error && !(o.message in Te) && (Te[o.message] = !0, K(u), y("Failed %s type: %s", t, o.message), K(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ie(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function Pe(e) {
      if (er(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), xe(e);
    }
    var N = T.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, ke, se;
    se = {};
    function tr(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = S(N.current.type);
        se[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(N.current.type), e.ref), se[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Se || (Se = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          ke || (ke = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, a, u, d, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ur(e, r, t, a, u) {
      {
        var d, s = {}, o = null, _ = null;
        t !== void 0 && (Pe(t), o = "" + t), nr(r) && (Pe(r.key), o = "" + r.key), tr(r) && (_ = r.ref, ar(r, u));
        for (d in r)
          G.call(r, d) && !rr.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (d in m)
            s[d] === void 0 && (s[d] = m[d]);
        }
        if (o || _) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && or(s, b), _ && ir(s, b);
        }
        return sr(e, o, _, u, a, N.current, s);
      }
    }
    var ue = T.ReactCurrentOwner, je = T.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function $e() {
      {
        if (ue.current) {
          var e = S(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var De = {};
    function cr(e) {
      {
        var r = $e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (De[t])
          return;
        De[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ue.current && (a = " It was passed a child from " + S(e._owner.type) + "."), F(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), F(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ce(a) && Ae(a, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = D(e);
          if (typeof u == "function" && u !== e.entries)
            for (var d = u.call(e), s; !(s = d.next()).done; )
              ce(s.value) && Ae(s.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          Xe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var u = S(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            F(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Ie(e, r, t, a, u, d) {
      {
        var s = re(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = lr(u);
          _ ? o += _ : o += $e();
          var m;
          e === null ? m = "null" : ie(e) ? m = "array" : e !== void 0 && e.$$typeof === i ? (m = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, o);
        }
        var b = ur(e, r, t, u, d);
        if (b == null)
          return b;
        if (s) {
          var w = r.children;
          if (w !== void 0)
            if (a)
              if (ie(w)) {
                for (var I = 0; I < w.length; I++)
                  Fe(w[I], e);
                Object.freeze && Object.freeze(w);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(w, e);
        }
        return e === f ? dr(b) : fr(b), b;
      }
    }
    function vr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function pr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var hr = pr, mr = vr;
    W.Fragment = f, W.jsx = hr, W.jsxs = mr;
  }()), W;
}
process.env.NODE_ENV === "production" ? de.exports = Rr() : de.exports = Cr();
var pe = de.exports;
const Or = pe.Fragment, x = pe.jsx, H = pe.jsxs;
var ze = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var i = {}.hasOwnProperty;
    function l() {
      for (var f = [], h = 0; h < arguments.length; h++) {
        var v = arguments[h];
        if (v) {
          var R = typeof v;
          if (R === "string" || R === "number")
            f.push(v);
          else if (Array.isArray(v)) {
            if (v.length) {
              var E = l.apply(null, v);
              E && f.push(E);
            }
          } else if (R === "object") {
            if (v.toString !== Object.prototype.toString && !v.toString.toString().includes("[native code]")) {
              f.push(v.toString());
              continue;
            }
            for (var c in v)
              i.call(v, c) && v[c] && f.push(c);
          }
        }
      }
      return f.join(" ");
    }
    n.exports ? (l.default = l, n.exports = l) : window.classNames = l;
  })();
})(ze);
var Tr = ze.exports;
const wr = /* @__PURE__ */ _r(Tr), xr = br({}), fe = [
  "green",
  "red",
  "purple",
  "yellow",
  "blue",
  "indigo",
  "pink",
  "gray",
  "black",
  "white"
];
function k(n) {
  return Array.from({ length: 10 }, (i, l) => l + 1).map(
    (i) => `${n}-${i}`
  );
}
const Ye = ["color", "bg"];
function Pr({ color: n, bg: i }) {
  return {
    [`text-${n}-500`]: n,
    [`bg-${i}-500`]: i
  };
}
const Ve = [
  "p",
  "pl",
  "py",
  "pr",
  "px"
];
function Sr({ p: n, pl: i, py: l, pr: f, px: h }) {
  return {
    [`p-${n}`]: n,
    [`pl-${i}`]: i,
    [`pr-${f}`]: f,
    [`px-${h}`]: h,
    [`py-${l}`]: l
  };
}
const Ue = [
  "m",
  "ml",
  "my",
  "mr",
  "mx"
];
function kr({ m: n, ml: i, my: l, mr: f, mx: h }) {
  return {
    [`m-${n}`]: n,
    [`ml-${i}`]: i,
    [`mr-${f}`]: f,
    [`mx-${h}`]: h,
    [`my-${l}`]: l
  };
}
const Be = ["hover"];
function jr({ hover: n }) {
  return {
    [`hover:bg-${n}-700`]: n
  };
}
const $r = [
  ...fe.map((n) => `text-${n}-500`),
  ...fe.map((n) => `bg-${n}-500`),
  ...fe.map((n) => `hover:bg-${n}-700`)
], Dr = k("p").concat(k("pl")).concat(k("px")).concat(k("py")).concat(k("pr")).concat(k("m")).concat(k("ml")).concat(k("mr")).concat(k("mx")).concat(k("my"));
[
  ...$r,
  ...Dr
];
function Ar(n = "base", i) {
  if (n === "base")
    return Fr(i);
}
function Fr(n) {
  return {
    ...Pr(n),
    ...Sr(n),
    ...kr(n),
    ...jr(n)
  };
}
function Ir(n) {
  return n === "base" ? [
    ...Ve,
    ...Ue,
    ...Ye,
    ...Be
  ] : [
    ...Ve,
    ...Ue,
    ...Ye,
    ...Be
  ];
}
function Nr(n, i) {
  const l = { ...n };
  return Array.isArray(i) && i.forEach((f) => {
    delete l[f];
  }), l;
}
function Mr(n, i, l) {
  const f = {};
  function h(c) {
    if (i in n && n[i][c])
      for (const [O, p] of Object.entries(
        n[i][c]
      ))
        f[O] = p;
    else
      return;
    return f;
  }
  function v(c) {
    return c === "hover" || c === "active";
  }
  const R = {
    ...h("common"),
    ...h(l)
  };
  return E(R);
  function E(c) {
    return Object.entries(c).map(([p, C]) => v(p) ? Wr(C, {
      specialKey: p
    }) : `${p}-${C}`).join(" ").trim();
  }
}
function Wr(n, i) {
  const { specialKey: l } = i || {};
  return Object.entries(n).map(([h, v]) => `${l ? l + ":" : ""}${h}-${v}`).join(" ").trim();
}
function Lr({ loading: n }) {
  return n ? /* @__PURE__ */ H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ x(
          "rect",
          {
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "none"
          }
        ),
        /* @__PURE__ */ H(
          "g",
          {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [
              /* @__PURE__ */ x(
                "path",
                {
                  strokeDasharray: "60",
                  strokeDashoffset: "60",
                  strokeOpacity: ".3",
                  d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
                  children: /* @__PURE__ */ x(
                    "animate",
                    {
                      fill: "freeze",
                      attributeName: "stroke-dashoffset",
                      dur: "1.3s",
                      values: "60;0"
                    }
                  )
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  strokeDasharray: "15",
                  strokeDashoffset: "15",
                  d: "M12 3C16.9706 3 21 7.02944 21 12",
                  children: [
                    /* @__PURE__ */ x(
                      "animate",
                      {
                        fill: "freeze",
                        attributeName: "stroke-dashoffset",
                        dur: "0.3s",
                        values: "15;0"
                      }
                    ),
                    /* @__PURE__ */ x(
                      "animateTransform",
                      {
                        attributeName: "transform",
                        dur: "1.5s",
                        repeatCount: "indefinite",
                        type: "rotate",
                        values: "0 12 12;360 12 12"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  ) : null;
}
function Yr(n) {
  if (typeof n == "object" && n) {
    const i = n == null ? void 0 : n.delay;
    return {
      loading: !0,
      delay: !Number.isNaN(i) && typeof i == "number" ? i : 0
    };
  }
  return {
    loading: !!n,
    delay: 0
  };
}
const Vr = (n, i) => {
  const {
    type: l = "default",
    shape: f,
    block: h,
    size: v,
    beforeIcon: R,
    afterIcon: E,
    disabled: c = !1,
    ghost: O = !1,
    loading: p = !1,
    className: C,
    children: j,
    htmlType: A = "button",
    onClick: X,
    ...L
  } = n, D = Me(
    () => Yr(p),
    [p]
  ), [T, y] = yr(
    D.loading
  ), { theme: Y = {} } = gr(xr), V = Me(
    () => Mr(Y, "button", l),
    [Y]
  ), U = "base", Z = Ar(U, L), Q = Nr(L, Ir(U)), ee = wr(
    // TODO: 判断 type 是否在预期之内
    {
      [`kylin-btn-${l}`]: !O && l,
      [`kylin-btn-shape-${f}`]: f,
      [`kylin-btn-size-${v}`]: v,
      ["kylin-btn-block"]: h,
      ["kylin-btn-ghost"]: O,
      ["kylin-btn-loading"]: T,
      ["kylin-btn-disabled"]: c || T,
      // FLAG: 经过处理后的 Unocss 样式
      ...Z
    },
    C,
    V || ""
  );
  Er(() => {
    let g = null;
    D.delay > 0 ? g = setTimeout(() => {
      g = null, y(!1);
    }, D.delay) : y(D.loading);
    function P() {
      g && (clearTimeout(g), g = null);
    }
    return P;
  }, [D]);
  const B = () => R ? /* @__PURE__ */ x("span", { className: "kylin-btn-icon-before", children: R }) : null, re = () => E ? /* @__PURE__ */ x("span", { className: "kylin-btn-icon-after", children: E }) : null;
  return /* @__PURE__ */ x(
    "button",
    {
      type: A,
      className: ee,
      onClick: (g) => {
        const { onClick: P } = n;
        if (T || c) {
          g.preventDefault();
          return;
        }
        P == null || P(g);
      },
      disabled: !!T,
      ...Q,
      children: /* @__PURE__ */ x(({ children: g }) => /* @__PURE__ */ H(Or, { children: [
        /* @__PURE__ */ x(B, {}),
        /* @__PURE__ */ x(Lr, { loading: !!T }),
        g,
        /* @__PURE__ */ x(re, {})
      ] }), { children: j })
    }
  );
}, Br = ve.forwardRef(Vr);
export {
  Br as Button
};
//# sourceMappingURL=index.js.map
