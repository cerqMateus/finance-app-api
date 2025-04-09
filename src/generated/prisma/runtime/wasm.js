/* eslint-disable no-redeclare */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-cond-assign */
/* eslint-disable no-empty */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-undef */
'use strict';
var Yo = Object.create;
var Ot = Object.defineProperty;
var Xo = Object.getOwnPropertyDescriptor;
var Zo = Object.getOwnPropertyNames;
var es = Object.getPrototypeOf,
  ts = Object.prototype.hasOwnProperty;
var ne = (t, e) => () => (t && (e = t((t = 0))), e);
var Le = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  rt = (t, e) => {
    for (var r in e) Ot(t, r, { get: e[r], enumerable: !0 });
  },
  cn = (t, e, r, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of Zo(e))
        !ts.call(t, i) &&
          i !== r &&
          Ot(t, i, {
            get: () => e[i],
            enumerable: !(n = Xo(e, i)) || n.enumerable,
          });
    return t;
  };
var nt = (t, e, r) => (
    (r = t != null ? Yo(es(t)) : {}),
    cn(
      e || !t || !t.__esModule
        ? Ot(r, 'default', { value: t, enumerable: !0 })
        : r,
      t,
    )
  ),
  rs = (t) => cn(Ot({}, '__esModule', { value: !0 }), t);
function Er(t, e) {
  if (((e = e.toLowerCase()), e === 'utf8' || e === 'utf-8'))
    return new y(ss.encode(t));
  if (e === 'base64' || e === 'base64url')
    return (
      (t = t.replace(/-/g, '+').replace(/_/g, '/')),
      (t = t.replace(/[^A-Za-z0-9+/]/g, '')),
      new y([...atob(t)].map((r) => r.charCodeAt(0)))
    );
  if (e === 'binary' || e === 'ascii' || e === 'latin1' || e === 'latin-1')
    return new y([...t].map((r) => r.charCodeAt(0)));
  if (e === 'ucs2' || e === 'ucs-2' || e === 'utf16le' || e === 'utf-16le') {
    let r = new y(t.length * 2),
      n = new DataView(r.buffer);
    for (let i = 0; i < t.length; i++) n.setUint16(i * 2, t.charCodeAt(i), !0);
    return r;
  }
  if (e === 'hex') {
    let r = new y(t.length / 2);
    for (let n = 0, i = 0; i < t.length; i += 2, n++)
      r[n] = parseInt(t.slice(i, i + 2), 16);
    return r;
  }
  pn(`encoding "${e}"`);
}
function ns(t) {
  let r = Object.getOwnPropertyNames(DataView.prototype).filter(
      (a) => a.startsWith('get') || a.startsWith('set'),
    ),
    n = r.map((a) => a.replace('get', 'read').replace('set', 'write')),
    i = (a, f) =>
      function (h = 0) {
        return (
          B(h, 'offset'),
          Y(h, 'offset'),
          V(h, 'offset', this.length - 1),
          new DataView(this.buffer)[r[a]](h, f)
        );
      },
    o = (a, f) =>
      function (h, T = 0) {
        let C = r[a].match(/set(\w+\d+)/)[1].toLowerCase(),
          k = os[C];
        return (
          B(T, 'offset'),
          Y(T, 'offset'),
          V(T, 'offset', this.length - 1),
          is(h, 'value', k[0], k[1]),
          new DataView(this.buffer)[r[a]](T, h, f),
          T + parseInt(r[a].match(/\d+/)[0]) / 8
        );
      },
    s = (a) => {
      a.forEach((f) => {
        f.includes('Uint') && (t[f.replace('Uint', 'UInt')] = t[f]),
          f.includes('Float64') && (t[f.replace('Float64', 'Double')] = t[f]),
          f.includes('Float32') && (t[f.replace('Float32', 'Float')] = t[f]);
      });
    };
  n.forEach((a, f) => {
    a.startsWith('read') &&
      ((t[a] = i(f, !1)), (t[a + 'LE'] = i(f, !0)), (t[a + 'BE'] = i(f, !1))),
      a.startsWith('write') &&
        ((t[a] = o(f, !1)), (t[a + 'LE'] = o(f, !0)), (t[a + 'BE'] = o(f, !1))),
      s([a, a + 'LE', a + 'BE']);
  });
}
function pn(t) {
  throw new Error(`Buffer polyfill does not implement "${t}"`);
}
function Mt(t, e) {
  if (!(t instanceof Uint8Array))
    throw new TypeError(
      `The "${e}" argument must be an instance of Buffer or Uint8Array`,
    );
}
function V(t, e, r = us + 1) {
  if (t < 0 || t > r) {
    let n = new RangeError(
      `The value of "${e}" is out of range. It must be >= 0 && <= ${r}. Received ${t}`,
    );
    throw ((n.code = 'ERR_OUT_OF_RANGE'), n);
  }
}
function B(t, e) {
  if (typeof t != 'number') {
    let r = new TypeError(
      `The "${e}" argument must be of type number. Received type ${typeof t}.`,
    );
    throw ((r.code = 'ERR_INVALID_ARG_TYPE'), r);
  }
}
function Y(t, e) {
  if (!Number.isInteger(t) || Number.isNaN(t)) {
    let r = new RangeError(
      `The value of "${e}" is out of range. It must be an integer. Received ${t}`,
    );
    throw ((r.code = 'ERR_OUT_OF_RANGE'), r);
  }
}
function is(t, e, r, n) {
  if (t < r || t > n) {
    let i = new RangeError(
      `The value of "${e}" is out of range. It must be >= ${r} and <= ${n}. Received ${t}`,
    );
    throw ((i.code = 'ERR_OUT_OF_RANGE'), i);
  }
}
function mn(t, e) {
  if (typeof t != 'string') {
    let r = new TypeError(
      `The "${e}" argument must be of type string. Received type ${typeof t}`,
    );
    throw ((r.code = 'ERR_INVALID_ARG_TYPE'), r);
  }
}
function cs(t, e = 'utf8') {
  return y.from(t, e);
}
var y,
  os,
  ss,
  as,
  ls,
  us,
  b,
  xr,
  u = ne(() => {
    'use strict';
    y = class t extends Uint8Array {
      _isBuffer = !0;
      get offset() {
        return this.byteOffset;
      }
      static alloc(e, r = 0, n = 'utf8') {
        return mn(n, 'encoding'), t.allocUnsafe(e).fill(r, n);
      }
      static allocUnsafe(e) {
        return t.from(e);
      }
      static allocUnsafeSlow(e) {
        return t.from(e);
      }
      static isBuffer(e) {
        return e && !!e._isBuffer;
      }
      static byteLength(e, r = 'utf8') {
        if (typeof e == 'string') return Er(e, r).byteLength;
        if (e && e.byteLength) return e.byteLength;
        let n = new TypeError(
          'The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.',
        );
        throw ((n.code = 'ERR_INVALID_ARG_TYPE'), n);
      }
      static isEncoding(e) {
        return ls.includes(e);
      }
      static compare(e, r) {
        Mt(e, 'buff1'), Mt(r, 'buff2');
        for (let n = 0; n < e.length; n++) {
          if (e[n] < r[n]) return -1;
          if (e[n] > r[n]) return 1;
        }
        return e.length === r.length ? 0 : e.length > r.length ? 1 : -1;
      }
      static from(e, r = 'utf8') {
        if (e && typeof e == 'object' && e.type === 'Buffer')
          return new t(e.data);
        if (typeof e == 'number') return new t(new Uint8Array(e));
        if (typeof e == 'string') return Er(e, r);
        if (ArrayBuffer.isView(e)) {
          let { byteOffset: n, byteLength: i, buffer: o } = e;
          return 'map' in e && typeof e.map == 'function'
            ? new t(
                e.map((s) => s % 256),
                n,
                i,
              )
            : new t(o, n, i);
        }
        if (
          e &&
          typeof e == 'object' &&
          ('length' in e || 'byteLength' in e || 'buffer' in e)
        )
          return new t(e);
        throw new TypeError(
          'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
        );
      }
      static concat(e, r) {
        if (e.length === 0) return t.alloc(0);
        let n = [].concat(...e.map((o) => [...o])),
          i = t.alloc(r !== void 0 ? r : n.length);
        return i.set(r !== void 0 ? n.slice(0, r) : n), i;
      }
      slice(e = 0, r = this.length) {
        return this.subarray(e, r);
      }
      subarray(e = 0, r = this.length) {
        return Object.setPrototypeOf(super.subarray(e, r), t.prototype);
      }
      reverse() {
        return super.reverse(), this;
      }
      readIntBE(e, r) {
        B(e, 'offset'),
          Y(e, 'offset'),
          V(e, 'offset', this.length - 1),
          B(r, 'byteLength'),
          Y(r, 'byteLength');
        let n = new DataView(this.buffer, e, r),
          i = 0;
        for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
        return n.getUint8(0) & 128 && (i -= Math.pow(256, r)), i;
      }
      readIntLE(e, r) {
        B(e, 'offset'),
          Y(e, 'offset'),
          V(e, 'offset', this.length - 1),
          B(r, 'byteLength'),
          Y(r, 'byteLength');
        let n = new DataView(this.buffer, e, r),
          i = 0;
        for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
        return n.getUint8(r - 1) & 128 && (i -= Math.pow(256, r)), i;
      }
      readUIntBE(e, r) {
        B(e, 'offset'),
          Y(e, 'offset'),
          V(e, 'offset', this.length - 1),
          B(r, 'byteLength'),
          Y(r, 'byteLength');
        let n = new DataView(this.buffer, e, r),
          i = 0;
        for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
        return i;
      }
      readUintBE(e, r) {
        return this.readUIntBE(e, r);
      }
      readUIntLE(e, r) {
        B(e, 'offset'),
          Y(e, 'offset'),
          V(e, 'offset', this.length - 1),
          B(r, 'byteLength'),
          Y(r, 'byteLength');
        let n = new DataView(this.buffer, e, r),
          i = 0;
        for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
        return i;
      }
      readUintLE(e, r) {
        return this.readUIntLE(e, r);
      }
      writeIntBE(e, r, n) {
        return (
          (e = e < 0 ? e + Math.pow(256, n) : e), this.writeUIntBE(e, r, n)
        );
      }
      writeIntLE(e, r, n) {
        return (
          (e = e < 0 ? e + Math.pow(256, n) : e), this.writeUIntLE(e, r, n)
        );
      }
      writeUIntBE(e, r, n) {
        B(r, 'offset'),
          Y(r, 'offset'),
          V(r, 'offset', this.length - 1),
          B(n, 'byteLength'),
          Y(n, 'byteLength');
        let i = new DataView(this.buffer, r, n);
        for (let o = n - 1; o >= 0; o--) i.setUint8(o, e & 255), (e = e / 256);
        return r + n;
      }
      writeUintBE(e, r, n) {
        return this.writeUIntBE(e, r, n);
      }
      writeUIntLE(e, r, n) {
        B(r, 'offset'),
          Y(r, 'offset'),
          V(r, 'offset', this.length - 1),
          B(n, 'byteLength'),
          Y(n, 'byteLength');
        let i = new DataView(this.buffer, r, n);
        for (let o = 0; o < n; o++) i.setUint8(o, e & 255), (e = e / 256);
        return r + n;
      }
      writeUintLE(e, r, n) {
        return this.writeUIntLE(e, r, n);
      }
      toJSON() {
        return { type: 'Buffer', data: Array.from(this) };
      }
      swap16() {
        let e = new DataView(this.buffer, this.byteOffset, this.byteLength);
        for (let r = 0; r < this.length; r += 2)
          e.setUint16(r, e.getUint16(r, !0), !1);
        return this;
      }
      swap32() {
        let e = new DataView(this.buffer, this.byteOffset, this.byteLength);
        for (let r = 0; r < this.length; r += 4)
          e.setUint32(r, e.getUint32(r, !0), !1);
        return this;
      }
      swap64() {
        let e = new DataView(this.buffer, this.byteOffset, this.byteLength);
        for (let r = 0; r < this.length; r += 8)
          e.setBigUint64(r, e.getBigUint64(r, !0), !1);
        return this;
      }
      compare(e, r = 0, n = e.length, i = 0, o = this.length) {
        return (
          Mt(e, 'target'),
          B(r, 'targetStart'),
          B(n, 'targetEnd'),
          B(i, 'sourceStart'),
          B(o, 'sourceEnd'),
          V(r, 'targetStart'),
          V(n, 'targetEnd', e.length),
          V(i, 'sourceStart'),
          V(o, 'sourceEnd', this.length),
          t.compare(this.slice(i, o), e.slice(r, n))
        );
      }
      equals(e) {
        return (
          Mt(e, 'otherBuffer'),
          this.length === e.length && this.every((r, n) => r === e[n])
        );
      }
      copy(e, r = 0, n = 0, i = this.length) {
        V(r, 'targetStart'),
          V(n, 'sourceStart', this.length),
          V(i, 'sourceEnd'),
          (r >>>= 0),
          (n >>>= 0),
          (i >>>= 0);
        let o = 0;
        for (; n < i && !(this[n] === void 0 || e[r] === void 0); )
          (e[r] = this[n]), o++, n++, r++;
        return o;
      }
      write(e, r, n, i = 'utf8') {
        let o = typeof r == 'string' ? 0 : (r ?? 0),
          s = typeof n == 'string' ? this.length - o : (n ?? this.length - o);
        return (
          (i = typeof r == 'string' ? r : typeof n == 'string' ? n : i),
          B(o, 'offset'),
          B(s, 'length'),
          V(o, 'offset', this.length),
          V(s, 'length', this.length),
          (i === 'ucs2' ||
            i === 'ucs-2' ||
            i === 'utf16le' ||
            i === 'utf-16le') &&
            (s = s - (s % 2)),
          Er(e, i).copy(this, o, 0, s)
        );
      }
      fill(e = 0, r = 0, n = this.length, i = 'utf-8') {
        let o = typeof r == 'string' ? 0 : r,
          s = typeof n == 'string' ? this.length : n;
        if (
          ((i = typeof r == 'string' ? r : typeof n == 'string' ? n : i),
          (e = t.from(typeof e == 'number' ? [e] : (e ?? []), i)),
          mn(i, 'encoding'),
          V(o, 'offset', this.length),
          V(s, 'end', this.length),
          e.length !== 0)
        )
          for (let a = o; a < s; a += e.length)
            super.set(
              e.slice(
                0,
                e.length + a >= this.length ? this.length - a : e.length,
              ),
              a,
            );
        return this;
      }
      includes(e, r = null, n = 'utf-8') {
        return this.indexOf(e, r, n) !== -1;
      }
      lastIndexOf(e, r = null, n = 'utf-8') {
        return this.indexOf(e, r, n, !0);
      }
      indexOf(e, r = null, n = 'utf-8', i = !1) {
        let o = i ? this.findLastIndex.bind(this) : this.findIndex.bind(this);
        n = typeof r == 'string' ? r : n;
        let s = t.from(typeof e == 'number' ? [e] : e, n),
          a = typeof r == 'string' ? 0 : r;
        return (
          (a = typeof r == 'number' ? a : null),
          (a = Number.isNaN(a) ? null : a),
          (a ??= i ? this.length : 0),
          (a = a < 0 ? this.length + a : a),
          s.length === 0 && i === !1
            ? a >= this.length
              ? this.length
              : a
            : s.length === 0 && i === !0
              ? (a >= this.length ? this.length : a) || this.length
              : o(
                  (f, h) =>
                    (i ? h <= a : h >= a) &&
                    this[h] === s[0] &&
                    s.every((C, k) => this[h + k] === C),
                )
        );
      }
      toString(e = 'utf8', r = 0, n = this.length) {
        if (((r = r < 0 ? 0 : r), (e = e.toString().toLowerCase()), n <= 0))
          return '';
        if (e === 'utf8' || e === 'utf-8') return as.decode(this.slice(r, n));
        if (e === 'base64' || e === 'base64url') {
          let i = btoa(this.reduce((o, s) => o + xr(s), ''));
          return e === 'base64url'
            ? i.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
            : i;
        }
        if (
          e === 'binary' ||
          e === 'ascii' ||
          e === 'latin1' ||
          e === 'latin-1'
        )
          return this.slice(r, n).reduce(
            (i, o) => i + xr(o & (e === 'ascii' ? 127 : 255)),
            '',
          );
        if (
          e === 'ucs2' ||
          e === 'ucs-2' ||
          e === 'utf16le' ||
          e === 'utf-16le'
        ) {
          let i = new DataView(this.buffer.slice(r, n));
          return Array.from({ length: i.byteLength / 2 }, (o, s) =>
            s * 2 + 1 < i.byteLength ? xr(i.getUint16(s * 2, !0)) : '',
          ).join('');
        }
        if (e === 'hex')
          return this.slice(r, n).reduce(
            (i, o) => i + o.toString(16).padStart(2, '0'),
            '',
          );
        pn(`encoding "${e}"`);
      }
      toLocaleString() {
        return this.toString();
      }
      inspect() {
        return `<Buffer ${this.toString('hex')
          .match(/.{1,2}/g)
          .join(' ')}>`;
      }
    };
    (os = {
      int8: [-128, 127],
      int16: [-32768, 32767],
      int32: [-2147483648, 2147483647],
      uint8: [0, 255],
      uint16: [0, 65535],
      uint32: [0, 4294967295],
      float32: [-1 / 0, 1 / 0],
      float64: [-1 / 0, 1 / 0],
      bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn],
      biguint64: [0n, 0xffffffffffffffffn],
    }),
      (ss = new TextEncoder()),
      (as = new TextDecoder()),
      (ls = [
        'utf8',
        'utf-8',
        'hex',
        'base64',
        'ascii',
        'binary',
        'base64url',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'latin1',
        'latin-1',
      ]),
      (us = 4294967295);
    ns(y.prototype);
    (b = new Proxy(cs, {
      construct(t, [e, r]) {
        return y.from(e, r);
      },
      get(t, e) {
        return y[e];
      },
    })),
      (xr = String.fromCodePoint);
  });
var g,
  c = ne(() => {
    'use strict';
    g = {
      nextTick: (t, ...e) => {
        setTimeout(() => {
          t(...e);
        }, 0);
      },
      env: {},
      version: '',
      cwd: () => '/',
      stderr: {},
      argv: ['/bin/node'],
    };
  });
var x,
  m = ne(() => {
    'use strict';
    x =
      globalThis.performance ??
      (() => {
        let t = Date.now();
        return { now: () => Date.now() - t };
      })();
  });
var E,
  p = ne(() => {
    'use strict';
    E = () => {};
    E.prototype = E;
  });
var w,
  d = ne(() => {
    'use strict';
    w = class {
      value;
      constructor(e) {
        this.value = e;
      }
      deref() {
        return this.value;
      }
    };
  });
