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
const Item = (props) => { //Funcion consructora

    const {nombre, descripcion, categoria, precio, id, stock} = props.data


    //Retorno que se va a renderizar
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{categoria}</Card.Text>
        {/* <Card.Text>{descripcion}</Card.Text> */}
        <Card.Text>{precio}</Card.Text>
        <Link to={`/producto/${id}`}>Ver detalle del producto</Link>
        
        </Card.Body>
    </Card>
    )

}


//Exportacion 
export default Item