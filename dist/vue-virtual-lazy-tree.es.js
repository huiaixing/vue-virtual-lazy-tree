import { shallowRef as Ct, watchEffect as Gr, readonly as qr, unref as k, getCurrentScope as Wr, onScopeDispose as Yr, watch as z, defineComponent as Q, createElementBlock as B, openBlock as $, createElementVNode as X, warn as Jr, inject as P, ref as A, computed as T, isRef as Pt, getCurrentInstance as ne, onMounted as Ln, toRef as Xr, onUnmounted as Zr, reactive as Qr, createBlock as M, Transition as eo, mergeProps as Ee, toHandlers as zn, withCtx as Z, renderSlot as J, nextTick as Oe, toRaw as tn, useSlots as Kn, resolveDynamicComponent as he, normalizeClass as L, createCommentVNode as H, withDirectives as pe, withModifiers as V, vModelCheckbox as jn, Fragment as Be, createTextVNode as Mn, toDisplayString as Lt, normalizeStyle as ge, provide as ve, toRefs as to, renderList as rt, h as nn, resolveComponent as G, createVNode as we, vShow as Ye, onUpdated as no, pushScopeId as ro, popScopeId as oo, withScopeId as io, markRaw as ao, shallowReactive as so, resolveDirective as lo } from "vue";
var Bn = typeof global == "object" && global && global.Object === Object && global, uo = typeof self == "object" && self && self.Object === Object && self, re = Bn || uo || Function("return this")(), q = re.Symbol, Fn = Object.prototype, co = Fn.hasOwnProperty, fo = Fn.toString, Ae = q ? q.toStringTag : void 0;
function ho(e) {
  var t = co.call(e, Ae), n = e[Ae];
  try {
    e[Ae] = void 0;
    var r = !0;
  } catch {
  }
  var o = fo.call(e);
  return r && (t ? e[Ae] = n : delete e[Ae]), o;
}
var po = Object.prototype, go = po.toString;
function vo(e) {
  return go.call(e);
}
var yo = "[object Null]", mo = "[object Undefined]", rn = q ? q.toStringTag : void 0;
function be(e) {
  return e == null ? e === void 0 ? mo : yo : rn && rn in Object(e) ? ho(e) : vo(e);
}
function ae(e) {
  return e != null && typeof e == "object";
}
var bo = "[object Symbol]";
function zt(e) {
  return typeof e == "symbol" || ae(e) && be(e) == bo;
}
function Rn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var te = Array.isArray, on = q ? q.prototype : void 0, an = on ? on.toString : void 0;
function Vn(e) {
  if (typeof e == "string")
    return e;
  if (te(e))
    return Rn(e, Vn) + "";
  if (zt(e))
    return an ? an.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ke(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Co(e) {
  return e;
}
var No = "[object AsyncFunction]", wo = "[object Function]", So = "[object GeneratorFunction]", ko = "[object Proxy]";
function Hn(e) {
  if (!ke(e))
    return !1;
  var t = be(e);
  return t == wo || t == So || t == No || t == ko;
}
var ht = re["__core-js_shared__"], sn = (function() {
  var e = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function $o(e) {
  return !!sn && sn in e;
}
var To = Function.prototype, Eo = To.toString;
function Ce(e) {
  if (e != null) {
    try {
      return Eo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Oo = /[\\^$.*+?()[\]{}|]/g, _o = /^\[object .+?Constructor\]$/, xo = Function.prototype, Io = Object.prototype, Do = xo.toString, Ao = Io.hasOwnProperty, Po = RegExp(
  "^" + Do.call(Ao).replace(Oo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lo(e) {
  if (!ke(e) || $o(e))
    return !1;
  var t = Hn(e) ? Po : _o;
  return t.test(Ce(e));
}
function zo(e, t) {
  return e == null ? void 0 : e[t];
}
function Ne(e, t) {
  var n = zo(e, t);
  return Lo(n) ? n : void 0;
}
var Nt = Ne(re, "WeakMap");
function Ko(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var jo = 800, Mo = 16, Bo = Date.now;
function Fo(e) {
  var t = 0, n = 0;
  return function() {
    var r = Bo(), o = Mo - (r - n);
    if (n = r, o > 0) {
      if (++t >= jo)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ro(e) {
  return function() {
    return e;
  };
}
var Je = (function() {
  try {
    var e = Ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Vo = Je ? function(e, t) {
  return Je(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ro(t),
    writable: !0
  });
} : Co, Ho = Fo(Vo);
function Uo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Go = 9007199254740991, qo = /^(?:0|[1-9]\d*)$/;
function Kt(e, t) {
  var n = typeof e;
  return t = t ?? Go, !!t && (n == "number" || n != "symbol" && qo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Un(e, t, n) {
  t == "__proto__" && Je ? Je(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function jt(e, t) {
  return e === t || e !== e && t !== t;
}
var Wo = Object.prototype, Yo = Wo.hasOwnProperty;
function Mt(e, t, n) {
  var r = e[t];
  (!(Yo.call(e, t) && jt(r, n)) || n === void 0 && !(t in e)) && Un(e, t, n);
}
function Jo(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], d = void 0;
    d === void 0 && (d = e[s]), o ? Un(n, s, d) : Mt(n, s, d);
  }
  return n;
}
var ln = Math.max;
function Xo(e, t, n) {
  return t = ln(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = ln(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), Ko(e, this, s);
  };
}
var Zo = 9007199254740991;
function Bt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Zo;
}
function Gn(e) {
  return e != null && Bt(e.length) && !Hn(e);
}
var Qo = Object.prototype;
function qn(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Qo;
  return e === n;
}
function ei(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ti = "[object Arguments]";
function dn(e) {
  return ae(e) && be(e) == ti;
}
var Wn = Object.prototype, ni = Wn.hasOwnProperty, ri = Wn.propertyIsEnumerable, Ft = dn(/* @__PURE__ */ (function() {
  return arguments;
})()) ? dn : function(e) {
  return ae(e) && ni.call(e, "callee") && !ri.call(e, "callee");
};
function oi() {
  return !1;
}
var Yn = typeof exports == "object" && exports && !exports.nodeType && exports, un = Yn && typeof module == "object" && module && !module.nodeType && module, ii = un && un.exports === Yn, cn = ii ? re.Buffer : void 0, ai = cn ? cn.isBuffer : void 0, Xe = ai || oi, si = "[object Arguments]", li = "[object Array]", di = "[object Boolean]", ui = "[object Date]", ci = "[object Error]", fi = "[object Function]", hi = "[object Map]", pi = "[object Number]", gi = "[object Object]", vi = "[object RegExp]", yi = "[object Set]", mi = "[object String]", bi = "[object WeakMap]", Ci = "[object ArrayBuffer]", Ni = "[object DataView]", wi = "[object Float32Array]", Si = "[object Float64Array]", ki = "[object Int8Array]", $i = "[object Int16Array]", Ti = "[object Int32Array]", Ei = "[object Uint8Array]", Oi = "[object Uint8ClampedArray]", _i = "[object Uint16Array]", xi = "[object Uint32Array]", D = {};
D[wi] = D[Si] = D[ki] = D[$i] = D[Ti] = D[Ei] = D[Oi] = D[_i] = D[xi] = !0;
D[si] = D[li] = D[Ci] = D[di] = D[Ni] = D[ui] = D[ci] = D[fi] = D[hi] = D[pi] = D[gi] = D[vi] = D[yi] = D[mi] = D[bi] = !1;
function Ii(e) {
  return ae(e) && Bt(e.length) && !!D[be(e)];
}
function Rt(e) {
  return function(t) {
    return e(t);
  };
}
var Jn = typeof exports == "object" && exports && !exports.nodeType && exports, Le = Jn && typeof module == "object" && module && !module.nodeType && module, Di = Le && Le.exports === Jn, pt = Di && Bn.process, $e = (function() {
  try {
    var e = Le && Le.require && Le.require("util").types;
    return e || pt && pt.binding && pt.binding("util");
  } catch {
  }
})(), fn = $e && $e.isTypedArray, Xn = fn ? Rt(fn) : Ii, Ai = Object.prototype, Pi = Ai.hasOwnProperty;
function Zn(e, t) {
  var n = te(e), r = !n && Ft(e), o = !n && !r && Xe(e), i = !n && !r && !o && Xn(e), a = n || r || o || i, s = a ? ei(e.length, String) : [], d = s.length;
  for (var u in e)
    (t || Pi.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Kt(u, d))) && s.push(u);
  return s;
}
function Qn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Li = Qn(Object.keys, Object), zi = Object.prototype, Ki = zi.hasOwnProperty;
function ji(e) {
  if (!qn(e))
    return Li(e);
  var t = [];
  for (var n in Object(e))
    Ki.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Mi(e) {
  return Gn(e) ? Zn(e) : ji(e);
}
function Bi(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Fi = Object.prototype, Ri = Fi.hasOwnProperty;
function Vi(e) {
  if (!ke(e))
    return Bi(e);
  var t = qn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Ri.call(e, r)) || n.push(r);
  return n;
}
function Hi(e) {
  return Gn(e) ? Zn(e, !0) : Vi(e);
}
var Ui = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gi = /^\w*$/;
function qi(e, t) {
  if (te(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || zt(e) ? !0 : Gi.test(e) || !Ui.test(e) || t != null && e in Object(t);
}
var Ke = Ne(Object, "create");
function Wi() {
  this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
}
function Yi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ji = "__lodash_hash_undefined__", Xi = Object.prototype, Zi = Xi.hasOwnProperty;
function Qi(e) {
  var t = this.__data__;
  if (Ke) {
    var n = t[e];
    return n === Ji ? void 0 : n;
  }
  return Zi.call(t, e) ? t[e] : void 0;
}
var ea = Object.prototype, ta = ea.hasOwnProperty;
function na(e) {
  var t = this.__data__;
  return Ke ? t[e] !== void 0 : ta.call(t, e);
}
var ra = "__lodash_hash_undefined__";
function oa(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ke && t === void 0 ? ra : t, this;
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ye.prototype.clear = Wi;
ye.prototype.delete = Yi;
ye.prototype.get = Qi;
ye.prototype.has = na;
ye.prototype.set = oa;
function ia() {
  this.__data__ = [], this.size = 0;
}
function ot(e, t) {
  for (var n = e.length; n--; )
    if (jt(e[n][0], t))
      return n;
  return -1;
}
var aa = Array.prototype, sa = aa.splice;
function la(e) {
  var t = this.__data__, n = ot(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : sa.call(t, n, 1), --this.size, !0;
}
function da(e) {
  var t = this.__data__, n = ot(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ua(e) {
  return ot(this.__data__, e) > -1;
}
function ca(e, t) {
  var n = this.__data__, r = ot(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function se(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
se.prototype.clear = ia;
se.prototype.delete = la;
se.prototype.get = da;
se.prototype.has = ua;
se.prototype.set = ca;
var je = Ne(re, "Map");
function fa() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (je || se)(),
    string: new ye()
  };
}
function ha(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function it(e, t) {
  var n = e.__data__;
  return ha(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function pa(e) {
  var t = it(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ga(e) {
  return it(this, e).get(e);
}
function va(e) {
  return it(this, e).has(e);
}
function ya(e, t) {
  var n = it(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
le.prototype.clear = fa;
le.prototype.delete = pa;
le.prototype.get = ga;
le.prototype.has = va;
le.prototype.set = ya;
var ma = "Expected a function";
function Vt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ma);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Vt.Cache || le)(), n;
}
Vt.Cache = le;
var ba = 500;
function Ca(e) {
  var t = Vt(e, function(r) {
    return n.size === ba && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Na = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wa = /\\(\\)?/g, Sa = Ca(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Na, function(n, r, o, i) {
    t.push(o ? i.replace(wa, "$1") : r || n);
  }), t;
});
function ka(e) {
  return e == null ? "" : Vn(e);
}
function _e(e, t) {
  return te(e) ? e : qi(e, t) ? [e] : Sa(ka(e));
}
function at(e) {
  if (typeof e == "string" || zt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ht(e, t) {
  t = _e(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[at(t[n++])];
  return n && n == r ? e : void 0;
}
function $a(e, t, n) {
  var r = e == null ? void 0 : Ht(e, t);
  return r === void 0 ? n : r;
}
function Ut(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var hn = q ? q.isConcatSpreadable : void 0;
function Ta(e) {
  return te(e) || Ft(e) || !!(hn && e && e[hn]);
}
function Ea(e, t, n, r, o) {
  var i = -1, a = e.length;
  for (n || (n = Ta), o || (o = []); ++i < a; ) {
    var s = e[i];
    n(s) ? Ut(o, s) : o[o.length] = s;
  }
  return o;
}
function Oa(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ea(e) : [];
}
function er(e) {
  return Ho(Xo(e, void 0, Oa), e + "");
}
var tr = Qn(Object.getPrototypeOf, Object), _a = "[object Object]", xa = Function.prototype, Ia = Object.prototype, nr = xa.toString, Da = Ia.hasOwnProperty, Aa = nr.call(Object);
function Pa(e) {
  if (!ae(e) || be(e) != _a)
    return !1;
  var t = tr(e);
  if (t === null)
    return !0;
  var n = Da.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && nr.call(n) == Aa;
}
function La(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + t];
  return i;
}
function za() {
  this.__data__ = new se(), this.size = 0;
}
function Ka(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ja(e) {
  return this.__data__.get(e);
}
function Ma(e) {
  return this.__data__.has(e);
}
var Ba = 200;
function Fa(e, t) {
  var n = this.__data__;
  if (n instanceof se) {
    var r = n.__data__;
    if (!je || r.length < Ba - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new le(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ie(e) {
  var t = this.__data__ = new se(e);
  this.size = t.size;
}
ie.prototype.clear = za;
ie.prototype.delete = Ka;
ie.prototype.get = ja;
ie.prototype.has = Ma;
ie.prototype.set = Fa;
var rr = typeof exports == "object" && exports && !exports.nodeType && exports, pn = rr && typeof module == "object" && module && !module.nodeType && module, Ra = pn && pn.exports === rr, gn = Ra ? re.Buffer : void 0;
gn && gn.allocUnsafe;
function Va(e, t) {
  return e.slice();
}
function Ha(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function or() {
  return [];
}
var Ua = Object.prototype, Ga = Ua.propertyIsEnumerable, vn = Object.getOwnPropertySymbols, ir = vn ? function(e) {
  return e == null ? [] : (e = Object(e), Ha(vn(e), function(t) {
    return Ga.call(e, t);
  }));
} : or, qa = Object.getOwnPropertySymbols, Wa = qa ? function(e) {
  for (var t = []; e; )
    Ut(t, ir(e)), e = tr(e);
  return t;
} : or;
function ar(e, t, n) {
  var r = t(e);
  return te(e) ? r : Ut(r, n(e));
}
function yn(e) {
  return ar(e, Mi, ir);
}
function sr(e) {
  return ar(e, Hi, Wa);
}
var wt = Ne(re, "DataView"), St = Ne(re, "Promise"), kt = Ne(re, "Set"), mn = "[object Map]", Ya = "[object Object]", bn = "[object Promise]", Cn = "[object Set]", Nn = "[object WeakMap]", wn = "[object DataView]", Ja = Ce(wt), Xa = Ce(je), Za = Ce(St), Qa = Ce(kt), es = Ce(Nt), Y = be;
(wt && Y(new wt(new ArrayBuffer(1))) != wn || je && Y(new je()) != mn || St && Y(St.resolve()) != bn || kt && Y(new kt()) != Cn || Nt && Y(new Nt()) != Nn) && (Y = function(e) {
  var t = be(e), n = t == Ya ? e.constructor : void 0, r = n ? Ce(n) : "";
  if (r)
    switch (r) {
      case Ja:
        return wn;
      case Xa:
        return mn;
      case Za:
        return bn;
      case Qa:
        return Cn;
      case es:
        return Nn;
    }
  return t;
});
var ts = Object.prototype, ns = ts.hasOwnProperty;
function rs(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && ns.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Ze = re.Uint8Array;
function Gt(e) {
  var t = new e.constructor(e.byteLength);
  return new Ze(t).set(new Ze(e)), t;
}
function os(e, t) {
  var n = Gt(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var is = /\w*$/;
function as(e) {
  var t = new e.constructor(e.source, is.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Sn = q ? q.prototype : void 0, kn = Sn ? Sn.valueOf : void 0;
function ss(e) {
  return kn ? Object(kn.call(e)) : {};
}
function ls(e, t) {
  var n = Gt(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var ds = "[object Boolean]", us = "[object Date]", cs = "[object Map]", fs = "[object Number]", hs = "[object RegExp]", ps = "[object Set]", gs = "[object String]", vs = "[object Symbol]", ys = "[object ArrayBuffer]", ms = "[object DataView]", bs = "[object Float32Array]", Cs = "[object Float64Array]", Ns = "[object Int8Array]", ws = "[object Int16Array]", Ss = "[object Int32Array]", ks = "[object Uint8Array]", $s = "[object Uint8ClampedArray]", Ts = "[object Uint16Array]", Es = "[object Uint32Array]";
function Os(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case ys:
      return Gt(e);
    case ds:
    case us:
      return new r(+e);
    case ms:
      return os(e);
    case bs:
    case Cs:
    case Ns:
    case ws:
    case Ss:
    case ks:
    case $s:
    case Ts:
    case Es:
      return ls(e);
    case cs:
      return new r();
    case fs:
    case gs:
      return new r(e);
    case hs:
      return as(e);
    case ps:
      return new r();
    case vs:
      return ss(e);
  }
}
var _s = "[object Map]";
function xs(e) {
  return ae(e) && Y(e) == _s;
}
var $n = $e && $e.isMap, Is = $n ? Rt($n) : xs, Ds = "[object Set]";
function As(e) {
  return ae(e) && Y(e) == Ds;
}
var Tn = $e && $e.isSet, Ps = Tn ? Rt(Tn) : As, lr = "[object Arguments]", Ls = "[object Array]", zs = "[object Boolean]", Ks = "[object Date]", js = "[object Error]", dr = "[object Function]", Ms = "[object GeneratorFunction]", Bs = "[object Map]", Fs = "[object Number]", ur = "[object Object]", Rs = "[object RegExp]", Vs = "[object Set]", Hs = "[object String]", Us = "[object Symbol]", Gs = "[object WeakMap]", qs = "[object ArrayBuffer]", Ws = "[object DataView]", Ys = "[object Float32Array]", Js = "[object Float64Array]", Xs = "[object Int8Array]", Zs = "[object Int16Array]", Qs = "[object Int32Array]", el = "[object Uint8Array]", tl = "[object Uint8ClampedArray]", nl = "[object Uint16Array]", rl = "[object Uint32Array]", x = {};
x[lr] = x[Ls] = x[qs] = x[Ws] = x[zs] = x[Ks] = x[Ys] = x[Js] = x[Xs] = x[Zs] = x[Qs] = x[Bs] = x[Fs] = x[ur] = x[Rs] = x[Vs] = x[Hs] = x[Us] = x[el] = x[tl] = x[nl] = x[rl] = !0;
x[js] = x[dr] = x[Gs] = !1;
function Ge(e, t, n, r, o, i) {
  var a;
  if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)
    return a;
  if (!ke(e))
    return e;
  var s = te(e);
  if (s)
    a = rs(e);
  else {
    var d = Y(e), u = d == dr || d == Ms;
    if (Xe(e))
      return Va(e);
    if (d == ur || d == lr || u && !o)
      a = {};
    else {
      if (!x[d])
        return o ? e : {};
      a = Os(e, d);
    }
  }
  i || (i = new ie());
  var l = i.get(e);
  if (l)
    return l;
  i.set(e, a), Ps(e) ? e.forEach(function(v) {
    a.add(Ge(v, t, n, v, e, i));
  }) : Is(e) && e.forEach(function(v, g) {
    a.set(g, Ge(v, t, n, g, e, i));
  });
  var h = sr, f = s ? void 0 : h(e);
  return Uo(f || e, function(v, g) {
    f && (g = v, v = e[g]), Mt(a, g, Ge(v, t, n, g, e, i));
  }), a;
}
var ol = "__lodash_hash_undefined__";
function il(e) {
  return this.__data__.set(e, ol), this;
}
function al(e) {
  return this.__data__.has(e);
}
function Qe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new le(); ++t < n; )
    this.add(e[t]);
}
Qe.prototype.add = Qe.prototype.push = il;
Qe.prototype.has = al;
function sl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ll(e, t) {
  return e.has(t);
}
var dl = 1, ul = 2;
function cr(e, t, n, r, o, i) {
  var a = n & dl, s = e.length, d = t.length;
  if (s != d && !(a && d > s))
    return !1;
  var u = i.get(e), l = i.get(t);
  if (u && l)
    return u == t && l == e;
  var h = -1, f = !0, v = n & ul ? new Qe() : void 0;
  for (i.set(e, t), i.set(t, e); ++h < s; ) {
    var g = e[h], c = t[h];
    if (r)
      var p = a ? r(c, g, h, t, e, i) : r(g, c, h, e, t, i);
    if (p !== void 0) {
      if (p)
        continue;
      f = !1;
      break;
    }
    if (v) {
      if (!sl(t, function(y, b) {
        if (!ll(v, b) && (g === y || o(g, y, n, r, i)))
          return v.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === c || o(g, c, n, r, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
function cl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function fl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var hl = 1, pl = 2, gl = "[object Boolean]", vl = "[object Date]", yl = "[object Error]", ml = "[object Map]", bl = "[object Number]", Cl = "[object RegExp]", Nl = "[object Set]", wl = "[object String]", Sl = "[object Symbol]", kl = "[object ArrayBuffer]", $l = "[object DataView]", En = q ? q.prototype : void 0, gt = En ? En.valueOf : void 0;
function Tl(e, t, n, r, o, i, a) {
  switch (n) {
    case $l:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case kl:
      return !(e.byteLength != t.byteLength || !i(new Ze(e), new Ze(t)));
    case gl:
    case vl:
    case bl:
      return jt(+e, +t);
    case yl:
      return e.name == t.name && e.message == t.message;
    case Cl:
    case wl:
      return e == t + "";
    case ml:
      var s = cl;
    case Nl:
      var d = r & hl;
      if (s || (s = fl), e.size != t.size && !d)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= pl, a.set(e, t);
      var l = cr(s(e), s(t), r, o, i, a);
      return a.delete(e), l;
    case Sl:
      if (gt)
        return gt.call(e) == gt.call(t);
  }
  return !1;
}
var El = 1, Ol = Object.prototype, _l = Ol.hasOwnProperty;
function xl(e, t, n, r, o, i) {
  var a = n & El, s = yn(e), d = s.length, u = yn(t), l = u.length;
  if (d != l && !a)
    return !1;
  for (var h = d; h--; ) {
    var f = s[h];
    if (!(a ? f in t : _l.call(t, f)))
      return !1;
  }
  var v = i.get(e), g = i.get(t);
  if (v && g)
    return v == t && g == e;
  var c = !0;
  i.set(e, t), i.set(t, e);
  for (var p = a; ++h < d; ) {
    f = s[h];
    var y = e[f], b = t[f];
    if (r)
      var w = a ? r(b, y, f, t, e, i) : r(y, b, f, e, t, i);
    if (!(w === void 0 ? y === b || o(y, b, n, r, i) : w)) {
      c = !1;
      break;
    }
    p || (p = f == "constructor");
  }
  if (c && !p) {
    var m = e.constructor, O = t.constructor;
    m != O && "constructor" in e && "constructor" in t && !(typeof m == "function" && m instanceof m && typeof O == "function" && O instanceof O) && (c = !1);
  }
  return i.delete(e), i.delete(t), c;
}
var Il = 1, On = "[object Arguments]", _n = "[object Array]", He = "[object Object]", Dl = Object.prototype, xn = Dl.hasOwnProperty;
function Al(e, t, n, r, o, i) {
  var a = te(e), s = te(t), d = a ? _n : Y(e), u = s ? _n : Y(t);
  d = d == On ? He : d, u = u == On ? He : u;
  var l = d == He, h = u == He, f = d == u;
  if (f && Xe(e)) {
    if (!Xe(t))
      return !1;
    a = !0, l = !1;
  }
  if (f && !l)
    return i || (i = new ie()), a || Xn(e) ? cr(e, t, n, r, o, i) : Tl(e, t, d, n, r, o, i);
  if (!(n & Il)) {
    var v = l && xn.call(e, "__wrapped__"), g = h && xn.call(t, "__wrapped__");
    if (v || g) {
      var c = v ? e.value() : e, p = g ? t.value() : t;
      return i || (i = new ie()), o(c, p, n, r, i);
    }
  }
  return f ? (i || (i = new ie()), xl(e, t, n, r, o, i)) : !1;
}
function fr(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !ae(e) && !ae(t) ? e !== e && t !== t : Al(e, t, n, r, fr, o);
}
function Pl(e, t) {
  return e != null && t in Object(e);
}
function Ll(e, t, n) {
  t = _e(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = at(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && Bt(o) && Kt(a, o) && (te(e) || Ft(e)));
}
function zl(e, t) {
  return e != null && Ll(e, t, Pl);
}
function Kl(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function jl(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Ml(e, t) {
  return t.length < 2 ? e : Ht(e, La(t, 0, -1));
}
function hr(e, t) {
  return fr(e, t);
}
function Bl(e) {
  return e == null;
}
var Fl = Object.prototype, Rl = Fl.hasOwnProperty;
function Vl(e, t) {
  t = _e(t, e);
  var n = -1, r = t.length;
  if (!r)
    return !0;
  for (var o = e == null || typeof e != "object" && typeof e != "function"; ++n < r; ) {
    var i = t[n];
    if (typeof i == "string") {
      if (i === "__proto__" && !Rl.call(e, "__proto__"))
        return !1;
      if (i === "constructor" && n + 1 < r && typeof t[n + 1] == "string" && t[n + 1] === "prototype") {
        if (o && n === 0)
          continue;
        return !1;
      }
    }
  }
  var a = Ml(e, t);
  return a == null || delete a[at(Kl(t))];
}
function Hl(e) {
  return Pa(e) ? void 0 : e;
}
var Ul = 1, Gl = 2, ql = 4, Wl = er(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = Rn(t, function(i) {
    return i = _e(i, e), r || (r = i.length > 1), i;
  }), Jo(e, sr(e), n), r && (n = Ge(n, Ul | Gl | ql, Hl));
  for (var o = t.length; o--; )
    Vl(n, t[o]);
  return n;
});
function Yl(e, t, n, r) {
  if (!ke(e))
    return e;
  t = _e(t, e);
  for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
    var d = at(t[o]), u = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != a) {
      var l = s[d];
      u = void 0, u === void 0 && (u = ke(l) ? l : Kt(t[o + 1]) ? [] : {});
    }
    Mt(s, d, u), s = s[d];
  }
  return e;
}
function Jl(e, t, n) {
  for (var r = -1, o = t.length, i = {}; ++r < o; ) {
    var a = t[r], s = Ht(e, a);
    n(s, a) && Yl(i, _e(a, e), s);
  }
  return i;
}
function Xl(e, t) {
  return Jl(e, t, function(n, r) {
    return zl(e, r);
  });
}
var pr = er(function(e, t) {
  return e == null ? {} : Xl(e, t);
});
/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Zl = () => {
}, Ql = Object.prototype.hasOwnProperty, Me = (e, t) => Ql.call(e, t), oe = Array.isArray, et = (e) => typeof e == "function", me = (e) => typeof e == "string", st = (e) => e !== null && typeof e == "object";
function ed(e, t) {
  var n;
  const r = Ct();
  return Gr(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), qr(r);
}
function td(e) {
  return Wr() ? (Yr(e), !0) : !1;
}
function gr(e) {
  return typeof e == "function" ? e() : k(e);
}
const vr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const nd = Object.prototype.toString, rd = (e) => nd.call(e) === "[object Object]", od = () => {
};
function id(e) {
  var t;
  const n = gr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ad = vr ? window : void 0;
function sd(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = ad) : [t, n, r, o] = e, !t)
    return od;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], a = () => {
    i.forEach((l) => l()), i.length = 0;
  }, s = (l, h, f, v) => (l.addEventListener(h, f, v), () => l.removeEventListener(h, f, v)), d = z(
    () => [id(t), gr(o)],
    ([l, h]) => {
      if (a(), !l)
        return;
      const f = rd(h) ? { ...h } : h;
      i.push(
        ...n.flatMap((v) => r.map((g) => s(l, v, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), a();
  };
  return td(u), u;
}
class ld extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function xe(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = me(e) ? new ld(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Te = (e) => e === void 0, tt = (e) => typeof e == "boolean", $t = (e) => typeof e == "number", nt = (e) => Bl(e), dd = (e) => me(e) ? !Number.isNaN(Number(e)) : !1, de = {
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  numpadEnter: "NumpadEnter"
}, ud = "utils/dom/style", yr = (e = "") => e.split(" ").filter((t) => !!t.trim()), cd = (e, t) => {
  !e || !t.trim() || e.classList.add(...yr(t));
}, vt = (e, t) => {
  !e || !t.trim() || e.classList.remove(...yr(t));
};
function fd(e, t = "px") {
  if (!e && e !== 0)
    return "";
  if ($t(e) || dd(e))
    return `${e}${t}`;
  if (me(e))
    return e;
  xe(ud, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.2 */
var hd = /* @__PURE__ */ Q({
  name: "CaretRight",
  __name: "caret-right",
  setup(e) {
    return (t, n) => ($(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), mr = hd, pd = /* @__PURE__ */ Q({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => ($(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
      })
    ]));
  }
}), br = pd;
const Cr = "__epPropKey", ze = (e) => e, gd = (e) => st(e) && !!e[Cr], Nr = (e, t) => {
  if (!st(e) || gd(e))
    return e;
  const { values: n, required: r, default: o, type: i, validator: a } = e, d = {
    type: i,
    required: !!r,
    validator: n || a ? (u) => {
      let l = !1, h = [];
      if (n && (h = Array.from(n), Me(e, "default") && h.push(o), l || (l = h.includes(u))), a && (l || (l = a(u))), !l && h.length > 0) {
        const f = [...new Set(h)].map((v) => JSON.stringify(v)).join(", ");
        Jr(
          `Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(
            u
          )}.`
        );
      }
      return l;
    } : void 0,
    [Cr]: !0
  };
  return Me(e, "default") && (d.default = o), d;
}, qt = (e) => jl(
  Object.entries(e).map(([t, n]) => [
    t,
    Nr(n, t)
  ])
), vd = ze([
  String,
  Object,
  Function
]), Wt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, wr = (e) => (e.install = Zl, e), yd = ["", "default", "small", "large"], yt = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: i = "API" }, a) => {
  z(
    () => k(a),
    (s) => {
      s && xe(
        n,
        `[${i}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`
      );
    },
    {
      immediate: !0
    }
  );
};
var md = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value",
      alphaDescription: "alpha {alpha}, current color is {color}",
      hueLabel: "pick hue value",
      hueDescription: "hue {hue}, current color is {color}",
      svLabel: "pick saturation and brightness value",
      svDescription: "saturation {saturation}, brightness {brightness}, current color is {color}",
      predefineDescription: "select {value} as the color"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum",
      selectAllLabel: "Select all rows",
      selectRowLabel: "Select this row",
      expandRowLabel: "Expand this row",
      collapseRowLabel: "Collapse this row",
      sortLabel: "Sort by {column}",
      filterLabel: "Filter by {column}"
    },
    tag: {
      close: "Close this tag"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      close: "Close this dialog"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const bd = (e) => (t, n) => Cd(t, n, k(e)), Cd = (e, t, n) => $a(n, e, e).replace(
  /\{(\w+)\}/g,
  (r, o) => {
    var i;
    return `${(i = t == null ? void 0 : t[o]) != null ? i : `{${o}}`}`;
  }
), Nd = (e) => {
  const t = T(() => k(e).name), n = Pt(e) ? e : A(e);
  return {
    lang: t,
    locale: n,
    t: bd(e)
  };
}, wd = Symbol("localeContextKey"), Sd = (e) => {
  const t = P(wd, A());
  return Nd(T(() => t.value || md));
}, mt = "el", kd = "is-", fe = (e, t, n, r, o) => {
  let i = `${e}-${t}`;
  return n && (i += `-${n}`), r && (i += `__${r}`), o && (i += `--${o}`), i;
}, $d = Symbol("namespaceContextKey"), Sr = (e) => {
  const t = ne() ? P($d, A(mt)) : A(mt);
  return T(() => k(t) || mt);
}, ee = (e, t) => {
  const n = Sr();
  return {
    namespace: n,
    b: (c = "") => fe(n.value, e, c, "", ""),
    e: (c) => c ? fe(n.value, e, "", c, "") : "",
    m: (c) => c ? fe(n.value, e, "", "", c) : "",
    be: (c, p) => c && p ? fe(n.value, e, c, p, "") : "",
    em: (c, p) => c && p ? fe(n.value, e, "", c, p) : "",
    bm: (c, p) => c && p ? fe(n.value, e, c, "", p) : "",
    bem: (c, p, y) => c && p && y ? fe(n.value, e, c, p, y) : "",
    is: (c, ...p) => {
      const y = p.length >= 1 ? p[0] : !0;
      return c && y ? `${kd}${c}` : "";
    },
    cssVar: (c) => {
      const p = {};
      for (const y in c)
        c[y] && (p[`--${n.value}-${y}`] = c[y]);
      return p;
    },
    cssVarName: (c) => `--${n.value}-${c}`,
    cssVarBlock: (c) => {
      const p = {};
      for (const y in c)
        c[y] && (p[`--${n.value}-${e}-${y}`] = c[y]);
      return p;
    },
    cssVarBlockName: (c) => `--${n.value}-${e}-${c}`
  };
}, kr = (e) => {
  const t = ne();
  return T(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Tt = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Td = Symbol("elIdInjection"), Ed = () => ne() ? P(Td, Tt) : Tt, Od = (e) => {
  const t = Ed();
  !vr && t === Tt && xe(
    "IdInjection",
    `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`
  );
  const n = Sr();
  return ed(
    () => k(e) || `${n.value}-id-${t.prefix}-${t.current++}`
  );
}, $r = Nr({
  type: String,
  values: yd,
  required: !1
}), _d = Symbol("size"), xd = () => {
  const e = P(_d, {});
  return T(() => k(e.size) || "");
}, Id = qt({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Tr = (e) => pr(Id, e), lt = Symbol("formContextKey"), Yt = Symbol("formItemContextKey");
var Fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const In = (e, t = {}) => {
  const n = A(void 0), r = t.prop ? n : kr("size"), o = t.global ? n : xd(), i = t.form ? { size: void 0 } : P(lt, void 0), a = t.formItem ? { size: void 0 } : P(Yt, void 0);
  return T(
    () => r.value || k(e) || (a == null ? void 0 : a.size) || (i == null ? void 0 : i.size) || o.value || ""
  );
}, Er = (e) => {
  const t = kr("disabled"), n = P(lt, void 0);
  return T(() => {
    var r, o, i;
    return (i = (o = (r = t.value) != null ? r : k(e)) != null ? o : n == null ? void 0 : n.disabled) != null ? i : !1;
  });
}, Jt = () => {
  const e = P(lt, void 0), t = P(Yt, void 0);
  return {
    form: e,
    formItem: t
  };
}, Or = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = A(!1)), r || (r = A(!1));
  const o = ne(), i = () => {
    let u = o == null ? void 0 : o.parent;
    for (; u; ) {
      if (u.type.name === "ElFormItem")
        return !1;
      if (u.type.name === "ElLabelWrap")
        return !0;
      u = u.parent;
    }
    return !1;
  }, a = A();
  let s;
  const d = T(() => {
    var u;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((u = t.inputIds) == null ? void 0 : u.length) <= 1);
  });
  return Ln(() => {
    s = z(
      [Xr(e, "id"), n],
      ([u, l]) => {
        const h = u ?? (l ? void 0 : Od().value);
        h !== a.value && (t != null && t.removeInputId && !i() && (a.value && t.removeInputId(a.value), !(r != null && r.value) && !l && h && t.addInputId(h)), a.value = h);
      },
      { immediate: !0 }
    );
  }), Zr(() => {
    s && s(), t != null && t.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: d,
    inputId: a
  };
}, Dd = Symbol("ElSelect"), Se = "$treeNodeId", Dn = function(e, t) {
  !t || t[Se] || Object.defineProperty(t, Se, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, Xt = function(e, t) {
  return e ? t[e] : t[Se];
}, Et = (e, t, n) => {
  const r = e.value.currentNode;
  n();
  const o = e.value.currentNode;
  r !== o && t("current-change", o ? o.data : null, o);
}, Ot = (e) => {
  let t = !0, n = !0, r = !0;
  for (let o = 0, i = e.length; o < i; o++) {
    const a = e[o];
    (a.checked !== !0 || a.indeterminate) && (t = !1, a.disabled || (r = !1)), (a.checked !== !1 || a.indeterminate) && (n = !1);
  }
  return { all: t, none: n, allWithoutDisable: r, half: !t && !n };
}, Pe = function(e) {
  if (e.childNodes.length === 0 || e.loading) return;
  const { all: t, none: n, half: r } = Ot(e.childNodes);
  t ? (e.checked = !0, e.indeterminate = !1) : r ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
  const o = e.parent;
  !o || o.level === 0 || e.store.checkStrictly || Pe(o);
}, Ue = function(e, t) {
  const n = e.store.props, r = e.data || {}, o = n[t];
  if (et(o))
    return o(r, e);
  if (me(o))
    return r[o];
  if (Te(o)) {
    const i = r[t];
    return i === void 0 ? "" : i;
  }
};
let Ad = 0;
class ue {
  constructor(t) {
    this.id = Ad++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const n in t)
      Me(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t)
      throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const i = Ue(this, "isLeaf");
      tt(i) && (this.isLeafByUser = i);
    }
    if (t.lazy !== !0 && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && t.lazy && t.defaultExpandAll && !this.isLeafByUser && this.expand(), oe(this.data) || Dn(this, this.data), !this.data) return;
    const r = t.defaultExpandedKeys, o = t.key;
    o && r && r.includes(this.key) && this.expand(null, t.autoExpandParent), o && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = !0), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(t) {
    oe(t) || Dn(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && oe(this.data) ? n = this.data : n = Ue(this, "children") || [];
    for (let r = 0, o = n.length; r < o; r++)
      this.insertChild({ data: n[r] });
  }
  get label() {
    return Ue(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return Ue(this, "disabled");
  }
  get nextSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return t.childNodes[n + 1];
    }
    return null;
  }
  get previousSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return n > 0 ? t.childNodes[n - 1] : null;
    }
    return null;
  }
  contains(t, n = !0) {
    return (this.childNodes || []).some(
      (r) => r === t || n && r.contains(t)
    );
  }
  remove() {
    const t = this.parent;
    t && t.removeChild(this);
  }
  insertChild(t, n, r) {
    if (!t) throw new Error("InsertChild error: child is required.");
    if (!(t instanceof ue)) {
      if (!r) {
        const o = this.getChildren(!0);
        o.includes(t.data) || (Te(n) || n < 0 ? o.push(t.data) : o.splice(n, 0, t.data));
      }
      Object.assign(t, {
        parent: this,
        store: this.store
      }), t = Qr(new ue(t)), t instanceof ue && t.initialize();
    }
    t.level = this.level + 1, Te(n) || n < 0 ? this.childNodes.push(t) : this.childNodes.splice(n, 0, t), this.updateLeafState();
  }
  insertBefore(t, n) {
    let r;
    n && (r = this.childNodes.indexOf(n)), this.insertChild(t, r);
  }
  insertAfter(t, n) {
    let r;
    n && (r = this.childNodes.indexOf(n), r !== -1 && (r += 1)), this.insertChild(t, r);
  }
  removeChild(t) {
    const n = this.getChildren() || [], r = n.indexOf(t.data);
    r > -1 && n.splice(r, 1);
    const o = this.childNodes.indexOf(t);
    o > -1 && (this.store && this.store.deregisterNode(t), t.parent = null, this.childNodes.splice(o, 1)), this.updateLeafState();
  }
  removeChildByData(t) {
    let n = null;
    for (let r = 0; r < this.childNodes.length; r++)
      if (this.childNodes[r].data === t) {
        n = this.childNodes[r];
        break;
      }
    n && this.removeChild(n);
  }
  expand(t, n) {
    const r = () => {
      if (n) {
        let o = this.parent;
        for (; o.level > 0; )
          o.expanded = !0, o = o.parent;
      }
      this.expanded = !0, t && t(), this.childNodes.forEach((o) => {
        o.canFocus = !0;
      });
    };
    this.shouldLoadData() ? this.loadData((o) => {
      oe(o) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || Pe(this), r());
    }) : r();
  }
  doCreateChildren(t, n = {}) {
    t.forEach((r) => {
      this.insertChild(
        Object.assign({ data: r }, n),
        void 0,
        !0
      );
    });
  }
  collapse() {
    this.expanded = !1, this.childNodes.forEach((t) => {
      t.canFocus = !1;
    });
  }
  shouldLoadData() {
    return this.store.lazy === !0 && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === !0 && this.loaded !== !0 && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const t = this.childNodes;
    if (!this.store.lazy || this.store.lazy === !0 && this.loaded === !0) {
      this.isLeaf = !t || t.length === 0;
      return;
    }
    this.isLeaf = !1;
  }
  setChecked(t, n, r, o) {
    if (this.indeterminate = t === "half", this.checked = t === !0, this.store.checkStrictly) return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: a, allWithoutDisable: s } = Ot(this.childNodes);
      !this.isLeaf && !a && s && (this.checked = !1, t = !1);
      const d = () => {
        if (n) {
          const u = this.childNodes;
          for (let f = 0, v = u.length; f < v; f++) {
            const g = u[f];
            o = o || t !== !1;
            const c = g.disabled ? g.checked : o;
            g.setChecked(c, n, !0, o);
          }
          const { half: l, all: h } = Ot(u);
          h || (this.checked = h, this.indeterminate = l);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(
          () => {
            d(), Pe(this);
          },
          {
            checked: t !== !1
          }
        );
        return;
      } else
        d();
    }
    const i = this.parent;
    !i || i.level === 0 || r || Pe(i);
  }
  getChildren(t = !1) {
    if (this.level === 0) return this.data;
    const n = this.data;
    if (!n) return null;
    const r = this.store.props;
    let o = "children";
    return r && (o = r.children || "children"), n[o] === void 0 && (n[o] = null), t && !n[o] && (n[o] = []), n[o];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((i) => i.data), r = {}, o = [];
    t.forEach((i, a) => {
      const s = i[Se];
      !!s && n.findIndex((u) => u[Se] === s) >= 0 ? r[s] = { index: a, data: i } : o.push({ index: a, data: i });
    }), this.store.lazy || n.forEach((i) => {
      r[i[Se]] || this.removeChildByData(i);
    }), o.forEach(({ index: i, data: a }) => {
      this.insertChild({ data: a }, i);
    }), this.updateLeafState();
  }
  loadData(t, n = {}) {
    if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = !0;
      const r = (i) => {
        this.childNodes = [], this.doCreateChildren(i, n), this.loaded = !0, this.loading = !1, this.updateLeafState(), t && t.call(this, i);
      }, o = () => {
        this.loading = !1;
      };
      this.store.load(this, r, o);
    } else
      t && t.call(this);
  }
  eachNode(t) {
    const n = [this];
    for (; n.length; ) {
      const r = n.shift();
      n.unshift(...r.childNodes), t(r);
    }
  }
  reInitChecked() {
    this.store.checkStrictly || Pe(this);
  }
}
class Pd {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t)
      Me(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new ue({
      data: this.data,
      store: this
    }), this.root.initialize(), this.lazy && this.load) {
      const t = this.load;
      t(this.root, (n) => {
        this.root.doCreateChildren(n), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(t) {
    const n = this.filterNodeMethod, r = this.lazy, o = function(i) {
      const a = i.root ? i.root.childNodes : i.childNodes;
      if (a.forEach((s) => {
        s.visible = n.call(s, t, s.data, s), o(s);
      }), !i.visible && a.length) {
        let s = !0;
        s = !a.some((d) => d.visible), i.root ? i.root.visible = s === !1 : i.visible = s === !1;
      }
      t && i.visible && !i.isLeaf && (!r || i.loaded) && i.expand();
    };
    o(this);
  }
  setData(t) {
    t !== this.root.data ? (this.nodesMap = {}, this.root.setData(t), this._initDefaultCheckedNodes(), this.setCurrentNodeKey(this.currentNodeKey)) : this.root.updateChildren();
  }
  getNode(t) {
    if (t instanceof ue) return t;
    const n = st(t) ? Xt(this.key, t) : t;
    return this.nodesMap[n] || null;
  }
  insertBefore(t, n) {
    const r = this.getNode(n);
    r.parent.insertBefore({ data: t }, r);
  }
  insertAfter(t, n) {
    const r = this.getNode(n);
    r.parent.insertAfter({ data: t }, r);
  }
  remove(t) {
    const n = this.getNode(t);
    n && n.parent && (n === this.currentNode && (this.currentNode = null), n.parent.removeChild(n));
  }
  append(t, n) {
    const r = nt(n) ? this.root : this.getNode(n);
    r && r.insertChild({ data: t });
  }
  _initDefaultCheckedNodes() {
    const t = this.defaultCheckedKeys || [], n = this.nodesMap;
    t.forEach((r) => {
      const o = n[r];
      o && o.setChecked(!0, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(t) {
    (this.defaultCheckedKeys || []).includes(t.key) && t.setChecked(!0, !this.checkStrictly);
  }
  setDefaultCheckedKey(t) {
    t !== this.defaultCheckedKeys && (this.defaultCheckedKeys = t, this._initDefaultCheckedNodes());
  }
  registerNode(t) {
    const n = this.key;
    !t || !t.data || (n ? t.key !== void 0 && (this.nodesMap[t.key] = t) : this.nodesMap[t.id] = t);
  }
  deregisterNode(t) {
    !this.key || !t || !t.data || (t.childNodes.forEach((r) => {
      this.deregisterNode(r);
    }), delete this.nodesMap[t.key]);
  }
  getCheckedNodes(t = !1, n = !1) {
    const r = [], o = function(i) {
      (i.root ? i.root.childNodes : i.childNodes).forEach((s) => {
        (s.checked || n && s.indeterminate) && (!t || t && s.isLeaf) && r.push(s.data), o(s);
      });
    };
    return o(this), r;
  }
  getCheckedKeys(t = !1) {
    return this.getCheckedNodes(t).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const t = [], n = function(r) {
      (r.root ? r.root.childNodes : r.childNodes).forEach((i) => {
        i.indeterminate && t.push(i.data), n(i);
      });
    };
    return n(this), t;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((t) => (t || {})[this.key]);
  }
  _getAllNodes() {
    const t = [], n = this.nodesMap;
    for (const r in n)
      Me(n, r) && t.push(n[r]);
    return t;
  }
  updateChildren(t, n) {
    const r = this.nodesMap[t];
    if (!r) return;
    const o = r.childNodes;
    for (let i = o.length - 1; i >= 0; i--) {
      const a = o[i];
      this.remove(a.data);
    }
    for (let i = 0, a = n.length; i < a; i++) {
      const s = n[i];
      this.append(s, r.data);
    }
  }
  _setCheckedKeys(t, n = !1, r) {
    const o = this._getAllNodes().sort((d, u) => d.level - u.level), i = /* @__PURE__ */ Object.create(null), a = Object.keys(r);
    o.forEach((d) => d.setChecked(!1, !1));
    const s = (d) => {
      d.childNodes.forEach((u) => {
        var l;
        i[u.data[t]] = !0, (l = u.childNodes) != null && l.length && s(u);
      });
    };
    for (let d = 0, u = o.length; d < u; d++) {
      const l = o[d], h = l.data[t].toString();
      if (!a.includes(h)) {
        l.checked && !i[h] && l.setChecked(!1, !1);
        continue;
      }
      if (l.childNodes.length && s(l), l.isLeaf || this.checkStrictly) {
        l.setChecked(!0, !1);
        continue;
      }
      if (l.setChecked(!0, !0), n) {
        l.setChecked(!1, !1);
        const v = function(g) {
          g.childNodes.forEach((p) => {
            p.isLeaf || p.setChecked(!1, !1), v(p);
          });
        };
        v(l);
      }
    }
  }
  setCheckedNodes(t, n = !1) {
    const r = this.key, o = {};
    t.forEach((i) => {
      o[(i || {})[r]] = !0;
    }), this._setCheckedKeys(r, n, o);
  }
  setCheckedKeys(t, n = !1) {
    this.defaultCheckedKeys = t;
    const r = this.key, o = {};
    t.forEach((i) => {
      o[i] = !0;
    }), this._setCheckedKeys(r, n, o);
  }
  setDefaultExpandedKeys(t) {
    t = t || [], this.defaultExpandedKeys = t, t.forEach((n) => {
      const r = this.getNode(n);
      r && r.expand(null, this.autoExpandParent);
    });
  }
  setChecked(t, n, r) {
    const o = this.getNode(t);
    o && o.setChecked(!!n, r);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(t) {
    const n = this.currentNode;
    n && (n.isCurrent = !1), this.currentNode = t, this.currentNode.isCurrent = !0;
  }
  setUserCurrentNode(t, n = !0) {
    const r = t[this.key], o = this.nodesMap[r];
    this.setCurrentNode(o), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
  }
  setCurrentNodeKey(t, n = !0) {
    if (this.currentNodeKey = t, t == null) {
      this.currentNode && (this.currentNode.isCurrent = !1), this.currentNode = null;
      return;
    }
    const r = this.getNode(t);
    r && (this.setCurrentNode(r), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0));
  }
}
const Ld = Q({
  name: "ElCollapseTransition",
  __name: "collapse-transition",
  setup(e) {
    const t = ee("collapse-transition"), n = (o) => {
      o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom;
    }, r = {
      beforeEnter(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.height && (o.dataset.elExistsHeight = o.style.height), o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0;
      },
      enter(o) {
        requestAnimationFrame(() => {
          o.dataset.oldOverflow = o.style.overflow, o.dataset.elExistsHeight ? o.style.maxHeight = o.dataset.elExistsHeight : o.scrollHeight !== 0 ? o.style.maxHeight = `${o.scrollHeight}px` : o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom, o.style.overflow = "hidden";
        });
      },
      afterEnter(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow;
      },
      enterCancelled(o) {
        n(o);
      },
      beforeLeave(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden";
      },
      leave(o) {
        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0);
      },
      afterLeave(o) {
        n(o);
      },
      leaveCancelled(o) {
        n(o);
      }
    };
    return (o, i) => ($(), M(eo, Ee({
      name: k(t).b()
    }, zn(r)), {
      default: Z(() => [
        J(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var zd = /* @__PURE__ */ Fe(Ld, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
const _r = Wt(zd), dt = "update:modelValue", _t = "change", xr = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: $r,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: String,
  ...Tr(["ariaControls"])
}, Ir = {
  [dt]: (e) => me(e) || $t(e) || tt(e),
  change: (e) => me(e) || $t(e) || tt(e)
}, Ie = Symbol("checkboxGroupContextKey"), Kd = ({
  model: e,
  isChecked: t
}) => {
  const n = P(Ie, void 0), r = P(lt, void 0), o = T(() => {
    var a, s;
    const d = (a = n == null ? void 0 : n.max) == null ? void 0 : a.value, u = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !Te(d) && e.value.length >= d && !t.value || !Te(u) && e.value.length <= u && t.value;
  });
  return {
    isDisabled: Er(
      T(() => {
        var a, s;
        return n === void 0 ? (a = r == null ? void 0 : r.disabled) != null ? a : o.value : ((s = n.disabled) == null ? void 0 : s.value) || o.value;
      })
    ),
    isLimitDisabled: o
  };
}, jd = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: o,
  isLabeledByFormItem: i
}) => {
  const a = P(Ie, void 0), { formItem: s } = Jt(), { emit: d } = ne();
  function u(g) {
    var c, p, y, b;
    return [!0, e.trueValue, e.trueLabel].includes(g) ? (p = (c = e.trueValue) != null ? c : e.trueLabel) != null ? p : !0 : (b = (y = e.falseValue) != null ? y : e.falseLabel) != null ? b : !1;
  }
  function l(g, c) {
    d(_t, u(g), c);
  }
  function h(g) {
    if (n.value)
      return;
    const c = g.target;
    d(_t, u(c.checked), g);
  }
  async function f(g) {
    n.value || !r.value && !o.value && i.value && (g.composedPath().some(
      (y) => y.tagName === "LABEL"
    ) || (t.value = u(
      [!1, e.falseValue, e.falseLabel].includes(t.value)
    ), await Oe(), l(t.value, g)));
  }
  const v = T(
    () => (a == null ? void 0 : a.validateEvent) || e.validateEvent
  );
  return z(
    () => e.modelValue,
    () => {
      v.value && (s == null || s.validate("change").catch((g) => xe(g)));
    }
  ), {
    handleChange: h,
    onClickRoot: f
  };
}, Md = (e) => {
  const t = A(!1), { emit: n } = ne(), r = P(Ie, void 0), o = T(() => Te(r) === !1), i = A(!1), a = T({
    get() {
      var s, d;
      return o.value ? (s = r == null ? void 0 : r.modelValue) == null ? void 0 : s.value : (d = e.modelValue) != null ? d : t.value;
    },
    set(s) {
      var d, u;
      o.value && oe(s) ? (i.value = ((d = r == null ? void 0 : r.max) == null ? void 0 : d.value) !== void 0 && s.length > (r == null ? void 0 : r.max.value) && s.length > a.value.length, i.value === !1 && ((u = r == null ? void 0 : r.changeEvent) == null || u.call(r, s))) : (n(dt, s), t.value = s);
    }
  });
  return {
    model: a,
    isGroup: o,
    isLimitExceeded: i
  };
}, Bd = (e, t, { model: n }) => {
  const r = P(Ie, void 0), o = A(!1), i = T(() => nt(e.value) ? e.label : e.value), a = T(() => {
    const l = n.value;
    return tt(l) ? l : oe(l) ? st(i.value) ? l.map(tn).some((h) => hr(h, i.value)) : l.map(tn).includes(i.value) : l != null ? l === e.trueValue || l === e.trueLabel : !!l;
  }), s = In(
    T(() => {
      var l;
      return (l = r == null ? void 0 : r.size) == null ? void 0 : l.value;
    }),
    {
      prop: !0
    }
  ), d = In(T(() => {
    var l;
    return (l = r == null ? void 0 : r.size) == null ? void 0 : l.value;
  })), u = T(() => !!t.default || !nt(i.value));
  return {
    checkboxButtonSize: s,
    isChecked: a,
    isFocused: o,
    checkboxSize: d,
    hasOwnLabel: u,
    actualValue: i
  };
}, Dr = (e, t) => {
  const { formItem: n } = Jt(), { model: r, isGroup: o, isLimitExceeded: i } = Md(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: d,
    checkboxSize: u,
    hasOwnLabel: l,
    actualValue: h
  } = Bd(e, t, { model: r }), { isDisabled: f } = Kd({ model: r, isChecked: s }), { inputId: v, isLabeledByFormItem: g } = Or(e, {
    formItemContext: n,
    disableIdGeneration: l,
    disableIdManagement: o
  }), { handleChange: c, onClickRoot: p } = jd(e, {
    model: r,
    isLimitExceeded: i,
    hasOwnLabel: l,
    isDisabled: f,
    isLabeledByFormItem: g
  });
  return (() => {
    function b() {
      var w, m;
      oe(r.value) && !r.value.includes(h.value) ? r.value.push(h.value) : r.value = (m = (w = e.trueValue) != null ? w : e.trueLabel) != null ? m : !0;
    }
    e.checked && b();
  })(), yt(
    {
      from: "label act as value",
      replacement: "value",
      version: "3.0.0",
      scope: "el-checkbox",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    },
    T(() => o.value && nt(e.value))
  ), yt(
    {
      from: "true-label",
      replacement: "true-value",
      version: "3.0.0",
      scope: "el-checkbox",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    },
    T(() => !!e.trueLabel)
  ), yt(
    {
      from: "false-label",
      replacement: "false-value",
      version: "3.0.0",
      scope: "el-checkbox",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    },
    T(() => !!e.falseLabel)
  ), {
    inputId: v,
    isLabeledByFormItem: g,
    isChecked: s,
    isDisabled: f,
    isFocused: a,
    checkboxButtonSize: d,
    checkboxSize: u,
    hasOwnLabel: l,
    model: r,
    actualValue: h,
    handleChange: c,
    onClickRoot: p
  };
}, Fd = ["id", "indeterminate", "name", "tabindex", "disabled"], Rd = Q({
  name: "ElCheckbox",
  __name: "checkbox",
  props: xr,
  emits: Ir,
  setup(e) {
    const t = e, n = Kn(), {
      inputId: r,
      isLabeledByFormItem: o,
      isChecked: i,
      isDisabled: a,
      isFocused: s,
      checkboxSize: d,
      hasOwnLabel: u,
      model: l,
      actualValue: h,
      handleChange: f,
      onClickRoot: v
    } = Dr(t, n), g = T(() => {
      var b, w, m, O;
      return t.trueValue || t.falseValue || t.trueLabel || t.falseLabel ? {
        "true-value": (w = (b = t.trueValue) != null ? b : t.trueLabel) != null ? w : !0,
        "false-value": (O = (m = t.falseValue) != null ? m : t.falseLabel) != null ? O : !1
      } : {
        value: h.value
      };
    }), c = ee("checkbox"), p = T(() => [
      c.b(),
      c.m(d.value),
      c.is("disabled", a.value),
      c.is("bordered", t.border),
      c.is("checked", i.value)
    ]), y = T(() => [
      c.e("input"),
      c.is("disabled", a.value),
      c.is("checked", i.value),
      c.is("indeterminate", t.indeterminate),
      c.is("focus", s.value)
    ]);
    return (b, w) => ($(), M(he(!k(u) && k(o) ? "span" : "label"), {
      for: !k(u) && k(o) ? null : k(r),
      class: L(p.value),
      "aria-controls": b.indeterminate ? b.ariaControls : null,
      "aria-checked": b.indeterminate ? "mixed" : void 0,
      "aria-label": b.ariaLabel,
      onClick: k(v)
    }, {
      default: Z(() => [
        X(
          "span",
          {
            class: L(y.value)
          },
          [
            pe(X("input", Ee({
              id: k(r),
              "onUpdate:modelValue": w[0] || (w[0] = (m) => Pt(l) ? l.value = m : null),
              class: k(c).e("original"),
              type: "checkbox",
              indeterminate: b.indeterminate,
              name: b.name,
              tabindex: b.tabindex,
              disabled: k(a)
            }, g.value, {
              onChange: w[1] || (w[1] = (...m) => k(f) && k(f)(...m)),
              onFocus: w[2] || (w[2] = (m) => s.value = !0),
              onBlur: w[3] || (w[3] = (m) => s.value = !1),
              onClick: w[4] || (w[4] = V(() => {
              }, ["stop"]))
            }), null, 16, Fd), [
              [jn, k(l)]
            ]),
            X(
              "span",
              {
                class: L(k(c).e("inner"))
              },
              null,
              2
            )
          ],
          2
        ),
        k(u) ? ($(), B(
          "span",
          {
            key: 0,
            class: L(k(c).e("label"))
          },
          [
            J(b.$slots, "default"),
            b.$slots.default ? H("v-if", !0) : ($(), B(
              Be,
              { key: 0 },
              [
                Mn(
                  Lt(b.label),
                  1
                )
              ],
              64
            ))
          ],
          2
        )) : H("v-if", !0)
      ]),
      _: 3
    }, 8, ["for", "class", "aria-controls", "aria-checked", "aria-label", "onClick"]));
  }
});
var Ar = /* @__PURE__ */ Fe(Rd, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Vd = ["name", "tabindex", "disabled"], Hd = Q({
  name: "ElCheckboxButton",
  __name: "checkbox-button",
  props: xr,
  emits: Ir,
  setup(e) {
    const t = e, n = Kn(), {
      isFocused: r,
      isChecked: o,
      isDisabled: i,
      checkboxButtonSize: a,
      model: s,
      actualValue: d,
      handleChange: u
    } = Dr(t, n), l = T(() => {
      var c, p, y, b;
      return t.trueValue || t.falseValue || t.trueLabel || t.falseLabel ? {
        "true-value": (p = (c = t.trueValue) != null ? c : t.trueLabel) != null ? p : !0,
        "false-value": (b = (y = t.falseValue) != null ? y : t.falseLabel) != null ? b : !1
      } : {
        value: d.value
      };
    }), h = P(Ie, void 0), f = ee("checkbox"), v = T(() => {
      var c, p, y, b;
      const w = (p = (c = h == null ? void 0 : h.fill) == null ? void 0 : c.value) != null ? p : "";
      return {
        backgroundColor: w,
        borderColor: w,
        color: (b = (y = h == null ? void 0 : h.textColor) == null ? void 0 : y.value) != null ? b : "",
        boxShadow: w ? `-1px 0 0 0 ${w}` : void 0
      };
    }), g = T(() => [
      f.b("button"),
      f.bm("button", a.value),
      f.is("disabled", i.value),
      f.is("checked", o.value),
      f.is("focus", r.value)
    ]);
    return (c, p) => ($(), B(
      "label",
      {
        class: L(g.value)
      },
      [
        pe(X("input", Ee({
          "onUpdate:modelValue": p[0] || (p[0] = (y) => Pt(s) ? s.value = y : null),
          class: k(f).be("button", "original"),
          type: "checkbox",
          name: c.name,
          tabindex: c.tabindex,
          disabled: k(i)
        }, l.value, {
          onChange: p[1] || (p[1] = (...y) => k(u) && k(u)(...y)),
          onFocus: p[2] || (p[2] = (y) => r.value = !0),
          onBlur: p[3] || (p[3] = (y) => r.value = !1),
          onClick: p[4] || (p[4] = V(() => {
          }, ["stop"]))
        }), null, 16, Vd), [
          [jn, k(s)]
        ]),
        c.$slots.default || c.label ? ($(), B(
          "span",
          {
            key: 0,
            class: L(k(f).be("button", "inner")),
            style: ge(k(o) ? v.value : void 0)
          },
          [
            J(c.$slots, "default", {}, () => [
              Mn(
                Lt(c.label),
                1
              )
            ])
          ],
          6
        )) : H("v-if", !0)
      ],
      2
    ));
  }
});
var Zt = /* @__PURE__ */ Fe(Hd, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const Ud = qt({
  modelValue: {
    type: ze(Array),
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  min: Number,
  max: Number,
  size: $r,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  options: {
    type: ze(Array)
  },
  props: {
    type: ze(Object),
    default: () => Pr
  },
  type: {
    type: String,
    values: ["checkbox", "button"],
    default: "checkbox"
  },
  ...Tr(["ariaLabel"])
}), Gd = {
  [dt]: (e) => oe(e),
  change: (e) => oe(e)
}, Pr = {
  label: "label",
  value: "value",
  disabled: "disabled"
}, qd = Q({
  name: "ElCheckboxGroup",
  __name: "checkbox-group",
  props: Ud,
  emits: Gd,
  setup(e, { emit: t }) {
    const n = e, r = t, o = ee("checkbox"), i = Er(), { formItem: a } = Jt(), { inputId: s, isLabeledByFormItem: d } = Or(n, {
      formItemContext: a
    }), u = async (g) => {
      r(dt, g), await Oe(), r(_t, g);
    }, l = T({
      get() {
        return n.modelValue;
      },
      set(g) {
        u(g);
      }
    }), h = T(() => ({
      ...Pr,
      ...n.props
    })), f = (g) => {
      const { label: c, value: p, disabled: y } = h.value, b = {
        label: g[c],
        value: g[p],
        disabled: g[y]
      };
      return { ...Wl(g, [c, p, y]), ...b };
    }, v = T(
      () => n.type === "button" ? Zt : Ar
    );
    return ve(Ie, {
      ...pr(to(n), [
        "size",
        "min",
        "max",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      disabled: i,
      modelValue: l,
      changeEvent: u
    }), z(
      () => n.modelValue,
      (g, c) => {
        n.validateEvent && !hr(g, c) && (a == null || a.validate("change").catch((p) => xe(p)));
      }
    ), (g, c) => {
      var p;
      return $(), M(he(g.tag), {
        id: k(s),
        class: L(k(o).b("group")),
        role: "group",
        "aria-label": k(d) ? void 0 : g.ariaLabel || "checkbox-group",
        "aria-labelledby": k(d) ? (p = k(a)) == null ? void 0 : p.labelId : void 0
      }, {
        default: Z(() => [
          J(g.$slots, "default", {}, () => [
            ($(!0), B(
              Be,
              null,
              rt(g.options, (y, b) => ($(), M(
                he(v.value),
                Ee({ key: b }, { ref_for: !0 }, f(y)),
                null,
                16
              ))),
              128
            ))
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Lr = /* @__PURE__ */ Fe(qd, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const zr = Wt(Ar, {
  CheckboxButton: Zt,
  CheckboxGroup: Lr
});
wr(Zt);
wr(Lr);
const Wd = qt({
  size: {
    type: ze([Number, String])
  },
  color: {
    type: String
  }
}), Yd = Q({
  name: "ElIcon",
  inheritAttrs: !1,
  __name: "icon",
  props: Wd,
  setup(e) {
    const t = e, n = ee("icon"), r = T(() => {
      const { size: o, color: i } = t, a = fd(o);
      return !a && !i ? {} : {
        fontSize: a,
        "--color": i
      };
    });
    return (o, i) => ($(), B(
      "i",
      Ee({
        class: k(n).b(),
        style: r.value
      }, o.$attrs),
      [
        J(o.$slots, "default")
      ],
      16
    ));
  }
});
var Jd = /* @__PURE__ */ Fe(Yd, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Kr = Wt(Jd), jr = Q({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(e) {
    const t = ee("tree"), n = P("NodeInstance"), r = P("RootTree");
    return () => {
      const o = e.node, { data: i, store: a } = o;
      return e.renderContent ? e.renderContent(nn, { _self: n, node: o, data: i, store: a }) : J(r.ctx.slots, "default", { node: o, data: i }, () => [
        nn("span", { class: t.be("node", "label") }, [o.label])
      ]);
    };
  }
});
function ut(e) {
  const t = P("TreeNodeMap", null), n = {
    treeNodeExpand: (r) => {
      e.node !== r && e.node.collapse();
    },
    children: []
  };
  return t && t.children.push(n), ve("TreeNodeMap", n), {
    broadcastExpanded: (r) => {
      if (e.accordion)
        for (const o of n.children)
          o.treeNodeExpand(r);
    }
  };
}
const ct = Symbol("dragEvents");
function Xd({ props: e, ctx: t, el$: n, dropIndicator$: r, store: o }) {
  const i = ee("tree"), a = A({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return ve(ct, {
    treeNodeDragStart: ({ event: l, treeNode: h }) => {
      if (et(e.allowDrag) && !e.allowDrag(h.node))
        return l.preventDefault(), !1;
      l.dataTransfer.effectAllowed = "move";
      try {
        l.dataTransfer.setData("text/plain", "");
      } catch {
      }
      a.value.draggingNode = h, t.emit("node-drag-start", h.node, l);
    },
    treeNodeDragOver: ({ event: l, treeNode: h }) => {
      const f = h, v = a.value.dropNode;
      v && v.node.id !== f.node.id && vt(v.$el, i.is("drop-inner"));
      const g = a.value.draggingNode;
      if (!g || !f) return;
      let c = !0, p = !0, y = !0, b = !0;
      et(e.allowDrop) && (c = e.allowDrop(g.node, f.node, "prev"), b = p = e.allowDrop(
        g.node,
        f.node,
        "inner"
      ), y = e.allowDrop(g.node, f.node, "next")), l.dataTransfer.dropEffect = p || c || y ? "move" : "none", (c || p || y) && (v == null ? void 0 : v.node.id) !== f.node.id && (v && t.emit("node-drag-leave", g.node, v.node, l), t.emit("node-drag-enter", g.node, f.node, l)), c || p || y ? a.value.dropNode = f : a.value.dropNode = null, f.node.nextSibling === g.node && (y = !1), f.node.previousSibling === g.node && (c = !1), f.node.contains(g.node, !1) && (p = !1), (g.node === f.node || g.node.contains(f.node)) && (c = !1, p = !1, y = !1);
      const w = f.$el.querySelector(`.${i.be("node", "content")}`).getBoundingClientRect(), m = n.value.getBoundingClientRect();
      let O;
      const W = c ? p ? 0.25 : y ? 0.45 : 1 : -1, C = y ? p ? 0.75 : c ? 0.55 : 0 : 1;
      let _ = -9999;
      const I = l.clientY - w.top;
      I < w.height * W ? O = "before" : I > w.height * C ? O = "after" : p ? O = "inner" : O = "none";
      const S = f.$el.querySelector(`.${i.be("node", "expand-icon")}`).getBoundingClientRect(), R = r.value;
      O === "before" ? _ = S.top - m.top : O === "after" && (_ = S.bottom - m.top), R.style.top = `${_}px`, R.style.left = `${S.right - m.left}px`, O === "inner" ? cd(f.$el, i.is("drop-inner")) : vt(f.$el, i.is("drop-inner")), a.value.showDropIndicator = O === "before" || O === "after", a.value.allowDrop = a.value.showDropIndicator || b, a.value.dropType = O, t.emit("node-drag-over", g.node, f.node, l);
    },
    treeNodeDragEnd: (l) => {
      const { draggingNode: h, dropType: f, dropNode: v } = a.value;
      if (l.preventDefault(), l.dataTransfer && (l.dataTransfer.dropEffect = "move"), h && v) {
        const g = { data: h.node.data };
        f !== "none" && h.node.remove(), f === "before" ? v.node.parent.insertBefore(g, v.node) : f === "after" ? v.node.parent.insertAfter(g, v.node) : f === "inner" && v.node.insertChild(g), f !== "none" && (o.value.registerNode(g), o.value.key && h.node.eachNode((c) => {
          var p;
          (p = o.value.nodesMap[c.data[o.value.key]]) == null || p.setChecked(
            c.checked,
            !o.value.checkStrictly
          );
        })), vt(v.$el, i.is("drop-inner")), t.emit(
          "node-drag-end",
          h.node,
          v.node,
          f,
          l
        ), f !== "none" && t.emit("node-drop", h.node, v.node, f, l);
      }
      h && !v && t.emit("node-drag-end", h.node, null, f, l), a.value.showDropIndicator = !1, a.value.draggingNode = null, a.value.dropNode = null, a.value.allowDrop = !0;
    }
  }), {
    dragState: a
  };
}
const Mr = (e, t) => {
  const n = P("RootTree"), r = ne(), { broadcastExpanded: o } = ut(e), i = P(ct);
  n || xe("Tree", "Can not find node's tree.");
  const a = A(!1), s = A(!1), d = A(null), u = A(null), l = A(null), h = (C) => Xt(n.props.nodeKey, C.data), f = (C) => {
    const _ = e.props.class;
    if (!_)
      return {};
    let I;
    if (et(_)) {
      const { data: S } = C;
      I = _(S, C);
    } else
      I = _;
    return me(I) ? { [I]: !0 } : I;
  }, v = (C, _) => {
    (d.value !== C || u.value !== _) && n.ctx.emit("check-change", e.node.data, C, _), d.value = C, u.value = _;
  }, g = (C) => {
    Et(n.store, n.ctx.emit, () => {
      var I;
      if ((I = n == null ? void 0 : n.props) == null ? void 0 : I.nodeKey) {
        const S = h(e.node);
        n.store.value.setCurrentNodeKey(S);
      } else
        n.store.value.setCurrentNode(e.node);
    }), n.currentNode.value = e.node, n.props.expandOnClickNode && p(), n.props.checkOnClickNode && !e.node.disabled && y(null, {
      target: { checked: !e.node.checked }
    }), n.ctx.emit("node-click", e.node.data, e.node, r, C);
  }, c = (C) => {
    n.instance.vnode.props.onNodeContextmenu && (C.stopPropagation(), C.preventDefault()), n.ctx.emit(
      "node-contextmenu",
      C,
      e.node.data,
      e.node,
      r
    );
  }, p = () => {
    e.node.isLeaf || (a.value ? (n.ctx.emit("node-collapse", e.node.data, e.node, r), e.node.collapse()) : e.node.expand(() => {
      t.emit("node-expand", e.node.data, e.node, r);
    }));
  }, y = (C, _) => {
    e.node.setChecked(_.target.checked, !n.props.checkStrictly), nextTick(() => {
      const I = n.store.value;
      n.ctx.emit("check", e.node.data, {
        checkedNodes: I.getCheckedNodes(),
        checkedKeys: I.getCheckedKeys(),
        halfCheckedNodes: I.getHalfCheckedNodes(),
        halfCheckedKeys: I.getHalfCheckedKeys()
      });
    });
  };
  return {
    tree: n,
    expanded: a,
    childNodeRendered: s,
    oldChecked: d,
    oldIndeterminate: u,
    node$: l,
    getNodeKey: h,
    getNodeClass: f,
    handleSelectChange: v,
    handleClick: g,
    handleContextMenu: c,
    handleExpandIconClick: p,
    handleCheckChange: y,
    handleChildNodeExpand: (C, _, I) => {
      o(_), n.ctx.emit("node-expand", C, _, I);
    },
    handleDragStart: (C) => {
      n.props.draggable && i.treeNodeDragStart({ event: C, treeNode: e });
    },
    handleDragOver: (C) => {
      C.preventDefault(), n.props.draggable && i.treeNodeDragOver({
        event: C,
        treeNode: { $el: l.value, node: e.node }
      });
    },
    handleDrop: (C) => {
      C.preventDefault();
    },
    handleDragEnd: (C) => {
      n.props.draggable && i.treeNodeDragEnd(C);
    }
  };
}, Zd = Q({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: _r,
    ElCheckbox: zr,
    NodeContent: jr,
    ElIcon: Kr,
    Loading: br
  },
  props: {
    node: {
      type: ue,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["node-expand"],
  setup(e, t) {
    const {
      tree: n,
      expanded: r,
      childNodeRendered: o,
      oldChecked: i,
      oldIndeterminate: a,
      node$: s,
      getNodeKey: d,
      getNodeClass: u,
      handleSelectChange: l,
      handleClick: h,
      handleContextMenu: f,
      handleExpandIconClick: v,
      handleCheckChange: g,
      handleChildNodeExpand: c,
      handleDragStart: p,
      handleDragOver: y,
      handleDrop: b,
      handleDragEnd: w
    } = Mr(e, t), m = ee("tree");
    ut(e), P(ct);
    const O = ne();
    ve("NodeInstance", O), e.node.expanded && (r.value = !0, o.value = !0);
    const W = n.props.props.children || "children";
    return z(
      () => {
        const C = e.node.data[W];
        return C && [...C];
      },
      () => {
        e.node.updateChildren();
      }
    ), z(
      () => e.node.indeterminate,
      (C) => {
        l(e.node.checked, C);
      }
    ), z(
      () => e.node.checked,
      (C) => {
        l(C, e.node.indeterminate);
      }
    ), z(
      () => e.node.childNodes.length,
      () => e.node.reInitChecked()
    ), z(
      () => e.node.expanded,
      (C) => {
        Oe(() => r.value = C), C && (o.value = !0);
      }
    ), {
      ns: m,
      node$: s,
      tree: n,
      expanded: r,
      childNodeRendered: o,
      oldChecked: i,
      oldIndeterminate: a,
      getNodeKey: d,
      getNodeClass: u,
      handleSelectChange: l,
      handleClick: h,
      handleContextMenu: f,
      handleExpandIconClick: v,
      handleCheckChange: g,
      handleChildNodeExpand: c,
      handleDragStart: p,
      handleDragOver: y,
      handleDrop: b,
      handleDragEnd: w,
      CaretRight: mr
    };
  }
}), Qt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Qd = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], eu = ["aria-expanded"];
function tu(e, t, n, r, o, i) {
  const a = G("el-icon"), s = G("el-checkbox"), d = G("loading"), u = G("node-content"), l = G("el-tree-node"), h = G("el-collapse-transition");
  return pe(($(), B("div", {
    ref: "node$",
    class: L([
      e.ns.b("node"),
      e.ns.is("expanded", e.expanded),
      e.ns.is("current", e.node.isCurrent),
      e.ns.is("hidden", !e.node.visible),
      e.ns.is("focusable", !e.node.disabled),
      e.ns.is("checked", !e.node.disabled && e.node.checked),
      e.getNodeClass(e.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": e.expanded,
    "aria-disabled": e.node.disabled,
    "aria-checked": e.node.checked,
    draggable: e.tree.props.draggable,
    "data-key": e.getNodeKey(e.node),
    onClick: t[1] || (t[1] = V((...f) => e.handleClick && e.handleClick(...f), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...f) => e.handleContextMenu && e.handleContextMenu(...f)),
    onDragstart: t[3] || (t[3] = V((...f) => e.handleDragStart && e.handleDragStart(...f), ["stop"])),
    onDragover: t[4] || (t[4] = V((...f) => e.handleDragOver && e.handleDragOver(...f), ["stop"])),
    onDragend: t[5] || (t[5] = V((...f) => e.handleDragEnd && e.handleDragEnd(...f), ["stop"])),
    onDrop: t[6] || (t[6] = V((...f) => e.handleDrop && e.handleDrop(...f), ["stop"]))
  }, [
    X("div", {
      class: L(e.ns.be("node", "content")),
      style: ge({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
    }, [
      e.tree.props.icon || e.CaretRight ? ($(), M(a, {
        key: 0,
        class: L([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: V(e.handleExpandIconClick, ["stop"])
      }, {
        default: Z(() => [
          ($(), M(he(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("", !0),
      e.showCheckbox ? ($(), M(s, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = V(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : H("", !0),
      e.node.loading ? ($(), M(a, {
        key: 2,
        class: L([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: Z(() => [
          we(d)
        ]),
        _: 1
      }, 8, ["class"])) : H("", !0),
      we(u, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    we(h, null, {
      default: Z(() => [
        !e.renderAfterExpand || e.childNodeRendered ? pe(($(), B("div", {
          key: 0,
          class: L(e.ns.be("node", "children")),
          role: "group",
          "aria-expanded": e.expanded
        }, [
          ($(!0), B(Be, null, rt(e.node.childNodes, (f) => ($(), M(l, {
            key: e.getNodeKey(f),
            "render-content": e.renderContent,
            "render-after-expand": e.renderAfterExpand,
            "show-checkbox": e.showCheckbox,
            node: f,
            accordion: e.accordion,
            props: e.props,
            onNodeExpand: e.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, eu)), [
          [Ye, e.expanded]
        ]) : H("", !0)
      ]),
      _: 1
    })
  ], 42, Qd)), [
    [Ye, e.node.visible]
  ]);
}
const nu = /* @__PURE__ */ Qt(Zd, [["render", tu]]);
function ru({ el$: e }, t) {
  const n = ee("tree"), r = Ct([]), o = Ct([]);
  Ln(() => {
    a();
  }), no(() => {
    r.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), o.value = Array.from(
      e.value.querySelectorAll("input[type=checkbox]")
    );
  }), z(o, (s) => {
    s.forEach((d) => {
      d.setAttribute("tabindex", "-1");
    });
  }), sd(e, "keydown", (s) => {
    const d = s.target;
    if (!d.className.includes(n.b("node"))) return;
    const u = s.code;
    r.value = Array.from(
      e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)
    );
    const l = r.value.indexOf(d);
    let h;
    if ([de.up, de.down].includes(u)) {
      if (s.preventDefault(), u === de.up) {
        h = l === -1 ? 0 : l !== 0 ? l - 1 : r.value.length - 1;
        const v = h;
        for (; !t.value.getNode(r.value[h].dataset.key).canFocus; ) {
          if (h--, h === v) {
            h = -1;
            break;
          }
          h < 0 && (h = r.value.length - 1);
        }
      } else {
        h = l === -1 ? 0 : l < r.value.length - 1 ? l + 1 : 0;
        const v = h;
        for (; !t.value.getNode(r.value[h].dataset.key).canFocus; ) {
          if (h++, h === v) {
            h = -1;
            break;
          }
          h >= r.value.length && (h = 0);
        }
      }
      h !== -1 && r.value[h].focus();
    }
    [de.left, de.right].includes(u) && (s.preventDefault(), d.click());
    const f = d.querySelector(
      '[type="checkbox"]'
    );
    [de.enter, de.numpadEnter, de.space].includes(
      u
    ) && f && (s.preventDefault(), f.click());
  });
  const a = () => {
    var d;
    r.value = Array.from(
      e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)
    ), o.value = Array.from(
      e.value.querySelectorAll("input[type=checkbox]")
    );
    const s = e.value.querySelectorAll(
      `.${n.is("checked")}[role=treeitem]`
    );
    if (s.length) {
      s[0].setAttribute("tabindex", "0");
      return;
    }
    (d = r.value[0]) == null || d.setAttribute("tabindex", "0");
  };
}
function ou() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var r = e.indexOf("rv:");
    return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
  }
  var o = e.indexOf("Edge/");
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
let qe;
function xt() {
  xt.init || (xt.init = !0, qe = ou() !== -1);
}
var ft = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    xt(), Oe(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", qe && this.$el.appendChild(e), e.data = "about:blank", qe || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!qe && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const iu = /* @__PURE__ */ io("data-v-b329ee4c");
ro("data-v-b329ee4c");
const au = {
  class: "resize-observer",
  tabindex: "-1"
};
oo();
const su = /* @__PURE__ */ iu((e, t, n, r, o, i) => ($(), M("div", au)));
ft.render = su;
ft.__scopeId = "data-v-b329ee4c";
ft.__file = "src/components/ResizeObserver.vue";
function We(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? We = function(t) {
    return typeof t;
  } : We = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, We(e);
}
function lu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function du(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function uu(e, t, n) {
  return t && du(e.prototype, t), e;
}
function An(e) {
  return cu(e) || fu(e) || hu(e) || pu();
}
function cu(e) {
  if (Array.isArray(e)) return It(e);
}
function fu(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function hu(e, t) {
  if (e) {
    if (typeof e == "string") return It(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return It(e, t);
  }
}
function It(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gu(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function vu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, o, i, a = function(d) {
    for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), h = 1; h < u; h++)
      l[h - 1] = arguments[h];
    if (i = l, !(r && d === o)) {
      var f = n.leading;
      typeof f == "function" && (f = f(d, o)), (!r || d !== o) && f && e.apply(void 0, [d].concat(An(i))), o = d, clearTimeout(r), r = setTimeout(function() {
        e.apply(void 0, [d].concat(An(i))), r = 0;
      }, t);
    }
  };
  return a._clear = function() {
    clearTimeout(r), r = null;
  }, a;
}
function Br(e, t) {
  if (e === t) return !0;
  if (We(e) === "object") {
    for (var n in e)
      if (!Br(e[n], t[n]))
        return !1;
    return !0;
  }
  return !1;
}
var yu = /* @__PURE__ */ (function() {
  function e(t, n, r) {
    lu(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(n, r);
  }
  return uu(e, [{
    key: "createObserver",
    value: function(n, r) {
      var o = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = gu(n), this.callback = function(s, d) {
          o.options.callback(s, d), s && o.options.once && (o.frozen = !0, o.destroyObserver());
        }, this.callback && this.options.throttle) {
          var i = this.options.throttleOptions || {}, a = i.leading;
          this.callback = vu(this.callback, this.options.throttle, {
            leading: function(d) {
              return a === "both" || a === "visible" && d || a === "hidden" && !d;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(s) {
          var d = s[0];
          if (s.length > 1) {
            var u = s.find(function(h) {
              return h.isIntersecting;
            });
            u && (d = u);
          }
          if (o.callback) {
            var l = d.isIntersecting && d.intersectionRatio >= o.threshold;
            if (l === o.oldResult) return;
            o.oldResult = l, o.callback(l, d);
          }
        }, this.options.intersection), Oe(function() {
          o.observer && o.observer.observe(o.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && typeof this.options.intersection.threshold == "number" ? this.options.intersection.threshold : 0;
    }
  }]), e;
})();
function Fr(e, t, n) {
  var r = t.value;
  if (r)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var o = new yu(e, r, n);
      e._vue_visibilityState = o;
    }
}
function mu(e, t, n) {
  var r = t.value, o = t.oldValue;
  if (!Br(r, o)) {
    var i = e._vue_visibilityState;
    if (!r) {
      Rr(e);
      return;
    }
    i ? i.createObserver(r, n) : Fr(e, {
      value: r
    }, n);
  }
}
function Rr(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var bu = {
  beforeMount: Fr,
  updated: mu,
  unmounted: Rr
}, Cu = {
  itemsLimit: 1e3
}, Nu = /(auto|scroll)/;
function Vr(e, t) {
  return e.parentNode === null ? t : Vr(e.parentNode, t.concat([e]));
}
var bt = function(t, n) {
  return getComputedStyle(t, null).getPropertyValue(n);
}, wu = function(t) {
  return bt(t, "overflow") + bt(t, "overflow-y") + bt(t, "overflow-x");
}, Su = function(t) {
  return Nu.test(wu(t));
};
function Pn(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = Vr(e.parentNode, []), n = 0; n < t.length; n += 1)
      if (Su(t[n]))
        return t[n];
    return document.scrollingElement || document.documentElement;
  }
}
function Dt(e) {
  "@babel/helpers - typeof";
  return Dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dt(e);
}
var ku = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: function(t) {
      return ["vertical", "horizontal"].includes(t);
    }
  },
  listTag: {
    type: String,
    default: "div"
  },
  itemTag: {
    type: String,
    default: "div"
  }
};
function $u() {
  return this.items.length && Dt(this.items[0]) !== "object";
}
var At = !1;
if (typeof window < "u") {
  At = !1;
  try {
    var Tu = Object.defineProperty({}, "passive", {
      get: function() {
        At = !0;
      }
    });
    window.addEventListener("test", null, Tu);
  } catch {
  }
}
let Eu = 0;
var en = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: ft
  },
  directives: {
    ObserveVisibility: bu
  },
  props: {
    ...ku,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    },
    updateInterval: {
      type: Number,
      default: 0
    },
    skipHover: {
      type: Boolean,
      default: !1
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    }
  },
  emits: [
    "resize",
    "visible",
    "hidden",
    "update",
    "scroll-start",
    "scroll-end"
  ],
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": { accumulator: 0 }
        }, t = this.items, n = this.sizeField, r = this.minItemSize;
        let o = 1e4, i = 0, a;
        for (let s = 0, d = t.length; s < d; s++)
          a = t[s][n] || r, a < o && (o = a), i += a, e[s] = { accumulator: i, size: a };
        return this.$_computedMinItemSize = o, e;
      }
      return [];
    },
    simpleArray: $u,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, n = {};
      for (let r = 0, o = t.length; r < o; r++)
        n[t[r][e]] = r;
      return n;
    }
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  activated() {
    const e = this.$_lastUpdateScrollPosition;
    typeof e == "number" && this.$nextTick(() => {
      this.scrollToPosition(e);
    });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, n, r, o) {
      const i = ao({
        id: Eu++,
        index: t,
        used: !0,
        key: r,
        type: o
      }), a = so({
        item: n,
        position: 0,
        nr: i
      });
      return e.push(a), a;
    },
    unuseView(e, t = !1) {
      const n = this.$_unusedViews, r = e.nr.type;
      let o = n.get(r);
      o || (o = [], n.set(r, o)), o.push(e), t || (e.nr.used = !1, e.position = -9999);
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      if (!this.$_scrollDirty) {
        if (this.$_scrollDirty = !0, this.$_updateTimeout) return;
        const t = () => requestAnimationFrame(() => {
          this.$_scrollDirty = !1;
          const { continuous: n } = this.updateVisibleItems(!1, !0);
          n || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, this.updateInterval + 100));
        });
        t(), this.updateInterval && (this.$_updateTimeout = setTimeout(() => {
          this.$_updateTimeout = 0, this.$_scrollDirty && t();
        }, this.updateInterval));
      }
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const n = this.itemSize, r = this.gridItems || 1, o = this.itemSecondarySize || n, i = this.$_computedMinItemSize, a = this.typeField, s = this.simpleArray ? null : this.keyField, d = this.items, u = d.length, l = this.sizes, h = this.$_views, f = this.$_unusedViews, v = this.pool, g = this.itemIndexByKey;
      let c, p, y, b, w;
      if (!u)
        c = p = b = w = y = 0;
      else if (this.$_prerender)
        c = b = 0, p = w = Math.min(this.prerender, d.length), y = null;
      else {
        const S = this.getScroll();
        if (t) {
          let F = S.start - this.$_lastUpdateScrollPosition;
          if (F < 0 && (F = -F), n === null && F < i || F < n)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = S.start;
        const R = this.buffer;
        S.start -= R, S.end += R;
        let j = 0;
        if (this.$refs.before && (j = this.$refs.before.scrollHeight, S.start -= j), this.$refs.after) {
          const F = this.$refs.after.scrollHeight;
          S.end += F;
        }
        if (n === null) {
          let F, ce = 0, Re = u - 1, U = ~~(u / 2), Ve;
          do
            Ve = U, F = l[U].accumulator, F < S.start ? ce = U : U < u - 1 && l[U + 1].accumulator > S.start && (Re = U), U = ~~((ce + Re) / 2);
          while (U !== Ve);
          for (U < 0 && (U = 0), c = U, y = l[u - 1].accumulator, p = U; p < u && l[p].accumulator < S.end; p++) ;
          for (p === -1 ? p = d.length - 1 : (p++, p > u && (p = u)), b = c; b < u && j + l[b].accumulator < S.start; b++) ;
          for (w = b; w < u && j + l[w].accumulator < S.end; w++) ;
        } else {
          c = ~~(S.start / n * r);
          const F = c % r;
          c -= F, p = Math.ceil(S.end / n * r), b = Math.max(0, Math.floor((S.start - j) / n * r)), w = Math.floor((S.end - j) / n * r), c < 0 && (c = 0), p > u && (p = u), b < 0 && (b = 0), w > u && (w = u), y = Math.ceil(u / r) * n;
        }
      }
      p - c > Cu.itemsLimit && this.itemsLimitError(), this.totalSize = y;
      let m;
      const O = c <= this.$_endIndex && p >= this.$_startIndex;
      if (O)
        for (let S = 0, R = v.length; S < R; S++)
          m = v[S], m.nr.used && (e && (m.nr.index = g[m.item[s]]), (m.nr.index == null || m.nr.index < c || m.nr.index >= p) && this.unuseView(m));
      const W = O ? null : /* @__PURE__ */ new Map();
      let C, _, I;
      for (let S = c; S < p; S++) {
        C = d[S];
        const R = s ? C[s] : C;
        if (R == null)
          throw new Error(`Key is ${R} on item (keyField is '${s}')`);
        if (m = h.get(R), !n && !l[S].size) {
          m && this.unuseView(m);
          continue;
        }
        _ = C[a];
        let j = f.get(_), F = !1;
        if (!m)
          O ? j && j.length ? m = j.pop() : m = this.addView(v, S, C, R, _) : (I = W.get(_) || 0, (!j || I >= j.length) && (m = this.addView(v, S, C, R, _), this.unuseView(m, !0), j = f.get(_)), m = j[I], W.set(_, I + 1)), h.delete(m.nr.key), m.nr.used = !0, m.nr.index = S, m.nr.key = R, m.nr.type = _, h.set(R, m), F = !0;
        else if (!m.nr.used && (m.nr.used = !0, F = !0, j)) {
          const ce = j.indexOf(m);
          ce !== -1 && j.splice(ce, 1);
        }
        m.item = C, F && (S === d.length - 1 && this.$emit("scroll-end"), S === 0 && this.$emit("scroll-start")), n === null ? (m.position = l[S - 1].accumulator, m.offset = 0) : (m.position = Math.floor(S / r) * n, m.offset = S % r * o);
      }
      return this.$_startIndex = c, this.$_endIndex = p, this.emitUpdate && this.$emit("update", c, p, b, w), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: O
      };
    },
    getListenerTarget() {
      let e = Pn(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, n = t === "vertical";
      let r;
      if (this.pageMode) {
        const o = e.getBoundingClientRect(), i = n ? o.height : o.width;
        let a = -(n ? o.top : o.left), s = n ? window.innerHeight : window.innerWidth;
        a < 0 && (s += a, a = 0), a + s > i && (s = i - a), r = {
          start: a,
          end: a + s
        };
      } else n ? r = {
        start: e.scrollTop,
        end: e.scrollTop + e.clientHeight
      } : r = {
        start: e.scrollLeft,
        end: e.scrollLeft + e.clientWidth
      };
      return r;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, At ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      const n = this.gridItems || 1;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = Math.floor(e / n) * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      const t = this.direction === "vertical" ? { scroll: "scrollTop", start: "top" } : { scroll: "scrollLeft", start: "left" };
      let n, r, o;
      if (this.pageMode) {
        const i = Pn(this.$el), a = i.tagName === "HTML" ? 0 : i[t.scroll], s = i.getBoundingClientRect(), u = this.$el.getBoundingClientRect()[t.start] - s[t.start];
        n = i, r = t.scroll, o = e + a + u;
      } else
        n = this.$el, r = t.scroll, o = e;
      n[r] = o;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.nr.index - t.nr.index);
    }
  }
};
const Ou = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, _u = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function xu(e, t, n, r, o, i) {
  const a = G("ResizeObserver"), s = lo("observe-visibility");
  return pe(($(), B(
    "div",
    {
      class: L(["vue-recycle-scroller", {
        ready: o.ready,
        "page-mode": n.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...d) => i.handleScroll && i.handleScroll(...d))
    },
    [
      e.$slots.before ? ($(), B(
        "div",
        Ou,
        [
          J(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : H("v-if", !0),
      ($(), M(he(n.listTag), {
        ref: "wrapper",
        style: ge({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: o.totalSize + "px" }),
        class: L(["vue-recycle-scroller__item-wrapper", n.listClass])
      }, {
        default: Z(() => [
          ($(!0), B(
            Be,
            null,
            rt(o.pool, (d) => ($(), M(he(n.itemTag), Ee({
              key: d.nr.id,
              style: o.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${d.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${d.offset}px)`,
                width: n.gridItems ? `${e.direction === "vertical" && n.itemSecondarySize || n.itemSize}px` : void 0,
                height: n.gridItems ? `${e.direction === "horizontal" && n.itemSecondarySize || n.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                n.itemClass,
                {
                  hover: !n.skipHover && o.hoverKey === d.nr.key
                }
              ]]
            }, zn(n.skipHover ? {} : {
              mouseenter: () => {
                o.hoverKey = d.nr.key;
              },
              mouseleave: () => {
                o.hoverKey = null;
              }
            })), {
              default: Z(() => [
                J(e.$slots, "default", {
                  item: d.item,
                  index: d.nr.index,
                  active: d.nr.used
                })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1040, ["style", "class"]))),
            128
            /* KEYED_FRAGMENT */
          )),
          J(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? ($(), B(
        "div",
        _u,
        [
          J(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : H("v-if", !0),
      we(a, { onNotify: i.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [s, i.handleVisibilityChange]
  ]);
}
en.render = xu;
en.__file = "src/components/RecycleScroller.vue";
const Iu = Q({
  name: "ElTreeVirtualNode",
  components: {
    ElCollapseTransition: _r,
    ElCheckbox: zr,
    NodeContent: jr,
    ElIcon: Kr,
    Loading: br
  },
  props: {
    node: {
      type: ue,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    itemSize: {
      type: Number,
      default: 26
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    itemSize: {
      type: Number,
      default: 26
    }
  },
  emits: ["node-expand"],
  setup(e, t) {
    const {
      tree: n,
      expanded: r,
      childNodeRendered: o,
      oldChecked: i,
      oldIndeterminate: a,
      node$: s,
      getNodeKey: d,
      getNodeClass: u,
      handleSelectChange: l,
      handleClick: h,
      handleContextMenu: f,
      handleExpandIconClick: v,
      handleCheckChange: g,
      handleChildNodeExpand: c,
      handleDragStart: p,
      handleDragOver: y,
      handleDrop: b,
      handleDragEnd: w
    } = Mr(e, t), m = ee("tree");
    ut(e), P(ct);
    const O = ne();
    ve("NodeInstance", O), e.node.expanded && (r.value = !0, o.value = !0);
    const W = n.props.props.children || "children";
    return z(
      () => {
        const C = e.node.data[W];
        return C && [...C];
      },
      () => {
        e.node.updateChildren();
      }
    ), z(
      () => e.node.indeterminate,
      (C) => {
        l(e.node.checked, C);
      }
    ), z(
      () => e.node.checked,
      (C) => {
        l(C, e.node.indeterminate);
      }
    ), z(
      () => e.node.childNodes.length,
      () => e.node.reInitChecked()
    ), z(
      () => e.node.expanded,
      (C) => {
        Oe(() => r.value = C), C && (o.value = !0);
      }
    ), {
      ns: m,
      node$: s,
      tree: n,
      expanded: r,
      childNodeRendered: o,
      oldChecked: i,
      oldIndeterminate: a,
      getNodeKey: d,
      getNodeClass: u,
      handleSelectChange: l,
      handleClick: h,
      handleContextMenu: f,
      handleExpandIconClick: v,
      handleCheckChange: g,
      handleChildNodeExpand: c,
      handleDragStart: p,
      handleDragOver: y,
      handleDrop: b,
      handleDragEnd: w,
      CaretRight: mr
    };
  }
}), Du = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"];
function Au(e, t, n, r, o, i) {
  const a = G("el-icon"), s = G("el-checkbox"), d = G("loading"), u = G("node-content");
  return pe(($(), B("div", {
    ref: "node$",
    class: L([
      e.ns.b("node"),
      e.ns.is("expanded", e.expanded),
      e.ns.is("current", e.node.isCurrent),
      e.ns.is("hidden", !e.node.visible),
      e.ns.is("focusable", !e.node.disabled),
      e.ns.is("checked", !e.node.disabled && e.node.checked),
      e.getNodeClass(e.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": e.expanded,
    "aria-disabled": e.node.disabled,
    "aria-checked": e.node.checked,
    draggable: e.tree.props.draggable,
    "data-key": e.getNodeKey(e.node),
    onClick: t[1] || (t[1] = V((...l) => e.handleClick && e.handleClick(...l), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...l) => e.handleContextMenu && e.handleContextMenu(...l)),
    onDragstart: t[3] || (t[3] = V((...l) => e.handleDragStart && e.handleDragStart(...l), ["stop"])),
    onDragover: t[4] || (t[4] = V((...l) => e.handleDragOver && e.handleDragOver(...l), ["stop"])),
    onDragend: t[5] || (t[5] = V((...l) => e.handleDragEnd && e.handleDragEnd(...l), ["stop"])),
    onDrop: t[6] || (t[6] = V((...l) => e.handleDrop && e.handleDrop(...l), ["stop"]))
  }, [
    X("div", {
      class: L(e.ns.be("node", "content")),
      style: ge({
        height: e.itemSize + "px",
        paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px"
      })
    }, [
      X("span", {
        "aria-hidden": "true",
        style: ge({
          "min-width": (e.node.level - 1) * e.tree.props.indent + "px"
        })
      }, null, 4),
      e.tree.props.icon || e.CaretRight ? ($(), M(a, {
        key: 0,
        class: L([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: V(e.handleExpandIconClick, ["stop"])
      }, {
        default: Z(() => [
          ($(), M(he(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("", !0),
      e.showCheckbox ? ($(), M(s, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = V(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : H("", !0),
      e.node.loading ? ($(), M(a, {
        key: 2,
        class: L([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: Z(() => [
          we(d)
        ]),
        _: 1
      }, 8, ["class"])) : H("", !0),
      we(u, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6)
  ], 42, Du)), [
    [Ye, e.node.visible]
  ]);
}
const Pu = /* @__PURE__ */ Qt(Iu, [["render", Au]]), Lu = Q({
  name: "VueVirtualLazyTree",
  components: { ElTreeNode: nu, TreeVirtualNode: Pu, RecycleScroller: en },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: !0
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: !0
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: !1
    },
    autoExpandParent: {
      type: Boolean,
      default: !0
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: vd
    },
    height: {
      type: [String, Number],
      default: 0
    },
    itemSize: {
      type: Number,
      default: 26
    },
    buffer: {
      type: Number,
      default: 40
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(e, t) {
    const { t: n } = Sd(), r = ee("tree"), o = P(Dd, null), i = A(
      new Pd({
        key: e.nodeKey,
        data: e.data,
        lazy: e.lazy,
        props: e.props,
        load: e.load,
        currentNodeKey: e.currentNodeKey,
        checkStrictly: e.checkStrictly,
        checkDescendants: e.checkDescendants,
        defaultCheckedKeys: e.defaultCheckedKeys,
        defaultExpandedKeys: e.defaultExpandedKeys,
        autoExpandParent: e.autoExpandParent,
        defaultExpandAll: e.defaultExpandAll,
        filterNodeMethod: e.filterNodeMethod
      })
    );
    i.value.initialize();
    const a = A(i.value.root);
    A([...a.value.childNodes]);
    const s = A(null), d = A(null), u = A(null), { broadcastExpanded: l } = ut(e), { dragState: h } = Xd({
      props: e,
      ctx: t,
      el$: d,
      dropIndicator$: u,
      store: i
    });
    ru({ el$: d }, i);
    const f = T(() => {
      const { childNodes: N } = a.value, E = o ? o.hasFilteredOptions !== 0 : !1;
      return (!N || N.length === 0 || N.every(({ visible: K }) => !K)) && !E;
    }), v = (N) => N.reduce((E, K) => (K.visible && (K.type = e.showCheckbox ? `${K.level}-${K.checked}-${K.indeterminate}` : `${K.level}-${K.expanded}`, E.push(K)), K.expanded && K.childNodes.length && E.push(...v(K.childNodes)), E), []), g = T(() => v(a.value.childNodes));
    z(
      () => e.currentNodeKey,
      (N) => {
        i.value.setCurrentNodeKey(N);
      }
    ), z(
      () => e.defaultCheckedKeys,
      (N) => {
        i.value.setDefaultCheckedKey(N);
      }
    ), z(
      () => e.defaultExpandedKeys,
      (N) => {
        i.value.setDefaultExpandedKeys(N);
      }
    ), z(
      () => e.data,
      (N) => {
        i.value.setData(N);
      },
      { deep: !0 }
    ), z(
      () => e.checkStrictly,
      (N) => {
        i.value.checkStrictly = N;
      }
    );
    const c = (N) => {
      if (!e.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      i.value.filter(N);
    }, p = (N) => Xt(e.nodeKey, N.data), y = (N) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const E = i.value.getNode(N);
      if (!E) return [];
      const K = [E.data];
      let De = E.parent;
      for (; De && De !== a.value; )
        K.push(De.data), De = De.parent;
      return K.reverse();
    }, b = (N, E) => i.value.getCheckedNodes(N, E), w = (N) => i.value.getCheckedKeys(N), m = () => {
      const N = i.value.getCurrentNode();
      return N ? N.data : null;
    }, O = () => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const N = m();
      return N ? N[e.nodeKey] : null;
    }, W = (N, E) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      i.value.setCheckedNodes(N, E);
    }, C = (N, E) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      i.value.setCheckedKeys(N, E);
    }, _ = (N, E, K) => {
      i.value.setChecked(N, E, K);
    }, I = () => i.value.getHalfCheckedNodes(), S = () => i.value.getHalfCheckedKeys(), R = (N, E = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      Et(i, t.emit, () => {
        l(N), i.value.setUserCurrentNode(N, E);
      });
    }, j = (N, E = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      Et(i, t.emit, () => {
        l(), i.value.setCurrentNodeKey(N, E);
      });
    }, F = (N) => i.value.getNode(N), ce = (N) => {
      i.value.remove(N);
    }, Re = (N, E) => {
      i.value.append(N, E);
    }, U = (N, E) => {
      i.value.insertBefore(N, E);
    }, Ve = (N, E) => {
      i.value.insertAfter(N, E);
    }, Hr = (N, E, K) => {
      l(E), t.emit("node-expand", N, E, K);
    }, Ur = (N, E) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      i.value.updateChildren(N, E);
    };
    return ve("RootTree", {
      ctx: t,
      props: e,
      store: i,
      root: a,
      currentNode: s,
      instance: ne()
    }), ve(Yt, void 0), {
      ns: r,
      // ref
      store: i,
      root: a,
      currentNode: s,
      dragState: h,
      el$: d,
      dropIndicator$: u,
      // computed
      isEmpty: f,
      dataList: g,
      // methods
      filter: c,
      getNodeKey: p,
      getNodePath: y,
      getCheckedNodes: b,
      getCheckedKeys: w,
      getCurrentNode: m,
      getCurrentKey: O,
      setCheckedNodes: W,
      setCheckedKeys: C,
      setChecked: _,
      getHalfCheckedNodes: I,
      getHalfCheckedKeys: S,
      setCurrentNode: R,
      setCurrentKey: j,
      t: n,
      getNode: F,
      remove: ce,
      append: Re,
      insertBefore: U,
      insertAfter: Ve,
      handleNodeExpand: Hr,
      updateKeyChildren: Ur
    };
  }
});
function zu(e, t, n, r, o, i) {
  const a = G("el-tree-virtual-node"), s = G("RecycleScroller"), d = G("el-tree-node");
  return $(), B("div", {
    ref: "el$",
    class: L([
      e.ns.b(),
      e.ns.is("dragging", !!e.dragState.draggingNode),
      e.ns.is("drop-not-allow", !e.dragState.allowDrop),
      e.ns.is("drop-inner", e.dragState.dropType === "inner"),
      { [e.ns.m("highlight-current")]: e.highlightCurrent }
    ]),
    style: { height: "100%" },
    role: "tree"
  }, [
    e.height && !e.isEmpty ? ($(), M(s, {
      key: 0,
      style: ge({
        height: e.height,
        "overflow-y": "auto",
        "scroll-behavior": "smooth"
      }),
      "key-field": "key",
      items: e.dataList,
      "item-size": e.itemSize,
      buffer: e.buffer
    }, {
      default: Z(({ active: u, item: l }) => [
        u ? ($(), M(a, {
          key: 0,
          style: ge(`height: ${e.itemSize}px;`),
          node: l,
          "item-size": e.itemSize,
          "render-content": e.renderContent,
          "show-checkbox": e.showCheckbox,
          "render-after-expand": e.renderAfterExpand,
          onNodeExpand: e.handleNodeExpand
        }, null, 8, ["style", "node", "item-size", "render-content", "show-checkbox", "render-after-expand", "onNodeExpand"])) : H("", !0)
      ]),
      _: 1
    }, 8, ["style", "items", "item-size", "buffer"])) : e.height ? H("", !0) : ($(!0), B(Be, { key: 1 }, rt(e.root.childNodes, (u) => ($(), M(d, {
      key: e.getNodeKey(u),
      node: u,
      props: e.props,
      accordion: e.accordion,
      "render-after-expand": e.renderAfterExpand,
      "show-checkbox": e.showCheckbox,
      "render-content": e.renderContent,
      onNodeExpand: e.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    e.isEmpty ? ($(), B("div", {
      key: 2,
      class: L(e.ns.e("empty-block"))
    }, [
      J(e.$slots, "empty", {}, () => [
        X("span", {
          class: L(e.ns.e("empty-text"))
        }, Lt(e.emptyText ?? e.t("el.tree.emptyText")), 3)
      ])
    ], 2)) : H("", !0),
    pe(X("div", {
      ref: "dropIndicator$",
      class: L(e.ns.e("drop-indicator"))
    }, null, 2), [
      [Ye, e.dragState.showDropIndicator]
    ])
  ], 2);
}
const Ku = /* @__PURE__ */ Qt(Lu, [["render", zu]]), Mu = {
  install: (e) => {
    e.component("VueVirtualLazyTree", Ku);
  }
};
export {
  Ku as VueVirtualLazyTree,
  Mu as default
};
