'use strict';

var test = require('tape');
var c = require('..');

test('objects', function(t) {
  t.plan(1);
  const input = {
    nest: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
  };
  t.same(c(input.nest), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
