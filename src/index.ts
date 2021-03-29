/**
 * @module @theroyalwhee0/tobelike
 * @file toBeLike matcher for Jest.
 * @version v0.0.2
 * @author Adam Mill <hismajesty@theroyalwhee.com>
 * @copyright Copyright 2021 Adam Mill
 * @license Apache-2.0
 */

import { toBeLike } from './matchers';

/**
 * Extend Jest with toBeLike.
 * Automatically called.
 */
const extendJest = () => {
  const jestExpect = (() => { return expect; })();
  if (jestExpect && jestExpect !== undefined) {
    jestExpect.extend({ toBeLike });
  } else {
    throw new Error(`Unable to find Jest expect.`);
  }
};
extendJest();
