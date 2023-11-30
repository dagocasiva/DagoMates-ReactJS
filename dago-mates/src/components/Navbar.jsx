import logo from '/logo.png'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (

        <header className="header">
            <div className="containerNavbar">
                <div className='logo'>
                    <img src={logo} alt="logo" className='imagenLogo' />
                    <h1 className="titulo">DagoMates</h1>    
                </div>

                <nav>
                    <a className="enlace" href="#">Inicio</a>
                    <a className="enlace" href="#">Productos</a>
                    <a className="enlace" href="#">Contacto</a>
                    <CartWidget/>
                </nav>
            </div>   
        </header>

    )

}

export default Navbar