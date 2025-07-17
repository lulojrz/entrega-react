import React, { useState } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList"
const Home = ({productos,cargando,cart,agregarCarrito,borrarProducto, vaciarCarrito}) => {
  const origenHome = "Home"
  return (
    <>
      <Header cartItems={cart} borrarProducto = {borrarProducto} vaciarCarrito={vaciarCarrito}></Header>
      <main>
        <div className="banner-img">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_DESKTOP_2880x1200_4da173f07b.jpg"
            alt=""
          />
        </div>
        <h1>Bienvenidos a la tienda</h1>
        <h4>Productos Destacados</h4>
        {
          cargando? <i className="fa-solid fa-spinner fa-spin-pulse carga"></i>:
          <ProductList  origen={origenHome}></ProductList>
        }
       
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
