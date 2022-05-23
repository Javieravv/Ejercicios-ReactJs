import React, { useContext, useEffect, useState } from 'react'
import { ContextApp } from '../context/contextApp'
import { fetchArchivosNuevoDirectorio } from '../helpers/fetchArchivos'
import { types } from '../types/types'
import { MostrarArchivos } from './MostrarArchivos'
import { MostrarDirectorios } from './MostrarDirectorios'
import { Navbar } from './Navbar'

export const ListaArchivos = () => {
    // Del contexto obtendremos la lista de archivos, directorios y ruta actual
    // opcionSeleccionada = true: mostramos archivos; false mostramos directorios
    const [ opcionSeleccionada, setopcionSeleccionada ] = useState(true)
    const { stateApp, dispatch } = useContext( ContextApp )
    const { rutaActual } = stateApp

    const handleClickOpcion = (e) => {
        if (e.target.name === 'optArchivos' ) {
            setopcionSeleccionada ( true )
        } else {
            setopcionSeleccionada ( false )
        } 
    }

    useEffect ( ()=> {
        const url = "http://localhost:4000/dir/archdir"
        fetchArchivosNuevoDirectorio ( url, rutaActual)
            .then ( resp => resp.json() )
            .then ( resp => {
                // actualizamos el estado de la aplicación|
                dispatch ({
                    type: types.stateActualizar,
                    payload: {
                        archivos: resp.archivos,
                        directorios: resp.directorios
                    }
                })
            })
    }, [ rutaActual, dispatch ])

    return (
        <>
            <Navbar 
                optClick = { handleClickOpcion }
            />
            <section>
                { opcionSeleccionada
                    ? <MostrarArchivos /> 
                    : <MostrarDirectorios />
                }
            </section>
        </>
    )
}
