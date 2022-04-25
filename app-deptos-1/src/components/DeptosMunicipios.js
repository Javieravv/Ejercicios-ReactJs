// Componente que muestra departamenots y municipios
import { useState } from 'react'
import { getDepartamentos, getListaCiudades } from '../helpers/funcdata'

const departamentos = getDepartamentos()

// Creamos un componente para los select.
const SelectComponent = ({label, name, classname, onchange, children}) => { 
  return (
    <div className="selectcontainer">
      <label>{label}</label>
      <select
          name={name}
          className={classname}
          onChange={onchange}
          >
            {children}
      </select>    
    </div>
  )
}


const DeptosMunicipios = () => {
    const [value, setValue] = useState ({selectDepartamentos: '', selectCiudades: ''})
    const idDepartamento = value.selectDepartamentos;
    const ciudades = getListaCiudades(parseInt(idDepartamento))
        
    const handleChange = (e) => {
        setValue ({
        ...value,
        [e.target.name]: e.target.value
        })
        return value
    }
    return (
        <div className="container">
          <section>
              <h1 className="title">Departamentos y Municipios</h1>
              <p className='paragraph'>
                El objetivo de esta aplicación es mostrar los departamentos y luego visualizar sus municipios.
              </p>
          </section>
          <section className="containerdepartamentos">
              <SelectComponent
                  name='selectDepartamentos'
                  classname='select'
                  onchange={handleChange}
                  label="Departamentos"
                  >
                  <option value="">Seleccione un departamento</option>
                  {departamentos.map( opcion => {
                    // console.log(`Key = ${opcion.departamento}-${opcion.id}`)
                    return <option 
                    key={`${opcion.departamento}-${opcion.id}`}
                    value={opcion.id}
                    >
                    {opcion.departamento}
                    </option>
                  })}
              </SelectComponent>
              
              
                <SelectComponent
                    name='selectCiudades'
                    classname='select'
                    onchange={handleChange}
                    label="Ciudades"
                >
                    {ciudades.map( (opcion, index) => {
                        return <option 
                        key={`${opcion}-${index}`}
                        value={index}
                        >
                        {opcion}
                        </option>
                    })}
                </SelectComponent>
                  
            </section>
        </div>
    )
}

export default DeptosMunicipios