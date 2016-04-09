# concat
> Concatenate items.

A normalization between `Base.prototype.concat` and `Base.concat`.

## Installation
```shell
$ npm install --save concat
```

## Usage
```javascript
var concat = require('concat');

concat([ 'a', 'b', 'c' ]);
// => 'abc'

concat([ new Buffer('a'), new Buffer('b'), new Buffer('c') ])
// => Buffer('abc')

concat([ [1, 2, 3], [4, 5, 6] ]);
// => [1, 2, 3, 4, 5, 6]
```

### `concat(items, [opts])`
Concatenate the given `items` together and return the value.
 - `items` (`Array`): An array of items to concatenate together.
 - `opts` (`Object` <sup>optional</sup>): Options for concatenating.
   - `opts.type`: Object to model concatenation after. (default: First `item`'s constructor)

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
