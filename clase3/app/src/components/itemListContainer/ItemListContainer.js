//Importaciones
//Modulos
//Estilos
import './ItemListContainer.css'
//Componetnes
//Core


//Logica
const ItemListContainer = (props) => { //Funcion consructora


    //Retorno que se va a renderizar
    return(
        <p className='itemListContainer'>
            este es el component contenedor ItemListContainer, {props.greeting}
        </p>

    )

}


//Exportacion 
export default ItemListContainer