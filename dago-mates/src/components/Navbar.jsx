import logo from '/logo.png'
import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom";


const enlaces = [
    {
        nombre: "Inicio",
        enlace: "/",
    },
    {
        nombre: "Termos",
        enlace: "/productos/termos",
    },
    {
        nombre: "Mates",
        enlace: "/productos/mates",
    },
    // {
    //     nombre: "Carrito",
    //     enlace: "/carrito",
    // },
];

const Navbar = () => {
    return (

        <header className="header">
            <div className="containerNavbar">
                <div className='logo'>
                    <a href="/">
                        <img src={logo} alt="logo" className='imagenLogo' />
                        <h1 className="titulo">DagoMates</h1>
                    </a>

                </div>

                <nav>
                    {enlaces.map((enlace) => (

                        <NavLink
                            key={enlace.enlace}
                            to={enlace.enlace}
                            className="enlace"
                        >
                            {enlace.nombre}
                        </NavLink>

                    ))}
                    <CartWidget />
                </nav>
            </div>
        </header>

    )

}

export default Navbar