/* eslint-disable no-useless-escape */
/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-empty */
/* eslint-disable no-redeclare */
/* eslint-disable no-prototype-builtins */
/* eslint-disable getter-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
var ba = Object.create;
var tr = Object.defineProperty;
var Ea = Object.getOwnPropertyDescriptor;
var xa = Object.getOwnPropertyNames;
var Pa = Object.getPrototypeOf,
  va = Object.prototype.hasOwnProperty;
var ge = (e, t) => () => (e && (t = e((e = 0))), t);
var Ae = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Ze = (e, t) => {
    for (var r in t) tr(e, r, { get: t[r], enumerable: !0 });
  },
  ni = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of xa(t))
        !va.call(e, i) &&
          i !== r &&
          tr(e, i, {
            get: () => t[i],
            enumerable: !(n = Ea(t, i)) || n.enumerable,
          });
    return e;
  };
var Se = (e, t, r) => (
    (r = e != null ? ba(Pa(e)) : {}),
    ni(
      t || !e || !e.__esModule
        ? tr(r, 'default', { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  Ta = (e) => ni(tr({}, '__esModule', { value: !0 }), e);
var y,
  c = ge(() => {
    'use strict';
    y = {
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
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
  p = ge(() => {
    'use strict';
    x =
      globalThis.performance ??
      (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
  });
var E,
  d = ge(() => {
    'use strict';
    E = () => {};
    E.prototype = E;
  });
var b,
  f = ge(() => {
    'use strict';
    b = class {
      value;
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    };
  });
var Pi = Ae((rt) => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
  var li = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    Ca = li((e) => {
      'use strict';
      (e.byteLength = l), (e.toByteArray = g), (e.fromByteArray = R);
      var t = [],
        r = [],
        n = typeof Uint8Array < 'u' ? Uint8Array : Array,
        i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o);
      var o, s;
      (r[45] = 62), (r[95] = 63);
      function a(C) {
        var A = C.length;
        if (A % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4');
        var M = C.indexOf('=');
        M === -1 && (M = A);
        var I = M === A ? 0 : 4 - (M % 4);
        return [M, I];
      }
      function l(C) {
        var A = a(C),
          M = A[0],
          I = A[1];
        return ((M + I) * 3) / 4 - I;
      }
      function u(C, A, M) {
        return ((A + M) * 3) / 4 - M;
      }
      function g(C) {
        var A,
          M = a(C),
          I = M[0],
          L = M[1],
          k = new n(u(C, I, L)),
          D = 0,
          z = L > 0 ? I - 4 : I,
          B;
        for (B = 0; B < z; B += 4)
          (A =
            (r[C.charCodeAt(B)] << 18) |
            (r[C.charCodeAt(B + 1)] << 12) |
            (r[C.charCodeAt(B + 2)] << 6) |
            r[C.charCodeAt(B + 3)]),
            (k[D++] = (A >> 16) & 255),
            (k[D++] = (A >> 8) & 255),
            (k[D++] = A & 255);
        return (
          L === 2 &&
            ((A = (r[C.charCodeAt(B)] << 2) | (r[C.charCodeAt(B + 1)] >> 4)),
            (k[D++] = A & 255)),
          L === 1 &&
            ((A =
              (r[C.charCodeAt(B)] << 10) |
              (r[C.charCodeAt(B + 1)] << 4) |
              (r[C.charCodeAt(B + 2)] >> 2)),
            (k[D++] = (A >> 8) & 255),
            (k[D++] = A & 255)),
          k
        );
      }
      function h(C) {
        return (
          t[(C >> 18) & 63] + t[(C >> 12) & 63] + t[(C >> 6) & 63] + t[C & 63]
        );
      }
      function v(C, A, M) {
        for (var I, L = [], k = A; k < M; k += 3)
          (I =
            ((C[k] << 16) & 16711680) +
            ((C[k + 1] << 8) & 65280) +
            (C[k + 2] & 255)),
            L.push(h(I));
        return L.join('');
      }
      function R(C) {
        for (
          var A, M = C.length, I = M % 3, L = [], k = 16383, D = 0, z = M - I;
          D < z;
          D += k
        )
          L.push(v(C, D, D + k > z ? z : D + k));
        return (
          I === 1
            ? ((A = C[M - 1]), L.push(t[A >> 2] + t[(A << 4) & 63] + '=='))
            : I === 2 &&
              ((A = (C[M - 2] << 8) + C[M - 1]),
              L.push(t[A >> 10] + t[(A >> 4) & 63] + t[(A << 2) & 63] + '=')),
          L.join('')
        );
      }
    }),
    Aa = li((e) => {
      (e.read = function (t, r, n, i, o) {
        var s,
          a,
          l = o * 8 - i - 1,
          u = (1 << l) - 1,
          g = u >> 1,
          h = -7,
          v = n ? o - 1 : 0,
          R = n ? -1 : 1,
          C = t[r + v];
        for (
          v += R, s = C & ((1 << -h) - 1), C >>= -h, h += l;
          h > 0;
          s = s * 256 + t[r + v], v += R, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + v], v += R, h -= 8
        );
        if (s === 0) s = 1 - g;
        else {
          if (s === u) return a ? NaN : (C ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, i)), (s = s - g);
        }
        return (C ? -1 : 1) * a * Math.pow(2, s - i);
      }),
        (e.write = function (t, r, n, i, o, s) {
          var a,
            l,
            u,
            g = s * 8 - o - 1,
            h = (1 << g) - 1,
            v = h >> 1,
            R = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            C = i ? 0 : s - 1,
            A = i ? 1 : -1,
            M = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((l = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  a + v >= 1 ? (r += R / u) : (r += R * Math.pow(2, 1 - v)),
                  r * u >= 2 && (a++, (u /= 2)),
                  a + v >= h
                    ? ((l = 0), (a = h))
                    : a + v >= 1
                      ? ((l = (r * u - 1) * Math.pow(2, o)), (a = a + v))
                      : ((l = r * Math.pow(2, v - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            t[n + C] = l & 255, C += A, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, g += o;
            g > 0;
            t[n + C] = a & 255, C += A, a /= 256, g -= 8
          );
          t[n + C - A] |= M * 128;
        });
    }),
    Zr = Ca(),
    et = Aa(),
    ii =
      typeof Symbol == 'function' && typeof Symbol.for == 'function'
        ? Symbol.for('nodejs.util.inspect.custom')
        : null;
  rt.Buffer = T;
  rt.SlowBuffer = Fa;
  rt.INSPECT_MAX_BYTES = 50;
  var rr = 2147483647;
  rt.kMaxLength = rr;
  T.TYPED_ARRAY_SUPPORT = Sa();
  !T.TYPED_ARRAY_SUPPORT &&
    typeof console < 'u' &&
    typeof console.error == 'function' &&
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
    );
  function Sa() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(T.prototype, 'parent', {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(T.prototype, 'offset', {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.byteOffset;
    },
  });
  function Re(e) {
    if (e > rr)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, T.prototype), t;
  }
  function T(e, t, r) {
    if (typeof e == 'number') {
      if (typeof t == 'string')
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return tn(e);
    }
    return ui(e, t, r);
  }
  T.poolSize = 8192;
  function ui(e, t, r) {
    if (typeof e == 'string') return ka(e, t);
    if (ArrayBuffer.isView(e)) return Oa(e);
    if (e == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof e,
      );
    if (
      he(e, ArrayBuffer) ||
      (e && he(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < 'u' &&
        (he(e, SharedArrayBuffer) || (e && he(e.buffer, SharedArrayBuffer))))
    )
      return pi(e, t, r);
    if (typeof e == 'number')
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return T.from(n, t, r);
    let i = Ma(e);
    if (i) return i;
    if (
      typeof Symbol < 'u' &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == 'function'
    )
      return T.from(e[Symbol.toPrimitive]('string'), t, r);
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof e,
    );
  }
  T.from = function (e, t, r) {
    return ui(e, t, r);
  };
  Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(T, Uint8Array);
  function ci(e) {
    if (typeof e != 'number')
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
  }
  function Ra(e, t, r) {
    return (
      ci(e),
      e <= 0
        ? Re(e)
        : t !== void 0
          ? typeof r == 'string'
            ? Re(e).fill(t, r)
            : Re(e).fill(t)
          : Re(e)
    );
  }
  T.alloc = function (e, t, r) {
    return Ra(e, t, r);
  };
  function tn(e) {
    return ci(e), Re(e < 0 ? 0 : rn(e) | 0);
  }
  T.allocUnsafe = function (e) {
    return tn(e);
  };
  T.allocUnsafeSlow = function (e) {
    return tn(e);
  };
  function ka(e, t) {
    if (((typeof t != 'string' || t === '') && (t = 'utf8'), !T.isEncoding(t)))
      throw new TypeError('Unknown encoding: ' + t);
    let r = di(e, t) | 0,
      n = Re(r),
      i = n.write(e, t);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function Xr(e) {
    let t = e.length < 0 ? 0 : rn(e.length) | 0,
      r = Re(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function Oa(e) {
    if (he(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return pi(t.buffer, t.byteOffset, t.byteLength);
    }
    return Xr(e);
  }
  function pi(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
          ? (n = new Uint8Array(e, t))
          : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, T.prototype),
      n
    );
  }
  function Ma(e) {
    if (T.isBuffer(e)) {
      let t = rn(e.length) | 0,
        r = Re(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != 'number' || on(e.length) ? Re(0) : Xr(e);
    if (e.type === 'Buffer' && Array.isArray(e.data)) return Xr(e.data);
  }
  function rn(e) {
    if (e >= rr)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          rr.toString(16) +
          ' bytes',
      );
    return e | 0;
  }
  function Fa(e) {
    return +e != e && (e = 0), T.alloc(+e);
  }
  T.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== T.prototype;
  };
  T.compare = function (e, t) {
    if (
      (he(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      he(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)),
      !T.isBuffer(e) || !T.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (e[i] !== t[i]) {
        (r = e[i]), (n = t[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  T.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return !0;
      default:
        return !1;
    }
  };
  T.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return T.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = T.allocUnsafe(t),
      i = 0;
    for (r = 0; r < e.length; ++r) {
      let o = e[r];
      if (he(o, Uint8Array))
        i + o.length > n.length
          ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i);
      else if (T.isBuffer(o)) o.copy(n, i);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      i += o.length;
    }
    return n;
  };
  function di(e, t) {
    if (T.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || he(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != 'string')
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return r;
        case 'utf8':
        case 'utf-8':
          return en(e).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return r * 2;
        case 'hex':
          return r >>> 1;
        case 'base64':
          return xi(e).length;
        default:
          if (i) return n ? -1 : en(e).length;
          (t = ('' + t).toLowerCase()), (i = !0);
      }
  }
  T.byteLength = di;
  function Ia(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return '';
    for (e || (e = 'utf8'); ; )
      switch (e) {
        case 'hex':
          return Va(this, t, r);
        case 'utf8':
        case 'utf-8':
          return mi(this, t, r);
        case 'ascii':
          return Ba(this, t, r);
        case 'latin1':
        case 'binary':
          return Ua(this, t, r);
        case 'base64':
          return $a(this, t, r);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Qa(this, t, r);
        default:
          if (n) throw new TypeError('Unknown encoding: ' + e);
          (e = (e + '').toLowerCase()), (n = !0);
      }
  }
  T.prototype._isBuffer = !0;
  function Qe(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  T.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    for (let t = 0; t < e; t += 2) Qe(this, t, t + 1);
    return this;
  };
  T.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    for (let t = 0; t < e; t += 4) Qe(this, t, t + 3), Qe(this, t + 1, t + 2);
    return this;
  };
  T.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    for (let t = 0; t < e; t += 8)
      Qe(this, t, t + 7),
        Qe(this, t + 1, t + 6),
        Qe(this, t + 2, t + 5),
        Qe(this, t + 3, t + 4);
    return this;
  };
  T.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ''
      : arguments.length === 0
        ? mi(this, 0, e)
        : Ia.apply(this, arguments);
  };
  T.prototype.toLocaleString = T.prototype.toString;
  T.prototype.equals = function (e) {
    if (!T.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
    return this === e ? !0 : T.compare(this, e) === 0;
  };
  T.prototype.inspect = function () {
    let e = '',
      t = rt.INSPECT_MAX_BYTES;
    return (
      (e = this.toString('hex', 0, t)
        .replace(/(.{2})/g, '$1 ')
        .trim()),
      this.length > t && (e += ' ... '),
      '<Buffer ' + e + '>'
    );
  };
  ii && (T.prototype[ii] = T.prototype.inspect);
  T.prototype.compare = function (e, t, r, n, i) {
    if (
      (he(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      !T.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      i === void 0 && (i = this.length),
      t < 0 || r > e.length || n < 0 || i > this.length)
    )
      throw new RangeError('out of range index');
    if (n >= i && t >= r) return 0;
    if (n >= i) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
    let o = i - n,
      s = r - t,
      a = Math.min(o, s),
      l = this.slice(n, i),
      u = e.slice(t, r);
    for (let g = 0; g < a; ++g)
      if (l[g] !== u[g]) {
        (o = l[g]), (s = u[g]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  };
  function fi(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (
      (typeof r == 'string'
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      on(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (i) r = 0;
      else return -1;
    if ((typeof t == 'string' && (t = T.from(t, n)), T.isBuffer(t)))
      return t.length === 0 ? -1 : oi(e, t, r, n, i);
    if (typeof t == 'number')
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == 'function'
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : oi(e, [t], r, n, i)
      );
    throw new TypeError('val must be string, number or Buffer');
  }
  function oi(e, t, r, n, i) {
    let o = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function l(g, h) {
      return o === 1 ? g[h] : g.readUInt16BE(h * o);
    }
    let u;
    if (i) {
      let g = -1;
      for (u = r; u < s; u++)
        if (l(e, u) === l(t, g === -1 ? 0 : u - g)) {
          if ((g === -1 && (g = u), u - g + 1 === a)) return g * o;
        } else g !== -1 && (u -= u - g), (g = -1);
    } else
      for (r + a > s && (r = s - a), u = r; u >= 0; u--) {
        let g = !0;
        for (let h = 0; h < a; h++)
          if (l(e, u + h) !== l(t, h)) {
            g = !1;
            break;
          }
        if (g) return u;
      }
    return -1;
  }
  T.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  T.prototype.indexOf = function (e, t, r) {
    return fi(this, e, t, r, !0);
  };
  T.prototype.lastIndexOf = function (e, t, r) {
    return fi(this, e, t, r, !1);
  };
  function _a(e, t, r, n) {
    r = Number(r) || 0;
    let i = e.length - r;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (on(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function La(e, t, r, n) {
    return nr(en(t, e.length - r), e, r, n);
  }
  function Na(e, t, r, n) {
    return nr(Ka(t), e, r, n);
  }
  function Da(e, t, r, n) {
    return nr(xi(t), e, r, n);
  }
  function qa(e, t, r, n) {
    return nr(Ha(t, e.length - r), e, r, n);
  }
  T.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = 'utf8'), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == 'string')
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = 'utf8'))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported',
      );
    let i = this.length - t;
    if (
      ((r === void 0 || r > i) && (r = i),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError('Attempt to write outside buffer bounds');
    n || (n = 'utf8');
    let o = !1;
    for (;;)
      switch (n) {
        case 'hex':
          return _a(this, e, t, r);
        case 'utf8':
        case 'utf-8':
          return La(this, e, t, r);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return Na(this, e, t, r);
        case 'base64':
          return Da(this, e, t, r);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return qa(this, e, t, r);
        default:
          if (o) throw new TypeError('Unknown encoding: ' + n);
          (n = ('' + n).toLowerCase()), (o = !0);
      }
  };
  T.prototype.toJSON = function () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function $a(e, t, r) {
    return t === 0 && r === e.length
      ? Zr.fromByteArray(e)
      : Zr.fromByteArray(e.slice(t, r));
  }
  function mi(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      i = t;
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + a <= r) {
        let l, u, g, h;
        switch (a) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (l = e[i + 1]),
              (l & 192) === 128 &&
                ((h = ((o & 31) << 6) | (l & 63)), h > 127 && (s = h));
            break;
          case 3:
            (l = e[i + 1]),
              (u = e[i + 2]),
              (l & 192) === 128 &&
                (u & 192) === 128 &&
                ((h = ((o & 15) << 12) | ((l & 63) << 6) | (u & 63)),
                h > 2047 && (h < 55296 || h > 57343) && (s = h));
            break;
          case 4:
            (l = e[i + 1]),
              (u = e[i + 2]),
              (g = e[i + 3]),
              (l & 192) === 128 &&
                (u & 192) === 128 &&
                (g & 192) === 128 &&
                ((h =
                  ((o & 15) << 18) |
                  ((l & 63) << 12) |
                  ((u & 63) << 6) |
                  (g & 63)),
                h > 65535 && h < 1114112 && (s = h));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += a);
    }
    return ja(n);
  }
  var si = 4096;
  function ja(e) {
    let t = e.length;
    if (t <= si) return String.fromCharCode.apply(String, e);
    let r = '',
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += si)));
    return r;
  }
  function Ba(e, t, r) {
    let n = '';
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function Ua(e, t, r) {
    let n = '';
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function Va(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let i = '';
    for (let o = t; o < r; ++o) i += za[e[o]];
    return i;
  }
  function Qa(e, t, r) {
    let n = e.slice(t, r),
      i = '';
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  T.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, T.prototype), n;
  };
  function W(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint');
    if (e + t > r)
      throw new RangeError('Trying to access beyond buffer length');
  }
  T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return n;
  };
  T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e + --t],
      i = 1;
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
    return n;
  };
  T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || W(e, 1, this.length), this[e];
  };
  T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  T.prototype.readBigUInt64LE = Le(function (e) {
    (e = e >>> 0), tt(e, 'offset');
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Tt(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  });
  T.prototype.readBigUInt64BE = Le(function (e) {
    (e = e >>> 0), tt(e, 'offset');
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Tt(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  });
  T.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
  };
  T.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = t,
      i = 1,
      o = this[e + --n];
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
  };
  T.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  T.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  T.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  T.prototype.readBigInt64LE = Le(function (e) {
    (e = e >>> 0), tt(e, 'offset');
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Tt(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  T.prototype.readBigInt64BE = Le(function (e) {
    (e = e >>> 0), tt(e, 'offset');
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Tt(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  T.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), et.read(this, e, !0, 23, 4)
    );
  };
  T.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), et.read(this, e, !1, 23, 4)
    );
  };
  T.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), et.read(this, e, !0, 52, 8)
    );
  };
  T.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), et.read(this, e, !1, 52, 8)
    );
  };
  function ie(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError('Index out of range');
  }
  T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      ie(this, e, t, r, s, 0);
    }
    let i = 1,
      o = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      ie(this, e, t, r, s, 0);
    }
    let i = r - 1,
      o = 1;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function gi(e, t, r, n, i) {
    Ei(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function hi(e, t, r, n, i) {
    Ei(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r + 7] = o),
      (o = o >> 8),
      (e[r + 6] = o),
      (o = o >> 8),
      (e[r + 5] = o),
      (o = o >> 8),
      (e[r + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  T.prototype.writeBigUInt64LE = Le(function (e, t = 0) {
    return gi(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  T.prototype.writeBigUInt64BE = Le(function (e, t = 0) {
    return hi(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  T.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      ie(this, e, t, r, a - 1, -a);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      ie(this, e, t, r, a - 1, -a);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  T.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || ie(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  T.prototype.writeBigInt64LE = Le(function (e, t = 0) {
    return gi(
      this,
      e,
      t,
      -BigInt('0x8000000000000000'),
      BigInt('0x7fffffffffffffff'),
    );
  });
  T.prototype.writeBigInt64BE = Le(function (e, t = 0) {
    return hi(
      this,
      e,
      t,
      -BigInt('0x8000000000000000'),
      BigInt('0x7fffffffffffffff'),
    );
  });
  function yi(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError('Index out of range');
    if (r < 0) throw new RangeError('Index out of range');
  }
  function wi(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || yi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      et.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  T.prototype.writeFloatLE = function (e, t, r) {
    return wi(this, e, t, !0, r);
  };
  T.prototype.writeFloatBE = function (e, t, r) {
    return wi(this, e, t, !1, r);
  };
  function bi(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || yi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      et.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  T.prototype.writeDoubleLE = function (e, t, r) {
    return bi(this, e, t, !0, r);
  };
  T.prototype.writeDoubleBE = function (e, t, r) {
    return bi(this, e, t, !1, r);
  };
  T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e)) throw new TypeError('argument should be a Buffer');
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError('targetStart out of bounds');
    if (r < 0 || r >= this.length) throw new RangeError('Index out of range');
    if (n < 0) throw new RangeError('sourceEnd out of bounds');
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let i = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == 'function'
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      i
    );
  };
  T.prototype.fill = function (e, t, r, n) {
    if (typeof e == 'string') {
      if (
        (typeof t == 'string'
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == 'string' && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != 'string')
      )
        throw new TypeError('encoding must be a string');
      if (typeof n == 'string' && !T.isEncoding(n))
        throw new TypeError('Unknown encoding: ' + n);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((n === 'utf8' && o < 128) || n === 'latin1') && (e = o);
      }
    } else
      typeof e == 'number'
        ? (e = e & 255)
        : typeof e == 'boolean' && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError('Out of range index');
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let i;
    if (typeof e == 'number') for (i = t; i < r; ++i) this[i] = e;
    else {
      let o = T.isBuffer(e) ? e : T.from(e, n),
        s = o.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
    }
    return this;
  };
  var Xe = {};
  function nn(e, t, r) {
    Xe[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, 'message', {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  nn(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds';
    },
    RangeError,
  );
  nn(
    'ERR_INVALID_ARG_TYPE',
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError,
  );
  nn(
    'ERR_OUT_OF_RANGE',
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = ai(String(r)))
          : typeof r == 'bigint' &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = ai(i)),
            (i += 'n')),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
  function ai(e) {
    let t = '',
      r = e.length,
      n = e[0] === '-' ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function Ga(e, t, r) {
    tt(t, 'offset'),
      (e[t] === void 0 || e[t + r] === void 0) && Tt(t, e.length - (r + 1));
  }
  function Ei(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == 'bigint' ? 'n' : '',
        a;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${
                (o + 1) * 8 - 1
              }${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new Xe.ERR_OUT_OF_RANGE('value', a, e))
      );
    }
    Ga(n, i, o);
  }
  function tt(e, t) {
    if (typeof e != 'number') throw new Xe.ERR_INVALID_ARG_TYPE(t, 'number', e);
  }
  function Tt(e, t, r) {
    throw Math.floor(e) !== e
      ? (tt(e, r), new Xe.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
      : t < 0
        ? new Xe.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Xe.ERR_OUT_OF_RANGE(
            r || 'offset',
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          );
  }
  var Ja = /[^+/0-9A-Za-z-_]/g;
  function Wa(e) {
    if (((e = e.split('=')[0]), (e = e.trim().replace(Ja, '')), e.length < 2))
      return '';
    for (; e.length % 4 !== 0; ) e = e + '=';
    return e;
  }
  function en(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      i = null,
      o = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!i) {
          if (r > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
          continue;
        }
        r = (((i - 55296) << 10) | (r - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break;
        o.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        o.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128,
        );
      } else throw new Error('Invalid code point');
    }
    return o;
  }
  function Ka(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function Ha(e, t) {
    let r,
      n,
      i,
      o = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
    return o;
  }
  function xi(e) {
    return Zr.toByteArray(Wa(e));
  }
  function nr(e, t, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function he(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function on(e) {
    return e !== e;
  }
  var za = (function () {
    let e = '0123456789abcdef',
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
    }
    return t;
  })();
  function Le(e) {
    return typeof BigInt > 'u' ? Ya : e;
  }
  function Ya() {
    throw new Error('BigInt not supported');
  }
});
var w,
  m = ge(() => {
    'use strict';
    w = Se(Pi());
  });
function bl() {
  return !1;
}
function Li() {
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
function El() {
  return Li();
}
function xl() {
  return [];
}
function Pl(e) {
  e(null, []);
}
function vl() {
  return '';
}
function Tl() {
  return '';
}
function Cl() {}
function Al() {}
function Sl() {}
function Rl() {}
function kl() {}
function Ol() {}
var Ml,
  Fl,
  or,
  cn = ge(() => {
    'use strict';
    m();
    c();
    p();
    d();
    f();
    (Ml = {}),
      (Fl = {
        existsSync: bl,
        lstatSync: Li,
        statSync: El,
        readdirSync: xl,
        readdir: Pl,
        readlinkSync: vl,
        realpathSync: Tl,
        chmodSync: Cl,
        renameSync: Al,
        mkdirSync: Sl,
        rmdirSync: Rl,
        rmSync: kl,
        unlinkSync: Ol,
        promises: Ml,
      }),
      (or = Fl);
  });
function Il(...e) {
  return e.join('/');
}
function _l(...e) {
  return e.join('/');
}
function Ll(e) {
  let t = Ni(e),
    r = Di(e),
    [n, i] = t.split('.');
  return { root: '/', dir: r, base: t, ext: i, name: n };
}
function Ni(e) {
  let t = e.split('/');
  return t[t.length - 1];
}
function Di(e) {
  return e.split('/').slice(0, -1).join('/');
}
var qi,
  Nl,
  Dl,
  Oe,
  dn = ge(() => {
    'use strict';
    m();
    c();
    p();
    d();
    f();
    (qi = '/'),
      (Nl = { sep: qi }),
      (Dl = {
        basename: Ni,
        dirname: Di,
        join: _l,
        parse: Ll,
        posix: Nl,
        resolve: Il,
        sep: qi,
      }),
      (Oe = Dl);
  });
var $i = Ae((Ff, ql) => {
  ql.exports = {
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
var Ui = Ae((Gf, Bi) => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
  Bi.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var Wi = Ae((um, Ji) => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
  Ji.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: ' ', includeEmptyLines: !1, ...r }), typeof e != 'string')
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != 'number')
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != 'string')
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var zi = Ae((xm, Hi) => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
  Hi.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|');
    return new RegExp(t, e ? void 0 : 'g');
  };
});
var yn = Ae((Sm, Yi) => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
  var Gl = zi();
  Yi.exports = (e) => (typeof e == 'string' ? e.replace(Gl(), '') : e);
});
var Zi = Ae((Zm, ar) => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
  ar.exports = (e = {}) => {
    let t;
    if (e.repoUrl) t = e.repoUrl;
    else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
    else
      throw new Error(
        'You need to specify either the `repoUrl` option or both the `user` and `repo` options',
      );
    let r = new URL(`${t}/issues/new`),
      n = [
        'body',
        'title',
        'labels',
        'template',
        'milestone',
        'assignee',
        'projects',
      ];
    for (let i of n) {
      let o = e[i];
      if (o !== void 0) {
        if (i === 'labels' || i === 'projects') {
          if (!Array.isArray(o))
            throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(',');
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  ar.exports.default = ar.exports;
});
var Sn = Ae((xb, Po) => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
  Po.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        l,
        u,
        g,
        h,
        v,
        R,
        C,
        A,
        M,
        I,
        L,
        k,
        D = [];
      for (l = 0; l < i; l++) D.push(l + 1), D.push(t.charCodeAt(s + l));
      for (var z = D.length - 1; a < o - 3; )
        for (
          M = r.charCodeAt(s + (u = a)),
            I = r.charCodeAt(s + (g = a + 1)),
            L = r.charCodeAt(s + (h = a + 2)),
            k = r.charCodeAt(s + (v = a + 3)),
            R = a += 4,
            l = 0;
          l < z;
          l += 2
        )
          (C = D[l]),
            (A = D[l + 1]),
            (u = e(C, u, g, M, A)),
            (g = e(u, g, h, I, A)),
            (h = e(g, h, v, L, A)),
            (R = e(h, v, R, k, A)),
            (D[l] = R),
            (v = h),
            (h = g),
            (g = u),
            (u = C);
      for (; a < o; )
        for (M = r.charCodeAt(s + (u = a)), R = ++a, l = 0; l < z; l += 2)
          (C = D[l]), (D[l] = R = e(C, u, R, M, D[l + 1])), (u = C);
      return R;
    };
  })();
});
var So = ge(() => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
});
var Ro = ge(() => {
  'use strict';
  m();
  c();
  p();
  d();
  f();
});
var Zo = Ae((VP, Dc) => {
  Dc.exports = {
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
var Nr,
  Xo = ge(() => {
    'use strict';
    m();
    c();
    p();
    d();
    f();
    Nr = class {
      events = {};
      on(t, r) {
        return (
          this.events[t] || (this.events[t] = []), this.events[t].push(r), this
        );
      }
      emit(t, ...r) {
        return this.events[t]
          ? (this.events[t].forEach((n) => {
              n(...r);
            }),
            !0)
          : !1;
      }
    };
  });
var rd = {};
Ze(rd, {
  DMMF: () => Dt,
  Debug: () => K,
  Decimal: () => be,
  Extensions: () => sn,
  MetricsClient: () => wt,
  PrismaClientInitializationError: () => V,
  PrismaClientKnownRequestError: () => oe,
  PrismaClientRustPanicError: () => ue,
  PrismaClientUnknownRequestError: () => G,
  PrismaClientValidationError: () => ee,
  Public: () => an,
  Sql: () => ae,
  createParam: () => Qo,
  defineDmmfProperty: () => zo,
  deserializeJsonResponse: () => at,
  deserializeRawResult: () => Hr,
  dmmfToRuntimeDataModel: () => yo,
  empty: () => ts,
  getPrismaClient: () => ha,
  getRuntime: () => Fs,
  join: () => es,
  makeStrictEnum: () => ya,
  makeTypedQueryFactory: () => Yo,
  objectEnumValues: () => Ar,
  raw: () => Nn,
  serializeJsonQuery: () => Ir,
  skip: () => Fr,
  sqltag: () => Dn,
  warnEnvConflicts: () => void 0,
  warnOnce: () => _t,
});
module.exports = Ta(rd);
m();
c();
p();
d();
f();
var sn = {};
Ze(sn, { defineExtension: () => vi, getExtensionContext: () => Ti });
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
function vi(e) {
  return typeof e == 'function' ? e : (t) => t.$extends(e);
}
m();
c();
p();
d();
f();
function Ti(e) {
  return e;
}
var an = {};
Ze(an, { validator: () => Ci });
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
function Ci(...e) {
  return (t) => t;
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var ir = {};
Ze(ir, {
  $: () => Oi,
  bgBlack: () => al,
  bgBlue: () => pl,
  bgCyan: () => fl,
  bgGreen: () => ul,
  bgMagenta: () => dl,
  bgRed: () => ll,
  bgWhite: () => ml,
  bgYellow: () => cl,
  black: () => nl,
  blue: () => Je,
  bold: () => pe,
  cyan: () => ke,
  dim: () => Ct,
  gray: () => kt,
  green: () => St,
  grey: () => sl,
  hidden: () => tl,
  inverse: () => el,
  italic: () => Xa,
  magenta: () => il,
  red: () => Ge,
  reset: () => Za,
  strikethrough: () => rl,
  underline: () => At,
  white: () => ol,
  yellow: () => Rt,
});
m();
c();
p();
d();
f();
var ln,
  Ai,
  Si,
  Ri,
  ki = !0;
typeof y < 'u' &&
  (({
    FORCE_COLOR: ln,
    NODE_DISABLE_COLORS: Ai,
    NO_COLOR: Si,
    TERM: Ri,
  } = y.env || {}),
  (ki = y.stdout && y.stdout.isTTY));
var Oi = {
  enabled:
    !Ai && Si == null && Ri !== 'dumb' && ((ln != null && ln !== '0') || ki),
};
function U(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !Oi.enabled || o == null
      ? o
      : n + (~('' + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var Za = U(0, 0),
  pe = U(1, 22),
  Ct = U(2, 22),
  Xa = U(3, 23),
  At = U(4, 24),
  el = U(7, 27),
  tl = U(8, 28),
  rl = U(9, 29),
  nl = U(30, 39),
  Ge = U(31, 39),
  St = U(32, 39),
  Rt = U(33, 39),
  Je = U(34, 39),
  il = U(35, 39),
  ke = U(36, 39),
  ol = U(37, 39),
  kt = U(90, 39),
  sl = U(90, 39),
  al = U(40, 49),
  ll = U(41, 49),
  ul = U(42, 49),
  cl = U(43, 49),
  pl = U(44, 49),
  dl = U(45, 49),
  fl = U(46, 49),
  ml = U(47, 49);
m();
c();
p();
d();
f();
var gl = 100,
  Mi = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red'],
  Ot = [],
  Fi = Date.now(),
  hl = 0,
  un = typeof y < 'u' ? y.env : {};
globalThis.DEBUG ??= un.DEBUG ?? '';
globalThis.DEBUG_COLORS ??= un.DEBUG_COLORS ? un.DEBUG_COLORS === 'true' : !0;
var Mt = {
  enable(e) {
    typeof e == 'string' && (globalThis.DEBUG = e);
  },
  disable() {
    let e = globalThis.DEBUG;
    return (globalThis.DEBUG = ''), e;
  },
  enabled(e) {
    let t = globalThis.DEBUG.split(',').map((i) =>
        i.replace(/[.+?^${}()|[\]\\]/g, '\\$&'),
      ),
      r = t.some((i) =>
        i === '' || i[0] === '-'
          ? !1
          : e.match(RegExp(i.split('*').join('.*') + '$')),
      ),
      n = t.some((i) =>
        i === '' || i[0] !== '-'
          ? !1
          : e.match(RegExp(i.slice(1).split('*').join('.*') + '$')),
      );
    return r && !n;
  },
  log: (...e) => {
    let [t, r, ...n] = e;
    (console.warn ?? console.log)(`${t} ${r}`, ...n);
  },
  formatters: {},
};
function yl(e) {
  let t = {
      color: Mi[hl++ % Mi.length],
      enabled: Mt.enabled(e),
      namespace: e,
      log: Mt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (
        (n.length !== 0 && Ot.push([o, ...n]),
        Ot.length > gl && Ot.shift(),
        Mt.enabled(o) || i)
      ) {
        let l = n.map((g) => (typeof g == 'string' ? g : wl(g))),
          u = `+${Date.now() - Fi}ms`;
        (Fi = Date.now()),
          globalThis.DEBUG_COLORS
            ? a(ir[s](pe(o)), ...l, ir[s](u))
            : a(o, ...l, u);
      }
    };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) });
}
var K = new Proxy(yl, { get: (e, t) => Mt[t], set: (e, t, r) => (Mt[t] = r) });
function wl(e, t = 2) {
  let r = new Set();
  return JSON.stringify(
    e,
    (n, i) => {
      if (typeof i == 'object' && i !== null) {
        if (r.has(i)) return '[Circular *]';
        r.add(i);
      } else if (typeof i == 'bigint') return i.toString();
      return i;
    },
    t,
  );
}
function Ii(e = 7500) {
  let t = Ot.map(
    ([r, ...n]) =>
      `${r} ${n
        .map((i) => (typeof i == 'string' ? i : JSON.stringify(i)))
        .join(' ')}`,
  ).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function _i() {
  Ot.length = 0;
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var pn = [
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
m();
c();
p();
d();
f();
var $l = $i(),
  fn = $l.version;
m();
c();
p();
d();
f();
var ji = 'library';
function nt(e) {
  let t = jl();
  return (
    t ||
    (e?.config.engineType === 'library'
      ? 'library'
      : e?.config.engineType === 'binary'
        ? 'binary'
        : e?.config.engineType === 'client'
          ? 'client'
          : ji)
  );
}
function jl() {
  let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === 'library'
    ? 'library'
    : e === 'binary'
      ? 'binary'
      : e === 'client'
        ? 'client'
        : void 0;
}
m();
c();
p();
d();
f();
var Vi = Se(Ui(), 1);
function mn(e) {
  let t = (0, Vi.default)(e);
  if (t === 0) return e;
  let r = new RegExp(`^[ \\t]{${t}}`, 'gm');
  return e.replace(r, '');
}
m();
c();
p();
d();
f();
var Qi = 'prisma+postgres',
  Gi = `${Qi}:`;
function gn(e) {
  return e?.startsWith(`${Gi}//`) ?? !1;
}
var It = {};
Ze(It, {
  error: () => Vl,
  info: () => Ul,
  log: () => Bl,
  query: () => Ql,
  should: () => Ki,
  tags: () => Ft,
  warn: () => hn,
});
m();
c();
p();
d();
f();
var Ft = {
    error: Ge('prisma:error'),
    warn: Rt('prisma:warn'),
    info: ke('prisma:info'),
    query: Je('prisma:query'),
  },
  Ki = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
function Bl(...e) {
  console.log(...e);
}
function hn(e, ...t) {
  Ki.warn() && console.warn(`${Ft.warn} ${e}`, ...t);
}
function Ul(e, ...t) {
  console.info(`${Ft.info} ${e}`, ...t);
}
function Vl(e, ...t) {
  console.error(`${Ft.error} ${e}`, ...t);
}
function Ql(e, ...t) {
  console.log(`${Ft.query} ${e}`, ...t);
}
m();
c();
p();
d();
f();
function sr(e, t) {
  if (!e)
    throw new Error(
      `${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`,
    );
}
m();
c();
p();
d();
f();
function Me(e, t) {
  throw new Error(t);
}
m();
c();
p();
d();
f();
dn();
function wn(e) {
  return Oe.sep === Oe.posix.sep ? e : e.split(Oe.sep).join(Oe.posix.sep);
}
m();
c();
p();
d();
f();
function bn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
m();
c();
p();
d();
f();
function it(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
m();
c();
p();
d();
f();
function En(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
m();
c();
p();
d();
f();
function le(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
m();
c();
p();
d();
f();
var Xi = new Set(),
  _t = (e, t, ...r) => {
    Xi.has(e) || (Xi.add(e), hn(t, ...r));
  };
var V = class e extends Error {
  clientVersion;
  errorCode;
  retryable;
  constructor(t, r, n) {
    super(t),
      (this.name = 'PrismaClientInitializationError'),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientInitializationError';
  }
};
le(V, 'PrismaClientInitializationError');
m();
c();
p();
d();
f();
var oe = class extends Error {
  code;
  meta;
  clientVersion;
  batchRequestIdx;
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t),
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
le(oe, 'PrismaClientKnownRequestError');
m();
c();
p();
d();
f();
var ue = class extends Error {
  clientVersion;
  constructor(t, r) {
    super(t),
      (this.name = 'PrismaClientRustPanicError'),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientRustPanicError';
  }
};
le(ue, 'PrismaClientRustPanicError');
m();
c();
p();
d();
f();
var G = class extends Error {
  clientVersion;
  batchRequestIdx;
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
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
le(G, 'PrismaClientUnknownRequestError');
m();
c();
p();
d();
f();
var ee = class extends Error {
  name = 'PrismaClientValidationError';
  clientVersion;
  constructor(t, { clientVersion: r }) {
    super(t), (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientValidationError';
  }
};
le(ee, 'PrismaClientValidationError');
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var ot = 9e15,
  $e = 1e9,
  xn = '0123456789abcdef',
  cr =
    '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
  pr =
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
  Pn = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -ot,
    maxE: ot,
    crypto: !1,
  },
  io,
  Fe,
  _ = !0,
  fr = '[DecimalError] ',
  qe = fr + 'Invalid argument: ',
  oo = fr + 'Precision limit exceeded',
  so = fr + 'crypto unavailable',
  ao = '[object Decimal]',
  te = Math.floor,
  J = Math.pow,
  Jl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Wl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Kl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  lo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  de = 1e7,
  F = 7,
  Hl = 9007199254740991,
  zl = cr.length - 1,
  vn = pr.length - 1,
  S = { toStringTag: ao };
S.absoluteValue = S.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), O(e);
};
S.ceil = function () {
  return O(new this.constructor(this), this.e + 1, 2);
};
S.clampedTo = S.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(qe + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
S.comparedTo = S.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    l = o.s,
    u = e.s;
  if (!s || !a)
    return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
};
S.cosine = S.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + F),
        (n.rounding = 1),
        (r = Yl(n, mo(n, r))),
        (n.precision = e),
        (n.rounding = t),
        O(Fe == 2 || Fe == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
S.cubeRoot = S.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g = this,
    h = g.constructor;
  if (!g.isFinite() || g.isZero()) return new h(g);
  for (
    _ = !1,
      o = g.s * J(g.s * g, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = Y(g.d)),
          (e = g.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? '0' : '00'),
          (o = J(r, 1 / 3)),
          (e = te((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = '5e' + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf('e') + 1) + e)),
          (n = new h(r)),
          (n.s = g.s))
        : (n = new h(o.toString())),
      s = (e = h.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (u = l.plus(g)),
      (n = j(u.plus(g).times(a), u.plus(l), s + 2, 1)),
      Y(a.d).slice(0, s) === (r = Y(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == '9999' || (!i && r == '4999'))) {
        if (!i && (O(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == '5')) &&
          (O(n, e + 1, 1), (t = !n.times(n).times(n).eq(g)));
        break;
      }
  return (_ = !0), O(n, e, h.rounding, t);
};
S.decimalPlaces = S.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - te(this.e / F)) * F), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
S.dividedBy = S.div = function (e) {
  return j(this, new this.constructor(e));
};
S.dividedToIntegerBy = S.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return O(j(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
S.equals = S.eq = function (e) {
  return this.cmp(e) === 0;
};
S.floor = function () {
  return O(new this.constructor(this), this.e + 1, 3);
};
S.greaterThan = S.gt = function (e) {
  return this.cmp(e) > 0;
};
S.greaterThanOrEqualTo = S.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
S.hyperbolicCosine = S.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / gr(4, e)).toString()))
      : ((e = 16), (t = '2.3283064365386962890625e-10')),
    (o = st(s, 1, o.times(t), new s(1), !0));
  for (var l, u = e, g = new s(8); u--; )
    (l = o.times(o)), (o = a.minus(l.times(g.minus(l.times(g)))));
  return O(o, (s.precision = r), (s.rounding = n), !0);
};
S.hyperbolicSine = S.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = st(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / gr(5, e))),
      (i = st(o, 2, i, i, !0));
    for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(u)))));
  }
  return (o.precision = t), (o.rounding = r), O(i, t, r, !0);
};
S.hyperbolicTangent = S.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        j(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
S.inverseCosine = S.acos = function () {
  var e = this,
    t = e.constructor,
    r = e.abs().cmp(1),
    n = t.precision,
    i = t.rounding;
  return r !== -1
    ? r === 0
      ? e.isNeg()
        ? ye(t, n, i)
        : new t(0)
      : new t(NaN)
    : e.isZero()
      ? ye(t, n + 4, i).times(0.5)
      : ((t.precision = n + 6),
        (t.rounding = 1),
        (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
        (t.precision = n),
        (t.rounding = i),
        e.times(2));
};
S.inverseHyperbolicCosine = S.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (_ = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (_ = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
S.inverseHyperbolicSine = S.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (_ = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (_ = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
S.inverseHyperbolicTangent = S.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? O(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = j(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
S.inverseSine = S.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = ye(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
S.inverseTangent = S.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    g = u.constructor,
    h = g.precision,
    v = g.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new g(u);
    if (u.abs().eq(1) && h + 4 <= vn)
      return (s = ye(g, h + 4, v).times(0.25)), (s.s = u.s), s;
  } else {
    if (!u.s) return new g(NaN);
    if (h + 4 <= vn) return (s = ye(g, h + 4, v).times(0.5)), (s.s = u.s), s;
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / F + 2) | 0),
      e = r;
    e;
    --e
  )
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (
    _ = !1, t = Math.ceil(a / F), n = 1, l = u.times(u), s = new g(u), i = u;
    e !== -1;

  )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (_ = !0),
    O(s, (g.precision = h), (g.rounding = v), !0)
  );
};
S.isFinite = function () {
  return !!this.d;
};
S.isInteger = S.isInt = function () {
  return !!this.d && te(this.e / F) > this.d.length - 2;
};
S.isNaN = function () {
  return !this.s;
};
S.isNegative = S.isNeg = function () {
  return this.s < 0;
};
S.isPositive = S.isPos = function () {
  return this.s > 0;
};
S.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
S.lessThan = S.lt = function (e) {
  return this.cmp(e) < 0;
};
S.lessThanOrEqualTo = S.lte = function (e) {
  return this.cmp(e) < 1;
};
S.logarithm = S.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    g = u.constructor,
    h = g.precision,
    v = g.rounding,
    R = 5;
  if (e == null) (e = new g(10)), (t = !0);
  else {
    if (((e = new g(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new g(NaN);
    t = e.eq(10);
  }
  if (((r = u.d), u.s < 0 || !r || !r[0] || u.eq(1)))
    return new g(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((_ = !1),
    (a = h + R),
    (s = De(u, a)),
    (n = t ? dr(g, a + 10) : De(e, a)),
    (l = j(s, n, a, 1)),
    Lt(l.d, (i = h), v))
  )
    do
      if (
        ((a += 10),
        (s = De(u, a)),
        (n = t ? dr(g, a + 10) : De(e, a)),
        (l = j(s, n, a, 1)),
        !o)
      ) {
        +Y(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = O(l, h + 1, 0));
        break;
      }
    while (Lt(l.d, (i += 10), v));
  return (_ = !0), O(l, h, v);
};
S.minus = S.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = this,
    C = R.constructor;
  if (((e = new C(e)), !R.d || !e.d))
    return (
      !R.s || !e.s
        ? (e = new C(NaN))
        : R.d
          ? (e.s = -e.s)
          : (e = new C(e.d || R.s !== e.s ? R : NaN)),
      e
    );
  if (R.s != e.s) return (e.s = -e.s), R.plus(e);
  if (
    ((u = R.d), (v = e.d), (a = C.precision), (l = C.rounding), !u[0] || !v[0])
  ) {
    if (v[0]) e.s = -e.s;
    else if (u[0]) e = new C(R);
    else return new C(l === 3 ? -0 : 0);
    return _ ? O(e, a, l) : e;
  }
  if (((r = te(e.e / F)), (g = te(R.e / F)), (u = u.slice()), (o = g - r), o)) {
    for (
      h = o < 0,
        h
          ? ((t = u), (o = -o), (s = v.length))
          : ((t = v), (r = g), (s = u.length)),
        n = Math.max(Math.ceil(a / F), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = u.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (u[n] != v[n]) {
        h = u[n] < v[n];
        break;
      }
    o = 0;
  }
  for (
    h && ((t = u), (u = v), (v = t), (e.s = -e.s)),
      s = u.length,
      n = v.length - s;
    n > 0;
    --n
  )
    u[s++] = 0;
  for (n = v.length; n > o; ) {
    if (u[--n] < v[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = de - 1;
      --u[i], (u[n] += de);
    }
    u[n] -= v[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0]
    ? ((e.d = u), (e.e = mr(u, r)), _ ? O(e, a, l) : e)
    : new C(l === 3 ? -0 : 0);
};
S.modulo = S.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? O(new n(r), n.precision, n.rounding)
        : ((_ = !1),
          n.modulo == 9
            ? ((t = j(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = j(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (_ = !0),
          r.minus(t))
  );
};
S.naturalExponential = S.exp = function () {
  return Tn(this);
};
S.naturalLogarithm = S.ln = function () {
  return De(this);
};
S.negated = S.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), O(e);
};
S.plus = S.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h = this,
    v = h.constructor;
  if (((e = new v(e)), !h.d || !e.d))
    return (
      !h.s || !e.s
        ? (e = new v(NaN))
        : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)),
      e
    );
  if (h.s != e.s) return (e.s = -e.s), h.minus(e);
  if (
    ((u = h.d), (g = e.d), (a = v.precision), (l = v.rounding), !u[0] || !g[0])
  )
    return g[0] || (e = new v(h)), _ ? O(e, a, l) : e;
  if (((o = te(h.e / F)), (n = te(e.e / F)), (u = u.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = u), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = u.length)),
        o = Math.ceil(a / F),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = u.length,
      i = g.length,
      s - i < 0 && ((i = s), (r = g), (g = u), (u = r)),
      t = 0;
    i;

  )
    (t = ((u[--i] = u[i] + g[i] + t) / de) | 0), (u[i] %= de);
  for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return (e.d = u), (e.e = mr(u, n)), _ ? O(e, a, l) : e;
};
S.precision = S.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(qe + e);
  return (
    r.d ? ((t = uo(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
S.round = function () {
  var e = this,
    t = e.constructor;
  return O(new t(e), e.e + 1, t.rounding);
};
S.sine = S.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + F),
        (n.rounding = 1),
        (r = Xl(n, mo(n, r))),
        (n.precision = e),
        (n.rounding = t),
        O(Fe > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
S.squareRoot = S.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    l = s.e,
    u = s.s,
    g = s.constructor;
  if (u !== 1 || !a || !a[0])
    return new g(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    _ = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((t = Y(a)),
          (t.length + l) % 2 == 0 && (t += '0'),
          (u = Math.sqrt(t)),
          (l = te((l + 1) / 2) - (l < 0 || l % 2)),
          u == 1 / 0
            ? (t = '5e' + l)
            : ((t = u.toExponential()),
              (t = t.slice(0, t.indexOf('e') + 1) + l)),
          (n = new g(t)))
        : (n = new g(u.toString())),
      r = (l = g.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(j(s, o, r + 2, 1)).times(0.5)),
      Y(o.d).slice(0, r) === (t = Y(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == '9999' || (!i && t == '4999'))) {
        if (!i && (O(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == '5')) &&
          (O(n, l + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (_ = !0), O(n, l, g.rounding, e);
};
S.tangent = S.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = j(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        O(Fe == 2 || Fe == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
S.times = S.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g = this,
    h = g.constructor,
    v = g.d,
    R = (e = new h(e)).d;
  if (((e.s *= g.s), !v || !v[0] || !R || !R[0]))
    return new h(
      !e.s || (v && !v[0] && !R) || (R && !R[0] && !v)
        ? NaN
        : !v || !R
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = te(g.e / F) + te(e.e / F),
      l = v.length,
      u = R.length,
      l < u && ((o = v), (v = R), (R = o), (s = l), (l = u), (u = s)),
      o = [],
      s = l + u,
      n = s;
    n--;

  )
    o.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + R[n] * v[i - n - 1] + t),
        (o[i--] = a % de | 0),
        (t = (a / de) | 0);
    o[i] = (o[i] + t) % de | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = mr(o, r)),
    _ ? O(e, h.precision, h.rounding) : e
  );
};
S.toBinary = function (e, t) {
  return Cn(this, 2, e, t);
};
S.toDecimalPlaces = S.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (se(e, 0, $e),
        t === void 0 ? (t = n.rounding) : se(t, 0, 8),
        O(r, e + r.e + 1, t))
  );
};
S.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = we(n, !0))
      : (se(e, 0, $e),
        t === void 0 ? (t = i.rounding) : se(t, 0, 8),
        (n = O(new i(n), e + 1, t)),
        (r = we(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  );
};
S.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = we(i))
      : (se(e, 0, $e),
        t === void 0 ? (t = o.rounding) : se(t, 0, 8),
        (n = O(new o(i), e + i.e + 1, t)),
        (r = we(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? '-' + r : r
  );
};
S.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = this,
    C = R.d,
    A = R.constructor;
  if (!C) return new A(R);
  if (
    ((u = r = new A(1)),
    (n = l = new A(0)),
    (t = new A(n)),
    (o = t.e = uo(C) - R.e - 1),
    (s = o % F),
    (t.d[0] = J(10, s < 0 ? F + s : s)),
    e == null)
  )
    e = o > 0 ? t : u;
  else {
    if (((a = new A(e)), !a.isInt() || a.lt(u))) throw Error(qe + a);
    e = a.gt(t) ? (o > 0 ? t : u) : a;
  }
  for (
    _ = !1,
      a = new A(Y(C)),
      g = A.precision,
      A.precision = o = C.length * F * 2;
    (h = j(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = u),
      (u = l.plus(h.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(h.times(i))),
      (a = i);
  return (
    (i = j(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(u))),
    (r = r.plus(i.times(n))),
    (l.s = u.s = R.s),
    (v =
      j(u, n, o, 1)
        .minus(R)
        .abs()
        .cmp(j(l, r, o, 1).minus(R).abs()) < 1
        ? [u, n]
        : [l, r]),
    (A.precision = g),
    (_ = !0),
    v
  );
};
S.toHexadecimal = S.toHex = function (e, t) {
  return Cn(this, 16, e, t);
};
S.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : se(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((_ = !1), (r = j(r, e, 0, t, 1).times(e)), (_ = !0), O(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
S.toNumber = function () {
  return +this;
};
S.toOctal = function (e, t) {
  return Cn(this, 8, e, t);
};
S.toPower = S.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    u = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(J(+a, u));
  if (((a = new l(a)), a.eq(1))) return a;
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return O(a, n, o);
  if (((t = te(e.e / F)), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Hl))
    return (i = co(l, a, r, n)), e.s < 0 ? new l(1).div(i) : O(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN);
    if (
      ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
    )
      return (a.s = s), a;
  }
  return (
    (r = J(+a, u)),
    (t =
      r == 0 || !isFinite(r)
        ? te(u * (Math.log('0.' + Y(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + '').e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((_ = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + '').length)),
        (i = Tn(e.times(De(a, n + r)), n)),
        i.d &&
          ((i = O(i, n + 5, 1)),
          Lt(i.d, n, o) &&
            ((t = n + 10),
            (i = O(Tn(e.times(De(a, t + r)), t), t + 5, 1)),
            +Y(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = O(i, n + 1, 0)))),
        (i.s = s),
        (_ = !0),
        (l.rounding = o),
        O(i, n, o))
  );
};
S.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = we(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (se(e, 1, $e),
        t === void 0 ? (t = i.rounding) : se(t, 0, 8),
        (n = O(new i(n), e, t)),
        (r = we(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  );
};
S.toSignificantDigits = S.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (se(e, 1, $e), t === void 0 ? (t = n.rounding) : se(t, 0, 8)),
    O(new n(r), e, t)
  );
};
S.toString = function () {
  var e = this,
    t = e.constructor,
    r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? '-' + r : r;
};
S.truncated = S.trunc = function () {
  return O(new this.constructor(this), this.e + 1, 1);
};
S.valueOf = S.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? '-' + r : r;
};
function Y(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = '',
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ''), (r = F - n.length), r && (o += Ne(r)), (o += n);
    (s = e[t]), (n = s + ''), (r = F - n.length), r && (o += Ne(r));
  } else if (s === 0) return '0';
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function se(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(qe + e);
}
function Lt(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += F), (i = 0)) : ((i = Math.ceil((t + 1) / F)), (t %= F)),
    (o = J(10, F - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == J(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
            ((e[i + 1] / o / 1e3) | 0) == J(10, t - 3) - 1),
    s
  );
}
function lr(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += xn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function Yl(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / gr(4, r)).toString()))
      : ((r = 16), (i = '2.3283064365386962890625e-10')),
    (e.precision += r),
    (t = st(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var j = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, l) {
    var u,
      g,
      h,
      v,
      R,
      C,
      A,
      M,
      I,
      L,
      k,
      D,
      z,
      B,
      vt,
      Q,
      ne,
      Ce,
      Z,
      Ye,
      er = n.constructor,
      Yr = n.s == i.s ? 1 : -1,
      X = n.d,
      $ = i.d;
    if (!X || !X[0] || !$ || !$[0])
      return new er(
        !n.s || !i.s || (X ? $ && X[0] == $[0] : !$)
          ? NaN
          : (X && X[0] == 0) || !$
            ? Yr * 0
            : Yr / 0,
      );
    for (
      l
        ? ((R = 1), (g = n.e - i.e))
        : ((l = de), (R = F), (g = te(n.e / R) - te(i.e / R))),
        Z = $.length,
        ne = X.length,
        I = new er(Yr),
        L = I.d = [],
        h = 0;
      $[h] == (X[h] || 0);
      h++
    );
    if (
      ($[h] > (X[h] || 0) && g--,
      o == null
        ? ((B = o = er.precision), (s = er.rounding))
        : a
          ? (B = o + (n.e - i.e) + 1)
          : (B = o),
      B < 0)
    )
      L.push(1), (C = !0);
    else {
      if (((B = (B / R + 2) | 0), (h = 0), Z == 1)) {
        for (v = 0, $ = $[0], B++; (h < ne || v) && B--; h++)
          (vt = v * l + (X[h] || 0)), (L[h] = (vt / $) | 0), (v = vt % $ | 0);
        C = v || h < ne;
      } else {
        for (
          v = (l / ($[0] + 1)) | 0,
            v > 1 &&
              (($ = e($, v, l)),
              (X = e(X, v, l)),
              (Z = $.length),
              (ne = X.length)),
            Q = Z,
            k = X.slice(0, Z),
            D = k.length;
          D < Z;

        )
          k[D++] = 0;
        (Ye = $.slice()), Ye.unshift(0), (Ce = $[0]), $[1] >= l / 2 && ++Ce;
        do
          (v = 0),
            (u = t($, k, Z, D)),
            u < 0
              ? ((z = k[0]),
                Z != D && (z = z * l + (k[1] || 0)),
                (v = (z / Ce) | 0),
                v > 1
                  ? (v >= l && (v = l - 1),
                    (A = e($, v, l)),
                    (M = A.length),
                    (D = k.length),
                    (u = t(A, k, M, D)),
                    u == 1 && (v--, r(A, Z < M ? Ye : $, M, l)))
                  : (v == 0 && (u = v = 1), (A = $.slice())),
                (M = A.length),
                M < D && A.unshift(0),
                r(k, A, D, l),
                u == -1 &&
                  ((D = k.length),
                  (u = t($, k, Z, D)),
                  u < 1 && (v++, r(k, Z < D ? Ye : $, D, l))),
                (D = k.length))
              : u === 0 && (v++, (k = [0])),
            (L[h++] = v),
            u && k[0] ? (k[D++] = X[Q] || 0) : ((k = [X[Q]]), (D = 1));
        while ((Q++ < ne || k[0] !== void 0) && B--);
        C = k[0] !== void 0;
      }
      L[0] || L.shift();
    }
    if (R == 1) (I.e = g), (io = C);
    else {
      for (h = 1, v = L[0]; v >= 10; v /= 10) h++;
      (I.e = h + g * R - 1), O(I, a ? o + I.e + 1 : o, s, C);
    }
    return I;
  };
})();
function O(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = e.constructor;
  e: if (t != null) {
    if (((h = e.d), !h)) return e;
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += F),
        (s = t),
        (g = h[(v = 0)]),
        (l = (g / J(10, i - s - 1)) % 10 | 0);
    else if (((v = Math.ceil((o + 1) / F)), (a = h.length), v >= a))
      if (n) {
        for (; a++ <= v; ) h.push(0);
        (g = l = 0), (i = 1), (o %= F), (s = o - F + 1);
      } else break e;
    else {
      for (g = a = h[v], i = 1; a >= 10; a /= 10) i++;
      (o %= F),
        (s = o - F + i),
        (l = s < 0 ? 0 : (g / J(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[v + 1] !== void 0 ||
        (s < 0 ? g : g % J(10, i - s - 1))),
      (u =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? g / J(10, i - s) : 0) : h[v - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        u
          ? ((t -= e.e + 1), (h[0] = J(10, (F - (t % F)) % F)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((h.length = v), (a = 1), v--)
        : ((h.length = v + 1),
          (a = J(10, F - o)),
          (h[v] = s > 0 ? ((g / J(10, i - s)) % J(10, s) | 0) * a : 0)),
      u)
    )
      for (;;)
        if (v == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == de && (h[0] = 1));
          break;
        } else {
          if (((h[v] += a), h[v] != de)) break;
          (h[v--] = 0), (a = 1);
        }
    for (o = h.length; h[--o] === 0; ) h.pop();
  }
  return (
    _ &&
      (e.e > R.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < R.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function we(e, t, r) {
  if (!e.isFinite()) return fo(e);
  var n,
    i = e.e,
    o = Y(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + '.' + o.slice(1) + Ne(n))
          : s > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (e.e < 0 ? 'e' : 'e+') + e.e))
      : i < 0
        ? ((o = '0.' + Ne(-i - 1) + o), r && (n = r - s) > 0 && (o += Ne(n)))
        : i >= s
          ? ((o += Ne(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + '.' + Ne(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + '.' + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), (o += Ne(n)))),
    o
  );
}
function mr(e, t) {
  var r = e[0];
  for (t *= F; r >= 10; r /= 10) t++;
  return t;
}
function dr(e, t, r) {
  if (t > zl) throw ((_ = !0), r && (e.precision = r), Error(oo));
  return O(new e(cr), t, 1, !0);
}
function ye(e, t, r) {
  if (t > vn) throw Error(oo);
  return O(new e(pr), t, r, !0);
}
function uo(e) {
  var t = e.length - 1,
    r = t * F + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Ne(e) {
  for (var t = ''; e--; ) t += '0';
  return t;
}
function co(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / F + 4);
  for (_ = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), ro(o.d, s) && (i = !0)),
      (r = te(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), ro(t.d, s);
  }
  return (_ = !0), o;
}
function to(e) {
  return e.d[e.d.length - 1] & 1;
}
function po(e, t, r) {
  for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
    if (((i = new e(t[s])), !i.s)) {
      o = i;
      break;
    }
    (n = o.cmp(i)), (n === r || (n === 0 && o.s === r)) && (o = i);
  }
  return o;
}
function Tn(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    g = 0,
    h = 0,
    v = e.constructor,
    R = v.rounding,
    C = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : NaN,
    );
  for (
    t == null ? ((_ = !1), (l = C)) : (l = t), a = new v(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (h += 5);
  for (
    n = ((Math.log(J(2, h)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new v(1),
      v.precision = l;
    ;

  ) {
    if (
      ((o = O(o.times(e), l, 1)),
      (r = r.times(++g)),
      (a = s.plus(j(o, r, l, 1))),
      Y(a.d).slice(0, l) === Y(s.d).slice(0, l))
    ) {
      for (i = h; i--; ) s = O(s.times(s), l, 1);
      if (t == null)
        if (u < 3 && Lt(s.d, l - n, R, u))
          (v.precision = l += 10), (r = o = a = new v(1)), (g = 0), u++;
        else return O(s, (v.precision = C), R, (_ = !0));
      else return (v.precision = C), s;
    }
    s = a;
  }
}
function De(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = 1,
    C = 10,
    A = e,
    M = A.d,
    I = A.constructor,
    L = I.rounding,
    k = I.precision;
  if (A.s < 0 || !M || !M[0] || (!A.e && M[0] == 1 && M.length == 1))
    return new I(M && !M[0] ? -1 / 0 : A.s != 1 ? NaN : M ? 0 : A);
  if (
    (t == null ? ((_ = !1), (g = k)) : (g = t),
    (I.precision = g += C),
    (r = Y(M)),
    (n = r.charAt(0)),
    Math.abs((o = A.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (A = A.times(e)), (r = Y(A.d)), (n = r.charAt(0)), R++;
    (o = A.e),
      n > 1 ? ((A = new I('0.' + r)), o++) : (A = new I(n + '.' + r.slice(1)));
  } else
    return (
      (u = dr(I, g + 2, k).times(o + '')),
      (A = De(new I(n + '.' + r.slice(1)), g - C).plus(u)),
      (I.precision = k),
      t == null ? O(A, k, L, (_ = !0)) : A
    );
  for (
    h = A,
      l = s = A = j(A.minus(1), A.plus(1), g, 1),
      v = O(A.times(A), g, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = O(s.times(v), g, 1)),
      (u = l.plus(j(s, new I(i), g, 1))),
      Y(u.d).slice(0, g) === Y(l.d).slice(0, g))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(dr(I, g + 2, k).times(o + ''))),
        (l = j(l, new I(R), g, 1)),
        t == null)
      )
        if (Lt(l.d, g - C, L, a))
          (I.precision = g += C),
            (u = s = A = j(h.minus(1), h.plus(1), g, 1)),
            (v = O(A.times(A), g, 1)),
            (i = a = 1);
        else return O(l, (I.precision = k), L, (_ = !0));
      else return (I.precision = k), l;
    (l = u), (i += 2);
  }
}
function fo(e) {
  return String((e.s * e.s) / 0);
}
function ur(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % F),
      r < 0 && (n += F),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= F; n < i; )
        e.d.push(+t.slice(n, (n += F)));
      (t = t.slice(n)), (n = F - t.length);
    } else n -= i;
    for (; n--; ) t += '0';
    e.d.push(+t),
      _ &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Zl(e, t) {
  var r, n, i, o, s, a, l, u, g;
  if (t.indexOf('_') > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), lo.test(t))) return ur(e, t);
  } else if (t === 'Infinity' || t === 'NaN')
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Wl.test(t)) (r = 16), (t = t.toLowerCase());
  else if (Jl.test(t)) r = 2;
  else if (Kl.test(t)) r = 8;
  else throw Error(qe + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf('.'),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace('.', '')),
        (a = t.length),
        (o = a - o),
        (i = co(n, new n(r), o, o * 2))),
      u = lr(t, r, de),
      g = u.length - 1,
      o = g;
    u[o] === 0;
    --o
  )
    u.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = mr(u, g)),
      (e.d = u),
      (_ = !1),
      s && (e = j(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? J(2, l) : We.pow(2, l))),
      (_ = !0),
      e);
}
function Xl(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : st(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / gr(5, r))),
    (t = st(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function st(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    u = 1,
    g = e.precision,
    h = Math.ceil(g / F);
  for (_ = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = j(a.times(l), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = j(s.times(l), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), u++;
  }
  return (_ = !0), (s.d.length = h + 1), s;
}
function gr(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function mo(e, t) {
  var r,
    n = t.s < 0,
    i = ye(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (Fe = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) Fe = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (Fe = to(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    Fe = to(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function Cn(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    g,
    h,
    v,
    R = e.constructor,
    C = r !== void 0;
  if (
    (C
      ? (se(r, 1, $e), n === void 0 ? (n = R.rounding) : se(n, 0, 8))
      : ((r = R.precision), (n = R.rounding)),
    !e.isFinite())
  )
    g = fo(e);
  else {
    for (
      g = we(e),
        s = g.indexOf('.'),
        C
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace('.', '')),
          (v = new R(1)),
          (v.e = g.length - s),
          (v.d = lr(we(v), 10, i)),
          (v.e = v.d.length)),
        h = lr(g, 10, i),
        o = l = h.length;
      h[--l] == 0;

    )
      h.pop();
    if (!h[0]) g = C ? '0p+0' : '0';
    else {
      if (
        (s < 0
          ? o--
          : ((e = new R(e)),
            (e.d = h),
            (e.e = o),
            (e = j(e, v, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (u = io)),
        (s = h[r]),
        (a = i / 2),
        (u = u || h[r + 1] !== void 0),
        (u =
          n < 4
            ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  u ||
                  (n === 6 && h[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        u)
      )
        for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++o, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l);
      for (s = 0, g = ''; s < l; s++) g += xn.charAt(h[s]);
      if (C) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) g += '0';
            for (h = lr(g, i, t), l = h.length; !h[l - 1]; --l);
            for (s = 1, g = '1.'; s < l; s++) g += xn.charAt(h[s]);
          } else g = g.charAt(0) + '.' + g.slice(1);
        g = g + (o < 0 ? 'p' : 'p+') + o;
      } else if (o < 0) {
        for (; ++o; ) g = '0' + g;
        g = '0.' + g;
      } else if (++o > l) for (o -= l; o--; ) g += '0';
      else o < l && (g = g.slice(0, o) + '.' + g.slice(o));
    }
    g = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + g;
  }
  return e.s < 0 ? '-' + g : g;
}
function ro(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function eu(e) {
  return new this(e).abs();
}
function tu(e) {
  return new this(e).acos();
}
function ru(e) {
  return new this(e).acosh();
}
function nu(e, t) {
  return new this(e).plus(t);
}
function iu(e) {
  return new this(e).asin();
}
function ou(e) {
  return new this(e).asinh();
}
function su(e) {
  return new this(e).atan();
}
function au(e) {
  return new this(e).atanh();
}
function lu(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = ye(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? ye(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = ye(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan(j(e, t, o, 1))),
                (t = ye(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(j(e, t, o, 1))),
    r
  );
}
function uu(e) {
  return new this(e).cbrt();
}
function cu(e) {
  return O((e = new this(e)), e.e + 1, 2);
}
function pu(e, t, r) {
  return new this(e).clamp(t, r);
}
function du(e) {
  if (!e || typeof e != 'object') throw Error(fr + 'Object expected');
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      'precision',
      1,
      $e,
      'rounding',
      0,
      8,
      'toExpNeg',
      -ot,
      0,
      'toExpPos',
      0,
      ot,
      'maxE',
      0,
      ot,
      'minE',
      -ot,
      0,
      'modulo',
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = Pn[r]), (n = e[r]) !== void 0))
      if (te(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(qe + r + ': ' + n);
  if (((r = 'crypto'), i && (this[r] = Pn[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < 'u' &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(so);
      else this[r] = !1;
    else throw Error(qe + r + ': ' + n);
  return this;
}
function fu(e) {
  return new this(e).cos();
}
function mu(e) {
  return new this(e).cosh();
}
function go(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      l,
      u = this;
    if (!(u instanceof i)) return new i(o);
    if (((u.constructor = i), no(o))) {
      (u.s = o.s),
        _
          ? !o.d || o.e > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : o.e < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = o.e), (u.d = o.d.slice()))
          : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((l = typeof o), l === 'number')) {
      if (o === 0) {
        (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        _
          ? s > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : s < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = s), (u.d = [o]))
          : ((u.e = s), (u.d = [o]));
        return;
      }
      if (o * 0 !== 0) {
        o || (u.s = NaN), (u.e = NaN), (u.d = null);
        return;
      }
      return ur(u, o.toString());
    }
    if (l === 'string')
      return (
        (a = o.charCodeAt(0)) === 45
          ? ((o = o.slice(1)), (u.s = -1))
          : (a === 43 && (o = o.slice(1)), (u.s = 1)),
        lo.test(o) ? ur(u, o) : Zl(u, o)
      );
    if (l === 'bigint')
      return o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), ur(u, o.toString());
    throw Error(qe + o);
  }
  if (
    ((i.prototype = S),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = du),
    (i.clone = go),
    (i.isDecimal = no),
    (i.abs = eu),
    (i.acos = tu),
    (i.acosh = ru),
    (i.add = nu),
    (i.asin = iu),
    (i.asinh = ou),
    (i.atan = su),
    (i.atanh = au),
    (i.atan2 = lu),
    (i.cbrt = uu),
    (i.ceil = cu),
    (i.clamp = pu),
    (i.cos = fu),
    (i.cosh = mu),
    (i.div = gu),
    (i.exp = hu),
    (i.floor = yu),
    (i.hypot = wu),
    (i.ln = bu),
    (i.log = Eu),
    (i.log10 = Pu),
    (i.log2 = xu),
    (i.max = vu),
    (i.min = Tu),
    (i.mod = Cu),
    (i.mul = Au),
    (i.pow = Su),
    (i.random = Ru),
    (i.round = ku),
    (i.sign = Ou),
    (i.sin = Mu),
    (i.sinh = Fu),
    (i.sqrt = Iu),
    (i.sub = _u),
    (i.sum = Lu),
    (i.tan = Nu),
    (i.tanh = Du),
    (i.trunc = qu),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        'precision',
        'rounding',
        'toExpNeg',
        'toExpPos',
        'maxE',
        'minE',
        'modulo',
        'crypto',
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function gu(e, t) {
  return new this(e).div(t);
}
function hu(e) {
  return new this(e).exp();
}
function yu(e) {
  return O((e = new this(e)), e.e + 1, 3);
}
function wu() {
  var e,
    t,
    r = new this(0);
  for (_ = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (_ = !0), new this(1 / 0);
      r = t;
    }
  return (_ = !0), r.sqrt();
}
function no(e) {
  return e instanceof We || (e && e.toStringTag === ao) || !1;
}
function bu(e) {
  return new this(e).ln();
}
function Eu(e, t) {
  return new this(e).log(t);
}
function xu(e) {
  return new this(e).log(2);
}
function Pu(e) {
  return new this(e).log(10);
}
function vu() {
  return po(this, arguments, -1);
}
function Tu() {
  return po(this, arguments, 1);
}
function Cu(e, t) {
  return new this(e).mod(t);
}
function Au(e, t) {
  return new this(e).mul(t);
}
function Su(e, t) {
  return new this(e).pow(t);
}
function Ru(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : se(e, 1, $e),
    (n = Math.ceil(e / F)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(so);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= F,
      n && e && ((i = J(10, F - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= F) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < F && (r -= F - n);
  }
  return (s.e = r), (s.d = a), s;
}
function ku(e) {
  return O((e = new this(e)), e.e + 1, this.rounding);
}
function Ou(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function Mu(e) {
  return new this(e).sin();
}
function Fu(e) {
  return new this(e).sinh();
}
function Iu(e) {
  return new this(e).sqrt();
}
function _u(e, t) {
  return new this(e).sub(t);
}
function Lu() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (_ = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (_ = !0), O(r, this.precision, this.rounding);
}
function Nu(e) {
  return new this(e).tan();
}
function Du(e) {
  return new this(e).tanh();
}
function qu(e) {
  return O((e = new this(e)), e.e + 1, 1);
}
S[Symbol.for('nodejs.util.inspect.custom')] = S.toString;
S[Symbol.toStringTag] = 'Decimal';
var We = (S.constructor = go(Pn));
cr = new We(cr);
pr = new We(pr);
var be = We;
function at(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(at)
      : typeof e == 'object'
        ? $u(e)
          ? ju(e)
          : it(e, at)
        : e;
}
function $u(e) {
  return e !== null && typeof e == 'object' && typeof e.$type == 'string';
}
function ju({ $type: e, value: t }) {
  switch (e) {
    case 'BigInt':
      return BigInt(t);
    case 'Bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = w.Buffer.from(t, 'base64');
      return new Uint8Array(r, n, i);
    }
    case 'DateTime':
      return new Date(t);
    case 'Decimal':
      return new be(t);
    case 'Json':
      return JSON.parse(t);
    default:
      Me(t, 'Unknown tagged value');
  }
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Ee = class {
  _map = new Map();
  get(t) {
    return this._map.get(t)?.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
m();
c();
p();
d();
f();
function je(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
m();
c();
p();
d();
f();
function ho(e, t) {
  let r = {};
  for (let n of e) {
    let i = n[t];
    r[i] = n;
  }
  return r;
}
m();
c();
p();
d();
f();
function Nt(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
m();
c();
p();
d();
f();
function yo(e) {
  return { models: An(e.models), enums: An(e.enums), types: An(e.types) };
}
function An(e) {
  let t = {};
  for (let { name: r, ...n } of e) t[r] = n;
  return t;
}
m();
c();
p();
d();
f();
function lt(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'
  );
}
function hr(e) {
  return e.toString() !== 'Invalid Date';
}
m();
c();
p();
d();
f();
function ut(e) {
  return We.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == 'object' &&
        typeof e.s == 'number' &&
        typeof e.e == 'number' &&
        typeof e.toFixed == 'function' &&
        Array.isArray(e.d);
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Dt = {};
Ze(Dt, { ModelAction: () => ct, datamodelEnumToSchemaEnum: () => Bu });
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
function Bu(e) {
  return { name: e.name, values: e.values.map((t) => t.name) };
}
m();
c();
p();
d();
f();
var ct = ((k) => (
  (k.findUnique = 'findUnique'),
  (k.findUniqueOrThrow = 'findUniqueOrThrow'),
  (k.findFirst = 'findFirst'),
  (k.findFirstOrThrow = 'findFirstOrThrow'),
  (k.findMany = 'findMany'),
  (k.create = 'create'),
  (k.createMany = 'createMany'),
  (k.createManyAndReturn = 'createManyAndReturn'),
  (k.update = 'update'),
  (k.updateMany = 'updateMany'),
  (k.updateManyAndReturn = 'updateManyAndReturn'),
  (k.upsert = 'upsert'),
  (k.delete = 'delete'),
  (k.deleteMany = 'deleteMany'),
  (k.groupBy = 'groupBy'),
  (k.count = 'count'),
  (k.aggregate = 'aggregate'),
  (k.findRaw = 'findRaw'),
  (k.aggregateRaw = 'aggregateRaw'),
  k
))(ct || {});
var xo = Se(Wi());
m();
c();
p();
d();
f();
cn();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var wo = {
  keyword: ke,
  entity: ke,
  value: (e) => pe(Je(e)),
  punctuation: Je,
  directive: ke,
  function: ke,
  variable: (e) => pe(Je(e)),
  string: (e) => pe(St(e)),
  boolean: Rt,
  number: ke,
  comment: kt,
};
var Uu = (e) => e,
  yr = {},
  Vu = 0,
  N = {
    manual: yr.Prism && yr.Prism.manual,
    disableWorkerMessageHandler:
      yr.Prism && yr.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof fe) {
          let t = e;
          return new fe(t.type, N.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(N.util.encode)
            : e
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/\u00a0/g, ' ');
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, '__id', { value: ++Vu }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          i,
          o = N.util.type(t);
        switch (((r = r || {}), o)) {
          case 'Object':
            if (((i = N.util.objId(t)), r[i])) return r[i];
            (n = {}), (r[i] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case 'Array':
            return (
              (i = N.util.objId(t)),
              r[i]
                ? r[i]
                : ((n = []),
                  (r[i] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = N.util.clone(N.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || N.languages;
        let i = n[e],
          o = {};
        for (let a in i)
          if (i.hasOwnProperty(a)) {
            if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
            r.hasOwnProperty(a) || (o[a] = i[a]);
          }
        let s = n[e];
        return (
          (n[e] = o),
          N.languages.DFS(N.languages, function (a, l) {
            l === s && a != e && (this[a] = o);
          }),
          o
        );
      },
      DFS: function e(t, r, n, i) {
        i = i || {};
        let o = N.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              l = N.util.type(a);
            l === 'Object' && !i[o(a)]
              ? ((i[o(a)] = !0), e(a, r, null, i))
              : l === 'Array' && !i[o(a)] && ((i[o(a)] = !0), e(a, r, s, i));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        N.hooks.run('before-tokenize', n),
        (n.tokens = N.tokenize(n.code, n.grammar)),
        N.hooks.run('after-tokenize', n),
        fe.stringify(N.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, i, o, s) {
      for (let A in r) {
        if (!r.hasOwnProperty(A) || !r[A]) continue;
        if (A == s) return;
        let M = r[A];
        M = N.util.type(M) === 'Array' ? M : [M];
        for (let I = 0; I < M.length; ++I) {
          let L = M[I],
            k = L.inside,
            D = !!L.lookbehind,
            z = !!L.greedy,
            B = 0,
            vt = L.alias;
          if (z && !L.pattern.global) {
            let Q = L.pattern.toString().match(/[imuy]*$/)[0];
            L.pattern = RegExp(L.pattern.source, Q + 'g');
          }
          L = L.pattern || L;
          for (let Q = n, ne = i; Q < t.length; ne += t[Q].length, ++Q) {
            let Ce = t[Q];
            if (t.length > e.length) return;
            if (Ce instanceof fe) continue;
            if (z && Q != t.length - 1) {
              L.lastIndex = ne;
              var h = L.exec(e);
              if (!h) break;
              var g = h.index + (D ? h[1].length : 0),
                v = h.index + h[0].length,
                a = Q,
                l = ne;
              for (
                let $ = t.length;
                a < $ && (l < v || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (l += t[a].length), g >= l && (++Q, (ne = l));
              if (t[Q] instanceof fe) continue;
              (u = a - Q), (Ce = e.slice(ne, l)), (h.index -= ne);
            } else {
              L.lastIndex = 0;
              var h = L.exec(Ce),
                u = 1;
            }
            if (!h) {
              if (o) break;
              continue;
            }
            D && (B = h[1] ? h[1].length : 0);
            var g = h.index + B,
              h = h[0].slice(B),
              v = g + h.length,
              R = Ce.slice(0, g),
              C = Ce.slice(v);
            let Z = [Q, u];
            R && (++Q, (ne += R.length), Z.push(R));
            let Ye = new fe(A, k ? N.tokenize(h, k) : h, vt, h, z);
            if (
              (Z.push(Ye),
              C && Z.push(C),
              Array.prototype.splice.apply(t, Z),
              u != 1 && N.matchGrammar(e, t, r, Q, ne, !0, A),
              o)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return N.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = N.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = N.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, i; (i = r[n++]); ) i(t);
      },
    },
    Token: fe,
  };
N.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  'class-name': {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
N.languages.javascript = N.languages.extend('clike', {
  'class-name': [
    N.languages.clike['class-name'],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
N.languages.javascript['class-name'][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
N.languages.insertBefore('javascript', 'keyword', {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  'function-variable': {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function',
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: N.languages.javascript,
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: N.languages.javascript,
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: N.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: N.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
N.languages.markup && N.languages.markup.tag.addInlined('script', 'javascript');
N.languages.js = N.languages.javascript;
N.languages.typescript = N.languages.extend('javascript', {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
N.languages.ts = N.languages.typescript;
function fe(e, t, r, n, i) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || '').length | 0),
    (this.greedy = !!i);
}
fe.stringify = function (e, t) {
  return typeof e == 'string'
    ? e
    : Array.isArray(e)
      ? e
          .map(function (r) {
            return fe.stringify(r, t);
          })
          .join('')
      : Qu(e.type)(e.content);
};
function Qu(e) {
  return wo[e] || Uu;
}
function bo(e) {
  return Gu(e, N.languages.javascript);
}
function Gu(e, t) {
  return N.tokenize(e, t)
    .map((n) => fe.stringify(n))
    .join('');
}
m();
c();
p();
d();
f();
function Eo(e) {
  return mn(e);
}
var wr = class e {
  firstLineNumber;
  lines;
  static read(t) {
    let r;
    try {
      r = or.readFileSync(t, 'utf-8');
    } catch {
      return null;
    }
    return e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber ||
      t > this.lines.length + this.firstLineNumber
    )
      return this;
    let n = t - this.firstLineNumber,
      i = [...this.lines];
    return (i[n] = r(i[n])), new e(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, i) => (i === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new e(
      t,
      Eo(n).split(`
`),
    );
  }
  highlight() {
    let t = bo(this.toString());
    return new e(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var Ju = {
    red: Ge,
    gray: kt,
    dim: Ct,
    bold: pe,
    underline: At,
    highlightSource: (e) => e.highlight(),
  },
  Wu = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function Ku({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r ?? !1,
    callArguments: n,
  };
}
function Hu(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i },
  o,
) {
  let s = Ku({ message: t, originalMethod: r, isPanic: n, callArguments: i });
  if (!e || typeof window < 'u' || y.env.NODE_ENV === 'production') return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let l = Math.max(1, a.lineNumber - 3),
    u = wr.read(a.fileName)?.slice(l, a.lineNumber),
    g = u?.lineAt(a.lineNumber);
  if (u && g) {
    let h = Yu(g),
      v = zu(g);
    if (!v) return s;
    (s.functionName = `${v.code})`),
      (s.location = a),
      n ||
        (u = u.mapLineAt(a.lineNumber, (C) => C.slice(0, v.openingBraceIndex))),
      (u = o.highlightSource(u));
    let R = String(u.lastLineNumber).length;
    if (
      ((s.contextLines = u
        .mapLines((C, A) => o.gray(String(A).padStart(R)) + ' ' + C)
        .mapLines((C) => o.dim(C))
        .prependSymbolAt(a.lineNumber, o.bold(o.red('\u2192')))),
      i)
    ) {
      let C = h + R + 1;
      (C += 2), (s.callArguments = (0, xo.default)(i, C).slice(C));
    }
  }
  return s;
}
function zu(e) {
  let t = Object.keys(ct).join('|'),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let i = n.index + n[0].length,
      o = e.lastIndexOf(' ', n.index) + 1;
    return { code: e.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function Yu(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== ' ') return t;
    t++;
  }
  return t;
}
function Zu(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [''],
    l = t ? ' in' : ':';
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
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(Xu(t))),
    i)
  ) {
    a.push('');
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(')'))), a.push(u.join('')), o && a.push('');
  } else a.push(''), o && a.push(o), a.push('');
  return (
    a.push(r),
    a.join(`
`)
  );
}
function Xu(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(':')
  );
}
function br(e) {
  let t = e.showColors ? Ju : Wu,
    r;
  return (r = Hu(e, t)), Zu(r, t);
}
m();
c();
p();
d();
f();
var Oo = Se(Sn());
m();
c();
p();
d();
f();
function Co(e, t, r) {
  let n = Ao(e),
    i = ec(n),
    o = rc(i);
  o ? Er(o, t, r) : t.addErrorMessage(() => 'Unknown error');
}
function Ao(e) {
  return e.errors.flatMap((t) => (t.kind === 'Union' ? Ao(t) : [t]));
}
function ec(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== 'InvalidArgumentType') {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: tc(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function tc(e, t) {
  return [...new Set(e.concat(t))];
}
function rc(e) {
  return En(e, (t, r) => {
    let n = vo(t),
      i = vo(r);
    return n !== i ? n - i : To(t) - To(r);
  });
}
function vo(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function To(e) {
  switch (e.kind) {
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
m();
c();
p();
d();
f();
var ce = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
  }
  isRequired = !1;
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? '+' : '?')),
      t.write(r(this.name)),
      this.isRequired || t.write(r('?')),
      t.write(r(': ')),
      typeof this.value == 'string'
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
Ro();
m();
c();
p();
d();
f();
var pt = class {
  constructor(t = 0, r) {
    this.context = r;
    this.currentIndent = t;
  }
  lines = [];
  currentLine = '';
  currentIndent = 0;
  marginSymbol;
  afterNextNewLineCallback;
  write(t) {
    return typeof t == 'string' ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r, n = (i, o) => o.write(i)) {
    let i = r.length - 1;
    for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ''),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t?.(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
So();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var xr = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
m();
c();
p();
d();
f();
var Pr = (e) => e,
  vr = { bold: Pr, red: Pr, green: Pr, dim: Pr, enabled: !1 },
  ko = { bold: pe, red: Ge, green: St, dim: Ct, enabled: !0 },
  dt = {
    write(e) {
      e.writeLine(',');
    },
  };
m();
c();
p();
d();
f();
var xe = class {
  constructor(t) {
    this.contents = t;
  }
  isUnderlined = !1;
  color = (t) => t;
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(' '.repeat(r)).writeLine(
            this.color('~'.repeat(this.contents.length)),
          );
        });
  }
};
m();
c();
p();
d();
f();
var Be = class {
  hasError = !1;
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var ft = class extends Be {
  items = [];
  addItem(t) {
    return this.items.push(new xr(t)), this;
  }
  getField(t) {
    return this.items[t];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
  }
  write(t) {
    if (this.items.length === 0) {
      this.writeEmpty(t);
      return;
    }
    this.writeWithItems(t);
  }
  writeEmpty(t) {
    let r = new xe('[]');
    this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
  }
  writeWithItems(t) {
    let { colors: r } = t.context;
    t
      .writeLine('[')
      .withIndent(() => t.writeJoined(dt, this.items).newLine())
      .write(']'),
      this.hasError &&
        t.afterNextNewline(() => {
          t.writeLine(r.red('~'.repeat(this.getPrintWidth())));
        });
  }
  asObject() {}
};
var mt = class e extends Be {
  fields = {};
  suggestions = [];
  addField(t) {
    this.fields[t.name] = t;
  }
  addSuggestion(t) {
    this.suggestions.push(t);
  }
  getField(t) {
    return this.fields[t];
  }
  getDeepField(t) {
    let [r, ...n] = t,
      i = this.getField(r);
    if (!i) return;
    let o = i;
    for (let s of n) {
      let a;
      if (
        (o.value instanceof e
          ? (a = o.value.getField(s))
          : o.value instanceof ft && (a = o.value.getField(Number(s))),
        !a)
      )
        return;
      o = a;
    }
    return o;
  }
  getDeepFieldValue(t) {
    return t.length === 0 ? this : this.getDeepField(t)?.value;
  }
  hasField(t) {
    return !!this.getField(t);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(t) {
    delete this.fields[t];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(t) {
    return this.getField(t)?.value;
  }
  getDeepSubSelectionValue(t) {
    let r = this;
    for (let n of t) {
      if (!(r instanceof e)) return;
      let i = r.getSubSelectionValue(n);
      if (!i) return;
      r = i;
    }
    return r;
  }
  getDeepSelectionParent(t) {
    let r = this.getSelectionParent();
    if (!r) return;
    let n = r;
    for (let i of t) {
      let o = n.value.getFieldValue(i);
      if (!o || !(o instanceof e)) return;
      let s = o.getSelectionParent();
      if (!s) return;
      n = s;
    }
    return n;
  }
  getSelectionParent() {
    let t = this.getField('select')?.value.asObject();
    if (t) return { kind: 'select', value: t };
    let r = this.getField('include')?.value.asObject();
    if (r) return { kind: 'include', value: r };
  }
  getSubSelectionValue(t) {
    return this.getSelectionParent()?.value.fields[t].value;
  }
  getPrintWidth() {
    let t = Object.values(this.fields);
    return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
  }
  write(t) {
    let r = Object.values(this.fields);
    if (r.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(t);
      return;
    }
    this.writeWithContents(t, r);
  }
  asObject() {
    return this;
  }
  writeEmpty(t) {
    let r = new xe('{}');
    this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
  }
  writeWithContents(t, r) {
    t.writeLine('{').withIndent(() => {
      t.writeJoined(dt, [...r, ...this.suggestions]).newLine();
    }),
      t.write('}'),
      this.hasError &&
        t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red('~'.repeat(this.getPrintWidth())));
        });
  }
};
m();
c();
p();
d();
f();
var H = class extends Be {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new xe(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {}
};
m();
c();
p();
d();
f();
var qt = class {
  fields = [];
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o('+')));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r('{'))
      .withIndent(() => {
        t.writeJoined(dt, this.fields).newLine();
      })
      .write(r('}'))
      .addMarginSymbol(r('+'));
  }
};
function Er(e, t, r) {
  switch (e.kind) {
    case 'MutuallyExclusiveFields':
      nc(e, t);
      break;
    case 'IncludeOnScalar':
      ic(e, t);
      break;
    case 'EmptySelection':
      oc(e, t, r);
      break;
    case 'UnknownSelectionField':
      uc(e, t);
      break;
    case 'InvalidSelectionValue':
      cc(e, t);
      break;
    case 'UnknownArgument':
      pc(e, t);
      break;
    case 'UnknownInputField':
      dc(e, t);
      break;
    case 'RequiredArgumentMissing':
      fc(e, t);
      break;
    case 'InvalidArgumentType':
      mc(e, t);
      break;
    case 'InvalidArgumentValue':
      gc(e, t);
      break;
    case 'ValueTooLarge':
      hc(e, t);
      break;
    case 'SomeFieldsMissing':
      yc(e, t);
      break;
    case 'TooManyFieldsGiven':
      wc(e, t);
      break;
    case 'Union':
      Co(e, t, r);
      break;
    default:
      throw new Error('not implemented: ' + e.kind);
  }
}
function nc(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  r &&
    (r.getField(e.firstField)?.markAsError(),
    r.getField(e.secondField)?.markAsError()),
    t.addErrorMessage(
      (n) =>
        `Please ${n.bold('either')} use ${n.green(
          `\`${e.firstField}\``,
        )} or ${n.green(`\`${e.secondField}\``)}, but ${n.red(
          'not both',
        )} at the same time.`,
    );
}
function ic(e, t) {
  let [r, n] = $t(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new ce(s.name, 'true'));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold(
      'include',
    )} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${jt(s)}`) : (a += '.'),
      (a += `
Note that ${s.bold('include')} statements only accept relation fields.`),
      a
    );
  });
}
function oc(e, t, r) {
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (n) {
    let i = n.getField('omit')?.value.asObject();
    if (i) {
      sc(e, t, i);
      return;
    }
    if (n.hasField('select')) {
      ac(e, t);
      return;
    }
  }
  if (r?.[je(e.outputType.name)]) {
    lc(e, t);
    return;
  }
  t.addErrorMessage(
    () => `Unknown field at "${e.selectionPath.join('.')} selection"`,
  );
}
function sc(e, t, r) {
  r.removeAllFields();
  for (let n of e.outputType.fields) r.addSuggestion(new ce(n.name, 'false'));
  t.addErrorMessage(
    (n) =>
      `The ${n.red(
        'omit',
      )} statement includes every field of the model ${n.bold(
        e.outputType.name,
      )}. At least one field must be included in the result`,
  );
}
function ac(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), Io(n, r)),
    t.addErrorMessage((o) =>
      i
        ? `The ${o.red('`select`')} statement for type ${o.bold(
            r.name,
          )} must not be empty. ${jt(o)}`
        : `The ${o.red('`select`')} statement for type ${o.bold(
            r.name,
          )} needs ${o.bold('at least one truthy value')}.`,
    );
}
function lc(e, t) {
  let r = new qt();
  for (let i of e.outputType.fields)
    i.isRelation || r.addField(i.name, 'false');
  let n = new ce('omit', r).makeRequired();
  if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
  else {
    let [i, o] = $t(e.selectionPath),
      a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
    if (a) {
      let l = a?.value.asObject() ?? new mt();
      l.addSuggestion(n), (a.value = l);
    }
  }
  t.addErrorMessage(
    (i) =>
      `The global ${i.red(
        'omit',
      )} configuration excludes every field of the model ${i.bold(
        e.outputType.name,
      )}. At least one field must be included in the result`,
  );
}
function uc(e, t) {
  let r = _o(e.selectionPath, t);
  if (r.parentKind !== 'unknown') {
    r.field.markAsError();
    let n = r.parent;
    switch (r.parentKind) {
      case 'select':
        Io(n, e.outputType);
        break;
      case 'include':
        bc(n, e.outputType);
        break;
      case 'omit':
        Ec(n, e.outputType);
        break;
    }
  }
  t.addErrorMessage((n) => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
    return (
      r.parentKind !== 'unknown' &&
        i.push(`for ${n.bold(r.parentKind)} statement`),
      i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),
      i.push(jt(n)),
      i.join(' ')
    );
  });
}
function cc(e, t) {
  let r = _o(e.selectionPath, t);
  r.parentKind !== 'unknown' && r.field.value.markAsError(),
    t.addErrorMessage(
      (n) =>
        `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${
          e.underlyingError
        }`,
    );
}
function pc(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && (n.getField(r)?.markAsError(), xc(n, e.arguments)),
    t.addErrorMessage((i) =>
      Mo(
        i,
        r,
        e.arguments.map((o) => o.name),
      ),
    );
}
function dc(e, t) {
  let [r, n] = $t(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (i) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r)?.asObject();
    o && Lo(o, e.inputType);
  }
  t.addErrorMessage((o) =>
    Mo(
      o,
      n,
      e.inputType.fields.map((s) => s.name),
    ),
  );
}
function Mo(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = vc(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(jt(e)),
    n.join(' ')
  );
}
function fc(e, t) {
  let r;
  t.addErrorMessage((l) =>
    r?.value instanceof H && r.value.text === 'null'
      ? `Argument \`${l.green(o)}\` must not be ${l.red('null')}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (!n) return;
  let [i, o] = $t(e.argumentPath),
    s = new qt(),
    a = n.getDeepFieldValue(i)?.asObject();
  if (a)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object')
    ) {
      for (let l of e.inputTypes[0].fields)
        s.addField(l.name, l.typeNames.join(' | '));
      a.addSuggestion(new ce(o, s).makeRequired());
    } else {
      let l = e.inputTypes.map(Fo).join(' | ');
      a.addSuggestion(new ce(o, l).makeRequired());
    }
}
function Fo(e) {
  return e.kind === 'list' ? `${Fo(e.elementType)}[]` : e.name;
}
function mc(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = Tr(
        'or',
        e.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(
        r,
      )}\`: Invalid value provided. Expected ${o}, provided ${i.red(
        e.inferredType,
      )}.`;
    });
}
function gc(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && o.push(`: ${e.underlyingError}`),
        o.push('.'),
        e.argument.typeNames.length > 0)
      ) {
        let s = Tr(
          'or',
          e.argument.typeNames.map((a) => i.green(a)),
        );
        o.push(` Expected ${s}.`);
      }
      return o.join('');
    });
}
function hc(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i;
  if (n) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof H && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ['Unable to fit value'];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(' ')
    );
  });
}
function yc(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (n) {
    let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
    i && Lo(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green('at least one of')} ${Tr(
                'or',
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green('at least one')} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(jt(i)),
      o.join(' ')
    );
  });
}
function wc(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i = [];
  if (n) {
    let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
    o && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green('exactly one')} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${o.green('at most one')} argument,`)
          : s.push(
              `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${Tr(
          'and',
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push('one.')
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(' ')
    );
  });
}
function Io(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new ce(r.name, 'true'));
}
function bc(e, t) {
  for (let r of t.fields)
    r.isRelation &&
      !e.hasField(r.name) &&
      e.addSuggestion(new ce(r.name, 'true'));
}
function Ec(e, t) {
  for (let r of t.fields)
    !e.hasField(r.name) &&
      !r.isRelation &&
      e.addSuggestion(new ce(r.name, 'true'));
}
function xc(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new ce(r.name, r.typeNames.join(' | ')));
}
function _o(e, t) {
  let [r, n] = $t(e),
    i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
  if (!i) return { parentKind: 'unknown', fieldName: n };
  let o = i.getFieldValue('select')?.asObject(),
    s = i.getFieldValue('include')?.asObject(),
    a = i.getFieldValue('omit')?.asObject(),
    l = o?.getField(n);
  return o && l
    ? { parentKind: 'select', parent: o, field: l, fieldName: n }
    : ((l = s?.getField(n)),
      s && l
        ? { parentKind: 'include', field: l, parent: s, fieldName: n }
        : ((l = a?.getField(n)),
          a && l
            ? { parentKind: 'omit', field: l, parent: a, fieldName: n }
            : { parentKind: 'unknown', fieldName: n }));
}
function Lo(e, t) {
  if (t.kind === 'object')
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new ce(r.name, r.typeNames.join(' | ')));
}
function $t(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error('unexpected empty path');
  return [t, r];
}
function jt({ green: e, enabled: t }) {
  return (
    'Available options are ' +
    (t ? `listed in ${e('green')}` : 'marked with ?') +
    '.'
  );
}
function Tr(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(', ')} ${e} ${n}`;
}
var Pc = 3;
function vc(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, Oo.default)(e, i);
    o > Pc || (o < r && ((r = o), (n = i)));
  }
  return n;
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Bt = class {
  modelName;
  name;
  typeName;
  isList;
  isEnum;
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? 'List' : '',
      r = this.isEnum ? 'Enum' : '';
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function gt(e) {
  return e instanceof Bt;
}
m();
c();
p();
d();
f();
var Cr = Symbol(),
  kn = new WeakMap(),
  Ie = class {
    constructor(t) {
      t === Cr
        ? kn.set(this, `Prisma.${this._getName()}`)
        : kn.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return kn.get(this);
    }
  },
  Ut = class extends Ie {
    _getNamespace() {
      return 'NullTypes';
    }
  },
  Vt = class extends Ut {
    _brand_DbNull;
  };
On(Vt, 'DbNull');
var Qt = class extends Ut {
  _brand_JsonNull;
};
On(Qt, 'JsonNull');
var Gt = class extends Ut {
  _brand_AnyNull;
};
On(Gt, 'AnyNull');
var Ar = {
  classes: { DbNull: Vt, JsonNull: Qt, AnyNull: Gt },
  instances: { DbNull: new Vt(Cr), JsonNull: new Qt(Cr), AnyNull: new Gt(Cr) },
};
function On(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
m();
c();
p();
d();
f();
var No = ': ',
  Sr = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
    }
    hasError = !1;
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + No.length;
    }
    write(t) {
      let r = new xe(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(No).write(this.value);
    }
  };
var Mn = class {
  arguments;
  errorMessages = [];
  constructor(t) {
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function ht(e) {
  return new Mn(Do(e));
}
function Do(e) {
  let t = new mt();
  for (let [r, n] of Object.entries(e)) {
    let i = new Sr(r, qo(n));
    t.addField(i);
  }
  return t;
}
function qo(e) {
  if (typeof e == 'string') return new H(JSON.stringify(e));
  if (typeof e == 'number' || typeof e == 'boolean') return new H(String(e));
  if (typeof e == 'bigint') return new H(`${e}n`);
  if (e === null) return new H('null');
  if (e === void 0) return new H('undefined');
  if (ut(e)) return new H(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new H(`Buffer.alloc(${e.byteLength})`)
      : new H(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = hr(e) ? e.toISOString() : 'Invalid Date';
    return new H(`new Date("${t}")`);
  }
  return e instanceof Ie
    ? new H(`Prisma.${e._getName()}`)
    : gt(e)
      ? new H(`prisma.${je(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? Tc(e)
        : typeof e == 'object'
          ? Do(e)
          : new H(Object.prototype.toString.call(e));
}
function Tc(e) {
  let t = new ft();
  for (let r of e) t.addItem(qo(r));
  return t;
}
function Rr(e, t) {
  let r = t === 'pretty' ? ko : vr,
    n = e.renderAllMessages(r),
    i = new pt(0, { colors: r }).write(e).toString();
  return { message: n, args: i };
}
function kr({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
  globalOmit: s,
}) {
  let a = ht(e);
  for (let h of t) Er(h, a, s);
  let { message: l, args: u } = Rr(a, r),
    g = br({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === 'pretty',
      callArguments: u,
    });
  throw new ee(g, { clientVersion: o });
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
function Pe(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
m();
c();
p();
d();
f();
function jo(e, t, r) {
  let n = Pe(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Cc({
        ...e,
        ...$o(t.name, e, t.result.$allModels),
        ...$o(t.name, e, t.result[n]),
      });
}
function Cc(e) {
  let t = new Ee(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return it(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function $o(e, t, r) {
  return r
    ? it(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Ac(t, o, i),
      }))
    : {};
}
function Ac(e, t, r) {
  let n = e?.[t]?.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Bo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
function Uo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (!e[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var Or = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
    }
    computedFieldsCache = new Ee();
    modelExtensionsCache = new Ee();
    queryCallbacksCache = new Ee();
    clientExtensions = Nt(() =>
      this.extension.client
        ? {
            ...this.previous?.getAllClientExtensions(),
            ...this.extension.client,
          }
        : this.previous?.getAllClientExtensions(),
    );
    batchCallbacks = Nt(() => {
      let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
        r = this.extension.query?.$__internalBatch;
      return r ? t.concat(r) : t;
    });
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        jo(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Pe(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== '$none' &&
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
  yt = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new Or(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new Or(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
m();
c();
p();
d();
f();
var Mr = class {
  constructor(t) {
    this.name = t;
  }
};
function Vo(e) {
  return e instanceof Mr;
}
function Qo(e) {
  return new Mr(e);
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Go = Symbol(),
  Jt = class {
    constructor(t) {
      if (t !== Go)
        throw new Error('Skip instance can not be constructed directly');
    }
    ifUndefined(t) {
      return t === void 0 ? Fr : t;
    }
  },
  Fr = new Jt(Go);
function ve(e) {
  return e instanceof Jt;
}
var Sc = {
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
  Jo = 'explicitly `undefined` values are not allowed';
function Ir({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i = yt.empty(),
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
  previewFeatures: u,
  globalOmit: g,
}) {
  let h = new Fn({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: l,
    previewFeatures: u,
    globalOmit: g,
  });
  return { modelName: e, action: Sc[t], query: Wt(r, h) };
}
function Wt({ select: e, include: t, ...r } = {}, n) {
  let i = r.omit;
  return delete r.omit, { arguments: Ko(r, n), selection: Rc(e, t, i, n) };
}
function Rc(e, t, r, n) {
  return e
    ? (t
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
      Fc(e, n))
    : kc(n, t, r);
}
function kc(e, t, r) {
  let n = {};
  return (
    e.modelOrType &&
      !e.isRawAction() &&
      ((n.$composites = !0), (n.$scalars = !0)),
    t && Oc(n, t, e),
    Mc(n, r, e),
    n
  );
}
function Oc(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    if (ve(i)) continue;
    let o = r.nestSelection(n);
    if ((In(i, o), i === !1 || i === void 0)) {
      e[n] = !1;
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
      e[n] = Wt(i === !0 ? {} : i, o);
      continue;
    }
    if (i === !0) {
      e[n] = !0;
      continue;
    }
    e[n] = Wt(i, o);
  }
}
function Mc(e, t, r) {
  let n = r.getComputedFields(),
    i = { ...r.getGlobalOmit(), ...t },
    o = Uo(i, n);
  for (let [s, a] of Object.entries(o)) {
    if (ve(a)) continue;
    In(a, r.nestSelection(s));
    let l = r.findField(s);
    (n?.[s] && !l) || (e[s] = !a);
  }
}
function Fc(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Bo(e, n);
  for (let [o, s] of Object.entries(i)) {
    if (ve(s)) continue;
    let a = t.nestSelection(o);
    In(s, a);
    let l = t.findField(o);
    if (!(n?.[o] && !l)) {
      if (s === !1 || s === void 0 || ve(s)) {
        r[o] = !1;
        continue;
      }
      if (s === !0) {
        l?.kind === 'object' ? (r[o] = Wt({}, a)) : (r[o] = !0);
        continue;
      }
      r[o] = Wt(s, a);
    }
  }
  return r;
}
function Wo(e, t) {
  if (e === null) return null;
  if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean')
    return e;
  if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) };
  if (lt(e)) {
    if (hr(e)) return { $type: 'DateTime', value: e.toISOString() };
    t.throwValidationError({
      kind: 'InvalidArgumentValue',
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ['Date'] },
      underlyingError: 'Provided Date object is invalid',
    });
  }
  if (Vo(e)) return { $type: 'Param', value: e.name };
  if (gt(e))
    return {
      $type: 'FieldRef',
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return Ic(e, t);
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e;
    return { $type: 'Bytes', value: w.Buffer.from(r, n, i).toString('base64') };
  }
  if (_c(e)) return e.values;
  if (ut(e)) return { $type: 'Decimal', value: e.toFixed() };
  if (e instanceof Ie) {
    if (e !== Ar.instances[e._getName()])
      throw new Error('Invalid ObjectEnumValue');
    return { $type: 'Enum', value: e._getName() };
  }
  if (Lc(e)) return e.toJSON();
  if (typeof e == 'object') return Ko(e, t);
  t.throwValidationError({
    kind: 'InvalidArgumentValue',
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(
      e,
    )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Ko(e, t) {
  if (e.$type) return { $type: 'Raw', value: e };
  let r = {};
  for (let n in e) {
    let i = e[n],
      o = t.nestArgument(n);
    ve(i) ||
      (i !== void 0
        ? (r[n] = Wo(i, o))
        : t.isPreviewFeatureOn('strictUndefinedChecks') &&
          t.throwValidationError({
            kind: 'InvalidArgumentValue',
            argumentPath: o.getArgumentPath(),
            selectionPath: t.getSelectionPath(),
            argument: { name: t.getArgumentName(), typeNames: [] },
            underlyingError: Jo,
          }));
  }
  return r;
}
function Ic(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    if (o === void 0 || ve(o)) {
      let s = o === void 0 ? 'undefined' : 'Prisma.skip';
      t.throwValidationError({
        kind: 'InvalidArgumentValue',
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`,
      });
    }
    r.push(Wo(o, i));
  }
  return r;
}
function _c(e) {
  return typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0;
}
function Lc(e) {
  return typeof e == 'object' && e !== null && typeof e.toJSON == 'function';
}
function In(e, t) {
  e === void 0 &&
    t.isPreviewFeatureOn('strictUndefinedChecks') &&
    t.throwValidationError({
      kind: 'InvalidSelectionValue',
      selectionPath: t.getSelectionPath(),
      underlyingError: Jo,
    });
}
var Fn = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.modelOrType =
        this.params.runtimeDataModel.models[this.params.modelName] ??
        this.params.runtimeDataModel.types[this.params.modelName]);
  }
  modelOrType;
  throwValidationError(t) {
    kr({
      errors: [t],
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
        fields: this.modelOrType.fields.map((t) => ({
          name: t.name,
          typeName: 'boolean',
          isRelation: t.kind === 'object',
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
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    return this.modelOrType?.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === 'object' ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  getGlobalOmit() {
    return this.params.modelName && this.shouldApplyGlobalOmit()
      ? (this.params.globalOmit?.[je(this.params.modelName)] ?? {})
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
        Me(this.params.action, 'Unknown action');
    }
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
m();
c();
p();
d();
f();
function Ho(e) {
  if (!e._hasPreviewFlag('metrics'))
    throw new ee(
      '`metrics` preview feature must be enabled in order to access metrics API',
      { clientVersion: e._clientVersion },
    );
}
var wt = class {
  _client;
  constructor(t) {
    this._client = t;
  }
  prometheus(t) {
    return (
      Ho(this._client),
      this._client._engine.metrics({ format: 'prometheus', ...t })
    );
  }
  json(t) {
    return (
      Ho(this._client), this._client._engine.metrics({ format: 'json', ...t })
    );
  }
};
m();
c();
p();
d();
f();
function zo(e, t) {
  let r = Nt(() => Nc(t));
  Object.defineProperty(e, 'dmmf', { get: () => r.get() });
}
function Nc(e) {
  return {
    datamodel: { models: _n(e.models), enums: _n(e.enums), types: _n(e.types) },
  };
}
function _n(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
m();
c();
p();
d();
f();
var Ln = new WeakMap(),
  _r = '$$PrismaTypedSql',
  Kt = class {
    constructor(t, r) {
      Ln.set(this, { sql: t, values: r }),
        Object.defineProperty(this, _r, { value: _r });
    }
    get sql() {
      return Ln.get(this).sql;
    }
    get values() {
      return Ln.get(this).values;
    }
  };
function Yo(e) {
  return (...t) => new Kt(e, t);
}
function Lr(e) {
  return e != null && e[_r] === _r;
}
m();
c();
p();
d();
f();
var ga = Se(Zo());
m();
c();
p();
d();
f();
Xo();
cn();
dn();
m();
c();
p();
d();
f();
var ae = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError('Expected at least 1 string')
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
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
function es(e, t = ',', r = '', n = '') {
  if (e.length === 0)
    throw new TypeError(
      'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
    );
  return new ae([r, ...Array(e.length - 1).fill(t), n], e);
}
function Nn(e) {
  return new ae([e], []);
}
var ts = Nn('');
function Dn(e, ...t) {
  return new ae(e, t);
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
function Ht(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
m();
c();
p();
d();
f();
function re(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
m();
c();
p();
d();
f();
function Ke(e) {
  let t = new Ee();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    },
  };
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Dr = { enumerable: !0, configurable: !0, writable: !0 };
function qr(e) {
  let t = new Set(e);
  return {
    getPrototypeOf: () => Object.prototype,
    getOwnPropertyDescriptor: () => Dr,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var rs = Symbol.for('nodejs.util.inspect.custom');
function me(e, t) {
  let r = qc(t),
    n = new Set(),
    i = new Proxy(e, {
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
        let s = ns(Reflect.ownKeys(o), r),
          a = ns(Array.from(r.keys()), r);
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
        let l = r.get(s);
        return l
          ? l.getPropertyDescriptor
            ? { ...Dr, ...l?.getPropertyDescriptor(s) }
            : Dr
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
      getPrototypeOf: () => Object.prototype,
    });
  return (
    (i[rs] = function () {
      let o = { ...this };
      return delete o[rs], o;
    }),
    i
  );
}
function qc(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function ns(e, t) {
  return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
m();
c();
p();
d();
f();
function bt(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
m();
c();
p();
d();
f();
function $r(e, t) {
  return {
    batch: e,
    transaction:
      t?.kind === 'batch'
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
m();
c();
p();
d();
f();
function is(e) {
  if (e === void 0) return '';
  let t = ht(e);
  return new pt(0, { colors: vr }).write(t).toString();
}
m();
c();
p();
d();
f();
var $c = 'P2037';
function jr({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new oe(jc(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new G(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function jc(e, t) {
  let r = e.message;
  return (
    (t === 'postgresql' || t === 'postgres' || t === 'mysql') &&
      e.error_code === $c &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  );
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var zt = '<unknown>';
function os(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var i = Vc(n) || Gc(n) || Kc(n) || Zc(n) || zc(n);
    return i && r.push(i), r;
  }, []);
}
var Bc =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Uc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Vc(e) {
  var t = Bc.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf('native') === 0,
    n = t[2] && t[2].indexOf('eval') === 0,
    i = Uc.exec(t[2]);
  return (
    n && i != null && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || zt,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var Qc =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Gc(e) {
  var t = Qc.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || zt,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Jc =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Wc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Kc(e) {
  var t = Jc.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(' > eval') > -1,
    n = Wc.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || zt,
      arguments: t[2] ? t[2].split(',') : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var Hc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function zc(e) {
  var t = Hc.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || zt,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var Yc =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Zc(e) {
  var t = Yc.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || zt,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var qn = class {
    getLocation() {
      return null;
    }
  },
  $n = class {
    _error;
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = os(t).find((i) => {
        if (!i.file) return !1;
        let o = wn(i.file);
        return (
          o !== '<anonymous>' &&
          !o.includes('@prisma') &&
          !o.includes('/packages/client/src/runtime/') &&
          !o.endsWith('/runtime/binary.js') &&
          !o.endsWith('/runtime/library.js') &&
          !o.endsWith('/runtime/edge.js') &&
          !o.endsWith('/runtime/edge-esm.js') &&
          !o.startsWith('internal/') &&
          !i.methodName.includes('new ') &&
          !i.methodName.includes('getCallSite') &&
          !i.methodName.includes('Proxy.') &&
          i.methodName.split('.').length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
function Ue(e) {
  return e === 'minimal'
    ? typeof $EnabledCallSite == 'function' && e !== 'minimal'
      ? new $EnabledCallSite()
      : new qn()
    : new $n();
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var ss = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Et(e = {}) {
  let t = ep(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      ss[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function ep(e = {}) {
  return typeof e._count == 'boolean'
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function Br(e = {}) {
  return (t) => (typeof e._count == 'boolean' && (t._count = t._count._all), t);
}
function as(e, t) {
  let r = Br(e);
  return t({ action: 'aggregate', unpacker: r, argsMapper: Et })(e);
}
m();
c();
p();
d();
f();
function tp(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == 'object'
    ? Et({ ...r, _count: t })
    : Et({ ...r, _count: { _all: !0 } });
}
function rp(e = {}) {
  return typeof e.select == 'object'
    ? (t) => Br(e)(t)._count
    : (t) => Br(e)(t)._count._all;
}
function ls(e, t) {
  return t({ action: 'count', unpacker: rp(e), argsMapper: tp })(e);
}
m();
c();
p();
d();
f();
function np(e = {}) {
  let t = Et(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == 'string' && (t.select[r] = !0);
  else typeof t.by == 'string' && (t.select[t.by] = !0);
  return t;
}
function ip(e = {}) {
  return (t) => (
    typeof e?._count == 'boolean' &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function us(e, t) {
  return t({ action: 'groupBy', unpacker: ip(e), argsMapper: np })(e);
}
function cs(e, t, r) {
  if (t === 'aggregate') return (n) => as(n, r);
  if (t === 'count') return (n) => ls(n, r);
  if (t === 'groupBy') return (n) => us(n, r);
}
m();
c();
p();
d();
f();
function ps(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = ho(r, 'name');
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == 'symbol') return i[o];
        let s = n[o];
        if (s) return new Bt(e, o, s.type, s.isList, s.kind === 'enum');
      },
      ...qr(Object.keys(n)),
    },
  );
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var ds = (e) => (Array.isArray(e) ? e : e.split('.')),
  jn = (e, t) => ds(t).reduce((r, n) => r && r[n], e),
  fs = (e, t, r) =>
    ds(t).reduceRight(
      (n, i, o, s) => Object.assign({}, jn(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function op(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, 'select', e];
}
function sp(e, t, r) {
  return t === void 0 ? (e ?? {}) : fs(t, r, e || !0);
}
function Bn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, u) => ({ ...l, [u.name]: u }),
    {},
  );
  return (l) => {
    let u = Ue(e._errorFormat),
      g = op(n, i),
      h = sp(l, o, g),
      v = r({ dataPath: g, callsite: u })(h),
      R = ap(e, t);
    return new Proxy(v, {
      get(C, A) {
        if (!R.includes(A)) return C[A];
        let I = [a[A].type, r, A],
          L = [g, h];
        return Bn(e, ...I, ...L);
      },
      ...qr([...R, ...Object.getOwnPropertyNames(v)]),
    });
  };
}
function ap(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === 'object')
    .map((r) => r.name);
}
var lp = [
    'findUnique',
    'findUniqueOrThrow',
    'findFirst',
    'findFirstOrThrow',
    'create',
    'update',
    'upsert',
    'delete',
  ],
  up = ['aggregate', 'count', 'groupBy'];
function Un(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      cp(e, t),
      dp(e, t),
      Ht(r),
      re('name', () => t),
      re('$name', () => t),
      re('$parent', () => e._appliedParent),
    ];
  return me({}, n);
}
function cp(e, t) {
  let r = Pe(t),
    n = Object.keys(ct).concat('count');
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (a) => (l) => {
          let u = Ue(e._errorFormat);
          return e._createPrismaPromise(
            (g) => {
              let h = {
                args: l,
                dataPath: [],
                action: o,
                model: t,
                clientMethod: `${r}.${i}`,
                jsModelName: r,
                transaction: g,
                callsite: u,
              };
              return e._request({ ...h, ...a });
            },
            { action: o, args: l, model: t },
          );
        };
      return lp.includes(o) ? Bn(e, t, s) : pp(i) ? cs(e, i, s) : s({});
    },
  };
}
function pp(e) {
  return up.includes(e);
}
function dp(e, t) {
  return Ke(
    re('fields', () => {
      let r = e._runtimeDataModel.models[t];
      return ps(t, r);
    }),
  );
}
m();
c();
p();
d();
f();
function ms(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Vn = Symbol();
function Yt(e) {
  let t = [
      fp(e),
      mp(e),
      re(Vn, () => e),
      re('$parent', () => e._appliedParent),
    ],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(Ht(r)), me(e, t);
}
function fp(e) {
  let t = Object.getPrototypeOf(e._originalClient),
    r = [...new Set(Object.getOwnPropertyNames(t))];
  return {
    getKeys() {
      return r;
    },
    getPropertyValue(n) {
      return e[n];
    },
  };
}
function mp(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Pe),
    n = [...new Set(t.concat(r))];
  return Ke({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = ms(i);
      if (e._runtimeDataModel.models[o] !== void 0) return Un(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return Un(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function gs(e) {
  return e[Vn] ? e[Vn] : e;
}
function hs(e) {
  if (typeof e == 'function') return e(this);
  if (e.client?.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine;
    this._originalClient._engine = new r(
      this._originalClient._accelerateEngineConfig,
    );
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return Yt(t);
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
function ys({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t);
  if (!o) return e;
  let s = [],
    a = [];
  for (let l of Object.values(o)) {
    if (n) {
      if (n[l.name]) continue;
      let u = l.needs.filter((g) => n[g]);
      u.length > 0 && a.push(bt(u));
    } else if (r) {
      if (!r[l.name]) continue;
      let u = l.needs.filter((g) => !r[g]);
      u.length > 0 && a.push(bt(u));
    }
    gp(e, l.needs) && s.push(hp(l, me(e, s)));
  }
  return s.length > 0 || a.length > 0 ? me(e, [...s, ...a]) : e;
}
function gp(e, t) {
  return t.every((r) => bn(e, r));
}
function hp(e, t) {
  return Ke(re(e.name, () => e.compute(t)));
}
m();
c();
p();
d();
f();
function Ur({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = Ur({
        result: t[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = e(t, i, r) ?? t;
  return (
    r.include &&
      ws({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      ws({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function ws({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null || ve(s)) continue;
    let l = n.models[r].fields.find((g) => g.name === o);
    if (!l || l.kind !== 'object' || !l.relationName) continue;
    let u = typeof s == 'object' ? s : {};
    t[o] = Ur({
      visitor: i,
      result: t[o],
      args: u,
      modelName: l.type,
      runtimeDataModel: n,
    });
  }
}
function bs({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
  globalOmit: o,
}) {
  return n.isEmpty() || e == null || typeof e != 'object' || !i.models[t]
    ? e
    : Ur({
        result: e,
        args: r ?? {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (a, l, u) => {
          let g = Pe(l);
          return ys({
            result: a,
            modelName: g,
            select: u.select,
            omit: u.select ? void 0 : { ...o?.[g], ...u.omit },
            extensions: n,
          });
        },
      });
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var yp = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'],
  Es = yp;
function xs(e) {
  if (e instanceof ae) return wp(e);
  if (Lr(e)) return bp(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = Zt(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = Zt(e[r]);
  return t;
}
function wp(e) {
  return new ae(e.strings, e.values);
}
function bp(e) {
  return new Kt(e.sql, e.values);
}
function Zt(e) {
  if (typeof e != 'object' || e == null || e instanceof Ie || gt(e)) return e;
  if (ut(e)) return new be(e.toFixed());
  if (lt(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = Zt(e[t]);
    return r;
  }
  if (typeof e == 'object') {
    let t = {};
    for (let r in e)
      r === '__proto__'
        ? Object.defineProperty(t, r, {
            value: Zt(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Zt(e[r]));
    return t;
  }
  Me(e, 'Unknown value');
}
function vs(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    let o = t.customDataProxyFetch;
    return (
      'transaction' in t &&
        i !== void 0 &&
        (t.transaction?.kind === 'batch' && t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: xs(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch;
              return (
                (a.customDataProxyFetch = Ss(o, l)),
                (a.args = s),
                vs(e, a, r, n + 1)
              );
            },
          })
    );
  });
}
function Ts(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r ?? '$none', o);
  return vs(e, t, s);
}
function Cs(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? As(r, n, 0, e) : e(r);
  };
}
function As(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch;
      return (a.customDataProxyFetch = Ss(i, l)), As(a, t, r + 1, n);
    },
  });
}
var Ps = (e) => e;
function Ss(e = Ps, t = Ps) {
  return (r) => e(t(r));
}
m();
c();
p();
d();
f();
var Rs = K('prisma:client'),
  ks = { Vercel: 'vercel', 'Netlify CI': 'netlify' };
function Os({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Rs('checkPlatformCaching:postinstall', e),
    Rs('checkPlatformCaching:ciName', t),
    e === !0 && t && t in ks)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ks[t]}-build`;
    throw (console.error(n), new V(n, r));
  }
}
m();
c();
p();
d();
f();
function Ms(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
        ? { [t[0]]: { url: e.datasourceUrl } }
        : {}
    : {};
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Ep = () => globalThis.process?.release?.name === 'node',
  xp = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun,
  Pp = () => !!globalThis.Deno,
  vp = () => typeof globalThis.Netlify == 'object',
  Tp = () => typeof globalThis.EdgeRuntime == 'object',
  Cp = () => globalThis.navigator?.userAgent === 'Cloudflare-Workers';
function Ap() {
  return (
    [
      [vp, 'netlify'],
      [Tp, 'edge-light'],
      [Cp, 'workerd'],
      [Pp, 'deno'],
      [xp, 'bun'],
      [Ep, 'node'],
    ]
      .flatMap((r) => (r[0]() ? [r[1]] : []))
      .at(0) ?? ''
  );
}
var Sp = {
  node: 'Node.js',
  workerd: 'Cloudflare Workers',
  deno: 'Deno and Deno Deploy',
  netlify: 'Netlify Edge Functions',
  'edge-light':
    'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)',
};
function Fs() {
  let e = Ap();
  return {
    id: e,
    prettyName: Sp[e] || e,
    isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(e),
  };
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Qn = Se(yn());
m();
c();
p();
d();
f();
function Is(e) {
  return e
    ? e
        .replace(/".*"/g, '"X"')
        .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
    : '';
}
m();
c();
p();
d();
f();
function _s(e) {
  return e
    .split(
      `
`,
    )
    .map((t) =>
      t
        .replace(
          /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
          '',
        )
        .replace(/\+\d+\s*ms$/, ''),
    ).join(`
`);
}
m();
c();
p();
d();
f();
var Ls = Se(Zi());
function Ns({
  title: e,
  user: t = 'prisma',
  repo: r = 'prisma',
  template: n = 'bug_report.yml',
  body: i,
}) {
  return (0, Ls.default)({ user: t, repo: r, template: n, title: e, body: i });
}
function Ds({
  version: e,
  binaryTarget: t,
  title: r,
  description: n,
  engineVersion: i,
  database: o,
  query: s,
}) {
  let a = Ii(6e3 - (s?.length ?? 0)),
    l = _s((0, Qn.default)(a)),
    u = n
      ? `# Description
\`\`\`
${n}
\`\`\``
      : '',
    g = (0,
    Qn.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${y.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Is(s) : ''}
\`\`\`
`),
    h = Ns({ title: r, body: g });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${At(h)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
m();
c();
p();
d();
f();
function Vr({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  let i,
    o = Object.keys(e)[0],
    s = e[o]?.url,
    a = t[o]?.url;
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
    throw new V(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new V(
      'error: Missing URL environment variable, value, or override.',
      n,
    );
  return i;
}
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
function Gn(e) {
  return e.name === 'DriverAdapterError' && typeof e.cause == 'object';
}
m();
c();
p();
d();
f();
function Qr(e) {
  return {
    ok: !0,
    value: e,
    map(t) {
      return Qr(t(e));
    },
    flatMap(t) {
      return t(e);
    },
  };
}
function He(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return He(e);
    },
    flatMap() {
      return He(e);
    },
  };
}
var qs = K('driver-adapter-utils'),
  Jn = class {
    registeredErrors = [];
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  };
var Wn = (e, t = new Jn()) => {
    let r = {
      adapterName: e.adapterName,
      errorRegistry: t,
      queryRaw: _e(t, e.queryRaw.bind(e)),
      executeRaw: _e(t, e.executeRaw.bind(e)),
      executeScript: _e(t, e.executeScript.bind(e)),
      dispose: _e(t, e.dispose.bind(e)),
      provider: e.provider,
      startTransaction: async (...n) =>
        (await _e(t, e.startTransaction.bind(e))(...n)).map((o) => Rp(t, o)),
    };
    return (
      e.getConnectionInfo &&
        (r.getConnectionInfo = kp(t, e.getConnectionInfo.bind(e))),
      r
    );
  },
  Rp = (e, t) => ({
    adapterName: t.adapterName,
    provider: t.provider,
    options: t.options,
    queryRaw: _e(e, t.queryRaw.bind(t)),
    executeRaw: _e(e, t.executeRaw.bind(t)),
    commit: _e(e, t.commit.bind(t)),
    rollback: _e(e, t.rollback.bind(t)),
  });
function _e(e, t) {
  return async (...r) => {
    try {
      return Qr(await t(...r));
    } catch (n) {
      if ((qs('[error@wrapAsync]', n), Gn(n))) return He(n.cause);
      let i = e.registerNewError(n);
      return He({ kind: 'GenericJs', id: i });
    }
  };
}
function kp(e, t) {
  return (...r) => {
    try {
      return Qr(t(...r));
    } catch (n) {
      if ((qs('[error@wrapSync]', n), Gn(n))) return He(n.cause);
      let i = e.registerNewError(n);
      return He({ kind: 'GenericJs', id: i });
    }
  };
}
m();
c();
p();
d();
f();
function $s(e) {
  if (e?.kind === 'itx') return e.options.id;
}
m();
c();
p();
d();
f();
var Kn = class {
    engineObject;
    constructor(t, r, n) {
      this.engineObject = __PrismaProxy.create({
        datamodel: t.datamodel,
        env: y.env,
        ignoreEnvVarErrors: !0,
        datasourceOverrides: t.datasourceOverrides ?? {},
        logLevel: t.logLevel,
        logQueries: t.logQueries ?? !1,
        logCallback: r,
        enableTracing: t.enableTracing,
      });
    }
    async connect(t, r) {
      return __PrismaProxy.connect(this.engineObject, t, r);
    }
    async disconnect(t, r) {
      return __PrismaProxy.disconnect(this.engineObject, t, r);
    }
    query(t, r, n, i) {
      return __PrismaProxy.execute(this.engineObject, t, r, n, i);
    }
    compile() {
      throw new Error('not implemented');
    }
    sdlSchema() {
      return Promise.resolve('{}');
    }
    dmmf(t) {
      return Promise.resolve('{}');
    }
    async startTransaction(t, r, n) {
      return __PrismaProxy.startTransaction(this.engineObject, t, r, n);
    }
    async commitTransaction(t, r, n) {
      return __PrismaProxy.commitTransaction(this.engineObject, t, r, n);
    }
    async rollbackTransaction(t, r, n) {
      return __PrismaProxy.rollbackTransaction(this.engineObject, t, r, n);
    }
    metrics(t) {
      return Promise.resolve('{}');
    }
    async applyPendingMigrations() {
      return __PrismaProxy.applyPendingMigrations(this.engineObject);
    }
    trace(t) {
      return __PrismaProxy.trace(this.engineObject, t);
    }
  },
  js = {
    async loadLibrary(e) {
      if (!__PrismaProxy)
        throw new V(
          '__PrismaProxy not detected make sure React Native bindings are installed',
          e.clientVersion,
        );
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
        QueryEngine: Kn,
      };
    },
  };
var Op = 'P2036',
  Te = K('prisma:client:libraryEngine');
function Mp(e) {
  return e.item_type === 'query' && 'query' in e;
}
function Fp(e) {
  return 'level' in e ? e.level === 'error' && e.message === 'PANIC' : !1;
}
var z2 = [...pn, 'native'],
  Ip = 0xffffffffffffffffn,
  Hn = 1n;
function _p() {
  let e = Hn++;
  return Hn > Ip && (Hn = 1n), e;
}
var Xt = class {
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
  constructor(t, r) {
    (this.libraryLoader = js),
      (this.config = t),
      (this.libraryStarted = !1),
      (this.logQueries = t.logQueries ?? !1),
      (this.logLevel = t.logLevel ?? 'error'),
      (this.logEmitter = t.logEmitter),
      (this.datamodel = t.inlineSchema),
      (this.tracingHelper = t.tracingHelper),
      t.enableDebugLogs && (this.logLevel = 'debug');
    let n = Object.keys(t.overrideDatasources)[0],
      i = t.overrideDatasources[n]?.url;
    n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }),
      (this.libraryInstantiationPromise = this.instantiateLibrary());
  }
  wrapEngine(t) {
    return {
      applyPendingMigrations: t.applyPendingMigrations?.bind(t),
      commitTransaction: this.withRequestId(t.commitTransaction.bind(t)),
      connect: this.withRequestId(t.connect.bind(t)),
      disconnect: this.withRequestId(t.disconnect.bind(t)),
      metrics: t.metrics?.bind(t),
      query: this.withRequestId(t.query.bind(t)),
      rollbackTransaction: this.withRequestId(t.rollbackTransaction.bind(t)),
      sdlSchema: t.sdlSchema?.bind(t),
      startTransaction: this.withRequestId(t.startTransaction.bind(t)),
      trace: t.trace.bind(t),
    };
  }
  withRequestId(t) {
    return async (...r) => {
      let n = _p().toString();
      try {
        return await t(...r, n);
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
    await this.start(), await this.engine?.applyPendingMigrations();
  }
  async transaction(t, r, n) {
    await this.start();
    let i = await this.adapterPromise,
      o = JSON.stringify(r),
      s;
    if (t === 'start') {
      let l = JSON.stringify({
        max_wait: n.maxWait,
        timeout: n.timeout,
        isolation_level: n.isolationLevel,
      });
      s = await this.engine?.startTransaction(l, o);
    } else
      t === 'commit'
        ? (s = await this.engine?.commitTransaction(n.id, o))
        : t === 'rollback' &&
          (s = await this.engine?.rollbackTransaction(n.id, o));
    let a = this.parseEngineResponse(s);
    if (Lp(a)) {
      let l = this.getExternalAdapterError(a, i?.errorRegistry);
      throw l
        ? l.error
        : new oe(a.message, {
            code: a.error_code,
            clientVersion: this.config.clientVersion,
            meta: a.meta,
          });
    } else if (typeof a.message == 'string')
      throw new G(a.message, { clientVersion: this.config.clientVersion });
    return a;
  }
  async instantiateLibrary() {
    if ((Te('internalSetup'), this.libraryInstantiationPromise))
      return this.libraryInstantiationPromise;
    (this.binaryTarget = await this.getCurrentBinaryTarget()),
      await this.tracingHelper.runInChildSpan('load_engine', () =>
        this.loadEngine(),
      ),
      this.version();
  }
  async getCurrentBinaryTarget() {}
  parseEngineResponse(t) {
    if (!t)
      throw new G('Response from the Engine was empty', {
        clientVersion: this.config.clientVersion,
      });
    try {
      return JSON.parse(t);
    } catch {
      throw new G('Unable to JSON.parse response from engine', {
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
        let t = new b(this);
        this.adapterPromise ||
          (this.adapterPromise = this.config.adapter?.connect()?.then(Wn));
        let r = await this.adapterPromise;
        r && Te('Using driver adapter: %O', r),
          (this.engine = this.wrapEngine(
            new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: y.env,
                logQueries: this.config.logQueries ?? !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides: this.datasourceOverrides ?? {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: 'json',
                enableTracing: this.tracingHelper.isEnabled(),
              },
              (n) => {
                t.deref()?.logger(n);
              },
              r,
            ),
          ));
      } catch (t) {
        let r = t,
          n = this.parseInitError(r.message);
        throw typeof n == 'string'
          ? r
          : new V(n.message, this.config.clientVersion, n.error_code);
      }
    }
  }
  logger(t) {
    let r = this.parseEngineResponse(t);
    r &&
      ((r.level = r?.level.toLowerCase() ?? 'unknown'),
      Mp(r)
        ? this.logEmitter.emit('query', {
            timestamp: new Date(),
            query: r.query,
            params: r.params,
            duration: Number(r.duration_ms),
            target: r.module_path,
          })
        : Fp(r)
          ? (this.loggerRustPanic = new ue(
              zn(
                this,
                `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`,
              ),
              this.config.clientVersion,
            ))
          : this.logEmitter.emit(r.level, {
              timestamp: new Date(),
              message: r.message,
              target: r.module_path,
            }));
  }
  parseInitError(t) {
    try {
      return JSON.parse(t);
    } catch {}
    return t;
  }
  parseRequestError(t) {
    try {
      return JSON.parse(t);
    } catch {}
    return t;
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
        Te(
          `library already starting, this.libraryStarted: ${this.libraryStarted}`,
        ),
        this.libraryStartingPromise
      );
    if (this.libraryStarted) return;
    let t = async () => {
      Te('library starting');
      try {
        let r = { traceparent: this.tracingHelper.getTraceParent() };
        await this.engine?.connect(JSON.stringify(r)),
          (this.libraryStarted = !0),
          Te('library started');
      } catch (r) {
        let n = this.parseInitError(r.message);
        throw typeof n == 'string'
          ? r
          : new V(n.message, this.config.clientVersion, n.error_code);
      } finally {
        this.libraryStartingPromise = void 0;
      }
    };
    return (
      (this.libraryStartingPromise = this.tracingHelper.runInChildSpan(
        'connect',
        t,
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
      return Te('library is already stopping'), this.libraryStoppingPromise;
    if (!this.libraryStarted) return;
    let t = async () => {
      await new Promise((n) => setTimeout(n, 5)), Te('library stopping');
      let r = { traceparent: this.tracingHelper.getTraceParent() };
      await this.engine?.disconnect(JSON.stringify(r)),
        (this.libraryStarted = !1),
        (this.libraryStoppingPromise = void 0),
        await (await this.adapterPromise)?.dispose(),
        (this.adapterPromise = void 0),
        Te('library stopped');
    };
    return (
      (this.libraryStoppingPromise = this.tracingHelper.runInChildSpan(
        'disconnect',
        t,
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
  debugPanic(t) {
    return this.library?.debugPanic(t);
  }
  async request(t, { traceparent: r, interactiveTransaction: n }) {
    Te(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    let i = JSON.stringify({ traceparent: r }),
      o = JSON.stringify(t);
    try {
      await this.start();
      let s = await this.adapterPromise;
      (this.executingQueryPromise = this.engine?.query(o, i, n?.id)),
        (this.lastQuery = o);
      let a = this.parseEngineResponse(await this.executingQueryPromise);
      if (a.errors)
        throw a.errors.length === 1
          ? this.buildQueryError(a.errors[0], s?.errorRegistry)
          : new G(JSON.stringify(a.errors), {
              clientVersion: this.config.clientVersion,
            });
      if (this.loggerRustPanic) throw this.loggerRustPanic;
      return { data: a };
    } catch (s) {
      if (s instanceof V) throw s;
      if (s.code === 'GenericFailure' && s.message?.startsWith('PANIC:'))
        throw new ue(zn(this, s.message), this.config.clientVersion);
      let a = this.parseRequestError(s.message);
      throw typeof a == 'string'
        ? s
        : new G(
            `${a.message}
${a.backtrace}`,
            { clientVersion: this.config.clientVersion },
          );
    }
  }
  async requestBatch(t, { transaction: r, traceparent: n }) {
    Te('requestBatch');
    let i = $r(t, r);
    await this.start();
    let o = await this.adapterPromise;
    (this.lastQuery = JSON.stringify(i)),
      (this.executingQueryPromise = this.engine.query(
        this.lastQuery,
        JSON.stringify({ traceparent: n }),
        $s(r),
      ));
    let s = await this.executingQueryPromise,
      a = this.parseEngineResponse(s);
    if (a.errors)
      throw a.errors.length === 1
        ? this.buildQueryError(a.errors[0], o?.errorRegistry)
        : new G(JSON.stringify(a.errors), {
            clientVersion: this.config.clientVersion,
          });
    let { batchResult: l, errors: u } = a;
    if (Array.isArray(l))
      return l.map((g) =>
        g.errors && g.errors.length > 0
          ? (this.loggerRustPanic ??
            this.buildQueryError(g.errors[0], o?.errorRegistry))
          : { data: g },
      );
    throw u && u.length === 1
      ? new Error(u[0].error)
      : new Error(JSON.stringify(a));
  }
  buildQueryError(t, r) {
    if (t.user_facing_error.is_panic)
      return new ue(
        zn(this, t.user_facing_error.message),
        this.config.clientVersion,
      );
    let n = this.getExternalAdapterError(t.user_facing_error, r);
    return n
      ? n.error
      : jr(t, this.config.clientVersion, this.config.activeProvider);
  }
  getExternalAdapterError(t, r) {
    if (t.error_code === Op && r) {
      let n = t.meta?.id;
      sr(
        typeof n == 'number',
        'Malformed external JS error received from the engine',
      );
      let i = r.consumeError(n);
      return sr(i, 'External error with reported id was not registered'), i;
    }
  }
  async metrics(t) {
    await this.start();
    let r = await this.engine.metrics(JSON.stringify(t));
    return t.format === 'prometheus' ? r : this.parseEngineResponse(r);
  }
};
function Lp(e) {
  return typeof e == 'object' && e !== null && e.error_code !== void 0;
}
function zn(e, t) {
  return Ds({
    binaryTarget: e.binaryTarget,
    title: t,
    version: e.config.clientVersion,
    engineVersion: e.versionInfo?.commit,
    database: e.config.activeProvider,
    query: e.lastQuery,
  });
}
function Bs({ copyEngine: e = !0 }, t) {
  let r;
  try {
    r = Vr({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    });
  } catch {}
  let n = !!(r?.startsWith('prisma://') || gn(r));
  e &&
    n &&
    _t(
      'recommend--no-engine',
      'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)',
    );
  let i = nt(t.generator),
    o = n || !e,
    s = !!t.adapter,
    a = i === 'library',
    l = i === 'binary',
    u = i === 'client';
  if ((o && s) || (s && !1)) {
    let g;
    throw (
      (e
        ? r?.startsWith('prisma://')
          ? (g = [
              'Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.',
              'Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.',
            ])
          : (g = [
              'Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.',
            ])
        : (g = [
            'Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.',
            'Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.',
          ]),
      new ee(
        g.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    );
  }
  return new Xt(t);
}
m();
c();
p();
d();
f();
function Gr({ generator: e }) {
  return e?.previewFeatures ?? [];
}
m();
c();
p();
d();
f();
var Us = (e) => ({ command: e });
m();
c();
p();
d();
f();
m();
c();
p();
d();
f();
var Vs = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
m();
c();
p();
d();
f();
function xt(e) {
  try {
    return Qs(e, 'fast');
  } catch {
    return Qs(e, 'slow');
  }
}
function Qs(e, t) {
  return JSON.stringify(e.map((r) => Js(r, t)));
}
function Js(e, t) {
  if (Array.isArray(e)) return e.map((r) => Js(r, t));
  if (typeof e == 'bigint')
    return { prisma__type: 'bigint', prisma__value: e.toString() };
  if (lt(e)) return { prisma__type: 'date', prisma__value: e.toJSON() };
  if (be.isDecimal(e))
    return { prisma__type: 'decimal', prisma__value: e.toJSON() };
  if (w.Buffer.isBuffer(e))
    return { prisma__type: 'bytes', prisma__value: e.toString('base64') };
  if (Np(e))
    return {
      prisma__type: 'bytes',
      prisma__value: w.Buffer.from(e).toString('base64'),
    };
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e;
    return {
      prisma__type: 'bytes',
      prisma__value: w.Buffer.from(r, n, i).toString('base64'),
    };
  }
  return typeof e == 'object' && t === 'slow' ? Ws(e) : e;
}
function Np(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == 'object' && e !== null
      ? e[Symbol.toStringTag] === 'ArrayBuffer' ||
        e[Symbol.toStringTag] === 'SharedArrayBuffer'
      : !1;
}
function Ws(e) {
  if (typeof e != 'object' || e === null) return e;
  if (typeof e.toJSON == 'function') return e.toJSON();
  if (Array.isArray(e)) return e.map(Gs);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Gs(e[r]);
  return t;
}
function Gs(e) {
  return typeof e == 'bigint' ? e.toString() : Ws(e);
}
var Dp = /^(\s*alter\s)/i,
  Ks = K('prisma:client');
function Yn(e, t, r, n) {
  if (
    !(e !== 'postgresql' && e !== 'cockroachdb') &&
    r.length > 0 &&
    Dp.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Zn =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = '',
        i;
      if (Lr(r))
        (n = r.sql),
          (i = { values: xt(r.values), __prismaRawParameters__: !0 });
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: xt(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case 'sqlite':
          case 'mysql': {
            (n = r.sql),
              (i = { values: xt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'cockroachdb':
          case 'postgresql':
          case 'postgres': {
            (n = r.text),
              (i = { values: xt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'sqlserver': {
            (n = Vs(r)),
              (i = { values: xt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i?.values
          ? Ks(`prisma.${e}(${n}, ${i.values})`)
          : Ks(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      );
    },
  Hs = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new ae(t, r);
    },
  },
  zs = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
m();
c();
p();
d();
f();
function Xn(e) {
  return function (r, n) {
    let i,
      o = (s = e) => {
        try {
          return s === void 0 || s?.kind === 'itx'
            ? (i ??= Ys(r(s)))
            : Ys(r(s));
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
function Ys(e) {
  return typeof e.then == 'function' ? e : Promise.resolve(e);
}
m();
c();
p();
d();
f();
var qp = fn.split('.')[0],
  $p = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return '00-10-10-00';
    },
    dispatchEngineSpans() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  ei = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    dispatchEngineSpans(t) {
      return this.getGlobalTracingHelper().dispatchEngineSpans(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      let t = globalThis[`V${qp}_PRISMA_INSTRUMENTATION`],
        r = globalThis.PRISMA_INSTRUMENTATION;
      return t?.helper ?? r?.helper ?? $p;
    }
  };
function Zs() {
  return new ei();
}
m();
c();
p();
d();
f();
function Xs(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n);
    },
  };
}
m();
c();
p();
d();
f();
function ea(e) {
  return typeof e == 'string'
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == 'string' ? r : r.level;
          return n === 'query'
            ? t
            : t && (r === 'info' || t === 'info')
              ? 'info'
              : n;
        },
        void 0,
      );
}
m();
c();
p();
d();
f();
var Jr = class {
  _middlewares = [];
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
m();
c();
p();
d();
f();
var ra = Se(yn());
m();
c();
p();
d();
f();
function Wr(e) {
  return typeof e.batchRequestIdx == 'number';
}
m();
c();
p();
d();
f();
function ta(e) {
  if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow') return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(ti(e.query.arguments)),
    t.push(ti(e.query.selection)),
    t.join('')
  );
}
function ti(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == 'object' && n !== null ? `(${r} ${ti(n)})` : r;
    })
    .join(' ')})`;
}
m();
c();
p();
d();
f();
var jp = {
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
function ri(e) {
  return jp[e];
}
m();
c();
p();
d();
f();
var Kr = class {
  constructor(t) {
    this.options = t;
    this.batches = {};
  }
  batches;
  tickActive = !1;
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            y.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
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
m();
c();
p();
d();
f();
function ze(e, t) {
  if (t === null) return t;
  switch (e) {
    case 'bigint':
      return BigInt(t);
    case 'bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = w.Buffer.from(t, 'base64');
      return new Uint8Array(r, n, i);
    }
    case 'decimal':
      return new be(t);
    case 'datetime':
    case 'date':
      return new Date(t);
    case 'time':
      return new Date(`1970-01-01T${t}Z`);
    case 'bigint-array':
      return t.map((r) => ze('bigint', r));
    case 'bytes-array':
      return t.map((r) => ze('bytes', r));
    case 'decimal-array':
      return t.map((r) => ze('decimal', r));
    case 'datetime-array':
      return t.map((r) => ze('datetime', r));
    case 'date-array':
      return t.map((r) => ze('date', r));
    case 'time-array':
      return t.map((r) => ze('time', r));
    default:
      return t;
  }
}
function Hr(e) {
  let t = [],
    r = Bp(e);
  for (let n = 0; n < e.rows.length; n++) {
    let i = e.rows[n],
      o = { ...r };
    for (let s = 0; s < i.length; s++) o[e.columns[s]] = ze(e.types[s], i[s]);
    t.push(o);
  }
  return t;
}
function Bp(e) {
  let t = {};
  for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
  return t;
}
var Up = K('prisma:client:request_handler'),
  zr = class {
    client;
    dataloader;
    logEmitter;
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new Kr({
          batchLoader: Cs(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((h) => h.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              u = n.some((h) => ri(h.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: Vp(o),
                containsWrite: u,
                customDataProxyFetch: i,
              })
            ).map((h, v) => {
              if (h instanceof Error) return h;
              try {
                return this.mapQueryEngineResult(n[v], h);
              } catch (R) {
                return R;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === 'itx' ? na(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: ri(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : ta(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === 'batch' &&
              i.transaction?.kind === 'batch'
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
          globalOmit: t.globalOmit,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = this.unpack(i, t, r);
      return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit('error', {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
      globalOmit: a,
    }) {
      if ((Up(t), Qp(t, i))) throw t;
      if (t instanceof oe && Gp(t)) {
        let u = ia(t.meta);
        kr({
          args: o,
          errors: [u],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
          globalOmit: a,
        });
      }
      let l = t.message;
      if (
        (n &&
          (l = br({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === 'pretty',
            message: l,
          })),
        (l = this.sanitizeMessage(l)),
        t.code)
      ) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new oe(l, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: u,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new ue(l, this.client._clientVersion);
        if (t instanceof G)
          throw new G(l, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof V) throw new V(l, this.client._clientVersion);
        if (t instanceof ue) throw new ue(l, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== 'pretty'
        ? (0, ra.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.keys(t)[0],
        o = Object.values(t)[0],
        s = r.filter((u) => u !== 'select' && u !== 'include'),
        a = jn(o, s),
        l = i === 'queryRaw' ? Hr(a) : at(a);
      return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
      return 'RequestHandler';
    }
  };
function Vp(e) {
  if (e) {
    if (e.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: e.isolationLevel } };
    if (e.kind === 'itx') return { kind: 'itx', options: na(e) };
    Me(e, 'Unknown transaction kind');
  }
}
function na(e) {
  return { id: e.id, payload: e.payload };
}
function Qp(e, t) {
  return Wr(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index;
}
function Gp(e) {
  return e.code === 'P2009' || e.code === 'P2012';
}
function ia(e) {
  if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map(ia) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
m();
c();
p();
d();
f();
var oa = '6.6.0';
var sa = oa;
m();
c();
p();
d();
f();
var pa = Se(Sn());
m();
c();
p();
d();
f();
var q = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = 'PrismaClientConstructorValidationError');
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientConstructorValidationError';
  }
};
le(q, 'PrismaClientConstructorValidationError');
var aa = [
    'datasources',
    'datasourceUrl',
    'errorFormat',
    'adapter',
    'log',
    'transactionOptions',
    'omit',
    '__internal',
  ],
  la = ['pretty', 'colorless', 'minimal'],
  ua = ['info', 'query', 'warn', 'error'],
  Wp = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != 'object' || Array.isArray(e))
          throw new q(
            `Invalid value ${JSON.stringify(
              e,
            )} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Pt(r, t) || ` Available datasources: ${t.join(', ')}`;
            throw new q(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != 'object' || Array.isArray(n))
            throw new q(`Invalid value ${JSON.stringify(
              e,
            )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == 'object')
            for (let [i, o] of Object.entries(n)) {
              if (i !== 'url')
                throw new q(`Invalid value ${JSON.stringify(
                  e,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != 'string')
                throw new q(`Invalid value ${JSON.stringify(
                  o,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (!e && nt(t.generator) === 'client')
        throw new q(
          'Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.',
        );
      if (e === null) return;
      if (e === void 0)
        throw new q(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!Gr(t).includes('driverAdapters'))
        throw new q(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (nt(t.generator) === 'binary')
        throw new q(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e < 'u' && typeof e != 'string')
        throw new q(`Invalid value ${JSON.stringify(
          e,
        )} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != 'string')
          throw new q(
            `Invalid value ${JSON.stringify(
              e,
            )} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!la.includes(e)) {
          let t = Pt(e, la);
          throw new q(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new q(
          `Invalid value ${JSON.stringify(
            e,
          )} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == 'string' && !ua.includes(r)) {
          let n = Pt(r, ua);
          throw new q(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ['stdout', 'event'];
            if (!o.includes(i)) {
              let s = Pt(i, o);
              throw new q(
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
              throw new q(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new q(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        );
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new q(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        );
    },
    omit: (e, t) => {
      if (typeof e != 'object')
        throw new q('"omit" option is expected to be an object.');
      if (e === null) throw new q('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Hp(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: 'UnknownModel', modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            r.push({ kind: 'UnknownField', modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: 'RelationInOmit', modelKey: n, fieldName: s });
            continue;
          }
          typeof a != 'boolean' &&
            r.push({ kind: 'InvalidFieldValue', modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new q(zp(e, r));
    },
    __internal: (e) => {
      if (!e) return;
      let t = ['debug', 'engine', 'configOverride'];
      if (typeof e != 'object')
        throw new q(
          `Invalid value ${JSON.stringify(
            e,
          )} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Pt(r, t);
          throw new q(
            `Invalid property ${JSON.stringify(
              r,
            )} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function da(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!aa.includes(r)) {
      let i = Pt(r, aa);
      throw new q(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    Wp[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new q(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function Pt(e, t) {
  if (t.length === 0 || typeof e != 'string') return '';
  let r = Kp(e, t);
  return r ? ` Did you mean "${r}"?` : '';
}
function Kp(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, pa.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function Hp(e, t) {
  return ca(t.models, e) ?? ca(t.types, e);
}
function ca(e, t) {
  let r = Object.keys(e).find((n) => je(n) === t);
  if (r) return e[r];
}
function zp(e, t) {
  let r = ht(e);
  for (let o of t)
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
  let { message: n, args: i } = Rr(r, 'colorless');
  return `Error validating "omit" option:

${i}

${n}`;
}
m();
c();
p();
d();
f();
function fa(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          l = (u) => {
            o || ((o = !0), r(u));
          };
        for (let u = 0; u < e.length; u++)
          e[u].then(
            (g) => {
              (n[u] = g), a();
            },
            (g) => {
              if (!Wr(g)) {
                l(g);
                return;
              }
              g.batchRequestIdx === u ? l(g) : (i || (i = g), a());
            },
          );
      });
}
var Ve = K('prisma:client');
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0);
var Yp = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  Zp = Symbol.for('prisma.client.transaction.id'),
  Xp = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function ha(e) {
  class t {
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
    _middlewares = new Jr();
    _previewFeatures;
    _activeProvider;
    _globalOmit;
    _extensions;
    _engine;
    _appliedParent;
    _createPrismaPromise = Xn();
    constructor(n) {
      (e = n?.__internal?.configOverride?.(e) ?? e), Os(e), n && da(n, e);
      let i = new Nr().on('error', () => {});
      (this._extensions = yt.empty()),
        (this._previewFeatures = Gr(e)),
        (this._clientVersion = e.clientVersion ?? sa),
        (this._activeProvider = e.activeProvider),
        (this._globalOmit = n?.omit),
        (this._tracingHelper = Zs());
      let o = e.relativeEnvPaths && {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            Oe.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            Oe.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        s;
      if (n?.adapter) {
        s = n.adapter;
        let l =
          e.activeProvider === 'postgresql' ? 'postgres' : e.activeProvider;
        if (s.provider !== l)
          throw new V(
            `The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`,
            this._clientVersion,
          );
        if (n.datasources || n.datasourceUrl !== void 0)
          throw new V(
            'Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.',
            this._clientVersion,
          );
      }
      let a = e.injectableEdgeEnv?.();
      try {
        let l = n ?? {},
          u = l.__internal ?? {},
          g = u.debug === !0;
        g && K.enable('prisma:client');
        let h = Oe.resolve(e.dirname, e.relativePath);
        or.existsSync(h) || (h = e.dirname),
          Ve('dirname', e.dirname),
          Ve('relativePath', e.relativePath),
          Ve('cwd', h);
        let v = u.engine || {};
        if (
          (l.errorFormat
            ? (this._errorFormat = l.errorFormat)
            : y.env.NODE_ENV === 'production'
              ? (this._errorFormat = 'minimal')
              : y.env.NO_COLOR
                ? (this._errorFormat = 'colorless')
                : (this._errorFormat = 'colorless'),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: h,
            dirname: e.dirname,
            enableDebugLogs: g,
            allowTriggerPanic: v.allowTriggerPanic,
            prismaPath: v.binaryPath ?? void 0,
            engineEndpoint: v.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === 'pretty',
            logLevel: l.log && ea(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == 'string'
                ? l.log === 'query'
                : l.log.find((R) =>
                    typeof R == 'string' ? R === 'query' : R.level === 'query',
                  )),
            env: a?.parsed ?? {},
            flags: [],
            engineWasm: e.engineWasm,
            compilerWasm: e.compilerWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: Ms(l, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait: l.transactionOptions?.maxWait ?? 2e3,
              timeout: l.transactionOptions?.timeout ?? 5e3,
              isolationLevel: l.transactionOptions?.isolationLevel,
            },
            logEmitter: i,
            isBundled: e.isBundled,
            adapter: s,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: Vr,
              getBatchRequestPayload: $r,
              prismaGraphQLToJSError: jr,
              PrismaClientUnknownRequestError: G,
              PrismaClientInitializationError: V,
              PrismaClientKnownRequestError: oe,
              debug: K('prisma:client:accelerateEngine'),
              engineVersion: ga.version,
              clientVersion: e.clientVersion,
            },
          }),
          Ve('clientVersion', e.clientVersion),
          (this._engine = Bs(e, this._engineConfig)),
          (this._requestHandler = new zr(this, i)),
          l.log)
        )
          for (let R of l.log) {
            let C =
              typeof R == 'string' ? R : R.emit === 'stdout' ? R.level : null;
            C &&
              this.$on(C, (A) => {
                It.log(`${It.tags[C] ?? ''}`, A.message || A.query);
              });
          }
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l);
      }
      return (this._appliedParent = Yt(this));
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
        _i();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: 'executeRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: Zn({ clientMethod: i, activeProvider: a }),
        callsite: Ue(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = ma(n, i);
          return (
            Yn(
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
        throw new ee(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          Yn(
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
      if (e.activeProvider !== 'mongodb')
        throw new ee(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: '$runCommandRaw',
          dataPath: [],
          action: 'runCommandRaw',
          argsMapper: Us,
          callsite: Ue(this._errorFormat),
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
        argsMapper: Zn({ clientMethod: i, activeProvider: a }),
        callsite: Ue(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...ma(n, i));
        throw new ee(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new ee(
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
      let o = Xp.nextId(),
        s = Xs(n.length),
        a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== 'PrismaPromise')
            throw new Error(
              'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.',
            );
          let g =
              i?.isolationLevel ??
              this._engineConfig.transactionOptions.isolationLevel,
            h = { kind: 'batch', id: o, index: u, isolationLevel: g, lock: s };
          return l.requestTransaction?.(h) ?? l;
        });
      return fa(a);
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
        l;
      try {
        let u = { kind: 'itx', ...a };
        (l = await n(this._createItxClient(u))),
          await this._engine.transaction('commit', o, a);
      } catch (u) {
        throw (
          (await this._engine.transaction('rollback', o, a).catch(() => {}), u)
        );
      }
      return l;
    }
    _createItxClient(n) {
      return me(
        Yt(
          me(gs(this), [
            re('_appliedParent', () => this._appliedParent._createItxClient(n)),
            re('_createPrismaPromise', () => Xn(n)),
            re(Zp, () => n.id),
          ]),
        ),
        [bt(Es)],
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
      let i = n.middlewareArgsMapper ?? Yp,
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
        l = async (u) => {
          let g = this._middlewares.get(++a);
          if (g)
            return this._tracingHelper.runInChildSpan(s.middleware, (M) =>
              g(u, (I) => (M?.end(), l(I))),
            );
          let { runInTransaction: h, args: v, ...R } = u,
            C = { ...n, ...R };
          v && (C.args = i.middlewareArgsToRequestArgs(v)),
            n.transaction !== void 0 && h === !1 && delete C.transaction;
          let A = await Ts(this, C);
          return C.model
            ? bs({
                result: A,
                modelName: C.model,
                args: C.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
                globalOmit: this._globalOmit,
              })
            : A;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: u,
      transaction: g,
      unpacker: h,
      otelParentCtx: v,
      customDataProxyFetch: R,
    }) {
      try {
        n = u ? u(n) : n;
        let C = { name: 'serialize' },
          A = this._tracingHelper.runInChildSpan(C, () =>
            Ir({
              modelName: l,
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
          K.enabled('prisma:client') &&
            (Ve('Prisma Client call:'),
            Ve(`prisma.${i}(${is(n)})`),
            Ve('Generated request:'),
            Ve(
              JSON.stringify(A, null, 2) +
                `
`,
            )),
          g?.kind === 'batch' && (await g.lock),
          this._requestHandler.request({
            protocolQuery: A,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: v,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            globalOmit: this._globalOmit,
            customDataProxyFetch: R,
          })
        );
      } catch (C) {
        throw ((C.clientVersion = this._clientVersion), C);
      }
    }
    $metrics = new wt(this);
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
    $extends = hs;
  }
  return t;
}
function ma(e, t) {
  return ed(e) ? [new ae(e, t), Hs] : [e, zs];
}
function ed(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
m();
c();
p();
d();
f();
var td = new Set([
  'toJSON',
  '$$typeof',
  'asymmetricMatch',
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function ya(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!td.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
m();
c();
p();
d();
f();
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
//# sourceMappingURL=react-native.js.map
