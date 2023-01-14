//Importaciones
//Modulos
import{ useState, useEffect } from 'react'
//Estilos
import './Hooks.css'

//Componetnes
//Core


//Logica
const Hooks = () => { //Funcion consructora

    
    //Hooks de estado
    //Constructor [ESTADO , funcion que actualiza el estado] = Inicializacion del Estado (elvalor por default del estado)
    const[contador, setContador] = useState (0)
    //Hooks de efectos
    //UseEffect(funcion (inicio, fin)), variantes
    useEffect(() => {
        return () =>{
            console.log("Componente finalizado");
        }
    })



    const sumar = () => {
        
        setContador(contador +1)
    }
    const restar = () => {
        setContador(contador -1)
    }



    //Retorno que se va a renderizar
    return(
        
        <div>
            <button onClick={sumar}>Sumar</button>
            <p>{contador}</p>
            <button onClick={restar}>Restas</button>
        </div>

    )

}


//Exportacion 
export default Hooks