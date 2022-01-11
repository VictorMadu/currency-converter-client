export interface ITitleProps {
  text: string
}

const Title = (props: ITitleProps) => {
  return (
    <div className="font-bold uppercase text-center w-full pt-4">
      {props.text}
    </div>
  )
}

export default Title
