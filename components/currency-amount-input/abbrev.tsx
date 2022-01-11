interface IAbbrev {
  text: string
}

const Abbrev = (props: IAbbrev) => {
  return (
    <p className="text-neutral-900/30 font-[Roboto]">{props.text}</p>
  )
}

export default Abbrev
