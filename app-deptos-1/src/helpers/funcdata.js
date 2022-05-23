/**Funciones empleadas para la data */

import { departamentos } from "../data"


// Devolvemos la constante que tiene almacenados los departamentos y sus municipios
export const getDepartamentos  = () => {
    return departamentos
}

// Devolvemos la lista de Departamentos.
export const getListaDepartamentos = () => {
    // mapeamos la lista de departamentos.
    const listaDepartamentos = departamentos.map (departamento => {
        return {
            id: departamento.id,
            departamento: departamento.departamento
        }
    })
    .sort ((dep1, dep2) => {return dep1.departamento - dep2.departamento})
    return listaDepartamentos
}

// Devolvemos las ciudades que tiene un departamento
export const getListaCiudades = (idDepartamento) => {
    const listaCiudades = departamentos.filter (departamento => departamento.id === idDepartamento)
                                        .reduce ((acc, depto) => {
                                            return acc = depto.ciudades
                                        }, [])
                                        .sort ( (item1, item2) => {return item2 - item1})
    return listaCiudades
}

// Devolvemos el total  de las ciudades, sin importar departamento
export const getListaCompletaCiudades = () => {
    let  listaCompletaCiudades = departamentos
                            .reduce ((acc, depto) => 
                            {
                                // return acc.concat( depto.ciudades )
                                return acc.concat( depto.ciudades )
                            }, [])
                            
    return listaCompletaCiudades.sort ()
                          .reduce ( (acc, depto, index) => {
                                return acc.concat ({
                                    id: index+1,
                                    nombre: depto
                                })
                           }, [] )
}

// Devolvemos las ciudades que empiezan por una letra determinada
export const getListaCiudadesLetra = (letra) => {
    const listaCiudadesAll = departamentos.map (departamento => {
        return [...departamento.ciudades]
    })
    .reduce ((acc, item) => {
        let listCiudades = []
        item.forEach(it => listCiudades.push(it))
        return acc.concat(listCiudades)
    },[])
    .reduce ((acc, item) => {
        if (item[0] === letra) {
            return acc.concat(item)
        }
        return acc
    },[])
    .sort()

    return listaCiudadesAll
}

// Devolvemos la lista de ciudades que contienen una cadena determinada.
export const getSearchCiudades = ( text ) => {
    text = text.trim ()
    if ( text.trim() === '') {
        return []
    }
    console.log ( 'VAMOS BIEN. LONGITUD = ', text.length)

    const listaCiudadesAll = departamentos.map (departamento => {
        return [...departamento.ciudades]
    })
    .reduce ((acc, item) => {
        let listCiudades = []
        item.forEach(it => listCiudades.push(it))
        return acc.concat(listCiudades)
    },[])
    .reduce ((acc, item) => {
        if (item.toLowerCase().includes( text.toLowerCase() )) {
            return acc.concat(item)
        }
        return acc
    },[])
    .sort()

    return listaCiudadesAll
}


// devolvemos las primeras letras de los municipios
export const getListaLetras = () => {
    const listaLetrasCiudades = departamentos.map (departamento => {
        return [...departamento.ciudades]
    })
    .reduce ((acc, item) => {
        let listCiudades = []
        item.forEach(it => listCiudades.push(it))
        return acc.concat(listCiudades)
    },[])
    .map (ciudad => {
        return ciudad[0]
    })
    .reduce((acc, item) => {
        let a = acc.findIndex(ind => ind === item)
        if (a >= 0) {
            return acc
        }
        return acc.concat(item)
    //    return acc.push(item)
    },[])
    .sort ()
       
    return listaLetrasCiudades
}

// Devolvemos el total de municipios que hay por ciudades.
export const getTotCiudadesDepartamento = () => {
    // mapeamos la lista de departamentos.
    const totalMunicipios = departamentos.map (departamento => {
        return {
            id: departamento.id,
            nombre: departamento.departamento,
            totCiudades: departamento.ciudades.length
        }
    })
    .sort ((dep1, dep2) => {return dep1.departamento - dep2.departamento})
    return totalMunicipios    
}

