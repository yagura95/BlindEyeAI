import "./Button.css"

const Button = ({ text, bgColor, onPointerUp }) => {
  return <button className="homepage-btn" onPointerUp={onPointerUp} style={{ backgroundColor: bgColor}}>
      {text}
    </button>
}

export default Button
