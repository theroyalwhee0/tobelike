"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeLike = exports.Like = void 0;
const istype_1 = require("@theroyalwhee0/istype");
const liketype_1 = require("@theroyalwhee0/liketype");
var Like;
(function (Like) {
    Like["array"] = "array";
    Like["bigint"] = "bigint";
    Like["boolean"] = "boolean";
    Like["error"] = "error";
    Like["integer"] = "integer";
    Like["function"] = "function";
    Like["null"] = "null";
    Like["number"] = "number";
    Like["object"] = "object";
    Like["string"] = "string";
    Like["symbol"] = "symbol";
    Like["promise"] = "promise";
    Like["undefined"] = "undefined";
})(Like = exports.Like || (exports.Like = {}));
function toBeLike(value, type) {
    if (typeof type !== 'string') {
        throw new Error('expected "type" to be a string');
    }
    let matched = false;
    switch (type) {
        case Like.string: {
            matched = istype_1.isString(value);
            break;
        }
        case Like.number: {
            matched = istype_1.isNumber(value);
            break;
        }
        case Like.object: {
            matched = istype_1.isObject(value);
            break;
        }
        case Like.array: {
            matched = istype_1.isArray(value);
            break;
        }
        case Like.function: {
            matched = istype_1.isFunction(value);
            break;
        }
        case Like.symbol: {
            matched = istype_1.isSymbol(value);
            break;
        }
        case Like.bigint: {
            matched = istype_1.isBigInt(value);
            break;
        }
        case Like.integer: {
            matched = istype_1.isInteger(value);
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
            matched = liketype_1.likeError(value);
            break;
        }
        case Like.promise: {
            matched = liketype_1.likePromise(value);
            break;
        }
        default: {
            throw new Error(`"${type}" is not a supported matcher type.`);
        }
    }
    if (matched) {
        return {
            pass: true,
            message: () => `Expected '${value}' not to be be of type '${type}'`
        };
    }
    else {
        return {
            pass: false,
            message: () => `Expected '${value}' to be be of type '${type}'`
        };
    }
}
exports.toBeLike = toBeLike;
//# sourceMappingURL=index.js.map