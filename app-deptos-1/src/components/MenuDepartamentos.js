// Con este archivo creamos un componente de menú.
import {Outlet, Link} from 'react-router-dom'

const MenuDepartamentos = () => {
    return (
        <nav className="menudepartamento">
            <ul className='menuitems'>
                <li className='itemmenu'>
                    <Link to="/departamentociudad">Departamento / Ciudad</Link>
                </li>
                <li className='itemmenu'>
                    <Link to="/listadoalfabetico">Listado alfabético</Link>
                </li>
                <li className='itemmenu'>
                    <Link to="/totalmunicipios">Total Municipios</Link>
                </li>
                <li className='itemmenu'>
                    <Link to="/listadepartamentos">Lista Departamentos</Link>
                </li>
                <li className='itemmenu'>
                    <Link to="/listamunicipios">Lista Municipios</Link>
                </li>
                <li className='itemmenu'>
                    <Link to="/buscarmunicipios">Buscar</Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    )
}

export default MenuDepartamentos