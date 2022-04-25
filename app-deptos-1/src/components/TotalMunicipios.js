/**Componente para mostrar el total de municpios por departamento. */

import { getTotCiudadesDepartamento } from "../helpers/funcdata"
import { NumCiudadesDepartamento } from "./NumCiudadesDepartamento"

export const TotalMunicipios = () => {
    // Usamos una función para traer el total de municipios por departamento.
    const totCiudadesDepartamento = getTotCiudadesDepartamento()
    return (
        <div className="container">
            <h1>Total de Municipios por Departamento</h1>
            <div className="containerTotalMunicipios">
                {
                    totCiudadesDepartamento.map ( departamento => {
                        return (
                            <NumCiudadesDepartamento 
                                key = {`${departamento.id}-${departamento.nombre}`}
                                departamento = { departamento }
                            />
                        )
                    } )
                }
            </div>
            
        </div>
    )
}
