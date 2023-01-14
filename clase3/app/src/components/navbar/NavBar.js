//Importaciones
//Modulos
import { Link } from 'react-router-dom'

//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget'
//Componetnes
//Core


//Logica
const NavBar = () => { //Funcion consructora


    //Retorno que se va a renderizar
    return(
        <header>
            <nav className='navbar'>
                <div>
                    <p>piúdulce</p>
                </div>
                <div>
                    <ul>
{/* en realidad yo quiero que sea una seccion productos y ahi todas las categorias */}
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/productos'>productos</Link></li>
                        <li><Link to='/nosotros'>nosotros</Link></li>
                    </ul>
                </div>
                <div>
            <CardWidget cantidad="3"/>
                </div>
            </nav>
        </header>

    )

}


//Exportacion 
export default NavBar