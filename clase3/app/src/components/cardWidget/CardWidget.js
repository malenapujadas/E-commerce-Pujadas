//Importaciones
//Modulos
//Estilos
import './CardWidget.css'
//Componetnes
import Carrito from "./carrito2.jpeg"
//Core


//Logica
const CardWidget = (props) => { //Funcion consructora


    //Retorno que se va a renderizar
    return(
        <div className='cardWidget'>
            <img src={Carrito} className='carrito'></img>
            <p className='numero'>{props.cantidad}</p>
        </div>

    )

}


//Exportacion 
export default CardWidget