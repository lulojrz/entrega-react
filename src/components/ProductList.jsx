import React, { useContext } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";

const ProductList = ({origen}) => {
  const {productos,productosFiltrados,handleAddToCart,busqueda,setBusqueda} = useContext(CartContext)
  return (
    <>
      <section >
        {
          origen=="Home"? " ":
          <form className="mb-3">
        <label htmlFor="filtrado" className="form-label"><strong>Busqueda</strong></label>
        <input type="text"  className= "form-control"name = "filtrado" placeholder="buscar productos..." value={busqueda} onChange={(e)=> {setBusqueda(e.target.value)}} />
       </form>
        }
         
        <section className="container-productos">
        <>
          {productos?.length > 0 ? (
            productosFiltrados.map((producto) => (
              <Productos
                key={producto.Id}
                producto={producto}
                agregarCarrito={handleAddToCart}
                origen={origen}
              />
            ))
          ) : (
            <p>Cargando productos o no hay productos disponibles.</p>
          )}
        </>
        </section>
      </section>
    </>
  );
};

export default ProductList;
