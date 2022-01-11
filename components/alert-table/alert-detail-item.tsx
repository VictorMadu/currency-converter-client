
interface IAlertDetailItemProps {
  title: string;
  content: string | JSX.Element;
}

const AlertDetailItem = (props: IAlertDetailItemProps) => {
  return (
    <div className="flex gap-x-2 items-center">
    <span className="uppercase text-sm font-bold">{props.title + ":"}</span>
    <span>{props.content}</span>
    </div>
  )
}

export default AlertDetailItem;
