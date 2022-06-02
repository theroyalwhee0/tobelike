# tobelike
toBeLike matcher for Jest.


## Installation
`npm install @theroyalwhee0/tobelike`

*or*

`yarn add @theroyalwhee0/tobelike`


## Documentation
[API Documentation](https://theroyalwhee0.github.io/tobelike/)

Supported types:
- array
- bigint
- boolean
- error
- integer
- function
- null
- number
- object
- string
- symbol
- promise
- undefined


## Example
```
expect(new Error()).toBeLike('error');
expect('test').toBeLike('string');
expect(100).toBeLike('integer');
```

## Setup
Add to the Jest configuration.
```
  setupFilesAfterEnv: [
    '@theroyalwhee0/tobelike'
  ],
```

Add to global.d.ts for TypeScript
```
import '@theroyalwhee0/tobelike';
```


## Testing.
Running `npm run test` will run the test suite. Running `npm run test-watch` will run the test suite in watch mode.


## Reference
- [https://jestjs.io/docs/expect#expectextendmatchers](https://jestjs.io/docs/expect#expectextendmatchers)


## Links
- GitHub: [https://github.com/theroyalwhee0/tobelike](https://github.com/theroyalwhee0/tobelike)
- NPM: [https://www.npmjs.com/package/@theroyalwhee0/tobelike](https://www.npmjs.com/package/@theroyalwhee0/tobelike)


## History
- v1.0.0 - 2022-06-02
  - Bump depends for security.
- v0.0.2 - 2021-03-28
  - Add automatic extend Jest.
  - Fix extending Jest type.
  - Improve documentation.
- v0.0.1 - 2021-03-28
  - Initial release.


## Legal & License
Copyright 2021-2022 Adam Mill

This library is released under Apache 2 license. See [LICENSE](https://github.com/theroyalwhee0/tobelike/blob/master/LICENSE) for more details.
