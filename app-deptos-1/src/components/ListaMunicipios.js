import MaterialTable from 'material-table';
import { getListaCompletaCiudades } from '../helpers/funcdata';

export const ListaMunicipios = () => {
    const listaMunicipios = getListaCompletaCiudades()
    console.log ( listaMunicipios )
    return (
        <div className="container">
            <MaterialTable
                title="Listado de Municipios"
                columns={
                    [
                        { title: 'No.', field: 'id' },
                        { title: 'Nombre Municipio', field: 'nombre' },
                    ]
                }
                data={ listaMunicipios }
                options={{
                    pageSizeOptions: [5, 25, 50, 100]
                }}
            />
        </div>
    )
}


