import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext"
import CarritoVacio from "../components/CarritoVacio";
import Boton from "../components/boton";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { carrito, totalCarrito, vaciarCarrito, eliminarItem } = useContext(CarritoContext);

    if (carrito.length === 0) return <CarritoVacio />

    return (
        <section className="carrito">
            <p>Bienvenido!</p>
            <h2>Tu Compra:</h2>
            <hr />

            <div className="containerCarrito">
                <ul className="productosCarrito">
                    {carrito.map((item) => (
                        <li key={item.id} className="prodCarrito">
                            <img src={item.imagen} className="imagenProdCarrito"/>
                            <div className="descripcion">
                                <h3>{item.nombre}</h3>
                                <p>
                                    $ {item.precio}
                                </p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Subtotal: ${item.precio * item.cantidad}</p>

                                <Boton className="botonEliminar" onClick={() => eliminarItem(item.id)}>Eliminar</Boton>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            

            <h4>TOTAL: ${totalCarrito()}</h4>
            <Boton className="botonCarrito" onClick={vaciarCarrito}>Vaciar carrito</Boton>
            <Boton className="botonCarrito"><Link to="/checkout">Terminar mi compra</Link></Boton>
        </section>
    );
};

export default Carrito;
