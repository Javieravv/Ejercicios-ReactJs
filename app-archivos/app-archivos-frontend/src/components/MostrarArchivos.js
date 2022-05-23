/** Mostramos la lista de archivos, la cual traemos del context. */
import { useContext } from "react"
import { ContextApp } from "../context/contextApp"
import { CardArchivo } from "./CardArchivo"

export const MostrarArchivos = () => {
    const { stateApp } = useContext( ContextApp )
    const { listaArchivos } = stateApp
    return (
        <div className="mt-3 ">
            <h1>Listado de  Archivos</h1>
            <article className="container-archivos">
                {
                    listaArchivos.map ( archivo => (
                        <CardArchivo 
                            key={ archivo }  
                            nombreArchivo = { archivo }
                        />
                    ))
                }
            </article>
        </div>
    )
}
