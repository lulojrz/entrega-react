import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)
    const [busqueda, setBusqueda]= useState("")

    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    console.log("Productos cargados:", datos)
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const productosFiltrados = productos.filter((producto) =>
        producto?.Nombre.toLowerCase().includes(busqueda.toLowerCase())
    )

    const handleAddToCart = (product) => {
        const productInCart = cart.find(item => item.Id === product.Id)

        if (productInCart) {
            setCart(cart.map(item =>
                item.Id === product.Id
                    ? { ...item, Cantidad: item.Cantidad + 1 }
                    : item
            ))
            toast.success(`Se agrego otra unidad de  ${product.Nombre}  al carrito`)
        } else {
            toast.success(`El producto ${product.Nombre} se ha agregado al carrito`)
            setCart([...cart, { ...product, Cantidad: 1 }])
        }
    }

    const handleDeleteFromCart = (product) => {
        const productInCart = cart.find(item => item.Id === product.Id)

        if (!productInCart) return 

        if (productInCart.Cantidad > 1) {
            setCart(cart.map(item =>
                item.Id === product.Id
                    ? { ...item, Cantidad: item.Cantidad - 1 }
                    : item
            ))
            toast.info(`Se disminuyó la cantidad del producto ${product.Nombre}`)
        } else {
            setCart(cart.filter(item => item.Id !== product.Id))
            toast.error(`El producto ${product.nombre} se ha eliminado del carrito`)
        }
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
        toast.info('Carrito sin Productos')
    }

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
    )
}
