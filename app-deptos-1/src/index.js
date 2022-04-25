import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DeptosMunicipios from './components/DeptosMunicipios'
import ListaAlfabeticaMunicipios from './components/ListaAlfabeticaMunicipios'
import Error404 from './components/Error404'
import { TotalMunicipios } from './components/TotalMunicipios';
import { BuscarMunicipios } from './components/BuscarMunicipios';

const rootElement = document.getElementById("root")

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="departamentociudad" element={<DeptosMunicipios />} />
            <Route path="listadoalfabetico" element={<ListaAlfabeticaMunicipios />} />
            <Route path="totalmunicipios" element={<TotalMunicipios />} />
            <Route path="buscarmunicipios" element={<BuscarMunicipios />} />
            <Route 
              path="*"
              element={
                <Error404 />
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
