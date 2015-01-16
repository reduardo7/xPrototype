function $Test(name) {
	if (this instanceof  $Test) {
		var tests = [];

		function err(t, n, s, r, m) {
			console.error('#', t, 'Error in [', n, '] | Spected:', s, '| Result:', r, '| Message:', m)
			return false;
		}

		this.Eq = function (value, spected, message) {
			tests.push(function (n) {
				if (spected !== value) return err('Eq', n, spected, value, message);
				return true;
			}); return this;
		};
		this.Ne = function (value, spected, message) {
			tests.push(function (n) {
				if (spected === value) return err('Ne', n, spected, value, message);
				return true;
			}); return this;
		};
		this.Gt = function (value, spected, message) {
			tests.push(function (n) {
				if (spected >= value) return err('Gt', n, spected, value, message);
				return true;
			}); return this;
		};
		this.Lt = function (value, spected, message) {
			tests.push(function (n) {
				if (spected <= value) return err('Lt', n, spected, value, message);
				return true;
			}); return this;
		};
		this.Ge = function (value, spected, message) {
			tests.push(function (n) {
				if (spected > value) return err('Ge', n, spected, value, message);
				return true;
			}); return this;
		};
		this.Le = function (value, spected, message) {
			tests.push(function (n) {
				if (spected < value) return err('Le', n, spected, value, message);
				return true;
			}); return this;
		};
		this.IsTrue = function (value, message) {
			tests.push(function (n) {
				if (!value) return err('IsTrue', n, '[TRUE]', value, message);
				return true;
			}); return this;
		};
		this.IsFalse = function (value, message) {
			tests.push(function (n) {
				if (value) return err('IsFalse', n, '[FALSE]', value, message);
				return true;
			}); return this;
		};
		this.True = function (value, message) {
			tests.push(function (n) {
				if (value !== true) return err('True', n, true, value, message);
				return true;
			}); return this;
		};
		this.False = function (value, message) {
			tests.push(function (n) {
				if (value !== false) return err('False', n, false, value, message);
				return true;
			}); return this;
		};
		this.Null = function (value, message) {
			tests.push(function (n) {
				if (value !== null) return err('Null', n, null, value, message);
				return true;
			}); return this;
		};
		this.IsDef = function (value, message) {
			tests.push(function (n) {
				if (value === undefined) return err('Null', n, undefined, value, message);
				return true;
			}); return this;
		};
		this.IsUndef = function (value, message) {
			tests.push(function (n) {
				if (value !== undefined) return err('Null', n, undefined, value, message);
				return true;
			}); return this;
		};
		this.Test = function (fn) {
			tests.push(function (n) {
				try {
					fn.apply();
				} catch (ex) {
					return err('Test', n, '[!EXCEPTION]', '[EXCEPTION]', ex);
				}
				return true;
			}); return this;
		};

		this.Run = function () {
			console.log('###', 'Running Tests [', name, ']');

			var i, s, ec = 0, c = 0, oc = 0;

			for (i in tests) if (tests.hasOwnProperty(i)) {
				if (tests[i].apply(null, [i])) {
					oc++;
				} else {
					ec++;
				}

				c++;
			}

			console[(ec === 0) ? 'log' : 'error']('###', 'Finish Tests [', name, '] | Executed', c, '| Ok:', oc, '| Errors:', ec);

			return this;
		};
	} else {
		return new $Test(name);
	}
}

$Test('$isDef')
	.IsDef(this.$isDef)
	.False($isDef(null))
	.False($isDef(undefined))
	.True($isDef(function(){}))
	.True($isDef('asd'))
	.True($isDef({'a': 'b'}))
	.True($isDef([1, 4, 6]))
	.True($isDef(1.4))
	.True($isDef(123))
	.True($isDef(0))
	.True($isDef(''))
	.True($isDef({}))
	.True($isDef([]))
	.Run();

