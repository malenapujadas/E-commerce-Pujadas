//Importaciones
//Modulos
import { useEffect, useState } from 'react'
//Estilos
import './ItemList.css'
//Componetnes
import Item from '../item/Item'
import { useParams } from 'react-router-dom'


//Core


//Logica
const ItemList = (props) => { //Funcion consructora

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()


    //Llamada a array de objetos
    

    //Nuestra Api de productos
    // ------------- archivo JSON

    useEffect(()=>{
        fetch('../../misProductos.json')
            .then(res=>res.json())
            .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
    },[])

    
    






    //Tenemos un retraso de informacion

    
    //Retorno que se va a renderizar
    return(
        <div>
            <p>este es el item List </p>
            {productos}
        </div>
    )

}


//Exportacion 
export default ItemList