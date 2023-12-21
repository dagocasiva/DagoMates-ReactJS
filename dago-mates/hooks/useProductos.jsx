import { useEffect, useState } from "react"
import { pedirDatos } from "../utils/utils"
import useFetch from "./useFetch"

const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)

        pedirDatos() // <= Promise
            .then((data) => {
                setProductos( data )
                setCargando( false )
            })
    }, [])
    
    return {
        productos,
        loading
    }
}

export default useProductos