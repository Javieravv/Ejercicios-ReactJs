/**Componente para buscar municipios */

import { useState } from "react"
import { getSearchCiudades } from "../helpers/funcdata"


const ImprimeMunicipios = ({municipios }) => {
    return (
        <div className='containermunicipio animate__animated animate__bounce animate__fadeInDown '>
            {municipios.length !== 0 
                ? 
                <div className="listado-municipios">
                    {municipios.map ( (municipio, ind) => {
                        return <p 
                            className='itemmunicipio'
                            key = {`${municipio}${ind}`}
                            >
                                {municipio}
                            </p>
                    } )}
                </div>
                : <h2>No se encontraron municipios</h2>
            }
        </div>
    )
}



export const BuscarMunicipios = () => {
    const [valuesSearchMunicipio, setvaluesSearchMunicipio] = useState({ searchMunicipio: '', searchCiudades: [] })
    // const  { searchMunicipio } = valuesSearchMunicipio
    

    const handleChangeSearchMunicipio = (e) => {
        setvaluesSearchMunicipio ( {
            ...valuesSearchMunicipio,
            [e.target.name] : e.target.value,
            searchCiudades: getSearchCiudades ( e.target.value )
        })
    }

    const handleSubmitSearchMunicipios = (e) => {
        e.preventDefault()
        // setvaluesSearchMunicipio ( {
        //     ...valuesSearchMunicipio,
        //     searchCiudades: getSearchCiudades ( searchMunicipio )
        // })
        // console.log ( valuesSearchMunicipio )
    }

    return (
        <div className='container'>
            <h2>Buscar Municipios</h2>
            <section>
                <form
                    onSubmit = { handleSubmitSearchMunicipios }
                >
                    <fieldset>
                        <legend>Buscar un municipio</legend>
                        <input 
                            className="searchMunicipio"
                            type="text"
                            name="searchMunicipio"
                            onChange= { handleChangeSearchMunicipio }
                        />
                    </fieldset>
                </form>
            </section>
            <section>
                <ImprimeMunicipios 
                    letra={valuesSearchMunicipio.searchMunicipio} 
                    municipios={valuesSearchMunicipio.searchCiudades} 
                />
            </section>
            
        </div>
    )
}
