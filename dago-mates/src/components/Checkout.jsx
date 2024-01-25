import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../firebase/config";
import { collection, writeBatch, addDoc,} from "firebase/firestore";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CarritoContext);

    const [values, setValues] = useState({
        nombre: "",
        provincia: "",
        localidad: "",
        direccion: "",
        email: "",
        confirmar:"",

    });

    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orden = {
            cliente: values,
            items: carrito,
            total: totalCarrito(),
            fecha: new Date(),
        };

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders");
        console.log(carrito.map(prod => prod.id))
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden).then((doc) => {
                        setOrderId(doc.id)
                        vaciarCarrito()
                        toast.success("Compra realizada!",{
                            theme: "dark"
                        })
                    });
                })

    };


    if (orderId) {
        return (
            <div className="orden">
                <h2>Gracias por tu compra!</h2>
                <hr />
                <p>Tu código de orden es: <span>{orderId}</span></p>
                <p>Sigue el estado de tu envio por: <span>{values.email}</span></p>
            </div>
        );
    }
    
    
    return (
        <div className="divFormulario">
            <h2>Checkout</h2>
            <hr />

            <h4>Ingresa tus datos:</h4>
            <form onSubmit={handleSubmit}>
                <div className="formulario">
                    <input
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                        />
                    <input
                        className="input"
                        type="text"
                        placeholder="Provincia"
                        value={values.provincia}
                        onChange={handleInputChange}
                        name="provincia"
                        />
                    <input
                        className="input"
                        type="text"
                        placeholder="Localidad"
                        value={values.localidad}
                        onChange={handleInputChange}
                        name="localidad"
                        />
                    <input
                        className="input"
                        type="text"
                        placeholder="Dirección"
                        value={values.direccion}
                        onChange={handleInputChange}
                        name="direccion"
                        />
                    <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        />
                    <button type="submit" className="boton">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
        
    );
};

export default Checkout;
