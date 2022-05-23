/**Componente para imprimir una parte de la ruta, para irla armando
 * 
 * Ruta = /home/uno/dos/tres
 * Que se pueda dar click en cada parte de la ruta e ir a ese directorio
*/

import { useContext } from "react"
import { ContextApp } from "../context/contextApp"
import { types } from "../types/types"

export const ImprimirRuta = ( { nombreParteRuta, indice}) => {
    const { dispatch } = useContext ( ContextApp )
    const clickParteRuta = () => {
        dispatch ( {
            type: types.modificaRuta,
            payload: indice
        })
    }
    return (
        <strong
            className="rutaActual" 
            onClick = { clickParteRuta }
        >
           { ( indice !== 0) && ('/') }
           { nombreParteRuta }
        </strong>
    )
}
