import { useAppDispatch, useAppSelector } from "../../redux";
import { changeSettingStart } from "../../redux/user/user.actions";
import { selectUserNotifyOpts, selectUserToken } from "../../redux/user/user.selectors";
import Dot from "../dot";
import SettingsToggleRadio from "../settings-toggle-radio";

const Notification = () => {
  const userToken = useAppSelector(selectUserToken);
  const userNotifyOpts = useAppSelector(selectUserNotifyOpts);
  const dispatch = useAppDispatch()

  const handleToggleCheck = (isChecked: boolean, notifyOpt: "app" | "email" | "phone") => {
    dispatch(changeSettingStart({
      token: userToken,
      notifyAction: isChecked ? "add" : "remove",
      notifyOpt
    }))
  }
  
  const getInitalCheck = (opt:  "app" | "email" | "phone") => {
    return !!userNotifyOpts?.length && userNotifyOpts.includes(opt)
  }

  return (
    <div className="w-full">
      <p className="flex items-center space-x-1">
        <Dot /> <span>Notification me through</span>
      </p>
      <div className="space-x-3 float-right">
        <SettingsToggleRadio placeholder="App" id="app" initCheck={getInitalCheck("app")} onCheckChanged={(isChecked: boolean) => handleToggleCheck(isChecked, "app")} />

        <SettingsToggleRadio
          placeholder="Email"
          id="email"
          initCheck={getInitalCheck("email")}
          onCheckChanged={(isChecked: boolean) => handleToggleCheck(isChecked, "email")}
        />

        <SettingsToggleRadio
          placeholder="Phone"
          id="phone"
          initCheck={getInitalCheck("phone")}
          onCheckChanged={(isChecked: boolean) => handleToggleCheck(isChecked, "phone")}
        />
      </div>
    </div>
  );
};

export default Notification;
