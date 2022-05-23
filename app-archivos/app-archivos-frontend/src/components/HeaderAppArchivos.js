import React, { useContext, useEffect } from 'react'
import { ContextApp } from '../context/contextApp'
import { ImprimirRuta } from './ImprimirRuta'
import { fecthArchivos } from './../helpers/fetchArchivos'
import { types } from '../types/types'

export const HeaderAppArchivos = () => {
    const { stateApp, dispatch } = useContext ( ContextApp )
    const { rutaActual } = stateApp

    // Cuando llegamos aquí vamos a al backend y traemos la información
    // del directorio y caracter separador
    useEffect ( () => {
        console.log  ('No hay ruta....')
        const url = "http://localhost:4000/dir"
        fecthArchivos ( url )
            .then ( resp => resp.json() )
            .then ( resp => {
                dispatch ({
                    type: types.stateInicial,
                    payload: {
                        dirDefecto: resp.dirDefecto,
                        separador: resp.separador,
                        archivos: resp.archivos,
                        directorios: resp.directorios
                    }
                })
            } )
    }, [ dispatch ])

    return (
        <>
            <section>
                <h1>Ejercicio con Archivos</h1>
                <div>
                    <h3>
                        Ruta Actual: <span > 
                        { rutaActual.map ( (ruta, ind) => (
                            <ImprimirRuta
                                key={`${ruta}-${ind}`}
                                nombreParteRuta = {ruta} 
                                indice = {ind}
                            />
                        )) } </span>
                    </h3>
                </div>
                <hr />
            </section>
        </>
    )
}
