import {
  isObject, isFunction, isInteger, isBigInt,
  isSymbol, isArray, isNumber, isString
} from '@theroyalwhee0/istype';
import { likeError, likePromise } from '@theroyalwhee0/liketype';

/**
 * Supported Like Types enum.
 */
export enum Like {
  array = 'array',
  bigint = 'bigint',
  boolean = 'boolean',
  error = 'error',
  integer = 'integer',
  function = 'function',
  null = 'null',
  number = 'number',
  object = 'object',
  string = 'string',
  symbol = 'symbol',
  promise = 'promise',
  undefined = 'undefined',
}

/**
 * Is given value like a type.
 * Does ducktyping when needed.
 * Jest Matcher.
 * @param value {unknown} The value to check
 * @param type {Like} The type to check for.
 * @returns Jest matcher pass/fail state object.
 */
export function toBeLike(value: unknown, type: Like): {
  pass: boolean, message: () => string;
} {
  if (typeof type !== 'string') {
    throw new Error('expected "type" to be a string');
  }
  let matched = false;
  switch (type) {
    case Like.string: {
      matched = isString(value);
      break;
    }
    case Like.number: {

      matched = isNumber(value);
      break;
    }
    case Like.object: {
      matched = isObject(value);
      break;
    }
    case Like.array: {
      matched = isArray(value);
      break;
    }
    case Like.function: {
      matched = isFunction(value);
      break;
    }
    case Like.symbol: {
      matched = isSymbol(value);
      break;
    }
    case Like.bigint: {
      matched = isBigInt(value);
      break;
    }
    case Like.integer: {
      matched = isInteger(value);
      break;
    }
    case Like.boolean: {
      matched = (value === true || value === false);
      break;
    }
    case Like.null: {
      matched = (value === null);
      break;
    }
    case Like.undefined: {
      matched = (value === undefined);
      break;
    }
    case Like.error: {
      matched = likeError(value);
      break;
    }
    case Like.promise: {
      matched = likePromise(value);
      break;
    }
    default: {
      /* istanbul ignore next */
      throw new Error(`"${type}" is not a supported matcher type.`);
    }
  }
  if (matched) {
    return {
      pass: true,
      message: () => `Expected '${value}' not to be be of type '${type}'`
    };
  } else {
    return {
      pass: false,
      message: () => `Expected '${value}' to be be of type '${type}'`
    };
  }
}
