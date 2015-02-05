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

##### Posible Values

- string
- function
- bool
- int
- float
- array

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

### toStr(glue)
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
console.log(a.toString()); // <-- ""
console.log(a.toStr()); // <-- "[4,"foo"]"
console.log(a.toStr(';')); // <-- "[4;"foo"]"
console.log(a.toStr('-*-')); // <-- "[4-*-"foo"]"
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

###### Return

- `TRUE` if executed for each element.
- `FALSE` if the operation is break.
- `undefined` if parameter is not a Function.

##### Examples

```js
var o = {a: 111, b: 222, c: 333};
o.each(function (key, value) {
  if (key === 'c')
    return false; // BREAK
});

var a = [333, 444];
```

### indexOf(x)

### contains(x)

### containsKey(x)

### toBool()

### toInt()

### toFloat()

### md5()

## Array Methods

### toString(glue)

### contains(x)

## Function Methods

### timeout(time, args)

##### timeout.id

##### timeout.stop()

### interval(time, args)

##### interval.id

##### interval.stop()

### extend(fn)

## Number Methods

### times(fn)

### step(to, step, fn)

## String Methods

### trim()

### toCamelcase()

### splitCamelCase(glue)

### repeat(times)

### cut(max, end)

### format(p1, p2, p3, pn)
