import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import {Link, withRouter} from 'react-router-dom';



const ProspectoList = () => {
    
    const baseUrl="http://localhost:8000/api/prospectos"

    const [ prospectos, setProspectos] = useState([]);

    const getProspectos  =  () =>{
        
        axios.get(baseUrl)
        .then(response => {
            setProspectos(response.data);
            console.log(response.data);
         })
        .catch(err => alert('Error al obtener los prospectos'));

    }   
    
    useEffect(() => {
        getProspectos();
    },[]);

    return (
        <div className="mt-10 sm:mt-0">
            <Nav />       
        <div className="m-12 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="tableHeader">Nombre</th>
                        <th className="tableHeader">Primer Apellido</th>
                        <th className="tableHeader">Segundo Apellido</th>
                        <th className="tableHeader">Estatus</th>
                        <th className="tableHeader">Acciones</th>
                    </tr> 
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {prospectos.map((prospecto, i) => (
                        <tr >
                            <td className="tableRow">{prospecto.nameProspecto}</td>
                            <td className="tableRow">{prospecto.firstSurname}</td>
                            <td className="tableRow">{prospecto.lastSurname}</td>
                            <td><button className={prospecto.status==='Enviado' ? "enviado" : prospecto.status==='Autorizado' ? "autorizado" : prospecto.status==='Rechazado' ? "rechazado": "px-6 py-4  bg-whtie-500 whitespace-nowrap" }>{prospecto.status}</button></td>
                            <td className="tableRow">
                            <Link to={`/prospecto/${prospecto._id}`}>
                                <button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Visualizar</button>
                            </Link>
                            </td>
        
                        </tr>
                    ))}
                </tbody>
            </table>        
        </div>
    </div>
    )
}

export default ProspectoList