function yn(t, e) {
  var r,
    n,
    i,
    o,
    s,
    a,
    f,
    h,
    T = t.constructor,
    C = T.precision;
  if (!t.s || !e.s) return e.s || (e = new T(t)), q ? D(e, C) : e;
  if (
    ((f = t.d),
    (h = e.d),
    (s = t.e),
    (i = e.e),
    (f = f.slice()),
    (o = s - i),
    o)
  ) {
    for (
      o < 0
        ? ((n = f), (o = -o), (a = h.length))
        : ((n = h), (i = s), (a = f.length)),
        s = Math.ceil(C / N),
        a = s > a ? s + 1 : a + 1,
        o > a && ((o = a), (n.length = 1)),
        n.reverse();
      o--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    a = f.length,
      o = h.length,
      a - o < 0 && ((o = a), (n = h), (h = f), (f = n)),
      r = 0;
    o;

  )
    (r = ((f[--o] = f[o] + h[o] + r) / Q) | 0), (f[o] %= Q);
  for (r && (f.unshift(r), ++i), a = f.length; f[--a] == 0; ) f.pop();
  return (e.d = f), (e.e = i), q ? D(e, C) : e;
}
function ce(t, e, r) {
  if (t !== ~~t || t < e || t > r) throw Error(Oe + t);
}
function ue(t) {
  var e,
    r,
    n,
    i = t.length - 1,
    o = '',
    s = t[0];
  if (i > 0) {
    for (o += s, e = 1; e < i; e++)
      (n = t[e] + ''), (r = N - n.length), r && (o += Pe(r)), (o += n);
    (s = t[e]), (n = s + ''), (r = N - n.length), r && (o += Pe(r));
  } else if (s === 0) return '0';
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function hn(t, e) {
  var r,
    n,
    i,
    o,
    s,
    a,
    f = 0,
    h = 0,
    T = t.constructor,
    C = T.precision;
  if ($(t) > 16) throw Error(vr + $(t));
  if (!t.s) return new T(ee);
  for (
    e == null ? ((q = !1), (a = C)) : (a = e), s = new T(0.03125);
    t.abs().gte(0.1);

  )
    (t = t.times(s)), (h += 5);
  for (
    n = ((Math.log(ke(2, h)) / Math.LN10) * 2 + 5) | 0,
      a += n,
      r = i = o = new T(ee),
      T.precision = a;
    ;

  ) {
    if (
      ((i = D(i.times(t), a)),
      (r = r.times(++f)),
      (s = o.plus(he(i, r, a))),
      ue(s.d).slice(0, a) === ue(o.d).slice(0, a))
    ) {
      for (; h--; ) o = D(o.times(o), a);
      return (T.precision = C), e == null ? ((q = !0), D(o, C)) : o;
    }
    o = s;
  }
}
function $(t) {
  for (var e = t.e * N, r = t.d[0]; r >= 10; r /= 10) e++;
  return e;
}
function Pr(t, e, r) {
  if (e > t.LN10.sd())
    throw (
      ((q = !0),
      r && (t.precision = r),
      Error(ie + 'LN10 precision limit exceeded'))
    );
  return D(new t(t.LN10), e);
}
function Pe(t) {
  for (var e = ''; t--; ) e += '0';
  return e;
}
function it(t, e) {
  var r,
    n,
    i,
    o,
    s,
    a,
    f,
    h,
    T,
    C = 1,
    k = 10,
    A = t,
    O = A.d,
    S = A.constructor,
    M = S.precision;
  if (A.s < 1) throw Error(ie + (A.s ? 'NaN' : '-Infinity'));
  if (A.eq(ee)) return new S(0);
  if ((e == null ? ((q = !1), (h = M)) : (h = e), A.eq(10)))
    return e == null && (q = !0), Pr(S, h);
  if (
    ((h += k),
    (S.precision = h),
    (r = ue(O)),
    (n = r.charAt(0)),
    (o = $(A)),
    Math.abs(o) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (A = A.times(t)), (r = ue(A.d)), (n = r.charAt(0)), C++;
    (o = $(A)),
      n > 1 ? ((A = new S('0.' + r)), o++) : (A = new S(n + '.' + r.slice(1)));
  } else
    return (
      (f = Pr(S, h + 2, M).times(o + '')),
      (A = it(new S(n + '.' + r.slice(1)), h - k).plus(f)),
      (S.precision = M),
      e == null ? ((q = !0), D(A, M)) : A
    );
  for (
    a = s = A = he(A.minus(ee), A.plus(ee), h), T = D(A.times(A), h), i = 3;
    ;

  ) {
    if (
      ((s = D(s.times(T), h)),
      (f = a.plus(he(s, new S(i), h))),
      ue(f.d).slice(0, h) === ue(a.d).slice(0, h))
    )
      return (
        (a = a.times(2)),
        o !== 0 && (a = a.plus(Pr(S, h + 2, M).times(o + ''))),
        (a = he(a, new S(C), h)),
        (S.precision = M),
        e == null ? ((q = !0), D(a, M)) : a
      );
    (a = f), (i += 2);
  }
}
function dn(t, e) {
  var r, n, i;
  for (
    (r = e.indexOf('.')) > -1 && (e = e.replace('.', '')),
      (n = e.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +e.slice(n + 1)), (e = e.substring(0, n)))
        : r < 0 && (r = e.length),
      n = 0;
    e.charCodeAt(n) === 48;

  )
    ++n;
  for (i = e.length; e.charCodeAt(i - 1) === 48; ) --i;
  if (((e = e.slice(n, i)), e)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (t.e = Ne(r / N)),
      (t.d = []),
      (n = (r + 1) % N),
      r < 0 && (n += N),
      n < i)
    ) {
      for (n && t.d.push(+e.slice(0, n)), i -= N; n < i; )
        t.d.push(+e.slice(n, (n += N)));
      (e = e.slice(n)), (n = N - e.length);
    } else n -= i;
    for (; n--; ) e += '0';
    if ((t.d.push(+e), q && (t.e > It || t.e < -It))) throw Error(vr + r);
  } else (t.s = 0), (t.e = 0), (t.d = [0]);
  return t;
}
function D(t, e, r) {
  var n,
    i,
    o,
    s,
    a,
    f,
    h,
    T,
    C = t.d;
  for (s = 1, o = C[0]; o >= 10; o /= 10) s++;
  if (((n = e - s), n < 0)) (n += N), (i = e), (h = C[(T = 0)]);
  else {
    if (((T = Math.ceil((n + 1) / N)), (o = C.length), T >= o)) return t;
    for (h = o = C[T], s = 1; o >= 10; o /= 10) s++;
    (n %= N), (i = n - N + s);
  }
  if (
    (r !== void 0 &&
      ((o = ke(10, s - i - 1)),
      (a = (h / o) % 10 | 0),
      (f = e < 0 || C[T + 1] !== void 0 || h % o),
      (f =
        r < 4
          ? (a || f) && (r == 0 || r == (t.s < 0 ? 3 : 2))
          : a > 5 ||
            (a == 5 &&
              (r == 4 ||
                f ||
                (r == 6 &&
                  (n > 0 ? (i > 0 ? h / ke(10, s - i) : 0) : C[T - 1]) % 10 &
                    1) ||
                r == (t.s < 0 ? 8 : 7))))),
    e < 1 || !C[0])
  )
    return (
      f
        ? ((o = $(t)),
          (C.length = 1),
          (e = e - o - 1),
          (C[0] = ke(10, (N - (e % N)) % N)),
          (t.e = Ne(-e / N) || 0))
        : ((C.length = 1), (C[0] = t.e = t.s = 0)),
      t
    );
  if (
    (n == 0
      ? ((C.length = T), (o = 1), T--)
      : ((C.length = T + 1),
        (o = ke(10, N - n)),
        (C[T] = i > 0 ? ((h / ke(10, s - i)) % ke(10, i) | 0) * o : 0)),
    f)
  )
    for (;;)
      if (T == 0) {
        (C[0] += o) == Q && ((C[0] = 1), ++t.e);
        break;
      } else {
        if (((C[T] += o), C[T] != Q)) break;
        (C[T--] = 0), (o = 1);
      }
  for (n = C.length; C[--n] === 0; ) C.pop();
  if (q && (t.e > It || t.e < -It)) throw Error(vr + $(t));
  return t;
}
function bn(t, e) {
  var r,
    n,
    i,
    o,
    s,
    a,
    f,
    h,
    T,
    C,
    k = t.constructor,
    A = k.precision;
  if (!t.s || !e.s) return e.s ? (e.s = -e.s) : (e = new k(t)), q ? D(e, A) : e;
  if (
    ((f = t.d),
    (C = e.d),
    (n = e.e),
    (h = t.e),
    (f = f.slice()),
    (s = h - n),
    s)
  ) {
    for (
      T = s < 0,
        T
          ? ((r = f), (s = -s), (a = C.length))
          : ((r = C), (n = h), (a = f.length)),
        i = Math.max(Math.ceil(A / N), a) + 2,
        s > i && ((s = i), (r.length = 1)),
        r.reverse(),
        i = s;
      i--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (i = f.length, a = C.length, T = i < a, T && (a = i), i = 0; i < a; i++)
      if (f[i] != C[i]) {
        T = f[i] < C[i];
        break;
      }
    s = 0;
  }
  for (
    T && ((r = f), (f = C), (C = r), (e.s = -e.s)),
      a = f.length,
      i = C.length - a;
    i > 0;
    --i
  )
    f[a++] = 0;
  for (i = C.length; i > s; ) {
    if (f[--i] < C[i]) {
      for (o = i; o && f[--o] === 0; ) f[o] = Q - 1;
      --f[o], (f[i] += Q);
    }
    f[i] -= C[i];
  }
  for (; f[--a] === 0; ) f.pop();
  for (; f[0] === 0; f.shift()) --n;
  return f[0] ? ((e.d = f), (e.e = n), q ? D(e, A) : e) : new k(0);
}
function Me(t, e, r) {
  var n,
    i = $(t),
    o = ue(t.d),
    s = o.length;
  return (
    e
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + '.' + o.slice(1) + Pe(n))
          : s > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (i < 0 ? 'e' : 'e+') + i))
      : i < 0
        ? ((o = '0.' + Pe(-i - 1) + o), r && (n = r - s) > 0 && (o += Pe(n)))
        : i >= s
          ? ((o += Pe(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + '.' + Pe(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + '.' + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), (o += Pe(n)))),
    t.s < 0 ? '-' + o : o
  );
}
function fn(t, e) {
  if (t.length > e) return (t.length = e), !0;
}
function wn(t) {
  var e, r, n;
  function i(o) {
    var s = this;
    if (!(s instanceof i)) return new i(o);
    if (((s.constructor = i), o instanceof i)) {
      (s.s = o.s), (s.e = o.e), (s.d = (o = o.d) ? o.slice() : o);
      return;
    }
    if (typeof o == 'number') {
      if (o * 0 !== 0) throw Error(Oe + o);
      if (o > 0) s.s = 1;
      else if (o < 0) (o = -o), (s.s = -1);
      else {
        (s.s = 0), (s.e = 0), (s.d = [0]);
        return;
      }
      if (o === ~~o && o < 1e7) {
        (s.e = 0), (s.d = [o]);
        return;
      }
      return dn(s, o.toString());
    } else if (typeof o != 'string') throw Error(Oe + o);
    if (
      (o.charCodeAt(0) === 45 ? ((o = o.slice(1)), (s.s = -1)) : (s.s = 1),
      ps.test(o))
    )
      dn(s, o);
    else throw Error(Oe + o);
  }
  if (
    ((i.prototype = R),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = wn),
    (i.config = i.set = ds),
    t === void 0 && (t = {}),
    t)
  )
    for (
      n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'], e = 0;
      e < n.length;

    )
      t.hasOwnProperty((r = n[e++])) || (t[r] = this[r]);
  return i.config(t), i;
}
function ds(t) {
  if (!t || typeof t != 'object') throw Error(ie + 'Object expected');
  var e,
    r,
    n,
    i = [
      'precision',
      1,
      Fe,
      'rounding',
      0,
      8,
      'toExpNeg',
      -1 / 0,
      0,
      'toExpPos',
      0,
      1 / 0,
    ];
  for (e = 0; e < i.length; e += 3)
    if ((n = t[(r = i[e])]) !== void 0)
      if (Ne(n) === n && n >= i[e + 1] && n <= i[e + 2]) this[r] = n;
      else throw Error(Oe + r + ': ' + n);
  if ((n = t[(r = 'LN10')]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Oe + r + ': ' + n);
  return this;
}
var Fe,
  ms,
  Tr,
  q,
  ie,
  Oe,
  vr,
  Ne,
  ke,
  ps,
  ee,
  Q,
  N,
  gn,
  It,
  R,
  he,
  _t,
  En = ne(() => {
    'use strict';
    u();
    c();
    m();
    p();
    d();
    l();
    (Fe = 1e9),
      (ms = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286',
      }),
      (q = !0),
      (ie = '[DecimalError] '),
      (Oe = ie + 'Invalid argument: '),
      (vr = ie + 'Exponent out of range: '),
      (Ne = Math.floor),
      (ke = Math.pow),
      (ps = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i),
      (Q = 1e7),
      (N = 7),
      (gn = 9007199254740991),
      (It = Ne(gn / N)),
      (R = {});
    R.absoluteValue = R.abs = function () {
      var t = new this.constructor(this);
      return t.s && (t.s = 1), t;
    };
    R.comparedTo = R.cmp = function (t) {
      var e,
        r,
        n,
        i,
        o = this;
      if (((t = new o.constructor(t)), o.s !== t.s)) return o.s || -t.s;
      if (o.e !== t.e) return (o.e > t.e) ^ (o.s < 0) ? 1 : -1;
      for (n = o.d.length, i = t.d.length, e = 0, r = n < i ? n : i; e < r; ++e)
        if (o.d[e] !== t.d[e]) return (o.d[e] > t.d[e]) ^ (o.s < 0) ? 1 : -1;
      return n === i ? 0 : (n > i) ^ (o.s < 0) ? 1 : -1;
    };
    R.decimalPlaces = R.dp = function () {
      var t = this,
        e = t.d.length - 1,
        r = (e - t.e) * N;
      if (((e = t.d[e]), e)) for (; e % 10 == 0; e /= 10) r--;
      return r < 0 ? 0 : r;
    };
    R.dividedBy = R.div = function (t) {
      return he(this, new this.constructor(t));
    };
    R.dividedToIntegerBy = R.idiv = function (t) {
      var e = this,
        r = e.constructor;
      return D(he(e, new r(t), 0, 1), r.precision);
    };
    R.equals = R.eq = function (t) {
      return !this.cmp(t);
    };
    R.exponent = function () {
      return $(this);
    };
    R.greaterThan = R.gt = function (t) {
      return this.cmp(t) > 0;
    };
    R.greaterThanOrEqualTo = R.gte = function (t) {
      return this.cmp(t) >= 0;
    };
    R.isInteger = R.isint = function () {
      return this.e > this.d.length - 2;
    };
    R.isNegative = R.isneg = function () {
      return this.s < 0;
    };
    R.isPositive = R.ispos = function () {
      return this.s > 0;
    };
    R.isZero = function () {
      return this.s === 0;
    };
    R.lessThan = R.lt = function (t) {
      return this.cmp(t) < 0;
    };
    R.lessThanOrEqualTo = R.lte = function (t) {
      return this.cmp(t) < 1;
    };
    R.logarithm = R.log = function (t) {
      var e,
        r = this,
        n = r.constructor,
        i = n.precision,
        o = i + 5;
      if (t === void 0) t = new n(10);
      else if (((t = new n(t)), t.s < 1 || t.eq(ee))) throw Error(ie + 'NaN');
      if (r.s < 1) throw Error(ie + (r.s ? 'NaN' : '-Infinity'));
      return r.eq(ee)
        ? new n(0)
        : ((q = !1), (e = he(it(r, o), it(t, o), o)), (q = !0), D(e, i));
    };
    R.minus = R.sub = function (t) {
      var e = this;
      return (
        (t = new e.constructor(t)),
        e.s == t.s ? bn(e, t) : yn(e, ((t.s = -t.s), t))
      );
    };
    R.modulo = R.mod = function (t) {
      var e,
        r = this,
        n = r.constructor,
        i = n.precision;
      if (((t = new n(t)), !t.s)) throw Error(ie + 'NaN');
      return r.s
        ? ((q = !1), (e = he(r, t, 0, 1).times(t)), (q = !0), r.minus(e))
        : D(new n(r), i);
    };
    R.naturalExponential = R.exp = function () {
      return hn(this);
    };
    R.naturalLogarithm = R.ln = function () {
      return it(this);
    };
    R.negated = R.neg = function () {
      var t = new this.constructor(this);
      return (t.s = -t.s || 0), t;
    };
    R.plus = R.add = function (t) {
      var e = this;
      return (
        (t = new e.constructor(t)),
        e.s == t.s ? yn(e, t) : bn(e, ((t.s = -t.s), t))
      );
    };
    R.precision = R.sd = function (t) {
      var e,
        r,
        n,
        i = this;
      if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error(Oe + t);
      if (
        ((e = $(i) + 1), (n = i.d.length - 1), (r = n * N + 1), (n = i.d[n]), n)
      ) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = i.d[0]; n >= 10; n /= 10) r++;
      }
      return t && e > r ? e : r;
    };
    R.squareRoot = R.sqrt = function () {
      var t,
        e,
        r,
        n,
        i,
        o,
        s,
        a = this,
        f = a.constructor;
      if (a.s < 1) {
        if (!a.s) return new f(0);
        throw Error(ie + 'NaN');
      }
      for (
        t = $(a),
          q = !1,
          i = Math.sqrt(+a),
          i == 0 || i == 1 / 0
            ? ((e = ue(a.d)),
              (e.length + t) % 2 == 0 && (e += '0'),
              (i = Math.sqrt(e)),
              (t = Ne((t + 1) / 2) - (t < 0 || t % 2)),
              i == 1 / 0
                ? (e = '5e' + t)
                : ((e = i.toExponential()),
                  (e = e.slice(0, e.indexOf('e') + 1) + t)),
              (n = new f(e)))
            : (n = new f(i.toString())),
          r = f.precision,
          i = s = r + 3;
        ;

      )
        if (
          ((o = n),
          (n = o.plus(he(a, o, s + 2)).times(0.5)),
          ue(o.d).slice(0, s) === (e = ue(n.d)).slice(0, s))
        ) {
          if (((e = e.slice(s - 3, s + 1)), i == s && e == '4999')) {
            if ((D(o, r + 1, 0), o.times(o).eq(a))) {
              n = o;
              break;
            }
          } else if (e != '9999') break;
          s += 4;
        }
      return (q = !0), D(n, r);
    };
    R.times = R.mul = function (t) {
      var e,
        r,
        n,
        i,
        o,
        s,
        a,
        f,
        h,
        T = this,
        C = T.constructor,
        k = T.d,
        A = (t = new C(t)).d;
      if (!T.s || !t.s) return new C(0);
      for (
        t.s *= T.s,
          r = T.e + t.e,
          f = k.length,
          h = A.length,
          f < h && ((o = k), (k = A), (A = o), (s = f), (f = h), (h = s)),
          o = [],
          s = f + h,
          n = s;
        n--;

      )
        o.push(0);
      for (n = h; --n >= 0; ) {
        for (e = 0, i = f + n; i > n; )
          (a = o[i] + A[n] * k[i - n - 1] + e),
            (o[i--] = a % Q | 0),
            (e = (a / Q) | 0);
        o[i] = (o[i] + e) % Q | 0;
      }
      for (; !o[--s]; ) o.pop();
      return (
        e ? ++r : o.shift(), (t.d = o), (t.e = r), q ? D(t, C.precision) : t
      );
    };
    R.toDecimalPlaces = R.todp = function (t, e) {
      var r = this,
        n = r.constructor;
      return (
        (r = new n(r)),
        t === void 0
          ? r
          : (ce(t, 0, Fe),
            e === void 0 ? (e = n.rounding) : ce(e, 0, 8),
            D(r, t + $(r) + 1, e))
      );
    };
    R.toExponential = function (t, e) {
      var r,
        n = this,
        i = n.constructor;
      return (
        t === void 0
          ? (r = Me(n, !0))
          : (ce(t, 0, Fe),
            e === void 0 ? (e = i.rounding) : ce(e, 0, 8),
            (n = D(new i(n), t + 1, e)),
            (r = Me(n, !0, t + 1))),
        r
      );
    };
    R.toFixed = function (t, e) {
      var r,
        n,
        i = this,
        o = i.constructor;
      return t === void 0
        ? Me(i)
        : (ce(t, 0, Fe),
          e === void 0 ? (e = o.rounding) : ce(e, 0, 8),
          (n = D(new o(i), t + $(i) + 1, e)),
          (r = Me(n.abs(), !1, t + $(n) + 1)),
          i.isneg() && !i.isZero() ? '-' + r : r);
    };
    R.toInteger = R.toint = function () {
      var t = this,
        e = t.constructor;
      return D(new e(t), $(t) + 1, e.rounding);
    };
    R.toNumber = function () {
      return +this;
    };
    R.toPower = R.pow = function (t) {
      var e,
        r,
        n,
        i,
        o,
        s,
        a = this,
        f = a.constructor,
        h = 12,
        T = +(t = new f(t));
      if (!t.s) return new f(ee);
      if (((a = new f(a)), !a.s)) {
        if (t.s < 1) throw Error(ie + 'Infinity');
        return a;
      }
      if (a.eq(ee)) return a;
      if (((n = f.precision), t.eq(ee))) return D(a, n);
      if (((e = t.e), (r = t.d.length - 1), (s = e >= r), (o = a.s), s)) {
        if ((r = T < 0 ? -T : T) <= gn) {
          for (
            i = new f(ee), e = Math.ceil(n / N + 4), q = !1;
            r % 2 && ((i = i.times(a)), fn(i.d, e)), (r = Ne(r / 2)), r !== 0;

          )
            (a = a.times(a)), fn(a.d, e);
          return (q = !0), t.s < 0 ? new f(ee).div(i) : D(i, n);
        }
      } else if (o < 0) throw Error(ie + 'NaN');
      return (
        (o = o < 0 && t.d[Math.max(e, r)] & 1 ? -1 : 1),
        (a.s = 1),
        (q = !1),
        (i = t.times(it(a, n + h))),
        (q = !0),
        (i = hn(i)),
        (i.s = o),
        i
      );
    };
    R.toPrecision = function (t, e) {
      var r,
        n,
        i = this,
        o = i.constructor;
      return (
        t === void 0
          ? ((r = $(i)), (n = Me(i, r <= o.toExpNeg || r >= o.toExpPos)))
          : (ce(t, 1, Fe),
            e === void 0 ? (e = o.rounding) : ce(e, 0, 8),
            (i = D(new o(i), t, e)),
            (r = $(i)),
            (n = Me(i, t <= r || r <= o.toExpNeg, t))),
        n
      );
    };
    R.toSignificantDigits = R.tosd = function (t, e) {
      var r = this,
        n = r.constructor;
      return (
        t === void 0
          ? ((t = n.precision), (e = n.rounding))
          : (ce(t, 1, Fe), e === void 0 ? (e = n.rounding) : ce(e, 0, 8)),
        D(new n(r), t, e)
      );
    };
    R.toString =
      R.valueOf =
      R.val =
      R.toJSON =
      R[Symbol.for('nodejs.util.inspect.custom')] =
        function () {
          var t = this,
            e = $(t),
            r = t.constructor;
          return Me(t, e <= r.toExpNeg || e >= r.toExpPos);
        };
    he = (function () {
      function t(n, i) {
        var o,
          s = 0,
          a = n.length;
        for (n = n.slice(); a--; )
          (o = n[a] * i + s), (n[a] = o % Q | 0), (s = (o / Q) | 0);
        return s && n.unshift(s), n;
      }
      function e(n, i, o, s) {
        var a, f;
        if (o != s) f = o > s ? 1 : -1;
        else
          for (a = f = 0; a < o; a++)
            if (n[a] != i[a]) {
              f = n[a] > i[a] ? 1 : -1;
              break;
            }
        return f;
      }
      function r(n, i, o) {
        for (var s = 0; o--; )
          (n[o] -= s), (s = n[o] < i[o] ? 1 : 0), (n[o] = s * Q + n[o] - i[o]);
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      return function (n, i, o, s) {
        var a,
          f,
          h,
          T,
          C,
          k,
          A,
          O,
          S,
          M,
          oe,
          H,
          L,
          z,
          Se,
          wr,
          se,
          St,
          kt = n.constructor,
          zo = n.s == i.s ? 1 : -1,
          le = n.d,
          U = i.d;
        if (!n.s) return new kt(n);
        if (!i.s) throw Error(ie + 'Division by zero');
        for (
          f = n.e - i.e,
            se = U.length,
            Se = le.length,
            A = new kt(zo),
            O = A.d = [],
            h = 0;
          U[h] == (le[h] || 0);

        )
          ++h;
        if (
          (U[h] > (le[h] || 0) && --f,
          o == null
            ? (H = o = kt.precision)
            : s
              ? (H = o + ($(n) - $(i)) + 1)
              : (H = o),
          H < 0)
        )
          return new kt(0);
        if (((H = (H / N + 2) | 0), (h = 0), se == 1))
          for (T = 0, U = U[0], H++; (h < Se || T) && H--; h++)
            (L = T * Q + (le[h] || 0)), (O[h] = (L / U) | 0), (T = L % U | 0);
        else {
          for (
            T = (Q / (U[0] + 1)) | 0,
              T > 1 &&
                ((U = t(U, T)),
                (le = t(le, T)),
                (se = U.length),
                (Se = le.length)),
              z = se,
              S = le.slice(0, se),
              M = S.length;
            M < se;

          )
            S[M++] = 0;
          (St = U.slice()), St.unshift(0), (wr = U[0]), U[1] >= Q / 2 && ++wr;
          do
            (T = 0),
              (a = e(U, S, se, M)),
              a < 0
                ? ((oe = S[0]),
                  se != M && (oe = oe * Q + (S[1] || 0)),
                  (T = (oe / wr) | 0),
                  T > 1
                    ? (T >= Q && (T = Q - 1),
                      (C = t(U, T)),
                      (k = C.length),
                      (M = S.length),
                      (a = e(C, S, k, M)),
                      a == 1 && (T--, r(C, se < k ? St : U, k)))
                    : (T == 0 && (a = T = 1), (C = U.slice())),
                  (k = C.length),
                  k < M && C.unshift(0),
                  r(S, C, M),
                  a == -1 &&
                    ((M = S.length),
                    (a = e(U, S, se, M)),
                    a < 1 && (T++, r(S, se < M ? St : U, M))),
                  (M = S.length))
                : a === 0 && (T++, (S = [0])),
              (O[h++] = T),
              a && S[0] ? (S[M++] = le[z] || 0) : ((S = [le[z]]), (M = 1));
          while ((z++ < Se || S[0] !== void 0) && H--);
        }
        return O[0] || O.shift(), (A.e = f), D(A, s ? o + $(A) + 1 : o);
      };
    })();
    Tr = wn(ms);
    ee = new Tr(1);
    _t = Tr;
  });
