import { VoidFunc } from "../../types";

export interface IBase {
  (): JSX.Element;
  title: string;
  footer: {
    text: string;
    onClick: VoidFunc;
  }
} 