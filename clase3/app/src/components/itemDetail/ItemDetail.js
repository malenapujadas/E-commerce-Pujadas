//Importaciones
//Modulos
//Estilos
import './ItemDetail.css'

//Componetnes
import Card from 'react-bootstrap/Card'
import ItemCount from '../itemCount/ItemCount'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../itemListContainer/ItemListContainer'
//Core


//Logica
const ItemDetail = (props) => { //Funcion consructora

    const {title, description, category, price } = props.data


    //Retorno que se va a renderizar
    return(
        <article className='itemDetail-producto'>
            <h1>Detalle del producto seleccionado</h1>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        
        <ItemCount stock={10}/>  
        </Card.Body>
    </Card>
    <h1>Mas productos</h1>
    <ItemListContainer/>
        </article>
    )

}


//Exportacion 
export default ItemDetail