$Test('property.length')
	.IsDef(([]).length)
	.IsDef(({}).length)
	.IsDef(('').length)
	.Eq(([]).length, 0)
	.Eq(({}).length, 0)
	.Eq(([0, null, undefined]).length, 3)
	.Eq(({'a': '', 'b': null, 'c': undefined}).length, 3)
	.Eq(('').length, 0)
	.Eq(('\nb\t ').length, 4)
	.Run();

$Test('property.isNumber')
	.IsDef(([]).isNumber)
	.IsDef(({}).isNumber)
	.IsDef(('').isNumber)
	.IsDef((false).isNumber)
	.IsDef((function(){}).isNumber)
	.IsDef((1).isNumber)
	.IsDef((0.1).isNumber)
	.False(([]).isNumber)
	.False(({}).isNumber)
	.False(('').isNumber)
	.False((true).isNumber)
	.False((function(){}).isNumber)
	.True((1).isNumber)
	.True((0.1).isNumber)
	.Run();

$Test('property.isString')
	.IsDef(([]).isString)
	.IsDef(({}).isString)
	.IsDef(('').isString)
	.IsDef((false).isString)
	.IsDef((function(){}).isString)
	.IsDef((1).isString)
	.IsDef((0.1).isString)
	.False(([]).isString)
	.False(({}).isString)
	.False((1).isString)
	.False((true).isString)
	.False((0.1).isString)
	.False((function(){}).isString)
	.True(('').isString)
	.True((' ').isString)
	.Run();

$Test('property.isFunction')
	.IsDef(([]).isFunction)
	.IsDef(({}).isFunction)
	.IsDef(('').isFunction)
	.IsDef((false).isFunction)
	.IsDef((function(){}).isFunction)
	.IsDef((1).isFunction)
	.IsDef((0.1).isFunction)
	.False(([]).isFunction)
	.False(({}).isFunction)
	.False((1).isFunction)
	.False((true).isFunction)
	.False((0.1).isFunction)
	.False(('').isFunction)
	.True((function(){}).isFunction)
	.Run();

$Test('property.isBool')
	.IsDef(([]).isBool)
	.IsDef(({}).isBool)
	.IsDef(('').isBool)
	.IsDef((false).isBool)
	.IsDef((function(){}).isBool)
	.IsDef((1).isBool)
	.IsDef((0.1).isBool)
	.False(([]).isBool)
	.False(({}).isBool)
	.False((1).isBool)
	.False((0.1).isBool)
	.False(('').isBool)
	.False((function(){}).isBool)
	.True((true).isBool)
	.True((false).isBool)
	.Run();

$Test('property.isInt')
	.IsDef(([]).isInt)
	.IsDef(({}).isInt)
	.IsDef(('').isInt)
	.IsDef((false).isInt)
	.IsDef((function(){}).isInt)
	.IsDef((1).isInt)
	.IsDef((0.1).isInt)
	.False(([]).isInt)
	.False(({}).isInt)
	.False((0.1).isInt)
	.False((-4.1).isInt)
	.False(('').isInt)
	.False((function(){}).isInt)
	.False((true).isInt)
	.False((false).isInt)
	.True((1).isInt, 1)
	.True((1.0).isInt, 1.0)
	.True((-1).isInt, -1)
	.True((0).isInt, 0)
	.Run();

$Test('property.isFloat')
	.IsDef(([]).isFloat)
	.IsDef(({}).isFloat)
	.IsDef(('').isFloat)
	.IsDef((false).isFloat)
	.IsDef((function(){}).isFloat)
	.IsDef((1).isFloat)
	.False(([]).isFloat)
	.False(({}).isFloat)
	.False(('').isFloat)
	.False((function(){}).isFloat)
	.False((true).isFloat)
	.False((false).isFloat)
	.True((1).isFloat, 1)
	.True((1.0).isFloat, 1.0)
	.True((-1).isFloat, -1)
	.True((1.1).isFloat)
	.True((-1.1).isFloat)
	.Run();

