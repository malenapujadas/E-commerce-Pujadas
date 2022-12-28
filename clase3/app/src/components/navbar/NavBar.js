//Importaciones
//Modulos
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
                        <li><a href='#'>inicio</a></li>
                        <li><a href='#'>tortas</a></li>
                        <li><a href='#'>box</a></li>
                        <li><a href='#'>muffins</a></li>
                        <li><a href='#'>contacto</a></li>
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