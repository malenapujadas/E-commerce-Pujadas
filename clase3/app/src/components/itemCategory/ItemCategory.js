/* //Importaciones
//Modulos
//Estilos
import './ItemCategory.css'
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../item/Item'


//Componetnes
//Core


//Logica
const ItemCategory = (props) => { //Funcion consructora

    const [productos,setProductos] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
        fetch(`../../misProductos.json/categoria/${props.categoria}`)
            .then((res) => res.json())
            .then((json) => {
                if (categoriaId) {
                    setProductos(
                        json.productos.filter((productos) => productos.categoria === categoriaId)
                    );
                } else {
                    setProductos(json.productos);
                }
            });
    }, [categoriaId]); 
 


/*  useEffect(()=>{
        fetch(`../../misProductos.json/categoria/${props.categoria}`)
            .then(res=>res.json())
            .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
    },[productos,props.categoria]) */
/* 
    return(
        <div>
            <p>ItemCategory</p>
            {productos}
        </div>
    )

}


//Exportacion 
export default ItemCategory */ 