$Test('property.isArray')
	.IsDef(([]).isArray)
	.IsDef(({}).isArray)
	.IsDef(('').isArray)
	.IsDef((false).isArray)
	.IsDef((function(){}).isArray)
	.IsDef((1).isArray)
	.False(({}).isArray)
	.False(('').isArray)
	.False((function(){}).isArray)
	.False((true).isArray)
	.False((false).isArray)
	.False((1).isArray, 1)
	.False((1.0).isArray, 1.0)
	.False((-1).isArray, -1)
	.False((1.1).isArray)
	.False((-1.1).isArray)
	.True(([]).isArray)
	.True(([5, 9, null]).isArray)
	.Run();

$Test('property.getType()')
	.IsDef(([]).getType)
	.IsDef(({}).getType)
	.IsDef(('').getType)
	.IsDef((false).getType)
	.IsDef((function(){}).getType)
	.IsDef((1).getType)
	.Eq(({}).getType(), 'object')
	.Eq(('').getType(), 'string')
	.Eq((function(){}).getType(), 'function')
	.Eq((true).getType(), 'bool')
	.Eq((false).getType(), 'bool')
	.Eq((1).getType(), 'int')
	.Eq((1.0).getType(), 'int')
	.Eq((-1).getType(), 'int')
	.Eq((1.1).getType(), 'float')
	.Eq((-1.1).getType(), 'float')
	.Eq(([]).getType(), 'array')
	.Eq(([5, 9, null]).getType(), 'array')
	.Run();

$Test('Number.property.times')
	.IsUndef(([]).times)
	.IsUndef(({}).times)
	.IsUndef(('').times)
	.IsUndef((false).times)
	.IsUndef((function(){}).times)
	.IsDef((1).times)
	.Eq((1).times.getType(), 'function')
	.Test(function () {
		var c = 0;
		var values = [0, 1, 2, 3, 4];
		(5).times(function (i) {
			if (values[c] !== i) throw 'Error Index [' + i + ']';
			c++;
		});
		if (c !== 5) throw 'Count is not 5';
	})
	.Test(function () {
		var c = 0;
		(10).times(function (i) {
			c++;
			if (i === 4) return false; // Break
		});
		if (c !== 5) throw 'Count is not 5';
	})
	.Test(function () {
		var c = 0;
		var values = [0, 1, 2, 3, 4, 5];
		(5.5).times(function (i) {
			if (values[c] !== i) throw 'Error Index [' + i + ']';
			c++;
		});
		if (c !== 6) throw 'Count is not 6';
	})
	.Test(function () {
		(-1).times(function () { throw '-1'; });
		(0).times(function () { throw '0'; });
	})
	.True((1).times(function () { }))
	.False((5).times(function () { return false; /* Break */ }))
	.IsUndef((5).times())
	.IsUndef((5).times(null))
	.IsUndef((5).times(undefined))
	.IsUndef((5).times(''))
	.IsUndef((5).times(0))
	.IsUndef((5).times(false))
	.Run();

$Test('Number.property.step')
	.IsUndef(([]).step)
	.IsUndef(({}).step)
	.IsUndef(('').step)
	.IsUndef((false).step)
	.IsUndef((function(){}).step)
	.IsDef((1).step)
	.Eq((1).step.getType(), 'function')
	.Test(function () {
		var c = 0;
		var values = [5, 7];
		(5).step(8, 2, function (i) {
			if (values[c] !== i) throw 'Error Index [' + i + ']';
			c++;
		});
		if (c !== 2) throw 'Count is not 2';
	})
	.Test(function () {
		(-1).step(-10, -1, function (i) {
			throw 'No step back';
		});
	})
	.Test(function () {
		var c = 0;
		(5).step(100, 2, function (i) {
			c++;
			if (i === 7) return false; // Break
		});
		if (c !== 2) throw 'Count is not 2';
	})
	.True((1).step(1, 1, function () { }))
	.False((5).step(10, 1, function () { return false; /* Break */ }))
	.IsUndef((5).step())
	.IsUndef((5).step(null))
	.IsUndef((5).step(undefined))
	.IsUndef((5).step(''))
	.IsUndef((5).step(0))
	.IsUndef((5).step(false))
	.Run();
