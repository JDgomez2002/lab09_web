import "./Boton.css"

export default function Boton ({clickHandle, name, gray, orange, wide, green, rounded}) {

  const handleClick = () => clickHandle(name)

  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
    rounded ? "rounded" : "",
    green ? "green" : "",
    gray ? "gray" : "",
  ]

      return (
        <div className={className.join(" ").trim()}>
          <button className="btn" onClick={handleClick}>{name}</button>
        </div>
      );
  }