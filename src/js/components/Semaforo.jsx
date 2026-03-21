import { useState } from "react";

const Semaforo = () => {

    const [color, setColor] = useState('');
    const [contador, setContador] = useState(0);
    const handleClick = (ligth) => {
        // si  el color de useState es igual a ligth entonces me cambias color de nuevo a string vacio para quitar el active
        if (color === ligth) {
            return setColor("")

        }
        setColor(ligth)
    }
    const lights = ["red", "yellow", "green", ""]
    const handleBotton = () => {
// creamos una constante que nos dice el indice en el que esta el string dependiendo del state color 
        const index = lights.indexOf(color)
        // condicinamos para que el indice llegue hasta  el final y despues el else nos devuelve al principio
        if (index < lights.length - 1) {
            // aqui le damos el valor del array es decir sacamos el string que esta en ese dice y se lo damos a set color que dara ese estadp
            setColor(lights[index + 1]);
        }
        else {
            setColor("red");
        }

    }
    return (
        <div className="semaforo">
            {/* ponemos una ternaria para  añadirle una clase active si  color es igual a red sino sigue devolviendo un class vacio */}
            <div className={`circleRed ${color == "red" ? "active" : ""}`} onClick={() => handleClick("red")}>

            </div>
            <div className={`circleYellow  ${color == "yellow" ? "active" : ""}`} onClick={() => handleClick("yellow")}>

            </div>
            <div className={`circleGreen  ${color == "green" ? "active" : ""}`} onClick={() => handleClick("green")}>

            </div>
            <button type="button" className="btn btn-primary" onClick={() => handleBotton()}>Luz</button>
        </div>

    );

};
export default Semaforo;