//Importaciones
//Modulos
import { useEffect, useState } from 'react'
//Estilos
import './ItemList.css'
//Componetnes
import Item from '../item/Item'


//Core


//Logica
const ItemList = (props) => { //Funcion consructora

    const [productos, setProductos] = useState([])

    //Llamada a array de objetos
    

    //Nuestra Api de productos
    // ------------- archivo JSON

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
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