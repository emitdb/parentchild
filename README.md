# json-all-parent-child

Returns all parent child relations from a json file

``` js
console.log(
  parentchild({
    a: {
      b: 'foo'
    },
    c: ['a', 'b']
  }));
```

Returns

```
  [['child', undefined, 'a'],
   ['child', 'a', 'b'],
   ['value', 'b', 'foo'],
   ['child', undefined, 'c'],
   ['inarray', 'c', 'a'],
   ['inarray', 'c', 'b']]
```