import { NavLink, useLocation, Outlet, useSearchParams } from 'react-router-dom'
import { getFacturas } from '../data'

// Creamos este componente para evitar que cuando esté filtrado el listado
// se pierda el filctro al hacer click
const QueryNavLink = ({to, ...props}) => {
    let location = useLocation()
    console.log('Location: ', location)
    return (
        <NavLink to={to + location.search} {...props}/>
    )
}

const Facturas = () => {
    let facturas = getFacturas()
    let [searchParams,setSearchParams] = useSearchParams()
    return (
        <div style={{ display: "flex"}}>
        <nav
            style={{ 
                borderRight: "solid 1px", 
                padding: "1rem" 
            }} 
        >
            <h2>Facturas</h2>
            <input 
                value={searchParams.get("filter") || ""} 
                onChange={event => { 
                    let filter = event.target.value; 
                    if (filter) { 
                    setSearchParams({ filter }); 
                    } else { 
                    setSearchParams({}); 
                    } 
                }} 
            />
            {facturas 
                .filter(factura => { 
                    let filter = searchParams.get("filter"); 
                    if (!filter) return true; 
                    let name = factura.name.toLowerCase(); 
                    return name.startsWith(filter.toLowerCase()); 
            })
            .map (factura => (
                    <QueryNavLink
                        to={`/facturas/${factura.number}`} 
                        style={({ isActive }) => { 
                        return { 
                            display: "block", 
                            margin: "1rem 0", 
                            fontWeight: "400",
                            color: isActive ? "red" : "" 
                        }; 
                        }} 
                        key={factura.number} 
                    >
                        {factura.name}
                    </QueryNavLink>
                ))}
                <NavLink to="/" style={ {color: "#456adb", fontWeight: "bold", fontSize: 25} }>Regresar al Inicio</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Facturas