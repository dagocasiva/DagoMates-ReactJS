import { createContext, useState } from "react";

export const CarritoContext = createContext()


export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item])
    }

    const enCarrito = (id) => {
        return carrito.some(item => item.id === id)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const itemsEnCarrito = () => {
        return carrito.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const totalCarrito = () => {
        return carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    }

    const eliminarItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }

    return (
        <CarritoContext.Provider value={{
            carrito,
            enCarrito,
            agregarAlCarrito,
            vaciarCarrito,
            itemsEnCarrito,
            totalCarrito,
            eliminarItem
        }}>
            {children}
        </CarritoContext.Provider>
    )
}