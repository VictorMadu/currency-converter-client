
interface ICurrencyFlagProps  {
  src: string
}

const CurrencyFlag = (props: ICurrencyFlagProps) => {
  return (
    <div className="overflow-hidden rounded-full w-6 h-6 bg-neutral-700 shrink-0"></div>
  )
}

export default CurrencyFlag
