import { FilterIcon } from "@heroicons/react/outline"
import Dropdown from "../dropdown"
import ToggleBtn from "../toggle-btn"

interface IAlertFilterDropdownProps {
  initialIsOpen?: boolean;
  onToggleOpen: (isOpen: boolean) => void;
}

const AlertFilterDropdown = (props: IAlertFilterDropdownProps) => {
  const showDropdown = !!props.initialIsOpen;
  return (
    <div className="relative w-full max-w-[8rem] font-sans">
    <div className="flex gap-x-2 items-center px-2 py-1.5 rounded border border-neutral-500/30 text-neutral-900/30">
      <FilterIcon className="w-5 h-5" />
      <p className="text-neutral-900/60 grow">All</p>
      <ToggleBtn
        iconColor="text-neutral-900/30"
        isOpen={false}
        onClick={() => {}}
      />
    </div>
    <Dropdown
      isOpen={showDropdown}
      Items={
        <>
          <Dropdown.Item content="All" onClick={() => {}} />
          <Dropdown.Item content="Pending" onClick={() => {}} />
          <Dropdown.Item content="Triggered" onClick={() => {}} />
        </>
      }
    />
  </div>
  )
}

export default AlertFilterDropdown
