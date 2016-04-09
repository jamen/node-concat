'use strict';

var test = require('tape');
var c = require('..');

test('concat buffers', function(t) {
  t.plan(1);
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  t.same(c(input), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
