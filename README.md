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

### getValues()

### getType()

### toString()

### each(fn)

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
