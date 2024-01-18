import Boton from "./boton";

const SelectorCantidad = ({ cantidad,setCantidad }) => {

    const handleSumar = () => {
        cantidad && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div>
            <Boton onClick={handleRestar}>-</Boton>
            <span>{cantidad}</span>
            <Boton onClick={handleSumar}>+</Boton>
        </div>
    );
};

export default SelectorCantidad;