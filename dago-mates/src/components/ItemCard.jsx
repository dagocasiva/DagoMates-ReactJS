import { Link } from "react-router-dom";
import Boton from "./boton";

const ItemCard = ({ item }) => {

    return (
            <div className="cardContainer">
                <img src={item.imagen} alt={item.nombre} className="imagenProd"/>
                <h3 className="nombreProducto">{item.nombre}</h3>
                <p className="PrecioProducto">Precio: ${item.precio}</p>

                <Boton className="boton">
                    <Link to={`/item/${item.id}`}>Ver más</Link>
                </Boton>
            </div>
        );
    };

export default ItemCard;
