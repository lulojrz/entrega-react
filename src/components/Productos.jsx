import React from 'react'
import { Link } from 'react-router-dom'

const Productos = ({producto,agregarCarrito,origen}) => {
  return (
    <div className="card" style={{width:"18rem"}}>
  <img src={producto.img1} className="card-img-top"/>
  <div className="card-body">
    <h3 className="card-title">{producto.Equipo}</h3>
    <h6 className='card-text'>Temporada: {producto.Temporada - 1 } - {producto.Temporada}</h6>
    <h5 className="card-title">Precio: ${producto.precio}</h5>
   </div>

   <div className="card-body">   
     <button className="btn btn-primary" onClick={()=> agregarCarrito(producto)}>Agregar unidad</button>
   </div>
   <Link to = {origen==="Home"? `productos/${producto.id}` : `${producto.id}`  }>Ver mas</Link>
</div>
  )
}

export default Productos
