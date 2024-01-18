import { Link } from "react-router-dom"
import Boton from "../components/boton"


const CarritoVacio = () => {

    return (
        <section>
            <h2>Lo sentimos, tu carrito está vacío :(</h2>
            <hr />
            <p>Por favor, agrega algún producto a tu carrito</p>
            <Boton>
                <Link to={"/"}>Volver</Link>
            </Boton>
        </section>
    )
}

export default CarritoVacio