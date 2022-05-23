/**Reducer para manejar la aplicación */
import { types } from "../types/types"

export const appReducer = ( state = {}, action ) => {
    switch (action.type) {
        case types.cambioRuta:
            return {
                ...state,
                rutaActual: [...state.rutaActual, action.payload]
            }
        case types.modificaRuta:
            return {
                ...state, 
                rutaActual: state.rutaActual.slice(0, action.payload+1)
            }
        case types.stateInicial:
            return {
                ...state,
                caracterSeparador: action.payload.separador,
                rutaActual: [ ...action.payload.dirDefecto
                                .split('/')
                                .slice(1) ], 
                listaArchivos: [...action.payload.archivos],
                listaDirectorios: [ ...action.payload.directorios ]
            }
        case types.stateActualizar:
            return {
                ...state,
                listaArchivos: [...action.payload.archivos ],
                listaDirectorios: [ ...action.payload.directorios ]
            }
        default:
            return state
    }
}
