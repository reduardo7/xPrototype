/**
 * xPrototype v1.0.0
 * Copyright (c) 2015 xPrototype | Eduardo Daniel Cuomo | eduardo.cuomo.ar@gmail.com
 *
 * Project: https://github.com/reduardo7/xPrototype
 * Doc: https://github.com/reduardo7/xPrototype/blob/master/README.md
 */

(function () {
	'use strict';

	/** *********** **
	 *  Support Old  *
	 ** *********** **/

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	if (!Object.keys) {
		Object.keys = (function() {
			var hasOwnProperty = Object.prototype.hasOwnProperty,
				hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
				dontEnums = [
					'toString',
					'toLocaleString',
					'valueOf',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'constructor'
				],
				dontEnumsLength = dontEnums.length;

			return function (obj) {
				if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
					throw new TypeError('Object.keys called on non-object');
				}

				var result = [], prop, i;

				for (prop in obj) {
					if (hasOwnProperty.call(obj, prop)) {
						result.push(prop);
					}
				}

				if (hasDontEnumBug) {
					for (i = 0; i < dontEnumsLength; i++) {
						if (hasOwnProperty.call(obj, dontEnums[i])) {
							result.push(dontEnums[i]);
						}
					}
				}

				return result;
			};
		}());
	}


	/** *** **
	 *  AUX  *
	 ** *** **/
	
	function a2s(x, glue) {
		var i, a = [];
		for (i in x)
			if (x.hasOwnProperty(i))
				a.push(o2s(x[i]));
		return a.join(glue || ',');
	}

	function o2s(x, glue) {
		var t = typeof x;
		if ((t === 'boolean') || (x instanceof Boolean))
			x = x.valueOf(); // To Native boolean
		if (x === true)
			return 'true';
		if (x === false)
			return 'false';
		if ((t === 'undefined') || (x === undefined))
			return 'undefined';
		if (x === null)
			return 'null';
		if ((t === 'string') || (x instanceof String))
			return '"' + x + '"';
		if (x instanceof Array)
			return '[' + a2s(x, glue) + ']';
		if ((x instanceof Function) || (x instanceof Number) || (t === 'number'))
			return x.toString();

		var i, a = [];
		for (i in x)
			if (x.hasOwnProperty(i))
				a.push(o2s(i, glue) + ':' + o2s(x[i], glue));
		return '{' + a.join(glue || ',') + '}';
	}

	function pget(fn) {
		return {
			configurable: true,
			enumerable: false,
			get: fn
		};
	}

	function pval(fn) {
		return {
			configurable: true,
			enumerable: false,
			value: fn
		};
	}

	function clone(x, r) {
		if ((x === undefined) || (x === null) || (typeof x === 'string') || (typeof x === 'number') || (typeof x === 'function'))
			return x;
		if (x instanceof Array) {
			if (r) {
				var i, a = new Array(x.length);
				for (i in x) if (x.hasOwnProperty(i))
					a[i] = clone(x[i], true);
				return a;
			} else {
				return x.slice(0);
			}
		}
		
		var i, o = Object.create(x);
		for (i in x) if (x.hasOwnProperty(i))
			o[i] = r ? x[i] : clone(x[i], true);
		return o;
	}
	
	// MD5
	// http://www.myersdaily.org/joseph/javascript/md5-text.html
	function md5cycle(x, k) {
		var a = x[0],
			b = x[1],
			c = x[2],
			d = x[3];

		a = ff(a, b, c, d, k[0], 7, -680876936);
		d = ff(d, a, b, c, k[1], 12, -389564586);
		c = ff(c, d, a, b, k[2], 17, 606105819);
		b = ff(b, c, d, a, k[3], 22, -1044525330);
		a = ff(a, b, c, d, k[4], 7, -176418897);
		d = ff(d, a, b, c, k[5], 12, 1200080426);
		c = ff(c, d, a, b, k[6], 17, -1473231341);
		b = ff(b, c, d, a, k[7], 22, -45705983);
		a = ff(a, b, c, d, k[8], 7, 1770035416);
		d = ff(d, a, b, c, k[9], 12, -1958414417);
		c = ff(c, d, a, b, k[10], 17, -42063);
		b = ff(b, c, d, a, k[11], 22, -1990404162);
		a = ff(a, b, c, d, k[12], 7, 1804603682);
		d = ff(d, a, b, c, k[13], 12, -40341101);
		c = ff(c, d, a, b, k[14], 17, -1502002290);
		b = ff(b, c, d, a, k[15], 22, 1236535329);

		a = gg(a, b, c, d, k[1], 5, -165796510);
		d = gg(d, a, b, c, k[6], 9, -1069501632);
		c = gg(c, d, a, b, k[11], 14, 643717713);
		b = gg(b, c, d, a, k[0], 20, -373897302);
		a = gg(a, b, c, d, k[5], 5, -701558691);
		d = gg(d, a, b, c, k[10], 9, 38016083);
		c = gg(c, d, a, b, k[15], 14, -660478335);
		b = gg(b, c, d, a, k[4], 20, -405537848);
		a = gg(a, b, c, d, k[9], 5, 568446438);
		d = gg(d, a, b, c, k[14], 9, -1019803690);
		c = gg(c, d, a, b, k[3], 14, -187363961);
		b = gg(b, c, d, a, k[8], 20, 1163531501);
		a = gg(a, b, c, d, k[13], 5, -1444681467);
		d = gg(d, a, b, c, k[2], 9, -51403784);
		c = gg(c, d, a, b, k[7], 14, 1735328473);
		b = gg(b, c, d, a, k[12], 20, -1926607734);

		a = hh(a, b, c, d, k[5], 4, -378558);
		d = hh(d, a, b, c, k[8], 11, -2022574463);
		c = hh(c, d, a, b, k[11], 16, 1839030562);
		b = hh(b, c, d, a, k[14], 23, -35309556);
		a = hh(a, b, c, d, k[1], 4, -1530992060);
		d = hh(d, a, b, c, k[4], 11, 1272893353);
		c = hh(c, d, a, b, k[7], 16, -155497632);
		b = hh(b, c, d, a, k[10], 23, -1094730640);
		a = hh(a, b, c, d, k[13], 4, 681279174);
		d = hh(d, a, b, c, k[0], 11, -358537222);
		c = hh(c, d, a, b, k[3], 16, -722521979);
		b = hh(b, c, d, a, k[6], 23, 76029189);
		a = hh(a, b, c, d, k[9], 4, -640364487);
		d = hh(d, a, b, c, k[12], 11, -421815835);
		c = hh(c, d, a, b, k[15], 16, 530742520);
		b = hh(b, c, d, a, k[2], 23, -995338651);

		a = ii(a, b, c, d, k[0], 6, -198630844);
		d = ii(d, a, b, c, k[7], 10, 1126891415);
		c = ii(c, d, a, b, k[14], 15, -1416354905);
		b = ii(b, c, d, a, k[5], 21, -57434055);
		a = ii(a, b, c, d, k[12], 6, 1700485571);
		d = ii(d, a, b, c, k[3], 10, -1894986606);
		c = ii(c, d, a, b, k[10], 15, -1051523);
		b = ii(b, c, d, a, k[1], 21, -2054922799);
		a = ii(a, b, c, d, k[8], 6, 1873313359);
		d = ii(d, a, b, c, k[15], 10, -30611744);
		c = ii(c, d, a, b, k[6], 15, -1560198380);
		b = ii(b, c, d, a, k[13], 21, 1309151649);
		a = ii(a, b, c, d, k[4], 6, -145523070);
		d = ii(d, a, b, c, k[11], 10, -1120210379);
		c = ii(c, d, a, b, k[2], 15, 718787259);
		b = ii(b, c, d, a, k[9], 21, -343485551);

		x[0] = add32(a, x[0]);
		x[1] = add32(b, x[1]);
		x[2] = add32(c, x[2]);
		x[3] = add32(d, x[3]);
	}

	function cmn(q, a, b, x, s, t) {
		a = add32(add32(a, q), add32(x, t));
		return add32((a << s) | (a >>> (32 - s)), b);
	}

	function ff(a, b, c, d, x, s, t) {
		return cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}

	function gg(a, b, c, d, x, s, t) {
		return cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}

	function hh(a, b, c, d, x, s, t) {
		return cmn(b ^ c ^ d, a, b, x, s, t);
	}

	function ii(a, b, c, d, x, s, t) {
		return cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	function md51(s) {
		var n = s.length,
			state = [1732584193, -271733879, -1732584194, 271733878],
			i;
		for (i = 64; i <= s.length; i += 64) {
			md5cycle(state, md5blk(s.substring(i - 64, i)));
		}
		s = s.substring(i - 64);
		var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (i = 0; i < s.length; i++)
			tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
		tail[i >> 2] |= 0x80 << ((i % 4) << 3);
		if (i > 55) {
			md5cycle(state, tail);
			for (i = 0; i < 16; i++) tail[i] = 0;
		}
		tail[14] = n * 8;
		md5cycle(state, tail);
		return state;
	}

	function md5blk(s) { /* I figured global was faster.   */
		var md5blks = [],
			i; /* Andy King said do it this way. */
		for (i = 0; i < 64; i += 4) {
			md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
		}
		return md5blks;
	}

	var hex_chr = '0123456789abcdef'.split('');

	function rhex(n) {
		var s = '',
			j = 0;
		for (; j < 4; j++)
			s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
		return s;
	}

	function hex(x) {
		for (var i = 0; i < x.length; i++)
			x[i] = rhex(x[i]);
		return x.join('');
	}

	function md5(s) {
		return hex(md51(s));
	}

	var _add32 = function (a, b) {
		return (a + b) & 0xFFFFFFFF;
	};

	function add32(a, b) {
		return _add32(a, b);
	}

	if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
		_add32 = function (x, y) {
			var lsw = (x & 0xFFFF) + (y & 0xFFFF),
				msw = (x >> 16) + (y >> 16) + (lsw >> 16);
			return (msw << 16) | (lsw & 0xFFFF);
		}
	}

	function SortMode(col, desc) {
		if (this instanceof String.SortMode) {
			this.value = col.valueOf(col);
			this.desc = desc;
			this.asc = !desc;

			this.toString = function () { return this.value; };
		} else {
			return new String.SortMode(col, desc);
		}
	}

	/** ****** **
	 *  Object  *
	 ** ****** **/
	
	// Defined
	Object.defineProperties(Object, {
		defined: pval(function (x) {
			return (x !== undefined) && (x !== null);
		})
	});
	
	Object.defineProperties(Object.prototype, {
		// Length
		length: pget(function () { return Object.keys(this).length; }),

		// Keys
		getKeys: pval(function () { return Object.keys(this); }),

		// Values
		getValues: pval(function () {
			var i, k = Object.keys(this), v = [];
			for (i in k)
				v.push(this[k[i]]);
			return v;
		}),
		
		// Type Check
		isNumber: pget(function () { return this instanceof Number; }),
		isString: pget(function () { return this instanceof String; }),
		isFunction: pget(function () { return this instanceof Function; }),
		isBool: pget(function () { return this instanceof Boolean; }),
		isInt: pget(function () { return (this instanceof Number) && (this.valueOf() === parseInt(this, 10)); }),
		isFloat: pget(function () { return (this instanceof Number) && (this.valueOf() === parseFloat(this)); }),
		isArray: pget(function () { return this instanceof Array; }),

		// Get Type
		getType: pval(function () {
			if (this.isString) return 'string';
			if (this.isFunction) return 'function';
			if (this.isBool) return 'bool';
			if (this.isInt) return 'int';
			if (this.isFloat) return 'float';
			if (this.isArray) return 'array';
			return typeof this;
		}),

		// To String
		toStr: pval(function (glue) {
			return o2s(this, glue);
		}),

		// Clone
		clone: pval(function (recursive) {
			return clone(this, recursive);
		}),

		// For Each
		// x.each(function (KeyOrIndex, value) { ... })
		// Return FALSE to Break
		each: pval(function (fn) {
			if (typeof fn !== 'function')
				return undefined; // Error
			for (var i in this)
				if (this.hasOwnProperty(i) && (fn.apply(this[i], [i, this[i]]) === false))
					return false; // Break
			return true; // All finish
		}),

		// Sort By Key and For Each
		// x.sortByKeyEach(function (KeyOrIndex, value) { ... })
		// Return FALSE to Break
		sortByKeyEach: pval(function (fn) {
			if (typeof fn !== 'function')
				return undefined; // Error

			var i, j,
				ks = Object.keys(this);
			
			ks.sortAsc();

			for (j in ks) if (ks.hasOwnProperty(j)) {
				i = ks[j];

				if (fn.apply(this[i], [i, this[i]]) === false)
					return false; // Break
			}

			return true; // All finish
		}),

		// Sort By Key DESC and For Each
		// x.sortByKeyDescEach(function (KeyOrIndex, value) { ... })
		// Return FALSE to Break
		sortByKeyDescEach: pval(function (fn) {
			if (typeof fn !== 'function')
				return undefined; // Error

			var i, j,
				ks = Object.keys(this);
			
			ks.sortDesc();

			for (j in ks) if (ks.hasOwnProperty(j)) {
				i = ks[j];

				if (fn.apply(this[i], [i, this[i]]) === false)
					return false; // Break
			}

			return true; // All finish
		}),

		// Sort By
		sortByKey: pval(function (desc) {
			var i,
				o = Object.create(this.constructor),
				ks = Object.keys(this);
			
			if (desc) {
				ks.sortDesc();
			} else {
				ks.sortAsc();
			}

			for (i in ks)
				if (ks.hasOwnProperty(i))
					o[ks[i]] = this[ks[i]];

			return o;
		}),

		// Index Of
		indexOf: pval(function (x) {
			for (var i in this)
				if (this.hasOwnProperty(i) && (this[i] === x))
					return i;
			return null;
		}),

		// Contains
		contains: pval(function (x) {
			return this.indexOf(x) !== null;
		}),

		// Contains Key
		containsKey: pval(function (x) {
			return this.hasOwnProperty(x);
		}),

		// Convert
		toBool: pval(function () {
			if (this === true)
				return true;
			if (this === false)
				return false;
			var v = parseInt(this, 10);
			if (!isNaN(v))
				return (v !== 0);
			if (this instanceof Array)
				return this.length > 0;
			v = this.toString();
			if (v.trim() === '')
				return false;
			v = v.toLowerCase();
			if ((v === 'true') || (v === 't'))
				return true;
			if ((v === 'false') || (v === 'f'))
				return false;
			return !!this; // To Boolean
		}),
		toInt: pval(function () {
			return parseInt(this, 10);
		}),
		toFloat: pval(function () {
			return parseFloat(this);
		}),

		// MD5
		md5: pval(function () {
			return md5(this.toStr());
		})
	});

	/** ****** **
	 *  Number  *
	 ** ****** **/

	Object.defineProperties(Number.prototype, {
		// Times
		//(4).times(function (index) { ... });
		times: pval(function (fn) {
			if (typeof fn != 'function')
				return undefined; // Error
			if (this <= 0)
				return null; // Error
			for (var i = 0; i < this.valueOf(); i++)
				if (fn.apply(this, [i]) === false)
					return false; // Break
			return true; // All finish
		}),

		// Number: Step
		//(4).step(10, 2, function (index) { ... });
		step: pval(function (to, step, fn) {
			if (isNaN(to) || (to === 0))
				return undefined; // Error
			if (isNaN(step) || (step === 0))
				return undefined; // Error
			if (typeof fn != 'function')
				return undefined; // Error

			for (var i = this.valueOf(); i <= to; i += step)
				if (fn.apply(this, [i]) === false)
					return false; // Break

			return true; // All finish
		})
	});

	/** ***** **
	 *  Array  *
	 ** ***** **/

	Object.defineProperties(Array.prototype, {
		toStr: pval(function (glue) {
			return a2s(this, glue);
		}),
		contains: pval(function (x) {
			return this.indexOf(x) > -1;
		}),
		sortBy: pval(function (col) {
			if (arguments.length > 1) {
				var i;
				for (i = arguments.length - 1; i >= 0; i--)
					this.sortBy(arguments[i]);
			} else {
				if (col instanceof SortMode) {
					if (col.desc) {
						// DESC
						col = col.value;
						this.sort(function (a, b) {
							if (a[col] < b[col])
								return 1;
							if (a[col] > b[col])
								return -1;
							return 0;
						});
					} else {
						// ASC
						col = col.value;
						this.sort(function (a, b) {
							if (a[col] < b[col])
								return -1;
							if (a[col] > b[col])
								return 1;
							return 0;
						});
					}
				} else {
					this.sortBy(col.asc);
				}
			}

			return this;
		})
	});

	// Array Sort
	Array.prototype.sortAsc = function () {
		this.sort(function (a, b) {
			a = a + ''; // To String
			b = b + ''; // To String
			
			if (a < b)
				return -1;
			if (a > b)
				return 1;
			return 0;
		});
		return this;
	} ;
	Array.prototype.sortDesc = function () {
		this.sort(function (a, b) {
			a = a + ''; // To String
			b = b + ''; // To String
			
			if (a < b)
				return 1;
			if (a > b)
				return -1;
			return 0;
		});

		return this;
	};

	/** ******** **
	 *  Function  *
	 ** ******** **/
	
	// Timeout
	function ftimeout(t, args) {
		var f = this;
		ftimeout.id = setTimeout(function () {
			f.apply(null,args);
		}, t);
		return this;
	};
	ftimeout.id = undefined;
	ftimeout.stop = function () {
		if (ftimeout.id) {
			clearTimeout(ftimeout.id);
			ftimeout.id = undefined;
			return true;
		}
		return false;
	};

	// Interval
	function finterval(t, args) {
		var f = this;
		finterval.id = setInterval(function () {
			f.apply(null,args);
		}, t);
		return this;
	};
	finterval.id = undefined;
	finterval.stop = function () {
		if (finterval.id) {
			clearInterval(finterval.id);
			finterval.id = undefined;
			return true;
		}
		return false;
	};

	Object.defineProperties(Function.prototype, {
		// Timeout
		timeout: pval(ftimeout),
		// Interval
		interval: pval(finterval),
		// Extend
		extend: pval(function (c) {
			this.prototype = Object.create(c.prototype);
			this.prototype.constructor = this;
			this.prototype.base = c;
			return this;
		})
	});

	/** ****** **
	 *  String  *
	 ** ****** **/

	String.SortMode = SortMode;

	// String: Trim
	if (typeof String.prototype.trim !== 'function') {
		Object.defineProperty(String.prototype, 'trim', pval(function () {
			return this.replace(/^\s+|\s+$/g, '');
		}));
	}

	Object.defineProperties(String.prototype, {
		// ToCamelCase
		toCamelCase: pval(function () {
			return this.replace(/([\-\_\s]+)([a-zA-Z])/g, function ($1, $2, $3) {
				return $3.charAt(0).toUpperCase();
			});
		}),

		// SplitCamelCase
		splitCamelCase: pval(function (glue) {
			var arr = this.replace(/([A-Z]+)/g, ' $1').toLowerCase().split(' ');
			return (glue === undefined) ? arr : arr.join(glue);
		}),

		// Repeat
		repeat: pval(function (n) {
			n = parseInt(n, 10);
			if (isNaN(n) || n < 0)
				return null;
			return new Array(n + 1).join(this);
		}),

		// Contains
		contains: pval(function (x) {
			return this.indexOf(x) > -1;
		}),

		// Format String
		format: pval(function () {
			var s = this, i;
			for (i = 0; i < arguments.length; i++)
				s = s.replace("%" + i, arguments[i]);
			return s;
		}),

		// Cut and add "..." to the end
		cut: pval(function (max, end /*'...'*/) {
			if (end)
				end = end.toString().trim();
			if (!end)
				end = '...';
			var l = end.length;
			max = parseInt(max, 10);
			if (isNaN(max) || (max < l))
				max = 0;
			var s = this.trim();
			if (s === '')
				return '';
			if (max <= l)
				return end;
			max = max - l;
			if (s.length <= max)
				return s;
			return s.substring(0, max).replace(/\s*$/, '') + end;
		}),

		// Sort & Order
		desc: pget(function () {
			return String.SortMode(this, true);
		}),
		asc: pget(function () {
			return String.SortMode(this, false);
		})
	});
})();
