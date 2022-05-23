/**Componente para mostrar el departamento con el número de ciudades. */

export const NumCiudadesDepartamento = ( {departamento})  => {
    // console.table (departamento)
    return (
        <div className = 'containertotciudades animate__animated animate__bounce animate__backInDown animate__slow'>
            <p> 
                {departamento.totCiudades}
            </p>
            <h3>
                {departamento.nombre}
            </h3>
        </div>
    )
}
