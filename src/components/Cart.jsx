import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './estilosCart.css'

const Carrito = ({ isOpen, onClose }) => {
  const { cart, handleAddToCart, handleDeleteFromCart, clearCart } = useContext(CartContext);

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrito de compras</h2>
        <button className="close-button" onClick={onClose} aria-label="Cerrar carrito">&times;</button>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((producto) => (
                <li key={producto.id} style={{ marginBottom: "1rem" , color:"black"}}>
                  <strong>{producto.nombre}</strong> - Cantidad: {producto.cantidad} - Precio unitario: ${producto.precio}
                  <br />
                  <h6>Precio total :${producto.cantidad * producto.precio}</h6>
                  <div>
                    <button className = "btn btn-primary" onClick={() => handleAddToCart(producto)}>+</button>
                    <button className = "btn btn-danger" onClick={() => handleDeleteFromCart(producto)}>-</button>
                  </div>
                   <hr />
                </li>
               
              ))}
            </ul>
            <h3>
              Total: $
              {cart.reduce(
                (total, producto) => total + producto.Precio * producto.cantidad,
                0
              )}
            </h3>
            <button className = "btn btn-danger"onClick={clearCart}>Vaciar carrito</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
