//Importaciones
//Modulos
import Card from 'react-bootstrap/Card'
//Estilos
import './Item.css'
import '../cards/Cards.css'
import { Link } from 'react-router-dom'
//Componetnes

//Core


//Logica
const Item = ({item}) => { //Funcion consructora

    //Retorno que se va a renderizar
    return(
        <Card style={{ width: '18rem' }}>
        <img src={item.imagen} alt={item.nombre}></img>
        <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>{item.categoria}</Card.Text>
        <Card.Text>${item.precio}</Card.Text>
        <Link to={`/producto/${item.id}`}>Ver detalle del producto</Link>
        
        </Card.Body>
    </Card>
    )

}


//Exportacion 
export default Item