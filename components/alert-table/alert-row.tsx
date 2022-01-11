import AlertCardContainer from "./alert-cards-container"
import PriceContainer from "./price-container"


interface IAlertRow {
  index: number;
}

const AlertRow = (props: IAlertRow) => {
  const isOpen = true
  return (
    <div
    className="mb-2 border border-neutral-400/30 shadow-md bg-white/30"
  >
    <PriceContainer index={props.index} isOpen={isOpen} />
    <AlertCardContainer index={props.index} isOpen={isOpen} />

  </div>
  )
}

export default AlertRow
