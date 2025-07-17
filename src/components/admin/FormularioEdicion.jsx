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
          value={producto.id || ""}
          onChange={handleChange}
          className="form-control"
          readOnly
        />
      </div>
      <div>
        <label className="form-label" htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={producto.nombre || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="equipo">
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
        <label className="form-label" htmlFor="temporada">
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
        <label className="form-label" htmlFor="img1">
          Imagen frente:
        </label>
        <input
          type="text"
          name="img1"
          className="form-control"
          value={producto.img1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="img2">
          Imagen dorso:
        </label>
        <input
          type="text"
          name="img2"
          className="form-control"
          value={producto.img2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="categoria">Categoría:</label>
        <input
          type="text"
          name="categoria"
          className="form-control"
          value={producto.categoria || ""}
          onChange={handleChange}
          required
        />

      </div>
        <div>
        <label className="form-label" htmlFor="pais">Pais:</label>
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
        <label className="form-label" htmlFor="precio">Precio:</label>
        <input
          type="number"
          name="precio"
          className="form-control"
          value={producto.precio}
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
