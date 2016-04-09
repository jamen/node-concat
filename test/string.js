'use strict';

var test = require('tape');
var c = require('..');

test('concat strings', function(t) {
  t.plan(1);
  t.is(c(['hello', 'world', '!']), 'helloworld!');
});
