import { FilterIcon } from "@heroicons/react/outline";
import {
  useEffect,
  useState,
} from "react";
import Dropdown from "../dropdown";
import ToggleBtn from "../toggle-btn";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlertsStart } from "../../redux/alert/alert.actions";
import { selectUserToken } from "../../redux/user/user.selectors";

interface IAlertFilterDropdownProps {}

const AlertFilterDropdown = (props: IAlertFilterDropdownProps) => {
  const [filterState, setFilterState] = useState<
    "All" | "Pending" | "Triggered"
  >("All");
  const [showDropdown, setShowDropdown] = useState(false);
  const userToken = useSelector(selectUserToken);
  const dispatch = useDispatch();

  const handleClick = (alertType: "Pending" | "Triggered" | "All") => {
    setShowDropdown(false);
    setFilterState(alertType);
  };

  useEffect(() => {
    dispatch(
      fetchAlertsStart({
        token: userToken,
        type:
          filterState === "All"
            ? undefined
            : (filterState.toLowerCase() as "pending" | "triggered"),
      })
    );
  }, [dispatch, userToken, filterState]);

  return (
    <div className="relative w-full max-w-[10rem] font-sans">
      <div
        className="flex gap-x-2 items-center px-2 py-1.5 rounded border border-neutral-500/30 text-neutral-900/30"
        onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
      >
        <FilterIcon className="w-5 h-5 shrink-0" />
        <p className="text-neutral-900/60 grow">{filterState}</p>
        <ToggleBtn
          iconColor="text-neutral-900/30"
          isOpen={showDropdown}
          onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
        />
      </div>

      {showDropdown ? (
        <Dropdown>
          <Dropdown.Item onClick={() => handleClick("All")}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Pending")}>
            Pending
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("Triggered")}>
            Triggered
          </Dropdown.Item>
        </Dropdown>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AlertFilterDropdown;
