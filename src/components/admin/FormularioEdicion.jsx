import React, { useState, useEffect } from "react";

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
  const [producto, setProducto] = useState(productoSeleccionado);

  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onActualizar(producto);
      }} className="mb-3"
    >
      <h2>Editar Producto</h2>
      <div>
        <label className="form-label" htmlFor="id">ID:</label>
        <input
          type="number"
          name="id"
          value={producto.Id || ""}
          onChange={handleChange}
          className="form-control"
          readOnly
        />
      </div>
      <div>
        <label className="form-label" htmlFor="Nombre">Nombre:</label>
        <input
          type="text"
          name="Nombre"
          className="form-control"
          value={producto.Nombre || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="Equipo">
          Equipo:
        </label>
        <input
          type="text"
          name="Equipo"
          className="form-control"
          value={producto.Equipo}
          onChange={handleChange}
          required
        />
      </div>
        <div>
        <label className="form-label" htmlFor="Temporada">
          Temporada:
        </label>
        <input
          type="text"
          name="Temporada"
          className="form-control"
          value={producto.Temporada}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="Img1">
          Imagen frente:
        </label>
        <input
          type="text"
          name="Img1"
          className="form-control"
          value={producto.img1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="Img2">
          Imagen dorso:
        </label>
        <input
          type="text"
          name="Img2"
          className="form-control"
          value={producto.img2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="Categoria">Categoría:</label>
        <input
          type="text"
          name="Categoria"
          className="form-control"
          value={producto.Categoria || ""}
          onChange={handleChange}
          required
        />

      </div>
        <div>
        <label className="form-label" htmlFor="Pais">Pais:</label>
        <input
          type="text"
          name="Pais"
          className="form-control"
          value={producto.Pais }
          onChange={handleChange}
          required
        />

      </div>
      <div>
        <label className="form-label" htmlFor="Precio">Precio:</label>
        <input
          type="number"
          name="Precio"
          className="form-control"
          value={producto.Precio}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label className="form-label" htmlFor="Cantidad">Cantidad:</label>
        <input
          type="number"
          name="Cantidad"
          className="form-control"
          value={producto.Cantidad}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
    
    
      <button type="submit" className="btn btn-primary">Actualizar Producto</button>
    </form>
  );
}
export default FormularioEdicion;
