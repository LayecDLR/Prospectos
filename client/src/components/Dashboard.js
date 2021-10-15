import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';


const Dashboard = () => (
    
        <nav>
            <div className="sidebar">
            <ul>
                <li className="mb-8">
                    <Link to="/" exact className="transition duration-500 ease-in-out text-dark rounded py-2 w-100 hover:bg-red-700" activeClassName="active">Inicio</Link>
                </li>
                <li className="mb-8">
                    <Link to="/create" className="text-dark rounded w-100">Nuevo Prospecto</Link>
                </li>
                {/* <li className="mb-8">
                    <Link to="/Taller" className="text-dark rounded w-100">Taller</Link>                       
                </li>
                <li className="mb-8">
                    <Link to="/Empleados" className="text-dark rounded w-100">Empleados</Link>                                           
                </li>
                <li className="mb-8">
                    <Link to="/Almacen" className="text-dark rounded w-100">Almacen</Link>                       
                </li> */}
            </ul>

            </div>    
        </nav>
          
);

export default withRouter(Dashboard);