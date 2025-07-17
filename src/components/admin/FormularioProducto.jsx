import React, { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [producto, setProducto] = useState({
    nombre: "",
    Equipo: "",
    Temporada: "",
    img1: "",
    img2: "",
    categoria: "",
    Pais: "",
    precio: "",
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!producto.precio || producto.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser mayor a 0.";
    }
    if (!producto.categoria.trim() || producto.categoria.length < 5) {
      nuevosErrores.categoria =
        "La categoria debe tener al menos 5 caracteres.";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    onAgregar(producto);
    setProducto({
      nombre: "",
      Equipo: "",
      Temporada: "",
      img1: "",
      img2: "",
      categoria: "",
      Pais: "",
      precio: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h2>Agregar Producto</h2>
      <div>
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={producto.nombre}
          onChange={handleChange}
          required
        />
        {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
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
        {errores.img1 && <p style={{ color: "red" }}>{errores.img1}</p>}
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
        {errores.categoria && (
          <p style={{ color: "red" }}>{errores.categoria}</p>
        )}
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
        {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
      </div>

      <button type="submit" className="btn btn-primary">Agregar Producto</button>
    </form>
  );
}

export default FormularioProducto;
