import { Like } from '../src/matchers.js';

test('Like should be an object', () => {
  expect(Like).toBeInstanceOf(Object);
  const keys = Object.keys(Like);
  const values = Object.values(Like);
  expect(keys).toEqual([
    "array", "bigint", "boolean", "error", "integer",
    "function", "null", "number", "object", "string",
    "symbol", "promise", "undefined",
  ]);
  expect(values).toEqual([
    "array", "bigint", "boolean", "error", "integer",
    "function", "null", "number", "object", "string",
    "symbol", "promise", "undefined",
  ]);
});
