import "./Display.css"

export default function Display ({value}) {
    return (
      <div className="component-display">
        {value > 999999999
          ? <div className="error-message">ERROR: Numero muy grande!!!</div>
          : <div>{value.toString().slice(0, 9)}</div>
        }
      </div>
    )
}