var v,
  me,
  l = ne(() => {
    'use strict';
    En();
    (v = class extends _t {
      static isDecimal(e) {
        return e instanceof _t;
      }
      static random(e = 20) {
        {
          let n = globalThis.crypto
            .getRandomValues(new Uint8Array(e))
            .reduce((i, o) => i + o, '');
          return new _t(`0.${n.slice(0, e)}`);
        }
      }
    }),
      (me = v);
  });
function ws() {
  return !1;
}
function Nn() {
  return {
    dev: 0,
    ino: 0,
    mode: 0,
    nlink: 0,
    uid: 0,
    gid: 0,
    rdev: 0,
    size: 0,
    blksize: 0,
    blocks: 0,
    atimeMs: 0,
    mtimeMs: 0,
    ctimeMs: 0,
    birthtimeMs: 0,
    atime: new Date(),
    mtime: new Date(),
    ctime: new Date(),
    birthtime: new Date(),
  };
}
function Es() {
  return Nn();
}
function xs() {
  return [];
}
function Ps(t) {
  t(null, []);
}
function vs() {
  return '';
}
function Ts() {
  return '';
}
function Cs() {}
function Rs() {}
function As() {}
function Ss() {}
function ks() {}
function Os() {}
var Ms,
  Is,
  qn,
  Un = ne(() => {
    'use strict';
    u();
    c();
    m();
    p();
    d();
    l();
    (Ms = {}),
      (Is = {
        existsSync: ws,
        lstatSync: Nn,
        statSync: Es,
        readdirSync: xs,
        readdir: Ps,
        readlinkSync: vs,
        realpathSync: Ts,
        chmodSync: Cs,
        renameSync: Rs,
        mkdirSync: As,
        rmdirSync: Ss,
        rmSync: ks,
        unlinkSync: Os,
        promises: Ms,
      }),
      (qn = Is);
  });
function _s(...t) {
  return t.join('/');
}
function Ds(...t) {
  return t.join('/');
}
function Ls(t) {
  let e = Bn(t),
    r = $n(t),
    [n, i] = e.split('.');
  return { root: '/', dir: r, base: e, ext: i, name: n };
}
function Bn(t) {
  let e = t.split('/');
  return e[e.length - 1];
}
function $n(t) {
  return t.split('/').slice(0, -1).join('/');
}
var Vn,
  Fs,
  Ns,
  Nt,
  jn = ne(() => {
    'use strict';
    u();
    c();
    m();
    p();
    d();
    l();
    (Vn = '/'),
      (Fs = { sep: Vn }),
      (Ns = {
        basename: Bn,
        dirname: $n,
        join: Ds,
        parse: Ls,
        posix: Fs,
        resolve: _s,
        sep: Vn,
      }),
      (Nt = Ns);
  });
