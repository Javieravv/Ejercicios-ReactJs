/**Componente para mostrar el departamento con el número de ciudades. */

export const NumCiudadesDepartamento = ( {departamento})  => {
    // console.table (departamento)
    return (
        <div className = 'containertotciudades'>
            <h2>
                {departamento.nombre}
            </h2>
            <p> 
                {departamento.totCiudades}
            </p>
        </div>
    )
}
