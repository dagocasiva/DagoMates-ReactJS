import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../firebase/config";
import { collection, writeBatch, addDoc, setDoc, doc, updateDoc, getDoc, query, where, documentId, getDocs } from "firebase/firestore";

const Checkout = () => {
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CarritoContext);

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
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
        // const productosRef = collection(db, 'productos')
        // const itemsQuery = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))
        console.log(carrito.map(prod => prod.id))

            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden).then((doc) => {
                        setOrderId(doc.id)
                        vaciarCarrito()

                        alert("Gracias por tu compra!")
                    });
                })

    };

    if (orderId) {
        return (
            <div>
                <h2>Gracias por tu compra</h2>
                <hr />
                <p>Tu código de orden es: {orderId}</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr />

            <h4>Ingresa tus datos:</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                />

                <input
                    type="text"
                    placeholder="Dirección"
                    value={values.direccion}
                    onChange={handleInputChange}
                    name="direccion"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                />
                <button type="submit" className="boton">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Checkout;
