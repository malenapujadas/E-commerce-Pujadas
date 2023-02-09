//Importaciones
//Modulos
//Estilos
import './ItemCategoryContainer.css'
//Componetnes
import { useParams } from 'react-router-dom'
import ItemCategory from '../itemCategory/ItemCategory'
//Core


//Logica
const ItemCategoryContainer = () => { //Funcion consructora

const {categoriaId} = useParams()




    return(
        <div>
            <ItemCategory categoria={categoriaId}/>
        </div>
    )

}


//Exportacion 
export default ItemCategoryContainer