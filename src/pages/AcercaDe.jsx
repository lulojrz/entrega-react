import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = ({cart,borrarProducto}) => {
  return (
    <>
      <Header />
      <section className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Sobre Nosotros</h1>
        <p className="lead">Pasión por el fútbol, diseño y estilo único.</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/10/16/Soccer-Logo-or-football-vector-design-Graphics-6101117-2-580x387.png" 
            alt="Tienda de camisetas"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h3>¿Quiénes somos?</h3>
          <p>
            Somos una tienda especializada en camisetas de fútbol únicas, vintage
            y actuales. Amamos el deporte y creemos que una camiseta es mucho más
            que una prenda: es historia, identidad y pasión.
          </p>

          <h3>Nuestra misión</h3>
          <p>
            Acercarte los diseños más icónicos y difíciles de conseguir, con la mejor
            calidad y atención personalizada. Queremos que cada cliente encuentre
            esa camiseta que lo representa.
          </p>

          <h3>¿Por qué elegirnos?</h3>
          <ol style={{"display":"flex","flex-direction":"row","justifyContent":"space-between", "flexWrap":"wrap"}}>
            <li>Envíos a todo el país</li>
            <li>Stock actualizado semanalmente</li>
            <li>Camisetas originales y réplicas premium</li>
            <li>Atención por WhatsApp y redes sociales</li>
          </ol>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4>¡Gracias por confiar en nosotros!</h4>
        <p>
          Seguinos en redes sociales para enterarte de las novedades,
          nuevos ingresos y sorteos especiales.
        </p>
      </div>
    </section>
      <Footer />
    </>
  )
}

export default AcercaDe
