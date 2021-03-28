import { Like, toBeLike } from '../src/index.js';

test('toBeLike should be a function', () => {
  expect(toBeLike).toBeInstanceOf(Function);
  expect(toBeLike.length).toBe(2);
});

test('toBeLike should throw if "type" is not a string', () => {
  expect(() => {
    return toBeLike(undefined, undefined);
  }).toThrowError(/expected "type" to be a string/);
});

// =============== Strings
test.each([
  "", "TV",
])('toBeLike should identify "%p" as a string', (item) => {
  const result = toBeLike(item, Like.string);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  0, true,
  new String("Hot Sauce"),
  { toString() { return "name"; } },
])('toBeLike should not identify "%p" as a string', (item) => {
  const result = toBeLike(item, Like.string);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Symbols
test.each([
  Symbol(), Symbol("Bottle"),
  Symbol.iterator,
])('toBeLike should identify "%p" as a symbol', (item) => {
  const result = toBeLike(item, Like.symbol);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  9, true, "symbol",
])('toBeLike should not identify "%p" as a symbol', (item) => {
  const result = toBeLike(item, Like.symbol);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Numbers
test.each([
  -1, 0, 1, 1000,
  2 ** 16, 2 ** 32, 2 ** 53, 2 ** 55,
  2.22, 3.14, 9999.9999,
])('toBeLike should identify "%p" as a number', (item) => {
  const result = toBeLike(item, Like.number);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  true, "1", "999",
  -0, NaN,
  Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
])('toBeLike should not identify "%p" as a number', (item) => {
  const result = toBeLike(item, Like.number);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Integers
test.each([
  -1, 0, 1, 1000,
  2 ** 16, 2 ** 32, 2 ** 53 - 1,
])('toBeLike should identify "%p" as an integer', (item) => {
  const result = toBeLike(item, Like.integer);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  3.14, 2 ** 53,
  true, "1", "999",
  -0, NaN,
  Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
])('toBeLike should not identify "%p" as an integer', (item) => {
  const result = toBeLike(item, Like.integer);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== BigInts
test.each([
  -1n, 0n, 999n,
  2n**53n, 2n**80n,
  -0n, // Negative Zero BigInt === 0.
])('toBeLike should identify "%p" as a bigint', (item) => {
  const result = toBeLike(item, Like.bigint);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  0, 1, 2, 3.14, 2 ** 53, "888",
  -0, NaN,
  Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
])('toBeLike should not identify "%p" as an bigint', (item) => {
  const result = toBeLike(item, Like.bigint);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Booleans
test.each([
  true, false,
])('toBeLike should identify "%p" as a boolean', (item) => {
  const result = toBeLike(item, Like.boolean);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  null, undefined, 0, "true",
  Symbol("false")
])('toBeLike should not identify "%p" as a boolean', (item) => {
  const result = toBeLike(item, Like.boolean);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Null
test.each([
  null,
])('toBeLike should identify "%p" as null', (item) => {
  const result = toBeLike(item, Like.null);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  undefined, "", "null",
])('toBeLike should not identify "%p" as null', (item) => {
  const result = toBeLike(item, Like.null);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Undefined
test.each([
  undefined,
])('toBeLike should identify "%p" as undefined', (item) => {
  const result = toBeLike(item, Like.undefined);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  null, "", "undefined",
])('toBeLike should not identify "%p" as undefined', (item) => {
  const result = toBeLike(item, Like.undefined);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Errors
test.each([
  new Error(), new Error("Phone"),
])('toBeLike should identify "%p" as an error', (item) => {
  const result = toBeLike(item, Like.error);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  "error", "Error", { message: "ERROR" },
  null, 0, false,
])('toBeLike should not identify "%p" as an error', (item) => {
  const result = toBeLike(item, Like.error);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Promises
test.each([
  Promise.resolve(),
  new Promise((resolve) => resolve(5)),
  { then() { return this; }, catch() { return this; } },
])('toBeLike should identify "%p" as a promise', (item) => {
  const result = toBeLike(item, Like.promise);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  0, true, {}, "Promise",
  { then() { return true; } },
])('toBeLike should not identify "%p" as an promise', (item) => {
  const result = toBeLike(item, Like.error);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Functions
test.each([
  class Xyzzy { },
  () => true,
  function xyzzy() { return 1; }
])('toBeLike should identify "%p" as a function', (item) => {
  const result = toBeLike(item, Like.function);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  true, 0, "", null,
  new Error(), new String("Controller")
])('toBeLike should not identify "%p" as an function', (item) => {
  const result = toBeLike(item, Like.function);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Objects
test.each([
  {}, { a: 1 },
  new Error(),
])('toBeLike should identify "%p" as an object', (item) => {
  const result = toBeLike(item, Like.object);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  true, 0, "", null, [], "object",
])('toBeLike should not identify "%p" as an object', (item) => {
  const result = toBeLike(item, Like.object);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});

// =============== Arrays
test.each([
  [[]],
  [[1, 2, 3]],
])('toBeLike should identify "%p" as an array', (item) => {
  const result = toBeLike(item, Like.array);
  expect(result.message).toBeInstanceOf(Function);
  expect(result.pass).toBe(true);
});

test.each([
  0, null, undefined, "", "Peaches",
  {}, new Set(), new Map(),
])('toBeLike should not identify "%p" as an array', (item) => {
  const result = toBeLike(item, Like.array);
  expect(result.pass).toBe(false);
  expect(result.message).toBeInstanceOf(Function);
});
