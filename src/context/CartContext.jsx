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
        fetch('https://68793b1263f24f1fdca163bf.mockapi.io/products')
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
        producto?.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )

    const handleAddToCart = (product) => {
        const productInCart = cart.find(item => item.id === product.id)

        if (productInCart) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ))
            toast.success(`Se agrego otra unidad de  ${product.nombre}  al carrito`)
        } else {
            toast.success(`El producto ${product.nombre} se ha agregado al carrito`)
            setCart([...cart, { ...product, cantidad: 1 }])
        }
    }

    const handleDeleteFromCart = (product) => {
        const productInCart = cart.find(item => item.id === product.id)

        if (!productInCart) return // No está en el carrito, nada que hacer

        if (productInCart.cantidad > 1) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ))
            toast.info(`Se disminuyó la cantidad del producto ${product.nombre}`)
        } else {
            setCart(cart.filter(item => item.id !== product.id))
            toast.error(`El producto ${product.nombre} se ha eliminado del carrito`)
        }
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
        toast.info('Compra finalizada!')
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
