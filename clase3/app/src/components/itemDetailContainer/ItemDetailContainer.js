//Importaciones
//Modulos
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
//Estilos
import './ItemDetailContainer.css'
//Componetnes
import ItemDetail from '../itemDetail/ItemDetail'
//Core


//Logica
const ItemDetailContainer = () => { //Funcion consructora

    const [productos, setProductos] = useState([])
    
    const {productoId} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos}/>))
    },[productoId])

    //Retorno que se va a renderizar
    return(
        <section className='itemDetail-box'>
            <Link to="/productos">Volver a mis productos</Link>
            {productos}
        </section>
    )

}


//Exportacion 
export default ItemDetailContainer