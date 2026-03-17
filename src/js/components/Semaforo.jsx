import { useState } from "react";

const Semaforo = () => {

    const [color, setColor] = useState('');
    const [contador, setContador] =useState(0);
    const handleClick =(ligth)=>{
        // si  el color de useState es igual a ligth entonces me cambias color de nuevo a string vacio para quitar el active
    if(color===ligth ){
        return setColor("") 
        
    }
        setColor(ligth)
    }
  
    const handleBotton=()=>{

    let nuevo=(contador+1)%4;
    setContador(nuevo);
    if(nuevo===0){
        return setColor("")
    }
    if(nuevo===1){
        return setColor("red")
    }
    if(nuevo===2){
        return setColor("yellow")
    }
    if(nuevo===3){
        return setColor("green")
    }
    
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
  <button type="button" className="btn btn-primary" onClick={()=>handleBotton()}>Luz</button>
    </div>
  
    );

};
export default Semaforo;