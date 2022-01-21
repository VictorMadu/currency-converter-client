import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface IModalBaseRootProps {
  children: JSX.Element;
}

const getModalRoot = () => document.getElementById("modal-root") as HTMLElement;

const ModalRoot = (props: IModalBaseRootProps) => {
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setEl(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (!el) return;
    const modalRoot = getModalRoot();
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return el ? ReactDOM.createPortal(props.children, el) : null;
};

export default ModalRoot;