var Qn = Le((Zc, qs) => {
  qs.exports = {
    name: '@prisma/internals',
    version: '6.6.0',
    description: "This package is intended for Prisma's internal use",
    main: 'dist/index.js',
    types: 'dist/index.d.ts',
    repository: {
      type: 'git',
      url: 'https://github.com/prisma/prisma.git',
      directory: 'packages/internals',
    },
    homepage: 'https://www.prisma.io',
    author: 'Tim Suchanek <suchanek@prisma.io>',
    bugs: 'https://github.com/prisma/prisma/issues',
    license: 'Apache-2.0',
    scripts: {
      dev: 'DEV=true tsx helpers/build.ts',
      build: 'tsx helpers/build.ts',
      test: 'dotenv -e ../../.db.env -- jest --silent',
      prepublishOnly: 'pnpm run build',
    },
    files: [
      'README.md',
      'dist',
      '!**/libquery_engine*',
      '!dist/get-generators/engines/*',
      'scripts',
    ],
    devDependencies: {
      '@babel/helper-validator-identifier': '7.25.9',
      '@opentelemetry/api': '1.9.0',
      '@swc/core': '1.11.5',
      '@swc/jest': '0.2.37',
      '@types/babel__helper-validator-identifier': '7.15.2',
      '@types/jest': '29.5.14',
      '@types/node': '18.19.76',
      '@types/resolve': '1.20.6',
      archiver: '6.0.2',
      'checkpoint-client': '1.1.33',
      'cli-truncate': '4.0.0',
      dotenv: '16.4.7',
      esbuild: '0.25.1',
      'escape-string-regexp': '5.0.0',
      execa: '5.1.1',
      'fast-glob': '3.3.3',
      'find-up': '7.0.0',
      'fp-ts': '2.16.9',
      'fs-extra': '11.3.0',
      'fs-jetpack': '5.1.0',
      'global-dirs': '4.0.0',
      globby: '11.1.0',
      'identifier-regex': '1.0.0',
      'indent-string': '4.0.0',
      'is-windows': '1.0.2',
      'is-wsl': '3.1.0',
      jest: '29.7.0',
      'jest-junit': '16.0.0',
      kleur: '4.1.5',
      'mock-stdin': '1.0.0',
      'new-github-issue-url': '0.2.1',
      'node-fetch': '3.3.2',
      'npm-packlist': '5.1.3',
      open: '7.4.2',
      'p-map': '4.0.0',
      'read-package-up': '11.0.0',
      resolve: '1.22.10',
      'string-width': '7.2.0',
      'strip-ansi': '6.0.1',
      'strip-indent': '4.0.0',
      'temp-dir': '2.0.0',
      tempy: '1.0.1',
      'terminal-link': '4.0.0',
      tmp: '0.2.3',
      'ts-node': '10.9.2',
      'ts-pattern': '5.6.2',
      'ts-toolbelt': '9.6.0',
      typescript: '5.4.5',
      yarn: '1.22.22',
    },
    dependencies: {
      '@prisma/config': 'workspace:*',
      '@prisma/debug': 'workspace:*',
      '@prisma/dmmf': 'workspace:*',
      '@prisma/driver-adapter-utils': 'workspace:*',
      '@prisma/engines': 'workspace:*',
      '@prisma/fetch-engine': 'workspace:*',
      '@prisma/generator': 'workspace:*',
      '@prisma/generator-helper': 'workspace:*',
      '@prisma/get-platform': 'workspace:*',
      '@prisma/prisma-schema-wasm':
        '6.6.0-53.f676762280b54cd07c770017ed3711ddde35f37a',
      '@prisma/schema-engine-wasm':
        '6.6.0-53.f676762280b54cd07c770017ed3711ddde35f37a',
      '@prisma/schema-files-loader': 'workspace:*',
      arg: '5.0.2',
      prompts: '2.4.2',
    },
    peerDependencies: { typescript: '>=5.1.0' },
    peerDependenciesMeta: { typescript: { optional: !0 } },
    sideEffects: !1,
  };
});
var Hn = Le((xm, Kn) => {
  'use strict';
  u();
  c();
  m();
  p();
  d();
  l();
  Kn.exports = (t, e = 1, r) => {
    if (
      ((r = { indent: ' ', includeEmptyLines: !1, ...r }), typeof t != 'string')
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof t}\``,
      );
    if (typeof e != 'number')
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof e}\``,
      );
    if (typeof r.indent != 'string')
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (e === 0) return t;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return t.replace(n, r.indent.repeat(e));
  };
});
var Xn = Le((Lm, Yn) => {
  'use strict';
  u();
  c();
  m();
  p();
  d();
  l();
  Yn.exports = ({ onlyFirst: t = !1 } = {}) => {
    let e = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|');
    return new RegExp(e, t ? void 0 : 'g');
  };
});
var ei = Le((Vm, Zn) => {
  'use strict';
  u();
  c();
  m();
  p();
  d();
  l();
  var Js = Xn();
  Zn.exports = (t) => (typeof t == 'string' ? t.replace(Js(), '') : t);
});
var Fr = Le((oy, oi) => {
  'use strict';
  u();
  c();
  m();
  p();
  d();
  l();
  oi.exports = (function () {
    function t(e, r, n, i, o) {
      return e < r || n < r ? (e > n ? n + 1 : e + 1) : i === o ? r : r + 1;
    }
    return function (e, r) {
      if (e === r) return 0;
      if (e.length > r.length) {
        var n = e;
        (e = r), (r = n);
      }
      for (
        var i = e.length, o = r.length;
        i > 0 && e.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && e.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        f,
        h,
        T,
        C,
        k,
        A,
        O,
        S,
        M,
        oe,
        H,
        L,
        z = [];
      for (f = 0; f < i; f++) z.push(f + 1), z.push(e.charCodeAt(s + f));
      for (var Se = z.length - 1; a < o - 3; )
        for (
          M = r.charCodeAt(s + (h = a)),
            oe = r.charCodeAt(s + (T = a + 1)),
            H = r.charCodeAt(s + (C = a + 2)),
            L = r.charCodeAt(s + (k = a + 3)),
            A = a += 4,
            f = 0;
          f < Se;
          f += 2
        )
          (O = z[f]),
            (S = z[f + 1]),
            (h = t(O, h, T, M, S)),
            (T = t(h, T, C, oe, S)),
            (C = t(T, C, k, H, S)),
            (A = t(C, k, A, L, S)),
            (z[f] = A),
            (k = C),
            (C = T),
            (T = h),
            (h = O);
      for (; a < o; )
        for (M = r.charCodeAt(s + (h = a)), A = ++a, f = 0; f < Se; f += 2)
          (O = z[f]), (z[f] = A = t(O, h, A, M, z[f + 1])), (h = O);
      return A;
    };
  })();
});
var ci = ne(() => {
  'use strict';
  u();
  c();
  m();
  p();
  d();
  l();
});
var mi = ne(() => {
  'use strict';
  u();
  c();
  m();
  p();
  d();
  l();
});
var Li = Le((iP, qa) => {
  qa.exports = {
    name: '@prisma/engines-version',
    version: '6.6.0-53.f676762280b54cd07c770017ed3711ddde35f37a',
    main: 'index.js',
    types: 'index.d.ts',
    license: 'Apache-2.0',
    author: 'Tim Suchanek <suchanek@prisma.io>',
    prisma: { enginesVersion: 'f676762280b54cd07c770017ed3711ddde35f37a' },
    repository: {
      type: 'git',
      url: 'https://github.com/prisma/engines-wrapper.git',
      directory: 'packages/engines-version',
    },
    devDependencies: { '@types/node': '18.19.76', typescript: '4.9.5' },
    files: ['index.js', 'index.d.ts'],
    scripts: { build: 'tsc -d' },
  };
});
var nr,
  Fi = ne(() => {
    'use strict';
    u();
    c();
    m();
    p();
    d();
    l();
    nr = class {
      events = {};
      on(e, r) {
        return (
          this.events[e] || (this.events[e] = []), this.events[e].push(r), this
        );
      }
      emit(e, ...r) {
        return this.events[e]
          ? (this.events[e].forEach((n) => {
              n(...r);
            }),
            !0)
          : !1;
      }
    };
  });
var Jl = {};
rt(Jl, {
  DMMF: () => mt,
  Debug: () => J,
  Decimal: () => me,
  Extensions: () => Cr,
  MetricsClient: () => Ye,
  PrismaClientInitializationError: () => I,
  PrismaClientKnownRequestError: () => X,
  PrismaClientRustPanicError: () => we,
  PrismaClientUnknownRequestError: () => j,
  PrismaClientValidationError: () => W,
  Public: () => Rr,
  Sql: () => Z,
  createParam: () => Ai,
  defineDmmfProperty: () => _i,
  deserializeJsonResponse: () => $e,
  deserializeRawResult: () => hr,
  dmmfToRuntimeDataModel: () => ii,
  empty: () => qi,
  getPrismaClient: () => Wo,
  getRuntime: () => Re,
  join: () => Ni,
  makeStrictEnum: () => Ko,
  makeTypedQueryFactory: () => Di,
  objectEnumValues: () => Wt,
  raw: () => Jr,
  serializeJsonQuery: () => er,
  skip: () => Zt,
  sqltag: () => Gr,
  warnEnvConflicts: () => void 0,
  warnOnce: () => lt,
});
module.exports = rs(Jl);
u();
c();
m();
p();
d();
l();
var Cr = {};
rt(Cr, { defineExtension: () => xn, getExtensionContext: () => Pn });
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function xn(t) {
  return typeof t == 'function' ? t : (e) => e.$extends(t);
}
u();
c();
m();
p();
d();
l();
function Pn(t) {
  return t;
}
var Rr = {};
rt(Rr, { validator: () => vn });
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function vn(...t) {
  return (e) => e;
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var Ar,
  Tn,
  Cn,
  Rn,
  An = !0;
typeof g < 'u' &&
  (({
    FORCE_COLOR: Ar,
    NODE_DISABLE_COLORS: Tn,
    NO_COLOR: Cn,
    TERM: Rn,
  } = g.env || {}),
  (An = g.stdout && g.stdout.isTTY));
var fs = {
  enabled:
    !Tn && Cn == null && Rn !== 'dumb' && ((Ar != null && Ar !== '0') || An),
};
function F(t, e) {
  let r = new RegExp(`\\x1b\\[${e}m`, 'g'),
    n = `\x1B[${t}m`,
    i = `\x1B[${e}m`;
  return function (o) {
    return !fs.enabled || o == null
      ? o
      : n + (~('' + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var ju = F(0, 0),
  Dt = F(1, 22),
  Lt = F(2, 22),
  Qu = F(3, 23),
  Sn = F(4, 24),
  Ju = F(7, 27),
  Gu = F(8, 28),
  Wu = F(9, 29),
  Ku = F(30, 39),
  qe = F(31, 39),
  kn = F(32, 39),
  On = F(33, 39),
  Mn = F(34, 39),
  Hu = F(35, 39),
  In = F(36, 39),
  zu = F(37, 39),
  _n = F(90, 39),
  Yu = F(90, 39),
  Xu = F(40, 49),
  Zu = F(41, 49),
  ec = F(42, 49),
  tc = F(43, 49),
  rc = F(44, 49),
  nc = F(45, 49),
  ic = F(46, 49),
  oc = F(47, 49);
u();
c();
m();
p();
d();
l();
var gs = 100,
  Dn = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red'],
  Ft = [],
  Ln = Date.now(),
  ys = 0,
  Sr = typeof g < 'u' ? g.env : {};
globalThis.DEBUG ??= Sr.DEBUG ?? '';
globalThis.DEBUG_COLORS ??= Sr.DEBUG_COLORS ? Sr.DEBUG_COLORS === 'true' : !0;
var ot = {
  enable(t) {
    typeof t == 'string' && (globalThis.DEBUG = t);
  },
  disable() {
    let t = globalThis.DEBUG;
    return (globalThis.DEBUG = ''), t;
  },
  enabled(t) {
    let e = globalThis.DEBUG.split(',').map((i) =>
        i.replace(/[.+?^${}()|[\]\\]/g, '\\$&'),
      ),
      r = e.some((i) =>
        i === '' || i[0] === '-'
          ? !1
          : t.match(RegExp(i.split('*').join('.*') + '$')),
      ),
      n = e.some((i) =>
        i === '' || i[0] !== '-'
          ? !1
          : t.match(RegExp(i.slice(1).split('*').join('.*') + '$')),
      );
    return r && !n;
  },
  log: (...t) => {
    let [e, r, ...n] = t;
    (console.warn ?? console.log)(`${e} ${r}`, ...n);
  },
  formatters: {},
};
function hs(t) {
  let e = {
      color: Dn[ys++ % Dn.length],
      enabled: ot.enabled(t),
      namespace: t,
      log: ot.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = e;
      if (
        (n.length !== 0 && Ft.push([o, ...n]),
        Ft.length > gs && Ft.shift(),
        ot.enabled(o) || i)
      ) {
        let f = n.map((T) => (typeof T == 'string' ? T : bs(T))),
          h = `+${Date.now() - Ln}ms`;
        (Ln = Date.now()), a(o, ...f, h);
      }
    };
  return new Proxy(r, { get: (n, i) => e[i], set: (n, i, o) => (e[i] = o) });
}
var J = new Proxy(hs, { get: (t, e) => ot[e], set: (t, e, r) => (ot[e] = r) });
function bs(t, e = 2) {
  let r = new Set();
  return JSON.stringify(
    t,
    (n, i) => {
      if (typeof i == 'object' && i !== null) {
        if (r.has(i)) return '[Circular *]';
        r.add(i);
      } else if (typeof i == 'bigint') return i.toString();
      return i;
    },
    e,
  );
}
function Fn() {
  Ft.length = 0;
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var kr = [
  'darwin',
  'darwin-arm64',
  'debian-openssl-1.0.x',
  'debian-openssl-1.1.x',
  'debian-openssl-3.0.x',
  'rhel-openssl-1.0.x',
  'rhel-openssl-1.1.x',
  'rhel-openssl-3.0.x',
  'linux-arm64-openssl-1.1.x',
  'linux-arm64-openssl-1.0.x',
  'linux-arm64-openssl-3.0.x',
  'linux-arm-openssl-1.1.x',
  'linux-arm-openssl-1.0.x',
  'linux-arm-openssl-3.0.x',
  'linux-musl',
  'linux-musl-openssl-3.0.x',
  'linux-musl-arm64-openssl-1.1.x',
  'linux-musl-arm64-openssl-3.0.x',
  'linux-nixos',
  'linux-static-x64',
  'linux-static-arm64',
  'windows',
  'freebsd11',
  'freebsd12',
  'freebsd13',
  'freebsd14',
  'freebsd15',
  'openbsd',
  'netbsd',
  'arm',
];
u();
c();
m();
p();
d();
l();
var Us = Qn(),
  Or = Us.version;
u();
c();
m();
p();
d();
l();
var Jn = 'library';
function Ue(t) {
  let e = Bs();
  return (
    e ||
    (t?.config.engineType === 'library'
      ? 'library'
      : t?.config.engineType === 'binary'
        ? 'binary'
        : t?.config.engineType === 'client'
          ? 'client'
          : Jn)
  );
}
function Bs() {
  let t = g.env.PRISMA_CLIENT_ENGINE_TYPE;
  return t === 'library'
    ? 'library'
    : t === 'binary'
      ? 'binary'
      : t === 'client'
        ? 'client'
        : void 0;
}
u();
c();
m();
p();
d();
l();
var Gn = 'prisma+postgres',
  Wn = `${Gn}:`;
function Mr(t) {
  return t?.startsWith(`${Wn}//`) ?? !1;
}
var at = {};
rt(at, {
  error: () => js,
  info: () => Vs,
  log: () => $s,
  query: () => Qs,
  should: () => zn,
  tags: () => st,
  warn: () => Ir,
});
u();
c();
m();
p();
d();
l();
var st = {
    error: qe('prisma:error'),
    warn: On('prisma:warn'),
    info: In('prisma:info'),
    query: Mn('prisma:query'),
  },
  zn = { warn: () => !g.env.PRISMA_DISABLE_WARNINGS };
function $s(...t) {
  console.log(...t);
}
function Ir(t, ...e) {
  zn.warn() && console.warn(`${st.warn} ${t}`, ...e);
}
function Vs(t, ...e) {
  console.info(`${st.info} ${t}`, ...e);
}
function js(t, ...e) {
  console.error(`${st.error} ${t}`, ...e);
}
function Qs(t, ...e) {
  console.log(`${st.query} ${t}`, ...e);
}
u();
c();
m();
p();
d();
l();
function qt(t, e) {
  if (!t)
    throw new Error(
      `${e}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`,
    );
}
u();
c();
m();
p();
d();
l();
function be(t, e) {
  throw new Error(e);
}
u();
c();
m();
p();
d();
l();
function _r(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
u();
c();
m();
p();
d();
l();
function Be(t, e) {
  let r = {};
  for (let n of Object.keys(t)) r[n] = e(t[n], n);
  return r;
}
u();
c();
m();
p();
d();
l();
function Dr(t, e) {
  if (t.length === 0) return;
  let r = t[0];
  for (let n = 1; n < t.length; n++) e(r, t[n]) < 0 && (r = t[n]);
  return r;
}
u();
c();
m();
p();
d();
l();
function te(t, e) {
  Object.defineProperty(t, 'name', { value: e, configurable: !0 });
}
u();
c();
m();
p();
d();
l();
var ti = new Set(),
  lt = (t, e, ...r) => {
    ti.has(t) || (ti.add(t), Ir(e, ...r));
  };
var I = class t extends Error {
  clientVersion;
  errorCode;
  retryable;
  constructor(e, r, n) {
    super(e),
      (this.name = 'PrismaClientInitializationError'),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(t);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientInitializationError';
  }
};
te(I, 'PrismaClientInitializationError');
u();
c();
m();
p();
d();
l();
var X = class extends Error {
  code;
  meta;
  clientVersion;
  batchRequestIdx;
  constructor(e, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(e),
      (this.name = 'PrismaClientKnownRequestError'),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = i),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: o,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientKnownRequestError';
  }
};
te(X, 'PrismaClientKnownRequestError');
u();
c();
m();
p();
d();
l();
var we = class extends Error {
  clientVersion;
  constructor(e, r) {
    super(e),
      (this.name = 'PrismaClientRustPanicError'),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientRustPanicError';
  }
};
te(we, 'PrismaClientRustPanicError');
u();
c();
m();
p();
d();
l();
var j = class extends Error {
  clientVersion;
  batchRequestIdx;
  constructor(e, { clientVersion: r, batchRequestIdx: n }) {
    super(e),
      (this.name = 'PrismaClientUnknownRequestError'),
      (this.clientVersion = r),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientUnknownRequestError';
  }
};
te(j, 'PrismaClientUnknownRequestError');
u();
c();
m();
p();
d();
l();
var W = class extends Error {
  name = 'PrismaClientValidationError';
  clientVersion;
  constructor(e, { clientVersion: r }) {
    super(e), (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientValidationError';
  }
};
te(W, 'PrismaClientValidationError');
u();
c();
m();
p();
d();
l();
l();
function $e(t) {
  return t === null
    ? t
    : Array.isArray(t)
      ? t.map($e)
      : typeof t == 'object'
        ? Gs(t)
          ? Ws(t)
          : Be(t, $e)
        : t;
}
function Gs(t) {
  return t !== null && typeof t == 'object' && typeof t.$type == 'string';
}
function Ws({ $type: t, value: e }) {
  switch (t) {
    case 'BigInt':
      return BigInt(e);
    case 'Bytes': {
      let { buffer: r, byteOffset: n, byteLength: i } = b.from(e, 'base64');
      return new Uint8Array(r, n, i);
    }
    case 'DateTime':
      return new Date(e);
    case 'Decimal':
      return new me(e);
    case 'Json':
      return JSON.parse(e);
    default:
      be(e, 'Unknown tagged value');
  }
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var pe = class {
  _map = new Map();
  get(e) {
    return this._map.get(e)?.value;
  }
  set(e, r) {
    this._map.set(e, { value: r });
  }
  getOrCreate(e, r) {
    let n = this._map.get(e);
    if (n) return n.value;
    let i = r();
    return this.set(e, i), i;
  }
};
u();
c();
m();
p();
d();
l();
function ve(t) {
  return t.substring(0, 1).toLowerCase() + t.substring(1);
}
u();
c();
m();
p();
d();
l();
function ni(t, e) {
  let r = {};
  for (let n of t) {
    let i = n[e];
    r[i] = n;
  }
  return r;
}
u();
c();
m();
p();
d();
l();
function ut(t) {
  let e;
  return {
    get() {
      return e || (e = { value: t() }), e.value;
    },
  };
}
u();
c();
m();
p();
d();
l();
function ii(t) {
  return { models: Lr(t.models), enums: Lr(t.enums), types: Lr(t.types) };
}
function Lr(t) {
  let e = {};
  for (let { name: r, ...n } of t) e[r] = n;
  return e;
}
u();
c();
m();
p();
d();
l();
function Ve(t) {
  return (
    t instanceof Date || Object.prototype.toString.call(t) === '[object Date]'
  );
}
function Ut(t) {
  return t.toString() !== 'Invalid Date';
}
u();
c();
m();
p();
d();
l();
l();
function je(t) {
  return v.isDecimal(t)
    ? !0
    : t !== null &&
        typeof t == 'object' &&
        typeof t.s == 'number' &&
        typeof t.e == 'number' &&
        typeof t.toFixed == 'function' &&
        Array.isArray(t.d);
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var mt = {};
rt(mt, { ModelAction: () => ct, datamodelEnumToSchemaEnum: () => Ks });
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function Ks(t) {
  return { name: t.name, values: t.values.map((e) => e.name) };
}
u();
c();
m();
p();
d();
l();
var ct = ((L) => (
  (L.findUnique = 'findUnique'),
  (L.findUniqueOrThrow = 'findUniqueOrThrow'),
  (L.findFirst = 'findFirst'),
  (L.findFirstOrThrow = 'findFirstOrThrow'),
  (L.findMany = 'findMany'),
  (L.create = 'create'),
  (L.createMany = 'createMany'),
  (L.createManyAndReturn = 'createManyAndReturn'),
  (L.update = 'update'),
  (L.updateMany = 'updateMany'),
  (L.updateManyAndReturn = 'updateManyAndReturn'),
  (L.upsert = 'upsert'),
  (L.delete = 'delete'),
  (L.deleteMany = 'deleteMany'),
  (L.groupBy = 'groupBy'),
  (L.count = 'count'),
  (L.aggregate = 'aggregate'),
  (L.findRaw = 'findRaw'),
  (L.aggregateRaw = 'aggregateRaw'),
  L
))(ct || {});
var Hs = nt(Hn());
var zs = {
    red: qe,
    gray: _n,
    dim: Lt,
    bold: Dt,
    underline: Sn,
    highlightSource: (t) => t.highlight(),
  },
  Ys = {
    red: (t) => t,
    gray: (t) => t,
    dim: (t) => t,
    bold: (t) => t,
    underline: (t) => t,
    highlightSource: (t) => t,
  };
function Xs({ message: t, originalMethod: e, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${e}()`,
    message: t,
    isPanic: r ?? !1,
    callArguments: n,
  };
}
function Zs(
  {
    functionName: t,
    location: e,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [''],
    f = e ? ' in' : ':';
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold(
              'on us',
            )}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${t}\``)} invocation${f}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${t}\``)} invocation${f}`)),
    e && a.push(s.underline(ea(e))),
    i)
  ) {
    a.push('');
    let h = [i.toString()];
    o && (h.push(o), h.push(s.dim(')'))), a.push(h.join('')), o && a.push('');
  } else a.push(''), o && a.push(o), a.push('');
  return (
    a.push(r),
    a.join(`
`)
  );
}
function ea(t) {
  let e = [t.fileName];
  return (
    t.lineNumber && e.push(String(t.lineNumber)),
    t.columnNumber && e.push(String(t.columnNumber)),
    e.join(':')
  );
}
function Bt(t) {
  let e = t.showColors ? zs : Ys,
    r;
  return (
    typeof $getTemplateParameters < 'u'
      ? (r = $getTemplateParameters(t, e))
      : (r = Xs(t)),
    Zs(r, e)
  );
}
u();
c();
m();
p();
d();
l();
var di = nt(Fr());
u();
c();
m();
p();
d();
l();
function li(t, e, r) {
  let n = ui(t),
    i = ta(n),
    o = na(i);
  o ? $t(o, e, r) : e.addErrorMessage(() => 'Unknown error');
}
function ui(t) {
  return t.errors.flatMap((e) => (e.kind === 'Union' ? ui(e) : [e]));
}
function ta(t) {
  let e = new Map(),
    r = [];
  for (let n of t) {
    if (n.kind !== 'InvalidArgumentType') {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`,
      o = e.get(i);
    o
      ? e.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: ra(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : e.set(i, n);
  }
  return r.push(...e.values()), r;
}
function ra(t, e) {
  return [...new Set(t.concat(e))];
}
function na(t) {
  return Dr(t, (e, r) => {
    let n = si(e),
      i = si(r);
    return n !== i ? n - i : ai(e) - ai(r);
  });
}
function si(t) {
  let e = 0;
  return (
    Array.isArray(t.selectionPath) && (e += t.selectionPath.length),
    Array.isArray(t.argumentPath) && (e += t.argumentPath.length),
    e
  );
}
function ai(t) {
  switch (t.kind) {
    case 'InvalidArgumentValue':
    case 'ValueTooLarge':
      return 20;
    case 'InvalidArgumentType':
      return 10;
    case 'RequiredArgumentMissing':
      return -10;
    default:
      return 0;
  }
}
u();
c();
m();
p();
d();
l();
var re = class {
  constructor(e, r) {
    this.name = e;
    this.value = r;
  }
  isRequired = !1;
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(e) {
    let {
      colors: { green: r },
    } = e.context;
    e.addMarginSymbol(r(this.isRequired ? '+' : '?')),
      e.write(r(this.name)),
      this.isRequired || e.write(r('?')),
      e.write(r(': ')),
      typeof this.value == 'string'
        ? e.write(r(this.value))
        : e.write(this.value);
  }
};
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
mi();
u();
c();
m();
p();
d();
l();
var Qe = class {
  constructor(e = 0, r) {
    this.context = r;
    this.currentIndent = e;
  }
  lines = [];
  currentLine = '';
  currentIndent = 0;
  marginSymbol;
  afterNextNewLineCallback;
  write(e) {
    return typeof e == 'string' ? (this.currentLine += e) : e.write(this), this;
  }
  writeJoined(e, r, n = (i, o) => o.write(i)) {
    let i = r.length - 1;
    for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(e);
    return this;
  }
  writeLine(e) {
    return this.write(e).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ''),
      (this.marginSymbol = void 0);
    let e = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), e?.(), this;
  }
  withIndent(e) {
    return this.indent(), e(this), this.unindent(), this;
  }
  afterNextNewline(e) {
    return (this.afterNextNewLineCallback = e), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(e) {
    return (this.marginSymbol = e), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let e = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + e.slice(1) : e;
  }
};
ci();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var Vt = class {
  constructor(e) {
    this.value = e;
  }
  write(e) {
    e.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
u();
c();
m();
p();
d();
l();
var jt = (t) => t,
  Qt = { bold: jt, red: jt, green: jt, dim: jt, enabled: !1 },
  pi = { bold: Dt, red: qe, green: kn, dim: Lt, enabled: !0 },
  Je = {
    write(t) {
      t.writeLine(',');
    },
  };
u();
c();
m();
p();
d();
l();
var de = class {
  constructor(e) {
    this.contents = e;
  }
  isUnderlined = !1;
  color = (e) => e;
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(e) {
    return (this.color = e), this;
  }
  write(e) {
    let r = e.getCurrentLineLength();
    e.write(this.color(this.contents)),
      this.isUnderlined &&
        e.afterNextNewline(() => {
          e.write(' '.repeat(r)).writeLine(
            this.color('~'.repeat(this.contents.length)),
          );
        });
  }
};
u();
c();
m();
p();
d();
l();
var Te = class {
  hasError = !1;
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var Ge = class extends Te {
  items = [];
  addItem(e) {
    return this.items.push(new Vt(e)), this;
  }
  getField(e) {
    return this.items[e];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
  }
  write(e) {
    if (this.items.length === 0) {
      this.writeEmpty(e);
      return;
    }
    this.writeWithItems(e);
  }
  writeEmpty(e) {
    let r = new de('[]');
    this.hasError && r.setColor(e.context.colors.red).underline(), e.write(r);
  }
  writeWithItems(e) {
    let { colors: r } = e.context;
    e
      .writeLine('[')
      .withIndent(() => e.writeJoined(Je, this.items).newLine())
      .write(']'),
      this.hasError &&
        e.afterNextNewline(() => {
          e.writeLine(r.red('~'.repeat(this.getPrintWidth())));
        });
  }
  asObject() {}
};
var We = class t extends Te {
  fields = {};
  suggestions = [];
  addField(e) {
    this.fields[e.name] = e;
  }
  addSuggestion(e) {
    this.suggestions.push(e);
  }
  getField(e) {
    return this.fields[e];
  }
  getDeepField(e) {
    let [r, ...n] = e,
      i = this.getField(r);
    if (!i) return;
    let o = i;
    for (let s of n) {
      let a;
      if (
        (o.value instanceof t
          ? (a = o.value.getField(s))
          : o.value instanceof Ge && (a = o.value.getField(Number(s))),
        !a)
      )
        return;
      o = a;
    }
    return o;
  }
  getDeepFieldValue(e) {
    return e.length === 0 ? this : this.getDeepField(e)?.value;
  }
  hasField(e) {
    return !!this.getField(e);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(e) {
    delete this.fields[e];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(e) {
    return this.getField(e)?.value;
  }
  getDeepSubSelectionValue(e) {
    let r = this;
    for (let n of e) {
      if (!(r instanceof t)) return;
      let i = r.getSubSelectionValue(n);
      if (!i) return;
      r = i;
    }
    return r;
  }
  getDeepSelectionParent(e) {
    let r = this.getSelectionParent();
    if (!r) return;
    let n = r;
    for (let i of e) {
      let o = n.value.getFieldValue(i);
      if (!o || !(o instanceof t)) return;
      let s = o.getSelectionParent();
      if (!s) return;
      n = s;
    }
    return n;
  }
  getSelectionParent() {
    let e = this.getField('select')?.value.asObject();
    if (e) return { kind: 'select', value: e };
    let r = this.getField('include')?.value.asObject();
    if (r) return { kind: 'include', value: r };
  }
  getSubSelectionValue(e) {
    return this.getSelectionParent()?.value.fields[e].value;
  }
  getPrintWidth() {
    let e = Object.values(this.fields);
    return e.length == 0 ? 2 : Math.max(...e.map((n) => n.getPrintWidth())) + 2;
  }
  write(e) {
    let r = Object.values(this.fields);
    if (r.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(e);
      return;
    }
    this.writeWithContents(e, r);
  }
  asObject() {
    return this;
  }
  writeEmpty(e) {
    let r = new de('{}');
    this.hasError && r.setColor(e.context.colors.red).underline(), e.write(r);
  }
  writeWithContents(e, r) {
    e.writeLine('{').withIndent(() => {
      e.writeJoined(Je, [...r, ...this.suggestions]).newLine();
    }),
      e.write('}'),
      this.hasError &&
        e.afterNextNewline(() => {
          e.writeLine(e.context.colors.red('~'.repeat(this.getPrintWidth())));
        });
  }
};
u();
c();
m();
p();
d();
l();
var G = class extends Te {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new de(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {}
};
u();
c();
m();
p();
d();
l();
var pt = class {
  fields = [];
  addField(e, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${e}: ${r}`))).addMarginSymbol(i(o('+')));
        },
      }),
      this
    );
  }
  write(e) {
    let {
      colors: { green: r },
    } = e.context;
    e.writeLine(r('{'))
      .withIndent(() => {
        e.writeJoined(Je, this.fields).newLine();
      })
      .write(r('}'))
      .addMarginSymbol(r('+'));
  }
};
function $t(t, e, r) {
  switch (t.kind) {
    case 'MutuallyExclusiveFields':
      ia(t, e);
      break;
    case 'IncludeOnScalar':
      oa(t, e);
      break;
    case 'EmptySelection':
      sa(t, e, r);
      break;
    case 'UnknownSelectionField':
      ca(t, e);
      break;
    case 'InvalidSelectionValue':
      ma(t, e);
      break;
    case 'UnknownArgument':
      pa(t, e);
      break;
    case 'UnknownInputField':
      da(t, e);
      break;
    case 'RequiredArgumentMissing':
      fa(t, e);
      break;
    case 'InvalidArgumentType':
      ga(t, e);
      break;
    case 'InvalidArgumentValue':
      ya(t, e);
      break;
    case 'ValueTooLarge':
      ha(t, e);
      break;
    case 'SomeFieldsMissing':
      ba(t, e);
      break;
    case 'TooManyFieldsGiven':
      wa(t, e);
      break;
    case 'Union':
      li(t, e, r);
      break;
    default:
      throw new Error('not implemented: ' + t.kind);
  }
}
function ia(t, e) {
  let r = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  r &&
    (r.getField(t.firstField)?.markAsError(),
    r.getField(t.secondField)?.markAsError()),
    e.addErrorMessage(
      (n) =>
        `Please ${n.bold('either')} use ${n.green(
          `\`${t.firstField}\``,
        )} or ${n.green(`\`${t.secondField}\``)}, but ${n.red(
          'not both',
        )} at the same time.`,
    );
}
function oa(t, e) {
  let [r, n] = dt(t.selectionPath),
    i = t.outputType,
    o = e.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new re(s.name, 'true'));
  e.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold(
      'include',
    )} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${ft(s)}`) : (a += '.'),
      (a += `
Note that ${s.bold('include')} statements only accept relation fields.`),
      a
    );
  });
}
function sa(t, e, r) {
  let n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  if (n) {
    let i = n.getField('omit')?.value.asObject();
    if (i) {
      aa(t, e, i);
      return;
    }
    if (n.hasField('select')) {
      la(t, e);
      return;
    }
  }
  if (r?.[ve(t.outputType.name)]) {
    ua(t, e);
    return;
  }
  e.addErrorMessage(
    () => `Unknown field at "${t.selectionPath.join('.')} selection"`,
  );
}
function aa(t, e, r) {
  r.removeAllFields();
  for (let n of t.outputType.fields) r.addSuggestion(new re(n.name, 'false'));
  e.addErrorMessage(
    (n) =>
      `The ${n.red(
        'omit',
      )} statement includes every field of the model ${n.bold(
        t.outputType.name,
      )}. At least one field must be included in the result`,
  );
}
function la(t, e) {
  let r = t.outputType,
    n = e.arguments.getDeepSelectionParent(t.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), yi(n, r)),
    e.addErrorMessage((o) =>
      i
        ? `The ${o.red('`select`')} statement for type ${o.bold(
            r.name,
          )} must not be empty. ${ft(o)}`
        : `The ${o.red('`select`')} statement for type ${o.bold(
            r.name,
          )} needs ${o.bold('at least one truthy value')}.`,
    );
}
function ua(t, e) {
  let r = new pt();
  for (let i of t.outputType.fields)
    i.isRelation || r.addField(i.name, 'false');
  let n = new re('omit', r).makeRequired();
  if (t.selectionPath.length === 0) e.arguments.addSuggestion(n);
  else {
    let [i, o] = dt(t.selectionPath),
      a = e.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
    if (a) {
      let f = a?.value.asObject() ?? new We();
      f.addSuggestion(n), (a.value = f);
    }
  }
  e.addErrorMessage(
    (i) =>
      `The global ${i.red(
        'omit',
      )} configuration excludes every field of the model ${i.bold(
        t.outputType.name,
      )}. At least one field must be included in the result`,
  );
}
function ca(t, e) {
  let r = hi(t.selectionPath, e);
  if (r.parentKind !== 'unknown') {
    r.field.markAsError();
    let n = r.parent;
    switch (r.parentKind) {
      case 'select':
        yi(n, t.outputType);
        break;
      case 'include':
        Ea(n, t.outputType);
        break;
      case 'omit':
        xa(n, t.outputType);
        break;
    }
  }
  e.addErrorMessage((n) => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
    return (
      r.parentKind !== 'unknown' &&
        i.push(`for ${n.bold(r.parentKind)} statement`),
      i.push(`on model ${n.bold(`\`${t.outputType.name}\``)}.`),
      i.push(ft(n)),
      i.join(' ')
    );
  });
}
function ma(t, e) {
  let r = hi(t.selectionPath, e);
  r.parentKind !== 'unknown' && r.field.value.markAsError(),
    e.addErrorMessage(
      (n) =>
        `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${
          t.underlyingError
        }`,
    );
}
function pa(t, e) {
  let r = t.argumentPath[0],
    n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  n && (n.getField(r)?.markAsError(), Pa(n, t.arguments)),
    e.addErrorMessage((i) =>
      fi(
        i,
        r,
        t.arguments.map((o) => o.name),
      ),
    );
}
function da(t, e) {
  let [r, n] = dt(t.argumentPath),
    i = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  if (i) {
    i.getDeepField(t.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r)?.asObject();
    o && bi(o, t.inputType);
  }
  e.addErrorMessage((o) =>
    fi(
      o,
      n,
      t.inputType.fields.map((s) => s.name),
    ),
  );
}
function fi(t, e, r) {
  let n = [`Unknown argument \`${t.red(e)}\`.`],
    i = Ta(e, r);
  return (
    i && n.push(`Did you mean \`${t.green(i)}\`?`),
    r.length > 0 && n.push(ft(t)),
    n.join(' ')
  );
}
function fa(t, e) {
  let r;
  e.addErrorMessage((f) =>
    r?.value instanceof G && r.value.text === 'null'
      ? `Argument \`${f.green(o)}\` must not be ${f.red('null')}.`
      : `Argument \`${f.green(o)}\` is missing.`,
  );
  let n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  if (!n) return;
  let [i, o] = dt(t.argumentPath),
    s = new pt(),
    a = n.getDeepFieldValue(i)?.asObject();
  if (a)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      t.inputTypes.length === 1 && t.inputTypes[0].kind === 'object')
    ) {
      for (let f of t.inputTypes[0].fields)
        s.addField(f.name, f.typeNames.join(' | '));
      a.addSuggestion(new re(o, s).makeRequired());
    } else {
      let f = t.inputTypes.map(gi).join(' | ');
      a.addSuggestion(new re(o, f).makeRequired());
    }
}
function gi(t) {
  return t.kind === 'list' ? `${gi(t.elementType)}[]` : t.name;
}
function ga(t, e) {
  let r = t.argument.name,
    n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  n && n.getDeepFieldValue(t.argumentPath)?.markAsError(),
    e.addErrorMessage((i) => {
      let o = Jt(
        'or',
        t.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(
        r,
      )}\`: Invalid value provided. Expected ${o}, provided ${i.red(
        t.inferredType,
      )}.`;
    });
}
function ya(t, e) {
  let r = t.argument.name,
    n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  n && n.getDeepFieldValue(t.argumentPath)?.markAsError(),
    e.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (t.underlyingError && o.push(`: ${t.underlyingError}`),
        o.push('.'),
        t.argument.typeNames.length > 0)
      ) {
        let s = Jt(
          'or',
          t.argument.typeNames.map((a) => i.green(a)),
        );
        o.push(` Expected ${s}.`);
      }
      return o.join('');
    });
}
function ha(t, e) {
  let r = t.argument.name,
    n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(),
    i;
  if (n) {
    let s = n.getDeepField(t.argumentPath)?.value;
    s?.markAsError(), s instanceof G && (i = s.text);
  }
  e.addErrorMessage((o) => {
    let s = ['Unable to fit value'];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(' ')
    );
  });
}
function ba(t, e) {
  let r = t.argumentPath[t.argumentPath.length - 1],
    n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
  if (n) {
    let i = n.getDeepFieldValue(t.argumentPath)?.asObject();
    i && bi(i, t.inputType);
  }
  e.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(t.inputType.name)} needs`,
    ];
    return (
      t.constraints.minFieldCount === 1
        ? t.constraints.requiredFields
          ? o.push(
              `${i.green('at least one of')} ${Jt(
                'or',
                t.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green('at least one')} argument.`)
        : o.push(
            `${i.green(`at least ${t.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(ft(i)),
      o.join(' ')
    );
  });
}
function wa(t, e) {
  let r = t.argumentPath[t.argumentPath.length - 1],
    n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(),
    i = [];
  if (n) {
    let o = n.getDeepFieldValue(t.argumentPath)?.asObject();
    o && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  e.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(t.inputType.name)} needs`,
    ];
    return (
      t.constraints.minFieldCount === 1 && t.constraints.maxFieldCount == 1
        ? s.push(`${o.green('exactly one')} argument,`)
        : t.constraints.maxFieldCount == 1
          ? s.push(`${o.green('at most one')} argument,`)
          : s.push(
              `${o.green(`at most ${t.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${Jt(
          'and',
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      t.constraints.maxFieldCount === 1
        ? s.push('one.')
        : s.push(`${t.constraints.maxFieldCount}.`),
      s.join(' ')
    );
  });
}
function yi(t, e) {
  for (let r of e.fields)
    t.hasField(r.name) || t.addSuggestion(new re(r.name, 'true'));
}
function Ea(t, e) {
  for (let r of e.fields)
    r.isRelation &&
      !t.hasField(r.name) &&
      t.addSuggestion(new re(r.name, 'true'));
}
function xa(t, e) {
  for (let r of e.fields)
    !t.hasField(r.name) &&
      !r.isRelation &&
      t.addSuggestion(new re(r.name, 'true'));
}
function Pa(t, e) {
  for (let r of e)
    t.hasField(r.name) ||
      t.addSuggestion(new re(r.name, r.typeNames.join(' | ')));
}
function hi(t, e) {
  let [r, n] = dt(t),
    i = e.arguments.getDeepSubSelectionValue(r)?.asObject();
  if (!i) return { parentKind: 'unknown', fieldName: n };
  let o = i.getFieldValue('select')?.asObject(),
    s = i.getFieldValue('include')?.asObject(),
    a = i.getFieldValue('omit')?.asObject(),
    f = o?.getField(n);
  return o && f
    ? { parentKind: 'select', parent: o, field: f, fieldName: n }
    : ((f = s?.getField(n)),
      s && f
        ? { parentKind: 'include', field: f, parent: s, fieldName: n }
        : ((f = a?.getField(n)),
          a && f
            ? { parentKind: 'omit', field: f, parent: a, fieldName: n }
            : { parentKind: 'unknown', fieldName: n }));
}
function bi(t, e) {
  if (e.kind === 'object')
    for (let r of e.fields)
      t.hasField(r.name) ||
        t.addSuggestion(new re(r.name, r.typeNames.join(' | ')));
}
function dt(t) {
  let e = [...t],
    r = e.pop();
  if (!r) throw new Error('unexpected empty path');
  return [e, r];
}
function ft({ green: t, enabled: e }) {
  return (
    'Available options are ' +
    (e ? `listed in ${t('green')}` : 'marked with ?') +
    '.'
  );
}
function Jt(t, e) {
  if (e.length === 1) return e[0];
  let r = [...e],
    n = r.pop();
  return `${r.join(', ')} ${t} ${n}`;
}
var va = 3;
function Ta(t, e) {
  let r = 1 / 0,
    n;
  for (let i of e) {
    let o = (0, di.default)(t, i);
    o > va || (o < r && ((r = o), (n = i)));
  }
  return n;
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var gt = class {
  modelName;
  name;
  typeName;
  isList;
  isEnum;
  constructor(e, r, n, i, o) {
    (this.modelName = e),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let e = this.isList ? 'List' : '',
      r = this.isEnum ? 'Enum' : '';
    return `${e}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function Ke(t) {
  return t instanceof gt;
}
u();
c();
m();
p();
d();
l();
var Gt = Symbol(),
  qr = new WeakMap(),
  Ee = class {
    constructor(e) {
      e === Gt
        ? qr.set(this, `Prisma.${this._getName()}`)
        : qr.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return qr.get(this);
    }
  },
  yt = class extends Ee {
    _getNamespace() {
      return 'NullTypes';
    }
  },
  ht = class extends yt {
    _brand_DbNull;
  };
Ur(ht, 'DbNull');
var bt = class extends yt {
  _brand_JsonNull;
};
Ur(bt, 'JsonNull');
var wt = class extends yt {
  _brand_AnyNull;
};
Ur(wt, 'AnyNull');
var Wt = {
  classes: { DbNull: ht, JsonNull: bt, AnyNull: wt },
  instances: { DbNull: new ht(Gt), JsonNull: new bt(Gt), AnyNull: new wt(Gt) },
};
function Ur(t, e) {
  Object.defineProperty(t, 'name', { value: e, configurable: !0 });
}
u();
c();
m();
p();
d();
l();
var wi = ': ',
  Kt = class {
    constructor(e, r) {
      this.name = e;
      this.value = r;
    }
    hasError = !1;
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + wi.length;
    }
    write(e) {
      let r = new de(this.name);
      this.hasError && r.underline().setColor(e.context.colors.red),
        e.write(r).write(wi).write(this.value);
    }
  };
var Br = class {
  arguments;
  errorMessages = [];
  constructor(e) {
    this.arguments = e;
  }
  write(e) {
    e.write(this.arguments);
  }
  addErrorMessage(e) {
    this.errorMessages.push(e);
  }
  renderAllMessages(e) {
    return this.errorMessages.map((r) => r(e)).join(`
`);
  }
};
function He(t) {
  return new Br(Ei(t));
}
function Ei(t) {
  let e = new We();
  for (let [r, n] of Object.entries(t)) {
    let i = new Kt(r, xi(n));
    e.addField(i);
  }
  return e;
}
function xi(t) {
  if (typeof t == 'string') return new G(JSON.stringify(t));
  if (typeof t == 'number' || typeof t == 'boolean') return new G(String(t));
  if (typeof t == 'bigint') return new G(`${t}n`);
  if (t === null) return new G('null');
  if (t === void 0) return new G('undefined');
  if (je(t)) return new G(`new Prisma.Decimal("${t.toFixed()}")`);
  if (t instanceof Uint8Array)
    return b.isBuffer(t)
      ? new G(`Buffer.alloc(${t.byteLength})`)
      : new G(`new Uint8Array(${t.byteLength})`);
  if (t instanceof Date) {
    let e = Ut(t) ? t.toISOString() : 'Invalid Date';
    return new G(`new Date("${e}")`);
  }
  return t instanceof Ee
    ? new G(`Prisma.${t._getName()}`)
    : Ke(t)
      ? new G(`prisma.${ve(t.modelName)}.$fields.${t.name}`)
      : Array.isArray(t)
        ? Ca(t)
        : typeof t == 'object'
          ? Ei(t)
          : new G(Object.prototype.toString.call(t));
}
function Ca(t) {
  let e = new Ge();
  for (let r of t) e.addItem(xi(r));
  return e;
}
function Ht(t, e) {
  let r = e === 'pretty' ? pi : Qt,
    n = t.renderAllMessages(r),
    i = new Qe(0, { colors: r }).write(t).toString();
  return { message: n, args: i };
}
function zt({
  args: t,
  errors: e,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
  globalOmit: s,
}) {
  let a = He(t);
  for (let C of e) $t(C, a, s);
  let { message: f, args: h } = Ht(a, r),
    T = Bt({
      message: f,
      callsite: n,
      originalMethod: i,
      showColors: r === 'pretty',
      callArguments: h,
    });
  throw new W(T, { clientVersion: o });
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function fe(t) {
  return t.replace(/^./, (e) => e.toLowerCase());
}
u();
c();
m();
p();
d();
l();
function vi(t, e, r) {
  let n = fe(r);
  return !e.result || !(e.result.$allModels || e.result[n])
    ? t
    : Ra({
        ...t,
        ...Pi(e.name, t, e.result.$allModels),
        ...Pi(e.name, t, e.result[n]),
      });
}
function Ra(t) {
  let e = new pe(),
    r = (n, i) =>
      e.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), t[n] ? t[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return Be(t, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function Pi(t, e, r) {
  return r
    ? Be(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Aa(e, o, i),
      }))
    : {};
}
function Aa(t, e, r) {
  let n = t?.[e]?.compute;
  return n ? (i) => r({ ...i, [e]: n(i) }) : r;
}
function Ti(t, e) {
  if (!e) return t;
  let r = { ...t };
  for (let n of Object.values(e))
    if (t[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
function Ci(t, e) {
  if (!e) return t;
  let r = { ...t };
  for (let n of Object.values(e))
    if (!t[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var Yt = class {
    constructor(e, r) {
      this.extension = e;
      this.previous = r;
    }
    computedFieldsCache = new pe();
    modelExtensionsCache = new pe();
    queryCallbacksCache = new pe();
    clientExtensions = ut(() =>
      this.extension.client
        ? {
            ...this.previous?.getAllClientExtensions(),
            ...this.extension.client,
          }
        : this.previous?.getAllClientExtensions(),
    );
    batchCallbacks = ut(() => {
      let e = this.previous?.getAllBatchQueryCallbacks() ?? [],
        r = this.extension.query?.$__internalBatch;
      return r ? e.concat(r) : e;
    });
    getAllComputedFields(e) {
      return this.computedFieldsCache.getOrCreate(e, () =>
        vi(this.previous?.getAllComputedFields(e), this.extension, e),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(e) {
      return this.modelExtensionsCache.getOrCreate(e, () => {
        let r = fe(e);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(e)
          : {
              ...this.previous?.getAllModelExtensions(e),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(e, r) {
      return this.queryCallbacksCache.getOrCreate(`${e}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(e, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[e] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[e] !== void 0 &&
              (o[e][r] !== void 0 && i.push(o[e][r]),
              o[e].$allOperations !== void 0 && i.push(o[e].$allOperations)),
            e !== '$none' &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  ze = class t {
    constructor(e) {
      this.head = e;
    }
    static empty() {
      return new t();
    }
    static single(e) {
      return new t(new Yt(e));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(e) {
      return new t(new Yt(e, this.head));
    }
    getAllComputedFields(e) {
      return this.head?.getAllComputedFields(e);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(e) {
      return this.head?.getAllModelExtensions(e);
    }
    getAllQueryCallbacks(e, r) {
      return this.head?.getAllQueryCallbacks(e, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
u();
c();
m();
p();
d();
l();
var Xt = class {
  constructor(e) {
    this.name = e;
  }
};
function Ri(t) {
  return t instanceof Xt;
}
function Ai(t) {
  return new Xt(t);
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var Si = Symbol(),
  Et = class {
    constructor(e) {
      if (e !== Si)
        throw new Error('Skip instance can not be constructed directly');
    }
    ifUndefined(e) {
      return e === void 0 ? Zt : e;
    }
  },
  Zt = new Et(Si);
function ge(t) {
  return t instanceof Et;
}
var Sa = {
    findUnique: 'findUnique',
    findUniqueOrThrow: 'findUniqueOrThrow',
    findFirst: 'findFirst',
    findFirstOrThrow: 'findFirstOrThrow',
    findMany: 'findMany',
    count: 'aggregate',
    create: 'createOne',
    createMany: 'createMany',
    createManyAndReturn: 'createManyAndReturn',
    update: 'updateOne',
    updateMany: 'updateMany',
    updateManyAndReturn: 'updateManyAndReturn',
    upsert: 'upsertOne',
    delete: 'deleteOne',
    deleteMany: 'deleteMany',
    executeRaw: 'executeRaw',
    queryRaw: 'queryRaw',
    aggregate: 'aggregate',
    groupBy: 'groupBy',
    runCommandRaw: 'runCommandRaw',
    findRaw: 'findRaw',
    aggregateRaw: 'aggregateRaw',
  },
  ki = 'explicitly `undefined` values are not allowed';
function er({
  modelName: t,
  action: e,
  args: r,
  runtimeDataModel: n,
  extensions: i = ze.empty(),
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: f,
  previewFeatures: h,
  globalOmit: T,
}) {
  let C = new $r({
    runtimeDataModel: n,
    modelName: t,
    action: e,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: f,
    previewFeatures: h,
    globalOmit: T,
  });
  return { modelName: t, action: Sa[e], query: xt(r, C) };
}
function xt({ select: t, include: e, ...r } = {}, n) {
  let i = r.omit;
  return delete r.omit, { arguments: Mi(r, n), selection: ka(t, e, i, n) };
}
function ka(t, e, r, n) {
  return t
    ? (e
        ? n.throwValidationError({
            kind: 'MutuallyExclusiveFields',
            firstField: 'include',
            secondField: 'select',
            selectionPath: n.getSelectionPath(),
          })
        : r &&
          n.throwValidationError({
            kind: 'MutuallyExclusiveFields',
            firstField: 'omit',
            secondField: 'select',
            selectionPath: n.getSelectionPath(),
          }),
      _a(t, n))
    : Oa(n, e, r);
}
function Oa(t, e, r) {
  let n = {};
  return (
    t.modelOrType &&
      !t.isRawAction() &&
      ((n.$composites = !0), (n.$scalars = !0)),
    e && Ma(n, e, t),
    Ia(n, r, t),
    n
  );
}
function Ma(t, e, r) {
  for (let [n, i] of Object.entries(e)) {
    if (ge(i)) continue;
    let o = r.nestSelection(n);
    if ((Vr(i, o), i === !1 || i === void 0)) {
      t[n] = !1;
      continue;
    }
    let s = r.findField(n);
    if (
      (s &&
        s.kind !== 'object' &&
        r.throwValidationError({
          kind: 'IncludeOnScalar',
          selectionPath: r.getSelectionPath().concat(n),
          outputType: r.getOutputTypeDescription(),
        }),
      s)
    ) {
      t[n] = xt(i === !0 ? {} : i, o);
      continue;
    }
    if (i === !0) {
      t[n] = !0;
      continue;
    }
    t[n] = xt(i, o);
  }
}
function Ia(t, e, r) {
  let n = r.getComputedFields(),
    i = { ...r.getGlobalOmit(), ...e },
    o = Ci(i, n);
  for (let [s, a] of Object.entries(o)) {
    if (ge(a)) continue;
    Vr(a, r.nestSelection(s));
    let f = r.findField(s);
    (n?.[s] && !f) || (t[s] = !a);
  }
}
function _a(t, e) {
  let r = {},
    n = e.getComputedFields(),
    i = Ti(t, n);
  for (let [o, s] of Object.entries(i)) {
    if (ge(s)) continue;
    let a = e.nestSelection(o);
    Vr(s, a);
    let f = e.findField(o);
    if (!(n?.[o] && !f)) {
      if (s === !1 || s === void 0 || ge(s)) {
        r[o] = !1;
        continue;
      }
      if (s === !0) {
        f?.kind === 'object' ? (r[o] = xt({}, a)) : (r[o] = !0);
        continue;
      }
      r[o] = xt(s, a);
    }
  }
  return r;
}
function Oi(t, e) {
  if (t === null) return null;
  if (typeof t == 'string' || typeof t == 'number' || typeof t == 'boolean')
    return t;
  if (typeof t == 'bigint') return { $type: 'BigInt', value: String(t) };
  if (Ve(t)) {
    if (Ut(t)) return { $type: 'DateTime', value: t.toISOString() };
    e.throwValidationError({
      kind: 'InvalidArgumentValue',
      selectionPath: e.getSelectionPath(),
      argumentPath: e.getArgumentPath(),
      argument: { name: e.getArgumentName(), typeNames: ['Date'] },
      underlyingError: 'Provided Date object is invalid',
    });
  }
  if (Ri(t)) return { $type: 'Param', value: t.name };
  if (Ke(t))
    return {
      $type: 'FieldRef',
      value: { _ref: t.name, _container: t.modelName },
    };
  if (Array.isArray(t)) return Da(t, e);
  if (ArrayBuffer.isView(t)) {
    let { buffer: r, byteOffset: n, byteLength: i } = t;
    return { $type: 'Bytes', value: b.from(r, n, i).toString('base64') };
  }
  if (La(t)) return t.values;
  if (je(t)) return { $type: 'Decimal', value: t.toFixed() };
  if (t instanceof Ee) {
    if (t !== Wt.instances[t._getName()])
      throw new Error('Invalid ObjectEnumValue');
    return { $type: 'Enum', value: t._getName() };
  }
  if (Fa(t)) return t.toJSON();
  if (typeof t == 'object') return Mi(t, e);
  e.throwValidationError({
    kind: 'InvalidArgumentValue',
    selectionPath: e.getSelectionPath(),
    argumentPath: e.getArgumentPath(),
    argument: { name: e.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(
      t,
    )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Mi(t, e) {
  if (t.$type) return { $type: 'Raw', value: t };
  let r = {};
  for (let n in t) {
    let i = t[n],
      o = e.nestArgument(n);
    ge(i) ||
      (i !== void 0
        ? (r[n] = Oi(i, o))
        : e.isPreviewFeatureOn('strictUndefinedChecks') &&
          e.throwValidationError({
            kind: 'InvalidArgumentValue',
            argumentPath: o.getArgumentPath(),
            selectionPath: e.getSelectionPath(),
            argument: { name: e.getArgumentName(), typeNames: [] },
            underlyingError: ki,
          }));
  }
  return r;
}
function Da(t, e) {
  let r = [];
  for (let n = 0; n < t.length; n++) {
    let i = e.nestArgument(String(n)),
      o = t[n];
    if (o === void 0 || ge(o)) {
      let s = o === void 0 ? 'undefined' : 'Prisma.skip';
      e.throwValidationError({
        kind: 'InvalidArgumentValue',
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${e.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`,
      });
    }
    r.push(Oi(o, i));
  }
  return r;
}
function La(t) {
  return typeof t == 'object' && t !== null && t.__prismaRawParameters__ === !0;
}
function Fa(t) {
  return typeof t == 'object' && t !== null && typeof t.toJSON == 'function';
}
function Vr(t, e) {
  t === void 0 &&
    e.isPreviewFeatureOn('strictUndefinedChecks') &&
    e.throwValidationError({
      kind: 'InvalidSelectionValue',
      selectionPath: e.getSelectionPath(),
      underlyingError: ki,
    });
}
var $r = class t {
  constructor(e) {
    this.params = e;
    this.params.modelName &&
      (this.modelOrType =
        this.params.runtimeDataModel.models[this.params.modelName] ??
        this.params.runtimeDataModel.types[this.params.modelName]);
  }
  modelOrType;
  throwValidationError(e) {
    zt({
      errors: [e],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
      globalOmit: this.params.globalOmit,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType))
      return {
        name: this.params.modelName,
        fields: this.modelOrType.fields.map((e) => ({
          name: e.name,
          typeName: 'boolean',
          isRelation: e.kind === 'object',
        })),
      };
  }
  isRawAction() {
    return [
      'executeRaw',
      'queryRaw',
      'runCommandRaw',
      'findRaw',
      'aggregateRaw',
    ].includes(this.params.action);
  }
  isPreviewFeatureOn(e) {
    return this.params.previewFeatures.includes(e);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(e) {
    return this.modelOrType?.fields.find((r) => r.name === e);
  }
  nestSelection(e) {
    let r = this.findField(e),
      n = r?.kind === 'object' ? r.type : void 0;
    return new t({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(e),
    });
  }
  getGlobalOmit() {
    return this.params.modelName && this.shouldApplyGlobalOmit()
      ? (this.params.globalOmit?.[ve(this.params.modelName)] ?? {})
      : {};
  }
  shouldApplyGlobalOmit() {
    switch (this.params.action) {
      case 'findFirst':
      case 'findFirstOrThrow':
      case 'findUniqueOrThrow':
      case 'findMany':
      case 'upsert':
      case 'findUnique':
      case 'createManyAndReturn':
      case 'create':
      case 'update':
      case 'updateManyAndReturn':
      case 'delete':
        return !0;
      case 'executeRaw':
      case 'aggregateRaw':
      case 'runCommandRaw':
      case 'findRaw':
      case 'createMany':
      case 'deleteMany':
      case 'groupBy':
      case 'updateMany':
      case 'count':
      case 'aggregate':
      case 'queryRaw':
        return !1;
      default:
        be(this.params.action, 'Unknown action');
    }
  }
  nestArgument(e) {
    return new t({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(e),
    });
  }
};
u();
c();
m();
p();
d();
l();
function Ii(t) {
  if (!t._hasPreviewFlag('metrics'))
    throw new W(
      '`metrics` preview feature must be enabled in order to access metrics API',
      { clientVersion: t._clientVersion },
    );
}
var Ye = class {
  _client;
  constructor(e) {
    this._client = e;
  }
  prometheus(e) {
    return (
      Ii(this._client),
      this._client._engine.metrics({ format: 'prometheus', ...e })
    );
  }
  json(e) {
    return (
      Ii(this._client), this._client._engine.metrics({ format: 'json', ...e })
    );
  }
};
u();
c();
m();
p();
d();
l();
function _i(t, e) {
  let r = ut(() => Na(e));
  Object.defineProperty(t, 'dmmf', { get: () => r.get() });
}
function Na(t) {
  throw new Error(
    'Prisma.dmmf is not available when running in edge runtimes.',
  );
}
function jr(t) {
  return Object.entries(t).map(([e, r]) => ({ name: e, ...r }));
}
u();
c();
m();
p();
d();
l();
var Qr = new WeakMap(),
  tr = '$$PrismaTypedSql',
  Pt = class {
    constructor(e, r) {
      Qr.set(this, { sql: e, values: r }),
        Object.defineProperty(this, tr, { value: tr });
    }
    get sql() {
      return Qr.get(this).sql;
    }
    get values() {
      return Qr.get(this).values;
    }
  };
function Di(t) {
  return (...e) => new Pt(t, e);
}
function rr(t) {
  return t != null && t[tr] === tr;
}
u();
c();
m();
p();
d();
l();
var Go = nt(Li());
u();
c();
m();
p();
d();
l();
Fi();
Un();
jn();
u();
c();
m();
p();
d();
l();
var Z = class t {
  constructor(e, r) {
    if (e.length - 1 !== r.length)
      throw e.length === 0
        ? new TypeError('Expected at least 1 string')
        : new TypeError(
            `Expected ${e.length} strings to have ${e.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof t ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = e[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = e[i];
      if (s instanceof t) {
        this.strings[o] += s.strings[0];
        let f = 0;
        for (; f < s.values.length; )
          (this.values[o++] = s.values[f++]), (this.strings[o] = s.strings[f]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get sql() {
    let e = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < e; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let e = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < e; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  get text() {
    let e = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < e; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values,
    };
  }
};
function Ni(t, e = ',', r = '', n = '') {
  if (t.length === 0)
    throw new TypeError(
      'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
    );
  return new Z([r, ...Array(t.length - 1).fill(e), n], t);
}
function Jr(t) {
  return new Z([t], []);
}
var qi = Jr('');
function Gr(t, ...e) {
  return new Z(t, e);
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function vt(t) {
  return {
    getKeys() {
      return Object.keys(t);
    },
    getPropertyValue(e) {
      return t[e];
    },
  };
}
u();
c();
m();
p();
d();
l();
function K(t, e) {
  return {
    getKeys() {
      return [t];
    },
    getPropertyValue() {
      return e();
    },
  };
}
u();
c();
m();
p();
d();
l();
function Ie(t) {
  let e = new pe();
  return {
    getKeys() {
      return t.getKeys();
    },
    getPropertyValue(r) {
      return e.getOrCreate(r, () => t.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return t.getPropertyDescriptor?.(r);
    },
  };
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var ir = { enumerable: !0, configurable: !0, writable: !0 };
function or(t) {
  let e = new Set(t);
  return {
    getPrototypeOf: () => Object.prototype,
    getOwnPropertyDescriptor: () => ir,
    has: (r, n) => e.has(n),
    set: (r, n, i) => e.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...e],
  };
}
var Ui = Symbol.for('nodejs.util.inspect.custom');
function ae(t, e) {
  let r = Ua(e),
    n = new Set(),
    i = new Proxy(t, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a ? (a.has?.(s) ?? !0) : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = Bi(Reflect.ownKeys(o), r),
          a = Bi(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let f = r.get(s);
        return f
          ? f.getPropertyDescriptor
            ? { ...ir, ...f?.getPropertyDescriptor(s) }
            : ir
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
      getPrototypeOf: () => Object.prototype,
    });
  return (
    (i[Ui] = function () {
      let o = { ...this };
      return delete o[Ui], o;
    }),
    i
  );
}
function Ua(t) {
  let e = new Map();
  for (let r of t) {
    let n = r.getKeys();
    for (let i of n) e.set(i, r);
  }
  return e;
}
function Bi(t, e) {
  return t.filter((r) => e.get(r)?.has?.(r) ?? !0);
}
u();
c();
m();
p();
d();
l();
function Xe(t) {
  return {
    getKeys() {
      return t;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
u();
c();
m();
p();
d();
l();
function sr(t, e) {
  return {
    batch: t,
    transaction:
      e?.kind === 'batch'
        ? { isolationLevel: e.options.isolationLevel }
        : void 0,
  };
}
u();
c();
m();
p();
d();
l();
function $i(t) {
  if (t === void 0) return '';
  let e = He(t);
  return new Qe(0, { colors: Qt }).write(e).toString();
}
u();
c();
m();
p();
d();
l();
var Ba = 'P2037';
function ar({ error: t, user_facing_error: e }, r, n) {
  return e.error_code
    ? new X($a(e, n), {
        code: e.error_code,
        clientVersion: r,
        meta: e.meta,
        batchRequestIdx: e.batch_request_idx,
      })
    : new j(t, { clientVersion: r, batchRequestIdx: e.batch_request_idx });
}
function $a(t, e) {
  let r = t.message;
  return (
    (e === 'postgresql' || e === 'postgres' || e === 'mysql') &&
      t.error_code === Ba &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  );
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var Wr = class {
  getLocation() {
    return null;
  }
};
function Ce(t) {
  return typeof $EnabledCallSite == 'function' && t !== 'minimal'
    ? new $EnabledCallSite()
    : new Wr();
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var Vi = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Ze(t = {}) {
  let e = ja(t);
  return Object.entries(e).reduce(
    (n, [i, o]) => (
      Vi[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function ja(t = {}) {
  return typeof t._count == 'boolean'
    ? { ...t, _count: { _all: t._count } }
    : t;
}
function lr(t = {}) {
  return (e) => (typeof t._count == 'boolean' && (e._count = e._count._all), e);
}
function ji(t, e) {
  let r = lr(t);
  return e({ action: 'aggregate', unpacker: r, argsMapper: Ze })(t);
}
u();
c();
m();
p();
d();
l();
function Qa(t = {}) {
  let { select: e, ...r } = t;
  return typeof e == 'object'
    ? Ze({ ...r, _count: e })
    : Ze({ ...r, _count: { _all: !0 } });
}
function Ja(t = {}) {
  return typeof t.select == 'object'
    ? (e) => lr(t)(e)._count
    : (e) => lr(t)(e)._count._all;
}
function Qi(t, e) {
  return e({ action: 'count', unpacker: Ja(t), argsMapper: Qa })(t);
}
u();
c();
m();
p();
d();
l();
function Ga(t = {}) {
  let e = Ze(t);
  if (Array.isArray(e.by))
    for (let r of e.by) typeof r == 'string' && (e.select[r] = !0);
  else typeof e.by == 'string' && (e.select[e.by] = !0);
  return e;
}
function Wa(t = {}) {
  return (e) => (
    typeof t?._count == 'boolean' &&
      e.forEach((r) => {
        r._count = r._count._all;
      }),
    e
  );
}
function Ji(t, e) {
  return e({ action: 'groupBy', unpacker: Wa(t), argsMapper: Ga })(t);
}
function Gi(t, e, r) {
  if (e === 'aggregate') return (n) => ji(n, r);
  if (e === 'count') return (n) => Qi(n, r);
  if (e === 'groupBy') return (n) => Ji(n, r);
}
u();
c();
m();
p();
d();
l();
function Wi(t, e) {
  let r = e.fields.filter((i) => !i.relationName),
    n = ni(r, 'name');
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == 'symbol') return i[o];
        let s = n[o];
        if (s) return new gt(t, o, s.type, s.isList, s.kind === 'enum');
      },
      ...or(Object.keys(n)),
    },
  );
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var Ki = (t) => (Array.isArray(t) ? t : t.split('.')),
  Kr = (t, e) => Ki(e).reduce((r, n) => r && r[n], t),
  Hi = (t, e, r) =>
    Ki(e).reduceRight(
      (n, i, o, s) => Object.assign({}, Kr(t, s.slice(0, o)), { [i]: n }),
      r,
    );
function Ka(t, e) {
  return t === void 0 || e === void 0 ? [] : [...e, 'select', t];
}
function Ha(t, e, r) {
  return e === void 0 ? (t ?? {}) : Hi(e, r, t || !0);
}
function Hr(t, e, r, n, i, o) {
  let a = t._runtimeDataModel.models[e].fields.reduce(
    (f, h) => ({ ...f, [h.name]: h }),
    {},
  );
  return (f) => {
    let h = Ce(t._errorFormat),
      T = Ka(n, i),
      C = Ha(f, o, T),
      k = r({ dataPath: T, callsite: h })(C),
      A = za(t, e);
    return new Proxy(k, {
      get(O, S) {
        if (!A.includes(S)) return O[S];
        let oe = [a[S].type, r, S],
          H = [T, C];
        return Hr(t, ...oe, ...H);
      },
      ...or([...A, ...Object.getOwnPropertyNames(k)]),
    });
  };
}
function za(t, e) {
  return t._runtimeDataModel.models[e].fields
    .filter((r) => r.kind === 'object')
    .map((r) => r.name);
}
var Ya = [
    'findUnique',
    'findUniqueOrThrow',
    'findFirst',
    'findFirstOrThrow',
    'create',
    'update',
    'upsert',
    'delete',
  ],
  Xa = ['aggregate', 'count', 'groupBy'];
function zr(t, e) {
  let r = t._extensions.getAllModelExtensions(e) ?? {},
    n = [
      Za(t, e),
      tl(t, e),
      vt(r),
      K('name', () => e),
      K('$name', () => e),
      K('$parent', () => t._appliedParent),
    ];
  return ae({}, n);
}
function Za(t, e) {
  let r = fe(e),
    n = Object.keys(ct).concat('count');
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (a) => (f) => {
          let h = Ce(t._errorFormat);
          return t._createPrismaPromise(
            (T) => {
              let C = {
                args: f,
                dataPath: [],
                action: o,
                model: e,
                clientMethod: `${r}.${i}`,
                jsModelName: r,
                transaction: T,
                callsite: h,
              };
              return t._request({ ...C, ...a });
            },
            { action: o, args: f, model: e },
          );
        };
      return Ya.includes(o) ? Hr(t, e, s) : el(i) ? Gi(t, i, s) : s({});
    },
  };
}
function el(t) {
  return Xa.includes(t);
}
function tl(t, e) {
  return Ie(
    K('fields', () => {
      let r = t._runtimeDataModel.models[e];
      return Wi(e, r);
    }),
  );
}
u();
c();
m();
p();
d();
l();
function zi(t) {
  return t.replace(/^./, (e) => e.toUpperCase());
}
var Yr = Symbol();
function Tt(t) {
  let e = [rl(t), nl(t), K(Yr, () => t), K('$parent', () => t._appliedParent)],
    r = t._extensions.getAllClientExtensions();
  return r && e.push(vt(r)), ae(t, e);
}
function rl(t) {
  let e = Object.getPrototypeOf(t._originalClient),
    r = [...new Set(Object.getOwnPropertyNames(e))];
  return {
    getKeys() {
      return r;
    },
    getPropertyValue(n) {
      return t[n];
    },
  };
}
function nl(t) {
  let e = Object.keys(t._runtimeDataModel.models),
    r = e.map(fe),
    n = [...new Set(e.concat(r))];
  return Ie({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = zi(i);
      if (t._runtimeDataModel.models[o] !== void 0) return zr(t, o);
      if (t._runtimeDataModel.models[i] !== void 0) return zr(t, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function Yi(t) {
  return t[Yr] ? t[Yr] : t;
}
function Xi(t) {
  if (typeof t == 'function') return t(this);
  if (t.client?.__AccelerateEngine) {
    let r = t.client.__AccelerateEngine;
    this._originalClient._engine = new r(
      this._originalClient._accelerateEngineConfig,
    );
  }
  let e = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(t) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return Tt(e);
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function Zi({ result: t, modelName: e, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(e);
  if (!o) return t;
  let s = [],
    a = [];
  for (let f of Object.values(o)) {
    if (n) {
      if (n[f.name]) continue;
      let h = f.needs.filter((T) => n[T]);
      h.length > 0 && a.push(Xe(h));
    } else if (r) {
      if (!r[f.name]) continue;
      let h = f.needs.filter((T) => !r[T]);
      h.length > 0 && a.push(Xe(h));
    }
    il(t, f.needs) && s.push(ol(f, ae(t, s)));
  }
  return s.length > 0 || a.length > 0 ? ae(t, [...s, ...a]) : t;
}
function il(t, e) {
  return e.every((r) => _r(t, r));
}
function ol(t, e) {
  return Ie(K(t.name, () => t.compute(e)));
}
u();
c();
m();
p();
d();
l();
function ur({
  visitor: t,
  result: e,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(e)) {
    for (let s = 0; s < e.length; s++)
      e[s] = ur({
        result: e[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: t,
      });
    return e;
  }
  let o = t(e, i, r) ?? e;
  return (
    r.include &&
      eo({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: t,
      }),
    r.select &&
      eo({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: t,
      }),
    o
  );
}
function eo({
  includeOrSelect: t,
  result: e,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(t)) {
    if (!s || e[o] == null || ge(s)) continue;
    let f = n.models[r].fields.find((T) => T.name === o);
    if (!f || f.kind !== 'object' || !f.relationName) continue;
    let h = typeof s == 'object' ? s : {};
    e[o] = ur({
      visitor: i,
      result: e[o],
      args: h,
      modelName: f.type,
      runtimeDataModel: n,
    });
  }
}
function to({
  result: t,
  modelName: e,
  args: r,
  extensions: n,
  runtimeDataModel: i,
  globalOmit: o,
}) {
  return n.isEmpty() || t == null || typeof t != 'object' || !i.models[e]
    ? t
    : ur({
        result: t,
        args: r ?? {},
        modelName: e,
        runtimeDataModel: i,
        visitor: (a, f, h) => {
          let T = fe(f);
          return Zi({
            result: a,
            modelName: T,
            select: h.select,
            omit: h.select ? void 0 : { ...o?.[T], ...h.omit },
            extensions: n,
          });
        },
      });
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
l();
u();
c();
m();
p();
d();
l();
var sl = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'],
  ro = sl;
function no(t) {
  if (t instanceof Z) return al(t);
  if (rr(t)) return ll(t);
  if (Array.isArray(t)) {
    let r = [t[0]];
    for (let n = 1; n < t.length; n++) r[n] = Ct(t[n]);
    return r;
  }
  let e = {};
  for (let r in t) e[r] = Ct(t[r]);
  return e;
}
function al(t) {
  return new Z(t.strings, t.values);
}
function ll(t) {
  return new Pt(t.sql, t.values);
}
function Ct(t) {
  if (typeof t != 'object' || t == null || t instanceof Ee || Ke(t)) return t;
  if (je(t)) return new me(t.toFixed());
  if (Ve(t)) return new Date(+t);
  if (ArrayBuffer.isView(t)) return t.slice(0);
  if (Array.isArray(t)) {
    let e = t.length,
      r;
    for (r = Array(e); e--; ) r[e] = Ct(t[e]);
    return r;
  }
  if (typeof t == 'object') {
    let e = {};
    for (let r in t)
      r === '__proto__'
        ? Object.defineProperty(e, r, {
            value: Ct(t[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (e[r] = Ct(t[r]));
    return e;
  }
  be(t, 'Unknown value');
}
function oo(t, e, r, n = 0) {
  return t._createPrismaPromise((i) => {
    let o = e.customDataProxyFetch;
    return (
      'transaction' in e &&
        i !== void 0 &&
        (e.transaction?.kind === 'batch' && e.transaction.lock.then(),
        (e.transaction = i)),
      n === r.length
        ? t._executeRequest(e)
        : r[n]({
            model: e.model,
            operation: e.model ? e.action : e.clientMethod,
            args: no(e.args ?? {}),
            __internalParams: e,
            query: (s, a = e) => {
              let f = a.customDataProxyFetch;
              return (
                (a.customDataProxyFetch = uo(o, f)),
                (a.args = s),
                oo(t, a, r, n + 1)
              );
            },
          })
    );
  });
}
function so(t, e) {
  let { jsModelName: r, action: n, clientMethod: i } = e,
    o = r ? n : i;
  if (t._extensions.isEmpty()) return t._executeRequest(e);
  let s = t._extensions.getAllQueryCallbacks(r ?? '$none', o);
  return oo(t, e, s);
}
function ao(t) {
  return (e) => {
    let r = { requests: e },
      n = e[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? lo(r, n, 0, t) : t(r);
  };
}
function lo(t, e, r, n) {
  if (r === e.length) return n(t);
  let i = t.customDataProxyFetch,
    o = t.requests[0].transaction;
  return e[r]({
    args: {
      queries: t.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: t,
    query(s, a = t) {
      let f = a.customDataProxyFetch;
      return (a.customDataProxyFetch = uo(i, f)), lo(a, e, r + 1, n);
    },
  });
}
var io = (t) => t;
function uo(t = io, e = io) {
  return (r) => t(e(r));
}
u();
c();
m();
p();
d();
l();
var co = J('prisma:client'),
  mo = { Vercel: 'vercel', 'Netlify CI': 'netlify' };
function po({ postinstall: t, ciName: e, clientVersion: r }) {
  if (
    (co('checkPlatformCaching:postinstall', t),
    co('checkPlatformCaching:ciName', e),
    t === !0 && e && e in mo)
  ) {
    let n = `Prisma has detected that this project was built on ${e}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${mo[e]}-build`;
    throw (console.error(n), new I(n, r));
  }
}
u();
c();
m();
p();
d();
l();
function fo(t, e) {
  return t
    ? t.datasources
      ? t.datasources
      : t.datasourceUrl
        ? { [e[0]]: { url: t.datasourceUrl } }
        : {}
    : {};
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var ul = () => globalThis.process?.release?.name === 'node',
  cl = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun,
  ml = () => !!globalThis.Deno,
  pl = () => typeof globalThis.Netlify == 'object',
  dl = () => typeof globalThis.EdgeRuntime == 'object',
  fl = () => globalThis.navigator?.userAgent === 'Cloudflare-Workers';
function gl() {
  return (
    [
      [pl, 'netlify'],
      [dl, 'edge-light'],
      [fl, 'workerd'],
      [ml, 'deno'],
      [cl, 'bun'],
      [ul, 'node'],
    ]
      .flatMap((r) => (r[0]() ? [r[1]] : []))
      .at(0) ?? ''
  );
}
var yl = {
  node: 'Node.js',
  workerd: 'Cloudflare Workers',
  deno: 'Deno and Deno Deploy',
  netlify: 'Netlify Edge Functions',
  'edge-light':
    'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)',
};
function Re() {
  let t = gl();
  return {
    id: t,
    prettyName: yl[t] || t,
    isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(t),
  };
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function cr({
  inlineDatasources: t,
  overrideDatasources: e,
  env: r,
  clientVersion: n,
}) {
  let i,
    o = Object.keys(t)[0],
    s = t[o]?.url,
    a = e[o]?.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
        ? (i = a)
        : s?.value
          ? (i = s.value)
          : s?.fromEnvVar && (i = r[s.fromEnvVar]),
    s?.fromEnvVar !== void 0 && i === void 0)
  )
    throw Re().id === 'workerd'
      ? new I(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new I(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new I(
      'error: Missing URL environment variable, value, or override.',
      n,
    );
  return i;
}
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
function Xr(t) {
  return t.name === 'DriverAdapterError' && typeof t.cause == 'object';
}
u();
c();
m();
p();
d();
l();
function mr(t) {
  return {
    ok: !0,
    value: t,
    map(e) {
      return mr(e(t));
    },
    flatMap(e) {
      return e(t);
    },
  };
}
function _e(t) {
  return {
    ok: !1,
    error: t,
    map() {
      return _e(t);
    },
    flatMap() {
      return _e(t);
    },
  };
}
var go = J('driver-adapter-utils'),
  Zr = class {
    registeredErrors = [];
    consumeError(e) {
      return this.registeredErrors[e];
    }
    registerNewError(e) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: e }), r;
    }
  };
var en = (t, e = new Zr()) => {
    let r = {
      adapterName: t.adapterName,
      errorRegistry: e,
      queryRaw: xe(e, t.queryRaw.bind(t)),
      executeRaw: xe(e, t.executeRaw.bind(t)),
      executeScript: xe(e, t.executeScript.bind(t)),
      dispose: xe(e, t.dispose.bind(t)),
      provider: t.provider,
      startTransaction: async (...n) =>
        (await xe(e, t.startTransaction.bind(t))(...n)).map((o) => hl(e, o)),
    };
    return (
      t.getConnectionInfo &&
        (r.getConnectionInfo = bl(e, t.getConnectionInfo.bind(t))),
      r
    );
  },
  hl = (t, e) => ({
    adapterName: e.adapterName,
    provider: e.provider,
    options: e.options,
    queryRaw: xe(t, e.queryRaw.bind(e)),
    executeRaw: xe(t, e.executeRaw.bind(e)),
    commit: xe(t, e.commit.bind(e)),
    rollback: xe(t, e.rollback.bind(e)),
  });
function xe(t, e) {
  return async (...r) => {
    try {
      return mr(await e(...r));
    } catch (n) {
      if ((go('[error@wrapAsync]', n), Xr(n))) return _e(n.cause);
      let i = t.registerNewError(n);
      return _e({ kind: 'GenericJs', id: i });
    }
  };
}
function bl(t, e) {
  return (...r) => {
    try {
      return mr(e(...r));
    } catch (n) {
      if ((go('[error@wrapSync]', n), Xr(n))) return _e(n.cause);
      let i = t.registerNewError(n);
      return _e({ kind: 'GenericJs', id: i });
    }
  };
}
u();
c();
m();
p();
d();
l();
function yo(t) {
  if (t?.kind === 'itx') return t.options.id;
}
u();
c();
m();
p();
d();
l();
var tn,
  ho = {
    async loadLibrary(t) {
      let { clientVersion: e, adapter: r, engineWasm: n } = t;
      if (r === void 0)
        throw new I(
          `The \`adapter\` option for \`PrismaClient\` is required in this context (${
            Re().prettyName
          })`,
          e,
        );
      if (n === void 0)
        throw new I('WASM engine was unexpectedly `undefined`', e);
      tn === void 0 &&
        (tn = (async () => {
          let o = await n.getRuntime(),
            s = await n.getQueryEngineWasmModule();
          if (s == null)
            throw new I(
              'The loaded wasm module was unexpectedly `undefined` or `null` once loaded',
              e,
            );
          let a = { './query_engine_bg.js': o },
            f = new WebAssembly.Instance(s, a),
            h = f.exports.__wbindgen_start;
          return o.__wbg_set_wasm(f.exports), h(), o.QueryEngine;
        })());
      let i = await tn;
      return {
        debugPanic() {
          return Promise.reject('{}');
        },
        dmmf() {
          return Promise.resolve('{}');
        },
        version() {
          return { commit: 'unknown', version: 'unknown' };
        },
        QueryEngine: i,
      };
    },
  };
var wl = 'P2036',
  ye = J('prisma:client:libraryEngine');
function El(t) {
  return t.item_type === 'query' && 'query' in t;
}
function xl(t) {
  return 'level' in t ? t.level === 'error' && t.message === 'PANIC' : !1;
}
var SS = [...kr, 'native'],
  Pl = 0xffffffffffffffffn,
  rn = 1n;
function vl() {
  let t = rn++;
  return rn > Pl && (rn = 1n), t;
}
var Rt = class {
  name = 'LibraryEngine';
  engine;
  libraryInstantiationPromise;
  libraryStartingPromise;
  libraryStoppingPromise;
  libraryStarted;
  executingQueryPromise;
  config;
  QueryEngineConstructor;
  libraryLoader;
  library;
  logEmitter;
  libQueryEnginePath;
  binaryTarget;
  datasourceOverrides;
  datamodel;
  logQueries;
  logLevel;
  lastQuery;
  loggerRustPanic;
  tracingHelper;
  adapterPromise;
  versionInfo;
  constructor(e, r) {
    (this.libraryLoader = r ?? ho),
      (this.config = e),
      (this.libraryStarted = !1),
      (this.logQueries = e.logQueries ?? !1),
      (this.logLevel = e.logLevel ?? 'error'),
      (this.logEmitter = e.logEmitter),
      (this.datamodel = e.inlineSchema),
      (this.tracingHelper = e.tracingHelper),
      e.enableDebugLogs && (this.logLevel = 'debug');
    let n = Object.keys(e.overrideDatasources)[0],
      i = e.overrideDatasources[n]?.url;
    n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }),
      (this.libraryInstantiationPromise = this.instantiateLibrary());
  }
  wrapEngine(e) {
    return {
      applyPendingMigrations: e.applyPendingMigrations?.bind(e),
      commitTransaction: this.withRequestId(e.commitTransaction.bind(e)),
      connect: this.withRequestId(e.connect.bind(e)),
      disconnect: this.withRequestId(e.disconnect.bind(e)),
      metrics: e.metrics?.bind(e),
      query: this.withRequestId(e.query.bind(e)),
      rollbackTransaction: this.withRequestId(e.rollbackTransaction.bind(e)),
      sdlSchema: e.sdlSchema?.bind(e),
      startTransaction: this.withRequestId(e.startTransaction.bind(e)),
      trace: e.trace.bind(e),
    };
  }
  withRequestId(e) {
    return async (...r) => {
      let n = vl().toString();
      try {
        return await e(...r, n);
      } finally {
        if (this.tracingHelper.isEnabled()) {
          let i = await this.engine?.trace(n);
          if (i) {
            let o = JSON.parse(i);
            this.tracingHelper.dispatchEngineSpans(o.spans);
          }
        }
      }
    };
  }
  async applyPendingMigrations() {
    throw new Error(
      'Cannot call this method from this type of engine instance',
    );
  }
  async transaction(e, r, n) {
    await this.start();
    let i = await this.adapterPromise,
      o = JSON.stringify(r),
      s;
    if (e === 'start') {
      let f = JSON.stringify({
        max_wait: n.maxWait,
        timeout: n.timeout,
        isolation_level: n.isolationLevel,
      });
      s = await this.engine?.startTransaction(f, o);
    } else
      e === 'commit'
        ? (s = await this.engine?.commitTransaction(n.id, o))
        : e === 'rollback' &&
          (s = await this.engine?.rollbackTransaction(n.id, o));
    let a = this.parseEngineResponse(s);
    if (Tl(a)) {
      let f = this.getExternalAdapterError(a, i?.errorRegistry);
      throw f
        ? f.error
        : new X(a.message, {
            code: a.error_code,
            clientVersion: this.config.clientVersion,
            meta: a.meta,
          });
    } else if (typeof a.message == 'string')
      throw new j(a.message, { clientVersion: this.config.clientVersion });
    return a;
  }
  async instantiateLibrary() {
    if ((ye('internalSetup'), this.libraryInstantiationPromise))
      return this.libraryInstantiationPromise;
    (this.binaryTarget = await this.getCurrentBinaryTarget()),
      await this.tracingHelper.runInChildSpan('load_engine', () =>
        this.loadEngine(),
      ),
      this.version();
  }
  async getCurrentBinaryTarget() {}
  parseEngineResponse(e) {
    if (!e)
      throw new j('Response from the Engine was empty', {
        clientVersion: this.config.clientVersion,
      });
    try {
      return JSON.parse(e);
    } catch {
      throw new j('Unable to JSON.parse response from engine', {
        clientVersion: this.config.clientVersion,
      });
    }
  }
  async loadEngine() {
    if (!this.engine) {
      this.QueryEngineConstructor ||
        ((this.library = await this.libraryLoader.loadLibrary(this.config)),
        (this.QueryEngineConstructor = this.library.QueryEngine));
      try {
        let e = new w(this);
        this.adapterPromise ||
          (this.adapterPromise = this.config.adapter?.connect()?.then(en));
        let r = await this.adapterPromise;
        r && ye('Using driver adapter: %O', r),
          (this.engine = this.wrapEngine(
            new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: g.env,
                logQueries: this.config.logQueries ?? !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides: this.datasourceOverrides ?? {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: 'json',
                enableTracing: this.tracingHelper.isEnabled(),
              },
              (n) => {
                e.deref()?.logger(n);
              },
              r,
            ),
          ));
      } catch (e) {
        let r = e,
          n = this.parseInitError(r.message);
        throw typeof n == 'string'
          ? r
          : new I(n.message, this.config.clientVersion, n.error_code);
      }
    }
  }
  logger(e) {
    let r = this.parseEngineResponse(e);
    r &&
      ((r.level = r?.level.toLowerCase() ?? 'unknown'),
      El(r)
        ? this.logEmitter.emit('query', {
            timestamp: new Date(),
            query: r.query,
            params: r.params,
            duration: Number(r.duration_ms),
            target: r.module_path,
          })
        : (xl(r),
          this.logEmitter.emit(r.level, {
            timestamp: new Date(),
            message: r.message,
            target: r.module_path,
          })));
  }
  parseInitError(e) {
    try {
      return JSON.parse(e);
    } catch {}
    return e;
  }
  parseRequestError(e) {
    try {
      return JSON.parse(e);
    } catch {}
    return e;
  }
  onBeforeExit() {
    throw new Error(
      '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.',
    );
  }
  async start() {
    if (
      (await this.libraryInstantiationPromise,
      await this.libraryStoppingPromise,
      this.libraryStartingPromise)
    )
      return (
        ye(
          `library already starting, this.libraryStarted: ${this.libraryStarted}`,
        ),
        this.libraryStartingPromise
      );
    if (this.libraryStarted) return;
    let e = async () => {
      ye('library starting');
      try {
        let r = { traceparent: this.tracingHelper.getTraceParent() };
        await this.engine?.connect(JSON.stringify(r)),
          (this.libraryStarted = !0),
          ye('library started');
      } catch (r) {
        let n = this.parseInitError(r.message);
        throw typeof n == 'string'
          ? r
          : new I(n.message, this.config.clientVersion, n.error_code);
      } finally {
        this.libraryStartingPromise = void 0;
      }
    };
    return (
      (this.libraryStartingPromise = this.tracingHelper.runInChildSpan(
        'connect',
        e,
      )),
      this.libraryStartingPromise
    );
  }
  async stop() {
    if (
      (await this.libraryStartingPromise,
      await this.executingQueryPromise,
      this.libraryStoppingPromise)
    )
      return ye('library is already stopping'), this.libraryStoppingPromise;
    if (!this.libraryStarted) return;
    let e = async () => {
      await new Promise((n) => setTimeout(n, 5)), ye('library stopping');
      let r = { traceparent: this.tracingHelper.getTraceParent() };
      await this.engine?.disconnect(JSON.stringify(r)),
        (this.libraryStarted = !1),
        (this.libraryStoppingPromise = void 0),
        await (await this.adapterPromise)?.dispose(),
        (this.adapterPromise = void 0),
        ye('library stopped');
    };
    return (
      (this.libraryStoppingPromise = this.tracingHelper.runInChildSpan(
        'disconnect',
        e,
      )),
      this.libraryStoppingPromise
    );
  }
  version() {
    return (
      (this.versionInfo = this.library?.version()),
      this.versionInfo?.version ?? 'unknown'
    );
  }
  debugPanic(e) {
    return this.library?.debugPanic(e);
  }
  async request(e, { traceparent: r, interactiveTransaction: n }) {
    ye(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    let i = JSON.stringify({ traceparent: r }),
      o = JSON.stringify(e);
    try {
      await this.start();
      let s = await this.adapterPromise;
      (this.executingQueryPromise = this.engine?.query(o, i, n?.id)),
        (this.lastQuery = o);
      let a = this.parseEngineResponse(await this.executingQueryPromise);
      if (a.errors)
        throw a.errors.length === 1
          ? this.buildQueryError(a.errors[0], s?.errorRegistry)
          : new j(JSON.stringify(a.errors), {
              clientVersion: this.config.clientVersion,
            });
      if (this.loggerRustPanic) throw this.loggerRustPanic;
      return { data: a };
    } catch (s) {
      if (s instanceof I) throw s;
      s.code === 'GenericFailure' && s.message?.startsWith('PANIC:');
      let a = this.parseRequestError(s.message);
      throw typeof a == 'string'
        ? s
        : new j(
            `${a.message}
${a.backtrace}`,
            { clientVersion: this.config.clientVersion },
          );
    }
  }
  async requestBatch(e, { transaction: r, traceparent: n }) {
    ye('requestBatch');
    let i = sr(e, r);
    await this.start();
    let o = await this.adapterPromise;
    (this.lastQuery = JSON.stringify(i)),
      (this.executingQueryPromise = this.engine.query(
        this.lastQuery,
        JSON.stringify({ traceparent: n }),
        yo(r),
      ));
    let s = await this.executingQueryPromise,
      a = this.parseEngineResponse(s);
    if (a.errors)
      throw a.errors.length === 1
        ? this.buildQueryError(a.errors[0], o?.errorRegistry)
        : new j(JSON.stringify(a.errors), {
            clientVersion: this.config.clientVersion,
          });
    let { batchResult: f, errors: h } = a;
    if (Array.isArray(f))
      return f.map((T) =>
        T.errors && T.errors.length > 0
          ? (this.loggerRustPanic ??
            this.buildQueryError(T.errors[0], o?.errorRegistry))
          : { data: T },
      );
    throw h && h.length === 1
      ? new Error(h[0].error)
      : new Error(JSON.stringify(a));
  }
  buildQueryError(e, r) {
    e.user_facing_error.is_panic;
    let n = this.getExternalAdapterError(e.user_facing_error, r);
    return n
      ? n.error
      : ar(e, this.config.clientVersion, this.config.activeProvider);
  }
  getExternalAdapterError(e, r) {
    if (e.error_code === wl && r) {
      let n = e.meta?.id;
      qt(
        typeof n == 'number',
        'Malformed external JS error received from the engine',
      );
      let i = r.consumeError(n);
      return qt(i, 'External error with reported id was not registered'), i;
    }
  }
  async metrics(e) {
    await this.start();
    let r = await this.engine.metrics(JSON.stringify(e));
    return e.format === 'prometheus' ? r : this.parseEngineResponse(r);
  }
};
function Tl(t) {
  return typeof t == 'object' && t !== null && t.error_code !== void 0;
}
u();
c();
m();
p();
d();
l();
var At =
    'Accelerate has not been setup correctly. Make sure your client is using `.$extends(withAccelerate())`. See https://pris.ly/d/accelerate-getting-started',
  pr = class {
    constructor(e) {
      this.config = e;
      (this.resolveDatasourceUrl =
        this.config.accelerateUtils?.resolveDatasourceUrl),
        (this.getBatchRequestPayload =
          this.config.accelerateUtils?.getBatchRequestPayload),
        (this.prismaGraphQLToJSError =
          this.config.accelerateUtils?.prismaGraphQLToJSError),
        (this.PrismaClientUnknownRequestError =
          this.config.accelerateUtils?.PrismaClientUnknownRequestError),
        (this.PrismaClientInitializationError =
          this.config.accelerateUtils?.PrismaClientInitializationError),
        (this.PrismaClientKnownRequestError =
          this.config.accelerateUtils?.PrismaClientKnownRequestError),
        (this.debug = this.config.accelerateUtils?.debug),
        (this.engineVersion = this.config.accelerateUtils?.engineVersion),
        (this.clientVersion = this.config.accelerateUtils?.clientVersion);
    }
    name = 'AccelerateEngine';
    resolveDatasourceUrl;
    getBatchRequestPayload;
    prismaGraphQLToJSError;
    PrismaClientUnknownRequestError;
    PrismaClientInitializationError;
    PrismaClientKnownRequestError;
    debug;
    engineVersion;
    clientVersion;
    onBeforeExit(e) {}
    async start() {}
    async stop() {}
    version(e) {
      return 'unknown';
    }
    transaction(e, r, n) {
      throw new I(At, this.config.clientVersion);
    }
    metrics(e) {
      throw new I(At, this.config.clientVersion);
    }
    request(e, r) {
      throw new I(At, this.config.clientVersion);
    }
    requestBatch(e, r) {
      throw new I(At, this.config.clientVersion);
    }
    applyPendingMigrations() {
      throw new I(At, this.config.clientVersion);
    }
  };
function bo({ copyEngine: t = !0 }, e) {
  let r;
  try {
    r = cr({
      inlineDatasources: e.inlineDatasources,
      overrideDatasources: e.overrideDatasources,
      env: { ...e.env, ...g.env },
      clientVersion: e.clientVersion,
    });
  } catch {}
  let n = !!(r?.startsWith('prisma://') || Mr(r));
  t &&
    n &&
    lt(
      'recommend--no-engine',
      'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)',
    );
  let i = Ue(e.generator),
    o = n || !t,
    s = !!e.adapter,
    a = i === 'library',
    f = i === 'binary',
    h = i === 'client';
  if ((o && s) || (s && !1)) {
    let T;
    throw (
      (t
        ? r?.startsWith('prisma://')
          ? (T = [
              'Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.',
              'Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.',
            ])
          : (T = [
              'Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.',
            ])
        : (T = [
            'Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.',
            'Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.',
          ]),
      new W(
        T.join(`
`),
        { clientVersion: e.clientVersion },
      ))
    );
  }
  if (s) return new Rt(e);
  if (o) return new pr(e);
  {
    let T = [
      `PrismaClient failed to initialize because it wasn't configured to run in this environment (${
        Re().prettyName
      }).`,
      'In order to run Prisma Client in an edge runtime, you will need to configure one of the following options:',
      '- Enable Driver Adapters: https://pris.ly/d/driver-adapters',
      '- Enable Accelerate: https://pris.ly/d/accelerate',
    ];
    throw new W(
      T.join(`
`),
      { clientVersion: e.clientVersion },
    );
  }
  return 'wasm';
}
u();
c();
m();
p();
d();
l();
function dr({ generator: t }) {
  return t?.previewFeatures ?? [];
}
u();
c();
m();
p();
d();
l();
var wo = (t) => ({ command: t });
u();
c();
m();
p();
d();
l();
u();
c();
m();
p();
d();
l();
var Eo = (t) => t.strings.reduce((e, r, n) => `${e}@P${n}${r}`);
u();
c();
m();
p();
d();
l();
l();
function et(t) {
  try {
    return xo(t, 'fast');
  } catch {
    return xo(t, 'slow');
  }
}
function xo(t, e) {
  return JSON.stringify(t.map((r) => vo(r, e)));
}
function vo(t, e) {
  if (Array.isArray(t)) return t.map((r) => vo(r, e));
  if (typeof t == 'bigint')
    return { prisma__type: 'bigint', prisma__value: t.toString() };
  if (Ve(t)) return { prisma__type: 'date', prisma__value: t.toJSON() };
  if (me.isDecimal(t))
    return { prisma__type: 'decimal', prisma__value: t.toJSON() };
  if (b.isBuffer(t))
    return { prisma__type: 'bytes', prisma__value: t.toString('base64') };
  if (Cl(t))
    return {
      prisma__type: 'bytes',
      prisma__value: b.from(t).toString('base64'),
    };
  if (ArrayBuffer.isView(t)) {
    let { buffer: r, byteOffset: n, byteLength: i } = t;
    return {
      prisma__type: 'bytes',
      prisma__value: b.from(r, n, i).toString('base64'),
    };
  }
  return typeof t == 'object' && e === 'slow' ? To(t) : t;
}
function Cl(t) {
  return t instanceof ArrayBuffer || t instanceof SharedArrayBuffer
    ? !0
    : typeof t == 'object' && t !== null
      ? t[Symbol.toStringTag] === 'ArrayBuffer' ||
        t[Symbol.toStringTag] === 'SharedArrayBuffer'
      : !1;
}
function To(t) {
  if (typeof t != 'object' || t === null) return t;
  if (typeof t.toJSON == 'function') return t.toJSON();
  if (Array.isArray(t)) return t.map(Po);
  let e = {};
  for (let r of Object.keys(t)) e[r] = Po(t[r]);
  return e;
}
function Po(t) {
  return typeof t == 'bigint' ? t.toString() : To(t);
}
var Rl = /^(\s*alter\s)/i,
  Co = J('prisma:client');
function nn(t, e, r, n) {
  if (
    !(t !== 'postgresql' && t !== 'cockroachdb') &&
    r.length > 0 &&
    Rl.exec(e)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var on =
    ({ clientMethod: t, activeProvider: e }) =>
    (r) => {
      let n = '',
        i;
      if (rr(r))
        (n = r.sql),
          (i = { values: et(r.values), __prismaRawParameters__: !0 });
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: et(s || []), __prismaRawParameters__: !0 });
      } else
        switch (e) {
          case 'sqlite':
          case 'mysql': {
            (n = r.sql),
              (i = { values: et(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'cockroachdb':
          case 'postgresql':
          case 'postgres': {
            (n = r.text),
              (i = { values: et(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'sqlserver': {
            (n = Eo(r)),
              (i = { values: et(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${e} provider does not support ${t}`);
        }
      return (
        i?.values
          ? Co(`prisma.${t}(${n}, ${i.values})`)
          : Co(`prisma.${t}(${n})`),
        { query: n, parameters: i }
      );
    },
  Ro = {
    requestArgsToMiddlewareArgs(t) {
      return [t.strings, ...t.values];
    },
    middlewareArgsToRequestArgs(t) {
      let [e, ...r] = t;
      return new Z(e, r);
    },
  },
  Ao = {
    requestArgsToMiddlewareArgs(t) {
      return [t];
    },
    middlewareArgsToRequestArgs(t) {
      return t[0];
    },
  };
u();
c();
m();
p();
d();
l();
function sn(t) {
  return function (r, n) {
    let i,
      o = (s = t) => {
        try {
          return s === void 0 || s?.kind === 'itx'
            ? (i ??= So(r(s)))
            : So(r(s));
        } catch (a) {
          return Promise.reject(a);
        }
      };
    return {
      get spec() {
        return n;
      },
      then(s, a) {
        return o().then(s, a);
      },
      catch(s) {
        return o().catch(s);
      },
      finally(s) {
        return o().finally(s);
      },
      requestTransaction(s) {
        let a = o(s);
        return a.requestTransaction ? a.requestTransaction(s) : a;
      },
      [Symbol.toStringTag]: 'PrismaPromise',
    };
  };
}
function So(t) {
  return typeof t.then == 'function' ? t : Promise.resolve(t);
}
u();
c();
m();
p();
d();
l();
var Al = Or.split('.')[0],
  Sl = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return '00-10-10-00';
    },
    dispatchEngineSpans() {},
    getActiveContext() {},
    runInChildSpan(t, e) {
      return e();
    },
  },
  an = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(e) {
      return this.getGlobalTracingHelper().getTraceParent(e);
    }
    dispatchEngineSpans(e) {
      return this.getGlobalTracingHelper().dispatchEngineSpans(e);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(e, r) {
      return this.getGlobalTracingHelper().runInChildSpan(e, r);
    }
    getGlobalTracingHelper() {
      let e = globalThis[`V${Al}_PRISMA_INSTRUMENTATION`],
        r = globalThis.PRISMA_INSTRUMENTATION;
      return e?.helper ?? r?.helper ?? Sl;
    }
  };
function ko() {
  return new an();
}
u();
c();
m();
p();
d();
l();
function Oo(t, e = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --t === 0 && r(e()), i?.(n);
    },
  };
}
u();
c();
m();
p();
d();
l();
function Mo(t) {
  return typeof t == 'string'
    ? t
    : t.reduce(
        (e, r) => {
          let n = typeof r == 'string' ? r : r.level;
          return n === 'query'
            ? e
            : e && (r === 'info' || e === 'info')
              ? 'info'
              : n;
        },
        void 0,
      );
}
u();
c();
m();
p();
d();
l();
var fr = class {
  _middlewares = [];
  use(e) {
    this._middlewares.push(e);
  }
  get(e) {
    return this._middlewares[e];
  }
  has(e) {
    return !!this._middlewares[e];
  }
  length() {
    return this._middlewares.length;
  }
};
u();
c();
m();
p();
d();
l();
var _o = nt(ei());
u();
c();
m();
p();
d();
l();
function gr(t) {
  return typeof t.batchRequestIdx == 'number';
}
u();
c();
m();
p();
d();
l();
function Io(t) {
  if (t.action !== 'findUnique' && t.action !== 'findUniqueOrThrow') return;
  let e = [];
  return (
    t.modelName && e.push(t.modelName),
    t.query.arguments && e.push(ln(t.query.arguments)),
    e.push(ln(t.query.selection)),
    e.join('')
  );
}
function ln(t) {
  return `(${Object.keys(t)
    .sort()
    .map((r) => {
      let n = t[r];
      return typeof n == 'object' && n !== null ? `(${r} ${ln(n)})` : r;
    })
    .join(' ')})`;
}
u();
c();
m();
p();
d();
l();
var kl = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createManyAndReturn: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateManyAndReturn: !0,
  updateOne: !0,
  upsertOne: !0,
};
function un(t) {
  return kl[t];
}
u();
c();
m();
p();
d();
l();
var yr = class {
  constructor(e) {
    this.options = e;
    this.batches = {};
  }
  batches;
  tickActive = !1;
  request(e) {
    let r = this.options.batchBy(e);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            g.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: e, resolve: n, reject: i });
        }))
      : this.options.singleLoader(e);
  }
  dispatchBatches() {
    for (let e in this.batches) {
      let r = this.batches[e];
      delete this.batches[e],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return 'DataLoader';
  }
};
u();
c();
m();
p();
d();
l();
l();
function De(t, e) {
  if (e === null) return e;
  switch (t) {
    case 'bigint':
      return BigInt(e);
    case 'bytes': {
      let { buffer: r, byteOffset: n, byteLength: i } = b.from(e, 'base64');
      return new Uint8Array(r, n, i);
    }
    case 'decimal':
      return new me(e);
    case 'datetime':
    case 'date':
      return new Date(e);
    case 'time':
      return new Date(`1970-01-01T${e}Z`);
    case 'bigint-array':
      return e.map((r) => De('bigint', r));
    case 'bytes-array':
      return e.map((r) => De('bytes', r));
    case 'decimal-array':
      return e.map((r) => De('decimal', r));
    case 'datetime-array':
      return e.map((r) => De('datetime', r));
    case 'date-array':
      return e.map((r) => De('date', r));
    case 'time-array':
      return e.map((r) => De('time', r));
    default:
      return e;
  }
}
function hr(t) {
  let e = [],
    r = Ol(t);
  for (let n = 0; n < t.rows.length; n++) {
    let i = t.rows[n],
      o = { ...r };
    for (let s = 0; s < i.length; s++) o[t.columns[s]] = De(t.types[s], i[s]);
    e.push(o);
  }
  return e;
}
function Ol(t) {
  let e = {};
  for (let r = 0; r < t.columns.length; r++) e[t.columns[r]] = null;
  return e;
}
var Ml = J('prisma:client:request_handler'),
  br = class {
    client;
    dataloader;
    logEmitter;
    constructor(e, r) {
      (this.logEmitter = r),
        (this.client = e),
        (this.dataloader = new yr({
          batchLoader: ao(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((C) => C.protocolQuery),
              f = this.client._tracingHelper.getTraceParent(s),
              h = n.some((C) => un(C.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: f,
                transaction: Il(o),
                containsWrite: h,
                customDataProxyFetch: i,
              })
            ).map((C, k) => {
              if (C instanceof Error) return C;
              try {
                return this.mapQueryEngineResult(n[k], C);
              } catch (A) {
                return A;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === 'itx' ? Do(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: un(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : Io(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === 'batch' &&
              i.transaction?.kind === 'batch'
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(e) {
      try {
        return await this.dataloader.request(e);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = e;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
          globalOmit: e.globalOmit,
        });
      }
    }
    mapQueryEngineResult({ dataPath: e, unpacker: r }, n) {
      let i = n?.data,
        o = this.unpack(i, e, r);
      return g.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
    }
    handleAndLogRequestError(e) {
      try {
        this.handleRequestError(e);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit('error', {
              message: r.message,
              target: e.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: e,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
      globalOmit: a,
    }) {
      if ((Ml(e), _l(e, i))) throw e;
      if (e instanceof X && Dl(e)) {
        let h = Lo(e.meta);
        zt({
          args: o,
          errors: [h],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
          globalOmit: a,
        });
      }
      let f = e.message;
      if (
        (n &&
          (f = Bt({
            callsite: n,
            originalMethod: r,
            isPanic: e.isPanic,
            showColors: this.client._errorFormat === 'pretty',
            message: f,
          })),
        (f = this.sanitizeMessage(f)),
        e.code)
      ) {
        let h = s ? { modelName: s, ...e.meta } : e.meta;
        throw new X(f, {
          code: e.code,
          clientVersion: this.client._clientVersion,
          meta: h,
          batchRequestIdx: e.batchRequestIdx,
        });
      } else {
        if (e.isPanic) throw new we(f, this.client._clientVersion);
        if (e instanceof j)
          throw new j(f, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: e.batchRequestIdx,
          });
        if (e instanceof I) throw new I(f, this.client._clientVersion);
        if (e instanceof we) throw new we(f, this.client._clientVersion);
      }
      throw ((e.clientVersion = this.client._clientVersion), e);
    }
    sanitizeMessage(e) {
      return this.client._errorFormat && this.client._errorFormat !== 'pretty'
        ? (0, _o.default)(e)
        : e;
    }
    unpack(e, r, n) {
      if (!e || (e.data && (e = e.data), !e)) return e;
      let i = Object.keys(e)[0],
        o = Object.values(e)[0],
        s = r.filter((h) => h !== 'select' && h !== 'include'),
        a = Kr(o, s),
        f = i === 'queryRaw' ? hr(a) : $e(a);
      return n ? n(f) : f;
    }
    get [Symbol.toStringTag]() {
      return 'RequestHandler';
    }
  };
function Il(t) {
  if (t) {
    if (t.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: t.isolationLevel } };
    if (t.kind === 'itx') return { kind: 'itx', options: Do(t) };
    be(t, 'Unknown transaction kind');
  }
}
function Do(t) {
  return { id: t.id, payload: t.payload };
}
function _l(t, e) {
  return gr(t) && e?.kind === 'batch' && t.batchRequestIdx !== e.index;
}
function Dl(t) {
  return t.code === 'P2009' || t.code === 'P2012';
}
function Lo(t) {
  if (t.kind === 'Union') return { kind: 'Union', errors: t.errors.map(Lo) };
  if (Array.isArray(t.selectionPath)) {
    let [, ...e] = t.selectionPath;
    return { ...t, selectionPath: e };
  }
  return t;
}
u();
c();
m();
p();
d();
l();
var Fo = '6.6.0';
var No = Fo;
u();
c();
m();
p();
d();
l();
var Vo = nt(Fr());
u();
c();
m();
p();
d();
l();
var _ = class extends Error {
  constructor(e) {
    super(
      e +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = 'PrismaClientConstructorValidationError');
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientConstructorValidationError';
  }
};
te(_, 'PrismaClientConstructorValidationError');
var qo = [
    'datasources',
    'datasourceUrl',
    'errorFormat',
    'adapter',
    'log',
    'transactionOptions',
    'omit',
    '__internal',
  ],
  Uo = ['pretty', 'colorless', 'minimal'],
  Bo = ['info', 'query', 'warn', 'error'],
  Fl = {
    datasources: (t, { datasourceNames: e }) => {
      if (t) {
        if (typeof t != 'object' || Array.isArray(t))
          throw new _(
            `Invalid value ${JSON.stringify(
              t,
            )} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(t)) {
          if (!e.includes(r)) {
            let i = tt(r, e) || ` Available datasources: ${e.join(', ')}`;
            throw new _(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != 'object' || Array.isArray(n))
            throw new _(`Invalid value ${JSON.stringify(
              t,
            )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == 'object')
            for (let [i, o] of Object.entries(n)) {
              if (i !== 'url')
                throw new _(`Invalid value ${JSON.stringify(
                  t,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != 'string')
                throw new _(`Invalid value ${JSON.stringify(
                  o,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (t, e) => {
      if (!t && Ue(e.generator) === 'client')
        throw new _(
          'Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.',
        );
      if (t === null) return;
      if (t === void 0)
        throw new _(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!dr(e).includes('driverAdapters'))
        throw new _(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (Ue(e.generator) === 'binary')
        throw new _(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (t) => {
      if (typeof t < 'u' && typeof t != 'string')
        throw new _(`Invalid value ${JSON.stringify(
          t,
        )} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (t) => {
      if (t) {
        if (typeof t != 'string')
          throw new _(
            `Invalid value ${JSON.stringify(
              t,
            )} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Uo.includes(t)) {
          let e = tt(t, Uo);
          throw new _(
            `Invalid errorFormat ${t} provided to PrismaClient constructor.${e}`,
          );
        }
      }
    },
    log: (t) => {
      if (!t) return;
      if (!Array.isArray(t))
        throw new _(
          `Invalid value ${JSON.stringify(
            t,
          )} for "log" provided to PrismaClient constructor.`,
        );
      function e(r) {
        if (typeof r == 'string' && !Bo.includes(r)) {
          let n = tt(r, Bo);
          throw new _(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of t) {
        e(r);
        let n = {
          level: e,
          emit: (i) => {
            let o = ['stdout', 'event'];
            if (!o.includes(i)) {
              let s = tt(i, o);
              throw new _(
                `Invalid value ${JSON.stringify(
                  i,
                )} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == 'object')
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new _(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    transactionOptions: (t) => {
      if (!t) return;
      let e = t.maxWait;
      if (e != null && e <= 0)
        throw new _(
          `Invalid value ${e} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        );
      let r = t.timeout;
      if (r != null && r <= 0)
        throw new _(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        );
    },
    omit: (t, e) => {
      if (typeof t != 'object')
        throw new _('"omit" option is expected to be an object.');
      if (t === null) throw new _('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(t)) {
        let o = ql(n, e.runtimeDataModel);
        if (!o) {
          r.push({ kind: 'UnknownModel', modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let f = o.fields.find((h) => h.name === s);
          if (!f) {
            r.push({ kind: 'UnknownField', modelKey: n, fieldName: s });
            continue;
          }
          if (f.relationName) {
            r.push({ kind: 'RelationInOmit', modelKey: n, fieldName: s });
            continue;
          }
          typeof a != 'boolean' &&
            r.push({ kind: 'InvalidFieldValue', modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new _(Ul(t, r));
    },
    __internal: (t) => {
      if (!t) return;
      let e = ['debug', 'engine', 'configOverride'];
      if (typeof t != 'object')
        throw new _(
          `Invalid value ${JSON.stringify(
            t,
          )} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(t))
        if (!e.includes(r)) {
          let n = tt(r, e);
          throw new _(
            `Invalid property ${JSON.stringify(
              r,
            )} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function jo(t, e) {
  for (let [r, n] of Object.entries(t)) {
    if (!qo.includes(r)) {
      let i = tt(r, qo);
      throw new _(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    Fl[r](n, e);
  }
  if (t.datasourceUrl && t.datasources)
    throw new _(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function tt(t, e) {
  if (e.length === 0 || typeof t != 'string') return '';
  let r = Nl(t, e);
  return r ? ` Did you mean "${r}"?` : '';
}
function Nl(t, e) {
  if (e.length === 0) return null;
  let r = e.map((i) => ({ value: i, distance: (0, Vo.default)(t, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function ql(t, e) {
  return $o(e.models, t) ?? $o(e.types, t);
}
function $o(t, e) {
  let r = Object.keys(t).find((n) => ve(n) === e);
  if (r) return t[r];
}
function Ul(t, e) {
  let r = He(t);
  for (let o of e)
    switch (o.kind) {
      case 'UnknownModel':
        r.arguments.getField(o.modelKey)?.markAsError(),
          r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
        break;
      case 'UnknownField':
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`,
          );
        break;
      case 'RelationInOmit':
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              'Relations are already excluded by default and can not be specified in "omit".',
          );
        break;
      case 'InvalidFieldValue':
        r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(() => 'Omit field option value must be a boolean.');
        break;
    }
  let { message: n, args: i } = Ht(r, 'colorless');
  return `Error validating "omit" option:

${i}

${n}`;
}
u();
c();
m();
p();
d();
l();
function Qo(t) {
  return t.length === 0
    ? Promise.resolve([])
    : new Promise((e, r) => {
        let n = new Array(t.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === t.length && ((o = !0), i ? r(i) : e(n)));
          },
          f = (h) => {
            o || ((o = !0), r(h));
          };
        for (let h = 0; h < t.length; h++)
          t[h].then(
            (T) => {
              (n[h] = T), a();
            },
            (T) => {
              if (!gr(T)) {
                f(T);
                return;
              }
              T.batchRequestIdx === h ? f(T) : (i || (i = T), a());
            },
          );
      });
}
var Ae = J('prisma:client');
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0);
var Bl = {
    requestArgsToMiddlewareArgs: (t) => t,
    middlewareArgsToRequestArgs: (t) => t,
  },
  $l = Symbol.for('prisma.client.transaction.id'),
  Vl = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function Wo(t) {
  class e {
    _originalClient = this;
    _runtimeDataModel;
    _requestHandler;
    _connectionPromise;
    _disconnectionPromise;
    _engineConfig;
    _accelerateEngineConfig;
    _clientVersion;
    _errorFormat;
    _tracingHelper;
    _middlewares = new fr();
    _previewFeatures;
    _activeProvider;
    _globalOmit;
    _extensions;
    _engine;
    _appliedParent;
    _createPrismaPromise = sn();
    constructor(n) {
      (t = n?.__internal?.configOverride?.(t) ?? t), po(t), n && jo(n, t);
      let i = new nr().on('error', () => {});
      (this._extensions = ze.empty()),
        (this._previewFeatures = dr(t)),
        (this._clientVersion = t.clientVersion ?? No),
        (this._activeProvider = t.activeProvider),
        (this._globalOmit = n?.omit),
        (this._tracingHelper = ko());
      let o = t.relativeEnvPaths && {
          rootEnvPath:
            t.relativeEnvPaths.rootEnvPath &&
            Nt.resolve(t.dirname, t.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            t.relativeEnvPaths.schemaEnvPath &&
            Nt.resolve(t.dirname, t.relativeEnvPaths.schemaEnvPath),
        },
        s;
      if (n?.adapter) {
        s = n.adapter;
        let f =
          t.activeProvider === 'postgresql' ? 'postgres' : t.activeProvider;
        if (s.provider !== f)
          throw new I(
            `The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${f}\` specified in the Prisma schema.`,
            this._clientVersion,
          );
        if (n.datasources || n.datasourceUrl !== void 0)
          throw new I(
            'Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.',
            this._clientVersion,
          );
      }
      let a = t.injectableEdgeEnv?.();
      try {
        let f = n ?? {},
          h = f.__internal ?? {},
          T = h.debug === !0;
        T && J.enable('prisma:client');
        let C = Nt.resolve(t.dirname, t.relativePath);
        qn.existsSync(C) || (C = t.dirname),
          Ae('dirname', t.dirname),
          Ae('relativePath', t.relativePath),
          Ae('cwd', C);
        let k = h.engine || {};
        if (
          (f.errorFormat
            ? (this._errorFormat = f.errorFormat)
            : g.env.NODE_ENV === 'production'
              ? (this._errorFormat = 'minimal')
              : g.env.NO_COLOR
                ? (this._errorFormat = 'colorless')
                : (this._errorFormat = 'colorless'),
          (this._runtimeDataModel = t.runtimeDataModel),
          (this._engineConfig = {
            cwd: C,
            dirname: t.dirname,
            enableDebugLogs: T,
            allowTriggerPanic: k.allowTriggerPanic,
            prismaPath: k.binaryPath ?? void 0,
            engineEndpoint: k.endpoint,
            generator: t.generator,
            showColors: this._errorFormat === 'pretty',
            logLevel: f.log && Mo(f.log),
            logQueries:
              f.log &&
              !!(typeof f.log == 'string'
                ? f.log === 'query'
                : f.log.find((A) =>
                    typeof A == 'string' ? A === 'query' : A.level === 'query',
                  )),
            env: a?.parsed ?? {},
            flags: [],
            engineWasm: t.engineWasm,
            compilerWasm: t.compilerWasm,
            clientVersion: t.clientVersion,
            engineVersion: t.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: t.activeProvider,
            inlineSchema: t.inlineSchema,
            overrideDatasources: fo(f, t.datasourceNames),
            inlineDatasources: t.inlineDatasources,
            inlineSchemaHash: t.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait: f.transactionOptions?.maxWait ?? 2e3,
              timeout: f.transactionOptions?.timeout ?? 5e3,
              isolationLevel: f.transactionOptions?.isolationLevel,
            },
            logEmitter: i,
            isBundled: t.isBundled,
            adapter: s,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: cr,
              getBatchRequestPayload: sr,
              prismaGraphQLToJSError: ar,
              PrismaClientUnknownRequestError: j,
              PrismaClientInitializationError: I,
              PrismaClientKnownRequestError: X,
              debug: J('prisma:client:accelerateEngine'),
              engineVersion: Go.version,
              clientVersion: t.clientVersion,
            },
          }),
          Ae('clientVersion', t.clientVersion),
          (this._engine = bo(t, this._engineConfig)),
          (this._requestHandler = new br(this, i)),
          f.log)
        )
          for (let A of f.log) {
            let O =
              typeof A == 'string' ? A : A.emit === 'stdout' ? A.level : null;
            O &&
              this.$on(O, (S) => {
                at.log(`${at.tags[O] ?? ''}`, S.message || S.query);
              });
          }
      } catch (f) {
        throw ((f.clientVersion = this._clientVersion), f);
      }
      return (this._appliedParent = Tt(this));
    }
    get [Symbol.toStringTag]() {
      return 'PrismaClient';
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      return (
        n === 'beforeExit'
          ? this._engine.onBeforeExit(i)
          : n && this._engineConfig.logEmitter.on(n, i),
        this
      );
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        Fn();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: 'executeRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: on({ clientMethod: i, activeProvider: a }),
        callsite: Ce(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = Jo(n, i);
          return (
            nn(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? 'prisma.$executeRaw`<SQL>`'
                : 'prisma.$executeRaw(sql`<SQL>`)',
            ),
            this.$executeRawInternal(o, '$executeRaw', s, a)
          );
        }
        throw new W(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          nn(
            this._activeProvider,
            n,
            i,
            'prisma.$executeRawUnsafe(<SQL>, [...values])',
          ),
          this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (t.activeProvider !== 'mongodb')
        throw new W(
          `The ${t.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: '$runCommandRaw',
          dataPath: [],
          action: 'runCommandRaw',
          argsMapper: wo,
          callsite: Ce(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: 'queryRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: on({ clientMethod: i, activeProvider: a }),
        callsite: Ce(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...Jo(n, i));
        throw new W(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new W(
            '`typedSql` preview feature must be enabled in order to access $queryRawTyped API',
            { clientVersion: this._clientVersion },
          );
        return this.$queryRawInternal(i, '$queryRawTyped', n);
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Vl.nextId(),
        s = Oo(n.length),
        a = n.map((f, h) => {
          if (f?.[Symbol.toStringTag] !== 'PrismaPromise')
            throw new Error(
              'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.',
            );
          let T =
              i?.isolationLevel ??
              this._engineConfig.transactionOptions.isolationLevel,
            C = { kind: 'batch', id: o, index: h, isolationLevel: T, lock: s };
          return f.requestTransaction?.(C) ?? f;
        });
      return Qo(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
          timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            i?.isolationLevel ??
            this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction('start', o, s),
        f;
      try {
        let h = { kind: 'itx', ...a };
        (f = await n(this._createItxClient(h))),
          await this._engine.transaction('commit', o, a);
      } catch (h) {
        throw (
          (await this._engine.transaction('rollback', o, a).catch(() => {}), h)
        );
      }
      return f;
    }
    _createItxClient(n) {
      return ae(
        Tt(
          ae(Yi(this), [
            K('_appliedParent', () => this._appliedParent._createItxClient(n)),
            K('_createPrismaPromise', () => sn(n)),
            K($l, () => n.id),
          ]),
        ),
        [Xe(ro)],
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == 'function'
        ? this._engineConfig.adapter?.adapterName === '@prisma/adapter-d1'
          ? (o = () => {
              throw new Error(
                'Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.',
              );
            })
          : (o = () =>
              this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: 'transaction', attributes: { method: '$transaction' } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? Bl,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: 'middleware',
            middleware: !0,
            attributes: { method: '$use' },
            active: !1,
          },
          operation: {
            name: 'operation',
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        f = async (h) => {
          let T = this._middlewares.get(++a);
          if (T)
            return this._tracingHelper.runInChildSpan(s.middleware, (M) =>
              T(h, (oe) => (M?.end(), f(oe))),
            );
          let { runInTransaction: C, args: k, ...A } = h,
            O = { ...n, ...A };
          k && (O.args = i.middlewareArgsToRequestArgs(k)),
            n.transaction !== void 0 && C === !1 && delete O.transaction;
          let S = await so(this, O);
          return O.model
            ? to({
                result: S,
                modelName: O.model,
                args: O.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
                globalOmit: this._globalOmit,
              })
            : S;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => f(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: f,
      argsMapper: h,
      transaction: T,
      unpacker: C,
      otelParentCtx: k,
      customDataProxyFetch: A,
    }) {
      try {
        n = h ? h(n) : n;
        let O = { name: 'serialize' },
          S = this._tracingHelper.runInChildSpan(O, () =>
            er({
              modelName: f,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
              previewFeatures: this._previewFeatures,
              globalOmit: this._globalOmit,
            }),
          );
        return (
          J.enabled('prisma:client') &&
            (Ae('Prisma Client call:'),
            Ae(`prisma.${i}(${$i(n)})`),
            Ae('Generated request:'),
            Ae(
              JSON.stringify(S, null, 2) +
                `
`,
            )),
          T?.kind === 'batch' && (await T.lock),
          this._requestHandler.request({
            protocolQuery: S,
            modelName: f,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: T,
            unpacker: C,
            otelParentCtx: k,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            globalOmit: this._globalOmit,
            customDataProxyFetch: A,
          })
        );
      } catch (O) {
        throw ((O.clientVersion = this._clientVersion), O);
      }
    }
    $metrics = new Ye(this);
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
    $extends = Xi;
  }
  return e;
}
function Jo(t, e) {
  return jl(t) ? [new Z(t, e), Ro] : [t, Ao];
}
function jl(t) {
  return Array.isArray(t) && Array.isArray(t.raw);
}
u();
c();
m();
p();
d();
l();
var Ql = new Set([
  'toJSON',
  '$$typeof',
  'asymmetricMatch',
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function Ko(t) {
  return new Proxy(t, {
    get(e, r) {
      if (r in e) return e[r];
      if (!Ql.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
u();
c();
m();
p();
d();
l();
l();
0 &&
  (module.exports = {
    DMMF,
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    createParam,
    defineDmmfProperty,
    deserializeJsonResponse,
    deserializeRawResult,
    dmmfToRuntimeDataModel,
    empty,
    getPrismaClient,
    getRuntime,
    join,
    makeStrictEnum,
    makeTypedQueryFactory,
    objectEnumValues,
    raw,
    serializeJsonQuery,
    skip,
    sqltag,
    warnEnvConflicts,
    warnOnce,
  });
//# sourceMappingURL=wasm.js.map
