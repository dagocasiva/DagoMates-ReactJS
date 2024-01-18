import { useContext, useState } from "react";
import Boton from "../components/boton";
import SelectorCantidad from "./SelectorCantidad";
import { Link, useNavigate } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";


const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { agregarAlCarrito, enCarrito } = useContext(CarritoContext)

    const handleAgregar = () => {
        const itemCarrito = {
            ...item,
            cantidad,
        }

        agregarAlCarrito(itemCarrito)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="detail">
            <Boton onClick={handleVolver} className="botonVolver">Volver atras</Boton>
            <div className="descripcionProd">
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
            </div>


            <div className="divProd">
                <img src={item.imagen} alt={item.nombre} />

                <div>
                    <p>Precio: ${item.precio}</p>
                    {
                        enCarrito(item.id)
                        ? <Boton><Link to='/carrito'>Terminar mi compra</Link></Boton>
                        : <>
                        <SelectorCantidad
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        />

                        <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
