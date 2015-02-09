# xPrototype

## Object Static Methods

#### defined(x)
Determine if `x` is `null` or `undefined`.

###### Param
1. `x` Variable to check.

###### Return
`true` if defined (is not `null` and is not `undefined`).

##### Examples

```js
var x;
if (!Object.defined(x)) {
  alert('undefined!');
}

x = null;
if (!Object.defined(x)) {
  alert('undefined!');
}

x = 1;
if (Object.defined(x)) {
  alert('defined!');
}
```

## Object Properties

### length
```Array```/```String```/```Object``` length.

##### Examples

```js
var w = 'Hello World!';
alert(w.length); // <-- 12

var a = [ 111, 'aaa', undefined, null, function () {} ];
alert(a.length); // <-- 5

var o = { 'a': 111, 'b': '222', 'c': null, 'd': undefined, 123: 'num', o: { 'x1': 'x2' } };
alert(o.length); // <-- 6
```

### isNumber
Returns ```TRUE``` when variable/Object is a Number.

##### Examples

```js
var i = 0;
console.log(i.isNumber); // <-- TRUE

i = 1.5;
console.log(i.isNumber); // <-- TRUE

i = 'foo';
console.log(i.isNumber); // <-- FALSE

i = {};
console.log(i.isNumber); // <-- FALSE

i = [];
console.log(i.isNumber); // <-- FALSE
```

### isString
Returns ```TRUE``` when variable/Object is a String.

##### Examples

```js
var i = 'foo';
console.log(i.isString); // <-- TRUE

i = '';
console.log(i.isString); // <-- TRUE

i = 1;
console.log(i.isString); // <-- FALSE

i = {};
console.log(i.isString); // <-- FALSE

i = [];
console.log(i.isString); // <-- FALSE
```

### isFunction
Returns ```TRUE``` when variable/Object is a Function.

##### Examples

```js
var i = function () { };
console.log(i.isFunction); // <-- TRUE

i = [];
console.log(i.isFunction); // <-- FALSE
console.log(i.push.isFunction); // <-- TRUE

i = 1;
console.log(i.isFunction); // <-- FALSE

i = {};
console.log(i.isFunction); // <-- FALSE
```

### isBool
Returns ```TRUE``` when variable/Object is a Boolean.

##### Examples

```js
var i = false;
console.log(i.isBool); // <-- TRUE

i = true;
console.log(i.isBool); // <-- TRUE

i = 1;
console.log(i.isBool); // <-- FALSE

i = {};
console.log(i.isBool); // <-- FALSE

i = [];
console.log(i.isBool); // <-- FALSE
```

### isInt
Returns ```TRUE``` when variable/Object is an Integer.

##### Examples

```js
var i = 1;
console.log(i.isInt); // <-- TRUE

i = 1.0;
console.log(i.isInt); // <-- TRUE

i = 1.1;
console.log(i.isInt); // <-- FALSE

i = {};
console.log(i.isInt); // <-- FALSE

i = [];
console.log(i.isInt); // <-- FALSE

i = 'foo';
console.log(i.isInt); // <-- FALSE
```

### isFloat
Returns ```TRUE``` when variable/Object is a Float.

##### Examples

```js
var i = 1;
console.log(i.isFloat); // <-- TRUE

i = 1.0;
console.log(i.isFloat); // <-- TRUE

i = 1.1;
console.log(i.isFloat); // <-- TRUE

i = {};
console.log(i.isFloat); // <-- FALSE

i = [];
console.log(i.isFloat); // <-- FALSE

i = 'foo';
console.log(i.isFloat); // <-- FALSE
```

### isArray
Returns ```TRUE``` when variable/Object is an Array.

##### Examples

```js
var i = [];
console.log(i.isArray); // <-- TRUE

i = {};
console.log(i.isArray); // <-- FALSE

i = 1.5;
console.log(i.isArray); // <-- FALSE

i = 'foo';
console.log(i.isArray); // <-- FALSE
```

## Object Methods

### getKeys()
Returns ```Object``` keys.

##### Examples

```js
var i = [1, 'foo', false];
console.log(i.getKeys()); // <-- ["0", "1", "2"]

i = { 'a': 111, 'b': '222', 'c': null, 'd': undefined, 123: 'num', o: { 'x1': 'x2' } };
console.log(i.getKeys()); // <-- ["123", "a", "b", "c", "d", "o"]

i = 1.5;
console.log(i.getKeys()); // <-- []

i = 'foo';
console.log(i.getKeys()); // <-- ["0", "1", "2"]
```

