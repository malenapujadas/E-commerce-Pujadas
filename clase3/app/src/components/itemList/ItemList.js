//Importaciones
//Modulos
//Estilos
import './ItemList.css'
//Componetnes
import Item from '../item/Item'



//Core


//Logica
const ItemList = ({item}) => { //Funcion consructora

    return(
        <div>
            <p>este es el item List </p>
            {
                item.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }

        </div>
    )

}


//Exportacion 
export default ItemList