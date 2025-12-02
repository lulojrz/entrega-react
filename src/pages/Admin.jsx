import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/admin/FormularioProducto";
import FormularioEdicion from "../components/admin/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {

    const { setIsAuth } = useContext(CartContext)

    const {
        productos,
        loading,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        setSeleccionado,
        agregarProducto,
        actulizarProducto,
        eliminarProducto, 
    } = useContext(AdminContext)

    const navigate = useNavigate()

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton btn btn-danger" onClick={() => {
                                    setIsAuth(false);
                                    navigate('/');
                                    localStorage.removeItem('isAuth');
                                }}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    <ul className="list" style={{"display":"flex","flexDirection":"row","justifyContent":"space-evenly","flexWrap":"wrap","gap":"20px"}}>
                        {productos.map((product) => (
                            <li key={product.Id} className="card" style={{"width":"200px"}}>
                                <img
                                    src={product.img1}
                                    alt={product.Nombre}
                                    className="listItemImage"
                                />
                                <span>#{product.Id}</span>
                                <span>{product.Nombre}</span>
                                <span>${product.Precio}</span>
                                <div>
                                    <button className="editButton btn btn-warning" onClick={() => {
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                    }}>Editar</button>

                                    <button className="deleteButton btn btn-danger" onClick={() => eliminarProducto(product.Id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button className = "btn btn-primary" onClick={() => setOpen(!open)}>Agregar producto nuevo</button>
            {open && (<FormularioProducto onAgregar={agregarProducto} />)}
            {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actulizarProducto} />)}
        </div>
    );
};

export default Admin;
