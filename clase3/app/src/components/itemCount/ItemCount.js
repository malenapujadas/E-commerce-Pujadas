//Importaciones
//Modulos
import { useState } from 'react'
//Estilos
import './ItemCount.css'
//Componetnes
//Core


//Logica
const ItemCount = (props) => { //Funcion consructora

    //props.stock = "7"
    //No puuede restar menos de 0
    //No puede sumar mas de lacantidad maxima en stock

    //Agregar un manejo de Estado
    //useState
    const [count, setCount] = useState(0)

    //Funciones de sumar uno con un maximo de stock 
    const addOne = () => {
        if(count < props.stock){
        setCount(count + 1)

        props.cantidades(count)

        }
    }

    //Funcion de restar uno al contador seteando un minimo
    const disOne = () => {
        if (count > 0){
        setCount(count - 1)
        props.cantidades(count)
        }
    }

    //Funcion agregar x cantida de productos 
    


    //Retorno que se va a renderizar
    return(
        <div className='box-count'>
            <div className='box-count-children'>
                <button onClick={addOne}>+</button>
                <p>{count}</p>
                <button onClick={disOne}>-</button>
            </div> 
        </div>
    )

}


//Exportacion 
export default ItemCount