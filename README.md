[![build status](https://secure.travis-ci.org/emitdb/parentchild.png)](http://travis-ci.org/emitdb/parentchild)
[![deps status](https://david-dm.org/emitdb/parentchild.png)](https://david-dm.org/emitdb/parentchild)

# parentchild

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