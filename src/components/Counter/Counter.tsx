import "./_Counter.styles.scss";
import { CounterProps } from "@/types/interfaces";

const Counter = (props: CounterProps) => {
  console.log(props.quantity);
  return (
    <div className="Counter">
        <button className="ButtonMinusCounter" onClick={props.removeOne}>-</button>
        <span className="ValueCounter">{props.quantity}</span>
        <button className="ButtonPlusCounter" onClick={props.addOne}>+</button>
    </div>
  )
}

export default Counter