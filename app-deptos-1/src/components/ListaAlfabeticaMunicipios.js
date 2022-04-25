// Mostramos la lista alfabética de los municipios

import { useState} from 'react'
import { getListaCiudadesLetra, getListaLetras } from '../helpers/funcdata'

const Boton = ( {clase, valor,  clave, children, click}) => {
    return (
        <button
            className={clase}
            value={valor}
            onClick={click}
        >
            {children}
        </button>
    )
}

const ImprimeMunicipios = ({letra, municipios }) => {
    return (
        <div className='containermunicipio'>
            {letra !== "" 
                ? <div>
                    <h2>Municipios por la letra {letra}</h2>
                    {municipios.map ( (municipio, ind) => {
                        return <p 
                            className='itemmunicipio'
                            key = {`${municipio}${ind}`}
                            >
                                {municipio}
                            </p>
                    } )}
                </div>
                : <h2>No hay municipios</h2>
            }
        </div>
    )
}


const ListaAlfabeticaMunicipios = () => {
    const [values, setValues] = useState({letra: '', ciudades: []})
    const listaLetras = getListaLetras() 
    const listCiudades = (e) => {
        // values.letra = e.target.value
        let varLetra = e.target.value
        setValues({
            ...values,
            letra : e.target.value,
            ciudades: getListaCiudadesLetra(varLetra),
        })
    }

    return (
        <div className="container">
            <h1 className="title">Listado por orden alfabético</h1>
            <section className="botonera">
                {listaLetras.map ((letra, index) => {
                    return <Boton
                        clase='botonletra'
                        valor={letra}
                        key={`${letra}-${index}`}
                        click={listCiudades}
                    >  
                        {letra}
                    </Boton>
                })}
            </section>
            <section>
                <ImprimeMunicipios 
                    letra={values.letra} 
                    municipios={values.ciudades} 
                />
            </section>
        </div>
    )
}

export default ListaAlfabeticaMunicipios