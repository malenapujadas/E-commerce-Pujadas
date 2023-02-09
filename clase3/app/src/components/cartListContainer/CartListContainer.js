//        IMPORTACIONES

// Modulos
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

// Estilos
import './CartListContainer.css'

// Componentes
import CartItem from "../cartItem/CartItem"

// Core


//        LOGICA

// Función constructora
const CartListContainer = () => {

    const { productoCarList, vaciarCarrito, obtenerTotal } = useContext(CartContext);


    return (
        <div>
            <div className="vaciar_carrito">
                <button onClick={vaciarCarrito} >Vaciar Carrito</button>
            </div>
            <div className='productos_carrito'>
                {
                    productoCarList.length > 0 ?
                        <div>
                            {
                                productoCarList.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                            <div className='datos_finales'>
                                <p>Monto final : ${obtenerTotal()}</p>
                            </div>
                            <div className='comprar'>
                                <Link to="/productos" className='seguir_comprando'>Seguir Compando</Link>
                                <Link to="/compra"><button>Continuar La Compra</button></Link>
                            </div>
                        </div>
                        :
                        <p className='carrito_vacio'>No has agregado productos.</p>
                }
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default CartListContainer