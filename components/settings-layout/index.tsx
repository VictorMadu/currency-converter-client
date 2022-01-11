import DarkMode from "./_dark-mode";
import Notification from "./_notification";

const SettingsLayout = () => {
  return (
    <div className="flex flex-col gap-y-8 px-[5%] mt-5">
      <Notification />
      <DarkMode />
    </div>
  );
};

export default SettingsLayout;
