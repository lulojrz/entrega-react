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
                // El setTimeout es opcional, lo mantengo porque lo tenías en tu código original
                setTimeout(() => {
                    console.log("Productos cargados desde Railway:", datos);
                    setProductos(datos);
                    setCargando(false);
                    setError(false);
                }, 2000);
            })
            .catch((err) => {
                console.error('Error al conectar con Railway:', err);
                setCargando(false);
                setError(true);
                toast.error("No se pudieron cargar los productos");
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Filtrado de productos (asegurando que producto existe antes de acceder a Nombre)
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
            toast.success
