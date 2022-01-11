export type OrWithArr<T extends any> = T | T[];

export type Func<T extends any[] = any[], U extends any = any> = (
  ...args: T
) => U;

export type VoidFunc<T extends any[] = any[]> = Func<T, void>;

export type RequiredProps<T extends {}> = { [K in keyof T]-?: T[K] };
