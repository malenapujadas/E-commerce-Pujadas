//Importaciones
//Modulos
//Estilos
import './CardWidget.css'
//Componetnes
import Carrito from "../cardWidget/Carrito.png"
import { AiFillShopping } from "react-icons/fa";
//Core


//Logica
const CardWidget = (props) => { //Funcion consructora


    //Retorno que se va a renderizar
    return(
        <div className='cardWidget'>
            {/* <AiFillShopping className='carrito'/> */}
            <img src={Carrito} className='carrito'></img>
            <p className='numero'>{props.cantidad}</p>
        </div>
    )

}


//Exportacion 
export default CardWidget