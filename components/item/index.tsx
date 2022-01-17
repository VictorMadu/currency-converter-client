
type ItemProps= {
  children: string | JSX.Element
}

const Item = (props: ItemProps) => {
  return (
    <li className="inline-block cursor-pointer">
      {props.children}
    </li>
  )
}

export default Item
