import React, {useCallback,useState} from 'react'
import {useDropzone} from 'react-dropzone'

const Upload = () => {
    // const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    return (
        <div>
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
                <input {...getInputProps()} />
                        
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
        </div>
    )
}

export default Upload
