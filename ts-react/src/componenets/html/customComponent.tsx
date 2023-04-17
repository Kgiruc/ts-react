import Greet from "../Greet"

function CustomComponent(props: React.ComponentProps<typeof Greet>) {
  return (
    <div>{props.isLogin}</div>
  )
}

export default CustomComponent