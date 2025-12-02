import React, { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [producto, setProducto] = useState({
    Nombre: "",
    Equipo: "",
    Temporada: "",
    img1: "",
    img2: "",
    Categoria: "",
    Pais: "",
    Precio: "",
    Cantidad: "",
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.Nombre.trim()) {
      nuevosErrores.Nombre = "El nombre es obligatorio.";
    }
    if (!producto.Precio || producto.Precio <= 0) {
      nuevosErrores.Precio = "El precio debe ser mayor a 0.";
    }
    if (!producto.Categoria.trim() || producto.Categoria.length < 5) {
      nuevosErrores.Categoria =
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
      Nombre: "",
      Equipo: "",
      Temporada: "",
      img1: "",
      img2: "",
      Categoria: "",
      Pais: "",
      Precio: "",
      Cantidad: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h2>Agregar Producto</h2>
      <div>
        <label className="form-label" htmlFor="Nombre">Nombre:</label>
        <input
          type="text"
          name="Nombre"
          className="form-control"
          value={producto.Nombre}
          onChange={handleChange}
          required
        />
        {errores.Nombre && <p style={{ color: "red" }}>{errores.Nombre}</p>}
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
        <label className="form-label" htmlFor="Categoria">Categoría:</label>
        <input
          type="text"
          name="Categoria"
          className="form-control"
          value={producto.Categoria || ""}
          onChange={handleChange}
          required
        />
        {errores.Categoria && (
          <p style={{ color: "red" }}>{errores.Categoria}</p>
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
        {errores.Precio && <p style={{ color: "red" }}>{errores.Precio}</p>}
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

      <button type="submit" className="btn btn-primary">Agregar Producto</button>
    </form>
  );
}

export default FormularioProducto;
