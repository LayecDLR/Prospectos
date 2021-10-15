import React, {useState} from 'react'
import {useDropzone} from "react-dropzone";


const Upload = () => {

    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({ 
        accept: "image/*",
        onDrop : (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview : URL. createObjectURL(upFile)
                }))
            )
        }
    });
    return (
        // <div className="col-span-2">
        //     <label>Nombre</label>
        //     <input type="text" className="ml-1 mr-1 focus:ring-indigo-500 py-1 px-3 border focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
        //     <input type="file"></input>
        // </div>
            <div {...getRootProps()} className="divDragDrop">
                <div className=" space-y-1 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                    <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    <div className="col-span-6 block text-sm text-gray-600">
                        <label
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                        <span>Upload a file</span>
                        <input {...getRootProps()} id="file-upload" name="file-upload" type="file" className="sr-only"  multiple/>
                            {
                                isDragActive ? <p className="pl-1">Suelta el documento aquí</p> : <p className="pl-1">or drag and drop || haz click para seleccionar documento</p>
                            }
                          </label>
                          <div>
                              {files.map((upFile)=>{
                                  return (
                                      <div className="place-items-stretch">
                                          <img src={upFile.preview} style={{width:"100px", height:"100", border:"3px solid #CCC"}} alt="previw"/>
                                      </div>
                                  )
                              })}
                          </div>
                          
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
    )
}

export default Upload
