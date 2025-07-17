import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ProductList from "../components/ProductList"
import Header from "../components/estaticos/Header"

const VistaProductos = () => {
  const { productos, cargando, cart, handleAddToCart, handleDeleteFromCart, clearCart } = useContext(CartContext)
  const origen = "Productos"
  return (
     <>
    <Header></Header>
    
    <ProductList
      productos={productos}
      agregarCarrito={handleAddToCart} 
      cart={cart}
      borrarProducto={handleDeleteFromCart}
      vaciarCarrito={clearCart}
      origen={origen}
    /> 
    </>
  )
}
export default VistaProductos