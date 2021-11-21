import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App';
import Facturas from './components/facturas'
import Gastos from './components/gastos'
import Factura from './components/factura'
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root")

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/facturas" element={<Facturas />}>
              <Route 
                  index 
                  element={ 
                  <main style={{ padding: "1rem" }}> 
                  <p>Seleccione una Factura</p> 
                  </main> 
                  } 
              /> 
              <Route path=":facturaId" element={<Factura />}/>
          </Route>
          <Route 
            path="*"
            element={
              <main style={{ padding: "1rem" }}> 
              <h3>No hay nada aquí...!</h3> 
              </main> 
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
