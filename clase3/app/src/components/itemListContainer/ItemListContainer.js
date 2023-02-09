//Importaciones
//Modulos
import { items } from '../../services/firebase';

import { getDocs } from 'firebase/firestore/lite';
//Estilos
import './ItemListContainer.css'

//Componetnes
import ItemList from '../itemList/ItemList'

//Core


//Logica
const ItemListContainer = (props) => { //Funcion consructora

    



    //Retorno que se va a renderizar
    return(
        <div className='main-section'>
            <p>{props.greeting}</p>
            
            <div>
                <h1>Mis productos</h1>
            </div>
            <ItemList/>
        </div>

    )

}


//Exportacion 
export default ItemListContainer