import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [isAuthenticated, setIsAuth] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    // URL de tu Backend en Railway
    const API_URL = 'https://codigo-back-production.up.railway.app/products';

    useEffect(() => {
        setCargando(true);
        fetch(API_URL)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error en la respuesta del servidor");
                }
                return respuesta.json();
            })
            .then((datos) => {
                console.log("Productos cargados desde Railway:", datos);
                setProductos(datos);
                setCargando(false);
                setError(false);
            })
            .catch((err) => {
                console.error('Error al conectar con Railway:', err);
                setCargando(false);
                setError(true);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const productosFiltrados = productos.filter((producto) =>
        producto?.Nombre?.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleAddToCart = (product) => {
        const productInCart = cart.find(item => item.Id === product.Id);

        if (productInCart) {
            setCart(cart.map(item =>
                item.Id === product.Id
                    ? { ...item, Cantidad: item.Cantidad + 1 }
                    : item
            ));
            toast.success(`Se agregó otra unidad de ${product.Nombre}`);
        } else {
            setCart([...cart, { ...product, Cantidad: 1 }]);
            toast.success(`${product.Nombre} agregado al carrito`);
        }
    };

    const handleDeleteFromCart = (product) => {
        const productInCart = cart.find(item => item.Id === product.Id);

        if (!productInCart) return;

        if (productInCart.Cantidad > 1) {
            setCart(cart.map(item =>
                item.Id === product.Id
                    ? { ...item, Cantidad: item.Cantidad - 1 }
                    : item
            ));
            toast.info(`Cantidad de ${product.Nombre} disminuida`);
        } else {
            setCart(cart.filter(item => item.Id !== product.Id));
            toast.error(`${product.Nombre} eliminado del carrito`);
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
        toast.info('Carrito vacío');
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                productos,
                cargando,
                error,
                handleAddToCart,
                handleDeleteFromCart,
                isAuthenticated,
                setIsAuth,
                productosFiltrados,
                busqueda,
                setBusqueda,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
