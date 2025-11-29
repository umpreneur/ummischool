var Ru = (e) => {
  throw TypeError(e);
};
var Ns = (e, t, n) => t.has(e) || Ru("Cannot " + n);
var N = (e, t, n) => (
    Ns(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  K = (e, t, n) =>
    t.has(e)
      ? Ru("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  D = (e, t, n, r) => (
    Ns(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  ge = (e, t, n) => (Ns(e, t, "access private method"), n);
var Ho = (e, t, n, r) => ({
  set _(o) {
    D(e, t, o, n);
  },
  get _() {
    return N(e, t, r);
  },
});
function Sm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Td = { exports: {} },
  Ji = {},
  Rd = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ao = Symbol.for("react.element"),
  Nm = Symbol.for("react.portal"),
  Cm = Symbol.for("react.fragment"),
  Pm = Symbol.for("react.strict_mode"),
  Tm = Symbol.for("react.profiler"),
  Rm = Symbol.for("react.provider"),
  Am = Symbol.for("react.context"),
  zm = Symbol.for("react.forward_ref"),
  Fm = Symbol.for("react.suspense"),
  Om = Symbol.for("react.memo"),
  _m = Symbol.for("react.lazy"),
  Au = Symbol.iterator;
function Lm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Au && e[Au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ad = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zd = Object.assign,
  Fd = {};
function Pr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Fd),
    (this.updater = n || Ad));
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Od() {}
Od.prototype = Pr.prototype;
function ca(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Fd),
    (this.updater = n || Ad));
}
var da = (ca.prototype = new Od());
da.constructor = ca;
zd(da, Pr.prototype);
da.isPureReactComponent = !0;
var zu = Array.isArray,
  _d = Object.prototype.hasOwnProperty,
  fa = { current: null },
  Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function Md(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      _d.call(t, r) && !Ld.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ao,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: fa.current,
  };
}
function Mm(e, t) {
  return {
    $$typeof: Ao,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ao;
}
function Dm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fu = /\/+/g;
function Cs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dm("" + e.key)
    : t.toString(36);
}
function ai(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ao:
          case Nm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Cs(l, 0) : r),
      zu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Fu, "$&/") + "/"),
          ai(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (pa(o) &&
            (o = Mm(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Fu, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), zu(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + Cs(i, a);
      l += ai(i, t, n, u, o);
    }
  else if (((u = Lm(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (u = r + Cs(i, a++)), (l += ai(i, t, n, u, o)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return l;
}
function $o(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ai(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Im(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  ui = { transition: null },
  Hm = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: ui,
    ReactCurrentOwner: fa,
  };
function Dd() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: $o,
  forEach: function (e, t, n) {
    $o(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $o(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $o(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
B.Component = Pr;
B.Fragment = Cm;
B.Profiler = Tm;
B.PureComponent = ca;
B.StrictMode = Pm;
B.Suspense = Fm;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
B.act = Dd;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = zd({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = fa.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      _d.call(t, u) &&
        !Ld.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ao, type: e.type, key: o, ref: i, props: r, _owner: l };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Am,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rm, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Md;
B.createFactory = function (e) {
  var t = Md.bind(null, e);
  return ((t.type = e), t);
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: zm, render: e };
};
B.isValidElement = pa;
B.lazy = function (e) {
  return { $$typeof: _m, _payload: { _status: -1, _result: e }, _init: Im };
};
B.memo = function (e, t) {
  return { $$typeof: Om, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ui.transition;
  ui.transition = {};
  try {
    e();
  } finally {
    ui.transition = t;
  }
};
B.unstable_act = Dd;
B.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Ne.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
B.useId = function () {
  return Ne.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Ne.current.useRef(e);
};
B.useState = function (e) {
  return Ne.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Ne.current.useTransition();
};
B.version = "18.3.1";
Rd.exports = B;
var x = Rd.exports;
const Bt = Pd(x),
  $m = Sm({ __proto__: null, default: Bt }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm = x,
  Wm = Symbol.for("react.element"),
  Um = Symbol.for("react.fragment"),
  Vm = Object.prototype.hasOwnProperty,
  Qm = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Km = { key: !0, ref: !0, __self: !0, __source: !0 };
function Id(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref));
  for (r in t) Vm.call(t, r) && !Km.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Wm,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Qm.current,
  };
}
Ji.Fragment = Um;
Ji.jsx = Id;
Ji.jsxs = Id;
Td.exports = Ji;
var s = Td.exports,
  Hd = { exports: {} },
  $e = {},
  $d = { exports: {} },
  Bd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, R) {
    var L = C.length;
    C.push(R);
    e: for (; 0 < L; ) {
      var H = (L - 1) >>> 1,
        Z = C[H];
      if (0 < o(Z, R)) ((C[H] = R), (C[L] = Z), (L = H));
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var R = C[0],
      L = C.pop();
    if (L !== R) {
      C[0] = L;
      e: for (var H = 0, Z = C.length, Je = Z >>> 1; H < Je; ) {
        var We = 2 * (H + 1) - 1,
          _r = C[We],
          bt = We + 1,
          xn = C[bt];
        if (0 > o(_r, L))
          bt < Z && 0 > o(xn, _r)
            ? ((C[H] = xn), (C[bt] = L), (H = bt))
            : ((C[H] = _r), (C[We] = L), (H = We));
        else if (bt < Z && 0 > o(xn, L)) ((C[H] = xn), (C[bt] = L), (H = bt));
        else break e;
      }
    }
    return R;
  }
  function o(C, R) {
    var L = C.sortIndex - R.sortIndex;
    return L !== 0 ? L : C.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    p = null,
    h = 3,
    y = !1,
    w = !1,
    v = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(C) {
    for (var R = n(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= C)
        (r(c), (R.sortIndex = R.expirationTime), t(u, R));
      else break;
      R = n(c);
    }
  }
  function k(C) {
    if (((v = !1), g(C), !w))
      if (n(u) !== null) ((w = !0), $(b));
      else {
        var R = n(c);
        R !== null && V(k, R.startTime - C);
      }
  }
  function b(C, R) {
    ((w = !1), v && ((v = !1), m(P), (P = -1)), (y = !0));
    var L = h;
    try {
      for (
        g(R), p = n(u);
        p !== null && (!(p.expirationTime > R) || (C && !I()));

      ) {
        var H = p.callback;
        if (typeof H == "function") {
          ((p.callback = null), (h = p.priorityLevel));
          var Z = H(p.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(u) && r(u),
            g(R));
        } else r(u);
        p = n(u);
      }
      if (p !== null) var Je = !0;
      else {
        var We = n(c);
        (We !== null && V(k, We.startTime - R), (Je = !1));
      }
      return Je;
    } finally {
      ((p = null), (h = L), (y = !1));
    }
  }
  var E = !1,
    S = null,
    P = -1,
    O = 5,
    z = -1;
  function I() {
    return !(e.unstable_now() - z < O);
  }
  function _() {
    if (S !== null) {
      var C = e.unstable_now();
      z = C;
      var R = !0;
      try {
        R = S(!0, C);
      } finally {
        R ? W() : ((E = !1), (S = null));
      }
    } else E = !1;
  }
  var W;
  if (typeof f == "function")
    W = function () {
      f(_);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      Q = F.port2;
    ((F.port1.onmessage = _),
      (W = function () {
        Q.postMessage(null);
      }));
  } else
    W = function () {
      j(_, 0);
    };
  function $(C) {
    ((S = C), E || ((E = !0), W()));
  }
  function V(C, R) {
    P = j(function () {
      C(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), $(b));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var L = h;
      h = R;
      try {
        return C();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, R) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var L = h;
      h = C;
      try {
        return R();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (C, R, L) {
      var H = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? H + L : H))
          : (L = H),
        C)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (C = {
          id: d++,
          callback: R,
          priorityLevel: C,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > H
          ? ((C.sortIndex = L),
            t(c, C),
            n(u) === null &&
              C === n(c) &&
              (v ? (m(P), (P = -1)) : (v = !0), V(k, L - H)))
          : ((C.sortIndex = Z), t(u, C), w || y || ((w = !0), $(b))),
        C
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (C) {
      var R = h;
      return function () {
        var L = h;
        h = R;
        try {
          return C.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    }));
})(Bd);
$d.exports = Bd;
var Gm = $d.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qm = x,
  He = Gm;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wd = new Set(),
  lo = {};
function In(e, t) {
  (yr(e, t), yr(e + "Capture", t));
}
function yr(e, t) {
  for (lo[e] = t, e = 0; e < t.length; e++) Wd.add(t[e]);
}
var zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ll = Object.prototype.hasOwnProperty,
  Ym =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ou = {},
  _u = {};
function Xm(e) {
  return ll.call(_u, e)
    ? !0
    : ll.call(Ou, e)
      ? !1
      : Ym.test(e)
        ? (_u[e] = !0)
        : ((Ou[e] = !0), !1);
}
function Jm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zm(e, t, n, r) {
  if (t === null || typeof t > "u" || Jm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ce(e, t, n, r, o, i, l) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l));
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ha = /[\-:]([a-z])/g;
function ma(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ha, ma);
    me[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ha, ma);
    me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ha, ma);
  me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ga(e, t, n, r) {
  var o = me.hasOwnProperty(t) ? me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Zm(t, n, o, r) && (n = null),
    r || o === null
      ? Xm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bo = Symbol.for("react.element"),
  Wn = Symbol.for("react.portal"),
  Un = Symbol.for("react.fragment"),
  va = Symbol.for("react.strict_mode"),
  al = Symbol.for("react.profiler"),
  Ud = Symbol.for("react.provider"),
  Vd = Symbol.for("react.context"),
  ya = Symbol.for("react.forward_ref"),
  ul = Symbol.for("react.suspense"),
  cl = Symbol.for("react.suspense_list"),
  xa = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  Qd = Symbol.for("react.offscreen"),
  Lu = Symbol.iterator;
function Mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lu && e[Lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Ps;
function Kr(e) {
  if (Ps === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ps = (t && t[1]) || "";
    }
  return (
    `
` +
    Ps +
    e
  );
}
var Ts = !1;
function Rs(e, t) {
  if (!e || Ts) return "";
  Ts = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var u =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    ((Ts = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Kr(e) : "";
}
function eg(e) {
  switch (e.tag) {
    case 5:
      return Kr(e.type);
    case 16:
      return Kr("Lazy");
    case 13:
      return Kr("Suspense");
    case 19:
      return Kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Rs(e.type, !1)), e);
    case 11:
      return ((e = Rs(e.type.render, !1)), e);
    case 1:
      return ((e = Rs(e.type, !0)), e);
    default:
      return "";
  }
}
function dl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case Wn:
      return "Portal";
    case al:
      return "Profiler";
    case va:
      return "StrictMode";
    case ul:
      return "Suspense";
    case cl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vd:
        return (e.displayName || "Context") + ".Consumer";
      case Ud:
        return (e._context.displayName || "Context") + ".Provider";
      case ya:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xa:
        return (
          (t = e.displayName || null),
          t !== null ? t : dl(e.type) || "Memo"
        );
      case Ut:
        ((t = e._payload), (e = e._init));
        try {
          return dl(e(t));
        } catch {}
    }
  return null;
}
function tg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return dl(t);
    case 8:
      return t === va ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Kd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ng(e) {
  var t = Kd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          ((r = "" + l), i.call(this, l));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Wo(e) {
  e._valueTracker || (e._valueTracker = ng(e));
}
function Gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fl(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function qd(e, t) {
  ((t = t.checked), t != null && ga(e, "checked", t, !1));
}
function pl(e, t) {
  qd(e, t);
  var n = cn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? hl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hl(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Du(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function hl(e, t, n) {
  (t !== "number" || bi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gr = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + cn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ml(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Gr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Yd(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Uo,
  Jd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Uo = Uo || document.createElement("div"),
          Uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Uo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ao(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
  rg.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]));
  });
});
function Zd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xr.hasOwnProperty(e) && Xr[e])
      ? ("" + t).trim()
      : t + "px";
}
function ef(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Zd(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var og = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function vl(e, t) {
  if (t) {
    if (og[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function yl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xl = null;
function wa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wl = null,
  nr = null,
  rr = null;
function $u(e) {
  if ((e = Oo(e))) {
    if (typeof wl != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = rs(t)), wl(e.stateNode, e.type, t));
  }
}
function tf(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function nf() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
  }
}
function rf(e, t) {
  return e(t);
}
function of() {}
var As = !1;
function sf(e, t, n) {
  if (As) return e(t, n);
  As = !0;
  try {
    return rf(e, t, n);
  } finally {
    ((As = !1), (nr !== null || rr !== null) && (of(), nf()));
  }
}
function uo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = rs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var jl = !1;
if (zt)
  try {
    var Dr = {};
    (Object.defineProperty(Dr, "passive", {
      get: function () {
        jl = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr));
  } catch {
    jl = !1;
  }
function ig(e, t, n, r, o, i, l, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Jr = !1,
  Ei = null,
  Si = !1,
  kl = null,
  sg = {
    onError: function (e) {
      ((Jr = !0), (Ei = e));
    },
  };
function lg(e, t, n, r, o, i, l, a, u) {
  ((Jr = !1), (Ei = null), ig.apply(sg, arguments));
}
function ag(e, t, n, r, o, i, l, a, u) {
  if ((lg.apply(this, arguments), Jr)) {
    if (Jr) {
      var c = Ei;
      ((Jr = !1), (Ei = null));
    } else throw Error(T(198));
    Si || ((Si = !0), (kl = c));
  }
}
function Hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bu(e) {
  if (Hn(e) !== e) throw Error(T(188));
}
function ug(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (Bu(o), e);
        if (i === r) return (Bu(o), t);
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          ((l = !0), (n = o), (r = i));
          break;
        }
        if (a === r) {
          ((l = !0), (r = o), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((l = !0), (n = i), (r = o));
            break;
          }
          if (a === r) {
            ((l = !0), (r = i), (n = o));
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function af(e) {
  return ((e = ug(e)), e !== null ? uf(e) : null);
}
function uf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cf = He.unstable_scheduleCallback,
  Wu = He.unstable_cancelCallback,
  cg = He.unstable_shouldYield,
  dg = He.unstable_requestPaint,
  se = He.unstable_now,
  fg = He.unstable_getCurrentPriorityLevel,
  ja = He.unstable_ImmediatePriority,
  df = He.unstable_UserBlockingPriority,
  Ni = He.unstable_NormalPriority,
  pg = He.unstable_LowPriority,
  ff = He.unstable_IdlePriority,
  Zi = null,
  vt = null;
function hg(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(Zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : vg,
  mg = Math.log,
  gg = Math.LN2;
function vg(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((mg(e) / gg) | 0)) | 0);
}
var Vo = 64,
  Qo = 4194304;
function qr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = qr(a)) : ((i &= l), i !== 0 && (r = qr(i)));
  } else ((l = n & ~o), l !== 0 ? (r = qr(l)) : i !== 0 && (r = qr(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - it(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function yg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - it(i),
      a = 1 << l,
      u = o[l];
    (u === -1
      ? (!(a & n) || a & r) && (o[l] = yg(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function bl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pf() {
  var e = Vo;
  return ((Vo <<= 1), !(Vo & 4194240) && (Vo = 64), e);
}
function zs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zo(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n));
}
function wg(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - it(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function ka(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var G = 0;
function hf(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var mf,
  ba,
  gf,
  vf,
  yf,
  El = !1,
  Ko = [],
  tn = null,
  nn = null,
  rn = null,
  co = new Map(),
  fo = new Map(),
  Qt = [],
  jg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      co.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fo.delete(t.pointerId);
  }
}
function Ir(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Oo(t)), t !== null && ba(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function kg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((tn = Ir(tn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((nn = Ir(nn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((rn = Ir(rn, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (co.set(i, Ir(co.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        fo.set(i, Ir(fo.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function xf(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = Hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lf(n)), t !== null)) {
          ((e.blockedOn = t),
            yf(e.priority, function () {
              gf(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ci(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((xl = r), n.target.dispatchEvent(r), (xl = null));
    } else return ((t = Oo(n)), t !== null && ba(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Vu(e, t, n) {
  ci(e) && n.delete(t);
}
function bg() {
  ((El = !1),
    tn !== null && ci(tn) && (tn = null),
    nn !== null && ci(nn) && (nn = null),
    rn !== null && ci(rn) && (rn = null),
    co.forEach(Vu),
    fo.forEach(Vu));
}
function Hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    El ||
      ((El = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, bg)));
}
function po(e) {
  function t(o) {
    return Hr(o, e);
  }
  if (0 < Ko.length) {
    Hr(Ko[0], e);
    for (var n = 1; n < Ko.length; n++) {
      var r = Ko[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Hr(tn, e),
      nn !== null && Hr(nn, e),
      rn !== null && Hr(rn, e),
      co.forEach(t),
      fo.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    ((r = Qt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    (xf(n), n.blockedOn === null && Qt.shift());
}
var or = Dt.ReactCurrentBatchConfig,
  Pi = !0;
function Eg(e, t, n, r) {
  var o = G,
    i = or.transition;
  or.transition = null;
  try {
    ((G = 1), Ea(e, t, n, r));
  } finally {
    ((G = o), (or.transition = i));
  }
}
function Sg(e, t, n, r) {
  var o = G,
    i = or.transition;
  or.transition = null;
  try {
    ((G = 4), Ea(e, t, n, r));
  } finally {
    ((G = o), (or.transition = i));
  }
}
function Ea(e, t, n, r) {
  if (Pi) {
    var o = Sl(e, t, n, r);
    if (o === null) (Bs(e, t, r, Ti, n), Uu(e, r));
    else if (kg(o, e, t, n, r)) r.stopPropagation();
    else if ((Uu(e, r), t & 4 && -1 < jg.indexOf(e))) {
      for (; o !== null; ) {
        var i = Oo(o);
        if (
          (i !== null && mf(i),
          (i = Sl(e, t, n, r)),
          i === null && Bs(e, t, r, Ti, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Bs(e, t, r, null, n);
  }
}
var Ti = null;
function Sl(e, t, n, r) {
  if (((Ti = null), (e = wa(r)), (e = kn(e)), e !== null))
    if (((t = Hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Ti = e), null);
}
function wf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (fg()) {
        case ja:
          return 1;
        case df:
          return 4;
        case Ni:
        case pg:
          return 16;
        case ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  Sa = null,
  di = null;
function jf() {
  if (di) return di;
  var e,
    t = Sa,
    n = t.length,
    r,
    o = "value" in Zt ? Zt.value : Zt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (di = o.slice(e, 1 < r ? 1 - r : void 0));
}
function fi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Go() {
  return !0;
}
function Qu() {
  return !1;
}
function Be(e) {
  function t(n, r, o, i, l) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Go
        : Qu),
      (this.isPropagationStopped = Qu),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Go));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Go));
      },
      persist: function () {},
      isPersistent: Go,
    }),
    t
  );
}
var Tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Na = Be(Tr),
  Fo = re({}, Tr, { view: 0, detail: 0 }),
  Ng = Be(Fo),
  Fs,
  Os,
  $r,
  es = re({}, Fo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ca,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== $r &&
            ($r && e.type === "mousemove"
              ? ((Fs = e.screenX - $r.screenX), (Os = e.screenY - $r.screenY))
              : (Os = Fs = 0),
            ($r = e)),
          Fs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Os;
    },
  }),
  Ku = Be(es),
  Cg = re({}, es, { dataTransfer: 0 }),
  Pg = Be(Cg),
  Tg = re({}, Fo, { relatedTarget: 0 }),
  _s = Be(Tg),
  Rg = re({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ag = Be(Rg),
  zg = re({}, Tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fg = Be(zg),
  Og = re({}, Tr, { data: 0 }),
  Gu = Be(Og),
  _g = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Lg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Mg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mg[e]) ? !!t[e] : !1;
}
function Ca() {
  return Dg;
}
var Ig = re({}, Fo, {
    key: function (e) {
      if (e.key) {
        var t = _g[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Lg[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ca,
    charCode: function (e) {
      return e.type === "keypress" ? fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Hg = Be(Ig),
  $g = re({}, es, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = Be($g),
  Bg = re({}, Fo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ca,
  }),
  Wg = Be(Bg),
  Ug = re({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vg = Be(Ug),
  Qg = re({}, es, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Kg = Be(Qg),
  Gg = [9, 13, 27, 32],
  Pa = zt && "CompositionEvent" in window,
  Zr = null;
zt && "documentMode" in document && (Zr = document.documentMode);
var qg = zt && "TextEvent" in window && !Zr,
  kf = zt && (!Pa || (Zr && 8 < Zr && 11 >= Zr)),
  Yu = " ",
  Xu = !1;
function bf(e, t) {
  switch (e) {
    case "keyup":
      return Gg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ef(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Vn = !1;
function Yg(e, t) {
  switch (e) {
    case "compositionend":
      return Ef(t);
    case "keypress":
      return t.which !== 32 ? null : ((Xu = !0), Yu);
    case "textInput":
      return ((e = t.data), e === Yu && Xu ? null : e);
    default:
      return null;
  }
}
function Xg(e, t) {
  if (Vn)
    return e === "compositionend" || (!Pa && bf(e, t))
      ? ((e = jf()), (di = Sa = Zt = null), (Vn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jg[e.type] : t === "textarea";
}
function Sf(e, t, n, r) {
  (tf(r),
    (t = Ri(t, "onChange")),
    0 < t.length &&
      ((n = new Na("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var eo = null,
  ho = null;
function Zg(e) {
  Lf(e, 0);
}
function ts(e) {
  var t = Gn(e);
  if (Gd(t)) return e;
}
function ev(e, t) {
  if (e === "change") return t;
}
var Nf = !1;
if (zt) {
  var Ls;
  if (zt) {
    var Ms = "oninput" in document;
    if (!Ms) {
      var Zu = document.createElement("div");
      (Zu.setAttribute("oninput", "return;"),
        (Ms = typeof Zu.oninput == "function"));
    }
    Ls = Ms;
  } else Ls = !1;
  Nf = Ls && (!document.documentMode || 9 < document.documentMode);
}
function ec() {
  eo && (eo.detachEvent("onpropertychange", Cf), (ho = eo = null));
}
function Cf(e) {
  if (e.propertyName === "value" && ts(ho)) {
    var t = [];
    (Sf(t, ho, e, wa(e)), sf(Zg, t));
  }
}
function tv(e, t, n) {
  e === "focusin"
    ? (ec(), (eo = t), (ho = n), eo.attachEvent("onpropertychange", Cf))
    : e === "focusout" && ec();
}
function nv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ts(ho);
}
function rv(e, t) {
  if (e === "click") return ts(t);
}
function ov(e, t) {
  if (e === "input" || e === "change") return ts(t);
}
function iv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : iv;
function mo(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ll.call(t, o) || !lt(e[o], t[o])) return !1;
  }
  return !0;
}
function tc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nc(e, t) {
  var n = tc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = tc(n);
  }
}
function Pf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Pf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Tf() {
  for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bi(e.document);
  }
  return t;
}
function Ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function sv(e) {
  var t = Tf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ta(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = nc(n, i)));
        var l = nc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var lv = zt && "documentMode" in document && 11 >= document.documentMode,
  Qn = null,
  Nl = null,
  to = null,
  Cl = !1;
function rc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cl ||
    Qn == null ||
    Qn !== bi(r) ||
    ((r = Qn),
    "selectionStart" in r && Ta(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (to && mo(to, r)) ||
      ((to = r),
      (r = Ri(Nl, "onSelect")),
      0 < r.length &&
        ((t = new Na("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qn))));
}
function qo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kn = {
    animationend: qo("Animation", "AnimationEnd"),
    animationiteration: qo("Animation", "AnimationIteration"),
    animationstart: qo("Animation", "AnimationStart"),
    transitionend: qo("Transition", "TransitionEnd"),
  },
  Ds = {},
  Rf = {};
zt &&
  ((Rf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kn.animationend.animation,
    delete Kn.animationiteration.animation,
    delete Kn.animationstart.animation),
  "TransitionEvent" in window || delete Kn.transitionend.transition);
function ns(e) {
  if (Ds[e]) return Ds[e];
  if (!Kn[e]) return e;
  var t = Kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rf) return (Ds[e] = t[n]);
  return e;
}
var Af = ns("animationend"),
  zf = ns("animationiteration"),
  Ff = ns("animationstart"),
  Of = ns("transitionend"),
  _f = new Map(),
  oc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function gn(e, t) {
  (_f.set(e, t), In(t, [e]));
}
for (var Is = 0; Is < oc.length; Is++) {
  var Hs = oc[Is],
    av = Hs.toLowerCase(),
    uv = Hs[0].toUpperCase() + Hs.slice(1);
  gn(av, "on" + uv);
}
gn(Af, "onAnimationEnd");
gn(zf, "onAnimationIteration");
gn(Ff, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(Of, "onTransitionEnd");
yr("onMouseEnter", ["mouseout", "mouseover"]);
yr("onMouseLeave", ["mouseout", "mouseover"]);
yr("onPointerEnter", ["pointerout", "pointerover"]);
yr("onPointerLeave", ["pointerout", "pointerover"]);
In(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
In(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
In(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
In(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  cv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function ic(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), ag(r, t, void 0, e), (e.currentTarget = null));
}
function Lf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== i && o.isPropagationStopped())) break e;
          (ic(o, a, c), (i = u));
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          (ic(o, a, c), (i = u));
        }
    }
  }
  if (Si) throw ((e = kl), (Si = !1), (kl = null), e);
}
function X(e, t) {
  var n = t[zl];
  n === void 0 && (n = t[zl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Mf(t, e, 2, !1), n.add(r));
}
function $s(e, t, n) {
  var r = 0;
  (t && (r |= 4), Mf(n, e, r, t));
}
var Yo = "_reactListening" + Math.random().toString(36).slice(2);
function go(e) {
  if (!e[Yo]) {
    ((e[Yo] = !0),
      Wd.forEach(function (n) {
        n !== "selectionchange" && (cv.has(n) || $s(n, !1, e), $s(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yo] || ((t[Yo] = !0), $s("selectionchange", !1, t));
  }
}
function Mf(e, t, n, r) {
  switch (wf(t)) {
    case 1:
      var o = Eg;
      break;
    case 4:
      o = Sg;
      break;
    default:
      o = Ea;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !jl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function Bs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = kn(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sf(function () {
    var c = i,
      d = wa(n),
      p = [];
    e: {
      var h = _f.get(e);
      if (h !== void 0) {
        var y = Na,
          w = e;
        switch (e) {
          case "keypress":
            if (fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Hg;
            break;
          case "focusin":
            ((w = "focus"), (y = _s));
            break;
          case "focusout":
            ((w = "blur"), (y = _s));
            break;
          case "beforeblur":
          case "afterblur":
            y = _s;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Pg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Wg;
            break;
          case Af:
          case zf:
          case Ff:
            y = Ag;
            break;
          case Of:
            y = Vg;
            break;
          case "scroll":
            y = Ng;
            break;
          case "wheel":
            y = Kg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Fg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = qu;
        }
        var v = (t & 4) !== 0,
          j = !v && e === "scroll",
          m = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var f = c, g; f !== null; ) {
          g = f;
          var k = g.stateNode;
          if (
            (g.tag === 5 &&
              k !== null &&
              ((g = k),
              m !== null && ((k = uo(f, m)), k != null && v.push(vo(f, k, g)))),
            j)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((h = new y(h, w, null, n, d)), p.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== xl &&
            (w = n.relatedTarget || n.fromElement) &&
            (kn(w) || w[Ft]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = c),
              (w = w ? kn(w) : null),
              w !== null &&
                ((j = Hn(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = c)),
          y !== w)
        ) {
          if (
            ((v = Ku),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = qu),
              (k = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (j = y == null ? h : Gn(y)),
            (g = w == null ? h : Gn(w)),
            (h = new v(k, f + "leave", y, n, d)),
            (h.target = j),
            (h.relatedTarget = g),
            (k = null),
            kn(d) === c &&
              ((v = new v(m, f + "enter", w, n, d)),
              (v.target = g),
              (v.relatedTarget = j),
              (k = v)),
            (j = k),
            y && w)
          )
            t: {
              for (v = y, m = w, f = 0, g = v; g; g = Bn(g)) f++;
              for (g = 0, k = m; k; k = Bn(k)) g++;
              for (; 0 < f - g; ) ((v = Bn(v)), f--);
              for (; 0 < g - f; ) ((m = Bn(m)), g--);
              for (; f--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                ((v = Bn(v)), (m = Bn(m)));
              }
              v = null;
            }
          else v = null;
          (y !== null && sc(p, h, y, v, !1),
            w !== null && j !== null && sc(p, j, w, v, !0));
        }
      }
      e: {
        if (
          ((h = c ? Gn(c) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var b = ev;
        else if (Ju(h))
          if (Nf) b = ov;
          else {
            b = nv;
            var E = tv;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (b = rv);
        if (b && (b = b(e, c))) {
          Sf(p, b, n, d);
          break e;
        }
        (E && E(e, h, c),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            hl(h, "number", h.value));
      }
      switch (((E = c ? Gn(c) : window), e)) {
        case "focusin":
          (Ju(E) || E.contentEditable === "true") &&
            ((Qn = E), (Nl = c), (to = null));
          break;
        case "focusout":
          to = Nl = Qn = null;
          break;
        case "mousedown":
          Cl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Cl = !1), rc(p, n, d));
          break;
        case "selectionchange":
          if (lv) break;
        case "keydown":
        case "keyup":
          rc(p, n, d);
      }
      var S;
      if (Pa)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Vn
          ? bf(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (kf &&
          n.locale !== "ko" &&
          (Vn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Vn && (S = jf())
            : ((Zt = d),
              (Sa = "value" in Zt ? Zt.value : Zt.textContent),
              (Vn = !0))),
        (E = Ri(c, P)),
        0 < E.length &&
          ((P = new Gu(P, e, null, n, d)),
          p.push({ event: P, listeners: E }),
          S ? (P.data = S) : ((S = Ef(n)), S !== null && (P.data = S)))),
        (S = qg ? Yg(e, n) : Xg(e, n)) &&
          ((c = Ri(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Gu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = S))));
    }
    Lf(p, t);
  });
}
function vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = uo(e, n)),
      i != null && r.unshift(vo(e, i, o)),
      (i = uo(e, t)),
      i != null && r.push(vo(e, i, o))),
      (e = e.return));
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((u = uo(n, i)), u != null && l.unshift(vo(n, u, a)))
        : o || ((u = uo(n, i)), u != null && l.push(vo(n, u, a)))),
      (n = n.return));
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var dv = /\r\n?/g,
  fv = /\u0000|\uFFFD/g;
function lc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      dv,
      `
`,
    )
    .replace(fv, "");
}
function Xo(e, t, n) {
  if (((t = lc(t)), lc(e) !== t && n)) throw Error(T(425));
}
function Ai() {}
var Pl = null,
  Tl = null;
function Rl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Al = typeof setTimeout == "function" ? setTimeout : void 0,
  pv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ac = typeof Promise == "function" ? Promise : void 0,
  hv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ac < "u"
        ? function (e) {
            return ac.resolve(null).then(e).catch(mv);
          }
        : Al;
function mv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ws(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), po(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  po(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function uc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Rr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + Rr,
  yo = "__reactProps$" + Rr,
  Ft = "__reactContainer$" + Rr,
  zl = "__reactEvents$" + Rr,
  gv = "__reactListeners$" + Rr,
  vv = "__reactHandles$" + Rr;
function kn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = uc(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = uc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Oo(e) {
  return (
    (e = e[gt] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function rs(e) {
  return e[yo] || null;
}
var Fl = [],
  qn = -1;
function vn(e) {
  return { current: e };
}
function J(e) {
  0 > qn || ((e.current = Fl[qn]), (Fl[qn] = null), qn--);
}
function q(e, t) {
  (qn++, (Fl[qn] = e.current), (e.current = t));
}
var dn = {},
  je = vn(dn),
  Re = vn(!1),
  An = dn;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ae(e) {
  return ((e = e.childContextTypes), e != null);
}
function zi() {
  (J(Re), J(je));
}
function cc(e, t, n) {
  if (je.current !== dn) throw Error(T(168));
  (q(je, t), q(Re, n));
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, tg(e) || "Unknown", o));
  return re({}, n, r);
}
function Fi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (An = je.current),
    q(je, e),
    q(Re, Re.current),
    !0
  );
}
function dc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  (n
    ? ((e = Df(e, t, An)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(Re),
      J(je),
      q(je, e))
    : J(Re),
    q(Re, n));
}
var Pt = null,
  os = !1,
  Us = !1;
function If(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function yv(e) {
  ((os = !0), If(e));
}
function yn() {
  if (!Us && Pt !== null) {
    Us = !0;
    var e = 0,
      t = G;
    try {
      var n = Pt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Pt = null), (os = !1));
    } catch (o) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), cf(ja, yn), o);
    } finally {
      ((G = t), (Us = !1));
    }
  }
  return null;
}
var Yn = [],
  Xn = 0,
  Oi = null,
  _i = 0,
  Ve = [],
  Qe = 0,
  zn = null,
  Tt = 1,
  Rt = "";
function wn(e, t) {
  ((Yn[Xn++] = _i), (Yn[Xn++] = Oi), (Oi = e), (_i = t));
}
function Hf(e, t, n) {
  ((Ve[Qe++] = Tt), (Ve[Qe++] = Rt), (Ve[Qe++] = zn), (zn = e));
  var r = Tt;
  e = Rt;
  var o = 32 - it(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - it(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    ((i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Tt = (1 << (32 - it(t) + o)) | (n << o) | r),
      (Rt = i + e));
  } else ((Tt = (1 << i) | (n << o) | r), (Rt = e));
}
function Ra(e) {
  e.return !== null && (wn(e, 1), Hf(e, 1, 0));
}
function Aa(e) {
  for (; e === Oi; )
    ((Oi = Yn[--Xn]), (Yn[Xn] = null), (_i = Yn[--Xn]), (Yn[Xn] = null));
  for (; e === zn; )
    ((zn = Ve[--Qe]),
      (Ve[Qe] = null),
      (Rt = Ve[--Qe]),
      (Ve[Qe] = null),
      (Tt = Ve[--Qe]),
      (Ve[Qe] = null));
}
var De = null,
  Me = null,
  ee = !1,
  ot = null;
function $f(e, t) {
  var n = Ge(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function fc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (De = e), (Me = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (De = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zn !== null ? { id: Tt, overflow: Rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (De = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ol(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _l(e) {
  if (ee) {
    var t = Me;
    if (t) {
      var n = t;
      if (!fc(e, t)) {
        if (Ol(e)) throw Error(T(418));
        t = on(n.nextSibling);
        var r = De;
        t && fc(e, t)
          ? $f(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (De = e));
      }
    } else {
      if (Ol(e)) throw Error(T(418));
      ((e.flags = (e.flags & -4097) | 2), (ee = !1), (De = e));
    }
  }
}
function pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function Jo(e) {
  if (e !== De) return !1;
  if (!ee) return (pc(e), (ee = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (Ol(e)) throw (Bf(), Error(T(418)));
    for (; t; ) ($f(e, t), (t = on(t.nextSibling)));
  }
  if ((pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = De ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function Bf() {
  for (var e = Me; e; ) e = on(e.nextSibling);
}
function wr() {
  ((Me = De = null), (ee = !1));
}
function za(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var xv = Dt.ReactCurrentBatchConfig;
function Br(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Zo(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function hc(e) {
  var t = e._init;
  return t(e._payload);
}
function Wf(e) {
  function t(m, f) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [f]), (m.flags |= 16)) : g.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) (t(m, f), (f = f.sibling));
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      (f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling));
    return m;
  }
  function o(m, f) {
    return ((m = un(m, f)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, f, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((m.flags |= 2), f) : g)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function l(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, f, g, k) {
    return f === null || f.tag !== 6
      ? ((f = Xs(g, m.mode, k)), (f.return = m), f)
      : ((f = o(f, g)), (f.return = m), f);
  }
  function u(m, f, g, k) {
    var b = g.type;
    return b === Un
      ? d(m, f, g.props.children, k, g.key)
      : f !== null &&
          (f.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === Ut &&
              hc(b) === f.type))
        ? ((k = o(f, g.props)), (k.ref = Br(m, f, g)), (k.return = m), k)
        : ((k = xi(g.type, g.key, g.props, null, m.mode, k)),
          (k.ref = Br(m, f, g)),
          (k.return = m),
          k);
  }
  function c(m, f, g, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = Js(g, m.mode, k)), (f.return = m), f)
      : ((f = o(f, g.children || [])), (f.return = m), f);
  }
  function d(m, f, g, k, b) {
    return f === null || f.tag !== 7
      ? ((f = Rn(g, m.mode, k, b)), (f.return = m), f)
      : ((f = o(f, g)), (f.return = m), f);
  }
  function p(m, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = Xs("" + f, m.mode, g)), (f.return = m), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Bo:
          return (
            (g = xi(f.type, f.key, f.props, null, m.mode, g)),
            (g.ref = Br(m, null, f)),
            (g.return = m),
            g
          );
        case Wn:
          return ((f = Js(f, m.mode, g)), (f.return = m), f);
        case Ut:
          var k = f._init;
          return p(m, k(f._payload), g);
      }
      if (Gr(f) || Mr(f))
        return ((f = Rn(f, m.mode, g, null)), (f.return = m), f);
      Zo(m, f);
    }
    return null;
  }
  function h(m, f, g, k) {
    var b = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : a(m, f, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Bo:
          return g.key === b ? u(m, f, g, k) : null;
        case Wn:
          return g.key === b ? c(m, f, g, k) : null;
        case Ut:
          return ((b = g._init), h(m, f, b(g._payload), k));
      }
      if (Gr(g) || Mr(g)) return b !== null ? null : d(m, f, g, k, null);
      Zo(m, g);
    }
    return null;
  }
  function y(m, f, g, k, b) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return ((m = m.get(g) || null), a(f, m, "" + k, b));
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Bo:
          return (
            (m = m.get(k.key === null ? g : k.key) || null),
            u(f, m, k, b)
          );
        case Wn:
          return (
            (m = m.get(k.key === null ? g : k.key) || null),
            c(f, m, k, b)
          );
        case Ut:
          var E = k._init;
          return y(m, f, g, E(k._payload), b);
      }
      if (Gr(k) || Mr(k)) return ((m = m.get(g) || null), d(f, m, k, b, null));
      Zo(f, k);
    }
    return null;
  }
  function w(m, f, g, k) {
    for (
      var b = null, E = null, S = f, P = (f = 0), O = null;
      S !== null && P < g.length;
      P++
    ) {
      S.index > P ? ((O = S), (S = null)) : (O = S.sibling);
      var z = h(m, S, g[P], k);
      if (z === null) {
        S === null && (S = O);
        break;
      }
      (e && S && z.alternate === null && t(m, S),
        (f = i(z, f, P)),
        E === null ? (b = z) : (E.sibling = z),
        (E = z),
        (S = O));
    }
    if (P === g.length) return (n(m, S), ee && wn(m, P), b);
    if (S === null) {
      for (; P < g.length; P++)
        ((S = p(m, g[P], k)),
          S !== null &&
            ((f = i(S, f, P)),
            E === null ? (b = S) : (E.sibling = S),
            (E = S)));
      return (ee && wn(m, P), b);
    }
    for (S = r(m, S); P < g.length; P++)
      ((O = y(S, m, P, g[P], k)),
        O !== null &&
          (e && O.alternate !== null && S.delete(O.key === null ? P : O.key),
          (f = i(O, f, P)),
          E === null ? (b = O) : (E.sibling = O),
          (E = O)));
    return (
      e &&
        S.forEach(function (I) {
          return t(m, I);
        }),
      ee && wn(m, P),
      b
    );
  }
  function v(m, f, g, k) {
    var b = Mr(g);
    if (typeof b != "function") throw Error(T(150));
    if (((g = b.call(g)), g == null)) throw Error(T(151));
    for (
      var E = (b = null), S = f, P = (f = 0), O = null, z = g.next();
      S !== null && !z.done;
      P++, z = g.next()
    ) {
      S.index > P ? ((O = S), (S = null)) : (O = S.sibling);
      var I = h(m, S, z.value, k);
      if (I === null) {
        S === null && (S = O);
        break;
      }
      (e && S && I.alternate === null && t(m, S),
        (f = i(I, f, P)),
        E === null ? (b = I) : (E.sibling = I),
        (E = I),
        (S = O));
    }
    if (z.done) return (n(m, S), ee && wn(m, P), b);
    if (S === null) {
      for (; !z.done; P++, z = g.next())
        ((z = p(m, z.value, k)),
          z !== null &&
            ((f = i(z, f, P)),
            E === null ? (b = z) : (E.sibling = z),
            (E = z)));
      return (ee && wn(m, P), b);
    }
    for (S = r(m, S); !z.done; P++, z = g.next())
      ((z = y(S, m, P, z.value, k)),
        z !== null &&
          (e && z.alternate !== null && S.delete(z.key === null ? P : z.key),
          (f = i(z, f, P)),
          E === null ? (b = z) : (E.sibling = z),
          (E = z)));
    return (
      e &&
        S.forEach(function (_) {
          return t(m, _);
        }),
      ee && wn(m, P),
      b
    );
  }
  function j(m, f, g, k) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Un &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Bo:
          e: {
            for (var b = g.key, E = f; E !== null; ) {
              if (E.key === b) {
                if (((b = g.type), b === Un)) {
                  if (E.tag === 7) {
                    (n(m, E.sibling),
                      (f = o(E, g.props.children)),
                      (f.return = m),
                      (m = f));
                    break e;
                  }
                } else if (
                  E.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Ut &&
                    hc(b) === E.type)
                ) {
                  (n(m, E.sibling),
                    (f = o(E, g.props)),
                    (f.ref = Br(m, E, g)),
                    (f.return = m),
                    (m = f));
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            g.type === Un
              ? ((f = Rn(g.props.children, m.mode, k, g.key)),
                (f.return = m),
                (m = f))
              : ((k = xi(g.type, g.key, g.props, null, m.mode, k)),
                (k.ref = Br(m, f, g)),
                (k.return = m),
                (m = k));
          }
          return l(m);
        case Wn:
          e: {
            for (E = g.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  (n(m, f.sibling),
                    (f = o(f, g.children || [])),
                    (f.return = m),
                    (m = f));
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            ((f = Js(g, m.mode, k)), (f.return = m), (m = f));
          }
          return l(m);
        case Ut:
          return ((E = g._init), j(m, f, E(g._payload), k));
      }
      if (Gr(g)) return w(m, f, g, k);
      if (Mr(g)) return v(m, f, g, k);
      Zo(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = o(f, g)), (f.return = m), (m = f))
          : (n(m, f), (f = Xs(g, m.mode, k)), (f.return = m), (m = f)),
        l(m))
      : n(m, f);
  }
  return j;
}
var jr = Wf(!0),
  Uf = Wf(!1),
  Li = vn(null),
  Mi = null,
  Jn = null,
  Fa = null;
function Oa() {
  Fa = Jn = Mi = null;
}
function _a(e) {
  var t = Li.current;
  (J(Li), (e._currentValue = t));
}
function Ll(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ir(e, t) {
  ((Mi = e),
    (Fa = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null)));
}
function Ye(e) {
  var t = e._currentValue;
  if (Fa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (Mi === null) throw Error(T(308));
      ((Jn = e), (Mi.dependencies = { lanes: 0, firstContext: e }));
    } else Jn = Jn.next = e;
  return t;
}
var bn = null;
function La(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
function Vf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), La(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Ma(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qf(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function At(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), La(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function pi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ka(e, n));
  }
}
function mc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = l) : (i = i.next = l), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Di(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), l === null ? (i = c) : (l.next = c), (l = u));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== l &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var p = o.baseState;
    ((l = 0), (d = c = u = null), (a = i));
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((h = t), (y = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                p = w.call(y, p, h);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (h = typeof w == "function" ? w.call(y, p, h) : w),
                h == null)
              )
                break e;
              p = re({}, p, h);
              break e;
            case 2:
              Vt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        ((y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (u = p)) : (d = d.next = y),
          (l |= h));
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (u = p),
      (o.baseState = u),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((l |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((On |= l), (e.lanes = l), (e.memoizedState = p));
  }
}
function gc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var _o = {},
  yt = vn(_o),
  xo = vn(_o),
  wo = vn(_o);
function En(e) {
  if (e === _o) throw Error(T(174));
  return e;
}
function Da(e, t) {
  switch ((q(wo, t), q(xo, e), q(yt, _o), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gl(t, e)));
  }
  (J(yt), q(yt, t));
}
function kr() {
  (J(yt), J(xo), J(wo));
}
function Kf(e) {
  En(wo.current);
  var t = En(yt.current),
    n = gl(t, e.type);
  t !== n && (q(xo, e), q(yt, n));
}
function Ia(e) {
  xo.current === e && (J(yt), J(xo));
}
var te = vn(0);
function Ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Vs = [];
function Ha() {
  for (var e = 0; e < Vs.length; e++)
    Vs[e]._workInProgressVersionPrimary = null;
  Vs.length = 0;
}
var hi = Dt.ReactCurrentDispatcher,
  Qs = Dt.ReactCurrentBatchConfig,
  Fn = 0,
  ne = null,
  ae = null,
  de = null,
  Hi = !1,
  no = !1,
  jo = 0,
  wv = 0;
function ve() {
  throw Error(T(321));
}
function $a(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Ba(e, t, n, r, o, i) {
  if (
    ((Fn = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (hi.current = e === null || e.memoizedState === null ? Ev : Sv),
    (e = n(r, o)),
    no)
  ) {
    i = 0;
    do {
      if (((no = !1), (jo = 0), 25 <= i)) throw Error(T(301));
      ((i += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (hi.current = Nv),
        (e = n(r, o)));
    } while (no);
  }
  if (
    ((hi.current = $i),
    (t = ae !== null && ae.next !== null),
    (Fn = 0),
    (de = ae = ne = null),
    (Hi = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Wa() {
  var e = jo !== 0;
  return ((jo = 0), e);
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (de === null ? (ne.memoizedState = de = e) : (de = de.next = e), de);
}
function Xe() {
  if (ae === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? ne.memoizedState : de.next;
  if (t !== null) ((de = t), (ae = e));
  else {
    if (e === null) throw Error(T(310));
    ((ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (ne.memoizedState = de = e) : (de = de.next = e));
  }
  return de;
}
function ko(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ks(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      ((o.next = i.next), (i.next = l));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var a = (l = null),
      u = null,
      c = i;
    do {
      var d = c.lane;
      if ((Fn & d) === d)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = p), (l = r)) : (u = u.next = p),
          (ne.lanes |= d),
          (On |= d));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (u === null ? (l = r) : (u.next = a),
      lt(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (ne.lanes |= i), (On |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Gs(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do ((i = e(i, l.action)), (l = l.next));
    while (l !== o);
    (lt(i, t.memoizedState) || (Te = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Gf() {}
function qf(e, t) {
  var n = ne,
    r = Xe(),
    o = t(),
    i = !lt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Te = !0)),
    (r = r.queue),
    Ua(Jf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      bo(9, Xf.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(T(349));
    Fn & 30 || Yf(n, t, o);
  }
  return o;
}
function Yf(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Xf(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Zf(t) && ep(e));
}
function Jf(e, t, n) {
  return n(function () {
    Zf(t) && ep(e);
  });
}
function Zf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = Ot(e, 1);
  t !== null && st(t, e, 1, -1);
}
function vc(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ko,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bv.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function bo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tp() {
  return Xe().memoizedState;
}
function mi(e, t, n, r) {
  var o = ft();
  ((ne.flags |= e),
    (o.memoizedState = bo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function is(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (((i = l.destroy), r !== null && $a(r, l.deps))) {
      o.memoizedState = bo(t, n, i, r);
      return;
    }
  }
  ((ne.flags |= e), (o.memoizedState = bo(1 | t, n, i, r)));
}
function yc(e, t) {
  return mi(8390656, 8, e, t);
}
function Ua(e, t) {
  return is(2048, 8, e, t);
}
function np(e, t) {
  return is(4, 2, e, t);
}
function rp(e, t) {
  return is(4, 4, e, t);
}
function op(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ip(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    is(4, 4, op.bind(null, t, e), n)
  );
}
function Va() {}
function sp(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $a(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lp(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $a(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ap(e, t, n) {
  return Fn & 21
    ? (lt(n, t) || ((n = pf()), (ne.lanes |= n), (On |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function jv(e, t) {
  var n = G;
  ((G = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Qs.transition;
  Qs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((G = n), (Qs.transition = r));
  }
}
function up() {
  return Xe().memoizedState;
}
function kv(e, t, n) {
  var r = an(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cp(e))
  )
    dp(t, n);
  else if (((n = Vf(e, t, n, r)), n !== null)) {
    var o = Se();
    (st(n, e, r, o), fp(n, t, r));
  }
}
function bv(e, t, n) {
  var r = an(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) dp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), lt(a, l))) {
          var u = t.interleaved;
          (u === null
            ? ((o.next = o), La(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Vf(e, t, o, r)),
      n !== null && ((o = Se()), st(n, e, r, o), fp(n, t, r)));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function dp(e, t) {
  no = Hi = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ka(e, n));
  }
}
var $i = {
    readContext: Ye,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Ev = {
    readContext: Ye,
    useCallback: function (e, t) {
      return ((ft().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ye,
    useEffect: yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        mi(4194308, 4, op.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return mi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return mi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = kv.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: vc,
    useDebugValue: Va,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = vc(!1),
        t = e[0];
      return ((e = jv.bind(null, e[1])), (ft().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        o = ft();
      if (ee) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(T(349));
        Fn & 30 || Yf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        yc(Jf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        bo(9, Xf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = fe.identifierPrefix;
      if (ee) {
        var n = Rt,
          r = Tt;
        ((n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = jo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = wv++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sv = {
    readContext: Ye,
    useCallback: sp,
    useContext: Ye,
    useEffect: Ua,
    useImperativeHandle: ip,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: lp,
    useReducer: Ks,
    useRef: tp,
    useState: function () {
      return Ks(ko);
    },
    useDebugValue: Va,
    useDeferredValue: function (e) {
      var t = Xe();
      return ap(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ks(ko)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Gf,
    useSyncExternalStore: qf,
    useId: up,
    unstable_isNewReconciler: !1,
  },
  Nv = {
    readContext: Ye,
    useCallback: sp,
    useContext: Ye,
    useEffect: Ua,
    useImperativeHandle: ip,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: lp,
    useReducer: Gs,
    useRef: tp,
    useState: function () {
      return Gs(ko);
    },
    useDebugValue: Va,
    useDeferredValue: function (e) {
      var t = Xe();
      return ae === null ? (t.memoizedState = e) : ap(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Gs(ko)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Gf,
    useSyncExternalStore: qf,
    useId: up,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    ((t = re({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ml(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ss = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = an(e),
      i = At(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = sn(e, i, o)),
      t !== null && (st(t, e, o, r), pi(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = an(e),
      i = At(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = sn(e, i, o)),
      t !== null && (st(t, e, o, r), pi(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = an(e),
      o = At(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = sn(e, o, r)),
      t !== null && (st(t, e, r, n), pi(t, e, r)));
  },
};
function xc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !mo(n, r) || !mo(o, i)
        : !0
  );
}
function pp(e, t, n) {
  var r = !1,
    o = dn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ye(i))
      : ((o = Ae(t) ? An : je.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? xr(e, o) : dn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ss),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function wc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ss.enqueueReplaceState(t, t.state, null));
}
function Dl(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ma(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = Ye(i))
    : ((i = Ae(t) ? An : je.current), (o.context = xr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ml(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ss.enqueueReplaceState(o, o.state, null),
      Di(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function br(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += eg(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function qs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Il(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Cv = typeof WeakMap == "function" ? WeakMap : Map;
function hp(e, t, n) {
  ((n = At(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Wi || ((Wi = !0), (ql = r)), Il(e, t));
    }),
    n
  );
}
function mp(e, t, n) {
  ((n = At(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Il(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Il(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this)));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function jc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cv();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = $v.bind(null, e, t, n)), t.then(e, e));
}
function kc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = At(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Pv = Dt.ReactCurrentOwner,
  Te = !1;
function be(e, t, n, r) {
  t.child = e === null ? Uf(t, null, n, r) : jr(t, e.child, n, r);
}
function Ec(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ir(t, o),
    (r = Ba(e, t, n, r, i, o)),
    (n = Wa()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (ee && n && Ra(t), (t.flags |= 1), be(e, t, r, o), t.child)
  );
}
function Sc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Za(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gp(e, t, i, r, o))
      : ((e = xi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : mo), n(l, r) && e.ref === t.ref)
    )
      return _t(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = un(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (mo(i, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Te = !0);
      else return ((t.lanes = e.lanes), _t(e, t, o));
  }
  return Hl(e, t, n, r, o);
}
function vp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(er, _e),
        (_e |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(er, _e),
          (_e |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        q(er, _e),
        (_e |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(er, _e),
      (_e |= r));
  return (be(e, t, o, n), t.child);
}
function yp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hl(e, t, n, r, o) {
  var i = Ae(n) ? An : je.current;
  return (
    (i = xr(t, i)),
    ir(t, o),
    (n = Ba(e, t, n, r, i, o)),
    (r = Wa()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (ee && r && Ra(t), (t.flags |= 1), be(e, t, n, o), t.child)
  );
}
function Nc(e, t, n, r, o) {
  if (Ae(n)) {
    var i = !0;
    Fi(t);
  } else i = !1;
  if ((ir(t, o), t.stateNode === null))
    (gi(e, t), pp(t, n, r), Dl(t, n, r, o), (r = !0));
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ye(c))
      : ((c = Ae(n) ? An : je.current), (c = xr(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && wc(t, l, r, c)),
      (Vt = !1));
    var h = t.memoizedState;
    ((l.state = h),
      Di(t, r, l, o),
      (u = t.memoizedState),
      a !== r || h !== u || Re.current || Vt
        ? (typeof d == "function" && (Ml(t, n, d, r), (u = t.memoizedState)),
          (a = Vt || xc(t, n, a, r, h, u, c))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = c),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((l = t.stateNode),
      Qf(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : et(t.type, a)),
      (l.props = c),
      (p = t.pendingProps),
      (h = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ye(u))
        : ((u = Ae(n) ? An : je.current), (u = xr(t, u))));
    var y = n.getDerivedStateFromProps;
    ((d =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== p || h !== u) && wc(t, l, r, u)),
      (Vt = !1),
      (h = t.memoizedState),
      (l.state = h),
      Di(t, r, l, o));
    var w = t.memoizedState;
    a !== p || h !== w || Re.current || Vt
      ? (typeof y == "function" && (Ml(t, n, y, r), (w = t.memoizedState)),
        (c = Vt || xc(t, n, c, r, h, w, u) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = u),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $l(e, t, n, r, i, o);
}
function $l(e, t, n, r, o, i) {
  yp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return (o && dc(t, n, !1), _t(e, t, i));
  ((r = t.stateNode), (Pv.current = t));
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = jr(t, e.child, null, i)), (t.child = jr(t, null, a, i)))
      : be(e, t, a, i),
    (t.memoizedState = r.state),
    o && dc(t, n, !0),
    t.child
  );
}
function xp(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? cc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cc(e, t.context, !1),
    Da(e, t.containerInfo));
}
function Cc(e, t, n, r, o) {
  return (wr(), za(o), (t.flags |= 256), be(e, t, n, r), t.child);
}
var Bl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wp(e, t, n) {
  var r = t.pendingProps,
    o = te.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    q(te, o & 1),
    e === null)
  )
    return (
      _l(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = us(l, r, 0, null)),
              (e = Rn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Wl(n)),
              (t.memoizedState = Bl),
              e)
            : Qa(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Tv(e, t, l, r, a, o, n);
  if (i) {
    ((i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = un(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = un(a, i)) : ((i = Rn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Wl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = un(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qa(e, t) {
  return (
    (t = us({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ei(e, t, n, r) {
  return (
    r !== null && za(r),
    jr(t, e.child, null, n),
    (e = Qa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Tv(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = qs(Error(T(422)))), ei(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = us({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Rn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && jr(t, e.child, null, l),
          (t.child.memoizedState = Wl(l)),
          (t.memoizedState = Bl),
          i);
  if (!(t.mode & 1)) return ei(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(T(419))),
      (r = qs(i, r, void 0)),
      ei(e, t, l, r)
    );
  }
  if (((a = (l & e.childLanes) !== 0), Te || a)) {
    if (((r = fe), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ot(e, o), st(r, e, o, -1)));
    }
    return (Ja(), (r = qs(Error(T(421)))), ei(e, t, l, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Me = on(o.nextSibling)),
      (De = t),
      (ee = !0),
      (ot = null),
      e !== null &&
        ((Ve[Qe++] = Tt),
        (Ve[Qe++] = Rt),
        (Ve[Qe++] = zn),
        (Tt = e.id),
        (Rt = e.overflow),
        (zn = t)),
      (t = Qa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ll(e.return, t, n));
}
function Ys(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function jp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((be(e, t, r.children, n), (r = te.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pc(e, n, t);
        else if (e.tag === 19) Pc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((q(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Ii(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ys(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ii(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Ys(t, !0, n, null, i);
        break;
      case "together":
        Ys(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = un(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Rv(e, t, n) {
  switch (t.tag) {
    case 3:
      (xp(t), wr());
      break;
    case 5:
      Kf(t);
      break;
    case 1:
      Ae(t.type) && Fi(t);
      break;
    case 4:
      Da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (q(Li, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? wp(e, t, n)
            : (q(te, te.current & 1),
              (e = _t(e, t, n)),
              e !== null ? e.sibling : null);
      q(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return jp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        q(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), vp(e, t, n));
  }
  return _t(e, t, n);
}
var kp, Ul, bp, Ep;
kp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ul = function () {};
bp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), En(yt.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = fl(e, o)), (r = fl(e, r)), (i = []));
        break;
      case "select":
        ((o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = ml(e, o)), (r = ml(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ai);
    }
    vl(n, r);
    var l;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (lo.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else (n || (i || (i = []), i.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (i = i || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (lo.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && X("scroll", e),
                    i || a === u || (i = []))
                  : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ep = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Av(e, t, n) {
  var r = t.pendingProps;
  switch ((Aa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ye(t), null);
    case 1:
      return (Ae(t.type) && zi(), ye(t), null);
    case 3:
      return (
        (r = t.stateNode),
        kr(),
        J(Re),
        J(je),
        Ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Jo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (Jl(ot), (ot = null)))),
        Ul(e, t),
        ye(t),
        null
      );
    case 5:
      Ia(t);
      var o = En(wo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (bp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return (ye(t), null);
        }
        if (((e = En(yt.current)), Jo(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[yo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (X("cancel", r), X("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yr.length; o++) X(Yr[o], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (X("error", r), X("load", r));
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              (Mu(r, i), X("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                X("invalid", r));
              break;
            case "textarea":
              (Iu(r, i), X("invalid", r));
          }
          (vl(n, i), (o = null));
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xo(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xo(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : lo.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              (Wo(r), Du(r, i, !0));
              break;
            case "textarea":
              (Wo(r), Hu(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ai);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[gt] = t),
            (e[yo] = r),
            kp(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((l = yl(n, r)), n)) {
              case "dialog":
                (X("cancel", e), X("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (X("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yr.length; o++) X(Yr[o], e);
                o = r;
                break;
              case "source":
                (X("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (X("error", e), X("load", e), (o = r));
                break;
              case "details":
                (X("toggle", e), (o = r));
                break;
              case "input":
                (Mu(e, r), (o = fl(e, r)), X("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  X("invalid", e));
                break;
              case "textarea":
                (Iu(e, r), (o = ml(e, r)), X("invalid", e));
                break;
              default:
                o = r;
            }
            (vl(n, o), (a = o));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? ef(e, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Jd(e, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && ao(e, u)
                        : typeof u == "number" && ao(e, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (lo.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && X("scroll", e)
                          : u != null && ga(e, i, u, l));
              }
            switch (n) {
              case "input":
                (Wo(e), Du(e, r, !1));
                break;
              case "textarea":
                (Wo(e), Hu(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? tr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ai);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ye(t), null);
    case 6:
      if (e && t.stateNode != null) Ep(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = En(wo.current)), En(yt.current), Jo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = De), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r));
      }
      return (ye(t), null);
    case 13:
      if (
        (J(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Me !== null && t.mode & 1 && !(t.flags & 128))
          (Bf(), wr(), (t.flags |= 98560), (i = !1));
        else if (((i = Jo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[gt] = t;
          } else
            (wr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ye(t), (i = !1));
        } else (ot !== null && (Jl(ot), (ot = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ce === 0 && (ce = 3) : Ja())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        kr(),
        Ul(e, t),
        e === null && go(t.stateNode.containerInfo),
        ye(t),
        null
      );
    case 10:
      return (_a(t.type._context), ye(t), null);
    case 17:
      return (Ae(t.type) && zi(), ye(t), null);
    case 19:
      if ((J(te), (i = t.memoizedState), i === null)) return (ye(t), null);
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Wr(i, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ii(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Wr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (q(te, (te.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > Er &&
            ((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ii(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !ee)
            )
              return (ye(t), null);
          } else
            2 * se() - i.renderingStartTime > Er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = te.current),
          q(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        Xa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function zv(e, t) {
  switch ((Aa(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && zi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kr(),
        J(Re),
        J(je),
        Ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ia(t), null);
    case 13:
      if ((J(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        wr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (J(te), null);
    case 4:
      return (kr(), null);
    case 10:
      return (_a(t.type._context), null);
    case 22:
    case 23:
      return (Xa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var ti = !1,
  we = !1,
  Fv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Vl(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Tc = !1;
function Ov(e, t) {
  if (((Pl = Pi), (e = Tf()), Ta(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (o !== 0 && p.nodeType !== 3) || (a = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              ((h = p), (p = y));
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++c === o && (a = l),
                h === i && ++d === r && (u = l),
                (y = p.nextSibling) !== null)
              )
                break;
              ((p = h), (h = p.parentNode));
            }
            p = y;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Tl = { focusedElem: e, selectionRange: n }, Pi = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (A = e));
    else
      for (; A !== null; ) {
        t = A;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    j = w.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : et(t.type, v),
                      j,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (k) {
          ie(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (A = e));
          break;
        }
        A = t.return;
      }
  return ((w = Tc), (Tc = !1), w);
}
function ro(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && Vl(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function ls(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ql(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Sp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Sp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[yo], delete t[zl], delete t[gv], delete t[vv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Np(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Np(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Kl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ai)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kl(e, t, n), e = e.sibling; e !== null; )
      (Kl(e, t, n), (e = e.sibling));
}
function Gl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gl(e, t, n), e = e.sibling; e !== null; )
      (Gl(e, t, n), (e = e.sibling));
}
var pe = null,
  rt = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) (Cp(e, t, n), (n = n.sibling));
}
function Cp(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(Zi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Zn(n, t);
    case 6:
      var r = pe,
        o = rt;
      ((pe = null),
        It(e, t, n),
        (pe = r),
        (rt = o),
        pe !== null &&
          (rt
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode)));
      break;
    case 18:
      pe !== null &&
        (rt
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ws(e.parentNode, n)
              : e.nodeType === 1 && Ws(e, n),
            po(e))
          : Ws(pe, n.stateNode));
      break;
    case 4:
      ((r = pe),
        (o = rt),
        (pe = n.stateNode.containerInfo),
        (rt = !0),
        It(e, t, n),
        (pe = r),
        (rt = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          ((i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Vl(n, t, l),
            (o = o.next));
        } while (o !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ie(n, t, a);
        }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), It(e, t, n), (we = r))
        : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function Ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Fv()),
      t.forEach(function (r) {
        var o = Wv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((pe = a.stateNode), (rt = !1));
              break e;
            case 3:
              ((pe = a.stateNode.containerInfo), (rt = !0));
              break e;
            case 4:
              ((pe = a.stateNode.containerInfo), (rt = !0));
              break e;
          }
          a = a.return;
        }
        if (pe === null) throw Error(T(160));
        (Cp(i, l, o), (pe = null), (rt = !1));
        var u = o.alternate;
        (u !== null && (u.return = null), (o.return = null));
      } catch (c) {
        ie(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Pp(t, e), (t = t.sibling));
}
function Pp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), dt(e), r & 4)) {
        try {
          (ro(3, e, e.return), ls(3, e));
        } catch (v) {
          ie(e, e.return, v);
        }
        try {
          ro(5, e, e.return);
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 1:
      (Ze(t, e), dt(e), r & 512 && n !== null && Zn(n, n.return));
      break;
    case 5:
      if (
        (Ze(t, e),
        dt(e),
        r & 512 && n !== null && Zn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ao(o, "");
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && qd(o, i),
              yl(a, l));
            var c = yl(a, i);
            for (l = 0; l < u.length; l += 2) {
              var d = u[l],
                p = u[l + 1];
              d === "style"
                ? ef(o, p)
                : d === "dangerouslySetInnerHTML"
                  ? Jd(o, p)
                  : d === "children"
                    ? ao(o, p)
                    : ga(o, d, p, c);
            }
            switch (a) {
              case "input":
                pl(o, i);
                break;
              case "textarea":
                Yd(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? tr(o, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? tr(o, !!i.multiple, i.defaultValue, !0)
                      : tr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[yo] = i;
          } catch (v) {
            ie(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          po(t.containerInfo);
        } catch (v) {
          ie(e, e.return, v);
        }
      break;
    case 4:
      (Ze(t, e), dt(e));
      break;
    case 13:
      (Ze(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (qa = se())),
        r & 4 && Ac(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (c = we) || d), Ze(t, e), (we = c)) : Ze(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (A = e, d = e.child; d !== null; ) {
            for (p = A = d; A !== null; ) {
              switch (((h = A), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ro(4, h, h.return);
                  break;
                case 1:
                  Zn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (v) {
                      ie(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Zn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Fc(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (A = y)) : Fc(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                ((o = p.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Zd("display", l))));
              } catch (v) {
                ie(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (v) {
                ie(e, e.return, v);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            (d === p && (d = null), (p = p.return));
          }
          (d === p && (d = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (Ze(t, e), dt(e), r & 4 && Ac(e));
      break;
    case 21:
      break;
    default:
      (Ze(t, e), dt(e));
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Np(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ao(o, ""), (r.flags &= -33));
          var i = Rc(e);
          Gl(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Rc(e);
          Kl(e, a, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _v(e, t, n) {
  ((A = e), Tp(e));
}
function Tp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ti;
      if (!l) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || we;
        a = ti;
        var c = we;
        if (((ti = l), (we = u) && !c))
          for (A = o; A !== null; )
            ((l = A),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Oc(o)
                : u !== null
                  ? ((u.return = l), (A = u))
                  : Oc(o));
        for (; i !== null; ) ((A = i), Tp(i), (i = i.sibling));
        ((A = o), (ti = a), (we = c));
      }
      zc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : zc(e);
  }
}
function zc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || ls(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && gc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && po(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        we || (t.flags & 512 && Ql(t));
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function Fc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function Oc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ls(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, o, u);
            }
          }
          var i = t.return;
          try {
            Ql(t);
          } catch (u) {
            ie(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ql(t);
          } catch (u) {
            ie(t, l, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (A = a));
      break;
    }
    A = t.return;
  }
}
var Lv = Math.ceil,
  Bi = Dt.ReactCurrentDispatcher,
  Ka = Dt.ReactCurrentOwner,
  qe = Dt.ReactCurrentBatchConfig,
  U = 0,
  fe = null,
  le = null,
  he = 0,
  _e = 0,
  er = vn(0),
  ce = 0,
  Eo = null,
  On = 0,
  as = 0,
  Ga = 0,
  oo = null,
  Pe = null,
  qa = 0,
  Er = 1 / 0,
  Ct = null,
  Wi = !1,
  ql = null,
  ln = null,
  ni = !1,
  en = null,
  Ui = 0,
  io = 0,
  Yl = null,
  vi = -1,
  yi = 0;
function Se() {
  return U & 6 ? se() : vi !== -1 ? vi : (vi = se());
}
function an(e) {
  return e.mode & 1
    ? U & 2 && he !== 0
      ? he & -he
      : xv.transition !== null
        ? (yi === 0 && (yi = pf()), yi)
        : ((e = G),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wf(e.type))),
          e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < io) throw ((io = 0), (Yl = null), Error(T(185)));
  (zo(e, n, r),
    (!(U & 2) || e !== fe) &&
      (e === fe && (!(U & 2) && (as |= n), ce === 4 && Kt(e, he)),
      ze(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Er = se() + 500), os && yn())));
}
function ze(e, t) {
  var n = e.callbackNode;
  xg(e, t);
  var r = Ci(e, e === fe ? he : 0);
  if (r === 0)
    (n !== null && Wu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wu(n), t === 1))
      (e.tag === 0 ? yv(_c.bind(null, e)) : If(_c.bind(null, e)),
        hv(function () {
          !(U & 6) && yn();
        }),
        (n = null));
    else {
      switch (hf(r)) {
        case 1:
          n = ja;
          break;
        case 4:
          n = df;
          break;
        case 16:
          n = Ni;
          break;
        case 536870912:
          n = ff;
          break;
        default:
          n = Ni;
      }
      n = Mp(n, Rp.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Rp(e, t) {
  if (((vi = -1), (yi = 0), U & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = Ci(e, e === fe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vi(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = zp();
    (fe !== e || he !== t) && ((Ct = null), (Er = se() + 500), Tn(e, t));
    do
      try {
        Iv();
        break;
      } catch (a) {
        Ap(e, a);
      }
    while (!0);
    (Oa(),
      (Bi.current = i),
      (U = o),
      le !== null ? (t = 0) : ((fe = null), (he = 0), (t = ce)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = bl(e)), o !== 0 && ((r = o), (t = Xl(e, o)))), t === 1)
    )
      throw ((n = Eo), Tn(e, 0), Kt(e, r), ze(e, se()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Mv(o) &&
          ((t = Vi(e, r)),
          t === 2 && ((i = bl(e)), i !== 0 && ((r = i), (t = Xl(e, i)))),
          t === 1))
      )
        throw ((n = Eo), Tn(e, 0), Kt(e, r), ze(e, se()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          jn(e, Pe, Ct);
          break;
        case 3:
          if (
            (Kt(e, r), (r & 130023424) === r && ((t = qa + 500 - se()), 10 < t))
          ) {
            if (Ci(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Se(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Al(jn.bind(null, e, Pe, Ct), t);
            break;
          }
          jn(e, Pe, Ct);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - it(r);
            ((i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i));
          }
          if (
            ((r = o),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Lv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Al(jn.bind(null, e, Pe, Ct), r);
            break;
          }
          jn(e, Pe, Ct);
          break;
        case 5:
          jn(e, Pe, Ct);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return (ze(e, se()), e.callbackNode === n ? Rp.bind(null, e) : null);
}
function Xl(e, t) {
  var n = oo;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = Vi(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Jl(t)),
    e
  );
}
function Jl(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function Mv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!lt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~Ga,
      t &= ~as,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function _c(e) {
  if (U & 6) throw Error(T(327));
  sr();
  var t = Ci(e, 0);
  if (!(t & 1)) return (ze(e, se()), null);
  var n = Vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bl(e);
    r !== 0 && ((t = r), (n = Xl(e, r)));
  }
  if (n === 1) throw ((n = Eo), Tn(e, 0), Kt(e, t), ze(e, se()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jn(e, Pe, Ct),
    ze(e, se()),
    null
  );
}
function Ya(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    ((U = n), U === 0 && ((Er = se() + 500), os && yn()));
  }
}
function _n(e) {
  en !== null && en.tag === 0 && !(U & 6) && sr();
  var t = U;
  U |= 1;
  var n = qe.transition,
    r = G;
  try {
    if (((qe.transition = null), (G = 1), e)) return e();
  } finally {
    ((G = r), (qe.transition = n), (U = t), !(U & 6) && yn());
  }
}
function Xa() {
  ((_e = er.current), J(er));
}
function Tn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pv(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Aa(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && zi());
          break;
        case 3:
          (kr(), J(Re), J(je), Ha());
          break;
        case 5:
          Ia(r);
          break;
        case 4:
          kr();
          break;
        case 13:
          J(te);
          break;
        case 19:
          J(te);
          break;
        case 10:
          _a(r.type._context);
          break;
        case 22:
        case 23:
          Xa();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (le = e = un(e.current, null)),
    (he = _e = t),
    (ce = 0),
    (Eo = null),
    (Ga = as = On = 0),
    (Pe = oo = null),
    bn !== null)
  ) {
    for (t = 0; t < bn.length; t++)
      if (((n = bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          ((i.next = o), (r.next = l));
        }
        n.pending = r;
      }
    bn = null;
  }
  return e;
}
function Ap(e, t) {
  do {
    var n = le;
    try {
      if ((Oa(), (hi.current = $i), Hi)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        Hi = !1;
      }
      if (
        ((Fn = 0),
        (de = ae = ne = null),
        (no = !1),
        (jo = 0),
        (Ka.current = null),
        n === null || n.return === null)
      ) {
        ((ce = 1), (Eo = t), (le = null));
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = he),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = kc(l);
          if (y !== null) {
            ((y.flags &= -257),
              bc(y, l, a, i, t),
              y.mode & 1 && jc(i, c, t),
              (t = y),
              (u = c));
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              (v.add(u), (t.updateQueue = v));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (jc(i, c, t), Ja());
              break e;
            }
            u = Error(T(426));
          }
        } else if (ee && a.mode & 1) {
          var j = kc(l);
          if (j !== null) {
            (!(j.flags & 65536) && (j.flags |= 256),
              bc(j, l, a, i, t),
              za(br(u, a)));
            break e;
          }
        }
        ((i = u = br(u, a)),
          ce !== 4 && (ce = 2),
          oo === null ? (oo = [i]) : oo.push(i),
          (i = l));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = hp(i, u, t);
              mc(i, m);
              break e;
            case 1:
              a = u;
              var f = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (ln === null || !ln.has(g))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var k = mp(i, a, t);
                mc(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Op(n);
    } catch (b) {
      ((t = b), le === n && n !== null && (le = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function zp() {
  var e = Bi.current;
  return ((Bi.current = $i), e === null ? $i : e);
}
function Ja() {
  ((ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    fe === null || (!(On & 268435455) && !(as & 268435455)) || Kt(fe, he));
}
function Vi(e, t) {
  var n = U;
  U |= 2;
  var r = zp();
  (fe !== e || he !== t) && ((Ct = null), Tn(e, t));
  do
    try {
      Dv();
      break;
    } catch (o) {
      Ap(e, o);
    }
  while (!0);
  if ((Oa(), (U = n), (Bi.current = r), le !== null)) throw Error(T(261));
  return ((fe = null), (he = 0), ce);
}
function Dv() {
  for (; le !== null; ) Fp(le);
}
function Iv() {
  for (; le !== null && !cg(); ) Fp(le);
}
function Fp(e) {
  var t = Lp(e.alternate, e, _e);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Op(e) : (le = t),
    (Ka.current = null));
}
function Op(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = zv(n, t)), n !== null)) {
        ((n.flags &= 32767), (le = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ce = 6), (le = null));
        return;
      }
    } else if (((n = Av(n, t, _e)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function jn(e, t, n) {
  var r = G,
    o = qe.transition;
  try {
    ((qe.transition = null), (G = 1), Hv(e, t, n, r));
  } finally {
    ((qe.transition = o), (G = r));
  }
  return null;
}
function Hv(e, t, n, r) {
  do sr();
  while (en !== null);
  if (U & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (wg(e, i),
    e === fe && ((le = fe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ni ||
      ((ni = !0),
      Mp(Ni, function () {
        return (sr(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = qe.transition), (qe.transition = null));
    var l = G;
    G = 1;
    var a = U;
    ((U |= 4),
      (Ka.current = null),
      Ov(e, n),
      Pp(n, e),
      sv(Tl),
      (Pi = !!Pl),
      (Tl = Pl = null),
      (e.current = n),
      _v(n),
      dg(),
      (U = a),
      (G = l),
      (qe.transition = i));
  } else e.current = n;
  if (
    (ni && ((ni = !1), (en = e), (Ui = o)),
    (i = e.pendingLanes),
    i === 0 && (ln = null),
    hg(n.stateNode),
    ze(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Wi) throw ((Wi = !1), (e = ql), (ql = null), e);
  return (
    Ui & 1 && e.tag !== 0 && sr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Yl ? io++ : ((io = 0), (Yl = e))) : (io = 0),
    yn(),
    null
  );
}
function sr() {
  if (en !== null) {
    var e = hf(Ui),
      t = qe.transition,
      n = G;
    try {
      if (((qe.transition = null), (G = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (Ui = 0), U & 6)) throw Error(T(331));
        var o = U;
        for (U |= 4, A = e.current; A !== null; ) {
          var i = A,
            l = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (A = c; A !== null; ) {
                  var d = A;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) ((p.return = d), (A = p));
                  else
                    for (; A !== null; ) {
                      d = A;
                      var h = d.sibling,
                        y = d.return;
                      if ((Sp(d), d === c)) {
                        A = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = y), (A = h));
                        break;
                      }
                      A = y;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var j = v.sibling;
                    ((v.sibling = null), (v = j));
                  } while (v !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) ((l.return = i), (A = l));
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ro(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (A = m));
                break e;
              }
              A = i.return;
            }
        }
        var f = e.current;
        for (A = f; A !== null; ) {
          l = A;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) ((g.return = l), (A = g));
          else
            e: for (l = f; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ls(9, a);
                  }
                } catch (b) {
                  ie(a, a.return, b);
                }
              if (a === l) {
                A = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (A = k));
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((U = o), yn(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(Zi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((G = n), (qe.transition = t));
    }
  }
  return !1;
}
function Lc(e, t, n) {
  ((t = br(n, t)),
    (t = hp(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Se()),
    e !== null && (zo(e, 1, t), ze(e, t)));
}
function ie(e, t, n) {
  if (e.tag === 3) Lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          ((e = br(n, e)),
            (e = mp(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Se()),
            t !== null && (zo(t, 1, e), ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function $v(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (he & n) === n &&
      (ce === 4 || (ce === 3 && (he & 130023424) === he && 500 > se() - qa)
        ? Tn(e, 0)
        : (Ga |= n)),
    ze(e, t));
}
function _p(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Qo), (Qo <<= 1), !(Qo & 130023424) && (Qo = 4194304))
      : (t = 1));
  var n = Se();
  ((e = Ot(e, t)), e !== null && (zo(e, t, n), ze(e, n)));
}
function Bv(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), _p(e, n));
}
function Wv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  (r !== null && r.delete(t), _p(e, n));
}
var Lp;
Lp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Te = !1), Rv(e, t, n));
      Te = !!(e.flags & 131072);
    }
  else ((Te = !1), ee && t.flags & 1048576 && Hf(t, _i, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (gi(e, t), (e = t.pendingProps));
      var o = xr(t, je.current);
      (ir(t, n), (o = Ba(null, t, r, e, o, n)));
      var i = Wa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((i = !0), Fi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ma(t),
            (o.updater = ss),
            (t.stateNode = o),
            (o._reactInternals = t),
            Dl(t, r, e, n),
            (t = $l(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Ra(t), be(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Vv(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = Hl(null, t, r, e, n);
            break e;
          case 1:
            t = Nc(null, t, r, e, n);
            break e;
          case 11:
            t = Ec(null, t, r, e, n);
            break e;
          case 14:
            t = Sc(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Hl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Nc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((xp(t), e === null)) throw Error(T(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Qf(e, t),
          Di(t, r, null, n));
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = br(Error(T(423)), t)), (t = Cc(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = br(Error(T(424)), t)), (t = Cc(e, t, r, n, o)));
            break e;
          } else
            for (
              Me = on(t.stateNode.containerInfo.firstChild),
                De = t,
                ee = !0,
                ot = null,
                n = Uf(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((wr(), r === o)) {
            t = _t(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kf(t),
        e === null && _l(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Rl(r, o) ? (l = null) : i !== null && Rl(r, i) && (t.flags |= 32),
        yp(e, t),
        be(e, t, l, n),
        t.child
      );
    case 6:
      return (e === null && _l(t), null);
    case 13:
      return wp(e, t, n);
    case 4:
      return (
        Da(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jr(t, null, r, n)) : be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Ec(e, t, r, o, n)
      );
    case 7:
      return (be(e, t, t.pendingProps, n), t.child);
    case 8:
      return (be(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (be(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          q(Li, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (lt(i.value, l)) {
            if (i.children === o.children && !Re.current) {
              t = _t(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      ((u = At(-1, n & -n)), (u.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Ll(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(T(341));
                ((l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ll(l, n, t),
                  (l = i.sibling));
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    ((i.return = l.return), (l = i));
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        (be(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ir(t, n),
        (o = Ye(o)),
        (r = r(o)),
        (t.flags |= 1),
        be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        Sc(e, t, r, o, n)
      );
    case 15:
      return gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        gi(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), Fi(t)) : (e = !1),
        ir(t, n),
        pp(t, r, o),
        Dl(t, r, o, n),
        $l(null, t, r, !0, e, n)
      );
    case 19:
      return jp(e, t, n);
    case 22:
      return vp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Mp(e, t) {
  return cf(e, t);
}
function Uv(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ge(e, t, n, r) {
  return new Uv(e, t, n, r);
}
function Za(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Vv(e) {
  if (typeof e == "function") return Za(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ya)) return 11;
    if (e === xa) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function xi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Za(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Un:
        return Rn(n.children, o, i, t);
      case va:
        ((l = 8), (o |= 8));
        break;
      case al:
        return (
          (e = Ge(12, n, t, o | 2)),
          (e.elementType = al),
          (e.lanes = i),
          e
        );
      case ul:
        return ((e = Ge(13, n, t, o)), (e.elementType = ul), (e.lanes = i), e);
      case cl:
        return ((e = Ge(19, n, t, o)), (e.elementType = cl), (e.lanes = i), e);
      case Qd:
        return us(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ud:
              l = 10;
              break e;
            case Vd:
              l = 9;
              break e;
            case ya:
              l = 11;
              break e;
            case xa:
              l = 14;
              break e;
            case Ut:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(l, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Rn(e, t, n, r) {
  return ((e = Ge(7, e, r, t)), (e.lanes = n), e);
}
function us(e, t, n, r) {
  return (
    (e = Ge(22, e, r, t)),
    (e.elementType = Qd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xs(e, t, n) {
  return ((e = Ge(6, e, null, t)), (e.lanes = n), e);
}
function Js(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qv(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zs(0)),
    (this.expirationTimes = zs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function eu(e, t, n, r, o, i, l, a, u) {
  return (
    (e = new Qv(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ge(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ma(i),
    e
  );
}
function Kv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dp(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Hn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Df(e, n, t);
  }
  return t;
}
function Ip(e, t, n, r, o, i, l, a, u) {
  return (
    (e = eu(n, r, !0, e, o, i, l, a, u)),
    (e.context = Dp(null)),
    (n = e.current),
    (r = Se()),
    (o = an(n)),
    (i = At(r, o)),
    (i.callback = t ?? null),
    sn(n, i, o),
    (e.current.lanes = o),
    zo(e, o, r),
    ze(e, r),
    e
  );
}
function cs(e, t, n, r) {
  var o = t.current,
    i = Se(),
    l = an(o);
  return (
    (n = Dp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = At(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(o, t, l)),
    e !== null && (st(e, o, l, i), pi(e, o, l)),
    l
  );
}
function Qi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tu(e, t) {
  (Mc(e, t), (e = e.alternate) && Mc(e, t));
}
function Gv() {
  return null;
}
var Hp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function nu(e) {
  this._internalRoot = e;
}
ds.prototype.render = nu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  cs(e, t, null, null);
};
ds.prototype.unmount = nu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (_n(function () {
      cs(null, e, null, null);
    }),
      (t[Ft] = null));
  }
};
function ds(e) {
  this._internalRoot = e;
}
ds.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    (Qt.splice(n, 0, e), n === 0 && xf(e));
  }
};
function ru(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function fs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dc() {}
function qv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Qi(l);
        i.call(c);
      };
    }
    var l = Ip(t, r, e, 0, null, !1, !1, "", Dc);
    return (
      (e._reactRootContainer = l),
      (e[Ft] = l.current),
      go(e.nodeType === 8 ? e.parentNode : e),
      _n(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Qi(u);
      a.call(c);
    };
  }
  var u = eu(e, 0, !1, null, null, !1, !1, "", Dc);
  return (
    (e._reactRootContainer = u),
    (e[Ft] = u.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      cs(t, u, n, r);
    }),
    u
  );
}
function ps(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var u = Qi(l);
        a.call(u);
      };
    }
    cs(t, l, e, o);
  } else l = qv(n, t, e, o, r);
  return Qi(l);
}
mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qr(t.pendingLanes);
        n !== 0 &&
          (ka(t, n | 1), ze(t, se()), !(U & 6) && ((Er = se() + 500), yn()));
      }
      break;
    case 13:
      (_n(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var o = Se();
          st(r, e, 1, o);
        }
      }),
        tu(e, 1));
  }
};
ba = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = Se();
      st(t, e, 134217728, n);
    }
    tu(e, 134217728);
  }
};
gf = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = Se();
      st(n, e, t, r);
    }
    tu(e, t);
  }
};
vf = function () {
  return G;
};
yf = function (e, t) {
  var n = G;
  try {
    return ((G = e), t());
  } finally {
    G = n;
  }
};
wl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = rs(r);
            if (!o) throw Error(T(90));
            (Gd(r), pl(r, o));
          }
        }
      }
      break;
    case "textarea":
      Yd(e, n);
      break;
    case "select":
      ((t = n.value), t != null && tr(e, !!n.multiple, t, !1));
  }
};
rf = Ya;
of = _n;
var Yv = { usingClientEntryPoint: !1, Events: [Oo, Gn, rs, tf, nf, Ya] },
  Ur = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Xv = {
    bundleType: Ur.bundleType,
    version: Ur.version,
    rendererPackageName: Ur.rendererPackageName,
    rendererConfig: Ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = af(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ur.findFiberByHostInstance || Gv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ri.isDisabled && ri.supportsFiber)
    try {
      ((Zi = ri.inject(Xv)), (vt = ri));
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yv;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ru(t)) throw Error(T(200));
  return Kv(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!ru(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = Hp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = eu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ft] = t.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    new nu(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return ((e = af(t)), (e = e === null ? null : e.stateNode), e);
};
$e.flushSync = function (e) {
  return _n(e);
};
$e.hydrate = function (e, t, n) {
  if (!fs(t)) throw Error(T(200));
  return ps(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!ru(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Hp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Ip(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ft] = t.current),
    go(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new ds(t);
};
$e.render = function (e, t, n) {
  if (!fs(t)) throw Error(T(200));
  return ps(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!fs(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (_n(function () {
        ps(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ft] = null));
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = Ya;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!fs(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return ps(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function $p() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($p);
    } catch (e) {
      console.error(e);
    }
}
($p(), (Hd.exports = $e));
var Lo = Hd.exports;
const Jv = Pd(Lo);
var Bp,
  Ic = Lo;
((Bp = Ic.createRoot), Ic.hydrateRoot);
function Zv(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    o,
    i,
    l = [],
    a = "",
    u = e.split("/");
  for (u[0] || u.shift(); (o = u.shift()); )
    ((n = o[0]),
      n === "*"
        ? (l.push(n), (a += o[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : n === ":"
          ? ((r = o.indexOf("?", 1)),
            (i = o.indexOf(".", 1)),
            l.push(o.substring(1, ~r ? r : ~i ? i : o.length)),
            (a += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~i && (a += (~r ? "?" : "") + "\\" + o.substring(i)))
          : (a += "/" + o));
  return {
    keys: l,
    pattern: new RegExp("^" + a + (t ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Wp = { exports: {} },
  Up = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = x;
function ey(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ty = typeof Object.is == "function" ? Object.is : ey,
  ny = Sr.useState,
  ry = Sr.useEffect,
  oy = Sr.useLayoutEffect,
  iy = Sr.useDebugValue;
function sy(e, t) {
  var n = t(),
    r = ny({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    oy(
      function () {
        ((o.value = n), (o.getSnapshot = t), Zs(o) && i({ inst: o }));
      },
      [e, n, t],
    ),
    ry(
      function () {
        return (
          Zs(o) && i({ inst: o }),
          e(function () {
            Zs(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    iy(n),
    n
  );
}
function Zs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ty(e, n);
  } catch {
    return !0;
  }
}
function ly(e, t) {
  return t();
}
var ay =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ly
    : sy;
Up.useSyncExternalStore =
  Sr.useSyncExternalStore !== void 0 ? Sr.useSyncExternalStore : ay;
Wp.exports = Up;
var uy = Wp.exports;
const cy = $m.useInsertionEffect,
  dy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fy = dy ? x.useLayoutEffect : x.useEffect,
  py = cy || fy,
  Vp = (e) => {
    const t = x.useRef([e, (...n) => t[0](...n)]).current;
    return (
      py(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  hy = "popstate",
  ou = "pushState",
  iu = "replaceState",
  my = "hashchange",
  Hc = [hy, ou, iu, my],
  gy = (e) => {
    for (const t of Hc) addEventListener(t, e);
    return () => {
      for (const t of Hc) removeEventListener(t, e);
    };
  },
  Qp = (e, t) => uy.useSyncExternalStore(gy, e, t),
  vy = () => location.search,
  yy = ({ ssrSearch: e = "" } = {}) => Qp(vy, () => e),
  $c = () => location.pathname,
  xy = ({ ssrPath: e } = {}) => Qp($c, e ? () => e : $c),
  wy = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? iu : ou](n, "", e),
  jy = (e = {}) => [xy(e), wy],
  Bc = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Bc] > "u") {
  for (const e of [ou, iu]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return ((r.arguments = arguments), dispatchEvent(r), n);
    };
  }
  Object.defineProperty(window, Bc, { value: !0 });
}
const ky = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + t
      : t.slice(e.length) || "/",
  Kp = (e = "") => (e === "/" ? "" : e),
  by = (e, t) => (e[0] === "~" ? e.slice(1) : Kp(t) + e),
  Ey = (e = "", t) => ky(Wc(Kp(e)), Wc(t)),
  Wc = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  Gp = {
    hook: jy,
    searchHook: yy,
    parser: Zv,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e,
  },
  qp = x.createContext(Gp),
  Ar = () => x.useContext(qp),
  Yp = {},
  Xp = x.createContext(Yp),
  Sy = () => x.useContext(Xp),
  hs = (e) => {
    const [t, n] = e.hook(e);
    return [Ey(e.base, t), Vp((r, o) => n(by(r, e.base), o))];
  },
  Jp = () => hs(Ar()),
  su = (e, t, n, r) => {
    const { pattern: o, keys: i } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
      l = o.exec(n) || [],
      [a, ...u] = l;
    return a !== void 0
      ? [
          !0,
          (() => {
            const c =
              i !== !1
                ? Object.fromEntries(i.map((p, h) => [p, u[h]]))
                : l.groups;
            let d = { ...u };
            return (c && Object.assign(d, c), d);
          })(),
          ...(r ? [a] : []),
        ]
      : [!1, null];
  },
  Ny = (e) => su(Ar().parser, e, Jp()[0]),
  Cy = ({ children: e, ...t }) => {
    var d, p;
    const n = Ar(),
      r = t.hook ? Gp : n;
    let o = r;
    const [i, l] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ?? [];
    (l && ((t.ssrSearch = l), (t.ssrPath = i)),
      (t.hrefs = t.hrefs ?? ((p = t.hook) == null ? void 0 : p.hrefs)));
    let a = x.useRef({}),
      u = a.current,
      c = u;
    for (let h in r) {
      const y = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      (u === c && y !== c[h] && (a.current = c = { ...c }),
        (c[h] = y),
        y !== r[h] && (o = c));
    }
    return x.createElement(qp.Provider, { value: o, children: e });
  },
  Uc = ({ children: e, component: t }, n) =>
    t ? x.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e,
  Py = (e) => {
    let t = x.useRef(Yp),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return (Object.keys(e).length === 0 && (n = e), (t.current = n));
  },
  Et = ({ path: e, nest: t, match: n, ...r }) => {
    const o = Ar(),
      [i] = hs(o),
      [l, a, u] = n ?? su(o.parser, e, i, t),
      c = Py({ ...Sy(), ...a });
    if (!l) return null;
    const d = u ? x.createElement(Cy, { base: u }, Uc(r, c)) : Uc(r, c);
    return x.createElement(Xp.Provider, { value: c, children: d });
  },
  Ke = x.forwardRef((e, t) => {
    const n = Ar(),
      [r, o] = hs(n),
      {
        to: i = "",
        href: l = i,
        onClick: a,
        asChild: u,
        children: c,
        className: d,
        replace: p,
        state: h,
        ...y
      } = e,
      w = Vp((j) => {
        j.ctrlKey ||
          j.metaKey ||
          j.altKey ||
          j.shiftKey ||
          j.button !== 0 ||
          (a == null || a(j),
          j.defaultPrevented || (j.preventDefault(), o(l, e)));
      }),
      v = n.hrefs(l[0] === "~" ? l.slice(1) : n.base + l, n);
    return u && x.isValidElement(c)
      ? x.cloneElement(c, { onClick: w, href: v })
      : x.createElement("a", {
          ...y,
          onClick: w,
          href: v,
          className: d != null && d.call ? d(r === l) : d,
          children: c,
          ref: t,
        });
  }),
  Zp = (e) =>
    Array.isArray(e)
      ? e.flatMap((t) => Zp(t && t.type === x.Fragment ? t.props.children : t))
      : [e],
  Ty = ({ children: e, location: t }) => {
    const n = Ar(),
      [r] = hs(n);
    for (const o of Zp(e)) {
      let i = 0;
      if (
        x.isValidElement(o) &&
        (i = su(n.parser, o.props.path, t || r, o.props.nest))[0]
      )
        return x.cloneElement(o, { match: i });
    }
    return null;
  };
var ms = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  gs = typeof window > "u" || "Deno" in globalThis;
function tt() {}
function Ry(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ay(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function zy(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Vc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fy(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qc(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: l,
    stale: a,
  } = e;
  if (l) {
    if (r) {
      if (t.queryHash !== lu(l, t.options)) return !1;
    } else if (!No(t.queryKey, l)) return !1;
  }
  if (n !== "all") {
    const u = t.isActive();
    if ((n === "active" && !u) || (n === "inactive" && u)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Kc(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (So(t.options.mutationKey) !== So(i)) return !1;
    } else if (!No(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function lu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || So)(e);
}
function So(e) {
  return JSON.stringify(e, (t, n) =>
    Zl(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function No(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !No(e[n], t[n]))
        : !1;
}
function eh(e, t) {
  if (e === t) return e;
  const n = Gc(e) && Gc(t);
  if (n || (Zl(e) && Zl(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      l = i.length,
      a = n ? [] : {};
    let u = 0;
    for (let c = 0; c < l; c++) {
      const d = n ? c : i[c];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = eh(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return o === l && u === o ? e : a;
  }
  return t;
}
function Gc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Zl(e) {
  if (!qc(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !qc(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function qc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Oy(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function _y(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? eh(e, t)
      : t;
}
function Ly(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function My(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var au = Symbol();
function th(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === au
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Sn,
  Gt,
  ur,
  wd,
  Dy =
    ((wd = class extends ms {
      constructor() {
        super();
        K(this, Sn);
        K(this, Gt);
        K(this, ur);
        D(this, ur, (t) => {
          if (!gs && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, Gt) || this.setEventListener(N(this, ur));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, Gt)) == null || t.call(this), D(this, Gt, void 0));
      }
      setEventListener(t) {
        var n;
        (D(this, ur, t),
          (n = N(this, Gt)) == null || n.call(this),
          D(
            this,
            Gt,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        N(this, Sn) !== t && (D(this, Sn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof N(this, Sn) == "boolean"
          ? N(this, Sn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Sn = new WeakMap()),
    (Gt = new WeakMap()),
    (ur = new WeakMap()),
    wd),
  nh = new Dy(),
  cr,
  qt,
  dr,
  jd,
  Iy =
    ((jd = class extends ms {
      constructor() {
        super();
        K(this, cr, !0);
        K(this, qt);
        K(this, dr);
        D(this, dr, (t) => {
          if (!gs && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, qt) || this.setEventListener(N(this, dr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, qt)) == null || t.call(this), D(this, qt, void 0));
      }
      setEventListener(t) {
        var n;
        (D(this, dr, t),
          (n = N(this, qt)) == null || n.call(this),
          D(this, qt, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        N(this, cr) !== t &&
          (D(this, cr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return N(this, cr);
      }
    }),
    (cr = new WeakMap()),
    (qt = new WeakMap()),
    (dr = new WeakMap()),
    jd),
  Ki = new Iy();
function Hy() {
  let e, t;
  const n = new Promise((o, i) => {
    ((e = o), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
function $y(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function rh(e) {
  return (e ?? "online") === "online" ? Ki.isOnline() : !0;
}
var oh = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function el(e) {
  return e instanceof oh;
}
function ih(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = Hy(),
    l = (v) => {
      var j;
      r || (h(new oh(v)), (j = e.abort) == null || j.call(e));
    },
    a = () => {
      t = !0;
    },
    u = () => {
      t = !1;
    },
    c = () =>
      nh.isFocused() &&
      (e.networkMode === "always" || Ki.isOnline()) &&
      e.canRun(),
    d = () => rh(e.networkMode) && e.canRun(),
    p = (v) => {
      var j;
      r ||
        ((r = !0),
        (j = e.onSuccess) == null || j.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    h = (v) => {
      var j;
      r ||
        ((r = !0),
        (j = e.onError) == null || j.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    y = () =>
      new Promise((v) => {
        var j;
        ((o = (m) => {
          (r || c()) && v(m);
        }),
          (j = e.onPause) == null || j.call(e));
      }).then(() => {
        var v;
        ((o = void 0), r || (v = e.onContinue) == null || v.call(e));
      }),
    w = () => {
      if (r) return;
      let v;
      const j = n === 0 ? e.initialPromise : void 0;
      try {
        v = j ?? e.fn();
      } catch (m) {
        v = Promise.reject(m);
      }
      Promise.resolve(v)
        .then(p)
        .catch((m) => {
          var E;
          if (r) return;
          const f = e.retry ?? (gs ? 0 : 3),
            g = e.retryDelay ?? $y,
            k = typeof g == "function" ? g(n, m) : g,
            b =
              f === !0 ||
              (typeof f == "number" && n < f) ||
              (typeof f == "function" && f(n, m));
          if (t || !b) {
            h(m);
            return;
          }
          (n++,
            (E = e.onFail) == null || E.call(e, n, m),
            Oy(k)
              .then(() => (c() ? void 0 : y()))
              .then(() => {
                t ? h(m) : w();
              }));
        });
    };
  return {
    promise: i,
    cancel: l,
    continue: () => (o == null || o(), i),
    cancelRetry: a,
    continueRetry: u,
    canStart: d,
    start: () => (d() ? w() : y().then(w), i),
  };
}
function By() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    o = (a) => setTimeout(a, 0);
  const i = (a) => {
      t
        ? e.push(a)
        : o(() => {
            n(a);
          });
    },
    l = () => {
      const a = e;
      ((e = []),
        a.length &&
          o(() => {
            r(() => {
              a.forEach((u) => {
                n(u);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let u;
      t++;
      try {
        u = a();
      } finally {
        (t--, t || l());
      }
      return u;
    },
    batchCalls:
      (a) =>
      (...u) => {
        i(() => {
          a(...u);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    },
  };
}
var Ee = By(),
  Nn,
  kd,
  sh =
    ((kd = class {
      constructor() {
        K(this, Nn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Ay(this.gcTime) &&
            D(
              this,
              Nn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (gs ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        N(this, Nn) && (clearTimeout(N(this, Nn)), D(this, Nn, void 0));
      }
    }),
    (Nn = new WeakMap()),
    kd),
  fr,
  pr,
  Ue,
  xe,
  To,
  Cn,
  nt,
  Nt,
  bd,
  Wy =
    ((bd = class extends sh {
      constructor(t) {
        super();
        K(this, nt);
        K(this, fr);
        K(this, pr);
        K(this, Ue);
        K(this, xe);
        K(this, To);
        K(this, Cn);
        (D(this, Cn, !1),
          D(this, To, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          D(this, Ue, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          D(this, fr, Vy(this.options)),
          (this.state = t.state ?? N(this, fr)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = N(this, xe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...N(this, To), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          N(this, Ue).remove(this);
      }
      setData(t, n) {
        const r = _y(this.state.data, t, this.options);
        return (
          ge(this, nt, Nt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ge(this, nt, Nt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = N(this, xe)) == null ? void 0 : r.promise;
        return (
          (o = N(this, xe)) == null || o.cancel(t),
          n ? n.then(tt).catch(tt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(N(this, fr)));
      }
      isActive() {
        return this.observers.some((t) => Fy(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === au ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !zy(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, xe)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, xe)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          N(this, Ue).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (N(this, xe) &&
              (N(this, Cn)
                ? N(this, xe).cancel({ revert: !0 })
                : N(this, xe).cancelRetry()),
            this.scheduleGc()),
          N(this, Ue).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ge(this, nt, Nt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (N(this, xe))
            return (N(this, xe).continueRetry(), N(this, xe).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const p = this.observers.find((h) => h.options.queryFn);
          p && this.setOptions(p.options);
        }
        const r = new AbortController(),
          o = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (D(this, Cn, !0), r.signal),
            });
          },
          i = () => {
            const p = th(this.options, n),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(h),
              D(this, Cn, !1),
              this.options.persister ? this.options.persister(p, h, this) : p(h)
            );
          },
          l = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        (o(l),
          (u = this.options.behavior) == null || u.onFetch(l, this),
          D(this, pr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = l.fetchOptions) == null ? void 0 : c.meta)) &&
            ge(this, nt, Nt).call(this, {
              type: "fetch",
              meta: (d = l.fetchOptions) == null ? void 0 : d.meta,
            }));
        const a = (p) => {
          var h, y, w, v;
          ((el(p) && p.silent) ||
            ge(this, nt, Nt).call(this, { type: "error", error: p }),
            el(p) ||
              ((y = (h = N(this, Ue).config).onError) == null ||
                y.call(h, p, this),
              (v = (w = N(this, Ue).config).onSettled) == null ||
                v.call(w, this.state.data, p, this)),
            this.scheduleGc());
        };
        return (
          D(
            this,
            xe,
            ih({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (p) => {
                var h, y, w, v;
                if (p === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (j) {
                  a(j);
                  return;
                }
                ((y = (h = N(this, Ue).config).onSuccess) == null ||
                  y.call(h, p, this),
                  (v = (w = N(this, Ue).config).onSettled) == null ||
                    v.call(w, p, this.state.error, this),
                  this.scheduleGc());
              },
              onError: a,
              onFail: (p, h) => {
                ge(this, nt, Nt).call(this, {
                  type: "failed",
                  failureCount: p,
                  error: h,
                });
              },
              onPause: () => {
                ge(this, nt, Nt).call(this, { type: "pause" });
              },
              onContinue: () => {
                ge(this, nt, Nt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            }),
          ),
          N(this, xe).start()
        );
      }
    }),
    (fr = new WeakMap()),
    (pr = new WeakMap()),
    (Ue = new WeakMap()),
    (xe = new WeakMap()),
    (To = new WeakMap()),
    (Cn = new WeakMap()),
    (nt = new WeakSet()),
    (Nt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Uy(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return el(o) && o.revert && N(this, pr)
              ? { ...N(this, pr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Ee.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            N(this, Ue).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    bd);
function Uy(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: rh(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Vy(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var pt,
  Ed,
  Qy =
    ((Ed = class extends ms {
      constructor(t = {}) {
        super();
        K(this, pt);
        ((this.config = t), D(this, pt, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? lu(o, n);
        let l = this.get(i);
        return (
          l ||
            ((l = new Wy({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(l)),
          l
        );
      }
      add(t) {
        N(this, pt).has(t.queryHash) ||
          (N(this, pt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = N(this, pt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && N(this, pt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return N(this, pt).get(t);
      }
      getAll() {
        return [...N(this, pt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Qc(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Qc(t, r)) : n;
      }
      notify(t) {
        Ee.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (pt = new WeakMap()),
    Ed),
  ht,
  ke,
  Pn,
  mt,
  Wt,
  Sd,
  Ky =
    ((Sd = class extends sh {
      constructor(t) {
        super();
        K(this, mt);
        K(this, ht);
        K(this, ke);
        K(this, Pn);
        ((this.mutationId = t.mutationId),
          D(this, ke, t.mutationCache),
          D(this, ht, []),
          (this.state = t.state || Gy()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        N(this, ht).includes(t) ||
          (N(this, ht).push(t),
          this.clearGcTimeout(),
          N(this, ke).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (D(
          this,
          ht,
          N(this, ht).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          N(this, ke).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        N(this, ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : N(this, ke).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = N(this, Pn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, l, a, u, c, d, p, h, y, w, v, j, m, f, g, k, b, E, S;
        D(
          this,
          Pn,
          ih({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, O) => {
              ge(this, mt, Wt).call(this, {
                type: "failed",
                failureCount: P,
                error: O,
              });
            },
            onPause: () => {
              ge(this, mt, Wt).call(this, { type: "pause" });
            },
            onContinue: () => {
              ge(this, mt, Wt).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, ke).canRun(this),
          }),
        );
        const n = this.state.status === "pending",
          r = !N(this, Pn).canStart();
        try {
          if (!n) {
            (ge(this, mt, Wt).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = N(this, ke).config).onMutate) == null
                ? void 0
                : i.call(o, t, this)));
            const O = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            O !== this.state.context &&
              ge(this, mt, Wt).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: r,
              });
          }
          const P = await N(this, Pn).start();
          return (
            await ((c = (u = N(this, ke).config).onSuccess) == null
              ? void 0
              : c.call(u, P, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null
              ? void 0
              : p.call(d, P, t, this.state.context)),
            await ((y = (h = N(this, ke).config).onSettled) == null
              ? void 0
              : y.call(
                  h,
                  P,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((v = (w = this.options).onSettled) == null
              ? void 0
              : v.call(w, P, null, t, this.state.context)),
            ge(this, mt, Wt).call(this, { type: "success", data: P }),
            P
          );
        } catch (P) {
          try {
            throw (
              await ((m = (j = N(this, ke).config).onError) == null
                ? void 0
                : m.call(j, P, t, this.state.context, this)),
              await ((g = (f = this.options).onError) == null
                ? void 0
                : g.call(f, P, t, this.state.context)),
              await ((b = (k = N(this, ke).config).onSettled) == null
                ? void 0
                : b.call(
                    k,
                    void 0,
                    P,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((S = (E = this.options).onSettled) == null
                ? void 0
                : S.call(E, void 0, P, t, this.state.context)),
              P
            );
          } finally {
            ge(this, mt, Wt).call(this, { type: "error", error: P });
          }
        } finally {
          N(this, ke).runNext(this);
        }
      }
    }),
    (ht = new WeakMap()),
    (ke = new WeakMap()),
    (Pn = new WeakMap()),
    (mt = new WeakSet()),
    (Wt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Ee.batch(() => {
          (N(this, ht).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            N(this, ke).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    Sd);
function Gy() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Oe,
  Ro,
  Nd,
  qy =
    ((Nd = class extends ms {
      constructor(t = {}) {
        super();
        K(this, Oe);
        K(this, Ro);
        ((this.config = t), D(this, Oe, new Map()), D(this, Ro, Date.now()));
      }
      build(t, n, r) {
        const o = new Ky({
          mutationCache: this,
          mutationId: ++Ho(this, Ro)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        const n = oi(t),
          r = N(this, Oe).get(n) ?? [];
        (r.push(t),
          N(this, Oe).set(n, r),
          this.notify({ type: "added", mutation: t }));
      }
      remove(t) {
        var r;
        const n = oi(t);
        if (N(this, Oe).has(n)) {
          const o =
            (r = N(this, Oe).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? N(this, Oe).delete(n) : N(this, Oe).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = N(this, Oe).get(oi(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = N(this, Oe).get(oi(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Ee.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...N(this, Oe).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Kc(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Kc(t, n));
      }
      notify(t) {
        Ee.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ee.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(tt))),
        );
      }
    }),
    (Oe = new WeakMap()),
    (Ro = new WeakMap()),
    Nd);
function oi(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Yc(e) {
  return {
    onFetch: (t, n) => {
      var d, p, h, y, w;
      const r = t.options,
        o =
          (h =
            (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((y = t.state.data) == null ? void 0 : y.pages) || [],
        l = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        u = 0;
      const c = async () => {
        let v = !1;
        const j = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          m = th(t.options, t.fetchOptions),
          f = async (g, k, b) => {
            if (v) return Promise.reject();
            if (k == null && g.pages.length) return Promise.resolve(g);
            const E = {
              queryKey: t.queryKey,
              pageParam: k,
              direction: b ? "backward" : "forward",
              meta: t.options.meta,
            };
            j(E);
            const S = await m(E),
              { maxPages: P } = t.options,
              O = b ? My : Ly;
            return {
              pages: O(g.pages, S, P),
              pageParams: O(g.pageParams, k, P),
            };
          };
        if (o && i.length) {
          const g = o === "backward",
            k = g ? Yy : Xc,
            b = { pages: i, pageParams: l },
            E = k(r, b);
          a = await f(b, E, g);
        } else {
          const g = e ?? i.length;
          do {
            const k = u === 0 ? (l[0] ?? r.initialPageParam) : Xc(r, a);
            if (u > 0 && k == null) break;
            ((a = await f(a, k)), u++);
          } while (u < g);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, j;
            return (j = (v = t.options).persister) == null
              ? void 0
              : j.call(
                  v,
                  c,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function Xc(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Yy(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var oe,
  Yt,
  Xt,
  hr,
  mr,
  Jt,
  gr,
  vr,
  Cd,
  Xy =
    ((Cd = class {
      constructor(e = {}) {
        K(this, oe);
        K(this, Yt);
        K(this, Xt);
        K(this, hr);
        K(this, mr);
        K(this, Jt);
        K(this, gr);
        K(this, vr);
        (D(this, oe, e.queryCache || new Qy()),
          D(this, Yt, e.mutationCache || new qy()),
          D(this, Xt, e.defaultOptions || {}),
          D(this, hr, new Map()),
          D(this, mr, new Map()),
          D(this, Jt, 0));
      }
      mount() {
        (Ho(this, Jt)._++,
          N(this, Jt) === 1 &&
            (D(
              this,
              gr,
              nh.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, oe).onFocus());
              }),
            ),
            D(
              this,
              vr,
              Ki.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, oe).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (Ho(this, Jt)._--,
          N(this, Jt) === 0 &&
            ((e = N(this, gr)) == null || e.call(this),
            D(this, gr, void 0),
            (t = N(this, vr)) == null || t.call(this),
            D(this, vr, void 0)));
      }
      isFetching(e) {
        return N(this, oe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return N(this, Yt).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, oe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = N(this, oe).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Vc(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return N(this, oe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = N(this, oe).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          l = Ry(t, i);
        if (l !== void 0)
          return N(this, oe)
            .build(this, r)
            .setData(l, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ee.batch(() =>
          N(this, oe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, oe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = N(this, oe);
        Ee.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = N(this, oe),
          r = { type: "active", ...e };
        return Ee.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          ),
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Ee.batch(() =>
            N(this, oe)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(tt).catch(tt);
      }
      invalidateQueries(e = {}, t = {}) {
        return Ee.batch(() => {
          if (
            (N(this, oe)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Ee.batch(() =>
            N(this, oe)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(tt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(tt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, oe).build(this, t);
        return n.isStaleByTime(Vc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(tt).catch(tt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = Yc(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(tt).catch(tt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = Yc(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Ki.isOnline()
          ? N(this, Yt).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return N(this, oe);
      }
      getMutationCache() {
        return N(this, Yt);
      }
      getDefaultOptions() {
        return N(this, Xt);
      }
      setDefaultOptions(e) {
        D(this, Xt, e);
      }
      setQueryDefaults(e, t) {
        N(this, hr).set(So(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...N(this, hr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            No(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        N(this, mr).set(So(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...N(this, mr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            No(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...N(this, Xt).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = lu(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === au && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...N(this, Xt).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (N(this, oe).clear(), N(this, Yt).clear());
      }
    }),
    (oe = new WeakMap()),
    (Yt = new WeakMap()),
    (Xt = new WeakMap()),
    (hr = new WeakMap()),
    (mr = new WeakMap()),
    (Jt = new WeakMap()),
    (gr = new WeakMap()),
    (vr = new WeakMap()),
    Cd),
  Jy = x.createContext(void 0),
  Zy = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    s.jsx(Jy.Provider, { value: e, children: t })
  );
async function ex(e) {
  if (!e.ok) {
    const t = (await e.text()) || e.statusText;
    throw new Error(`${e.status}: ${t}`);
  }
}
const tx =
    ({ on401: e }) =>
    async ({ queryKey: t }) => {
      const n = await fetch(t.join("/"), { credentials: "include" });
      return e === "returnNull" && n.status === 401
        ? null
        : (await ex(n), await n.json());
    },
  nx = new Xy({
    defaultOptions: {
      queries: {
        queryFn: tx({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  rx = 1,
  ox = 1e6;
let tl = 0;
function ix() {
  return ((tl = (tl + 1) % Number.MAX_SAFE_INTEGER), tl.toString());
}
const nl = new Map(),
  Jc = (e) => {
    if (nl.has(e)) return;
    const t = setTimeout(() => {
      (nl.delete(e), so({ type: "REMOVE_TOAST", toastId: e }));
    }, ox);
    nl.set(e, t);
  },
  sx = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, rx) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Jc(n)
            : e.toasts.forEach((r) => {
                Jc(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  wi = [];
let ji = { toasts: [] };
function so(e) {
  ((ji = sx(ji, e)),
    wi.forEach((t) => {
      t(ji);
    }));
}
function lx({ ...e }) {
  const t = ix(),
    n = (o) => so({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => so({ type: "DISMISS_TOAST", toastId: t });
  return (
    so({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function ax() {
  const [e, t] = x.useState(ji);
  return (
    x.useEffect(
      () => (
        wi.push(t),
        () => {
          const n = wi.indexOf(t);
          n > -1 && wi.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: lx,
      dismiss: (n) => so({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Zc(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function lh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Zc(o, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Zc(e[o], null);
        }
      };
  };
}
function at(...e) {
  return x.useCallback(lh(...e), e);
}
function vs(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = x.createContext(l),
      u = n.length;
    n = [...n, l];
    const c = (p) => {
      var m;
      const { scope: h, children: y, ...w } = p,
        v = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[u]) || a,
        j = x.useMemo(() => w, Object.values(w));
      return s.jsx(v.Provider, { value: j, children: y });
    };
    c.displayName = i + "Provider";
    function d(p, h) {
      var v;
      const y = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[u]) || a,
        w = x.useContext(y);
      if (w) return w;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const o = () => {
    const i = n.map((l) => x.createContext(l));
    return function (a) {
      const u = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: u } }), [a, u]);
    };
  };
  return ((o.scopeName = e), [r, ux(o, ...t)]);
}
function ux(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = r.reduce((a, { useScope: u, scopeName: c }) => {
        const p = u(i)[`__scope${c}`];
        return { ...a, ...p };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function ea(e) {
  const t = cx(e),
    n = x.forwardRef((r, o) => {
      const { children: i, ...l } = r,
        a = x.Children.toArray(i),
        u = a.find(fx);
      if (u) {
        const c = u.props.children,
          d = a.map((p) =>
            p === u
              ? x.Children.count(c) > 1
                ? x.Children.only(null)
                : x.isValidElement(c)
                  ? c.props.children
                  : null
              : p,
          );
        return s.jsx(t, {
          ...l,
          ref: o,
          children: x.isValidElement(c) ? x.cloneElement(c, void 0, d) : null,
        });
      }
      return s.jsx(t, { ...l, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function cx(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (x.isValidElement(o)) {
      const l = hx(o),
        a = px(i, o.props);
      return (
        o.type !== x.Fragment && (a.ref = r ? lh(r, l) : l),
        x.cloneElement(o, a)
      );
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var ah = Symbol("radix.slottable");
function dx(e) {
  const t = ({ children: n }) => s.jsx(s.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = ah), t);
}
function fx(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === ah
  );
}
function px(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            (i(...a), o(...a));
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function hx(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function mx(e) {
  const t = e + "CollectionProvider",
    [n, r] = vs(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (v) => {
      const { scope: j, children: m } = v,
        f = Bt.useRef(null),
        g = Bt.useRef(new Map()).current;
      return s.jsx(o, { scope: j, itemMap: g, collectionRef: f, children: m });
    };
  l.displayName = t;
  const a = e + "CollectionSlot",
    u = ea(a),
    c = Bt.forwardRef((v, j) => {
      const { scope: m, children: f } = v,
        g = i(a, m),
        k = at(j, g.collectionRef);
      return s.jsx(u, { ref: k, children: f });
    });
  c.displayName = a;
  const d = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    h = ea(d),
    y = Bt.forwardRef((v, j) => {
      const { scope: m, children: f, ...g } = v,
        k = Bt.useRef(null),
        b = at(j, k),
        E = i(d, m);
      return (
        Bt.useEffect(
          () => (
            E.itemMap.set(k, { ref: k, ...g }),
            () => void E.itemMap.delete(k)
          ),
        ),
        s.jsx(h, { [p]: "", ref: b, children: f })
      );
    });
  y.displayName = d;
  function w(v) {
    const j = i(e + "CollectionConsumer", v);
    return Bt.useCallback(() => {
      const f = j.collectionRef.current;
      if (!f) return [];
      const g = Array.from(f.querySelectorAll(`[${p}]`));
      return Array.from(j.itemMap.values()).sort(
        (E, S) => g.indexOf(E.ref.current) - g.indexOf(S.ref.current),
      );
    }, [j.collectionRef, j.itemMap]);
  }
  return [{ Provider: l, Slot: c, ItemSlot: y }, w, r];
}
var gx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Fe = gx.reduce((e, t) => {
    const n = ea(`Primitive.${t}`),
      r = x.forwardRef((o, i) => {
        const { asChild: l, ...a } = o,
          u = l ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          s.jsx(u, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function uh(e, t) {
  e && Lo.flushSync(() => e.dispatchEvent(t));
}
function wt(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function vx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var yx = "DismissableLayer",
  ta = "dismissableLayer.update",
  xx = "dismissableLayer.pointerDownOutside",
  wx = "dismissableLayer.focusOutside",
  ed,
  ch = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  uu = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: l,
        onDismiss: a,
        ...u
      } = e,
      c = x.useContext(ch),
      [d, p] = x.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = x.useState({}),
      w = at(t, (S) => p(S)),
      v = Array.from(c.layers),
      [j] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = v.indexOf(j),
      f = d ? v.indexOf(d) : -1,
      g = c.layersWithOutsidePointerEventsDisabled.size > 0,
      k = f >= m,
      b = kx((S) => {
        const P = S.target,
          O = [...c.branches].some((z) => z.contains(P));
        !k ||
          O ||
          (o == null || o(S),
          l == null || l(S),
          S.defaultPrevented || a == null || a());
      }, h),
      E = bx((S) => {
        const P = S.target;
        [...c.branches].some((z) => z.contains(P)) ||
          (i == null || i(S),
          l == null || l(S),
          S.defaultPrevented || a == null || a());
      }, h);
    return (
      vx((S) => {
        f === c.layers.size - 1 &&
          (r == null || r(S),
          !S.defaultPrevented && a && (S.preventDefault(), a()));
      }, h),
      x.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ed = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            td(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = ed);
            }
          );
      }, [d, h, n, c]),
      x.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            td());
        },
        [d, c],
      ),
      x.useEffect(() => {
        const S = () => y({});
        return (
          document.addEventListener(ta, S),
          () => document.removeEventListener(ta, S)
        );
      }, []),
      s.jsx(Fe.div, {
        ...u,
        ref: w,
        style: {
          pointerEvents: g ? (k ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ue(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: ue(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: ue(
          e.onPointerDownCapture,
          b.onPointerDownCapture,
        ),
      })
    );
  });
uu.displayName = yx;
var jx = "DismissableLayerBranch",
  dh = x.forwardRef((e, t) => {
    const n = x.useContext(ch),
      r = x.useRef(null),
      o = at(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      s.jsx(Fe.div, { ...e, ref: o })
    );
  });
dh.displayName = jx;
function kx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let u = function () {
              fh(xx, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = u),
                t.addEventListener("click", o.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function bx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          fh(wx, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function td() {
  const e = new CustomEvent(ta);
  document.dispatchEvent(e);
}
function fh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? uh(o, i) : o.dispatchEvent(i));
}
var Ex = uu,
  Sx = dh,
  Ln = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  Nx = "Portal",
  ph = x.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    Ln(() => i(!0), []);
    const l =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return l ? Jv.createPortal(s.jsx(Fe.div, { ...r, ref: t }), l) : null;
  });
ph.displayName = Nx;
function Cx(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var cu = (e) => {
  const { present: t, children: n } = e,
    r = Px(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = at(r.ref, Tx(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
cu.displayName = "Presence";
function Px(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    o = x.useRef(e),
    i = x.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [a, u] = Cx(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const c = ii(r.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    Ln(() => {
      const c = r.current,
        d = o.current;
      if (d !== e) {
        const h = i.current,
          y = ii(c);
        (e
          ? u("MOUNT")
          : y === "none" || (c == null ? void 0 : c.display) === "none"
            ? u("UNMOUNT")
            : u(d && h !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, u]),
    Ln(() => {
      if (t) {
        let c;
        const d = t.ownerDocument.defaultView ?? window,
          p = (y) => {
            const v = ii(r.current).includes(y.animationName);
            if (y.target === t && v && (u("ANIMATION_END"), !o.current)) {
              const j = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (c = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = j);
                })));
            }
          },
          h = (y) => {
            y.target === t && (i.current = ii(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            (d.clearTimeout(c),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p));
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((c) => {
        (c && (r.current = getComputedStyle(c)), n(c));
      }, []),
    }
  );
}
function ii(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Tx(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Rx({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Ax({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    a = wt(n),
    u = x.useCallback(
      (c) => {
        if (i) {
          const p = typeof c == "function" ? c(e) : c;
          p !== e && a(p);
        } else o(c);
      },
      [i, e, o, a],
    );
  return [l, u];
}
function Ax({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    o = x.useRef(r),
    i = wt(t);
  return (
    x.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var zx = "VisuallyHidden",
  ys = x.forwardRef((e, t) =>
    s.jsx(Fe.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
ys.displayName = zx;
var Fx = ys,
  du = "ToastProvider",
  [fu, Ox, _x] = mx("Toast"),
  [hh, Cw] = vs("Toast", [_x]),
  [Lx, xs] = hh(du),
  mh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: l,
      } = e,
      [a, u] = x.useState(null),
      [c, d] = x.useState(0),
      p = x.useRef(!1),
      h = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${du}\`. Expected non-empty \`string\`.`,
        ),
      s.jsx(fu.Provider, {
        scope: t,
        children: s.jsx(Lx, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: c,
          viewport: a,
          onViewportChange: u,
          onToastAdd: x.useCallback(() => d((y) => y + 1), []),
          onToastRemove: x.useCallback(() => d((y) => y - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: h,
          children: l,
        }),
      })
    );
  };
mh.displayName = du;
var gh = "ToastViewport",
  Mx = ["F8"],
  na = "toast.viewportPause",
  ra = "toast.viewportResume",
  vh = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Mx,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      l = xs(gh, n),
      a = Ox(n),
      u = x.useRef(null),
      c = x.useRef(null),
      d = x.useRef(null),
      p = x.useRef(null),
      h = at(t, p, l.onViewportChange),
      y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = l.toastCount > 0;
    (x.useEffect(() => {
      const j = (m) => {
        var g;
        r.length !== 0 &&
          r.every((k) => m[k] || m.code === k) &&
          ((g = p.current) == null || g.focus());
      };
      return (
        document.addEventListener("keydown", j),
        () => document.removeEventListener("keydown", j)
      );
    }, [r]),
      x.useEffect(() => {
        const j = u.current,
          m = p.current;
        if (w && j && m) {
          const f = () => {
              if (!l.isClosePausedRef.current) {
                const E = new CustomEvent(na);
                (m.dispatchEvent(E), (l.isClosePausedRef.current = !0));
              }
            },
            g = () => {
              if (l.isClosePausedRef.current) {
                const E = new CustomEvent(ra);
                (m.dispatchEvent(E), (l.isClosePausedRef.current = !1));
              }
            },
            k = (E) => {
              !j.contains(E.relatedTarget) && g();
            },
            b = () => {
              j.contains(document.activeElement) || g();
            };
          return (
            j.addEventListener("focusin", f),
            j.addEventListener("focusout", k),
            j.addEventListener("pointermove", f),
            j.addEventListener("pointerleave", b),
            window.addEventListener("blur", f),
            window.addEventListener("focus", g),
            () => {
              (j.removeEventListener("focusin", f),
                j.removeEventListener("focusout", k),
                j.removeEventListener("pointermove", f),
                j.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", f),
                window.removeEventListener("focus", g));
            }
          );
        }
      }, [w, l.isClosePausedRef]));
    const v = x.useCallback(
      ({ tabbingDirection: j }) => {
        const f = a().map((g) => {
          const k = g.ref.current,
            b = [k, ...Yx(k)];
          return j === "forwards" ? b : b.reverse();
        });
        return (j === "forwards" ? f.reverse() : f).flat();
      },
      [a],
    );
    return (
      x.useEffect(() => {
        const j = p.current;
        if (j) {
          const m = (f) => {
            var b, E, S;
            const g = f.altKey || f.ctrlKey || f.metaKey;
            if (f.key === "Tab" && !g) {
              const P = document.activeElement,
                O = f.shiftKey;
              if (f.target === j && O) {
                (b = c.current) == null || b.focus();
                return;
              }
              const _ = v({ tabbingDirection: O ? "backwards" : "forwards" }),
                W = _.findIndex((F) => F === P);
              rl(_.slice(W + 1))
                ? f.preventDefault()
                : O
                  ? (E = c.current) == null || E.focus()
                  : (S = d.current) == null || S.focus();
            }
          };
          return (
            j.addEventListener("keydown", m),
            () => j.removeEventListener("keydown", m)
          );
        }
      }, [a, v]),
      s.jsxs(Sx, {
        ref: u,
        role: "region",
        "aria-label": o.replace("{hotkey}", y),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            s.jsx(oa, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const j = v({ tabbingDirection: "forwards" });
                rl(j);
              },
            }),
          s.jsx(fu.Slot, {
            scope: n,
            children: s.jsx(Fe.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          w &&
            s.jsx(oa, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const j = v({ tabbingDirection: "backwards" });
                rl(j);
              },
            }),
        ],
      })
    );
  });
vh.displayName = gh;
var yh = "ToastFocusProxy",
  oa = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = xs(yh, n);
    return s.jsx(ys, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (l) => {
        var c;
        const a = l.relatedTarget;
        !((c = i.viewport) != null && c.contains(a)) && r();
      },
    });
  });
oa.displayName = yh;
var ws = "Toast",
  Dx = "toast.swipeStart",
  Ix = "toast.swipeMove",
  Hx = "toast.swipeCancel",
  $x = "toast.swipeEnd",
  xh = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...l } = e,
      [a = !0, u] = Rx({ prop: r, defaultProp: o, onChange: i });
    return s.jsx(cu, {
      present: n || a,
      children: s.jsx(Ux, {
        open: a,
        ...l,
        ref: t,
        onClose: () => u(!1),
        onPause: wt(e.onPause),
        onResume: wt(e.onResume),
        onSwipeStart: ue(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ue(e.onSwipeMove, (c) => {
          const { x: d, y: p } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`,
            ));
        }),
        onSwipeCancel: ue(e.onSwipeCancel, (c) => {
          (c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: ue(e.onSwipeEnd, (c) => {
          const { x: d, y: p } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`,
            ),
            u(!1));
        }),
      }),
    });
  });
xh.displayName = ws;
var [Bx, Wx] = hh(ws, { onClose() {} }),
  Ux = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: l,
        onEscapeKeyDown: a,
        onPause: u,
        onResume: c,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: h,
        onSwipeEnd: y,
        ...w
      } = e,
      v = xs(ws, n),
      [j, m] = x.useState(null),
      f = at(t, (F) => m(F)),
      g = x.useRef(null),
      k = x.useRef(null),
      b = o || v.duration,
      E = x.useRef(0),
      S = x.useRef(b),
      P = x.useRef(0),
      { onToastAdd: O, onToastRemove: z } = v,
      I = wt(() => {
        var Q;
        ((j == null ? void 0 : j.contains(document.activeElement)) &&
          ((Q = v.viewport) == null || Q.focus()),
          l());
      }),
      _ = x.useCallback(
        (F) => {
          !F ||
            F === 1 / 0 ||
            (window.clearTimeout(P.current),
            (E.current = new Date().getTime()),
            (P.current = window.setTimeout(I, F)));
        },
        [I],
      );
    (x.useEffect(() => {
      const F = v.viewport;
      if (F) {
        const Q = () => {
            (_(S.current), c == null || c());
          },
          $ = () => {
            const V = new Date().getTime() - E.current;
            ((S.current = S.current - V),
              window.clearTimeout(P.current),
              u == null || u());
          };
        return (
          F.addEventListener(na, $),
          F.addEventListener(ra, Q),
          () => {
            (F.removeEventListener(na, $), F.removeEventListener(ra, Q));
          }
        );
      }
    }, [v.viewport, b, u, c, _]),
      x.useEffect(() => {
        i && !v.isClosePausedRef.current && _(b);
      }, [i, b, v.isClosePausedRef, _]),
      x.useEffect(() => (O(), () => z()), [O, z]));
    const W = x.useMemo(() => (j ? Nh(j) : null), [j]);
    return v.viewport
      ? s.jsxs(s.Fragment, {
          children: [
            W &&
              s.jsx(Vx, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: W,
              }),
            s.jsx(Bx, {
              scope: n,
              onClose: I,
              children: Lo.createPortal(
                s.jsx(fu.ItemSlot, {
                  scope: n,
                  children: s.jsx(Ex, {
                    asChild: !0,
                    onEscapeKeyDown: ue(a, () => {
                      (v.isFocusedToastEscapeKeyDownRef.current || I(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: s.jsx(Fe.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...w,
                      ref: f,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ue(e.onKeyDown, (F) => {
                        F.key === "Escape" &&
                          (a == null || a(F.nativeEvent),
                          F.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            I()));
                      }),
                      onPointerDown: ue(e.onPointerDown, (F) => {
                        F.button === 0 &&
                          (g.current = { x: F.clientX, y: F.clientY });
                      }),
                      onPointerMove: ue(e.onPointerMove, (F) => {
                        if (!g.current) return;
                        const Q = F.clientX - g.current.x,
                          $ = F.clientY - g.current.y,
                          V = !!k.current,
                          C = ["left", "right"].includes(v.swipeDirection),
                          R = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = C ? R(0, Q) : 0,
                          H = C ? 0 : R(0, $),
                          Z = F.pointerType === "touch" ? 10 : 2,
                          Je = { x: L, y: H },
                          We = { originalEvent: F, delta: Je };
                        V
                          ? ((k.current = Je), si(Ix, p, We, { discrete: !1 }))
                          : nd(Je, v.swipeDirection, Z)
                            ? ((k.current = Je),
                              si(Dx, d, We, { discrete: !1 }),
                              F.target.setPointerCapture(F.pointerId))
                            : (Math.abs(Q) > Z || Math.abs($) > Z) &&
                              (g.current = null);
                      }),
                      onPointerUp: ue(e.onPointerUp, (F) => {
                        const Q = k.current,
                          $ = F.target;
                        if (
                          ($.hasPointerCapture(F.pointerId) &&
                            $.releasePointerCapture(F.pointerId),
                          (k.current = null),
                          (g.current = null),
                          Q)
                        ) {
                          const V = F.currentTarget,
                            C = { originalEvent: F, delta: Q };
                          (nd(Q, v.swipeDirection, v.swipeThreshold)
                            ? si($x, y, C, { discrete: !0 })
                            : si(Hx, h, C, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (R) => R.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Vx = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = xs(ws, t),
      [i, l] = x.useState(!1),
      [a, u] = x.useState(!1);
    return (
      Gx(() => l(!0)),
      x.useEffect(() => {
        const c = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : s.jsx(ph, {
            asChild: !0,
            children: s.jsx(ys, {
              ...r,
              children:
                i && s.jsxs(s.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Qx = "ToastTitle",
  wh = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return s.jsx(Fe.div, { ...r, ref: t });
  });
wh.displayName = Qx;
var Kx = "ToastDescription",
  jh = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return s.jsx(Fe.div, { ...r, ref: t });
  });
jh.displayName = Kx;
var kh = "ToastAction",
  bh = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? s.jsx(Sh, {
          altText: n,
          asChild: !0,
          children: s.jsx(pu, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${kh}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
bh.displayName = kh;
var Eh = "ToastClose",
  pu = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Wx(Eh, n);
    return s.jsx(Sh, {
      asChild: !0,
      children: s.jsx(Fe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ue(e.onClick, o.onClose),
      }),
    });
  });
pu.displayName = Eh;
var Sh = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return s.jsx(Fe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Nh(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        qx(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const l = r.dataset.radixToastAnnounceAlt;
            l && t.push(l);
          } else t.push(...Nh(r));
      }
    }),
    t
  );
}
function si(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? uh(o, i) : o.dispatchEvent(i));
}
var nd = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function Gx(e = () => {}) {
  const t = wt(e);
  Ln(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function qx(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Yx(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function rl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var Xx = mh,
  Ch = vh,
  Ph = xh,
  Th = wh,
  Rh = jh,
  Ah = bh,
  zh = pu;
function Fh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Fh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Oh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Fh(e)) && (r && (r += " "), (r += t));
  return r;
}
const rd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  od = Oh,
  Jx = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return od(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      l = Object.keys(o).map((c) => {
        const d = n == null ? void 0 : n[c],
          p = i == null ? void 0 : i[c];
        if (d === null) return null;
        const h = rd(d) || rd(p);
        return o[c][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [p, h] = d;
          return (h === void 0 || (c[p] = h), c);
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, d) => {
              let { class: p, className: h, ...y } = d;
              return Object.entries(y).every((w) => {
                let [v, j] = w;
                return Array.isArray(j)
                  ? j.includes({ ...i, ...a }[v])
                  : { ...i, ...a }[v] === j;
              })
                ? [...c, p, h]
                : c;
            }, []);
    return od(
      e,
      l,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _h = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var e0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t0 = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: l,
      ...a
    },
    u,
  ) =>
    x.createElement(
      "svg",
      {
        ref: u,
        ...e0,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: _h("lucide", o),
        ...a,
      },
      [
        ...l.map(([c, d]) => x.createElement(c, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mo = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(t0, {
      ref: i,
      iconNode: t,
      className: _h(`lucide-${Zx(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n0 = Mo("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const id = Mo("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = Mo("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = Mo("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r0 = Mo("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  hu = "-",
  o0 = (e) => {
    const t = s0(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (l) => {
        const a = l.split(hu);
        return (a[0] === "" && a.length !== 1 && a.shift(), Lh(a, t) || i0(l));
      },
      getConflictingClassGroupIds: (l, a) => {
        const u = n[l] || [];
        return a && r[l] ? [...u, ...r[l]] : u;
      },
    };
  },
  Lh = (e, t) => {
    var l;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Lh(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(hu);
    return (l = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : l.classGroupId;
  },
  ad = /^\[(.+)\]$/,
  i0 = (e) => {
    if (ad.test(e)) {
      const t = ad.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  s0 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      a0(Object.entries(e.classGroups), n).forEach(([i, l]) => {
        ia(l, r, i, t);
      }),
      r
    );
  },
  ia = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : ud(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (l0(o)) {
          ia(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, l]) => {
        ia(l, ud(t, i), n, r);
      });
    });
  },
  ud = (e, t) => {
    let n = e;
    return (
      t.split(hu).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  l0 = (e) => e.isThemeGetter,
  a0 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([l, a]) => [t + l, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  u0 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, l) => {
      (n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let l = n.get(i);
        if (l !== void 0) return l;
        if ((l = r.get(i)) !== void 0) return (o(i, l), l);
      },
      set(i, l) {
        n.has(i) ? n.set(i, l) : o(i, l);
      },
    };
  },
  Mh = "!",
  c0 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      l = (a) => {
        const u = [];
        let c = 0,
          d = 0,
          p;
        for (let j = 0; j < a.length; j++) {
          let m = a[j];
          if (c === 0) {
            if (m === o && (r || a.slice(j, j + i) === t)) {
              (u.push(a.slice(d, j)), (d = j + i));
              continue;
            }
            if (m === "/") {
              p = j;
              continue;
            }
          }
          m === "[" ? c++ : m === "]" && c--;
        }
        const h = u.length === 0 ? a : a.substring(d),
          y = h.startsWith(Mh),
          w = y ? h.substring(1) : h,
          v = p && p > d ? p - d : void 0;
        return {
          modifiers: u,
          hasImportantModifier: y,
          baseClassName: w,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: l }) : l;
  },
  d0 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  f0 = (e) => ({ cache: u0(e.cacheSize), parseClassName: c0(e), ...o0(e) }),
  p0 = /\s+/,
  h0 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      l = e.trim().split(p0);
    let a = "";
    for (let u = l.length - 1; u >= 0; u -= 1) {
      const c = l[u],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: h,
          maybePostfixModifierPosition: y,
        } = n(c);
      let w = !!y,
        v = r(w ? h.substring(0, y) : h);
      if (!v) {
        if (!w) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((v = r(h)), !v)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const j = d0(d).join(":"),
        m = p ? j + Mh : j,
        f = m + v;
      if (i.includes(f)) continue;
      i.push(f);
      const g = o(v, w);
      for (let k = 0; k < g.length; ++k) {
        const b = g[k];
        i.push(m + b);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function m0() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Dh(t)) && (r && (r += " "), (r += n));
  return r;
}
const Dh = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Dh(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function g0(e, ...t) {
  let n,
    r,
    o,
    i = l;
  function l(u) {
    const c = t.reduce((d, p) => p(d), e());
    return ((n = f0(c)), (r = n.cache.get), (o = n.cache.set), (i = a), a(u));
  }
  function a(u) {
    const c = r(u);
    if (c) return c;
    const d = h0(u, n);
    return (o(u, d), d);
  }
  return function () {
    return i(m0.apply(null, arguments));
  };
}
const Y = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  Ih = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  v0 = /^\d+\/\d+$/,
  y0 = new Set(["px", "full", "screen"]),
  x0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  w0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  j0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  k0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  b0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  St = (e) => lr(e) || y0.has(e) || v0.test(e),
  Ht = (e) => zr(e, "length", A0),
  lr = (e) => !!e && !Number.isNaN(Number(e)),
  ol = (e) => zr(e, "number", lr),
  Vr = (e) => !!e && Number.isInteger(Number(e)),
  E0 = (e) => e.endsWith("%") && lr(e.slice(0, -1)),
  M = (e) => Ih.test(e),
  $t = (e) => x0.test(e),
  S0 = new Set(["length", "size", "percentage"]),
  N0 = (e) => zr(e, S0, Hh),
  C0 = (e) => zr(e, "position", Hh),
  P0 = new Set(["image", "url"]),
  T0 = (e) => zr(e, P0, F0),
  R0 = (e) => zr(e, "", z0),
  Qr = () => !0,
  zr = (e, t, n) => {
    const r = Ih.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  A0 = (e) => w0.test(e) && !j0.test(e),
  Hh = () => !1,
  z0 = (e) => k0.test(e),
  F0 = (e) => b0.test(e),
  O0 = () => {
    const e = Y("colors"),
      t = Y("spacing"),
      n = Y("blur"),
      r = Y("brightness"),
      o = Y("borderColor"),
      i = Y("borderRadius"),
      l = Y("borderSpacing"),
      a = Y("borderWidth"),
      u = Y("contrast"),
      c = Y("grayscale"),
      d = Y("hueRotate"),
      p = Y("invert"),
      h = Y("gap"),
      y = Y("gradientColorStops"),
      w = Y("gradientColorStopPositions"),
      v = Y("inset"),
      j = Y("margin"),
      m = Y("opacity"),
      f = Y("padding"),
      g = Y("saturate"),
      k = Y("scale"),
      b = Y("sepia"),
      E = Y("skew"),
      S = Y("space"),
      P = Y("translate"),
      O = () => ["auto", "contain", "none"],
      z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      I = () => ["auto", M, t],
      _ = () => [M, t],
      W = () => ["", St, Ht],
      F = () => ["auto", lr, M],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      C = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", M],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      H = () => [lr, M];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Qr],
        spacing: [St, Ht],
        blur: ["none", "", $t, M],
        brightness: H(),
        borderColor: [e],
        borderRadius: ["none", "", "full", $t, M],
        borderSpacing: _(),
        borderWidth: W(),
        contrast: H(),
        grayscale: R(),
        hueRotate: H(),
        invert: R(),
        gap: _(),
        gradientColorStops: [e],
        gradientColorStopPositions: [E0, Ht],
        inset: I(),
        margin: I(),
        opacity: H(),
        padding: _(),
        saturate: H(),
        scale: H(),
        sepia: R(),
        skew: H(),
        space: _(),
        translate: _(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", M] }],
        container: ["container"],
        columns: [{ columns: [$t] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), M] }],
        overflow: [{ overflow: z() }],
        "overflow-x": [{ "overflow-x": z() }],
        "overflow-y": [{ "overflow-y": z() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Vr, M] }],
        basis: [{ basis: I() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", M] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", Vr, M] }],
        "grid-cols": [{ "grid-cols": [Qr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Vr, M] }, M] }],
        "col-start": [{ "col-start": F() }],
        "col-end": [{ "col-end": F() }],
        "grid-rows": [{ "grid-rows": [Qr] }],
        "row-start-end": [{ row: ["auto", { span: [Vr, M] }, M] }],
        "row-start": [{ "row-start": F() }],
        "row-end": [{ "row-end": F() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", M] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", M] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...C()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...C(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...C(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [j] }],
        mx: [{ mx: [j] }],
        my: [{ my: [j] }],
        ms: [{ ms: [j] }],
        me: [{ me: [j] }],
        mt: [{ mt: [j] }],
        mr: [{ mr: [j] }],
        mb: [{ mb: [j] }],
        ml: [{ ml: [j] }],
        "space-x": [{ "space-x": [S] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [S] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, t] }],
        "min-w": [{ "min-w": [M, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              M,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [$t] },
              $t,
            ],
          },
        ],
        h: [{ h: [M, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [M, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", $t, Ht] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              ol,
            ],
          },
        ],
        "font-family": [{ font: [Qr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              M,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", lr, ol] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              St,
              M,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", M] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", M] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", St, Ht] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", St, M] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: _() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              M,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", M] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), C0] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", N0] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              T0,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [St, M] }],
        "outline-w": [{ outline: [St, Ht] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: W() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [St, Ht] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", $t, R0] }],
        "shadow-color": [{ shadow: [Qr] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", $t, M] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [b] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g] }],
        "backdrop-sepia": [{ "backdrop-sepia": [b] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [l] }],
        "border-spacing-x": [{ "border-spacing-x": [l] }],
        "border-spacing-y": [{ "border-spacing-y": [l] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              M,
            ],
          },
        ],
        duration: [{ duration: H() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", M] }],
        delay: [{ delay: H() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", M] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [k] }],
        "scale-x": [{ "scale-x": [k] }],
        "scale-y": [{ "scale-y": [k] }],
        rotate: [{ rotate: [Vr, M] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              M,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              M,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": _() }],
        "scroll-mx": [{ "scroll-mx": _() }],
        "scroll-my": [{ "scroll-my": _() }],
        "scroll-ms": [{ "scroll-ms": _() }],
        "scroll-me": [{ "scroll-me": _() }],
        "scroll-mt": [{ "scroll-mt": _() }],
        "scroll-mr": [{ "scroll-mr": _() }],
        "scroll-mb": [{ "scroll-mb": _() }],
        "scroll-ml": [{ "scroll-ml": _() }],
        "scroll-p": [{ "scroll-p": _() }],
        "scroll-px": [{ "scroll-px": _() }],
        "scroll-py": [{ "scroll-py": _() }],
        "scroll-ps": [{ "scroll-ps": _() }],
        "scroll-pe": [{ "scroll-pe": _() }],
        "scroll-pt": [{ "scroll-pt": _() }],
        "scroll-pr": [{ "scroll-pr": _() }],
        "scroll-pb": [{ "scroll-pb": _() }],
        "scroll-pl": [{ "scroll-pl": _() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", M] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [St, Ht, ol] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  _0 = g0(O0);
function $n(...e) {
  return _0(Oh(e));
}
const L0 = Xx,
  $h = x.forwardRef(({ className: e, ...t }, n) =>
    s.jsx(Ch, {
      ref: n,
      className: $n(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
$h.displayName = Ch.displayName;
const M0 = Jx(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Bh = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    s.jsx(Ph, { ref: r, className: $n(M0({ variant: t }), e), ...n }),
  );
Bh.displayName = Ph.displayName;
const D0 = x.forwardRef(({ className: e, ...t }, n) =>
  s.jsx(Ah, {
    ref: n,
    className: $n(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
D0.displayName = Ah.displayName;
const Wh = x.forwardRef(({ className: e, ...t }, n) =>
  s.jsx(zh, {
    ref: n,
    className: $n(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: s.jsx(r0, { className: "h-4 w-4" }),
  }),
);
Wh.displayName = zh.displayName;
const Uh = x.forwardRef(({ className: e, ...t }, n) =>
  s.jsx(Th, { ref: n, className: $n("text-sm font-semibold", e), ...t }),
);
Uh.displayName = Th.displayName;
const Vh = x.forwardRef(({ className: e, ...t }, n) =>
  s.jsx(Rh, { ref: n, className: $n("text-sm opacity-90", e), ...t }),
);
Vh.displayName = Rh.displayName;
function I0() {
  const { toasts: e } = ax();
  return s.jsxs(L0, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return s.jsxs(
          Bh,
          {
            ...i,
            children: [
              s.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && s.jsx(Uh, { children: n }),
                  r && s.jsx(Vh, { children: r }),
                ],
              }),
              o,
              s.jsx(Wh, {}),
            ],
          },
          t,
        );
      }),
      s.jsx($h, {}),
    ],
  });
}
const H0 = ["top", "right", "bottom", "left"],
  fn = Math.min,
  Le = Math.max,
  Gi = Math.round,
  li = Math.floor,
  xt = (e) => ({ x: e, y: e }),
  $0 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  B0 = { start: "end", end: "start" };
function sa(e, t, n) {
  return Le(e, fn(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Fr(e) {
  return e.split("-")[1];
}
function mu(e) {
  return e === "x" ? "y" : "x";
}
function gu(e) {
  return e === "y" ? "height" : "width";
}
function pn(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function vu(e) {
  return mu(pn(e));
}
function W0(e, t, n) {
  n === void 0 && (n = !1);
  const r = Fr(e),
    o = vu(e),
    i = gu(o);
  let l =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (l = qi(l)), [l, qi(l)]);
}
function U0(e) {
  const t = qi(e);
  return [la(e), t, la(t)];
}
function la(e) {
  return e.replace(/start|end/g, (t) => B0[t]);
}
function V0(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Q0(e, t, n, r) {
  const o = Fr(e);
  let i = V0(Mt(e), n === "start", r);
  return (
    o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(la)))),
    i
  );
}
function qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $0[t]);
}
function K0(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Qh(e) {
  return typeof e != "number"
    ? K0(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Yi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function cd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = pn(t),
    l = vu(t),
    a = gu(l),
    u = Mt(t),
    c = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    h = r[a] / 2 - o[a] / 2;
  let y;
  switch (u) {
    case "top":
      y = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      y = { x: d, y: r.y + r.height };
      break;
    case "right":
      y = { x: r.x + r.width, y: p };
      break;
    case "left":
      y = { x: r.x - o.width, y: p };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  switch (Fr(t)) {
    case "start":
      y[l] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      y[l] += h * (n && c ? -1 : 1);
      break;
  }
  return y;
}
const G0 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = n,
    a = i.filter(Boolean),
    u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let c = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: p } = cd(c, r, u),
    h = r,
    y = {},
    w = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: j, fn: m } = a[v],
      {
        x: f,
        y: g,
        data: k,
        reset: b,
      } = await m({
        x: d,
        y: p,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: y,
        rects: c,
        platform: l,
        elements: { reference: e, floating: t },
      });
    ((d = f ?? d),
      (p = g ?? p),
      (y = { ...y, [j]: { ...y[j], ...k } }),
      b &&
        w <= 50 &&
        (w++,
        typeof b == "object" &&
          (b.placement && (h = b.placement),
          b.rects &&
            (c =
              b.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : b.rects),
          ({ x: d, y: p } = cd(c, h, u))),
        (v = -1)));
  }
  return { x: d, y: p, placement: h, strategy: o, middlewareData: y };
};
async function Co(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: l, elements: a, strategy: u } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: p = "floating",
      altBoundary: h = !1,
      padding: y = 0,
    } = Lt(t, e),
    w = Qh(y),
    j = a[h ? (p === "floating" ? "reference" : "floating") : p],
    m = Yi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(j))) == null ||
          n
            ? j
            : j.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: u,
      }),
    ),
    f =
      p === "floating"
        ? { x: r, y: o, width: l.floating.width, height: l.floating.height }
        : l.reference,
    g = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    k = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    b = Yi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: f,
            offsetParent: g,
            strategy: u,
          })
        : f,
    );
  return {
    top: (m.top - b.top + w.top) / k.y,
    bottom: (b.bottom - m.bottom + w.bottom) / k.y,
    left: (m.left - b.left + w.left) / k.x,
    right: (b.right - m.right + w.right) / k.x,
  };
}
const q0 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: l,
          elements: a,
          middlewareData: u,
        } = t,
        { element: c, padding: d = 0 } = Lt(e, t) || {};
      if (c == null) return {};
      const p = Qh(d),
        h = { x: n, y: r },
        y = vu(o),
        w = gu(y),
        v = await l.getDimensions(c),
        j = y === "y",
        m = j ? "top" : "left",
        f = j ? "bottom" : "right",
        g = j ? "clientHeight" : "clientWidth",
        k = i.reference[w] + i.reference[y] - h[y] - i.floating[w],
        b = h[y] - i.reference[y],
        E = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
      let S = E ? E[g] : 0;
      (!S || !(await (l.isElement == null ? void 0 : l.isElement(E)))) &&
        (S = a.floating[g] || i.floating[w]);
      const P = k / 2 - b / 2,
        O = S / 2 - v[w] / 2 - 1,
        z = fn(p[m], O),
        I = fn(p[f], O),
        _ = z,
        W = S - v[w] - I,
        F = S / 2 - v[w] / 2 + P,
        Q = sa(_, F, W),
        $ =
          !u.arrow &&
          Fr(o) != null &&
          F !== Q &&
          i.reference[w] / 2 - (F < _ ? z : I) - v[w] / 2 < 0,
        V = $ ? (F < _ ? F - _ : F - W) : 0;
      return {
        [y]: h[y] + V,
        data: {
          [y]: Q,
          centerOffset: F - Q - V,
          ...($ && { alignmentOffset: V }),
        },
        reset: $,
      };
    },
  }),
  Y0 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: l,
              initialPlacement: a,
              platform: u,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: h,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...j
            } = Lt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = Mt(o),
            f = pn(a),
            g = Mt(a) === a,
            k = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)),
            b = h || (g || !v ? [qi(a)] : U0(a)),
            E = w !== "none";
          !h && E && b.push(...Q0(a, v, w, k));
          const S = [a, ...b],
            P = await Co(t, j),
            O = [];
          let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && O.push(P[m]), p)) {
            const F = W0(o, l, k);
            O.push(P[F[0]], P[F[1]]);
          }
          if (
            ((z = [...z, { placement: o, overflows: O }]),
            !O.every((F) => F <= 0))
          ) {
            var I, _;
            const F = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1,
              Q = S[F];
            if (Q)
              return {
                data: { index: F, overflows: z },
                reset: { placement: Q },
              };
            let $ =
              (_ = z
                .filter((V) => V.overflows[0] <= 0)
                .sort((V, C) => V.overflows[1] - C.overflows[1])[0]) == null
                ? void 0
                : _.placement;
            if (!$)
              switch (y) {
                case "bestFit": {
                  var W;
                  const V =
                    (W = z
                      .filter((C) => {
                        if (E) {
                          const R = pn(C.placement);
                          return R === f || R === "y";
                        }
                        return !0;
                      })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((R) => R > 0)
                          .reduce((R, L) => R + L, 0),
                      ])
                      .sort((C, R) => C[1] - R[1])[0]) == null
                      ? void 0
                      : W[0];
                  V && ($ = V);
                  break;
                }
                case "initialPlacement":
                  $ = a;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function dd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function fd(e) {
  return H0.some((t) => e[t] >= 0);
}
const X0 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Lt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Co(t, { ...o, elementContext: "reference" }),
              l = dd(i, n.reference);
            return {
              data: { referenceHiddenOffsets: l, referenceHidden: fd(l) },
            };
          }
          case "escaped": {
            const i = await Co(t, { ...o, altBoundary: !0 }),
              l = dd(i, n.floating);
            return { data: { escapedOffsets: l, escaped: fd(l) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function J0(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    l = Mt(n),
    a = Fr(n),
    u = pn(n) === "y",
    c = ["left", "top"].includes(l) ? -1 : 1,
    d = i && u ? -1 : 1,
    p = Lt(t, e);
  let {
    mainAxis: h,
    crossAxis: y,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    a && typeof w == "number" && (y = a === "end" ? w * -1 : w),
    u ? { x: y * d, y: h * c } : { x: h * c, y: y * d }
  );
}
const Z0 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: l, middlewareData: a } = t,
            u = await J0(t, e);
          return l === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } };
        },
      }
    );
  },
  e1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: a = {
                fn: (j) => {
                  let { x: m, y: f } = j;
                  return { x: m, y: f };
                },
              },
              ...u
            } = Lt(e, t),
            c = { x: n, y: r },
            d = await Co(t, u),
            p = pn(Mt(o)),
            h = mu(p);
          let y = c[h],
            w = c[p];
          if (i) {
            const j = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              f = y + d[j],
              g = y - d[m];
            y = sa(f, y, g);
          }
          if (l) {
            const j = p === "y" ? "top" : "left",
              m = p === "y" ? "bottom" : "right",
              f = w + d[j],
              g = w - d[m];
            w = sa(f, w, g);
          }
          const v = a.fn({ ...t, [h]: y, [p]: w });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [h]: i, [p]: l } },
          };
        },
      }
    );
  },
  t1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
            { offset: a = 0, mainAxis: u = !0, crossAxis: c = !0 } = Lt(e, t),
            d = { x: n, y: r },
            p = pn(o),
            h = mu(p);
          let y = d[h],
            w = d[p];
          const v = Lt(a, t),
            j =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (u) {
            const g = h === "y" ? "height" : "width",
              k = i.reference[h] - i.floating[g] + j.mainAxis,
              b = i.reference[h] + i.reference[g] - j.mainAxis;
            y < k ? (y = k) : y > b && (y = b);
          }
          if (c) {
            var m, f;
            const g = h === "y" ? "width" : "height",
              k = ["top", "left"].includes(Mt(o)),
              b =
                i.reference[p] -
                i.floating[g] +
                ((k && ((m = l.offset) == null ? void 0 : m[p])) || 0) +
                (k ? 0 : j.crossAxis),
              E =
                i.reference[p] +
                i.reference[g] +
                (k ? 0 : ((f = l.offset) == null ? void 0 : f[p]) || 0) -
                (k ? j.crossAxis : 0);
            w < b ? (w = b) : w > E && (w = E);
          }
          return { [h]: y, [p]: w };
        },
      }
    );
  },
  n1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: l, elements: a } = t,
            { apply: u = () => {}, ...c } = Lt(e, t),
            d = await Co(t, c),
            p = Mt(o),
            h = Fr(o),
            y = pn(o) === "y",
            { width: w, height: v } = i.floating;
          let j, m;
          p === "top" || p === "bottom"
            ? ((j = p),
              (m =
                h ===
                ((await (l.isRTL == null ? void 0 : l.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = p), (j = h === "end" ? "top" : "bottom"));
          const f = v - d.top - d.bottom,
            g = w - d.left - d.right,
            k = fn(v - d[j], f),
            b = fn(w - d[m], g),
            E = !t.middlewareData.shift;
          let S = k,
            P = b;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = g),
            (r = t.middlewareData.shift) != null && r.enabled.y && (S = f),
            E && !h)
          ) {
            const z = Le(d.left, 0),
              I = Le(d.right, 0),
              _ = Le(d.top, 0),
              W = Le(d.bottom, 0);
            y
              ? (P = w - 2 * (z !== 0 || I !== 0 ? z + I : Le(d.left, d.right)))
              : (S =
                  v - 2 * (_ !== 0 || W !== 0 ? _ + W : Le(d.top, d.bottom)));
          }
          await u({ ...t, availableWidth: P, availableHeight: S });
          const O = await l.getDimensions(a.floating);
          return w !== O.width || v !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function js() {
  return typeof window < "u";
}
function Or(e) {
  return Kh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ie(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function kt(e) {
  var t;
  return (t = (Kh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Kh(e) {
  return js() ? e instanceof Node || e instanceof Ie(e).Node : !1;
}
function ut(e) {
  return js() ? e instanceof Element || e instanceof Ie(e).Element : !1;
}
function jt(e) {
  return js() ? e instanceof HTMLElement || e instanceof Ie(e).HTMLElement : !1;
}
function pd(e) {
  return !js() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ie(e).ShadowRoot;
}
function Do(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ct(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function r1(e) {
  return ["table", "td", "th"].includes(Or(e));
}
function ks(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function yu(e) {
  const t = xu(),
    n = ut(e) ? ct(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1,
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function o1(e) {
  let t = hn(e);
  for (; jt(t) && !Nr(t); ) {
    if (yu(t)) return t;
    if (ks(t)) return null;
    t = hn(t);
  }
  return null;
}
function xu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nr(e) {
  return ["html", "body", "#document"].includes(Or(e));
}
function ct(e) {
  return Ie(e).getComputedStyle(e);
}
function bs(e) {
  return ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function hn(e) {
  if (Or(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (pd(e) && e.host) || kt(e);
  return pd(t) ? t.host : t;
}
function Gh(e) {
  const t = hn(e);
  return Nr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : jt(t) && Do(t)
      ? t
      : Gh(t);
}
function Po(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = Gh(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Ie(o);
  if (i) {
    const a = aa(l);
    return t.concat(
      l,
      l.visualViewport || [],
      Do(o) ? o : [],
      a && n ? Po(a) : [],
    );
  }
  return t.concat(o, Po(o, [], n));
}
function aa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qh(e) {
  const t = ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = jt(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    a = Gi(n) !== i || Gi(r) !== l;
  return (a && ((n = i), (r = l)), { width: n, height: r, $: a });
}
function wu(e) {
  return ut(e) ? e : e.contextElement;
}
function ar(e) {
  const t = wu(e);
  if (!jt(t)) return xt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = qh(t);
  let l = (i ? Gi(n.width) : n.width) / r,
    a = (i ? Gi(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: l, y: a }
  );
}
const i1 = xt(0);
function Yh(e) {
  const t = Ie(e);
  return !xu() || !t.visualViewport
    ? i1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function s1(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Ie(e)) ? !1 : t);
}
function Mn(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    i = wu(e);
  let l = xt(1);
  t && (r ? ut(r) && (l = ar(r)) : (l = ar(e)));
  const a = s1(i, n, r) ? Yh(i) : xt(0);
  let u = (o.left + a.x) / l.x,
    c = (o.top + a.y) / l.y,
    d = o.width / l.x,
    p = o.height / l.y;
  if (i) {
    const h = Ie(i),
      y = r && ut(r) ? Ie(r) : r;
    let w = h,
      v = aa(w);
    for (; v && r && y !== w; ) {
      const j = ar(v),
        m = v.getBoundingClientRect(),
        f = ct(v),
        g = m.left + (v.clientLeft + parseFloat(f.paddingLeft)) * j.x,
        k = m.top + (v.clientTop + parseFloat(f.paddingTop)) * j.y;
      ((u *= j.x),
        (c *= j.y),
        (d *= j.x),
        (p *= j.y),
        (u += g),
        (c += k),
        (w = Ie(v)),
        (v = aa(w)));
    }
  }
  return Yi({ width: d, height: p, x: u, y: c });
}
function ju(e, t) {
  const n = bs(e).scrollLeft;
  return t ? t.left + n : Mn(kt(e)).left + n;
}
function Xh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : ju(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function l1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    l = kt(r),
    a = t ? ks(t.floating) : !1;
  if (r === l || (a && i)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    c = xt(1);
  const d = xt(0),
    p = jt(r);
  if (
    (p || (!p && !i)) &&
    ((Or(r) !== "body" || Do(l)) && (u = bs(r)), jt(r))
  ) {
    const y = Mn(r);
    ((c = ar(r)), (d.x = y.x + r.clientLeft), (d.y = y.y + r.clientTop));
  }
  const h = l && !p && !i ? Xh(l, u, !0) : xt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - u.scrollTop * c.y + d.y + h.y,
  };
}
function a1(e) {
  return Array.from(e.getClientRects());
}
function u1(e) {
  const t = kt(e),
    n = bs(e),
    r = e.ownerDocument.body,
    o = Le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + ju(e);
  const a = -n.scrollTop;
  return (
    ct(r).direction === "rtl" && (l += Le(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: l, y: a }
  );
}
function c1(e, t) {
  const n = Ie(e),
    r = kt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    l = r.clientHeight,
    a = 0,
    u = 0;
  if (o) {
    ((i = o.width), (l = o.height));
    const c = xu();
    (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: i, height: l, x: a, y: u };
}
function d1(e, t) {
  const n = Mn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = jt(e) ? ar(e) : xt(1),
    l = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    u = o * i.x,
    c = r * i.y;
  return { width: l, height: a, x: u, y: c };
}
function hd(e, t, n) {
  let r;
  if (t === "viewport") r = c1(e, n);
  else if (t === "document") r = u1(kt(e));
  else if (ut(t)) r = d1(t, n);
  else {
    const o = Yh(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Yi(r);
}
function Jh(e, t) {
  const n = hn(e);
  return n === t || !ut(n) || Nr(n)
    ? !1
    : ct(n).position === "fixed" || Jh(n, t);
}
function f1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Po(e, [], !1).filter((a) => ut(a) && Or(a) !== "body"),
    o = null;
  const i = ct(e).position === "fixed";
  let l = i ? hn(e) : e;
  for (; ut(l) && !Nr(l); ) {
    const a = ct(l),
      u = yu(l);
    (!u && a.position === "fixed" && (o = null),
      (
        i
          ? !u && !o
          : (!u &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Do(l) && !u && Jh(e, l))
      )
        ? (r = r.filter((d) => d !== l))
        : (o = a),
      (l = hn(l)));
  }
  return (t.set(e, r), r);
}
function p1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const l = [
      ...(n === "clippingAncestors"
        ? ks(t)
          ? []
          : f1(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = l[0],
    u = l.reduce(
      (c, d) => {
        const p = hd(t, d, o);
        return (
          (c.top = Le(p.top, c.top)),
          (c.right = fn(p.right, c.right)),
          (c.bottom = fn(p.bottom, c.bottom)),
          (c.left = Le(p.left, c.left)),
          c
        );
      },
      hd(t, a, o),
    );
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top,
  };
}
function h1(e) {
  const { width: t, height: n } = qh(e);
  return { width: t, height: n };
}
function m1(e, t, n) {
  const r = jt(t),
    o = kt(t),
    i = n === "fixed",
    l = Mn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const u = xt(0);
  if (r || (!r && !i))
    if (((Or(t) !== "body" || Do(o)) && (a = bs(t)), r)) {
      const h = Mn(t, !0, i, t);
      ((u.x = h.x + t.clientLeft), (u.y = h.y + t.clientTop));
    } else o && (u.x = ju(o));
  const c = o && !r && !i ? Xh(o, a) : xt(0),
    d = l.left + a.scrollLeft - u.x - c.x,
    p = l.top + a.scrollTop - u.y - c.y;
  return { x: d, y: p, width: l.width, height: l.height };
}
function il(e) {
  return ct(e).position === "static";
}
function md(e, t) {
  if (!jt(e) || ct(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (kt(e) === n && (n = n.ownerDocument.body), n);
}
function Zh(e, t) {
  const n = Ie(e);
  if (ks(e)) return n;
  if (!jt(e)) {
    let o = hn(e);
    for (; o && !Nr(o); ) {
      if (ut(o) && !il(o)) return o;
      o = hn(o);
    }
    return n;
  }
  let r = md(e, t);
  for (; r && r1(r) && il(r); ) r = md(r, t);
  return r && Nr(r) && il(r) && !yu(r) ? n : r || o1(e) || n;
}
const g1 = async function (e) {
  const t = this.getOffsetParent || Zh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: m1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function v1(e) {
  return ct(e).direction === "rtl";
}
const y1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: l1,
  getDocumentElement: kt,
  getClippingRect: p1,
  getOffsetParent: Zh,
  getElementRects: g1,
  getClientRects: a1,
  getDimensions: h1,
  getScale: ar,
  isElement: ut,
  isRTL: v1,
};
function em(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function x1(e, t) {
  let n = null,
    r;
  const o = kt(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function l(a, u) {
    (a === void 0 && (a = !1), u === void 0 && (u = 1), i());
    const c = e.getBoundingClientRect(),
      { left: d, top: p, width: h, height: y } = c;
    if ((a || t(), !h || !y)) return;
    const w = li(p),
      v = li(o.clientWidth - (d + h)),
      j = li(o.clientHeight - (p + y)),
      m = li(d),
      g = {
        rootMargin: -w + "px " + -v + "px " + -j + "px " + -m + "px",
        threshold: Le(0, fn(1, u)) || 1,
      };
    let k = !0;
    function b(E) {
      const S = E[0].intersectionRatio;
      if (S !== u) {
        if (!k) return l();
        S
          ? l(!1, S)
          : (r = setTimeout(() => {
              l(!1, 1e-7);
            }, 1e3));
      }
      (S === 1 && !em(c, e.getBoundingClientRect()) && l(), (k = !1));
    }
    try {
      n = new IntersectionObserver(b, { ...g, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, g);
    }
    n.observe(e);
  }
  return (l(!0), i);
}
function w1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    c = wu(e),
    d = o || i ? [...(c ? Po(c) : []), ...Po(t)] : [];
  d.forEach((m) => {
    (o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n));
  });
  const p = c && a ? x1(c, n) : null;
  let h = -1,
    y = null;
  l &&
    ((y = new ResizeObserver((m) => {
      let [f] = m;
      (f &&
        f.target === c &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var g;
          (g = y) == null || g.observe(t);
        }))),
        n());
    })),
    c && !u && y.observe(c),
    y.observe(t));
  let w,
    v = u ? Mn(e) : null;
  u && j();
  function j() {
    const m = Mn(e);
    (v && !em(v, m) && n(), (v = m), (w = requestAnimationFrame(j)));
  }
  return (
    n(),
    () => {
      var m;
      (d.forEach((f) => {
        (o && f.removeEventListener("scroll", n),
          i && f.removeEventListener("resize", n));
      }),
        p == null || p(),
        (m = y) == null || m.disconnect(),
        (y = null),
        u && cancelAnimationFrame(w));
    }
  );
}
const j1 = Z0,
  k1 = e1,
  b1 = Y0,
  E1 = n1,
  S1 = X0,
  gd = q0,
  N1 = t1,
  C1 = (e, t, n) => {
    const r = new Map(),
      o = { platform: y1, ...n },
      i = { ...o.platform, _c: r };
    return G0(e, t, { ...o, platform: i });
  };
var ki = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Xi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Xi(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Xi(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vd(e, t) {
  const n = tm(e);
  return Math.round(t * n) / n;
}
function sl(e) {
  const t = x.useRef(e);
  return (
    ki(() => {
      t.current = e;
    }),
    t
  );
}
function P1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: a = !0,
      whileElementsMounted: u,
      open: c,
    } = e,
    [d, p] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, y] = x.useState(r);
  Xi(h, r) || y(r);
  const [w, v] = x.useState(null),
    [j, m] = x.useState(null),
    f = x.useCallback((C) => {
      C !== E.current && ((E.current = C), v(C));
    }, []),
    g = x.useCallback((C) => {
      C !== S.current && ((S.current = C), m(C));
    }, []),
    k = i || w,
    b = l || j,
    E = x.useRef(null),
    S = x.useRef(null),
    P = x.useRef(d),
    O = u != null,
    z = sl(u),
    I = sl(o),
    _ = sl(c),
    W = x.useCallback(() => {
      if (!E.current || !S.current) return;
      const C = { placement: t, strategy: n, middleware: h };
      (I.current && (C.platform = I.current),
        C1(E.current, S.current, C).then((R) => {
          const L = { ...R, isPositioned: _.current !== !1 };
          F.current &&
            !Xi(P.current, L) &&
            ((P.current = L),
            Lo.flushSync(() => {
              p(L);
            }));
        }));
    }, [h, t, n, I, _]);
  ki(() => {
    c === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), p((C) => ({ ...C, isPositioned: !1 })));
  }, [c]);
  const F = x.useRef(!1);
  (ki(
    () => (
      (F.current = !0),
      () => {
        F.current = !1;
      }
    ),
    [],
  ),
    ki(() => {
      if ((k && (E.current = k), b && (S.current = b), k && b)) {
        if (z.current) return z.current(k, b, W);
        W();
      }
    }, [k, b, W, z, O]));
  const Q = x.useMemo(
      () => ({ reference: E, floating: S, setReference: f, setFloating: g }),
      [f, g],
    ),
    $ = x.useMemo(() => ({ reference: k, floating: b }), [k, b]),
    V = x.useMemo(() => {
      const C = { position: n, left: 0, top: 0 };
      if (!$.floating) return C;
      const R = vd($.floating, d.x),
        L = vd($.floating, d.y);
      return a
        ? {
            ...C,
            transform: "translate(" + R + "px, " + L + "px)",
            ...(tm($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: L };
    }, [n, a, $.floating, d.x, d.y]);
  return x.useMemo(
    () => ({ ...d, update: W, refs: Q, elements: $, floatingStyles: V }),
    [d, W, Q, $, V],
  );
}
const T1 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? gd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? gd({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  R1 = (e, t) => ({ ...j1(e), options: [e, t] }),
  A1 = (e, t) => ({ ...k1(e), options: [e, t] }),
  z1 = (e, t) => ({ ...N1(e), options: [e, t] }),
  F1 = (e, t) => ({ ...b1(e), options: [e, t] }),
  O1 = (e, t) => ({ ...E1(e), options: [e, t] }),
  _1 = (e, t) => ({ ...S1(e), options: [e, t] }),
  L1 = (e, t) => ({ ...T1(e), options: [e, t] });
var M1 = "Arrow",
  nm = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return s.jsx(Fe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : s.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
nm.displayName = M1;
var D1 = nm;
function I1(e) {
  const [t, n] = x.useState(void 0);
  return (
    Ln(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let l, a;
          if ("borderBoxSize" in i) {
            const u = i.borderBoxSize,
              c = Array.isArray(u) ? u[0] : u;
            ((l = c.inlineSize), (a = c.blockSize));
          } else ((l = e.offsetWidth), (a = e.offsetHeight));
          n({ width: l, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var rm = "Popper",
  [om, im] = vs(rm),
  [Pw, sm] = om(rm),
  lm = "PopperAnchor",
  am = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = sm(lm, n),
      l = x.useRef(null),
      a = at(t, l);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
      }),
      r ? null : s.jsx(Fe.div, { ...o, ref: a })
    );
  });
am.displayName = lm;
var ku = "PopperContent",
  [H1, $1] = om(ku),
  um = x.forwardRef((e, t) => {
    var xn, Eu, Su, Nu, Cu, Pu;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: l = 0,
        arrowPadding: a = 0,
        avoidCollisions: u = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: p = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: y = "optimized",
        onPlaced: w,
        ...v
      } = e,
      j = sm(ku, n),
      [m, f] = x.useState(null),
      g = at(t, (Lr) => f(Lr)),
      [k, b] = x.useState(null),
      E = I1(k),
      S = (E == null ? void 0 : E.width) ?? 0,
      P = (E == null ? void 0 : E.height) ?? 0,
      O = r + (i !== "center" ? "-" + i : ""),
      z =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      I = Array.isArray(c) ? c : [c],
      _ = I.length > 0,
      W = { padding: z, boundary: I.filter(W1), altBoundary: _ },
      {
        refs: F,
        floatingStyles: Q,
        placement: $,
        isPositioned: V,
        middlewareData: C,
      } = P1({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...Lr) =>
          w1(...Lr, { animationFrame: y === "always" }),
        elements: { reference: j.anchor },
        middleware: [
          R1({ mainAxis: o + P, alignmentAxis: l }),
          u &&
            A1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? z1() : void 0,
              ...W,
            }),
          u && F1({ ...W }),
          O1({
            ...W,
            apply: ({
              elements: Lr,
              rects: Tu,
              availableWidth: jm,
              availableHeight: km,
            }) => {
              const { width: bm, height: Em } = Tu.reference,
                Io = Lr.floating.style;
              (Io.setProperty("--radix-popper-available-width", `${jm}px`),
                Io.setProperty("--radix-popper-available-height", `${km}px`),
                Io.setProperty("--radix-popper-anchor-width", `${bm}px`),
                Io.setProperty("--radix-popper-anchor-height", `${Em}px`));
            },
          }),
          k && L1({ element: k, padding: a }),
          U1({ arrowWidth: S, arrowHeight: P }),
          h && _1({ strategy: "referenceHidden", ...W }),
        ],
      }),
      [R, L] = fm($),
      H = wt(w);
    Ln(() => {
      V && (H == null || H());
    }, [V, H]);
    const Z = (xn = C.arrow) == null ? void 0 : xn.x,
      Je = (Eu = C.arrow) == null ? void 0 : Eu.y,
      We = ((Su = C.arrow) == null ? void 0 : Su.centerOffset) !== 0,
      [_r, bt] = x.useState();
    return (
      Ln(() => {
        m && bt(window.getComputedStyle(m).zIndex);
      }, [m]),
      s.jsx("div", {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: V ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: _r,
          "--radix-popper-transform-origin": [
            (Nu = C.transformOrigin) == null ? void 0 : Nu.x,
            (Cu = C.transformOrigin) == null ? void 0 : Cu.y,
          ].join(" "),
          ...(((Pu = C.hide) == null ? void 0 : Pu.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: s.jsx(H1, {
          scope: n,
          placedSide: R,
          onArrowChange: b,
          arrowX: Z,
          arrowY: Je,
          shouldHideArrow: We,
          children: s.jsx(Fe.div, {
            "data-side": R,
            "data-align": L,
            ...v,
            ref: g,
            style: { ...v.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
um.displayName = ku;
var cm = "PopperArrow",
  B1 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  dm = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = $1(cm, r),
      l = B1[i.placedSide];
    return s.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [l]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: s.jsx(D1, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
dm.displayName = cm;
function W1(e) {
  return e !== null;
}
var U1 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var j, m, f;
    const { placement: n, rects: r, middlewareData: o } = t,
      l = ((j = o.arrow) == null ? void 0 : j.centerOffset) !== 0,
      a = l ? 0 : e.arrowWidth,
      u = l ? 0 : e.arrowHeight,
      [c, d] = fm(n),
      p = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      y = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + u / 2;
    let w = "",
      v = "";
    return (
      c === "bottom"
        ? ((w = l ? p : `${h}px`), (v = `${-u}px`))
        : c === "top"
          ? ((w = l ? p : `${h}px`), (v = `${r.floating.height + u}px`))
          : c === "right"
            ? ((w = `${-u}px`), (v = l ? p : `${y}px`))
            : c === "left" &&
              ((w = `${r.floating.width + u}px`), (v = l ? p : `${y}px`)),
      { data: { x: w, y: v } }
    );
  },
});
function fm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var V1 = am,
  Q1 = um,
  K1 = dm,
  [Es, Tw] = vs("Tooltip", [im]),
  bu = im(),
  pm = "TooltipProvider",
  G1 = 700,
  yd = "tooltip.open",
  [q1, hm] = Es(pm),
  mm = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = G1,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      l = x.useRef(!0),
      a = x.useRef(!1),
      u = x.useRef(0);
    return (
      x.useEffect(() => {
        const c = u.current;
        return () => window.clearTimeout(c);
      }, []),
      s.jsx(q1, {
        scope: t,
        isOpenDelayedRef: l,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          (window.clearTimeout(u.current), (l.current = !1));
        }, []),
        onClose: x.useCallback(() => {
          (window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => (l.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
mm.displayName = pm;
var gm = "Tooltip",
  [Rw, Ss] = Es(gm),
  ua = "TooltipTrigger",
  Y1 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ss(ua, n),
      i = hm(ua, n),
      l = bu(n),
      a = x.useRef(null),
      u = at(t, a, o.onTriggerChange),
      c = x.useRef(!1),
      d = x.useRef(!1),
      p = x.useCallback(() => (c.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p],
      ),
      s.jsx(V1, {
        asChild: !0,
        ...l,
        children: s.jsx(Fe.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: u,
          onPointerMove: ue(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: ue(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: ue(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", p, { once: !0 }));
          }),
          onFocus: ue(e.onFocus, () => {
            c.current || o.onOpen();
          }),
          onBlur: ue(e.onBlur, o.onClose),
          onClick: ue(e.onClick, o.onClose),
        }),
      })
    );
  });
Y1.displayName = ua;
var X1 = "TooltipPortal",
  [Aw, J1] = Es(X1, { forceMount: void 0 }),
  Cr = "TooltipContent",
  vm = x.forwardRef((e, t) => {
    const n = J1(Cr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      l = Ss(Cr, e.__scopeTooltip);
    return s.jsx(cu, {
      present: r || l.open,
      children: l.disableHoverableContent
        ? s.jsx(ym, { side: o, ...i, ref: t })
        : s.jsx(Z1, { side: o, ...i, ref: t }),
    });
  }),
  Z1 = x.forwardRef((e, t) => {
    const n = Ss(Cr, e.__scopeTooltip),
      r = hm(Cr, e.__scopeTooltip),
      o = x.useRef(null),
      i = at(t, o),
      [l, a] = x.useState(null),
      { trigger: u, onClose: c } = n,
      d = o.current,
      { onPointerInTransitChange: p } = r,
      h = x.useCallback(() => {
        (a(null), p(!1));
      }, [p]),
      y = x.useCallback(
        (w, v) => {
          const j = w.currentTarget,
            m = { x: w.clientX, y: w.clientY },
            f = ow(m, j.getBoundingClientRect()),
            g = iw(m, f),
            k = sw(v.getBoundingClientRect()),
            b = aw([...g, ...k]);
          (a(b), p(!0));
        },
        [p],
      );
    return (
      x.useEffect(() => () => h(), [h]),
      x.useEffect(() => {
        if (u && d) {
          const w = (j) => y(j, d),
            v = (j) => y(j, u);
          return (
            u.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", v),
            () => {
              (u.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", v));
            }
          );
        }
      }, [u, d, y, h]),
      x.useEffect(() => {
        if (l) {
          const w = (v) => {
            const j = v.target,
              m = { x: v.clientX, y: v.clientY },
              f =
                (u == null ? void 0 : u.contains(j)) ||
                (d == null ? void 0 : d.contains(j)),
              g = !lw(m, l);
            f ? h() : g && (h(), c());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [u, d, l, c, h]),
      s.jsx(ym, { ...e, ref: i })
    );
  }),
  [ew, tw] = Es(gm, { isInside: !1 }),
  nw = dx("TooltipContent"),
  ym = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        ...a
      } = e,
      u = Ss(Cr, n),
      c = bu(n),
      { onClose: d } = u;
    return (
      x.useEffect(
        () => (
          document.addEventListener(yd, d),
          () => document.removeEventListener(yd, d)
        ),
        [d],
      ),
      x.useEffect(() => {
        if (u.trigger) {
          const p = (h) => {
            const y = h.target;
            y != null && y.contains(u.trigger) && d();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [u.trigger, d]),
      s.jsx(uu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: s.jsxs(Q1, {
          "data-state": u.stateAttribute,
          ...c,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            s.jsx(nw, { children: r }),
            s.jsx(ew, {
              scope: n,
              isInside: !0,
              children: s.jsx(Fx, {
                id: u.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
vm.displayName = Cr;
var xm = "TooltipArrow",
  rw = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = bu(n);
    return tw(xm, n).isInside ? null : s.jsx(K1, { ...o, ...r, ref: t });
  });
rw.displayName = xm;
function ow(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function iw(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function sw(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function lw(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const a = t[i].x,
      u = t[i].y,
      c = t[l].x,
      d = t[l].y;
    u > r != d > r && n < ((c - a) * (r - u)) / (d - u) + a && (o = !o);
  }
  return o;
}
function aw(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    uw(t)
  );
}
function uw(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        l = t[t.length - 2];
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        l = n[n.length - 2];
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var cw = mm,
  wm = vm;
const dw = cw,
  fw = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    s.jsx(wm, {
      ref: r,
      sideOffset: t,
      className: $n(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        e,
      ),
      ...n,
    }),
  );
fw.displayName = wm.displayName;
function mn() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState(!1),
    [o] = Jp();
  (x.useEffect(() => {
    const l = () => {
      t(window.scrollY > 20);
    };
    return (
      window.addEventListener("scroll", l),
      () => window.removeEventListener("scroll", l)
    );
  }, []),
    x.useEffect(() => {
      r(!1);
    }, [o]));
  const i = [
    { path: "/is-het-iets-voor-ons", label: "Ik twijfel!" },
    { path: "/waar-begin-ik", label: "Waar begin ik?" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];
  return s.jsx("header", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-background" : "bg-transparent"}`,
    style: { borderBottom: "1px solid #f0f0f0" },
    children: s.jsxs("div", {
      className: "max-w-7xl mx-auto px-6 lg:px-12",
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between h-20",
          children: [
            s.jsx(Ke, {
              href: "/",
              "data-testid": "link-home",
              children: s.jsx("span", {
                className:
                  "font-serif text-base tracking-wide cursor-pointer nav-link",
                style: {
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontSize: "1.4rem",
                  color: "#6B5348",
                  letterSpacing: "0.05em",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1,
                  marginRight: "1.8rem",
                },
                children: "UmmiSchool",
              }),
            }),
            s.jsxs("div", {
              className: "hidden md:flex items-center",
              style: { gap: "2.5rem" },
              children: [
                s.jsx("nav", {
                  className: "flex items-center",
                  style: { gap: "2.5rem" },
                  children: i.map((l) =>
                    s.jsx(
                      Ke,
                      {
                        href: l.path,
                        style: {
                          color: o === l.path ? "#7C6052" : "#4B4643",
                          textDecoration: "none",
                        },
                        children: s.jsx("span", {
                          className: `text-sm font-sans tracking-wide cursor-pointer inline-block nav-link ${o === l.path ? "nav-link-active" : ""}`,
                          style: {
                            color: o === l.path ? "#7C6052" : "#4B4643",
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                          },
                          "data-testid": `link-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`,
                          children: l.label,
                        }),
                      },
                      l.path,
                    ),
                  ),
                }),
                s.jsx(Ke, {
                  href: "/wat-waarom",
                  children: s.jsx("button", {
                    "data-testid": "button-header-wat-is-thuisonderwijs",
                    className: "font-sans transition-colors",
                    style: {
                      backgroundColor: "#D47A54",
                      color: "#ffffff",
                      border: "none",
                      padding: "0.65rem 1.5rem",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: "0.03em",
                      borderRadius: "10px",
                      cursor: "pointer",
                      boxShadow: "none",
                    },
                    onMouseEnter: (l) =>
                      (l.currentTarget.style.backgroundColor = "#C16949"),
                    onMouseLeave: (l) =>
                      (l.currentTarget.style.backgroundColor = "#D47A54"),
                    children: "Wat is thuisonderwijs?",
                  }),
                }),
              ],
            }),
            s.jsx("button", {
              className: "md:hidden p-2",
              onClick: () => r(!n),
              "data-testid": "button-mobile-menu",
              "aria-label": "Toggle menu",
              children: s.jsx("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: n
                  ? s.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    })
                  : s.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
              }),
            }),
          ],
        }),
        n &&
          s.jsx("nav", {
            className: "md:hidden pb-6 pt-2 border-t border-border",
            style: {
              backgroundColor: "#ffffff",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            },
            children: s.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                s.jsx(
                  Ke,
                  {
                    href: "/wat-waarom",
                    "data-testid": "link-mobile-wat-is-thuisonderwijs",
                    children: s.jsx("span", {
                      className: `text-base font-sans block cursor-pointer transition-colors ${o === "/wat-waarom" ? "nav-link-active" : ""}`,
                      style: { color: o === "/wat-waarom" ? "#C1562F" : "#2f2f2f" },
                      children: "Wat is thuisonderwijs?",
                    }),
                  },
                ),
                i.map((l) =>
                  s.jsx(
                    Ke,
                    {
                      href: l.path,
                      "data-testid": `link-mobile-${l.label.toLowerCase().replace(/\s+/g, "-")}`,
                      children: s.jsx("span", {
                        className: `text-base font-sans block cursor-pointer transition-colors ${o === l.path ? "nav-link-active" : ""}`,
                        style: { color: o === l.path ? "#C1562F" : "#2f2f2f" },
                        children: l.label,
                      }),
                    },
                    l.path,
                  ),
                ),
              ],
            }),
          }),
      ],
    }),
  });
}
function pw() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState(!1);
  return s.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background",
    children: [
      s.jsx(mn, {}),
      s.jsx("main", {
        className: "flex-1 flex items-center justify-center",
        style: { padding: "0 24px" },
        children: s.jsxs("div", {
          className: "text-center",
          style: { paddingTop: "140px", paddingBottom: "120px" },
          children: [
            s.jsx("h1", {
              className: "leading-tight",
              style: {
                fontFamily: "'Lora', serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "#2F2A28",
                marginBottom: "1.8rem",
                lineHeight: 1.2,
              },
              "data-testid": "text-title",
              children: "Thuisonderwijs",
            }),
            s.jsxs("div", {
              className: "flex gap-6 justify-center flex-col sm:flex-row",
              style: { marginTop: "2.6rem" },
              children: [
                s.jsx(Ke, {
                  href: "/waar-begin-ik",
                  children: s.jsx("button", {
                    "data-testid": "button-waar-begin-ik",
                    className: "font-sans transition-all",
                    style: {
                      backgroundColor: e ? "#C16949" : "#D47A54",
                      color: "#ffffff",
                      border: "none",
                      padding: "1.2rem 1.8rem",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      letterSpacing: "0.03em",
                      borderRadius: "25px",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(212, 122, 84, 0.2)",
                    },
                    onMouseEnter: () => t(!0),
                    onMouseLeave: () => t(!1),
                    children: "Waar begin ik?",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      s.jsx("footer", {
        className: "py-8 text-center",
        children: s.jsx("p", {
          className: "font-sans",
          style: { fontSize: "12px", color: "#0A0A0A" },
          "data-testid": "text-copyright",
          children: s.jsxs(s.Fragment, {
            children: [
              "© 2025 Ummischool. Alle rechten voorbehouden.",
            ],
          }),
        }),
      }),
    ],
  });
}
function Dn() {
  return s.jsx("footer", {
    className: "py-8 text-center bg-background",
    children: s.jsx("p", {
      className: "font-sans",
      style: { fontSize: "12px", color: "#6E6E6E" },
      "data-testid": "text-copyright",
      children: s.jsxs(s.Fragment, {
        children: "© 2025 Ummischool. Alle rechten voorbehouden.",
      }),
    }),
  });
}
function hw() {
  const [e, t] = x.useState(null),
    n = (o) => {
      t(e === o ? null : o);
    },
    r = [
      {
        id: "wat-is-thuisonderwijs",
        question: "Wat is thuisonderwijs?",
        answer: s.jsxs(s.Fragment, {
          children: [
            s.jsxs("p", {
              className: "mb-4",
              children: [
                "Thuisonderwijs betekent dat ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "ouders hun kind begeleiden" }),
                " bij het leren buiten een reguliere school. Dat gebeurt op een manier die past bij het gezin, met ruimte voor ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "eigen tempo" }),
                ", interesses en dagelijks ritme.",
              ],
            }),
            s.jsxs("p", {
              className: "mb-4",
              children: [
                "Het is een vorm van onderwijs die kinderen meer ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "rust en aandacht" }),
                " kan bieden. Niet als tegenreactie op school, maar als een aanpak die soms beter aansluit.",
              ],
            }),
            s.jsxs("p", {
              className: "font-semibold",
              style: { color: "#4B4643" },
              children: [
                "Kort gezegd: thuisonderwijs is niet minder leren, maar ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "anders leren" }),
                ".",
              ],
            }),
          ],
        }),
      },
      {
        id: "leraar-zijn",
        question: "Moet je een leraar zijn om thuisonderwijs te geven?",
        answer: s.jsxs(s.Fragment, {
          children: [
            s.jsx("p", {
              className: "mb-4 font-semibold",
              style: { color: "#4B4643" },
              children: "Nee. Ouders hoeven geen docent te zijn.",
            }),
            s.jsxs("p", {
              children: [
                "Thuisonderwijs draait niet om school nabootsen, maar om ",
                s.jsx("strong", {
                  children: "aansluiten bij wat een kind nodig heeft",
                }),
                ". Ouders begeleiden en bieden een ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "rijke leeromgeving" }),
                ". Leren kan overal plaatsvinden: in boeken, online, musea, cursussen en dagelijkse situaties.",
              ],
            }),
          ],
        }),
      },
      {
        id: "waarom-kiezen",
        question: "Waarom kiezen sommige gezinnen voor thuisonderwijs?",
        answer: s.jsxs(s.Fragment, {
          children: [
            s.jsxs("p", {
              className: "mb-4",
              children: [
                "Niet alle kinderen leren op dezelfde manier. Sommige kinderen floreren bij meer ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "rust" }),
                ", ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "flexibiliteit" }),
                " en ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "persoonlijke aandacht" }),
                ".",
              ],
            }),
            s.jsxs("p", {
              children: [
                "Thuisonderwijs geeft ruimte om te leren zonder tijdsdruk, in een ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "tempo dat past bij het kind" }),
                ".",
              ],
            }),
          ],
        }),
      },
      {
        id: "mag-dat-wel",
        question: "Mag thuisonderwijs in Nederland?",
        answer: s.jsxs(s.Fragment, {
          children: [
            s.jsx("p", {
              className: "mb-4 font-semibold",
              style: { color: "#4B4643" },
              children: "In bepaalde situaties wel.",
            }),
            s.jsxs("p", {
              className: "mb-3",
              children: [
                "In Nederland is ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "leren verplicht" }),
                ", maar ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "school niet" }),
                ". Thuisonderwijs is mogelijk wanneer:",
              ],
            }),
            s.jsxs("ul", {
              className: "mb-4",
              style: { paddingLeft: "1.5rem", color: "#0A0A0A" },
              children: [
                s.jsxs("li", {
                  className: "mb-3",
                  style: { lineHeight: 1.6 },
                  children: [
                    "• er geen school past bij de ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "levensovertuiging" }),
                    " van het gezin",
                  ],
                }),
                s.jsxs("li", {
                  className: "mb-3",
                  style: { lineHeight: 1.6 },
                  children: [
                    "• een kind om ",
                    s.jsx("strong", {
                      children: "medische of psychische redenen",
                    }),
                    " niet naar school kan",
                  ],
                }),
                s.jsxs("li", {
                  className: "mb-3",
                  style: { lineHeight: 1.6 },
                  children: [
                    "• een gezin een ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "reizend leven" }),
                    " leidt",
                  ],
                }),
              ],
            }),
            s.jsx("p", {
              children:
                "Ouders melden dit bij de gemeente, die het besluit registreert.",
            }),
          ],
        }),
      },
      {
        id: "sociaal-contact",
        question: "Hoe zit het met sociale contacten?",
        answer: s.jsxs(s.Fragment, {
          children: [
            s.jsx("p", {
              className: "mb-4",
              children: s.jsx("strong", {
                children:
                  "Sociale contacten ontstaan op verschillende manieren.",
              }),
            }),
            s.jsxs("p", {
              children: [
                "Kinderen ontmoeten anderen via ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "sport" }),
                ", ",
                s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "thuisonderwijsgroepen" }),
                ", uitstapjes, familie of vrienden. Bij elk gezin ziet dat er anders uit, maar contactmogelijkheden zijn er volop.",
              ],
            }),
          ],
        }),
      },
      {
        id: "mogelijkheden-later",
        question: "Welke mogelijkheden hebben kinderen later?",
        answer: s.jsxs(s.Fragment, {
          children: [
            s.jsx("p", {
              className: "mb-3",
              children: s.jsx("strong", {
                children: "Kinderen die thuis leren kunnen verder via:",
              }),
            }),
            s.jsxs("ul", {
              className: "mb-4",
              style: { paddingLeft: "1.5rem", color: "#0A0A0A" },
              children: [
                s.jsxs("li", {
                  className: "mb-3",
                  style: { lineHeight: 1.6 },
                  children: [
                    "• ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "staatsexamens" }),
                  ],
                }),
                s.jsxs("li", {
                  className: "mb-3",
                  style: { lineHeight: 1.6 },
                  children: [
                    "• ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "vervolgonderwijs" }),
                  ],
                }),
                s.jsxs("li", {
                  className: "mb-3",
                  style: { lineHeight: 1.6 },
                  children: [
                    "• ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "praktijkroutes" }),
                  ],
                }),
                s.jsxs("li", {
                  className: "mb-3",
                  style: { lineHeight: 1.6 },
                  children: [
                    "• werk, ondernemerschap of ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "creatieve paden" }),
                  ],
                }),
              ],
            }),
            s.jsx("p", {
              className: "font-semibold",
              style: { color: "#4B4643" },
              children:
                "Thuisonderwijs biedt een andere route, niet minder mogelijkheden.",
            }),
          ],
        }),
      },
      {
        id: "kosten",
        question: "Zijn er veel kosten aan thuisonderwijs verbonden?",
        answer: s.jsxs(s.Fragment, {
          children: [
            s.jsx("p", {
              className: "mb-4 font-semibold",
              style: { color: "#4B4643" },
              children: "Thuisonderwijs hoeft niet duur te zijn.",
            }),
            s.jsxs("p", {
              children: [
                "Er is veel ",
                s.jsx("strong", {
                  children: "gratis of laagdrempelig materiaal",
                }),
                " beschikbaar: bibliotheken, online bronnen, musea, natuur, thuisonderwijsgroepen en dagelijkse leermomenten.",
              ],
            }),
          ],
        }),
      },
    ];
  return s.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background",
    children: [
      s.jsx(mn, {}),
      s.jsxs("main", {
        className: "flex-1 py-16 px-4 sm:px-6 lg:px-8",
        children: [
          s.jsx("div", {
            className: "hidden lg:block",
            children: s.jsxs("div", {
              className: "max-w-4xl mx-auto",
              children: [
                s.jsx("h1", {
                  style: {
                    fontFamily: "Merriweather, serif",
                    fontSize: "2.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    color: "#2F2A28",
                    marginTop: "7rem",
                    marginBottom: "2.5rem",
                    textAlign: "center",
                  },
                  "data-testid": "text-page-title",
                  children: "Wat is thuisonderwijs?",
                }),
                s.jsx("div", {
                  className: "space-y-4",
                  children: r.map((o) => {
                    const i = e === o.id;
                    return s.jsxs(
                      "div",
                      {
                        style: {
                          backgroundColor: "#ffffff",
                          borderRadius: "20px",
                          padding: "2.5rem",
                          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
                        },
                        "data-testid": `desktop-card-${o.id}`,
                        children: [
                          s.jsxs("button", {
                            onClick: () => n(o.id),
                            className:
                              "w-full text-left font-serif flex items-start justify-between gap-6",
                            style: {
                              color: "#2F2A28",
                              fontFamily: "Merriweather, serif",
                              fontSize: "1.35rem",
                              fontWeight: 700,
                              lineHeight: 1.4,
                              
                              
                              cursor: "pointer",
                              background: "transparent",
                              border: "none",
                              padding: 0,
                              
                              
                              
                            },
                            "aria-expanded": i,
                            "aria-controls": `content-desktop-${o.id}`,
                            "data-testid": `button-desktop-${o.id}`,
                            children: [
                              s.jsx("span", {
                                className: "flex-1 tracking-normal",
                                children: o.question,
                              }),
                              i
                                ? s.jsx(id, {
                                    style: {
                                      width: "32px",
                                      height: "32px",
                                      flexShrink: 0,
                                      color: "#D47A54",
                                      marginTop: "4px",
                                    },
                                  })
                                : s.jsx(sd, {
                                    style: {
                                      width: "32px",
                                      height: "32px",
                                      flexShrink: 0,
                                      color: "#D47A54",
                                      marginTop: "4px",
                                    },
                                  }),
                            ],
                          }),
                          s.jsx("div", {
                            id: `content-desktop-${o.id}`,
                            hidden: !i,
                            "data-testid": `content-desktop-${o.id}`,
                            children:
                              i &&
                              s.jsx("div", {
                                className: "",
                                style: {
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "1.1rem",
                                  lineHeight: 1.8,
                                  color: "#0A0A0A",
                                  marginTop: "1.5rem",
                                },
                                children: o.answer,
                              }),
                          }),
                        ],
                      },
                      o.id,
                    );
                  }),
                }),
              ],
            }),
          }),
          s.jsxs("div", {
            className: "lg:hidden",
            children: [
              s.jsx("h1", {
                style: {
                  fontFamily: "Merriweather, serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#2F2A28",
                  marginBottom: "2rem",
                  textAlign: "center",
                  marginTop: "2rem",
                },
                "data-testid": "text-page-title-mobile",
                children: "Wat is thuisonderwijs?",
              }),
              s.jsx("div", {
                className: "space-y-3",
                children: r.map((o) => {
                  const i = e === o.id;
                  return s.jsxs(
                    "div",
                    {
                      style: {
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                      },
                      "data-testid": `mobile-card-${o.id}`,
                      children: [
                        s.jsxs("button", {
                          onClick: () => n(o.id),
                          className:
                            "w-full text-left font-serif flex items-start justify-between gap-4",
                          style: {
                            color: "#2F2A28",
                            fontFamily: "Merriweather, serif",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            lineHeight: 1.4,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.6rem",
                            cursor: "pointer",
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                          },
                          "aria-expanded": i,
                          "aria-controls": `content-mobile-${o.id}`,
                          "data-testid": `button-mobile-${o.id}`,
                          children: [
                            s.jsx("span", {
                              className: "flex-1 tracking-normal",
                              children: o.question,
                            }),
                            i
                              ? s.jsx(id, {
                                  style: {
                                    width: "20px",
                                    height: "20px",
                                    flexShrink: 0,
                                    color: "#D47A54",
                                    marginTop: "2px",
                                  },
                                })
                              : s.jsx(sd, {
                                  style: {
                                    width: "20px",
                                    height: "20px",
                                    flexShrink: 0,
                                    color: "#D47A54",
                                    marginTop: "2px",
                                  },
                                }),
                          ],
                        }),
                        s.jsx("div", {
                          id: `content-mobile-${o.id}`,
                          hidden: !i,
                          "data-testid": `content-mobile-${o.id}`,
                          children:
                            i &&
                            s.jsx("div", {
                              className: "mt-4",
                              style: {
                                fontFamily: "Inter, sans-serif",
                                fontSize: "0.95rem",
                                lineHeight: 1.8,
                                color: "#0A0A0A",
                              },
                              children: o.answer,
                            }),
                        }),
                      ],
                    },
                    o.id,
                  );
                }),
              }),
            ],
          }),
        ],
      }),
      s.jsx(Dn, {}),
    ],
  });
}
function mw() {
  const [e, t] = x.useState(""),
    n = [
      {
        id: "stap-1",
        title: "Visie & Intentie",
        shortTitle: "Visie & Intentie",
      },
      { id: "stap-2", title: "Juridisch", shortTitle: "Juridisch" },
      {
        id: "stap-3",
        title: "Wat is er te leren?",
        shortTitle: "Wat te leren",
      },
      { id: "stap-4", title: "Methodes", shortTitle: "Methodes" },
      { id: "stap-5", title: "Dagplanning", shortTitle: "Dagplanning" },
      { id: "stap-6", title: "Community", shortTitle: "Community" },
    ],
    r = (o) => {
      t(e === o ? "" : o);
    };
  return s.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background",
    children: [
      s.jsx(mn, {}),
      s.jsx("main", {
        className: "flex-1 pt-20",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24",
          children: [
            s.jsx("h1", {
              className: "leading-tight mb-8 lg:hidden",
              style: {
                fontFamily: "Merriweather, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: "#2F2A28",
                textAlign: "center",
              },
              "data-testid": "text-page-title",
              children: "Waar begin ik?",
            }),
            s.jsx("div", {
              className: "hidden lg:block",
              children: s.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [
                  s.jsx("h1", {
                    className: "leading-tight",
                    style: {
                      fontFamily: "Merriweather, serif",
                      fontSize: "2.75rem",
                      fontWeight: 700,
                      color: "#2F2A28",
                      lineHeight: 1.15,
                      marginBottom: "2.5rem",
                      textAlign: "center",
                    },
                    "data-testid": "text-page-title-desktop",
                    children: "Waar begin ik?",
                  }),
                  s.jsx("div", {
                    className: "space-y-4",
                    children: n.map((o) => {
                      const i = e === o.id;
                      return s.jsxs(
                        "div",
                        {
                          style: {
                            backgroundColor: "#ffffff",
                            borderRadius: "20px",
                            padding: "2.5rem",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                          },
                          "data-testid": `desktop-section-${o.id}`,
                          children: [
                            s.jsxs("button", {
                              onClick: () => r(o.id),
                              className:
                                "w-full text-left flex items-start justify-between gap-6",
                              style: {
                                color: "#2F2A28",
                                fontFamily: "Merriweather, serif",
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                lineHeight: 1.4,
                                cursor: "pointer",
                                background: "transparent",
                                border: "none",
                                padding: 0,
                              },
                              "aria-expanded": i,
                              "aria-controls": `content-desktop-${o.id}`,
                              "data-testid": `button-desktop-${o.id}`,
                              children: [
                                s.jsx("span", {
                                  style: { flex: 1 },
                                  children: o.title,
                                }),
                                s.jsx("svg", {
                                  style: {
                                    width: "32px",
                                    height: "32px",
                                    flexShrink: 0,
                                    color: "#D47A54",
                                    marginTop: "4px",
                                  },
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: i
                                    ? s.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20 12H4",
                                      })
                                    : s.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 4v16m8-8H4",
                                      }),
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              id: `content-desktop-${o.id}`,
                              hidden: !i,
                              style: {
                                marginTop: "1.5rem",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "#0A0A0A",
                              },
                              "data-testid": `content-desktop-${o.id}`,
                              children: [
                                o.id === "stap-1" &&
                                  s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsxs("p", {
                                        className: "mb-4",
                                        style: { fontSize: "1.125rem" },
                                        children: [
                                          s.jsx("strong", {
                                            style: { color: "#4B4643" },
                                            children:
                                              "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
                                          }),
                                          s.jsx("br", {}),
                                          s.jsx("strong", {
                                            style: { color: "#0A0A0A" },
                                            children:
                                              "Daden worden beoordeeld naar hun intenties.",
                                          }),
                                        ],
                                      }),
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Thuisonderwijs begint met weten waarom je het doet. Niet uit reactie, maar uit richting: je wilt je kind opvoeden en laten leren op een manier die past bij jullie geloof, waarden en toekomstplannen.",
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Denk verder dan vandaag",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-4",
                                        children: "Stel jezelf vragen als:",
                                      }),
                                      s.jsxs("ul", {
                                        className: "mb-6",
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Welke ",
                                              s.jsx("strong", {
                                                children: "waarden",
                                              }),
                                              " willen we onze kinderen meegeven?",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Hoe zien we ons gezin over ",
                                              s.jsx("strong", {
                                                children: "vijf of tien jaar",
                                              }),
                                              "?",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Blijven we in Nederland of bereiden we ons voor op ",
                                              s.jsx("strong", {
                                                children: "emigratie",
                                              }),
                                              "?",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Welke ",
                                              s.jsx("strong", {
                                                children: "talen en kennis",
                                              }),
                                              " zijn belangrijk?",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Welk ",
                                              s.jsx("strong", {
                                                children: "diploma of traject",
                                              }),
                                              " past daarbij?",
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Een heldere visie maakt keuzes eenvoudig: wat je aanbiedt, hoe je plant en waar je naartoe werkt.",
                                      }),
                                      s.jsxs("div", {
                                        className: "p-5",
                                        style: {
                                          backgroundColor: "#FAF7F4",
                                          borderRadius: "8px",
                                          border: "1px solid #F4E5DB",
                                        },
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-3",
                                            style: {
                                              color: "#D47A54",
                                              fontSize: "0.95rem",
                                            },
                                            children: "Handige resource",
                                          }),
                                          s.jsx("a", {
                                            href: "https://www.thuisonderwijs.nl/wp-content/uploads/2023/09/Handleiding-schrijf-je-to-plan.pdf",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                              "underline hover:opacity-70",
                                            style: {
                                              color: "#D47A54",
                                              fontSize: "0.95rem",
                                            },
                                            "data-testid": "link-to-plan",
                                            children:
                                              'Handleiding "Schrijf je TO-plan"',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                o.id === "stap-2" &&
                                  s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsxs("p", {
                                        className: "mb-5",
                                        children: [
                                          "In Nederland geldt ",
                                          s.jsx("strong", {
                                            children:
                                              "leerplicht, geen schoolplicht",
                                          }),
                                          ". Je kind moet leren, maar dit hoeft niet op school als je een vrijstelling hebt (artikel 5b – richtingbezwaar).",
                                        ],
                                      }),
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Dit betekent dat er in jouw omgeving geen school is die past bij jullie levensovertuiging. Dit onderbouw je in een brief aan de gemeente.",
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-4",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children:
                                          "Wanneer dien je de vrijstelling in?",
                                      }),
                                      s.jsxs("p", {
                                        className: "mb-5",
                                        children: [
                                          "Je levert de brief ",
                                          s.jsx("strong", {
                                            children: "minimaal één maand",
                                          }),
                                          " voordat je kind leerplichtig wordt in.",
                                          s.jsx("br", {}),
                                          "(Leerplicht begint op de eerste schooldag van de maand nadat een kind 5 jaar wordt.)",
                                        ],
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.1rem",
                                        },
                                        children: "Belangrijke punten",
                                      }),
                                      s.jsxs("ul", {
                                        className: "mb-6",
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Vrijstelling geldt ",
                                              s.jsx("strong", {
                                                children: "per kind",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Elk jaar",
                                              }),
                                              " opnieuw bevestigen",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Bij verhuizing opnieuw melden bij de ",
                                              s.jsx("strong", {
                                                children: "nieuwe gemeente",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        className: "p-5 mb-6",
                                        style: {
                                          backgroundColor: "#FAF7F4",
                                          borderRadius: "8px",
                                          border: "1px solid #F4E5DB",
                                        },
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-4",
                                            style: {
                                              color: "#D47A54",
                                              fontSize: "0.95rem",
                                            },
                                            children: "Nuttige links",
                                          }),
                                          s.jsxs("div", {
                                            className: "space-y-3",
                                            style: { fontSize: "0.9rem" },
                                            children: [
                                              s.jsxs("div", {
                                                children: [
                                                  s.jsx("p", {
                                                    className:
                                                      "font-semibold mb-1",
                                                    style: { color: "#4B4643" },
                                                    children:
                                                      "Voorbeeldbrief & uitleg",
                                                  }),
                                                  s.jsx("a", {
                                                    href: "https://www.thuisonderwijs.nl/wettelijk/5onderb/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                      "underline hover:opacity-70",
                                                    style: { color: "#C1562F" },
                                                    "data-testid":
                                                      "link-voorbeeldbrief",
                                                    children:
                                                      "thuisonderwijs.nl/wettelijk/5onderb",
                                                  }),
                                                ],
                                              }),
                                              s.jsxs("div", {
                                                children: [
                                                  s.jsx("p", {
                                                    className:
                                                      "font-semibold mb-1",
                                                    style: { color: "#4B4643" },
                                                    children:
                                                      "Juridische ondersteuning",
                                                  }),
                                                  s.jsx("a", {
                                                    href: "https://www.facebook.com/groups/tojur/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                      "underline hover:opacity-70",
                                                    style: { color: "#C1562F" },
                                                    "data-testid":
                                                      "link-facebook-juridisch",
                                                    children:
                                                      "Facebook groep TO Juridisch",
                                                  }),
                                                ],
                                              }),
                                              s.jsxs("div", {
                                                children: [
                                                  s.jsx("p", {
                                                    className:
                                                      "font-semibold mb-1",
                                                    style: { color: "#4B4643" },
                                                    children:
                                                      "Uitleg Peter van Zuidam",
                                                  }),
                                                  s.jsx("a", {
                                                    href: "https://thuisonderwijs.net/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                      "underline hover:opacity-70",
                                                    style: { color: "#C1562F" },
                                                    "data-testid": "link-peter",
                                                    children:
                                                      "thuisonderwijs.net",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsxs("p", {
                                        className: "p-4",
                                        style: {
                                          backgroundColor: "#FFF4E6",
                                          borderRadius: "8px",
                                          fontWeight: 500,
                                          fontSize: "0.95rem",
                                        },
                                        children: [
                                          s.jsx("strong", {
                                            children: "Belangrijk:",
                                          }),
                                          " Vrijstelling is een melding, geen aanvraag. Je vraagt geen toestemming; als je aan de voorwaarden voldoet en op tijd bent, is de vrijstelling van kracht.",
                                        ],
                                      }),
                                    ],
                                  }),
                                o.id === "stap-3" &&
                                  s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Bij thuisonderwijs kies je bewust wat je aanbiedt. Het gaat om geloof, gedrag en praktische schoolse vaardigheden.",
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Qur'an en (fusha) Arabisch",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-5",
                                        children:
                                          "Voor veel gezinnen is dit de basis. Hoe eerder een kind Qur'an hoort en Arabische klanken leert kennen, hoe natuurlijker lezen en memoriseren gaat.",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Zelf begeleiden of via een docent — beide is goed. Belangrijk is dat het dagelijks onderdeel wordt van jullie ritme.",
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Adab & Akhlaaq",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-4",
                                        children: "Goed gedrag groeit door:",
                                      }),
                                      s.jsxs("ul", {
                                        className: "mb-6",
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Verhalen",
                                              }),
                                              " van de profeten",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Het goede ",
                                              s.jsx("strong", {
                                                children: "voorbeeld",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Herhaling",
                                              }),
                                              " en consistentie",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Duidelijke ",
                                              s.jsx("strong", {
                                                children: "grenzen",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-4",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Schoolvakken",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-5",
                                        children:
                                          "Je hoeft niets te raden. Gebruik deze twee betrouwbare bronnen:",
                                      }),
                                      s.jsx("div", {
                                        className: "p-5 mb-6",
                                        style: {
                                          backgroundColor: "#FAF7F4",
                                          borderRadius: "8px",
                                          border: "1px solid #F4E5DB",
                                        },
                                        children: s.jsxs("div", {
                                          className: "space-y-4",
                                          style: { fontSize: "0.9rem" },
                                          children: [
                                            s.jsxs("div", {
                                              children: [
                                                s.jsx("p", {
                                                  className:
                                                    "font-semibold mb-1",
                                                  style: { color: "#4B4643" },
                                                  children: "SLO",
                                                }),
                                                s.jsx("p", {
                                                  className: "mb-2",
                                                  style: { color: "#0A0A0A" },
                                                  children:
                                                    "Leerdoelen per leeftijd en leergebied",
                                                }),
                                                s.jsx("a", {
                                                  href: "https://www.slo.nl/thema/meer/jonge-kind/doelen-jonge-kind/",
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  className:
                                                    "underline hover:opacity-70",
                                                  style: { color: "#C1562F" },
                                                  "data-testid": "link-slo",
                                                  children:
                                                    "slo.nl/doelen-jonge-kind",
                                                }),
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              children: [
                                                s.jsx("p", {
                                                  className:
                                                    "font-semibold mb-1",
                                                  style: { color: "#4B4643" },
                                                  children:
                                                    "Van kerndoel tot referentieniveau",
                                                }),
                                                s.jsx("p", {
                                                  style: { color: "#0A0A0A" },
                                                  children:
                                                    "Door Marielle van der Stap. Laat per groep zien hoe de leerstof oploopt.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Praktische vaardigheden",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-4",
                                        children:
                                          "Kinderen leren enorm veel door mee te doen:",
                                      }),
                                      s.jsxs("ul", {
                                        className: "mb-5",
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Aankleden",
                                              }),
                                              " en zelfverzorging",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Opruimen",
                                              }),
                                              " en orde houden",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Tafel dekken",
                                              }),
                                              " en klaarmaken",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Kleine ",
                                              s.jsx("strong", {
                                                children:
                                                  "huishoudelijke taken",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Zelfstandig ",
                                              s.jsx("strong", {
                                                children: "dingen proberen",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("p", {
                                        style: {
                                          fontSize: "0.95rem",
                                          fontStyle: "italic",
                                          color: "#0A0A0A",
                                        },
                                        children:
                                          'Deze "practical life"-activiteiten bouwen concentratie, zelfstandigheid en verantwoordelijkheid op — zonder werkboek.',
                                      }),
                                    ],
                                  }),
                                o.id === "stap-4" &&
                                  s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx("p", {
                                        className: "mb-5",
                                        children:
                                          "Er is niet één juiste manier van thuisonderwijs. Je kiest wat past bij jullie overtuiging, doelen en gezin.",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          'Vrijheid betekent niet "maar wat doen", maar bewust kiezen hoe je kind het best leert.',
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-4",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Veelgebruikte methodes",
                                      }),
                                      s.jsxs("div", {
                                        className: "space-y-4 mb-6",
                                        style: { color: "#0A0A0A" },
                                        children: [
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#4B4643" },
                                                children:
                                                  "Schoolgericht / traditioneel",
                                              }),
                                              s.jsx("p", {
                                                children:
                                                  "Je volgt de vakken van school. Handig voor later doorstromen of examens.",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#4B4643" },
                                                children: "Thematisch leren",
                                              }),
                                              s.jsx("p", {
                                                children:
                                                  "Je kiest een thema (bijv. dieren) en leert daaromheen met boeken, gesprekken en activiteiten.",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#4B4643" },
                                                children: "Montessori-stijl",
                                              }),
                                              s.jsx("p", {
                                                children:
                                                  "Zelfstandig leren, echte materialen, oefenen in eigen tempo.",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#4B4643" },
                                                children:
                                                  "Charlotte Mason / living books",
                                              }),
                                              s.jsx("p", {
                                                children:
                                                  "Korte lessen, rijke boeken, natuurstudie, aandacht voor karakter.",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Methodes combineren",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-4",
                                        children:
                                          "Veel gezinnen mixen wat werkt:",
                                      }),
                                      s.jsxs("ul", {
                                        className: "mb-5",
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Taal",
                                              }),
                                              " schoolgericht → oefenen op speelse manier",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Rekenen",
                                              }),
                                              " uit een boek → toepassen met Montessori-materialen",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Thema's",
                                              }),
                                              " ontdekken via living books zoals Charlotte Mason",
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("p", {
                                        style: {
                                          fontSize: "0.95rem",
                                          fontStyle: "italic",
                                          color: "#0A0A0A",
                                        },
                                        children:
                                          "Zolang je weet waarom je iets kiest en het past bij je kind, werkt alles samen als één geheel.",
                                      }),
                                    ],
                                  }),
                                o.id === "stap-5" &&
                                  s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Thuisonderwijs werkt het beste met rust, ritme en duidelijke ankerpunten. Niet strak, wel herkenbaar.",
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Denk na over",
                                      }),
                                      s.jsxs("ul", {
                                        className: "mb-6",
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Hoeveel ",
                                              s.jsx("strong", {
                                                children: "dagen",
                                              }),
                                              " je wilt lesgeven",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Vaste ",
                                              s.jsx("strong", {
                                                children: "blokken",
                                              }),
                                              " of verdeeld over de dag",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Hoe je ",
                                              s.jsx("strong", {
                                                children:
                                                  "buitentijd, huishouden en rust",
                                              }),
                                              " combineert",
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-4",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Voorbeeld dagritme",
                                      }),
                                      s.jsxs("div", {
                                        className: "space-y-5 mb-6",
                                        children: [
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#C1562F" },
                                                children: "Ochtend",
                                              }),
                                              s.jsxs("ul", {
                                                style: {
                                                  paddingLeft: "1.5rem",
                                                  color: "#0A0A0A",
                                                },
                                                children: [
                                                  s.jsx("li", {
                                                    className: "mb-2",
                                                    children:
                                                      "• Ontbijt & gesprek: dagen van de week, plannen",
                                                  }),
                                                  s.jsxs("li", {
                                                    children: [
                                                      "• Eén ",
                                                      s.jsx("strong", {
                                                        children: "kernvak",
                                                      }),
                                                      " (bijv. rekenen of Nederlands)",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#C1562F" },
                                                children: "Middag",
                                              }),
                                              s.jsxs("ul", {
                                                style: {
                                                  paddingLeft: "1.5rem",
                                                  color: "#0A0A0A",
                                                },
                                                children: [
                                                  s.jsxs("li", {
                                                    className: "mb-2",
                                                    children: [
                                                      "• ",
                                                      s.jsx("strong", {
                                                        children: "Buitentijd",
                                                      }),
                                                      ": wandelen, spelen, frisse lucht",
                                                    ],
                                                  }),
                                                  s.jsxs("li", {
                                                    children: [
                                                      "• Zelfstandig spel of ",
                                                      s.jsx("strong", {
                                                        children:
                                                          "creatieve activiteit",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#C1562F" },
                                                children: "Namiddag",
                                              }),
                                              s.jsxs("ul", {
                                                style: {
                                                  paddingLeft: "1.5rem",
                                                  color: "#0A0A0A",
                                                },
                                                children: [
                                                  s.jsxs("li", {
                                                    className: "mb-2",
                                                    children: [
                                                      "• Korte ",
                                                      s.jsx("strong", {
                                                        children: "reflectie",
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsx("li", {
                                                    children:
                                                      "• Voorlezen of thema-activiteit",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-2",
                                                style: { color: "#C1562F" },
                                                children: "Avond",
                                              }),
                                              s.jsx("ul", {
                                                style: {
                                                  paddingLeft: "1.5rem",
                                                  color: "#0A0A0A",
                                                },
                                                children: s.jsxs("li", {
                                                  children: [
                                                    "• Afsluiten met ",
                                                    s.jsx("strong", {
                                                      children: "Qur'an en dua",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Tips",
                                      }),
                                      s.jsxs("ul", {
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Ochtend = ",
                                              s.jsx("strong", {
                                                children:
                                                  "geconcentreerd leren",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Middag = ",
                                              s.jsx("strong", {
                                                children:
                                                  "bewegen, ontmoeten, buiten",
                                              }),
                                              " zijn",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Gebruik vaste ",
                                              s.jsx("strong", {
                                                children: "ankerpunten",
                                              }),
                                              " (eten, Qur'an, buiten)",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Betrek kinderen bij ",
                                              s.jsx("strong", {
                                                children: "dagelijkse taken",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Rust en herhaling",
                                              }),
                                              " werken beter dan haast",
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• Buitentijd = ",
                                              s.jsx("strong", {
                                                children: "óók leren",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                o.id === "stap-6" &&
                                  s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx("p", {
                                        className: "mb-5",
                                        children:
                                          "Thuisonderwijs hoeft niet eenzaam te zijn. Kinderen hebben vriendjes nodig, en jij hebt steun nodig van ouders die begrijpen hoe het is.",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Gelukkig groeit het aantal gezinnen dat voor thuisonderwijs kiest. Je hoeft niet alles alleen te doen.",
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children:
                                          "Waar vind je andere gezinnen?",
                                      }),
                                      s.jsxs("ul", {
                                        className: "mb-6",
                                        style: {
                                          paddingLeft: "1.5rem",
                                          color: "#0A0A0A",
                                        },
                                        children: [
                                          s.jsxs("li", {
                                            className: "mb-3",
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children: "Facebook-",
                                              }),
                                              " en ",
                                              s.jsx("strong", {
                                                children: "WhatsApp-groepen",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("li", {
                                            style: { lineHeight: 1.6 },
                                            children: [
                                              "• ",
                                              s.jsx("strong", {
                                                children:
                                                  "Sport, moskee, Qur'anlessen",
                                              }),
                                              " en speeltuinen",
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-4",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Wat als je niemand vindt?",
                                      }),
                                      s.jsx("p", {
                                        className: "mb-6",
                                        children:
                                          "Start zelf een WhatsAppgroep voor jouw wijk of stad. Begin klein: een buitendag, een speelafspraak of een ontmoeting voor zusters. Vaak sluiten er vanzelf gezinnen aan die hetzelfde zoeken. Zo groeit een kleine stap uit tot een vaste, hechte groep.",
                                      }),
                                      s.jsx("h3", {
                                        className: "font-semibold mb-4",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "1.125rem",
                                        },
                                        children: "Waarom community helpt",
                                      }),
                                      s.jsx("p", {
                                        children:
                                          "Je kind maakt vrienden, en jij hebt steun van ouders die ook thuisonderwijs geven. Het vraagt soms moeite om een netwerk op te bouwen, maar je zult blij zijn dat je het hebt gedaan — en je kinderen ook.",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        o.id,
                      );
                    }),
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              className: "lg:hidden",
              children: s.jsx("div", {
                className: "space-y-3",
                children: n.map((o) => {
                  const i = e === o.id;
                  return s.jsxs(
                    "div",
                    {
                      style: {
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                      },
                      "data-testid": `mobile-section-${o.id}`,
                      children: [
                        s.jsxs("button", {
                          onClick: () => r(o.id),
                          className:
                            "w-full text-left font-serif flex items-start justify-between gap-4",
                          style: {
                            color: "#2F2A28",
                            fontFamily: "Merriweather, serif",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            lineHeight: 1.4,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.6rem",
                            cursor: "pointer",
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                          },
                          "aria-expanded": i,
                          "aria-controls": `content-mobile-${o.id}`,
                          "data-testid": `button-mobile-${o.id}`,
                          children: [
                            s.jsx("span", {
                              style: { flex: 1 },
                              children: o.title,
                            }),
                            s.jsx("svg", {
                              style: {
                                width: "20px",
                                height: "20px",
                                flexShrink: 0,
                                color: "#D47A54",
                                marginTop: "2px",
                              },
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: i
                                ? s.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M20 12H4",
                                  })
                                : s.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 4v16m8-8H4",
                                  }),
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          id: `content-mobile-${o.id}`,
                          hidden: !i,
                          style: {
                            marginTop: "1.25rem",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.95rem",
                            lineHeight: 1.8,
                            color: "#0A0A0A",
                          },
                          "data-testid": `content-mobile-${o.id}`,
                          children: [
                            o.id === "stap-1" &&
                              s.jsxs(s.Fragment, {
                                children: [
                                  s.jsxs("p", {
                                    className: "mb-4",
                                    style: { fontSize: "1rem" },
                                    children: [
                                      s.jsx("strong", {
                                        style: { color: "#4B4643" },
                                        children:
                                          "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
                                      }),
                                      s.jsx("br", {}),
                                      s.jsx("strong", {
                                        style: { color: "#0A0A0A" },
                                        children:
                                          "Daden worden beoordeeld naar hun intenties.",
                                      }),
                                    ],
                                  }),
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      "Thuisonderwijs begint met weten waarom je het doet. Niet uit reactie, maar uit richting: je wilt je kind opvoeden en laten leren op een manier die past bij jullie geloof, waarden en toekomstplannen.",
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Denk verder dan vandaag",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-3",
                                    children: "Stel jezelf vragen als:",
                                  }),
                                  s.jsxs("ul", {
                                    className: "mb-5",
                                    style: {
                                      paddingLeft: "1.5rem",
                                      color: "#0A0A0A",
                                    },
                                    children: [
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Welke ",
                                          s.jsx("strong", {
                                            children: "waarden",
                                          }),
                                          " willen we onze kinderen meegeven?",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Hoe zien we ons gezin over ",
                                          s.jsx("strong", {
                                            children: "vijf of tien jaar",
                                          }),
                                          "?",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Blijven we in Nederland of bereiden we ons voor op ",
                                          s.jsx("strong", {
                                            children: "emigratie",
                                          }),
                                          "?",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Welke ",
                                          s.jsx("strong", {
                                            children: "talen en kennis",
                                          }),
                                          " zijn belangrijk?",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Welk ",
                                          s.jsx("strong", {
                                            children: "diploma of traject",
                                          }),
                                          " past daarbij?",
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      "Een heldere visie maakt keuzes eenvoudig: wat je aanbiedt, hoe je plant en waar je naartoe werkt.",
                                  }),
                                  s.jsxs("div", {
                                    className: "p-4",
                                    style: {
                                      backgroundColor: "#FAF7F4",
                                      borderRadius: "8px",
                                      border: "1px solid #F4E5DB",
                                    },
                                    children: [
                                      s.jsx("p", {
                                        className: "font-semibold mb-2",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "0.9rem",
                                        },
                                        children: "Handige resource",
                                      }),
                                      s.jsx("a", {
                                        href: "https://www.thuisonderwijs.nl/wp-content/uploads/2023/09/Handleiding-schrijf-je-to-plan.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "underline hover:opacity-70",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "0.9rem",
                                        },
                                        children:
                                          'Handleiding "Schrijf je TO-plan"',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            o.id === "stap-2" &&
                              s.jsxs(s.Fragment, {
                                children: [
                                  s.jsxs("p", {
                                    className: "mb-5",
                                    children: [
                                      "In Nederland geldt ",
                                      s.jsx("strong", {
                                        children:
                                          "leerplicht, geen schoolplicht",
                                      }),
                                      ". Je kind moet leren, maar dit hoeft niet op school als je een vrijstelling hebt (artikel 5b – richtingbezwaar).",
                                    ],
                                  }),
                                  s.jsx("p", {
                                    className: "mb-6",
                                    children:
                                      "Dit betekent dat er in jouw omgeving geen school is die past bij jullie levensovertuiging. Dit onderbouw je in een brief aan de gemeente.",
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-4",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children:
                                      "Wanneer dien je de vrijstelling in?",
                                  }),
                                  s.jsxs("p", {
                                    className: "mb-5",
                                    children: [
                                      "Je levert de brief ",
                                      s.jsx("strong", {
                                        children: "minimaal één maand",
                                      }),
                                      " voordat je kind leerplichtig wordt in.",
                                      s.jsx("br", {}),
                                      "(Leerplicht begint op de eerste schooldag van de maand nadat een kind 5 jaar wordt.)",
                                    ],
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Belangrijke punten",
                                  }),
                                  s.jsxs("ul", {
                                    className: "mb-6",
                                    style: {
                                      paddingLeft: "1.5rem",
                                      color: "#0A0A0A",
                                    },
                                    children: [
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Vrijstelling geldt ",
                                          s.jsx("strong", {
                                            children: "per kind",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Elk jaar",
                                          }),
                                          " opnieuw bevestigen",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Bij verhuizing opnieuw melden bij de ",
                                          s.jsx("strong", {
                                            children: "nieuwe gemeente",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "p-4 mb-6",
                                    style: {
                                      backgroundColor: "#FAF7F4",
                                      borderRadius: "8px",
                                      border: "1px solid #F4E5DB",
                                    },
                                    children: [
                                      s.jsx("p", {
                                        className: "font-semibold mb-3",
                                        style: {
                                          color: "#D47A54",
                                          fontSize: "0.9rem",
                                        },
                                        children: "Nuttige links",
                                      }),
                                      s.jsxs("div", {
                                        className: "space-y-3",
                                        style: { fontSize: "0.9rem" },
                                        children: [
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-1",
                                                style: { color: "#4B4643" },
                                                children:
                                                  "Voorbeeldbrief & uitleg",
                                              }),
                                              s.jsx("a", {
                                                href: "https://www.thuisonderwijs.nl/wettelijk/5onderb/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "underline hover:opacity-70",
                                                style: { color: "#C1562F" },
                                                children:
                                                  "thuisonderwijs.nl/wettelijk/5onderb",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-1",
                                                style: { color: "#4B4643" },
                                                children:
                                                  "Juridische ondersteuning",
                                              }),
                                              s.jsx("a", {
                                                href: "https://www.facebook.com/groups/tojur/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "underline hover:opacity-70",
                                                style: { color: "#C1562F" },
                                                children:
                                                  "Facebook groep TO Juridisch",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className: "font-semibold mb-1",
                                                style: { color: "#4B4643" },
                                                children:
                                                  "Uitleg Peter van Zuidam",
                                              }),
                                              s.jsx("a", {
                                                href: "https://thuisonderwijs.net/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "underline hover:opacity-70",
                                                style: { color: "#C1562F" },
                                                children: "thuisonderwijs.net",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsxs("p", {
                                    className: "p-4",
                                    style: {
                                      backgroundColor: "#FFF4E6",
                                      borderRadius: "8px",
                                      fontWeight: 500,
                                      fontSize: "0.95rem",
                                    },
                                    children: [
                                      s.jsx("strong", {
                                        children: "Belangrijk:",
                                      }),
                                      " Vrijstelling is een melding, geen aanvraag. Je vraagt geen toestemming; als je aan de voorwaarden voldoet en op tijd bent, is de vrijstelling van kracht.",
                                    ],
                                  }),
                                ],
                              }),
                            o.id === "stap-3" &&
                              s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      "Bij thuisonderwijs kies je bewust wat je aanbiedt. Het gaat om geloof, gedrag en praktische schoolse vaardigheden.",
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Qur'an en (fusha) Arabisch",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-4",
                                    children:
                                      "Voor veel gezinnen is dit de basis. Hoe eerder een kind Qur'an hoort en Arabische klanken leert kennen, hoe natuurlijker lezen en memoriseren gaat.",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      "Zelf begeleiden of via een docent — beide is goed. Belangrijk is dat het dagelijks onderdeel wordt van jullie ritme.",
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Adab & Akhlaaq",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-3",
                                    children: "Goed gedrag groeit door:",
                                  }),
                                  s.jsxs("ul", {
                                    className: "mb-5",
                                    style: {
                                      paddingLeft: "1.5rem",
                                      color: "#0A0A0A",
                                    },
                                    children: [
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Verhalen",
                                          }),
                                          " van de profeten",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Het goede ",
                                          s.jsx("strong", {
                                            children: "voorbeeld",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Herhaling",
                                          }),
                                          " en consistentie",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Duidelijke ",
                                          s.jsx("strong", {
                                            children: "grenzen",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Schoolvakken",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-4",
                                    children:
                                      "Je hoeft niets te raden. Gebruik deze twee betrouwbare bronnen:",
                                  }),
                                  s.jsx("div", {
                                    className: "p-4 mb-5",
                                    style: {
                                      backgroundColor: "#FAF7F4",
                                      borderRadius: "8px",
                                      border: "1px solid #F4E5DB",
                                    },
                                    children: s.jsxs("div", {
                                      className: "space-y-3",
                                      style: { fontSize: "0.9rem" },
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("p", {
                                              className: "font-semibold mb-1",
                                              style: { color: "#4B4643" },
                                              children: "SLO",
                                            }),
                                            s.jsx("p", {
                                              className: "mb-2",
                                              style: { color: "#0A0A0A" },
                                              children:
                                                "Leerdoelen per leeftijd en leergebied",
                                            }),
                                            s.jsx("a", {
                                              href: "https://www.slo.nl/thema/meer/jonge-kind/doelen-jonge-kind/",
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              className:
                                                "underline hover:opacity-70",
                                              style: { color: "#C1562F" },
                                              children:
                                                "slo.nl/doelen-jonge-kind",
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("p", {
                                              className: "font-semibold mb-1",
                                              style: { color: "#4B4643" },
                                              children:
                                                "Van kerndoel tot referentieniveau",
                                            }),
                                            s.jsx("p", {
                                              style: { color: "#0A0A0A" },
                                              children:
                                                "Door Marielle van der Stap. Laat per groep zien hoe de leerstof oploopt.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Praktische vaardigheden",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-3",
                                    children:
                                      "Kinderen leren enorm veel door mee te doen:",
                                  }),
                                  s.jsxs("ul", {
                                    className: "mb-4",
                                    style: {
                                      paddingLeft: "1.5rem",
                                      color: "#0A0A0A",
                                    },
                                    children: [
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Aankleden",
                                          }),
                                          " en zelfverzorging",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Opruimen",
                                          }),
                                          " en orde houden",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Tafel dekken",
                                          }),
                                          " en klaarmaken",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Kleine ",
                                          s.jsx("strong", {
                                            children: "huishoudelijke taken",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Zelfstandig ",
                                          s.jsx("strong", {
                                            children: "dingen proberen",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("p", {
                                    style: {
                                      fontSize: "0.9rem",
                                      fontStyle: "italic",
                                      color: "#0A0A0A",
                                    },
                                    children:
                                      'Deze "practical life"-activiteiten bouwen concentratie, zelfstandigheid en verantwoordelijkheid op — zonder werkboek.',
                                  }),
                                ],
                              }),
                            o.id === "stap-4" &&
                              s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx("p", {
                                    className: "mb-4",
                                    children:
                                      "Er is niet één juiste manier van thuisonderwijs. Je kiest wat past bij jullie overtuiging, doelen en gezin.",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      'Vrijheid betekent niet "maar wat doen", maar bewust kiezen hoe je kind het best leert.',
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Veelgebruikte methodes",
                                  }),
                                  s.jsxs("div", {
                                    className: "space-y-4 mb-5",
                                    style: { color: "#0A0A0A" },
                                    children: [
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-2",
                                            style: { color: "#4B4643" },
                                            children:
                                              "Schoolgericht / traditioneel",
                                          }),
                                          s.jsx("p", {
                                            children:
                                              "Je volgt de vakken van school. Handig voor later doorstromen of examens.",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-2",
                                            style: { color: "#4B4643" },
                                            children: "Thematisch leren",
                                          }),
                                          s.jsx("p", {
                                            children:
                                              "Je kiest een thema (bijv. dieren) en leert daaromheen met boeken, gesprekken en activiteiten.",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-2",
                                            style: { color: "#4B4643" },
                                            children: "Montessori-stijl",
                                          }),
                                          s.jsx("p", {
                                            children:
                                              "Zelfstandig leren, echte materialen, oefenen in eigen tempo.",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-2",
                                            style: { color: "#4B4643" },
                                            children:
                                              "Charlotte Mason / living books",
                                          }),
                                          s.jsx("p", {
                                            children:
                                              "Korte lessen, rijke boeken, natuurstudie, aandacht voor karakter.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Methodes combineren",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-3",
                                    children: "Veel gezinnen mixen wat werkt:",
                                  }),
                                  s.jsxs("ul", {
                                    className: "mb-4",
                                    style: {
                                      paddingLeft: "1.5rem",
                                      color: "#0A0A0A",
                                    },
                                    children: [
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "Taal" }),
                                          " schoolgericht → oefenen op speelse manier",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Rekenen",
                                          }),
                                          " uit een boek → toepassen met Montessori-materialen",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Thema's",
                                          }),
                                          " ontdekken via living books zoals Charlotte Mason",
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("p", {
                                    style: {
                                      fontSize: "0.9rem",
                                      fontStyle: "italic",
                                      color: "#0A0A0A",
                                    },
                                    children:
                                      "Zolang je weet waarom je iets kiest en het past bij je kind, werkt alles samen als één geheel.",
                                  }),
                                ],
                              }),
                            o.id === "stap-5" &&
                              s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      "Thuisonderwijs werkt het beste met rust, ritme en duidelijke ankerpunten. Niet strak, wel herkenbaar.",
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Denk na over",
                                  }),
                                  s.jsxs("ul", {
                                    className: "mb-5",
                                    style: {
                                      paddingLeft: "1.5rem",
                                      color: "#0A0A0A",
                                    },
                                    children: [
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Hoeveel ",
                                          s.jsx("strong", {
                                            children: "dagen",
                                          }),
                                          " je wilt lesgeven",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Vaste ",
                                          s.jsx("strong", {
                                            children: "blokken",
                                          }),
                                          " of verdeeld over de dag",
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• Hoe je ",
                                          s.jsx("strong", {
                                            children:
                                              "buitentijd, huishouden en rust",
                                          }),
                                          " combineert",
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Voorbeeld dagritme",
                                  }),
                                  s.jsxs("div", {
                                    className: "space-y-4 mb-5",
                                    children: [
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-2",
                                            style: { color: "#C1562F" },
                                            children: "Ochtend",
                                          }),
                                          s.jsxs("ul", {
                                            style: {
                                              paddingLeft: "1.5rem",
                                              color: "#0A0A0A",
                                            },
                                            children: [
                                              s.jsx("li", {
                                                className: "mb-2",
                                                children:
                                                  "• Ontbijt & gesprek: dagen van de week, plannen",
                                              }),
                                              s.jsxs("li", {
                                                children: [
                                                  "• Eén ",
                                                  s.jsx("strong", {
                                                    children: "kernvak",
                                                  }),
                                                  " (bijv. rekenen of Nederlands)",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-2",
                                            style: { color: "#C1562F" },
                                            children: "Middag",
                                          }),
                                          s.jsxs("ul", {
                                            style: {
                                              paddingLeft: "1.5rem",
                                              color: "#0A0A0A",
                                            },
                                            children: [
                                              s.jsxs("li", {
                                                className: "mb-2",
                                                children: [
                                                  "• ",
                                                  s.jsx("strong", {
                                                    children: "Buitentijd",
                                                  }),
                                                  ": wandelen, spelen, frisse lucht",
                                                ],
                                              }),
                                              s.jsxs("li", {
                                                children: [
                                                  "• Zelfstandig spel of ",
                                                  s.jsx("strong", {
                                                    children:
                                                      "creatieve activiteit",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "font-semibold mb-2",
                                            style: { color: "#C1562F" },
                                            children: "Namiddag",
                                          }),
                                          s.jsxs("ul", {
                                            style: {
                                              paddingLeft: "1.5rem",
                                              color: "#0A0A0A",
                                            },
                                            children: [
                                              s.jsxs("li", {
                                                className: "mb-2",
                                                children: [
                                                  "• Korte ",
                                                  s.jsx("strong", {
                                                    children: "reflectie",
                                                  }),
                                                ],
                                              }),
                                              s.jsx("li", {
                                                children:
                                                  "• Voorlezen of samen luisteren naar Qur'an",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("p", {
                                    className: "mb-4",
                                    style: {
                                      fontSize: "0.9rem",
                                      fontStyle: "italic",
                                      color: "#0A0A0A",
                                    },
                                    children:
                                      "Dit is slechts een voorbeeld. Jullie ritme ontstaat door te doen, en kan elke week anders zijn.",
                                  }),
                                  s.jsxs("div", {
                                    className: "p-4",
                                    style: {
                                      backgroundColor: "#FFF4E6",
                                      borderRadius: "8px",
                                      fontWeight: 500,
                                      fontSize: "0.9rem",
                                    },
                                    children: [
                                      s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "Tip:" }),
                                      " Houd het dagritme eenvoudig en wees mild voor jezelf. Wat vandaag niet lukt, komt morgen wel.",
                                    ],
                                  }),
                                ],
                              }),
                            o.id === "stap-6" &&
                              s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      "Kinderen leren niet alleen van boeken, maar ook van andere kinderen. Groepsactiviteiten helpen sociale vaardigheden te ontwikkelen en geven je kind vriendjes.",
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Waar vind je andere gezinnen?",
                                  }),
                                  s.jsxs("ul", {
                                    className: "mb-5",
                                    style: {
                                      paddingLeft: "1.5rem",
                                      color: "#0A0A0A",
                                    },
                                    children: [
                                      s.jsxs("li", {
                                        className: "mb-3",
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children: "Facebook-",
                                          }),
                                          " en ",
                                          s.jsx("strong", {
                                            children: "WhatsApp-groepen",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("li", {
                                        style: { lineHeight: 1.6 },
                                        children: [
                                          "• ",
                                          s.jsx("strong", {
                                            children:
                                              "Sport, moskee, Qur'anlessen",
                                          }),
                                          " en speeltuinen",
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Wat als je niemand vindt?",
                                  }),
                                  s.jsx("p", {
                                    className: "mb-5",
                                    children:
                                      "Start zelf een WhatsAppgroep voor jouw wijk of stad. Begin klein: een buitendag, een speelafspraak of een ontmoeting voor zusters. Vaak sluiten er vanzelf gezinnen aan die hetzelfde zoeken. Zo groeit een kleine stap uit tot een vaste, hechte groep.",
                                  }),
                                  s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    style: {
                                      color: "#D47A54",
                                      fontSize: "1.1rem",
                                    },
                                    children: "Waarom community helpt",
                                  }),
                                  s.jsx("p", {
                                    children:
                                      "Je kind maakt vrienden, en jij hebt steun van ouders die ook thuisonderwijs geven. Het vraagt soms moeite om een netwerk op te bouwen, maar je zult blij zijn dat je het hebt gedaan — en je kinderen ook.",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    o.id,
                  );
                }),
              }),
            }),
          ],
        }),
      }),
      s.jsx(Dn, {}),
    ],
  });
}
function xd() {
  const [e, t] = x.useState(""),
    r = [
      {
        id: "persoonlijke-twijfels",
        title: "Persoonlijke twijfels",
        items: [
          {
            id: "geen-lerares",
            question: "Ik ben geen lerares. Kan ik dit wel?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4 font-semibold",
                  style: { color: "#4B4643" },
                  children:
                    "Ja. Je hebt geen onderwijsdiploma nodig om je kind goed te begeleiden.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Wat telt, is dat je ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "betrouwbare materialen" }),
                    " gebruikt, je voorbereidt en ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "betrokken" }),
                    " blijft.",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Binnen de thuisonderwijsgemeenschap is veel ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "kennis en ondersteuning" }),
                    " te vinden.",
                  ],
                }),
                s.jsx("p", {
                  children:
                    "Met tijd, motivatie en zelfstudie kun je onderwijs bieden dat past bij jullie gezin.",
                }),
              ],
            }),
          },
          {
            id: "kind-tekort",
            question: "Doe ik mijn kind niet tekort?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4 font-semibold",
                  style: { color: "#4B4643" },
                  children:
                    "Niet wanneer je betrokken blijft en bereid bent om te leren als ouder.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Thuisonderwijs is een ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "bewuste keuze" }),
                    ", geen gok.",
                  ],
                }),
                s.jsxs("p", {
                  children: [
                    "Als je openstaat voor groei, hulp zoekt wanneer dat nodig is en zorgt voor een ",
                    s.jsx("strong", {
                      children: "veilige, liefdevolle omgeving",
                    }),
                    ", krijgt je kind een ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "stevige basis" }),
                    ".",
                  ],
                }),
              ],
            }),
          },
          {
            id: "familie-begrijpt-niet",
            question: "Wat als familie het niet begrijpt?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4",
                  children: "Dat komt vaak voor.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Leg rustig uit waarom je deze keuze maakt, maar voel ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "geen druk" }),
                    " om iedereen te overtuigen.",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Je hebt ",
                    s.jsx("strong", {
                      children: "geen goedkeuring van anderen",
                    }),
                    " nodig om te kiezen wat bij jullie past.",
                  ],
                }),
                s.jsx("p", {
                  className: "font-semibold",
                  children:
                    "Blijf vriendelijk, maar laat je koers niet bepalen door de mening van anderen.",
                }),
              ],
            }),
          },
          {
            id: "partner-steunt-niet",
            question: "Wat als mijn partner het niet steunt?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Dat vraagt ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "tijd, gesprekken" }),
                    " en ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "wederzijds begrip" }),
                    ".",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Thuisonderwijs werkt het beste wanneer ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "beide ouders" }),
                    " achter de keuze staan.",
                  ],
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children:
                    "Deel informatie, luister naar zorgen en betrek elkaar bij het proces.",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children:
                    "Gesprekken met andere gezinnen kan helpen om een eerlijk beeld te krijgen.",
                }),
                s.jsx("p", {
                  className: "font-semibold",
                  children: "Met openheid groeit vaak ook vertrouwen.",
                }),
              ],
            }),
          },
          {
            id: "combineren-met-werk",
            question: "Hoe combineer je thuisonderwijs met werk?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4",
                  children: "Dat verschilt per gezin.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "Voltijd werken" }),
                    " naast thuisonderwijs is meestal lastig.",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    s.jsx("strong", {
                      children: "Deeltijdwerk, thuiswerken of ondernemen",
                    }),
                    " biedt vaak meer ruimte.",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Het vraagt planning, ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "realistische verwachtingen" }),
                    " en soms ook financiële aanpassing.",
                  ],
                }),
                s.jsx("p", {
                  children: "Kijk wat haalbaar is binnen jullie situatie.",
                }),
              ],
            }),
          },
          {
            id: "geen-zin-leren",
            question: "Wat als mijn kind geen zin heeft om te leren?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", { className: "mb-4", children: "Dat is normaal." }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Als ouder geef je ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "richting" }),
                    ": wat er geleerd wordt, waarom en met welk doel.",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Het helpt om het ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "waarom duidelijk" }),
                    " te maken, bijvoorbeeld dat lezen, schrijven en rekenen nodig zijn voor ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "zelfstandigheid" }),
                    " of voor het verdiepen van het geloof.",
                  ],
                }),
                s.jsx("p", {
                  className: "font-semibold",
                  children: "Duidelijkheid en structuur blijven belangrijk.",
                }),
              ],
            }),
          },
        ],
      },
      {
        id: "praktische-vragen",
        title: "Praktische vragen",
        items: [
          {
            id: "meerdere-kinderen",
            question: "Wat als ik meerdere kinderen heb?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Dat vraagt ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "organisatie" }),
                    ", maar het kan goed werken.",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Jonge kinderen leren vooral door ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "spelen, kijken en meedoen" }),
                    ".",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Oudere kinderen kun je ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "zelfstandigheid" }),
                    " aanleren en laten helpen bij jongere broertjes of zusjes.",
                  ],
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children:
                    "Niet alles hoeft tegelijk: de één leert terwijl de ander speelt, leest of een taak doet.",
                }),
                s.jsx("p", {
                  className: "font-semibold",
                  children:
                    "Dagelijkse bezigheden vormen ook leermomenten in verantwoordelijkheid, samenwerking en discipline.",
                }),
              ],
            }),
          },
          {
            id: "omgaan-met-anderen",
            question: "Leren ze nog omgaan met anderen?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4 font-semibold",
                  style: { color: "#4B4643" },
                  children:
                    "Ja. Sociale vaardigheden ontstaan op veel manieren.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Thuisonderwijs vraagt wél ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "initiatief" }),
                    ": je organiseert ontmoetingen, activiteiten, sport, familiebezoek of gezamenlijke leermomenten.",
                  ],
                }),
                s.jsxs("p", {
                  children: [
                    "Veel kinderen bouwen hierdoor juist ",
                    s.jsx("strong", {
                      children: "diepere en natuurlijkere vriendschappen",
                    }),
                    " op.",
                  ],
                }),
              ],
            }),
          },
          {
            id: "islamitische-school",
            question: "Waarom niet gewoon een islamitische school?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4",
                  children:
                    "Een islamitische school is een goede optie voor veel gezinnen.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Thuisonderwijs is een ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "andere mogelijkheid" }),
                    ".",
                  ],
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Het biedt meer ruimte om islam op een ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "natuurlijke manier" }),
                    " door de dag heen te verweven: in gesprekken, in omgangsvormen, in gedrag en in praktische situaties.",
                  ],
                }),
                s.jsx("p", {
                  className: "font-semibold",
                  children:
                    "Welke vorm je kiest, hangt af van wat het beste past bij jullie waarden, ritme en behoeften.",
                }),
              ],
            }),
          },
          {
            id: "echte-wereld",
            question:
              "Bereidt thuisonderwijs kinderen voor op de echte wereld?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4 font-semibold",
                  style: { color: "#4B4643" },
                  children:
                    "Ja. De echte wereld bestaat niet uit één leeftijdsgroep of vaste schema's.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Kinderen leren ",
                    s.jsx("strong", {
                      children: "plannen, samenwerken, problemen oplossen",
                    }),
                    " en ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "verantwoordelijkheid nemen" }),
                    ".",
                  ],
                }),
                s.jsxs("p", {
                  children: [
                    "Ze leren niet minder, maar op een ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "rustiger tempo" }),
                    " dat beter aansluit bij hun ontwikkeling.",
                  ],
                }),
              ],
            }),
          },
          {
            id: "niet-geisoleerd",
            question: "Hoe voorkom ik dat we geïsoleerd raken?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4 font-semibold",
                  style: { color: "#4B4643" },
                  children: "Door actief te blijven.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Zoek ",
                    s.jsx("strong", {
                      children: "contact met andere gezinnen",
                    }),
                    ", sluit aan bij sport, clubjes, uitstapjes of lokale groepen.",
                  ],
                }),
                s.jsxs("p", {
                  children: [
                    "Ook online zijn er ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "gemeenschappen" }),
                    " waar ouders elkaar steunen en ideeën delen.",
                  ],
                }),
              ],
            }),
          },
          {
            id: "niet-lukt-stoppen",
            question: "Wat als het niet lukt of we willen stoppen?",
            answer: s.jsxs(s.Fragment, {
              children: [
                s.jsx("p", {
                  className: "mb-4",
                  children: "Situaties kunnen veranderen, en dat is oké.",
                }),
                s.jsx("p", {
                  className: "mb-4",
                  children: "Een kind kan altijd weer naar school.",
                }),
                s.jsxs("p", {
                  className: "mb-4",
                  children: [
                    "Let er wel op dat het ",
                    s.jsx("strong", { style: { fontWeight: 600, color: "#3F3A37" }, children: "juridisch lastiger" }),
                    " is om vrijstelling te krijgen wanneer een kind eerder op school heeft gezeten.",
                  ],
                }),
                s.jsx("p", {
                  className: "font-semibold",
                  children:
                    "Denk daarom goed na voordat je begint en informeer je goed over de regels.",
                }),
              ],
            }),
          },
        ],
      },
    ].flatMap((i) => i.items.map((l) => ({ ...l, sectionTitle: i.title }))),
    o = (i) => {
      t(e === i ? "" : i);
    };
  return s.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background",
    children: [
      s.jsx(mn, {}),
      s.jsx("main", {
        className: "flex-1 pt-20",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24",
          children: [
            s.jsx("h1", {
              className: "leading-tight mb-8 lg:hidden",
              style: {
                fontFamily: "Merriweather, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: "#2F2A28",
                textAlign: "center",
              },
              "data-testid": "text-page-title",
              children: "Ik twijfel!",
            }),
            s.jsx("div", {
              className: "hidden lg:block",
              children: s.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [
                  s.jsx("h1", {
                    className: "leading-tight",
                    style: {
                      fontFamily: "Merriweather, serif",
                      fontSize: "2.75rem",
                      fontWeight: 700,
                      color: "#2F2A28",
                      lineHeight: 1.15,
                      marginBottom: "2.5rem",
                      textAlign: "center",
                    },
                    "data-testid": "text-page-title-desktop",
                    children: "Ik twijfel!",
                  }),
                  s.jsx("div", {
                    className: "space-y-4",
                    children: r.map((i) => {
                      const l = e === i.id;
                      return s.jsxs(
                        "div",
                        {
                          style: {
                            backgroundColor: "#ffffff",
                            borderRadius: "20px",
                            padding: "2.5rem",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                          },
                          "data-testid": `desktop-question-${i.id}`,
                          children: [
                            s.jsxs("button", {
                              onClick: () => o(i.id),
                              className:
                                "w-full text-left flex items-start justify-between gap-6",
                              style: {
                                color: "#2F2A28",
                                fontFamily: "Merriweather, serif",
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                lineHeight: 1.4,
                                cursor: "pointer",
                                background: "transparent",
                                border: "none",
                                padding: 0,
                              },
                              "aria-expanded": l,
                              "aria-controls": `content-desktop-${i.id}`,
                              "data-testid": `button-desktop-${i.id}`,
                              children: [
                                s.jsx("span", {
                                  style: { flex: 1 },
                                  children: i.question,
                                }),
                                s.jsx("svg", {
                                  style: {
                                    width: "32px",
                                    height: "32px",
                                    flexShrink: 0,
                                    color: "#D47A54",
                                    marginTop: "4px",
                                  },
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: l
                                    ? s.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20 12H4",
                                      })
                                    : s.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 4v16m8-8H4",
                                      }),
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              id: `content-desktop-${i.id}`,
                              hidden: !l,
                              style: {
                                marginTop: "1.5rem",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "#0A0A0A",
                              },
                              "data-testid": `content-desktop-${i.id}`,
                              children: i.answer,
                            }),
                          ],
                        },
                        i.id,
                      );
                    }),
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              className: "lg:hidden",
              children: s.jsx("div", {
                className: "space-y-3",
                children: r.map((i) => {
                  const l = e === i.id;
                  return s.jsxs(
                    "div",
                    {
                      style: {
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                      },
                      "data-testid": `mobile-question-${i.id}`,
                      children: [
                        s.jsxs("button", {
                          onClick: () => o(i.id),
                          className:
                            "w-full text-left font-serif flex items-start justify-between gap-4",
                          style: {
                            color: "#2F2A28",
                            fontFamily: "Merriweather, serif",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            lineHeight: 1.4,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.6rem",
                            cursor: "pointer",
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                          },
                          "aria-expanded": l,
                          "aria-controls": `content-mobile-${i.id}`,
                          "data-testid": `button-mobile-${i.id}`,
                          children: [
                            s.jsx("span", {
                              style: { flex: 1 },
                              children: i.question,
                            }),
                            s.jsx("svg", {
                              style: {
                                width: "20px",
                                height: "20px",
                                flexShrink: 0,
                                color: "#D47A54",
                                marginTop: "2px",
                              },
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l
                                ? s.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M20 12H4",
                                  })
                                : s.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 4v16m8-8H4",
                                  }),
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          id: `content-mobile-${i.id}`,
                          hidden: !l,
                          style: {
                            marginTop: "1.25rem",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.95rem",
                            lineHeight: 1.8,
                            color: "#0A0A0A",
                          },
                          "data-testid": `content-mobile-${i.id}`,
                          children: i.answer,
                        }),
                      ],
                    },
                    i.id,
                  );
                }),
              }),
            }),
          ],
        }),
      }),
      s.jsx(Dn, {}),
    ],
  });
}
function gw({ post: e }) {
  return s.jsx(Ke, {
    href: `/blog/${e.slug}`,
    className: "block",
    "data-testid": `link-featured-${e.id}`,
    children: s.jsxs("article", {
      className: "group cursor-pointer",
      style: {
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
        padding: "2.5rem 2rem",
      },
      "data-testid": `card-blog-${e.id}`,
      children: [
        s.jsx("div", {
          className: "mb-6 overflow-hidden",
          style: { borderRadius: "8px", marginTop: "0.5rem" },
          children: s.jsx("img", {
            src: e.imageUrl,
            alt: e.title,
            className: "w-full h-auto",
            "data-testid": `img-featured-${e.id}`,
          }),
        }),
        s.jsxs("div", {
          className: "space-y-4",
          children: [
            s.jsx("h3", {
              className: "font-serif text-3xl lg:text-4xl leading-tight",
              style: { color: "#4B4643" },
              "data-testid": `text-featured-title-${e.id}`,
              children: e.title,
            }),
            s.jsx("p", {
              className: "font-sans leading-relaxed",
              style: { color: "#4B4643" },
              "data-testid": `text-featured-excerpt-${e.id}`,
              children: e.excerpt,
            }),
            s.jsx("div", {
              className: "pt-2",
              children: s.jsx("span", {
                className: "text-sm font-sans",
                style: { color: "#A5672B" },
                children: "Lees verder →",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const vw = [
  {
    id: "1",
    title: "Jouw Pad, Niet dat van de Massa",
    excerpt:
      "In deze tijd praat iedereen. Iedereen adviseert, bekritiseert, vergelijkt en vult in. Soms lijkt het alsof meningen luider zijn geworden dan wijsheid. En precies in zo'n wereld is het gemakkelijk om te twijfelen aan een keuze die niet mainstream is, zoals thuisonderwijs.",
    slug: "jouw-pad-niet-dat-van-de-massa",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Dagstart",
    excerpt:
      "Een dagstart is een kort en rustig moment waarop je samen de dag opent. Het is een bewust begin van de ochtend: eerst verbinding, daarna duidelijkheid over wat er komt.",
    slug: "dagstart",
    imageUrl:
      "https://images.unsplash.com/photo-1507842621343-583f20270319?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Jouw Nieuwe Post",
    excerpt:
      "Dit is een voorbeeld van hoe je zelf een blog post kunt toevoegen. Vervang deze titel, excerpt en afbeelding met jouw eigen content!",
    slug: "jouw-nieuwe-post",
    imageUrl:
      "https://images.unsplash.com/photo-1507842621343-583f20270319?w=800&h=600&fit=crop",
  },
];
function yw() {
  return s.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background",
    children: [
      s.jsx(mn, {}),
      s.jsx("main", {
        className: "flex-1 pt-20",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24",
          children: [
            s.jsxs("header", {
              className: "mb-12 text-center",
              children: [
                s.jsx("h1", {
                  className: "font-serif leading-tight mb-4",
                  style: {
                    color: "#2F2A28",
                    fontSize: "2.75rem",
                    fontWeight: 700,
                  },
                  "data-testid": "text-page-title",
                  children: "Blog",
                }),
                s.jsx("p", {
                  className: "font-serif text-xl italic",
                  style: { color: "#0A0A0A" },
                  children: "wij leren thuis",
                }),
              ],
            }),
            s.jsx("div", {
              className: "max-w-3xl mx-auto",
              children: s.jsx("div", {
                className: "space-y-12",
                children: vw.map((e) => s.jsx(gw, { post: e }, e.id)),
              }),
            }),
          ],
        }),
      }),
      s.jsx(Dn, {}),
    ],
  });
}
const xw = {
  "jouw-pad-niet-dat-van-de-massa": {
    title: "Jouw Pad, Niet dat van de Massa",
    category: "Reflectie",
    date: "2024-11-15",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=800&h=600&fit=crop",
    highlights: [
      "Vertrouw op je eigen keuzes, ook als anderen het niet begrijpen",
      "Thuisonderwijs biedt rust, diepgang en aandacht voor wie je kind werkelijk is",
      "Jij kent je kind het beste - volg je innerlijke wijsheid",
    ],
    content: [
      "In deze tijd praat iedereen. Iedereen adviseert, bekritiseert, vergelijkt en vult in. Soms lijkt het alsof meningen luider zijn geworden dan wijsheid. En precies in zo'n wereld is het gemakkelijk om te twijfelen aan een keuze die niet mainstream is, zoals thuisonderwijs.",
      "Maar wat als het niet gaat om wat anderen vinden? Wat als het gaat om wat jij diep van binnen weet dat goed is voor jouw kind?",
      "Thuisonderwijs is niet voor iedereen. Dat hoeft ook niet. Maar voor sommige gezinnen is het de mooiste, meest passende weg. Een weg die rust biedt, diepgang, aandacht. Een weg die ruimte maakt voor wie je kind werkelijk is.",
      "Het is oké om je eigen pad te kiezen. Ook al begrijpt niet iedereen het. Ook al zijn er vragen en twijfels van buitenaf. Jij kent je kind. Jij ziet wat werkt en wat niet werkt.",
      "Vertrouw daarop. Vertrouw op jezelf. En blijf lopen op het pad dat voor jullie goed voelt, ook al loopt de massa een andere kant op.",
    ],
  },
  dagstart: {
    title: "Dagstart",
    category: "Praktisch",
    date: "2024-11-10",
    imageUrl:
      "https://images.unsplash.com/photo-1507842621343-583f20270319?w=800&h=600&fit=crop",
    highlights: [
      "Begin de dag samen met een rustig moment van verbinding",
      "Tien minuten is vaak genoeg voor een betekenisvolle dagstart",
      "Bewust aanwezig zijn helpt de hele dag anders aanvoelen",
    ],
    content: [
      "Een dagstart is een kort en rustig moment waarop je samen de dag opent. Het is een bewust begin van de ochtend: eerst verbinding, daarna duidelijkheid over wat er komt.",
      "Bij ons begint de dag vaak met een kopje thee, een gesprek over hoe iedereen zich voelt, en een kort moment om stil te staan bij wat we die dag gaan doen. Soms lezen we een kort verhaal, soms kijken we samen naar buiten en praten we over het weer of de seizoenen.",
      "Het hoeft niet lang te duren. Tien minuten is vaak genoeg. Het gaat om de intentie: we starten samen, we zijn even bij elkaar, en daarna gaan we aan de slag.",
      "Deze dagstart geeft rust en richting. Het helpt kinderen om zich veilig en gezien te voelen voordat de dag echt begint. En het helpt ons als ouders om bewust aanwezig te zijn, in plaats van meteen in de hectiek te schieten.",
      "Probeer het eens. Begin de dag samen, met rust en aandacht. Je zult merken dat de hele dag anders aanvoelt.",
    ],
  },
  "iets-anders": {
    title: "Rahma",
    category: "Geenidee",
    date: "2025-11-29",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-696ce0213ce0?w=800&h=600&fit=crop",
    highlights: [
      "Ja",
      "Yeap",
      "Yip",
    ],
    content: [
      "Er is niet zoveel content.",
      "Maar wat als het niet gaat om wat anderen vinden? Wat als het gaat om wat jij diep van binnen weet dat goed is voor jouw kind?",
      "Thuisonderwijs is niet voor iedereen. Dat hoeft ook niet. Maar voor sommige gezinnen is het de mooiste, meest passende weg. Een weg die rust biedt, diepgang, aandacht. Een weg die ruimte maakt voor wie je kind werkelijk is.",
      "Het is oké om je eigen pad te kiezen. Ook al begrijpt niet iedereen het. Ook al zijn er vragen en twijfels van buitenaf. Jij kent je kind. Jij ziet wat werkt en wat niet werkt.",
      "Vertrouw daarop. Vertrouw op jezelf. En blijf lopen op het pad dat voor jullie goed voelt, ook al loopt de massa een andere kant op.",
    ],
  },
};
function ww() {
  const [, e] = Ny("/blog/:slug"),
    t = (e == null ? void 0 : e.slug) || "",
    n = xw[t],
    [r, o] = x.useState(!1),
    i = () => {
      const a = window.location.href;
      navigator.clipboard.writeText(a).then(() => {
        (o(!0), setTimeout(() => o(!1), 2e3));
      });
    },
    l = () => {
      const a = window.location.href,
        u = n ? `${n.title} - ${a}` : a,
        c = `https://wa.me/?text=${encodeURIComponent(u)}`;
      window.open(c, "_blank");
    };
  return n
    ? s.jsxs("div", {
        className: "min-h-screen flex flex-col bg-background",
        children: [
          s.jsx(mn, {}),
          s.jsx("main", {
            className: "flex-1 pt-20",
            children: s.jsx("div", {
              className: "max-w-4xl mx-auto px-8 lg:px-16 py-16 lg:py-24",
              children: s.jsxs("article", {
                style: {
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
                  padding: "2.5rem 2rem",
                },
                "data-testid": "article-container",
                children: [
                  s.jsx(Ke, {
                    href: "/blog",
                    children: s.jsx("span", {
                      className:
                        "inline-block text-sm font-sans mb-12 cursor-pointer transition-opacity hover:opacity-70",
                      style: { color: "#A5672B" },
                      "data-testid": "link-back-to-blog",
                      children: "← Terug naar blog",
                    }),
                  }),
                  s.jsxs("header", {
                    className: "mb-12",
                    children: [
                      s.jsx("h1", {
                        className:
                          "font-serif text-5xl lg:text-6xl leading-tight mb-6",
                        style: { color: "#4B4643" },
                        "data-testid": "text-post-title",
                        children: n.title,
                      }),
                      s.jsx("time", {
                        className: "font-sans text-sm block",
                        style: { color: "#6B655E" },
                        dateTime: n.date,
                        "data-testid": "text-post-date",
                        children: new Date(n.date).toLocaleDateString("nl-NL", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }),
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "mb-12",
                    children: s.jsx("img", {
                      src: n.imageUrl,
                      alt: n.title,
                      style: {
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                        objectFit: "cover",
                        maxHeight: "500px",
                      },
                      "data-testid": "img-post-featured",
                    }),
                  }),
                  s.jsxs("div", {
                    className: "mb-12 p-8",
                    style: {
                      backgroundColor: "#FFF8F3",
                      borderLeft: "4px solid #C1562F",
                      borderRadius: "8px",
                    },
                    "data-testid": "section-highlights",
                    children: [
                      s.jsx("h2", {
                        className: "font-serif text-xl mb-4",
                        style: { color: "#4B4643", fontWeight: 600 },
                        children: "Belangrijkste punten",
                      }),
                      s.jsx("ul", {
                        style: { paddingLeft: "1.5rem", color: "#0A0A0A" },
                        children: n.highlights.map((a, u) =>
                          s.jsxs(
                            "li",
                            {
                              className: "mb-3",
                              style: { lineHeight: 1.6 },
                              "data-testid": `text-highlight-${u}`,
                              children: ["• ", a],
                            },
                            u,
                          ),
                        ),
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "prose prose-lg max-w-none mb-12",
                    children: n.content.map((a, u) =>
                      s.jsx(
                        "p",
                        {
                          className: "font-sans leading-relaxed mb-8 text-lg",
                          style: { color: "#4B4643", lineHeight: "1.8" },
                          "data-testid": `text-paragraph-${u}`,
                          children: a,
                        },
                        u,
                      ),
                    ),
                  }),
                  s.jsxs("div", {
                    className: "mb-12 pt-8 pb-8",
                    style: {
                      borderTop: "1px solid #E5E5E5",
                      borderBottom: "1px solid #E5E5E5",
                    },
                    children: [
                      s.jsx("p", {
                        className: "font-sans text-sm mb-4",
                        style: { color: "#6B655E" },
                        children: "Deel dit artikel:",
                      }),
                      s.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          s.jsxs("button", {
                            onClick: l,
                            className:
                              "flex items-center gap-2 px-4 py-2 font-sans text-sm",
                            style: {
                              backgroundColor: "#25D366",
                              color: "#FFFFFF",
                              borderRadius: "8px",
                              border: "none",
                              cursor: "pointer",
                            },
                            "data-testid": "button-share-whatsapp",
                            children: [s.jsx(ld, { size: 16 }), "WhatsApp"],
                          }),
                          s.jsx("button", {
                            onClick: i,
                            className:
                              "flex items-center gap-2 px-4 py-2 font-sans text-sm",
                            style: {
                              backgroundColor: r ? "#C1562F" : "#FFFFFF",
                              color: r ? "#FFFFFF" : "#1E1E1E",
                              borderRadius: "8px",
                              border: r ? "none" : "1px solid #E5E5E5",
                              cursor: "pointer",
                            },
                            "data-testid": "button-copy-link",
                            children: r
                              ? s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(n0, { size: 16 }),
                                    "Gekopieerd!",
                                  ],
                                })
                              : s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(ld, { size: 16 }),
                                    "Link kopiëren",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "mt-12",
                    children: s.jsx(Ke, {
                      href: "/blog",
                      children: s.jsx("span", {
                        className:
                          "inline-block text-sm font-sans cursor-pointer transition-opacity hover:opacity-70",
                        style: { color: "#A5672B" },
                        "data-testid": "link-back-bottom",
                        children: "← Terug naar alle artikelen",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
          s.jsx(Dn, {}),
        ],
      })
    : s.jsxs("div", {
        className: "min-h-screen flex flex-col bg-background",
        children: [
          s.jsx(mn, {}),
          s.jsx("main", {
            className: "flex-1 pt-20 flex items-center justify-center",
            children: s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx("h1", {
                  className: "font-serif text-3xl text-foreground mb-4",
                  children: "Artikel niet gevonden",
                }),
                s.jsx(Ke, {
                  href: "/blog",
                  children: s.jsx("span", {
                    className:
                      "text-sm font-sans text-foreground hover:underline cursor-pointer",
                    children: "Terug naar blog →",
                  }),
                }),
              ],
            }),
          }),
          s.jsx(Dn, {}),
        ],
      });
}
function jw() {
  const [e, t] = x.useState({ name: "", email: "", subject: "", message: "" }),
    [n, r] = x.useState(!1),
    [o, i] = x.useState(""),
    [l, a] = x.useState(!1),
    u = (h) => {
      console.log("Contact form submitted:", e),
        r(!0),
        setTimeout(() => {
          (r(!1), t({ name: "", email: "", subject: "", message: "" }));
        }, 3e3);
    },
    c = (h) => ({
      width: "100%",
      border: "none",
      borderBottom: "2px solid",
      borderBottomColor: o === h ? "#C1562F" : "#E5E5E5",
      backgroundColor: "transparent",
      padding: "0.75rem 0",
      fontSize: "1rem",
      fontFamily: "inherit",
      color: "#2F2A28",
      outline: "none",
      transition: "border-bottom-color 0.2s ease",
    }),
    d = (h) => ({
      width: "100%",
      border: "none",
      borderBottom: "2px solid",
      borderBottomColor: o === h ? "#C1562F" : "#E5E5E5",
      backgroundColor: "transparent",
      padding: "0.75rem 0",
      fontSize: "1rem",
      fontFamily: "inherit",
      color: "#2F2A28",
      outline: "none",
      resize: "none",
      transition: "border-bottom-color 0.2s ease",
    }),
    p = {
      display: "block",
      marginBottom: "0.6rem",
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "#6B6B6B",
      fontFamily: "'Inter', sans-serif",
    };
  return s.jsx("div", {
    children: n
      ? s.jsxs("div", {
          className: "text-center py-12",
          "data-testid": "text-success-message",
          children: [
            s.jsx("h3", {
              className: "font-serif mb-3",
              style: { fontSize: "1.4rem", fontWeight: 600, color: "#4B4643" },
              children: "Bedankt voor je bericht",
            }),
            s.jsx("p", {
              className: "font-sans",
              style: { color: "#6B6B6B", fontSize: "1rem" },
              children: "We nemen zo snel mogelijk contact met je op.",
            }),
          ],
        })
      : s.jsxs("form", {
          name: "contact",
          method: "POST",
          netlify: !0,
          onSubmit: u,
          children: [
            s.jsxs("div", {
              style: { marginBottom: "2rem" },
              children: [
                s.jsx("label", {
                  htmlFor: "name",
                  style: p,
                  children: "Naam *",
                }),
                s.jsx("input", {
                  id: "name",
                  type: "text",
                  value: e.name,
                  onChange: (h) => t({ ...e, name: h.target.value }),
                  onFocus: () => i("name"),
                  onBlur: () => i(""),
                  required: !0,
                  "data-testid": "input-name",
                  className: "font-sans",
                  style: c("name"),
                }),
              ],
            }),
            s.jsxs("div", {
              style: { marginBottom: "2rem" },
              children: [
                s.jsx("label", {
                  htmlFor: "email",
                  style: p,
                  children: "E-mail *",
                }),
                s.jsx("input", {
                  id: "email",
                  type: "email",
                  value: e.email,
                  onChange: (h) => t({ ...e, email: h.target.value }),
                  onFocus: () => i("email"),
                  onBlur: () => i(""),
                  required: !0,
                  "data-testid": "input-email",
                  className: "font-sans",
                  style: c("email"),
                }),
              ],
            }),
            s.jsxs("div", {
              style: { marginBottom: "2rem" },
              children: [
                s.jsx("label", {
                  htmlFor: "subject",
                  style: p,
                  children: "Onderwerp *",
                }),
                s.jsx("input", {
                  id: "subject",
                  type: "text",
                  value: e.subject,
                  onChange: (h) => t({ ...e, subject: h.target.value }),
                  onFocus: () => i("subject"),
                  onBlur: () => i(""),
                  required: !0,
                  "data-testid": "input-subject",
                  className: "font-sans",
                  style: c("subject"),
                }),
              ],
            }),
            s.jsxs("div", {
              style: { marginBottom: "2.5rem" },
              children: [
                s.jsx("label", {
                  htmlFor: "message",
                  style: p,
                  children: "Bericht *",
                }),
                s.jsx("textarea", {
                  id: "message",
                  value: e.message,
                  onChange: (h) => t({ ...e, message: h.target.value }),
                  onFocus: () => i("message"),
                  onBlur: () => i(""),
                  required: !0,
                  rows: 6,
                  "data-testid": "input-message",
                  className: "font-sans",
                  style: d("message"),
                }),
              ],
            }),
            s.jsx("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                marginTop: "2.5rem",
              },
              children: s.jsx("button", {
                type: "submit",
                "data-testid": "button-submit",
                className: "font-sans transition-colors",
                style: {
                  backgroundColor: l ? "#A24A29" : "#C1562F",
                  color: "#ffffff",
                  border: "none",
                  padding: "1rem 3rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  borderRadius: "12px",
                  cursor: "pointer",
                  boxShadow: "none",
                },
                onMouseEnter: () => a(!0),
                onMouseLeave: () => a(!1),
                children: "Verstuur bericht",
              }),
            }),
          ],
        }),
  });
}
function kw() {
  return s.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background",
    children: [
      s.jsx(mn, {}),
      s.jsx("main", {
        className: "flex-1 pt-20 px-4 sm:px-6 py-16 lg:py-24",
        children: s.jsx("div", {
          className: "max-w-2xl mx-auto",
          children: s.jsxs("div", {
            style: {
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              padding: "3rem 2rem",
            },
            className: "sm:p-16",
            children: [
              s.jsxs("header", {
                className: "mb-12 text-center",
                children: [
                  s.jsx("h1", {
                    className: "font-serif leading-tight mb-4",
                    style: {
                      fontSize: "2.75rem",
                      fontWeight: 700,
                      color: "#2F2A28",
                    },
                    "data-testid": "text-page-title",
                    children: "Contact",
                  }),
                  s.jsx("p", {
                    className: "font-sans leading-relaxed mx-auto",
                    style: {
                      fontSize: "1rem",
                      color: "#6B6B6B",
                      maxWidth: "500px",
                      lineHeight: 1.6,
                      wordBreak: "break-word",
                    },
                    "data-testid": "text-subtitle",
                    children: "Alleen voor vrouwen.",
                  }),
                ],
              }),
              s.jsx(jw, {}),
            ],
          }),
        }),
      }),
      s.jsx(Dn, {}),
    ],
  });
}
function bw() {
  return s.jsx("div", {
    className: "min-h-screen flex items-center justify-center px-6",
    children: s.jsxs("div", {
      className: "text-center space-y-6",
      children: [
        s.jsx("h1", {
          className: "font-serif text-6xl lg:text-8xl text-foreground",
          children: "404",
        }),
        s.jsx("p", {
          className: "font-sans text-lg text-muted-foreground",
          children: "Deze pagina bestaat niet",
        }),
        s.jsx(Ke, {
          href: "/",
          children: s.jsx("span", {
            className:
              "inline-block text-sm font-sans text-foreground hover:underline cursor-pointer",
            "data-testid": "link-home",
            children: "Terug naar home →",
          }),
        }),
      ],
    }),
  });
}
function Ew() {
  return s.jsxs(Ty, {
    children: [
      s.jsx(Et, { path: "/", component: pw }),
      s.jsx(Et, { path: "/wat-waarom", component: hw }),
      s.jsx(Et, { path: "/waar-begin-ik", component: mw }),
      s.jsx(Et, { path: "/is-het-iets-voor-ons", component: xd }),
      s.jsx(Et, { path: "/ik-twijfel", component: xd }),
      s.jsx(Et, { path: "/blog", component: yw }),
      s.jsx(Et, { path: "/blog/:slug", component: ww }),
      s.jsx(Et, { path: "/contact", component: kw }),
      s.jsx(Et, { component: bw }),
    ],
  });
}
function Sw() {
  return s.jsx(Zy, {
    client: nx,
    children: s.jsxs(dw, { children: [s.jsx(I0, {}), s.jsx(Ew, {})] }),
  });
}
Bp(document.getElementById("root")).render(s.jsx(Sw, {}));
