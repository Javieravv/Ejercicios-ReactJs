import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, useField } from 'formik'
import { useState } from 'react'
import './css/estilos.css'

// // Componente Select 
// const SelectComponent = ({name, opciones, handleChange,accion}) => {
//   return (
//     <select
//       value={name}
//       name={name}
//       onChange={handleChange}
//     >
//       <option value=''>Seleccione Departamento</option>
//       {opciones.map( opcion => {
//         return <option 
//                 key={opcion.id}
//                 value={opcion.id}
//                 onChange={handleChange}
//                 >
//                   {opcion.departamento}
//                 </option>
//       })}
//     </select>
//   )
// }

const Select = ({ label, ...props}) => {
    const [field, meta] = useField(props)
    // console.log('Objeto field', {...field})
    console.log('Propiedades', {...props})
    return (
        <div>
            <label>{label}</label>
            <select {...field} {...props}  />
            {meta.touched && meta.error 
                ? <div>{meta.error}</div>
                : null 
            }
        </div>
    )
}


function App() {
  const [value, setValue] = useState ({selectDepartamentos: '', selectCiudades: ''})

  const handleChange = (e) => {
    console.log('C A M B I A M O S...')
    setValue ({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const departamentos = useSelector(store => store.listaDepartamentos);
  const ciudades = useSelector (store => store.listaCiudades);
  const idDepartamentoEscogido = useSelector (store => store.idDepartamentoElegido)
  const dispatch = useDispatch()

  // const handleChange = (e) => {
  //               console.log (`HeMOS CAMBIADO...${e.target.value}`)
  //               dispatch({type:'accion 1', payload: e.target.value})
  //           }
  
  return (
    <Formik
      initialValues= {{
        selectDepartamentos: '',
        selectCiudades: '',    
      }}
      onSubmit = {(values) => {
                                if (idDepartamentoEscogido !== parseInt(values.selectDepartamentos)) {
                                    values.selectCiudades = 0;
                                }
                                dispatch({type: 'accion 1', 
                                         payload: {
                                            idDepartamento: values.selectDepartamentos, 
                                            idCiudad: values.selectCiudades}
                                          })}
                                        }
      >
        <div className="container">
          <h1 className="title">Departamentos y Municipios</h1>
          <p className='paragraph'>
            El objetivo de esta aplicación es mostrar los departamentos y luego visualizar sus municipios.
          </p>
          <Form>
            <Select
              label="Departamentos"
              name='selectDepartamentos'              
              className='select'
              onChange={handleChange}
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
              </Select>
              {ciudades.length > 0 &&
                <Select
                    label="Ciudades"
                    name='selectCiudades'
                    className='select'
                    onChange={handleChange}
                  >
                    {ciudades.map( (opcion, index) => {
                      // console.log(`Key ciudad = ${opcion}-${index}`)
                      return <option 
                              key={`${opcion}-${index}`}
                              value={index}
                              >
                                {opcion}
                              </option>
                    })}
                </Select>
              }
              <button type='submit' className="botonenviar">Enviar</button>
          </Form>
        </div>
    </Formik>
  );
}

export default App;
