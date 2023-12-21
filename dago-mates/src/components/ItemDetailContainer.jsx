import { useEffect, useState } from "react";
import { pedirDatos } from "../../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../../src/components/ItemDetail";
import Loader from "../../src/components/Loader/Spinner";

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true);
    const [item, setItem] = useState({});

    const { itemId } = useParams()
    useEffect(() => {
        setCargando(true);
        pedirDatos()
            .then((data) => {
                setItem(data.find(prod => prod.id === itemId))
            })
            .finally(() => setCargando(false));
    }, [itemId]);

    return (
        <>
            {cargando ? (
                <Loader />
            ) : (
                <ItemDetail item={item} />
            )}
        </>
    );
};

export default ItemDetailContainer;
