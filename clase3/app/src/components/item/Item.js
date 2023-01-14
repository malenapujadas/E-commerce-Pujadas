//Importaciones
//Modulos
import Card from 'react-bootstrap/Card'
//Estilos
import './Item.css'
import '../cards/Cards.css'
import { Link } from 'react-router-dom'
//Componetnes
import ItemCount from '../itemCount/ItemCount'
//Core


//Logica
const Item = (props) => { //Funcion consructora

    const {title, description, category, price, id} = props.data


    //Retorno que se va a renderizar
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Link to={`/producto/${id}`}>Ver detalle del producto</Link>
        <ItemCount stock={10}/>  
        </Card.Body>
    </Card>
    )

}


//Exportacion 
export default Item