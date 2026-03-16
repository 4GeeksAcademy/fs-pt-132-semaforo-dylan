import { useState } from "react";

const Semaforo = () => {

    const [color, setColor] = useState('');

    const handleClick =(ligth)=>{
        // si  el color de useState es igual a ligth entonces me cambias color de nuevo a string vacio para quitar el active
    if(color===ligth ){
        return setColor("") 
        
    }
        setColor(ligth)
    }

    return (
    <div className="semaforo">
         {/* ponemos una ternaria para  añadirle una clase active si  color es igual a red sino sigue devolviendo un class vacio */}
        <div className={`circleRed ${color=="red" ? "active": "" }`} onClick={()=>handleClick("red")}>
      
        </div>
        <div className={ `circleYellow  ${color=="yellow" ? "active": "" }`} onClick={()=>handleClick("yellow")}>

        </div>
        <div className={ `circleGreen  ${color=="green" ? "active": "" }`} onClick={()=>handleClick("green")}>

        </div>

    </div>


    );

};
export default Semaforo;