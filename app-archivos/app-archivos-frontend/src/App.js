import { useReducer } from "react";
import { FooterAppArchivos } from "./components/FooterAppArchivos";
import { HeaderAppArchivos } from "./components/HeaderAppArchivos";
import { ListaArchivos } from "./components/ListaArchivos";
import { ContextApp } from "./context/contextApp";
import { fecthArchivos } from "./helpers/fetchArchivos";
import { appReducer } from "./reducer/appReducer";

/**Creamos el context de la aplicación y también creamos el estado inicial 
 * Lo que inicialmente se muestre será el directorio configurado como de inicio
 * para la aplicación
*/

const init = () => {
     // Traemos los archivos y directorios existentes en el directorio de Inicio, desdel
     // la api. Será el directorio por defecto y lo desesctructuramos.
     
     return {
          rutaActual: [],
          caracterSeparador: '',
          listaArchivos: [],
          listaDirectorios: [],
          archivoActual: null
     }
}


function App() {
     // EStado inicial
     const [stateApp, dispatch] = useReducer (appReducer, {}, init)

     return (
               <ContextApp.Provider value={{ 
                    stateApp,
                    dispatch
               }}>
                    <HeaderAppArchivos />
                    <ListaArchivos />
                    <hr />
                    <FooterAppArchivos />
               </ContextApp.Provider>
          
     );
}

export default App;