### getValues()
Returns ```Object``` keys.

##### Examples

```js
var i = [1, 'foo', false];
console.log(i.getValues()); // <-- [1, 'foo', false]

i = { 'a': 111, 'b': '222', 'c': null, 'd': undefined, 123: 'num', o: { 'x1': 'x2' } };
console.log(i.getValues()); // <-- [111, 222, null, undefined, 'num', { 'x1': 'x2' }]

i = 1.5;
console.log(i.getValues()); // <-- []

i = 'foo';
console.log(i.getValues()); // <-- ["f", "o", "o"]
```

### getType()
Returns variable type.

##### Return

Posible values:
- string
- function
- bool
- int
- float
- array
- object

##### Examples

```js
var i = [];
console.log(i.getType()); // <-- "array"

i = { };
console.log(i.getType()); // <-- "object"

i = 1.5;
console.log(i.getType()); // <-- "float"

i = 1;
console.log(i.getType()); // <-- "int"

i = 'foo';
console.log(i.getType()); // <-- "string"

i = function () {};
console.log(i.getType()); // <-- "function"

i = false;
console.log(i.getType()); // <-- "bool"
```

### toStr([glue])
Generates string representation.

###### Param
1. `glue` _Default: *","*_. Glue.

###### Return
String representation.

##### Examples

```js
var a = [];
console.log(a.toString()); // <-- ""
console.log(a.toStr()); // <-- "[]"

a = [4, 'foo'];
console.log(a.toString()); // <-- "4,foo"
console.log(a.toStr()); // <-- "[4,"foo"]"
console.log(a.toStr(';')); // <-- "[4;"foo"]"
console.log(a.toStr('-*-')); // <-- "[4-*-"foo"]"

a = {'a': 'foo', 'b': [1, 4, false]};
console.log(a.toString()); // <-- "[object Object]"
console.log(a.toStr()); // <-- "{"a":"foo","b":[1,4,false]}"
console.log(a.toStr(':')); // <-- "{"a":"foo":"b":[1:4:false]}"
```

### clone()
Clone an `Object`.

###### Return
Copy of `Object`.

##### Examples

```js
var o = {x: 111, y: 222};
var p = o.clone();

p.x = 333;

console.log(o); // <-- Object {x: 111, y: 222}
console.log(p); // <-- Object {x: 333, y: 222}
```

### each(fn)
Execute an action for each `Object` in `Array` or `Object`.

###### Param
1. `fn` { `Function(KeyOrIndex, Value)` } Function to execute for each `Object`.
  - Return `false` to _break_.
  - Return not `false` to _continue_

###### Return

- `TRUE` if executed for each element.
- `FALSE` if the operation is _break_.
- `undefined` if parameter is not a Function.

##### Examples

```js
var o = {a: 111, b: 222, c: 333};
o.each(function (key, value) {
  if (key === 'b')
    return; // CONTINUE
  if (key === 'c')
    return false; // BREAK
  alert(value); // <-- Only show "111"
}); // <-- Return FALSE

var a = [333, 444];
a.each(function (index, value) {
  console.log(index, value);
    // <-- 0, 333
    // <-- 1, 444
}); // <-- Return TRUE
```

### sortByKeyEach(fn)

### sortByKeyDescEach(fn)

### sortByKey(fn)

### indexOf(x)

Returns the position of the first occurrence of a specified value in a `String`.

Returns the position of a specified value in a `Array`.

Returns the key of a specified value in a `Object`.

###### Param

1. `x` Value to search for.

###### Return

- `Array` & `String`: A `Number`, representing the position where the specified search value occurs, or `-1` if it never occurs.
- `Object`: A `String`, representing the key where the specified search value occurs, or `null` if it never occurs.

##### Examples

```js
var a = [ 'foo' ];
console.log(a.indexOf('foo')); // <-- 0
console.log(a.indexOf('bar')); // <-- -1

var s = 'abcde';
console.log(s.indexOf('b')); // <-- 1
console.log(s.indexOf('x')); // <-- -1

var o = { 'k': 'bar' };
console.log(a.indexOf('bar')); // <-- "k"
console.log(a.indexOf('foo')); // <-- null
```

### contains(x)

