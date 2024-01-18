import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext} from '../../context/CarritoContext'



const CartWidget = () => {
    const {itemsEnCarrito} = useContext(CarritoContext)
    return (
        <Link to='carrito' className='enlace'>
            <span>{itemsEnCarrito()}</span>
            <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
    
    )
}

export default CartWidget