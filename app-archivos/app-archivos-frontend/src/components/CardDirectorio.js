/**Al dar click a un directorio cambiamos la ruta actual.
 * Se envía la información al backend para traer los Archivos
 * y directorios de ese directorio
 */

import { useContext } from "react"
import { ContextApp } from "../context/contextApp"
import { types } from "../types/types"

export const CardDirectorio = ( {nombreDirectorio} ) => {
    const { dispatch  } = useContext ( ContextApp )
    
    const clickDirectorio = () => {
        // aquí modificamos el valor del directorio actual
        dispatch ({
            type: types.cambioRuta,
            payload: nombreDirectorio
        })
    }

    return (
        <div 
            className="card mt-2 card-directorio animate__animated animate__fadeIn" 
            style={{width: "21rem"}}
            onClick={clickDirectorio}  
        >
            <div className="card-body">
                <h4 
                    className="card-title"
                > { nombreDirectorio }  </h4>
            </div>
        </div>
    )
}
