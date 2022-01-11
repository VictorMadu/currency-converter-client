import { ChevronLeftIcon } from "@heroicons/react/outline"
import IconBtn from "../icon-btn"

interface IHeaderTitleWithBackProps {
  title: string;
}

const HeaderTitleWithBack = (props: IHeaderTitleWithBackProps) => {
  return (
    <header className="py-2 border-b border-neutral-500/30 text-neutral-900/60 flex justify-center items-center">
        <IconBtn Icon={ChevronLeftIcon} onClick={() => {}} />
        <p className="grow text-center line-clamp-1 text-neutral-900/90">
         {props.title}
        </p>
      </header>
  )
}

export default HeaderTitleWithBack
