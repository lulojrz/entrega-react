import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Swal from "sweetalert2";
import { useState } from 'react'

const Contactos = ({cart, borrarProducto}) => {
   const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const cambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const subir = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.mensaje) {
      console.log("Formulario enviado:", formData);
      setEnviado(true);
       Swal.fire({
                      title: "Realizado",
                      text: "Informacion Recibida!",
                      icon: "success"
                  });
      setFormData({ nombre: "", email: "", mensaje: "" });
    } else {
       Swal.fire({
                      title: "Error",
                      text: "Complete todos los campos!",
                      icon: "error"
                  });
    }
  };

  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
     <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Contacto</h2>
          <p className="text-center text-muted mb-4">
            ¿Tenés alguna duda o consulta? ¡Escribinos y te responderemos a la brevedad!
          </p>

          {enviado && (
            <div className="alert alert-success" role="alert">
              ¡Gracias por tu mensaje! Te responderemos pronto.
            </div>
          )}

          <form onSubmit={subir}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={cambio}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={cambio}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={cambio}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
      <Footer/>
    </>
  )
}

export default Contactos
