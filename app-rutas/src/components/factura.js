// Mostramos la información de la factura
import { useParams, useNavigate } from 'react-router-dom'
import { getFactura, deleteFactura } from '../data'

const Factura = () => {
    let navigate = useNavigate()
    let params = useParams()
    let factura = getFactura(parseInt(params.facturaId, 10))
    return (
        <div>
            <h2>Factura {params.facturaId}</h2>
            <main style={{ padding: "0.5rem" }}> 
            <h3>Total Due: {factura.amount}</h3> 
            <p> 
            {factura.name}: {factura.number} 
            </p> 
            <h3>Due Date: {factura.due}</h3> 
            <button
                onClick={() => {
                    deleteFactura(factura.number)
                    navigate("/facturas")
                }}
            >
            Borrar Factura
            </button>
            </main> 
        </div>
    )
}

export default Factura