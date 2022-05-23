/**Tarjeta para mostrar el archivo */
import moment from 'moment'

export const CardArchivo = ( { nombreArchivo: Archivo}  ) => {
    console.log ('DATOS DEL ARCHIVO ', Archivo)
    moment.locale()
    return (
        <div className="card mt-2 animate__animated animate__fadeIn" style={{width: "21rem"}}  >
            <div className="card-body">
                <h4 className="card-title"> { Archivo.name }  </h4>
                <p className="card-text mb-1"><span>Extensión: </span>{ Archivo.extension }</p>
                <p className="card-text mb-1"><span>Tamaño: </span>{ Archivo.size }</p>
                <p className="card-text mb-1"><span>Fecha Creación: </span> {moment(Archivo.fechaCreacion).format("MMM D YYYY")}  </p>
                <p className="card-text mb-1"><span>Fecha Modificación: </span> { moment(Archivo.fechaModificacion).format ("MMM D YYYY")}  </p>
            </div>
        </div>
    )
}
