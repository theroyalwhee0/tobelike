export declare enum Like {
    array = "array",
    bigint = "bigint",
    boolean = "boolean",
    error = "error",
    integer = "integer",
    function = "function",
    null = "null",
    number = "number",
    object = "object",
    string = "string",
    symbol = "symbol",
    promise = "promise",
    undefined = "undefined"
}
export declare function toBeLike(value: unknown, type: Like): {
    pass: boolean;
    message: () => string;
};
