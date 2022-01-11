import Dot from "../dot";
import SettingsToggleRadio from "../settings-toggle-radio";

const Notification = () => {
  return (
    <div className="w-full">
      <p className="flex items-center space-x-1">
        <Dot /> <span>Notification me through</span>
      </p>
      <div className="space-x-3 float-right">
        <SettingsToggleRadio placeholder="App" id="app" onClick={() => {}} />

        <SettingsToggleRadio
          placeholder="Email"
          id="email"
          onClick={() => {}}
        />

        <SettingsToggleRadio
          placeholder="Phone"
          id="phone"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Notification;
