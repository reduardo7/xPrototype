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

### isString

### isFunction

### isBool

### isInt

### isFloat

### isArray

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
