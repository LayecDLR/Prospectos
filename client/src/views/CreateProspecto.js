import React, {useState} from 'react';
import {useDropzone} from "react-dropzone";
import '../App.css';
import axios from 'axios';
import Nav from '../components/Nav';



const CreateProspecto = (props) => {

    const [files, setFiles] = useState();
    const [name, setName] = useState();
    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone();

    const filesx = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    
    const [state, setState] = useState({
        nameProspecto:'',
        firstSurname:'',
        lastsurname:'',
        streetAddress:'',
        numbAddress:'',
        nameAddress:'',
        zipCode:'',
        phone:'',
        rfc:'',
        status: 'Enviado'
    });
    const [content, setContent] = useState('');

    const handleContent = (event)=> {
        console.log(event);
        setContent(event);
    }

    const {nameProspecto, firstSurname, lastSurname, streetAddress, numbAddress,nameAddress, zipCode, phone ,rfc, status } = state;

    const handleChange = name => event =>{

          setState({...state,[name]: event.target.value})
    };
    const handleFiles = name => event =>{
    
          setState({...state,[name]: event.target.files[0].name})
    };

      const handleSubmit = (event) => {

        debugger;
        const dataForm = new FormData();
        // data.append('nameFile', nameFile);
        dataForm.append('file', files);

        // event.preventDefault();
        // console.log(event.get);
        // const {files} = dataForm;
        axios
          .post(`${process.env.REACT_APP_API}/prospecto`,  {dataForm, nameProspecto, firstSurname, lastSurname, streetAddress,numbAddress, nameAddress, zipCode, phone, rfc, status},{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(response => {

          setState({...state, nameProspecto:'', firstSurname:'', lastSurname:'', streetAddress:'', numbAddress:'', nameAddress:'', zipCode:'',phone:'', rfc:''});
          setContent('');

          alert(`El prospecto ${response.data.nameProspecto} ${response.data.firstSurname} ${response.data.lastSurname} ha sido guardado con éxito`);
        })
        .catch(error => {
          console.log(error.response);
          alert(error.response.data.error);
        });
      };

      const salirConfirm = () =>{
        let answer = window.confirm('Al salir ningún dato será guardado, ¿Desea salir?')
        console.log(window)
        if(answer){
            props.history.push('/')
        }
      }
      const masDocumentos = () => {
        const newDocument = React.createElement("UploadDocument", null, "")
      }

    return (
        <div className="pb-5">
          <Nav/>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-6">
              <div className="place-self-center sm:w-auto max-w-screen-lg mt-5 mx-20 md:w-full md:24 md:col-span-2">
                <div className="px-4 sm:px-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Informacion del prospecto</h3>
                  <p className="mt-1 text-sm text-gray-600">Podrá consultar la información de este prospecto en la Lista de prospectos</p>
                </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      
                      <div className="col-span-6 sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <input
                          onChange= {handleChange('nameProspecto')}
                          value={nameProspecto}
                          type="text"
                          className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        </div>

                      <div className="col-span-6 sm:col-span-2">

                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Primer Apellido
                        </label>
                        <input
                          onChange= {handleChange('firstSurname')}
                          value={firstSurname}
                          type="text"
                          className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />

                      </div>

                    <div className="col-span-6 sm:col-span-2">

                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Segundo Apellido
                      </label>
                      <input
                        onChange= {handleChange('lastSurname')}
                        value={lastSurname}
                        type="text" 
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />

                    </div>

                    <div className="col-span-6 sm:col-span-2">

                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Calle
                      </label>
                      <input
                        onChange= {handleChange('streetAddress')}
                        value={streetAddress}
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Número
                      </label>
                      <input
                        onChange= {handleChange('numbAddress')}
                        value={numbAddress}
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div className="col-span-6 sm:col-span-2">

                      <label className="block text-sm font-medium text-gray-700">
                        Colonia
                      </label>
                      <input
                        onChange= {handleChange('nameAddress')}
                        value={nameAddress}                      
                        type="text"
                        className="mt-1 focus:ring-indigo-50 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />

                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Código Postal
                      </label>
                      <input
                        onChange= {handleChange('zipCode')}
                        value={zipCode}                     
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">

                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <input
                        onChange= {handleChange('phone')}
                        value={phone}                      
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />

                    </div>

                    <div className="col-span-2">

                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        RFC
                      </label>
                      <input
                        onChange= {handleChange('rfc')}
                        value={rfc}  
                        type="text"
                        className="mt-1 focus:ring-indigo-500 py-2 px-3 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />  

                    </div>
                    {/* <li
                      onClick= {masDocumentos}
                      className="inline-flex justify-center border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      +
                    </li>
                    
                  // </div> */}
                  </div>
                  
                </div>
                <div {...getRootProps()} className="divDragDrop col-span-2"  multiple>
                <div className=" space-y-1 text-center">

                
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400 block"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true">
                                <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                        </svg>
                </div>
                <input {...getInputProps()} onChange={event =>{
                  const file = event.target.files[0]; setFiles(files)}} />
                        
                    {
                        isDragActive ?
                            <p>Suelta los archivos aquí ...</p> :
                            <p>Arrastra y suelta los archivos aquí, o haz click para  seleccionar los archivos</p>
                    }
                    
            </div>
            <aside>
                <h4>Archivos</h4>
                <ul>{files}</ul>
            </aside>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="mr-1 focus-within:inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                   Guardar
                  </button>
                  <li
                    onClick= {salirConfirm}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                   Salir
                  </li>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    )
}

export default CreateProspecto;