Returns if a specified value exists.

###### Param

1. `x` Value to search for.

###### Return

`Boolean` `TRUE` if the specified search value whas found, or `FALSE` if it never occurs.

##### Examples

```js
var a = [ 'foo' ];
console.log(a.contains('foo')); // <-- true
console.log(a.contains('bar')); // <-- false

var s = 'abcde';
console.log(s.contains('b')); // <-- true
console.log(s.contains('x')); // <-- false

var o = { 'k': 'bar' };
console.log(a.contains('bar')); // <-- true
console.log(a.contains('foo')); // <-- false
```

### containsKey(x)

Returns if a specified _Key_ exists.

###### Param

1. `x` Key to search for.

###### Return

`Boolean` `TRUE` if the specified search _key_ whas found, or `FALSE` if it never occurs.

##### Examples

```js
var a = [ 'foo' ];
console.log(a.containsKey(0)); // <-- true
console.log(a.containsKey(5)); // <-- false

var s = 'abcde';
console.log(s.containsKey(1)); // <-- true
console.log(s.containsKey(59)); // <-- false

var o = { 'k': 'bar' };
console.log(a.containsKey('k')); // <-- true
console.log(a.containsKey('bar')); // <-- false
```

### toBool()

Convert to `Boolean`.

**`TRUE` values:**

- `Boolean` `===` `true`
- `Number` `!==` `0`
- `Array` `length` `>` `0`
- `String`
  - `length` `>` `0`
  - `===` `"true"`
  - `===` `"t"`
- Others: `!!this`

**`FALSE` values:**

- `Boolean` `===` `false`
- `Number` `===` `0`
- `Array` `length` `===` `0`
- `String`
  - Empty string
  - `length` `===` `0`
  - `===` `"false"`
  - `===` `"f"`
- Others: `!!this`

###### Return

`Boolean` representation.

##### Examples

```js
console.log(([ 'foo' ]).toBool()); // <-- true
console.log(([]).toBool()); // <-- false

console.log((true).toBool()); // <-- true
console.log((false).toBool()); // <-- false

console.log((-1).toBool()); // <-- true
console.log((1).toBool()); // <-- true
console.log((0).toBool()); // <-- false
console.log((0.5)toBool()); // <-- false

console.log(('foo').toBool()); // <-- true
console.log(('   ').toBool()); // <-- false
console.log(('faLSe').toBool()); // <-- false
console.log(('F').toBool()); // <-- false
```

### toInt()

Convert to `Integer`.

Alias for `parseInt(this, 10)`.

###### Return

`Integer` representation.

##### Examples

```js
console.log(('123').toInt()); // <-- 123
console.log(('123.45').toInt()); // <-- 123
console.log(('asd').toInt()); // <-- NaN
```

### toFloat()

Convert to `Float`.

Alias for `parseFloat(this)`.

###### Return

`Float` representation.

##### Examples

```js
console.log(('123').toInt()); // <-- 123
console.log(('123.45').toInt()); // <-- 123.45
console.log(('asd').toInt()); // <-- NaN
```

### md5()

Generate _MD5_ hash code for variable.

###### Return

`String[32]` _MD5_ hash code.

##### Examples

```js
(123).md5(); // <-- "202cb962ac59075b964b07152d234b70"
(123.1).md5(); // <-- "5e3543e9b72f1c8db3b3907a3928f3c4"
('').md5(); // <-- "9d4568c009d203ab10e33ea9953a0264"
(' ').md5(); // <-- "fcc3d7489d15ef49dbbf735234234cf7"
({'foo': 'bar'}).md5(); // <-- "9bb58f26192e4ba00f01e2e7b136bbd8"
({0: 'foo', 1: 'bar'}).md5(); // <-- "2118a94a497fc2f7f84920e4ca679e6f"
(['foo', 'bar']).md5(); // <-- "a246c2ba4df8e46c29e69a3f5429349e"
(true).md5(); // <-- "b326b5062b2f0e69046810717534cb09"
('true').md5(); // <-- "ebc576222020c2a2ae2fc769169f1d2a"
(0).md5(); // <-- "cfcd208495d565ef66e7dff9f98764da"
```

## Array Methods

### toStr([glue])
Generates string representation.

###### Param
1. `glue` _Default: *","*_. Glue.

###### Return
String representation.

##### Examples

