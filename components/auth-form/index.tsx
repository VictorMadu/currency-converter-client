import { OrWithArr } from "../../types";
import PwdInput, { IPwdInputProps } from "./pwd-input";
import BaseInput, { IBaseInputProps } from "./_base-input";
import InputGroup, { IInputGroupProps } from "./_input-group";
import SubmitBtn, { ISubmitBtnProps } from "./_submit-btn";
import Title, { ITitleProps } from "./_title";

interface IAuthFormProps {
  children: OrWithArr<JSX.Element>;
}

interface IAuthForm {
  (props: IAuthFormProps): JSX.Element;
  BaseInput: (props: IBaseInputProps) => JSX.Element;
  SubmitBtn: (props: ISubmitBtnProps) => JSX.Element;
  Title: (props: ITitleProps) => JSX.Element;
  InputGroup: (props: IInputGroupProps) => JSX.Element;
  PwdInput: (props: IPwdInputProps) => JSX.Element;
  
}

const AuthForm: IAuthForm = (props) => {
  return (
    <div className="bg-neutral-100 space-y-7 rounded-lg shadow-lg overflow-hidden">
      {props.children}
    </div>
  );
};

AuthForm.BaseInput = BaseInput;
AuthForm.SubmitBtn = SubmitBtn;
AuthForm.Title = Title;
AuthForm.InputGroup = InputGroup;
AuthForm.PwdInput = PwdInput;

export default AuthForm;
