import Boton from "./boton";

const SelectorCantidad = ({ cantidad, stock, setCantidad }) => {

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
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