```js
var a = [];
console.log(a.toString()); // <-- ""
console.log(a.toStr()); // <-- "[]"

a = [4, '5', 'foo'];
console.log(a.toString()); // <-- "4,5,foo"
console.log(a.toStr()); // <-- "[4,"5","foo"]"
console.log(a.toStr(';')); // <-- "[4;"5";"foo"]"
console.log(a.toStr('-*-')); // <-- "[4-*-"5"-*-"foo"]"
```

### contains(x)

Returns if a specified value exists.

###### Param

1. `x` Value to search for.

###### Return

`Boolean` `TRUE` if the specified search value whas found, or `FALSE` if it never occurs.

##### Examples

```js
var a = [ 'foo' ];
console.log(a.contains('foo')); // <-- true
console.log(a.contains('bar')); // <-- false
```

### sortBy(col1[, col2[, colN]])

Sort `Array` of `Object`'s by _column_/_columns_.

###### Param

Each parameter must be a _column name_. Use `String.prototype.desc` and `String.prototype.asc` to set order.

###### Return

`This` instance.

##### Examples

```js
var o = [ 
  { Name: 'Lazslo', LastName: 'Jamf'     },
  { Name: 'Pig',    LastName: 'Bodine'   },
  { Name: 'Pirate', LastName: 'Prentice' },
  { Name: 'Pag',    LastName: 'Bodine'   }
];


// Original
o.each(function (a, b) { console.log(a, b); });
/*
 0 Object {Name: "Lazslo", LastName: "Jamf"}
 1 Object {Name: "Pig", LastName: "Bodine"}
 2 Object {Name: "Pirate", LastName: "Prentice"}
 3 Object {Name: "Pag", LastName: "Bodine"}
*/


// Sort By LastName ASC, Name ASC
o.sortBy('LastName', 'Name').each(function(a, b) { console.log(a, b); });
/*
 0 Object {Name: "Pag", LastName: "Bodine"}
 1 Object {Name: "Pig", LastName: "Bodine"}
 2 Object {Name: "Lazslo", LastName: "Jamf"}
 3 Object {Name: "Pirate", LastName: "Prentice"}
*/


// Sort by LastName ASC and Name ASC
o.sortBy('LastName'.asc, 'Name'.asc).each(function(a, b) { console.log(a, b); });
/*
 0 Object {Name: "Pag", LastName: "Bodine"}
 1 Object {Name: "Pig", LastName: "Bodine"}
 2 Object {Name: "Lazslo", LastName: "Jamf"}
 3 Object {Name: "Pirate", LastName: "Prentice"}
*/


// Sort by LastName DESC and Name DESC
o.sortBy('LastName'.desc, 'Name'.desc).each(function(a, b) { console.log(a, b); });
/*
 0 Object {Name: "Pirate", LastName: "Prentice"}
 1 Object {Name: "Lazslo", LastName: "Jamf"}
 2 Object {Name: "Pig", LastName: "Bodine"}
 3 Object {Name: "Pag", LastName: "Bodine"}
*/


// Sort by LastName DESC and Name ASC
o.sortBy('LastName'.desc, 'Name'.asc).each(function(a, b) { console.log(a, b); });
/*
 0 Object {Name: "Pirate", LastName: "Prentice"}
 1 Object {Name: "Lazslo", LastName: "Jamf"}
 2 Object {Name: "Pag", LastName: "Bodine"}
 3 Object {Name: "Pig", LastName: "Bodine"}
*/
```

### sortAsc()

Sort `Array` by _values_.

###### Return

`This` instance.

##### Examples

```js
var o = [ 'foo', 'bar', 123 'cen' ];

console.log(o.sortAsc()); // [123, "bar", "cen", "foo"]
```

### sortDesc()

Sort `Array` by _values_ as _DESC_.

###### Return

`This` instance.

##### Examples

```js
var o = [ 'foo', 'bar', 123 'cen' ];

console.log(o.sortDesc()); // ["foo", "cen", "bar", 123]
```

## Function Methods

### timeout(time[, args])

##### timeout.id

##### timeout.stop()

### interval(time[, args])

##### interval.id

##### interval.stop()

### extend(fn)

## Number Methods

### times(fn)

### step(to, step, fn)

## String Methods

### trim()

### toCamelcase()

### splitCamelCase([glue])

### repeat(times)

### cut(max[, end])

### format(p1[, p2[, pn]])
