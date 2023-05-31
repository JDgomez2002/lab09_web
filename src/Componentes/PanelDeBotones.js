import { useEffect } from "react"
import Button from "./Boton"
import "./PanelDeBotones.css"

export default function PanelDeBotones ({clickHandle}) {
  
    const handleClick = nombreDeBoton => {
      clickHandle(nombreDeBoton)
    }

    useEffect(() => {
      setTimeout(() => {
        document.getElementById("ceroBtn").style.borderRadius("20px")
      }, 3000);
    }, [])
    
    return (
        <div className="component-button-panel">
          <div>
            <Button name="AC" clickHandle={handleClick} gray/>
            <Button name="+/-" clickHandle={handleClick} gray/>
            <Button name="%" clickHandle={handleClick} gray/>
            <Button name="/" clickHandle={handleClick} orange/>
          </div>
          <div>
            <Button name="7" clickHandle={handleClick} />
            <Button name="8" clickHandle={handleClick} />
            <Button name="9" clickHandle={handleClick} />
            <Button name="x" clickHandle={handleClick} orange/>
          </div>
          <div>
            <Button name="4" clickHandle={handleClick} />
            <Button name="5" clickHandle={handleClick} />
            <Button name="6" clickHandle={handleClick} />
            <Button name="-" clickHandle={handleClick} orange/>
          </div>
          <div>
            <Button name="1" clickHandle={handleClick} />
            <Button name="2" clickHandle={handleClick} />
            <Button name="3" clickHandle={handleClick} />
            <Button name="+" clickHandle={handleClick} orange />
          </div>
          <div>
            <Button name="0" clickHandle={handleClick} wide id="ceroBtn" />
            <Button name="." clickHandle={handleClick} />
            <Button name="=" clickHandle={handleClick} green/>
          </div>
        </div>
      );
  }