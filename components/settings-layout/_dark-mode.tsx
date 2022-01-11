import Dot from "../dot"
import SwitchInput from "../switch-input"

const DarkMode = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="inline-flex gap-x-1 items-center"><Dot /> <span>Dark Mode</span></p>
      <SwitchInput id={"darkmode"} onToggle={(isOn) => {} } />
    </div>
  )
}

export default DarkMode
