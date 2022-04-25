// Aquí creamos los reducers
import { getDepartamentos, getListaCiudades } from '../data'

const listaDepartamentos = getDepartamentos()

const initialState = {
    listaDepartamentos: listaDepartamentos,
    listaCiudades: [],
    idDepartamentoElegido: 0,
    idCiudadElegida: 0,
}


export const reducerDepartamento = (state = initialState, action) => {
    switch (action.type) {
        case 'accion 1': {
            const ciudades = getListaCiudades(parseInt(action.payload.idDepartamento))
            return {
                ...state,
                idCiudadElegida: parseInt(action.payload.idDepartamento) === state.idDepartamentoElegido 
                    ? parseInt(action.payload.idCiudad)
                    : 0,
                idDepartamentoElegido: parseInt(action.payload.idDepartamento),
                listaCiudades: ciudades,
            }
        }
        default: {
            return state
        }
    }
}