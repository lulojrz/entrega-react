import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router'
import { useState,useEffect, useContext } from 'react'
import AcercaDe from "./pages/AcercaDe"
import Contacto from "./pages/Contactos"
import NotFound from "./pages/NotFound"
import VistaProductos from "./pages/GaleriaDeProductos"
import Home from "./pages/Home"
import DetallesProductos from './components/DetallesProductos'
import Login from './pages/Login'
import Admin from './pages/Admin'
import RutasProtegidas from './rutas/RutasProtegidas'
import { CartContext } from './context/CartContext'
import './App.css'
function App() {
  const {
    cart,
    productos,
    cargando,
    handleAddToCart,
    handleDeleteFromCart,
    vaciarCarrito,
    isAuthenticated,
  } = useContext(CartContext);

  return (
    <Routes>
      <Route path='/' element={
        <Home
          borrarProducto={handleDeleteFromCart}
          agregarCarrito={handleAddToCart}
          productos={productos}
          cargando={cargando}
          cart={cart}
          vaciarCarrito={vaciarCarrito}
        />
      } />

      <Route path='/productos' element={
        <VistaProductos
          borrarProducto={handleDeleteFromCart}
          agregarCarrito={handleAddToCart}
          productos={productos}
          cargando={cargando}
          cart={cart}
          vaciarCarrito={vaciarCarrito}
        />
      } />

      <Route path='/productos/:id' element={
        <DetallesProductos
          productos={productos}
          cart={cart}
          borrarProducto={handleDeleteFromCart}
          vaciarCarrito={vaciarCarrito}
          cargando={cargando}
          agregarCarrito={handleAddToCart}
        />
      } />

      <Route path='/acercade' element={
        <AcercaDe
          cart={cart}
          borrarProducto={handleDeleteFromCart}
          vaciarCarrito={vaciarCarrito}
        />
      } />

      <Route path='/login' element={<Login />} />

      <Route path='/admin' element={
        <RutasProtegidas isAuthenticated={isAuthenticated}>
          <Admin />
        </RutasProtegidas>
      } />

      <Route path='/contacto' element={
        <Contacto
          cart={cart}
          borrarProducto={handleDeleteFromCart}
          vaciarCarrito={vaciarCarrito}
        />
      } />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}



export default App