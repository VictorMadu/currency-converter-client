import { VoidFunc } from "../../types";

export interface IBase {
  (): JSX.Element;
  title: string;
  footer: {
    text: string;
    onClick: VoidFunc;
  }
} 

export const TYPES = {
  SIGN_UP: 'sign_up',
  LOGIN: 'login'
}