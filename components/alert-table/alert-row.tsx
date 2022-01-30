import { useState } from "react";
import AlertCardContainer from "./alert-cards-container"
import PriceContainer from "./price-container"


interface IAlertRow {
  alertsKey: string;
  base: string;
  quota: string;
}

const AlertRow = (props: IAlertRow) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
    className="mb-2 border border-neutral-400/30 shadow-md bg-white/30"
  >
    <PriceContainer base={props.base} quota={props.quota} isOpen={isOpen} handleToggleOpen={() => setIsOpen(isOpen => !isOpen)} />
    <AlertCardContainer alertsKey={props.alertsKey}  isOpen={isOpen}  />

  </div>
  )
}

export default AlertRow
