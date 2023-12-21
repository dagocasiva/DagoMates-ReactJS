import { useEffect, useState } from "react"
import { pedirDatos } from "../../../utils/utils"
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import Loader from "./Loader/Spinner"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {categoriaId} = useParams()

    useEffect (() =>{
        setCargando(true)

        pedirDatos ()
            .then((data) => {
                const prods = categoriaId
                                ? data.filter(prod => prod.categoria === categoriaId)
                                : data
                setProductos(prods)
            })
            .finally(() => setCargando (false))
    }, [categoriaId])

    return (    
    <div className="Destacados">
        {cargando ? (
            <Loader/>
        )   :   (
            <ItemList productos = {productos}/>
        )
        }
    </div>
        
    )

}
export default ItemListContainer