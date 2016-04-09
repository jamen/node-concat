'use strict';

module.exports = function concat(items, opts) {
  if (items.constructor !== Array || !items.length) {
    return null;
  }
  if (typeof opts === 'undefined') {
    opts = {};
  }

  var first = items[0];
  var Item = opts.type || first.constructor;

  if (first.concat) {
    return first.concat.apply(first, items.slice(1));
  }

  if (Item.concat) {
    return Item.concat(items);
  }

  return null;
};
