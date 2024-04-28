import "./_Counter.styles.scss";

const Counter = () => {
  return (
    <div className="Counter">
        <button className="ButtonMinusCounter">-</button>
        <span className="ValueCounter">0</span>
        <button className="ButtonPlusCounter">+</button>
    </div>
  )
}

export default Counter