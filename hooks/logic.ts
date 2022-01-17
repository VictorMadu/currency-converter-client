import { VoidFunc } from "../types";
import { map, filter } from "lodash";

export class Observable<U extends any, T extends string[] = string[]> {
  private domainsMap = new Map<T[number], VoidFunc<[U]>[]>();
  constructor(domainTypes: T) {
    map(domainTypes, (domainType) => this.domainsMap.set(domainType, []));
  }

  listen(domainType: T[number], action: VoidFunc<[U]>) {
    const index = this.domainsMap.get(domainType)?.push(action);
    return { index, domainType };
  }

  unlisten(key: { index: number | undefined; domainType: T[number] }) {
    const listeners = this.domainsMap.get(key.domainType);
    this.domainsMap.set(
      key.domainType,
      filter(listeners, (l, index) => index !== key.index)
    );
  }

  call(domainType: T[number], payload: U) {
    map(this.domainsMap.get(domainType), (listener) => listener(payload));
  }
}

export const numStrClean = (str: string) => {
  // str should be a number; ie: can to converted to number without being NAN
  while (str.endsWith("0") || str.endsWith("."))
    str = str.slice(0, str.length - 1);
  return str;
};

// TODO: Remember to add stackoverflow link
export function numberWithCommas(num: string) {
  return num.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
