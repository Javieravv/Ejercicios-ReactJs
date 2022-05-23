import MaterialTable from 'material-table';
import { getListaDepartamentos } from "../helpers/funcdata"

export const ListaDepartamentos = () => {
    const listaDeptos = getListaDepartamentos()
    console.log ( listaDeptos )
    return (
        <div className = "container">
            <MaterialTable
                title="Listado de Departamentos"
                columns={
                    [
                        { title: 'No.', field: 'id' },
                        { title: 'Departamento', field: 'departamento' },
                    ]
                }
                data={ listaDeptos }
            />
        </div>
    )
}
