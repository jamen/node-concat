'use strict';

var test = require('tape');
var c = require('..');

test('concat buffers', function(t) {
  t.plan(1);
  const input = [
    new Buffer('hello'),
    new Buffer('world'),
    new Buffer('!')
  ];
  t.same(c(input), new Buffer('helloworld!'));
});
