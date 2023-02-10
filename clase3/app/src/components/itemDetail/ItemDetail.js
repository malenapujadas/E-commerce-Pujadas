//Importaciones
//Modulos
import { useState,useContext  } from 'react'
import { CartContext} from '../../context/CartContext'
//Estilos
import './ItemDetail.css'

//Componetnes
import Card from 'react-bootstrap/Card'
import ItemCount from '../itemCount/ItemCount'

//Core


//Logica
const ItemDetail = (props) => { //Funcion consructora


    const [cantidad, setCantidad] = useState(0)


    const {nombre, descripcion, categoria, precio, stock, id } = props.data

    const { agregarAlCarrito} = useContext(CartContext)


    const tomarCantidad = (numero) =>{
        setCantidad(numero)
    }

    const onAdd = () => {

        if (cantidad !== 0) {
            const producto = {
                id: id,
                nombre: nombre,
                categoria: categoria,
                precio: precio,
                count: cantidad,
            }

            agregarAlCarrito(producto)
        } else {
            alert("No te olvides de añadir productos")
        }

}




    //Retorno que se va a renderizar
    return(
        <article className='itemDetail-producto'>
            <h1>Detalle del producto seleccionado</h1>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{categoria}</Card.Text>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>{precio}</Card.Text>
        
        <ItemCount stock={stock} cantidades={tomarCantidad}/>  
        <button onClick={onAdd}>Agregar al carrito</button>
        </Card.Body>
    </Card>
    
        </article>
    )

}


//Exportacion 
export default ItemDetail