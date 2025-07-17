import React from "react";
import { useParams } from "react-router-dom";
import Header from "./estaticos/Header";
import "./estilosDetalles.css";
import Footer from "./estaticos/Footer";

const DetallesProductos = ({
  productos,
  cart,
  borrarProducto,
  vaciarCarrito,
  cargando,
  agregarCarrito,
}) => {
  const { id } = useParams();
  const product = productos.find((producto) => producto.id == id);
  return (
    <>
      <Header
        cartItems={cart}
        borrarProducto={borrarProducto}
        vaciarCarrito={vaciarCarrito}
      ></Header>
      <div className="container-detalles">
        {product && !cargando ? (
          <div className="content-detalles">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  style={{ backgroundColor: "black" }}
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  style={{ backgroundColor: "black" }}
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={product.img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={product.img2} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                style={{ color: "black" }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                style={{ color: "black" }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="info-detalles">
              <div className="detalles-producto">
                <h2>Camiseta de {product.Equipo}</h2>
                <h3>Temporada: {product.Temporada}</h3>
              </div>

              <div className="detalles-precio">
                <h1>${product.precio}</h1>
                <span style={{ color: "green" }}>
                  Mismo precio en {product.precio > 50000 ? "6" : "3"} cuotas de
                  $
                  {product.Precio > 50000
                    ? Number((product.precio / 6).toFixed(2))
                    : Number((product.precio / 3).toFixed(2))}
                </span>
                <span>Medios de Pago :</span>
                <details>
                  {" "}
                  <summary> Tarjetas de Credito</summary>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/6756e0f0-24f0-11eb-8a85-870f2cce05b3-m.svg"
                        alt=""
                      />
                      <br />
                      <span style={{ color: "green" }}>
                        {product.Precio > 50000 ? "6 Cuotas " : "3 Cuotas"}
                      </span>
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/dd202b00-f486-11eb-9984-b7076edb0bb7-m.svg"
                        alt=""
                      />
                      <br />
                      <span style={{ color: "green" }}>
                        {product.Precio > 50000 ? "6 Cuotas " : "3 Cuotas"}
                      </span>
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/6565df90-579c-11e8-823a-758d95db88db-m.svg"
                        alt=""
                      />
                      <br />
                      <span style={{ color: "green" }}>
                        {product.Precio > 50000 ? "6 Cuotas " : "3 Cuotas"}
                      </span>
                    </li>
                  </ul>
                </details>
                <details>
                  <summary> Tarjetas de Debito</summary>
                  <p>  Acreditacion Instantanea</p>
                  <ul style={{ listStyle: "none" }}>
                  
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </details>
                <div className="efectivo">
                  <span>Efectivo</span>
                  <br />
                  <img
                    src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"
                    alt=""
                  />
                </div>
                <div className="mercado-pago">
                  <span>Dinero disponible en Mercado Pago</span>
                  <br />
                  <img src="https://http2.mlstatic.com/storage/logos-api-admin/f3e8e940-f549-11ef-bad6-e9962bcd76e5-m.svg" alt="" />
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => agregarCarrito(product)}
              >
                Agregar Unidad
              </button>
            </div>
          </div>
        ) : (
          <>
          <i className="fa-solid fa-spinner fa-spin-pulse carga"></i>
          <h3>Cargando</h3> </>
        )}
      </div>

      <Footer></Footer>
    </>
  );
};

export default DetallesProductos;