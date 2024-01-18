import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import Loader from "./Loader/Spinner"
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {categoriaId} = useParams()

    useEffect (() =>{
        setCargando(true)

        const prodRef = collection(db, 'productos')
        const docsRef = categoriaId 
                            ? query(prodRef, where('categoria', '==', categoriaId))
                            : prodRef
            getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
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