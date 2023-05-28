import ve, { createContext as Er, useState as ze, useEffect as qe, useMemo as Me, useContext as _r } from "react";
function Rr(n) {
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
function Or() {
  if (We)
    return M;
  We = 1;
  var n = ve, o = Symbol.for("react.element"), u = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(E, f, C) {
    var p, O = {}, j = null, A = null;
    C !== void 0 && (j = "" + C), f.key !== void 0 && (j = "" + f.key), f.ref !== void 0 && (A = f.ref);
    for (p in f)
      c.call(f, p) && !v.hasOwnProperty(p) && (O[p] = f[p]);
    if (E && E.defaultProps)
      for (p in f = E.defaultProps, f)
        O[p] === void 0 && (O[p] = f[p]);
    return { $$typeof: o, type: E, key: j, ref: A, props: O, _owner: m.current };
  }
  return M.Fragment = u, M.jsx = R, M.jsxs = R, M;
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
function Tr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ve, o = Symbol.for("react.element"), u = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), X = Symbol.iterator, L = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[L];
      return typeof r == "function" ? r : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Y("error", e, t);
      }
    }
    function Y(e, r, t) {
      {
        var a = w.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var V = !1, U = !1, Z = !1, Q = !1, ee = !1, B;
    B = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === v || ee || e === m || e === C || e === p || Q || e === A || V || U || Z || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === O || e.$$typeof === R || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function me(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
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
        case c:
          return "Fragment";
        case u:
          return "Portal";
        case v:
          return "Profiler";
        case m:
          return "StrictMode";
        case C:
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
          case f:
            return me(e, e.render, "ForwardRef");
          case O:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case j: {
            var l = e, d = l._payload, s = l._init;
            try {
              return S(s(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, P = 0, he, be, ye, ge, Ee, _e, Re;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function Ke() {
      {
        if (P === 0) {
          he = console.log, be = console.info, ye = console.warn, ge = console.error, Ee = console.group, _e = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
    function He() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, e, {
              value: he
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
    var ne = w.ReactCurrentDispatcher, ae;
    function z(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            ae = a && a[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var oe = !1, q;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Xe();
    }
    function Te(e, r) {
      if (!e || oe)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      oe = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ne.current, ne.current = null, Ke();
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
          for (var i = $.stack.split(`
`), _ = a.stack.split(`
`), h = i.length - 1, b = _.length - 1; h >= 1 && b >= 0 && i[h] !== _[b]; )
            b--;
          for (; h >= 1 && b >= 0; h--, b--)
            if (i[h] !== _[b]) {
              if (h !== 1 || b !== 1)
                do
                  if (h--, b--, b < 0 || i[h] !== _[b]) {
                    var x = `
` + i[h].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, x), x;
                  }
                while (h >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = d, He(), Error.prepareStackTrace = l;
      }
      var I = e ? e.displayName || e.name : "", Ne = I ? z(I) : "";
      return typeof e == "function" && q.set(e, Ne), Ne;
    }
    function Ze(e, r, t) {
      return Te(e, !1);
    }
    function Qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, Qe(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case C:
          return z("Suspense");
        case p:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ze(e.render);
          case O:
            return J(e.type, r, t);
          case j: {
            var a = e, l = a._payload, d = a._init;
            try {
              return J(d(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, Ce = {}, we = w.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function er(e, r, t, a, l) {
      {
        var d = Function.call.bind(G);
        for (var s in e)
          if (d(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              i = h;
            }
            i && !(i instanceof Error) && (K(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), K(null)), i instanceof Error && !(i.message in Ce) && (Ce[i.message] = !0, K(l), y("Failed %s type: %s", t, i.message), K(null));
          }
      }
    }
    var rr = Array.isArray;
    function ie(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function nr(e) {
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
      if (nr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), xe(e);
    }
    var N = w.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, ke, se;
    se = {};
    function or(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = S(N.current.type);
        se[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(N.current.type), e.ref), se[t] = !0);
      }
    }
    function ur(e, r) {
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
    function lr(e, r) {
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
    var cr = function(e, r, t, a, l, d, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function fr(e, r, t, a, l) {
      {
        var d, s = {}, i = null, _ = null;
        t !== void 0 && (Pe(t), i = "" + t), ir(r) && (Pe(r.key), i = "" + r.key), or(r) && (_ = r.ref, sr(r, l));
        for (d in r)
          G.call(r, d) && !ar.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (d in h)
            s[d] === void 0 && (s[d] = h[d]);
        }
        if (i || _) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ur(s, b), _ && lr(s, b);
        }
        return cr(e, i, _, l, a, N.current, s);
      }
    }
    var ue = w.ReactCurrentOwner, je = w.ReactDebugCurrentFrame;
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
      return typeof e == "object" && e !== null && e.$$typeof === o;
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
    function dr(e) {
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
    function vr(e) {
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
        var t = vr(r);
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
          var l = D(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), s; !(s = d.next()).done; )
              ce(s.value) && Ae(s.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          er(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var l = S(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
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
    function Ie(e, r, t, a, l, d) {
      {
        var s = re(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = dr(l);
          _ ? i += _ : i += $e();
          var h;
          e === null ? h = "null" : ie(e) ? h = "array" : e !== void 0 && e.$$typeof === o ? (h = "<" + (S(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, i);
        }
        var b = fr(e, r, t, l, d);
        if (b == null)
          return b;
        if (s) {
          var x = r.children;
          if (x !== void 0)
            if (a)
              if (ie(x)) {
                for (var I = 0; I < x.length; I++)
                  Fe(x[I], e);
                Object.freeze && Object.freeze(x);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(x, e);
        }
        return e === c ? mr(b) : pr(b), b;
      }
    }
    function hr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function br(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var yr = br, gr = hr;
    W.Fragment = c, W.jsx = yr, W.jsxs = gr;
  }()), W;
}
process.env.NODE_ENV === "production" ? de.exports = Or() : de.exports = Tr();
var pe = de.exports;
const Cr = pe.Fragment, T = pe.jsx, H = pe.jsxs;
var Je = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var o = {}.hasOwnProperty;
    function u() {
      for (var c = [], m = 0; m < arguments.length; m++) {
        var v = arguments[m];
        if (v) {
          var R = typeof v;
          if (R === "string" || R === "number")
            c.push(v);
          else if (Array.isArray(v)) {
            if (v.length) {
              var E = u.apply(null, v);
              E && c.push(E);
            }
          } else if (R === "object") {
            if (v.toString !== Object.prototype.toString && !v.toString.toString().includes("[native code]")) {
              c.push(v.toString());
              continue;
            }
            for (var f in v)
              o.call(v, f) && v[f] && c.push(f);
          }
        }
      }
      return c.join(" ");
    }
    n.exports ? (u.default = u, n.exports = u) : window.classNames = u;
  })();
})(Je);
var wr = Je.exports;
const xr = /* @__PURE__ */ Rr(wr), Ge = Er({}), Br = ({
  themeConfig: n,
  children: o
}) => {
  const [u, c] = ze(n);
  return qe(() => {
    c(n);
  }, [n]), /* @__PURE__ */ T(Ge.Provider, { value: { theme: u, setTheme: c }, children: o });
}, fe = [
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
  return Array.from({ length: 10 }, (o, u) => u + 1).map(
    (o) => `${n}-${o}`
  );
}
const Ye = ["color", "bg"];
function Pr({ color: n, bg: o }) {
  return {
    [`text-${n}-500`]: n,
    [`bg-${o}-500`]: o
  };
}
const Ve = [
  "p",
  "pl",
  "py",
  "pr",
  "px"
];
function Sr({ p: n, pl: o, py: u, pr: c, px: m }) {
  return {
    [`p-${n}`]: n,
    [`pl-${o}`]: o,
    [`pr-${c}`]: c,
    [`px-${m}`]: m,
    [`py-${u}`]: u
  };
}
const Ue = [
  "m",
  "ml",
  "my",
  "mr",
  "mx"
];
function kr({ m: n, ml: o, my: u, mr: c, mx: m }) {
  return {
    [`m-${n}`]: n,
    [`ml-${o}`]: o,
    [`mr-${c}`]: c,
    [`mx-${m}`]: m,
    [`my-${u}`]: u
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
function Ar(n = "base", o) {
  if (n === "base")
    return Fr(o);
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
function Nr(n, o) {
  const u = { ...n };
  return Array.isArray(o) && o.forEach((c) => {
    delete u[c];
  }), u;
}
function Mr(n, o, u) {
  const c = {};
  function m(f) {
    if (o in n && n[o][f])
      for (const [C, p] of Object.entries(
        n[o][f]
      ))
        c[C] = p;
    else
      return;
    return c;
  }
  function v(f) {
    return f === "hover" || f === "active";
  }
  const R = {
    ...m("common"),
    ...m(u)
  };
  return E(R);
  function E(f) {
    return Object.entries(f).map(([p, O]) => v(p) ? Wr(O, {
      specialKey: p
    }) : `${p}-${O}`).join(" ").trim();
  }
}
function Wr(n, o) {
  const { specialKey: u } = o || {};
  return Object.entries(n).map(([m, v]) => `${u ? u + ":" : ""}${m}-${v}`).join(" ").trim();
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
        /* @__PURE__ */ T(
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
              /* @__PURE__ */ T(
                "path",
                {
                  strokeDasharray: "60",
                  strokeDashoffset: "60",
                  strokeOpacity: ".3",
                  d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
                  children: /* @__PURE__ */ T(
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
                    /* @__PURE__ */ T(
                      "animate",
                      {
                        fill: "freeze",
                        attributeName: "stroke-dashoffset",
                        dur: "0.3s",
                        values: "15;0"
                      }
                    ),
                    /* @__PURE__ */ T(
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
    const o = n == null ? void 0 : n.delay;
    return {
      loading: !0,
      delay: !Number.isNaN(o) && typeof o == "number" ? o : 0
    };
  }
  return {
    loading: !!n,
    delay: 0
  };
}
const Vr = (n, o) => {
  const {
    type: u = "default",
    shape: c,
    block: m,
    size: v,
    beforeIcon: R,
    afterIcon: E,
    disabled: f = !1,
    ghost: C = !1,
    loading: p = !1,
    className: O,
    children: j,
    htmlType: A = "button",
    onClick: X,
    ...L
  } = n, D = Me(
    () => Yr(p),
    [p]
  ), [w, y] = ze(
    D.loading
  ), { theme: Y = {} } = _r(Ge), V = Me(
    () => Mr(Y, "button", u),
    [Y]
  ), U = "base", Z = Ar(U, L), Q = Nr(L, Ir(U)), ee = xr(
    // TODO: 判断 type 是否在预期之内
    {
      [`kylin-btn-${u}`]: !C && u,
      [`kylin-btn-shape-${c}`]: c,
      [`kylin-btn-size-${v}`]: v,
      ["kylin-btn-block"]: m,
      ["kylin-btn-ghost"]: C,
      ["kylin-btn-loading"]: w,
      ["kylin-btn-disabled"]: f || w,
      // FLAG: 经过处理后的 Unocss 样式
      ...Z
    },
    O,
    V || ""
  );
  qe(() => {
    let g = null;
    D.delay > 0 ? g = setTimeout(() => {
      g = null, y(!1);
    }, D.delay) : y(D.loading);
    function P() {
      g && (clearTimeout(g), g = null);
    }
    return P;
  }, [D]);
  const B = () => R ? /* @__PURE__ */ T("span", { className: "kylin-btn-icon-before", children: R }) : null, re = () => E ? /* @__PURE__ */ T("span", { className: "kylin-btn-icon-after", children: E }) : null;
  return /* @__PURE__ */ T(
    "button",
    {
      type: A,
      className: ee,
      onClick: (g) => {
        const { onClick: P } = n;
        if (w || f) {
          g.preventDefault();
          return;
        }
        P == null || P(g);
      },
      disabled: !!w,
      ...Q,
      children: /* @__PURE__ */ T(({ children: g }) => /* @__PURE__ */ H(Cr, { children: [
        /* @__PURE__ */ T(B, {}),
        /* @__PURE__ */ T(Lr, { loading: !!w }),
        g,
        /* @__PURE__ */ T(re, {})
      ] }), { children: j })
    }
  );
}, zr = ve.forwardRef(Vr);
export {
  zr as Button,
  Ge as ThemeContext,
  Br as ThemeProvider
};
//# sourceMappingURL=index.es.js.map
