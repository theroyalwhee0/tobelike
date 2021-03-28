declare namespace jest {
  interface Matchers<R> {
    toBeOfType(type:string): R;
  }
}
