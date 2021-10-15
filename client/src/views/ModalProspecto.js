import React, {useState, useEffect } from 'react';
import axios from 'axios';


const ModalProspecto = props => {
    
    const baseUrl="http://localhost:8000/api/prospecto/"+props.match.params._id


    const [ prospecto, setProspecto] = useState('');
    const [status, setSelected] = useState('');
    const [classNameSelected, setClassNameSelected]= useState('');
    const [observaciones, setContent] = useState('');

    const handleSelected = (event)=> {
        let status = document.getElementById("selectStatus");
        let labelObservaciones = document.getElementById("labelObservaciones");
        let inputObservaciones = document.getElementById("inputObservaciones");
        setSelected(status.value);
        if(status.value === "Enviado"){
            status.className ="enviado";
            labelObservaciones.className ="hidden";
            inputObservaciones.className ="hidden";
            inputObservaciones.value= "";
            setContent('');

        }else if (status.value==="Autorizado"){
            status.className ="autorizado";
            labelObservaciones.className ="hidden";
            inputObservaciones.className ="hidden";
            inputObservaciones.value="";
            setContent('');
            }else{ 
                status.className ="rechazado";
                labelObservaciones.className ="text-sm font-medium text-gray-700";
                inputObservaciones.className ="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";
            }
        // status.setAttribute("className", "enviado")
        // setClassNameSelected(document.getElementById("selectStatus").("enviado");
    }

    const handleContent = (event)=> {
        console.log(event);
        setContent(event.target.value);
      }
    // const {nameProspecto, firstSurname, lastSurname, streetAddress, numbAddress,nameAddress, zipCode, phone ,rfc, status } = prospecto;
    // console.log(props);

    useEffect(() => {

        axios
        .get(`${baseUrl}`)
        .then(response => {
            const {status} =response.data   
             setProspecto(response.data );
             setSelected(status);

        })
        .catch(error => alert('Error al obtener prospecto'));
     },[props.match.params._id]);

     const salirConfirm = () =>{
        let answer = window.confirm('Al salir ningún dato será guardado, ¿Desea salir?')
        console.log(window)
        if(answer){
            props.history.push('/')
        }
      }

      const actualizarStatus = () =>{
        //   console.log()
        axios
            .put(`${baseUrl}`, {status, observaciones})
        .then(response => {
          console.log(response);
          alert(`Estatus de prospecto actualizado a ${status}`);
        })
        .catch(error => {
          console.log(error.response);
          alert(error.response.data.error);
        });
      }
    
    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-6">
              <div className="place-self-center sm:w-auto max-w-screen-lg mt-5 mx-20 md:w-full md:24 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-2">

                                <label className="block text-sm font-medium text-gray-700">
                                    Nombre
                                </label>
                                <input disabled={true}
                        //   onChange= {handleChange('name')}
                          value={prospecto.nameProspecto}
                          type="text"
                          className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        </div>

                      <div className="col-span-6 sm:col-span-2">

                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Primer Apellido
                        </label>
                        <input disabled="true"
                        //   onChange= {handleChange('firstSurname')}
                          value={prospecto.firstSurname}
                          type="text"
                          name="name"
                          className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />

                      </div>

                    <div className="col-span-6 sm:col-span-2">

                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Segundo Apellido
                      </label>
                      <input disabled="true"
                        // onChange= {handleChange('lastSurname')}
                        value={prospecto.lastSurname}
                        type="text" 
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />

                    </div>

                    <div className="col-span-6 sm:col-span-2">

                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Calle
                      </label>
                      <input disabled="true"
                        // onChange= {handleChange('streetAddress')}
                        value={prospecto.streetAddress}
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Número
                      </label>
                      <input disabled="true"
                        // onChange= {handleChange('numbAddress')}
                        value={prospecto.numbAddress}
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div className="col-span-6 sm:col-span-2">

                      <label className="block text-sm font-medium text-gray-700">
                        Colonia
                      </label>
                      <input disabled="true"
                        // onChange= {handleChange('nameAddress')}
                        value={prospecto.nameAddress}                      
                        type="text"
                        className="mt-1 focus:ring-indigo-50 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />

                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Código Postal
                      </label>
                      <input disabled="true"
                        // onChange= {handleChange('zipCode')}
                        value={prospecto.zipCode}                     
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">

                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <input
                        disabled="true"
                        // onChange= {handleChange('phone')}
                        value={prospecto.phone}                      
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />

                    </div>

                    <div className="col-span-2">

                      <label className="block text-sm font-medium text-gray-700">
                        RFC
                      </label>
                      <input disabled="true"
                        // onChange= {handleChange('rfc')}
                        value={prospecto.rfc}  
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />  

                    </div>
                    <div className="col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Estatus
                      </label>
                      <select
                        id="selectStatus"
                        onChange={handleSelected}
                        value={status}
                        className={prospecto.status==='Enviado' ? "enviado" : prospecto.status==='Autorizado' ? "autorizado" : prospecto.status==='Rechazado' ? "rechazado": "px-6 py-4  bg-whtie-500 whitespace-nowrap" }
                      >
                        <option className="bg-white">Enviado</option>
                        <option className="bg-white">Autorizado</option>
                        <option className="bg-white">Rechazado</option>
                      </select>
                    </div>
                    <div className="col-span-4">

                        <label id="labelObservaciones" className={prospecto.status==='Rechazado'? "text-sm font-medium text-gray-700" : "hidden"}>
                            Observaciones
                        </label>
                        <input id="inputObservaciones"
                        value={observaciones}
                        onChange={handleContent}
                        type="text"
                        className={prospecto.status==='Rechazado'? "mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" : "hidden"}
                        />  

                    </div>
                    <div className=" col-span-6 px-4 py-3 text-right sm:px-6">
                        <button
                            onClick= {actualizarStatus}
                            type="submit"
                            className="mr-1 focus-within:inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cambiar Estatus
                        </button>
                        <button
                            onClick= {salirConfirm}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Salir
                        </button>
                        </div>
  
                    </div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default ModalProspecto
