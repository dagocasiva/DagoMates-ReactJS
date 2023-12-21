
const Boton = ({ children, className = "", onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`${className}`}
        >
            {children}
        </button>
    );
};

export default Boton;
