//Importaciones
//Modulos
import 'bootstrap'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

//Estilos
import './Cart.css'
//Componetnes
//Core


//Logica
const Cart = ({item}) => { //Funcion consructora


    const {eliminarProducto} = useContext(CartContext)
    return (
        <div>
            <div className='texto_producto_carrito'>
                <div className='claves'>
                    <p className='clave'>Nombre</p>
                    <p className='clave'>Precio</p>
                    <p className='clave'>Cantidad</p>
                    <p className='clave'>Total</p>
                </div>
                <div>
                    <div className='valores'>
                        <p className='valor'>{item.nombre}</p>
                        <p className='valor'>${item.precio}</p>
                        <p className='valor'>{item.cantidad}</p>
                        <p className='valor'>${item.precioTotal}</p>
                    </div>
                </div>
            </div>
            <div className='borrar_producto'>
                <p onClick={() => eliminarProducto(item.id)}></p>
            </div>
        </div>
























        /*  <div>
            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href</a>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> */
    )

}


//Exportacion 
export default Cart