import { useState } from "react";
import Boton from "../components/boton";
import SelectorCantidad from "./SelectorCantidad";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }

        console.log(itemToCart)
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

                    <SelectorCantidad
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                    />

                    <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
