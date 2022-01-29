import { useAppSelector, useAppDispatch } from "../../redux";
import { changeSettingStart } from "../../redux/user/user.actions";
import {
  selectUserAppTheme,
  selectUserToken,
} from "../../redux/user/user.selectors";
import Dot from "../dot";
import SwitchInput from "../switch-input";

const DarkMode = () => {
  const userToken = useAppSelector(selectUserToken);
  const userAppTheme = useAppSelector(selectUserAppTheme);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between">
      <p className="inline-flex gap-x-1 items-center">
        <Dot /> <span>Dark Mode</span>
      </p>
      <SwitchInput
        id={"darkmode"}
        initCheck={userAppTheme === "dark"}
        onCheckChanged={(isChecked) =>
          dispatch(
            changeSettingStart({
              token: userToken,
              theme: isChecked ? "dark" : "light",
            })
          )
        }
      />
    </div>
  );
};

export default DarkMode;
