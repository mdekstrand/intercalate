const assert = require('assert');

const intercalate = require('../intercalate');

describe('intercalate', () => {
  it('should return an empty array for empty input', () => {
    let res = intercalate([], ' ');
    assert.equal(res.length, 0);
  });

  it('should return a single-element array unchanged', () => {
    let res = intercalate(['bob'], ' ');
    assert.equal(res.length, 1);
    assert.equal(res[0], 'bob');
  });

  it('should intersperse the joiner in a two-element array', () => {
    let res = intercalate(['wumpus', 'splintercat'], ' ');
    assert.deepEqual(res, ['wumpus', ' ', 'splintercat']);
  });

  it('should intersperse the joiner in a three-element array', () => {
    let res = intercalate(['wumpus', 'splintercat', 'woozle'], true);
    assert.deepEqual(res, ['wumpus', true, 'splintercat', true, 'woozle']);
  });

  it('should use the terminating joiner when given', () => {
    let res = intercalate(['a', 'b', 'c'], 2, 5);
    assert.deepEqual(res, ['a', 2, 'b', 5, 'c']);
  });

  it('should use the terminating joiner for many items', () => {
    let res = intercalate(['a', 'b', 'c', 'd', 'e'], 2, 5);
    assert.deepEqual(res, ['a', 2, 'b', 2, 'c', 2, 'd', 5, 'e']);
  });

  it('ignore the pair joiner for many items', () => {
    let res = intercalate(['a', 'b', 'c', 'd', 'e'], 2, 5, 100);
    assert.deepEqual(res, ['a', 2, 'b', 2, 'c', 2, 'd', 5, 'e']);
  });

  it('should use the terminating joiner in a two-element array', () => {
    let res = intercalate(['wumpus', 'splintercat'], ' ', 'x');
    assert.deepEqual(res, ['wumpus', 'x', 'splintercat']);
  });

  it('should use the two-element joiner in a two-element array', () => {
    let res = intercalate(['wumpus', 'splintercat'], ' ', 'x', 'two');
    assert.deepEqual(res, ['wumpus', 'two', 'splintercat']);
  });
});