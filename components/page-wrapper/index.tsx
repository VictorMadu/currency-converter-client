import { OrWithArr } from "../../types";

interface IPageWrapperProps {
  children: OrWithArr<JSX.Element>;
}

const PageWrapper = (props: IPageWrapperProps) => {
  return (
      <div className="h-screen w-full">
        <div className="relative mx-auto flex flex-col bg-clip-padding bg-opacity-10 backdrop-filter bakdrop-blur-lg h-full">
        {props.children}
      </div>
      </div>
  );
};

export default PageWrapper;
