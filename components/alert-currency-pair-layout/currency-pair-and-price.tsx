import CurrencyPair from "../currency-pair"
import PriceView from "../currency-price/price-view"

const CurrencyPairAndPrice = () => {
  return (
    <div className="flex justify-between items-center">
    <CurrencyPair
      baseFlag={""}
      quotaFlag={""}
      baseAbbrev={"NGN"}
      quotaAbbrev={"USD"}
    />
    <PriceView price={123.454846} />
  </div>
  )
}

export default CurrencyPairAndPrice
