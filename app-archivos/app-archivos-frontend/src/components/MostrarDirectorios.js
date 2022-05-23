import React, { useContext } from 'react'
import { ContextApp } from '../context/contextApp'
import { CardDirectorio } from './CardDirectorio'

export const MostrarDirectorios = () => {
    const { stateApp } = useContext( ContextApp )
    const { listaDirectorios } = stateApp


    return (
        <div div className="mt-3">
            <h1>Listado de  Directorios</h1>
            <article className="container-archivos">
                {
                    listaDirectorios.map ( directorio => (
                    <CardDirectorio 
                        key = {directorio}
                        nombreDirectorio = { directorio }
                    />
                    ))
                }
            </article>
        </div>
    )
}