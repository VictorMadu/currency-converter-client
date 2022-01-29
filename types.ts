export type OrWithArr<T extends any> = T | T[];

export type OrWithPromise<T extends any> = T | Promise<T>;

export type Func<T extends any[] = any[], U extends any = any> = (
  ...args: T
) => U;

export type VoidFunc<T extends any[] = any[]> = Func<T, void>;

export type RequiredProps<T extends {}> = { [K in keyof T]-?: T[K] };

export type PromiseReturnType<T> = T extends Func<any[], Promise<infer O>>
  ? O
  : never;
