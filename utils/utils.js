
import DATA_PRODUCTOS from "../productos.json"

export const pedirDatos = () => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (DATA_PRODUCTOS)
        }, 500)
    })
}