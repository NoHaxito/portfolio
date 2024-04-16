import { r as T } from "./index.NEDEFKed.js";
var tt = { exports: {} },
  Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var St = T,
  Ct = Symbol.for("react.element"),
  kt = Symbol.for("react.fragment"),
  Et = Object.prototype.hasOwnProperty,
  At = St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  It = { key: !0, ref: !0, __self: !0, __source: !0 };
function nt(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Et.call(t, r) && !It.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ct,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: At.current,
  };
}
Ae.Fragment = kt;
Ae.jsx = nt;
Ae.jsxs = nt;
tt.exports = Ae;
var le = tt.exports;
function Mt(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Je(e) {
  return Mt(e) || Array.isArray(e);
}
function zt() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function je(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const i = JSON.stringify(Object.keys(e.breakpoints || {})),
    o = JSON.stringify(Object.keys(t.breakpoints || {}));
  return i !== o
    ? !1
    : n.every((s) => {
        const c = e[s],
          a = t[s];
        return typeof c == "function"
          ? `${c}` == `${a}`
          : !Je(c) || !Je(a)
            ? c === a
            : je(c, a);
      });
}
function Qe(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function Lt(e, t) {
  if (e.length !== t.length) return !1;
  const n = Qe(e),
    r = Qe(t);
  return n.every((i, o) => {
    const s = r[o];
    return je(i, s);
  });
}
function Re(e) {
  return typeof e == "number";
}
function Oe(e) {
  return typeof e == "string";
}
function De(e) {
  return typeof e == "boolean";
}
function Xe(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function N(e) {
  return Math.abs(e);
}
function Fe(e) {
  return Math.sign(e);
}
function he(e, t) {
  return N(e - t);
}
function Pt(e, t) {
  if (e === 0 || t === 0 || N(e) <= N(t)) return 0;
  const n = he(N(e), N(t));
  return N(n / e);
}
function ye(e) {
  return xe(e).map(Number);
}
function X(e) {
  return e[we(e)];
}
function we(e) {
  return Math.max(0, e.length - 1);
}
function Ge(e, t) {
  return t === we(e);
}
function Ye(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function xe(e) {
  return Object.keys(e);
}
function rt(e, t) {
  return [e, t].reduce(
    (n, r) => (
      xe(r).forEach((i) => {
        const o = n[i],
          s = r[i],
          c = Xe(o) && Xe(s);
        n[i] = c ? rt(o, s) : s;
      }),
      n
    ),
    {},
  );
}
function ot(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Tt(e, t) {
  const n = { start: r, center: i, end: o };
  function r() {
    return 0;
  }
  function i(a) {
    return o(a) / 2;
  }
  function o(a) {
    return t - a;
  }
  function s(a, l) {
    return Oe(e) ? n[e](a) : e(t, a, l);
  }
  return { measure: s };
}
function ve() {
  let e = [];
  function t(i, o, s, c = { passive: !0 }) {
    let a;
    if ("addEventListener" in i)
      i.addEventListener(o, s, c), (a = () => i.removeEventListener(o, s, c));
    else {
      const l = i;
      l.addListener(s), (a = () => l.removeListener(s));
    }
    return e.push(a), r;
  }
  function n() {
    e = e.filter((i) => i());
  }
  const r = { add: t, clear: n };
  return r;
}
function Ot(e, t, n, r) {
  const i = ve(),
    o = 1e3 / 60;
  let s = null,
    c = 0,
    a = 0;
  function l() {
    i.add(e, "visibilitychange", () => {
      e.hidden && p();
    });
  }
  function b() {
    y(), i.clear();
  }
  function u(g) {
    if (!a) return;
    s || (s = g);
    const f = g - s;
    for (s = g, c += f; c >= o; ) n(), (c -= o);
    const m = N(c / o);
    r(m), a && t.requestAnimationFrame(u);
  }
  function h() {
    a || (a = t.requestAnimationFrame(u));
  }
  function y() {
    t.cancelAnimationFrame(a), (s = null), (c = 0), (a = 0);
  }
  function p() {
    (s = null), (c = 0);
  }
  return { init: l, destroy: b, start: h, stop: y, update: n, render: r };
}
function Nt(e, t) {
  const n = t === "rtl",
    r = e === "y",
    i = r ? "y" : "x",
    o = r ? "x" : "y",
    s = !r && n ? -1 : 1,
    c = b(),
    a = u();
  function l(p) {
    const { height: d, width: g } = p;
    return r ? d : g;
  }
  function b() {
    return r ? "top" : n ? "right" : "left";
  }
  function u() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function h(p) {
    return p * s;
  }
  return {
    scroll: i,
    cross: o,
    startEdge: c,
    endEdge: a,
    measureSize: l,
    direction: h,
  };
}
function ue(e = 0, t = 0) {
  const n = N(e - t);
  function r(l) {
    return l < e;
  }
  function i(l) {
    return l > t;
  }
  function o(l) {
    return r(l) || i(l);
  }
  function s(l) {
    return o(l) ? (r(l) ? e : t) : l;
  }
  function c(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: o,
    reachedMax: i,
    reachedMin: r,
    removeOffset: c,
  };
}
function st(e, t, n) {
  const { constrain: r } = ue(0, e),
    i = e + 1;
  let o = s(t);
  function s(h) {
    return n ? N((i + h) % i) : r(h);
  }
  function c() {
    return o;
  }
  function a(h) {
    return (o = s(h)), u;
  }
  function l(h) {
    return b().set(c() + h);
  }
  function b() {
    return st(e, c(), n);
  }
  const u = { get: c, set: a, add: l, clone: b };
  return u;
}
function jt(e, t, n, r, i, o, s, c, a, l, b, u, h, y, p, d, g, f, m) {
  const { cross: v, direction: C } = e,
    A = ["INPUT", "SELECT", "TEXTAREA"],
    L = { passive: !1 },
    w = ve(),
    E = ve(),
    I = ue(50, 225).constrain(y.measure(20)),
    M = { mouse: 300, touch: 400 },
    O = { mouse: 500, touch: 600 },
    k = p ? 43 : 25;
  let K = !1,
    F = 0,
    B = 0,
    $ = !1,
    H = !1,
    U = !1,
    G = !1;
  function Y(x) {
    if (!m) return;
    function z(D) {
      (De(m) || m(x, D)) && q(D);
    }
    const R = t;
    w.add(R, "dragstart", (D) => D.preventDefault(), L)
      .add(R, "touchmove", () => {}, L)
      .add(R, "touchend", () => {})
      .add(R, "touchstart", z)
      .add(R, "mousedown", z)
      .add(R, "touchcancel", _)
      .add(R, "contextmenu", _)
      .add(R, "click", de, !0);
  }
  function V() {
    w.clear(), E.clear();
  }
  function W() {
    const x = G ? n : t;
    E.add(x, "touchmove", Z, L)
      .add(x, "touchend", _)
      .add(x, "mousemove", Z, L)
      .add(x, "mouseup", _);
  }
  function ee(x) {
    const z = x.nodeName || "";
    return A.includes(z);
  }
  function pe() {
    return (p ? O : M)[G ? "mouse" : "touch"];
  }
  function ge(x, z) {
    const R = u.add(Fe(x) * -1),
      D = b.byDistance(x, !p).distance;
    return p || N(x) < I
      ? D
      : g && z
        ? D * 0.5
        : b.byIndex(R.get(), 0).distance;
  }
  function q(x) {
    const z = ot(x, r);
    (G = z),
      (U = p && z && !x.buttons && K),
      (K = he(i.get(), s.get()) >= 2),
      !(z && x.button !== 0) &&
        (ee(x.target) ||
          (($ = !0),
          o.pointerDown(x),
          l.useFriction(0).useDuration(0),
          i.set(s),
          W(),
          (F = o.readPoint(x)),
          (B = o.readPoint(x, v)),
          h.emit("pointerDown")));
  }
  function Z(x) {
    const z = o.readPoint(x),
      R = o.readPoint(x, v),
      D = he(z, F),
      te = he(R, B);
    if (!H && !G && (!x.cancelable || ((H = D > te), !H))) return _(x);
    const Q = o.pointerMove(x);
    D > d && (U = !0),
      l.useFriction(0.3).useDuration(1),
      c.start(),
      i.add(C(Q)),
      x.preventDefault();
  }
  function _(x) {
    const R = b.byDistance(0, !1).index !== u.get(),
      D = o.pointerUp(x) * pe(),
      te = ge(C(D), R),
      Q = Pt(D, te),
      ne = k - 10 * Q,
      ie = f + Q / 50;
    (H = !1),
      ($ = !1),
      E.clear(),
      l.useDuration(ne).useFriction(ie),
      a.distance(te, !p),
      (G = !1),
      h.emit("pointerUp");
  }
  function de(x) {
    U && (x.stopPropagation(), x.preventDefault(), (U = !1));
  }
  function J() {
    return $;
  }
  return { init: Y, pointerDown: J, destroy: V };
}
function Rt(e, t) {
  let r, i;
  function o(u) {
    return u.timeStamp;
  }
  function s(u, h) {
    const p = `client${(h || e.scroll) === "x" ? "X" : "Y"}`;
    return (ot(u, t) ? u : u.touches[0])[p];
  }
  function c(u) {
    return (r = u), (i = u), s(u);
  }
  function a(u) {
    const h = s(u) - s(i),
      y = o(u) - o(r) > 170;
    return (i = u), y && (r = u), h;
  }
  function l(u) {
    if (!r || !i) return 0;
    const h = s(i) - s(r),
      y = o(u) - o(r),
      p = o(u) - o(i) > 170,
      d = h / y;
    return y && !p && N(d) > 0.1 ? d : 0;
  }
  return { pointerDown: c, pointerMove: a, pointerUp: l, readPoint: s };
}
function Dt() {
  function e(n) {
    const { offsetTop: r, offsetLeft: i, offsetWidth: o, offsetHeight: s } = n;
    return {
      top: r,
      right: i + o,
      bottom: r + s,
      left: i,
      width: o,
      height: s,
    };
  }
  return { measure: e };
}
function Ft(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function Gt(e, t, n, r, i, o, s) {
  let c,
    a,
    l = [],
    b = !1;
  function u(d) {
    return i.measureSize(s.measure(d));
  }
  function h(d) {
    if (!o) return;
    (a = u(e)), (l = r.map(u));
    function g(m) {
      for (const v of m) {
        const C = v.target === e,
          A = r.indexOf(v.target),
          L = C ? a : l[A],
          w = u(C ? e : r[A]);
        if (N(w - L) >= 0.5) {
          n.requestAnimationFrame(() => {
            d.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    (c = new ResizeObserver((m) => {
      b || ((De(o) || o(d, m)) && g(m));
    })),
      [e].concat(r).forEach((m) => c.observe(m));
  }
  function y() {
    c && c.disconnect(), (b = !0);
  }
  return { init: h, destroy: y };
}
function Vt(e, t, n, r, i) {
  let o = 0,
    s = 0,
    c = r,
    a = i,
    l = e.get(),
    b = 0;
  function u() {
    const A = n.get() - e.get(),
      L = !c;
    let w = 0;
    return (
      L
        ? ((o = 0), e.set(n), (w = A))
        : ((o += A / c), (o *= a), (l += o), e.add(o), (w = l - b)),
      (s = Fe(w)),
      (b = l),
      C
    );
  }
  function h() {
    const A = n.get() - t.get();
    return N(A) < 0.001;
  }
  function y() {
    return c;
  }
  function p() {
    return s;
  }
  function d() {
    return o;
  }
  function g() {
    return m(r);
  }
  function f() {
    return v(i);
  }
  function m(A) {
    return (c = A), C;
  }
  function v(A) {
    return (a = A), C;
  }
  const C = {
    direction: p,
    duration: y,
    velocity: d,
    seek: u,
    settled: h,
    useBaseFriction: f,
    useBaseDuration: g,
    useFriction: v,
    useDuration: m,
  };
  return C;
}
function _t(e, t, n, r, i) {
  const o = i.measure(10),
    s = i.measure(50),
    c = ue(0.1, 0.99);
  let a = !1;
  function l() {
    return !(a || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function b(y) {
    if (!l()) return;
    const p = e.reachedMin(t.get()) ? "min" : "max",
      d = N(e[p] - t.get()),
      g = n.get() - t.get(),
      f = c.constrain(d / s);
    n.subtract(g * f),
      !y &&
        N(g) < o &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function u(y) {
    a = !y;
  }
  return { constrain: b, toggleActive: u };
}
function Bt(e, t, n, r, i) {
  const o = ue(-t + e, 0),
    s = u(),
    c = b(),
    a = h();
  function l(p, d) {
    return he(p, d) < 1;
  }
  function b() {
    const p = s[0],
      d = X(s),
      g = s.lastIndexOf(p),
      f = s.indexOf(d) + 1;
    return ue(g, f);
  }
  function u() {
    return n
      .map((p, d) => {
        const { min: g, max: f } = o,
          m = o.constrain(p),
          v = !d,
          C = Ge(n, d);
        return v ? f : C || l(g, m) ? g : l(f, m) ? f : m;
      })
      .map((p) => parseFloat(p.toFixed(3)));
  }
  function h() {
    if (t <= e + i) return [o.max];
    if (r === "keepSnaps") return s;
    const { min: p, max: d } = c;
    return s.slice(p, d);
  }
  return { snapsContained: a, scrollContainLimit: c };
}
function $t(e, t, n) {
  const r = t[0],
    i = n ? r - e : X(t);
  return { limit: ue(i, r) };
}
function Ht(e, t, n, r) {
  const o = t.min + 0.1,
    s = t.max + 0.1,
    { reachedMin: c, reachedMax: a } = ue(o, s);
  function l(h) {
    return h === 1 ? a(n.get()) : h === -1 ? c(n.get()) : !1;
  }
  function b(h) {
    if (!l(h)) return;
    const y = e * (h * -1);
    r.forEach((p) => p.add(y));
  }
  return { loop: b };
}
function Ut(e) {
  const { max: t, length: n } = e;
  function r(o) {
    const s = o - t;
    return n ? s / -n : 0;
  }
  return { get: r };
}
function qt(e, t, n, r, i) {
  const { startEdge: o, endEdge: s } = e,
    { groupSlides: c } = i,
    a = u().map(t.measure),
    l = h(),
    b = y();
  function u() {
    return c(r)
      .map((d) => X(d)[s] - d[0][o])
      .map(N);
  }
  function h() {
    return r.map((d) => n[o] - d[o]).map((d) => -N(d));
  }
  function y() {
    return c(l)
      .map((d) => d[0])
      .map((d, g) => d + a[g]);
  }
  return { snaps: l, snapsAligned: b };
}
function Kt(e, t, n, r, i, o) {
  const { groupSlides: s } = i,
    { min: c, max: a } = r,
    l = b();
  function b() {
    const h = s(o),
      y = !e || t === "keepSnaps";
    return n.length === 1
      ? [o]
      : y
        ? h
        : h.slice(c, a).map((p, d, g) => {
            const f = !d,
              m = Ge(g, d);
            if (f) {
              const v = X(g[0]) + 1;
              return Ye(v);
            }
            if (m) {
              const v = we(o) - X(g)[0] + 1;
              return Ye(v, X(g)[0]);
            }
            return p;
          });
  }
  return { slideRegistry: l };
}
function Wt(e, t, n, r, i) {
  const { reachedAny: o, removeOffset: s, constrain: c } = r;
  function a(p) {
    return p.concat().sort((d, g) => N(d) - N(g))[0];
  }
  function l(p) {
    const d = e ? s(p) : c(p),
      g = t
        .map((m, v) => ({ diff: b(m - d, 0), index: v }))
        .sort((m, v) => N(m.diff) - N(v.diff)),
      { index: f } = g[0];
    return { index: f, distance: d };
  }
  function b(p, d) {
    const g = [p, p + n, p - n];
    if (!e) return g[0];
    if (!d) return a(g);
    const f = g.filter((m) => Fe(m) === d);
    return f.length ? a(f) : X(g) - n;
  }
  function u(p, d) {
    const g = t[p] - i.get(),
      f = b(g, d);
    return { index: p, distance: f };
  }
  function h(p, d) {
    const g = i.get() + p,
      { index: f, distance: m } = l(g),
      v = !e && o(g);
    if (!d || v) return { index: f, distance: p };
    const C = t[f] - m,
      A = p + b(C, 0);
    return { index: f, distance: A };
  }
  return { byDistance: h, byIndex: u, shortcut: b };
}
function Jt(e, t, n, r, i, o, s) {
  function c(u) {
    const h = u.distance,
      y = u.index !== t.get();
    o.add(h),
      h && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      y && (n.set(t.get()), t.set(u.index), s.emit("select"));
  }
  function a(u, h) {
    const y = i.byDistance(u, h);
    c(y);
  }
  function l(u, h) {
    const y = t.clone().set(u),
      p = i.byIndex(y.get(), h);
    c(p);
  }
  return { distance: a, index: l };
}
function Qt(e, t, n, r, i, o) {
  let s = 0;
  function c() {
    o.add(document, "keydown", a, !1), t.forEach(l);
  }
  function a(u) {
    u.code === "Tab" && (s = new Date().getTime());
  }
  function l(u) {
    const h = () => {
      if (new Date().getTime() - s > 10) return;
      e.scrollLeft = 0;
      const d = t.indexOf(u),
        g = n.findIndex((f) => f.includes(d));
      Re(g) && (i.useDuration(0), r.index(g, 0));
    };
    o.add(u, "focus", h, { passive: !0, capture: !0 });
  }
  return { init: c };
}
function ke(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(a) {
    t = s(a);
  }
  function i(a) {
    t += s(a);
  }
  function o(a) {
    t -= s(a);
  }
  function s(a) {
    return Re(a) ? a : a.get();
  }
  return { get: n, set: r, add: i, subtract: o };
}
function it(e, t) {
  const n = e.scroll === "x" ? o : s,
    r = t.style;
  let i = !1;
  function o(u) {
    return `translate3d(${u}px,0px,0px)`;
  }
  function s(u) {
    return `translate3d(0px,${u}px,0px)`;
  }
  function c(u) {
    i || (r.transform = n(e.direction(u)));
  }
  function a(u) {
    i = !u;
  }
  function l() {
    i ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: l, to: c, toggleActive: a };
}
function Xt(e, t, n, r, i, o, s, c, a) {
  const b = ye(i),
    u = ye(i).reverse(),
    h = f().concat(m());
  function y(w, E) {
    return w.reduce((I, M) => I - i[M], E);
  }
  function p(w, E) {
    return w.reduce((I, M) => (y(I, E) > 0 ? I.concat([M]) : I), []);
  }
  function d(w) {
    return o.map((E, I) => ({
      start: E - r[I] + 0.5 + w,
      end: E + t - 0.5 + w,
    }));
  }
  function g(w, E, I) {
    const M = d(E);
    return w.map((O) => {
      const k = I ? 0 : -n,
        K = I ? n : 0,
        F = I ? "end" : "start",
        B = M[O][F];
      return {
        index: O,
        loopPoint: B,
        slideLocation: ke(-1),
        translate: it(e, a[O]),
        target: () => (c.get() > B ? k : K),
      };
    });
  }
  function f() {
    const w = s[0],
      E = p(u, w);
    return g(E, n, !1);
  }
  function m() {
    const w = t - s[0] - 1,
      E = p(b, w);
    return g(E, -n, !0);
  }
  function v() {
    return h.every(({ index: w }) => {
      const E = b.filter((I) => I !== w);
      return y(E, t) <= 0.1;
    });
  }
  function C() {
    h.forEach((w) => {
      const { target: E, translate: I, slideLocation: M } = w,
        O = E();
      O !== M.get() && (I.to(O), M.set(O));
    });
  }
  function A() {
    h.forEach((w) => w.translate.clear());
  }
  return { canLoop: v, clear: A, loop: C, loopPoints: h };
}
function Yt(e, t, n) {
  let r,
    i = !1;
  function o(a) {
    if (!n) return;
    function l(b) {
      for (const u of b)
        if (u.type === "childList") {
          a.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((b) => {
      i || ((De(n) || n(a, b)) && l(b));
    })),
      r.observe(e, { childList: !0 });
  }
  function s() {
    r && r.disconnect(), (i = !0);
  }
  return { init: o, destroy: s };
}
function Zt(e, t, n, r) {
  const i = {};
  let o = null,
    s = null,
    c,
    a = !1;
  function l() {
    (c = new IntersectionObserver(
      (p) => {
        a ||
          (p.forEach((d) => {
            const g = t.indexOf(d.target);
            i[g] = d;
          }),
          (o = null),
          (s = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r },
    )),
      t.forEach((p) => c.observe(p));
  }
  function b() {
    c && c.disconnect(), (a = !0);
  }
  function u(p) {
    return xe(i).reduce((d, g) => {
      const f = parseInt(g),
        { isIntersecting: m } = i[f];
      return ((p && m) || (!p && !m)) && d.push(f), d;
    }, []);
  }
  function h(p = !0) {
    if (p && o) return o;
    if (!p && s) return s;
    const d = u(p);
    return p && (o = d), p || (s = d), d;
  }
  return { init: l, destroy: b, get: h };
}
function en(e, t, n, r, i, o) {
  const { measureSize: s, startEdge: c, endEdge: a } = e,
    l = n[0] && i,
    b = p(),
    u = d(),
    h = n.map(s),
    y = g();
  function p() {
    if (!l) return 0;
    const m = n[0];
    return N(t[c] - m[c]);
  }
  function d() {
    if (!l) return 0;
    const m = o.getComputedStyle(X(r));
    return parseFloat(m.getPropertyValue(`margin-${a}`));
  }
  function g() {
    return n
      .map((m, v, C) => {
        const A = !v,
          L = Ge(C, v);
        return A ? h[v] + b : L ? h[v] + u : C[v + 1][c] - m[c];
      })
      .map(N);
  }
  return { slideSizes: h, slideSizesWithGaps: y, startGap: b, endGap: u };
}
function tn(e, t, n, r, i, o, s, c, a) {
  const { startEdge: l, endEdge: b, direction: u } = e,
    h = Re(n);
  function y(f, m) {
    return ye(f)
      .filter((v) => v % m === 0)
      .map((v) => f.slice(v, v + m));
  }
  function p(f) {
    return f.length
      ? ye(f)
          .reduce((m, v) => {
            const C = X(m) || 0,
              A = C === 0,
              L = v === we(f),
              w = i[l] - o[C][l],
              E = i[l] - o[v][b],
              I = !r && A ? u(s) : 0,
              M = !r && L ? u(c) : 0;
            return (
              N(E - M - (w + I)) > t + a && m.push(v), L && m.push(f.length), m
            );
          }, [])
          .map((m, v, C) => {
            const A = Math.max(C[v - 1] || 0);
            return f.slice(A, m);
          })
      : [];
  }
  function d(f) {
    return h ? y(f, n) : p(f);
  }
  return { groupSlides: d };
}
function nn(e, t, n, r, i, o, s) {
  const {
      align: c,
      axis: a,
      direction: l,
      startIndex: b,
      loop: u,
      duration: h,
      dragFree: y,
      dragThreshold: p,
      inViewThreshold: d,
      slidesToScroll: g,
      skipSnaps: f,
      containScroll: m,
      watchResize: v,
      watchSlides: C,
      watchDrag: A,
    } = o,
    L = 2,
    w = Dt(),
    E = w.measure(t),
    I = n.map(w.measure),
    M = Nt(a, l),
    O = M.measureSize(E),
    k = Ft(O),
    K = Tt(c, O),
    F = !u && !!m,
    B = u || !!m,
    {
      slideSizes: $,
      slideSizesWithGaps: H,
      startGap: U,
      endGap: G,
    } = en(M, E, I, n, B, i),
    Y = tn(M, O, g, u, E, I, U, G, L),
    { snaps: V, snapsAligned: W } = qt(M, K, E, I, Y),
    ee = -X(V) + X(H),
    { snapsContained: pe, scrollContainLimit: ge } = Bt(O, ee, W, m, L),
    q = F ? pe : W,
    { limit: Z } = $t(ee, q, u),
    _ = st(we(q), b, u),
    de = _.clone(),
    J = ye(n),
    j = ({
      dragHandler: ce,
      scrollBody: Pe,
      scrollBounds: Te,
      options: { loop: Se },
    }) => {
      Se || Te.constrain(ce.pointerDown()), Pe.seek();
    },
    x = (
      {
        scrollBody: ce,
        translate: Pe,
        location: Te,
        offsetLocation: Se,
        scrollLooper: bt,
        slideLooper: ht,
        dragHandler: yt,
        animation: xt,
        eventHandler: qe,
        options: { loop: vt },
      },
      wt,
    ) => {
      const Ke = ce.velocity(),
        We = ce.settled();
      We && !yt.pointerDown() && (xt.stop(), qe.emit("settle")),
        We || qe.emit("scroll"),
        Se.set(Te.get() - Ke + Ke * wt),
        vt && (bt.loop(ce.direction()), ht.loop()),
        Pe.to(Se.get());
    },
    z = Ot(
      r,
      i,
      () => j(Le),
      (ce) => x(Le, ce),
    ),
    R = 0.68,
    D = q[_.get()],
    te = ke(D),
    Q = ke(D),
    ne = ke(D),
    ie = Vt(te, Q, ne, h, R),
    Me = Wt(u, q, ee, Z, ne),
    ze = Jt(z, _, de, ie, Me, ne, s),
    $e = Ut(Z),
    He = ve(),
    gt = Zt(t, n, s, d),
    { slideRegistry: Ue } = Kt(F, m, q, ge, Y, J),
    mt = Qt(e, n, Ue, ze, ie, He),
    Le = {
      ownerDocument: r,
      ownerWindow: i,
      eventHandler: s,
      containerRect: E,
      slideRects: I,
      animation: z,
      axis: M,
      dragHandler: jt(
        M,
        e,
        r,
        i,
        ne,
        Rt(M, i),
        te,
        z,
        ze,
        ie,
        Me,
        _,
        s,
        k,
        y,
        p,
        f,
        R,
        A,
      ),
      eventStore: He,
      percentOfView: k,
      index: _,
      indexPrevious: de,
      limit: Z,
      location: te,
      offsetLocation: Q,
      options: o,
      resizeHandler: Gt(t, s, i, n, M, v, w),
      scrollBody: ie,
      scrollBounds: _t(Z, Q, ne, ie, k),
      scrollLooper: Ht(ee, Z, Q, [te, Q, ne]),
      scrollProgress: $e,
      scrollSnapList: q.map($e.get),
      scrollSnaps: q,
      scrollTarget: Me,
      scrollTo: ze,
      slideLooper: Xt(M, O, ee, $, H, V, q, Q, n),
      slideFocus: mt,
      slidesHandler: Yt(t, s, C),
      slidesInView: gt,
      slideIndexes: J,
      slideRegistry: Ue,
      slidesToScroll: Y,
      target: ne,
      translate: it(M, t),
    };
  return Le;
}
function rn() {
  const e = {};
  let t;
  function n(a) {
    t = a;
  }
  function r(a) {
    return e[a] || [];
  }
  function i(a) {
    return r(a).forEach((l) => l(t, a)), c;
  }
  function o(a, l) {
    return (e[a] = r(a).concat([l])), c;
  }
  function s(a, l) {
    return (e[a] = r(a).filter((b) => b !== l)), c;
  }
  const c = { init: n, emit: i, off: s, on: o };
  return c;
}
const on = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
};
function sn(e) {
  function t(o, s) {
    return rt(o, s || {});
  }
  function n(o) {
    const s = o.breakpoints || {},
      c = xe(s)
        .filter((a) => e.matchMedia(a).matches)
        .map((a) => s[a])
        .reduce((a, l) => t(a, l), {});
    return t(o, c);
  }
  function r(o) {
    return o
      .map((s) => xe(s.breakpoints || {}))
      .reduce((s, c) => s.concat(c), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function cn(e) {
  let t = [];
  function n(o, s) {
    return (
      (t = s.filter(({ options: c }) => e.optionsAtMedia(c).active !== !1)),
      t.forEach((c) => c.init(o, e)),
      s.reduce((c, a) => Object.assign(c, { [a.name]: a }), {})
    );
  }
  function r() {
    t = t.filter((o) => o.destroy());
  }
  return { init: n, destroy: r };
}
function Ee(e, t, n) {
  const r = e.ownerDocument,
    i = r.defaultView,
    o = sn(i),
    s = cn(o),
    c = ve(),
    a = rn(),
    { mergeOptions: l, optionsAtMedia: b, optionsMediaQueries: u } = o,
    { on: h, off: y, emit: p } = a,
    d = O;
  let g = !1,
    f,
    m = l(on, Ee.globalOptions),
    v = l(m),
    C = [],
    A,
    L,
    w;
  function E() {
    const { container: j, slides: x } = v;
    L = (Oe(j) ? e.querySelector(j) : j) || e.children[0];
    const R = Oe(x) ? L.querySelectorAll(x) : x;
    w = [].slice.call(R || L.children);
  }
  function I(j) {
    const x = nn(e, L, w, r, i, j, a);
    if (j.loop && !x.slideLooper.canLoop()) {
      const z = Object.assign({}, j, { loop: !1 });
      return I(z);
    }
    return x;
  }
  function M(j, x) {
    g ||
      ((m = l(m, j)),
      (v = b(m)),
      (C = x || C),
      E(),
      (f = I(v)),
      u([m, ...C.map(({ options: z }) => z)]).forEach((z) =>
        c.add(z, "change", O),
      ),
      v.active &&
        (f.translate.to(f.location.get()),
        f.animation.init(),
        f.slidesInView.init(),
        f.slideFocus.init(),
        f.eventHandler.init(J),
        f.resizeHandler.init(J),
        f.slidesHandler.init(J),
        f.options.loop && f.slideLooper.loop(),
        L.offsetParent && w.length && f.dragHandler.init(J),
        (A = s.init(J, C))));
  }
  function O(j, x) {
    const z = V();
    k(), M(l({ startIndex: z }, j), x), a.emit("reInit");
  }
  function k() {
    f.dragHandler.destroy(),
      f.eventStore.clear(),
      f.translate.clear(),
      f.slideLooper.clear(),
      f.resizeHandler.destroy(),
      f.slidesHandler.destroy(),
      f.slidesInView.destroy(),
      f.animation.destroy(),
      s.destroy(),
      c.clear();
  }
  function K() {
    g || ((g = !0), c.clear(), k(), a.emit("destroy"));
  }
  function F(j, x, z) {
    !v.active ||
      g ||
      (f.scrollBody.useBaseFriction().useDuration(x === !0 ? 0 : v.duration),
      f.scrollTo.index(j, z || 0));
  }
  function B(j) {
    const x = f.index.add(1).get();
    F(x, j, -1);
  }
  function $(j) {
    const x = f.index.add(-1).get();
    F(x, j, 1);
  }
  function H() {
    return f.index.add(1).get() !== V();
  }
  function U() {
    return f.index.add(-1).get() !== V();
  }
  function G() {
    return f.scrollSnapList;
  }
  function Y() {
    return f.scrollProgress.get(f.location.get());
  }
  function V() {
    return f.index.get();
  }
  function W() {
    return f.indexPrevious.get();
  }
  function ee() {
    return f.slidesInView.get();
  }
  function pe() {
    return f.slidesInView.get(!1);
  }
  function ge() {
    return A;
  }
  function q() {
    return f;
  }
  function Z() {
    return e;
  }
  function _() {
    return L;
  }
  function de() {
    return w;
  }
  const J = {
    canScrollNext: H,
    canScrollPrev: U,
    containerNode: _,
    internalEngine: q,
    destroy: K,
    off: y,
    on: h,
    emit: p,
    plugins: ge,
    previousScrollSnap: W,
    reInit: d,
    rootNode: Z,
    scrollNext: B,
    scrollPrev: $,
    scrollProgress: Y,
    scrollSnapList: G,
    scrollTo: F,
    selectedScrollSnap: V,
    slideNodes: de,
    slidesInView: ee,
    slidesNotInView: pe,
  };
  return M(t, n), setTimeout(() => a.emit("init"), 0), J;
}
Ee.globalOptions = void 0;
function Ve(e = {}, t = []) {
  const n = T.useRef(e),
    r = T.useRef(t),
    [i, o] = T.useState(),
    [s, c] = T.useState(),
    a = T.useCallback(() => {
      i && i.reInit(n.current, r.current);
    }, [i]);
  return (
    T.useEffect(() => {
      if (zt() && s) {
        Ee.globalOptions = Ve.globalOptions;
        const l = Ee(s, n.current, r.current);
        return o(l), () => l.destroy();
      } else o(void 0);
    }, [s, o]),
    T.useEffect(() => {
      je(n.current, e) || ((n.current = e), a());
    }, [e, a]),
    T.useEffect(() => {
      Lt(r.current, t) || ((r.current = t), a());
    }, [t, a]),
    [c, i]
  );
}
Ve.globalOptions = void 0;
function ct(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = ct(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function an() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ct(e)) && (r && (r += " "), (r += t));
  return r;
}
const _e = "-";
function ln(e) {
  const t = dn(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function i(s) {
    const c = s.split(_e);
    return c[0] === "" && c.length !== 1 && c.shift(), at(c, t) || un(s);
  }
  function o(s, c) {
    const a = n[s] || [];
    return c && r[s] ? [...a, ...r[s]] : a;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: o };
}
function at(e, t) {
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    i = r ? at(e.slice(1), r) : void 0;
  if (i) return i;
  if (t.validators.length === 0) return;
  const o = e.join(_e);
  return t.validators.find(({ validator: s }) => s(o))?.classGroupId;
}
const Ze = /^\[(.+)\]$/;
function un(e) {
  if (Ze.test(e)) {
    const t = Ze.exec(e)[1],
      n = t?.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function dn(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    pn(Object.entries(e.classGroups), n).forEach(([o, s]) => {
      Ne(s, r, o, t);
    }),
    r
  );
}
function Ne(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : et(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (fn(i)) {
        Ne(i(r), t, n, r);
        return;
      }
      t.validators.push({ validator: i, classGroupId: n });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      Ne(s, et(t, o), n, r);
    });
  });
}
function et(e, t) {
  let n = e;
  return (
    t.split(_e).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function fn(e) {
  return e.isThemeGetter;
}
function pn(e, t) {
  return t
    ? e.map(([n, r]) => {
        const i = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([s, c]) => [t + s, c]),
                )
              : o,
        );
        return [n, i];
      })
    : e;
}
function gn(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function i(o, s) {
    n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(o) {
      let s = n.get(o);
      if (s !== void 0) return s;
      if ((s = r.get(o)) !== void 0) return i(o, s), s;
    },
    set(o, s) {
      n.has(o) ? n.set(o, s) : i(o, s);
    },
  };
}
const lt = "!";
function mn(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    i = t.length;
  return function (s) {
    const c = [];
    let a = 0,
      l = 0,
      b;
    for (let d = 0; d < s.length; d++) {
      let g = s[d];
      if (a === 0) {
        if (g === r && (n || s.slice(d, d + i) === t)) {
          c.push(s.slice(l, d)), (l = d + i);
          continue;
        }
        if (g === "/") {
          b = d;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" && a--;
    }
    const u = c.length === 0 ? s : s.substring(l),
      h = u.startsWith(lt),
      y = h ? u.substring(1) : u,
      p = b && b > l ? b - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: y,
      maybePostfixModifierPosition: p,
    };
  };
}
function bn(e) {
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
}
function hn(e) {
  return { cache: gn(e.cacheSize), splitModifiers: mn(e), ...ln(e) };
}
const yn = /\s+/;
function xn(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
    } = t,
    o = new Set();
  return e
    .trim()
    .split(yn)
    .map((s) => {
      const {
        modifiers: c,
        hasImportantModifier: a,
        baseClassName: l,
        maybePostfixModifierPosition: b,
      } = n(s);
      let u = r(b ? l.substring(0, b) : l),
        h = !!b;
      if (!u) {
        if (!b) return { isTailwindClass: !1, originalClassName: s };
        if (((u = r(l)), !u))
          return { isTailwindClass: !1, originalClassName: s };
        h = !1;
      }
      const y = bn(c).join(":");
      return {
        isTailwindClass: !0,
        modifierId: a ? y + lt : y,
        classGroupId: u,
        originalClassName: s,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: c, classGroupId: a, hasPostfixModifier: l } = s,
        b = c + a;
      return o.has(b)
        ? !1
        : (o.add(b), i(a, l).forEach((u) => o.add(c + u)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(" ");
}
function vn() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ut(t)) && (r && (r += " "), (r += n));
  return r;
}
function ut(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ut(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function wn(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(a) {
    const l = t.reduce((b, u) => u(b), e());
    return (n = hn(l)), (r = n.cache.get), (i = n.cache.set), (o = c), c(a);
  }
  function c(a) {
    const l = r(a);
    if (l) return l;
    const b = xn(a, n);
    return i(a, b), b;
  }
  return function () {
    return o(vn.apply(null, arguments));
  };
}
function P(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const dt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Sn = /^\d+\/\d+$/,
  Cn = new Set(["px", "full", "screen"]),
  kn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  En =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  An = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  In = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Mn =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function re(e) {
  return ae(e) || Cn.has(e) || Sn.test(e);
}
function oe(e) {
  return fe(e, "length", Rn);
}
function ae(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ce(e) {
  return fe(e, "number", ae);
}
function me(e) {
  return !!e && Number.isInteger(Number(e));
}
function zn(e) {
  return e.endsWith("%") && ae(e.slice(0, -1));
}
function S(e) {
  return dt.test(e);
}
function se(e) {
  return kn.test(e);
}
const Ln = new Set(["length", "size", "percentage"]);
function Pn(e) {
  return fe(e, Ln, ft);
}
function Tn(e) {
  return fe(e, "position", ft);
}
const On = new Set(["image", "url"]);
function Nn(e) {
  return fe(e, On, Fn);
}
function jn(e) {
  return fe(e, "", Dn);
}
function be() {
  return !0;
}
function fe(e, t, n) {
  const r = dt.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function Rn(e) {
  return En.test(e) && !An.test(e);
}
function ft() {
  return !1;
}
function Dn(e) {
  return In.test(e);
}
function Fn(e) {
  return Mn.test(e);
}
function Gn() {
  const e = P("colors"),
    t = P("spacing"),
    n = P("blur"),
    r = P("brightness"),
    i = P("borderColor"),
    o = P("borderRadius"),
    s = P("borderSpacing"),
    c = P("borderWidth"),
    a = P("contrast"),
    l = P("grayscale"),
    b = P("hueRotate"),
    u = P("invert"),
    h = P("gap"),
    y = P("gradientColorStops"),
    p = P("gradientColorStopPositions"),
    d = P("inset"),
    g = P("margin"),
    f = P("opacity"),
    m = P("padding"),
    v = P("saturate"),
    C = P("scale"),
    A = P("sepia"),
    L = P("skew"),
    w = P("space"),
    E = P("translate"),
    I = () => ["auto", "contain", "none"],
    M = () => ["auto", "hidden", "clip", "visible", "scroll"],
    O = () => ["auto", S, t],
    k = () => [S, t],
    K = () => ["", re, oe],
    F = () => ["auto", ae, S],
    B = () => [
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
    H = () => [
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
      "plus-lighter",
    ],
    U = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    G = () => ["", "0", S],
    Y = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    V = () => [ae, Ce],
    W = () => [ae, S];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [be],
      spacing: [re, oe],
      blur: ["none", "", se, S],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", se, S],
      borderSpacing: k(),
      borderWidth: K(),
      contrast: V(),
      grayscale: G(),
      hueRotate: W(),
      invert: G(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [zn, oe],
      inset: O(),
      margin: O(),
      opacity: V(),
      padding: k(),
      saturate: V(),
      scale: V(),
      sepia: G(),
      skew: W(),
      space: k(),
      translate: k(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", S] }],
      container: ["container"],
      columns: [{ columns: [se] }],
      "break-after": [{ "break-after": Y() }],
      "break-before": [{ "break-before": Y() }],
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
      "object-position": [{ object: [...B(), S] }],
      overflow: [{ overflow: M() }],
      "overflow-x": [{ "overflow-x": M() }],
      "overflow-y": [{ "overflow-y": M() }],
      overscroll: [{ overscroll: I() }],
      "overscroll-x": [{ "overscroll-x": I() }],
      "overscroll-y": [{ "overscroll-y": I() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [d] }],
      "inset-x": [{ "inset-x": [d] }],
      "inset-y": [{ "inset-y": [d] }],
      start: [{ start: [d] }],
      end: [{ end: [d] }],
      top: [{ top: [d] }],
      right: [{ right: [d] }],
      bottom: [{ bottom: [d] }],
      left: [{ left: [d] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", me, S] }],
      basis: [{ basis: O() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", S] }],
      grow: [{ grow: G() }],
      shrink: [{ shrink: G() }],
      order: [{ order: ["first", "last", "none", me, S] }],
      "grid-cols": [{ "grid-cols": [be] }],
      "col-start-end": [{ col: ["auto", { span: ["full", me, S] }, S] }],
      "col-start": [{ "col-start": F() }],
      "col-end": [{ "col-end": F() }],
      "grid-rows": [{ "grid-rows": [be] }],
      "row-start-end": [{ row: ["auto", { span: [me, S] }, S] }],
      "row-start": [{ "row-start": F() }],
      "row-end": [{ "row-end": F() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", S] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", S] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...U()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...U(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...U(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [m] }],
      px: [{ px: [m] }],
      py: [{ py: [m] }],
      ps: [{ ps: [m] }],
      pe: [{ pe: [m] }],
      pt: [{ pt: [m] }],
      pr: [{ pr: [m] }],
      pb: [{ pb: [m] }],
      pl: [{ pl: [m] }],
      m: [{ m: [g] }],
      mx: [{ mx: [g] }],
      my: [{ my: [g] }],
      ms: [{ ms: [g] }],
      me: [{ me: [g] }],
      mt: [{ mt: [g] }],
      mr: [{ mr: [g] }],
      mb: [{ mb: [g] }],
      ml: [{ ml: [g] }],
      "space-x": [{ "space-x": [w] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [w] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", S, t] }],
      "min-w": [{ "min-w": [S, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            S,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [se] },
            se,
          ],
        },
      ],
      h: [{ h: [S, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [S, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [S, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [S, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", se, oe] }],
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
            Ce,
          ],
        },
      ],
      "font-family": [{ font: [be] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            S,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", ae, Ce] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            re,
            S,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", S] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", S] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [f] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [f] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", re, oe] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", re, S] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: k() }],
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
            S,
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
      content: [{ content: ["none", S] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [f] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...B(), Tn] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Pn] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Nn,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [p] }],
      "gradient-via-pos": [{ via: [p] }],
      "gradient-to-pos": [{ to: [p] }],
      "gradient-from": [{ from: [y] }],
      "gradient-via": [{ via: [y] }],
      "gradient-to": [{ to: [y] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [c] }],
      "border-w-x": [{ "border-x": [c] }],
      "border-w-y": [{ "border-y": [c] }],
      "border-w-s": [{ "border-s": [c] }],
      "border-w-e": [{ "border-e": [c] }],
      "border-w-t": [{ "border-t": [c] }],
      "border-w-r": [{ "border-r": [c] }],
      "border-w-b": [{ "border-b": [c] }],
      "border-w-l": [{ "border-l": [c] }],
      "border-opacity": [{ "border-opacity": [f] }],
      "border-style": [{ border: [...$(), "hidden"] }],
      "divide-x": [{ "divide-x": [c] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [c] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [f] }],
      "divide-style": [{ divide: $() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: ["", ...$()] }],
      "outline-offset": [{ "outline-offset": [re, S] }],
      "outline-w": [{ outline: [re, oe] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: K() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [f] }],
      "ring-offset-w": [{ "ring-offset": [re, oe] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", se, jn] }],
      "shadow-color": [{ shadow: [be] }],
      opacity: [{ opacity: [f] }],
      "mix-blend": [{ "mix-blend": H() }],
      "bg-blend": [{ "bg-blend": H() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", se, S] }],
      grayscale: [{ grayscale: [l] }],
      "hue-rotate": [{ "hue-rotate": [b] }],
      invert: [{ invert: [u] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [A] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b] }],
      "backdrop-invert": [{ "backdrop-invert": [u] }],
      "backdrop-opacity": [{ "backdrop-opacity": [f] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [A] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
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
            S,
          ],
        },
      ],
      duration: [{ duration: W() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", S] }],
      delay: [{ delay: W() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", S] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [me, S] }],
      "translate-x": [{ "translate-x": [E] }],
      "translate-y": [{ "translate-y": [E] }],
      "skew-x": [{ "skew-x": [L] }],
      "skew-y": [{ "skew-y": [L] }],
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
            S,
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
            S,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": k() }],
      "scroll-mx": [{ "scroll-mx": k() }],
      "scroll-my": [{ "scroll-my": k() }],
      "scroll-ms": [{ "scroll-ms": k() }],
      "scroll-me": [{ "scroll-me": k() }],
      "scroll-mt": [{ "scroll-mt": k() }],
      "scroll-mr": [{ "scroll-mr": k() }],
      "scroll-mb": [{ "scroll-mb": k() }],
      "scroll-ml": [{ "scroll-ml": k() }],
      "scroll-p": [{ "scroll-p": k() }],
      "scroll-px": [{ "scroll-px": k() }],
      "scroll-py": [{ "scroll-py": k() }],
      "scroll-ps": [{ "scroll-ps": k() }],
      "scroll-pe": [{ "scroll-pe": k() }],
      "scroll-pt": [{ "scroll-pt": k() }],
      "scroll-pr": [{ "scroll-pr": k() }],
      "scroll-pb": [{ "scroll-pb": k() }],
      "scroll-pl": [{ "scroll-pl": k() }],
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
        { "will-change": ["auto", "scroll", "contents", "transform", S] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [re, oe, Ce] }],
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
}
const Vn = wn(Gn);
function Ie(...e) {
  return Vn(an(e));
}
const qn = (e, t) =>
    e.reduce(
      (n, r, i) =>
        i % t === 0 ? [...n, [r]] : [...n.slice(0, -1), [...n.slice(-1)[0], r]],
      [],
    ),
  pt = T.createContext(null);
function Be() {
  const e = T.useContext(pt);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const _n = T.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: t,
      setApi: n,
      plugins: r,
      className: i,
      children: o,
      ...s
    },
    c,
  ) => {
    const [a, l] = Ve({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
      [b, u] = T.useState(!1),
      [h, y] = T.useState(!1),
      p = T.useCallback((m) => {
        m && (u(m.canScrollPrev()), y(m.canScrollNext()));
      }, []),
      d = T.useCallback(() => {
        l?.scrollPrev();
      }, [l]),
      g = T.useCallback(() => {
        l?.scrollNext();
      }, [l]),
      f = T.useCallback(
        (m) => {
          m.key === "ArrowLeft"
            ? (m.preventDefault(), d())
            : m.key === "ArrowRight" && (m.preventDefault(), g());
        },
        [d, g],
      );
    return (
      T.useEffect(() => {
        !l || !n || n(l);
      }, [l, n]),
      T.useEffect(() => {
        if (l)
          return (
            p(l),
            l.on("reInit", p),
            l.on("select", p),
            () => {
              l?.off("select", p);
            }
          );
      }, [l, p]),
      le.jsx(pt.Provider, {
        value: {
          carouselRef: a,
          api: l,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: d,
          scrollNext: g,
          canScrollPrev: b,
          canScrollNext: h,
        },
        children: le.jsx("div", {
          ref: c,
          onKeyDownCapture: f,
          className: Ie("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          ...s,
          children: o,
        }),
      })
    );
  },
);
_n.displayName = "Carousel";
const Bn = T.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: i } = Be();
  return le.jsx("div", {
    ref: r,
    className: "overflow-hidden h-full",
    children: le.jsx("div", {
      ref: n,
      className: Ie("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t,
    }),
  });
});
Bn.displayName = "CarouselContent";
const $n = T.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = Be();
  return le.jsx("div", {
    ref: n,
    role: "group",
    "aria-roledescription": "slide",
    className: Ie(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      e,
    ),
    ...t,
  });
});
$n.displayName = "CarouselItem";
const Hn = T.forwardRef(({ className: e, ...t }, n) => {
  const [r, i] = T.useState(0),
    { api: o } = Be();
  return (
    T.useEffect(() => {
      o?.on("select", () => i(o?.selectedScrollSnap()));
    }),
    le.jsx("div", {
      className: "flex items-center gap-1 justify-center",
      children: o
        ?.slideNodes()
        .map((s, c) =>
          le.jsx(
            "button",
            {
              ref: n,
              "aria-current": r === c,
              "aria-label": `Slide ${c + 1}`,
              disabled: r === c,
              onClick: () => o?.scrollTo(c),
              "data-state": r === c ? "active" : void 0,
              className: Ie(
                e,
                "size-2 rounded-full data-[state=active]:bg-white bg-neutral-600 transition-all duration-500 ease-in-out data-[state=active]:w-5 hover:bg-neutral-500 data-[active]:hover:bg-white",
              ),
              ...t,
            },
            c,
          ),
        ),
    })
  );
});
Hn.displayName = "CarouselDots";
export { _n as C, Bn as a, $n as b, Hn as c, qn as d, le as j };
