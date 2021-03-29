/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    toBeLike(type:string): R;
  }
}
