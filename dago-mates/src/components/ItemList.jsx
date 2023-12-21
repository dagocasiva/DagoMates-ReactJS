import ItemCard from "./ItemCard";


const ItemList = ({ productos }) => {

    return (
        <div>

            <h2>Productos que podrian interesarte:</h2>
            <hr />

            <div className="productos">
                {productos.map((item) => <ItemCard key={item.id} item={item} />)}
            </div>

        </div>
    );
};

export default ItemList;
