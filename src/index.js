import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers';
import Global from './components/Global';
import BuscadorCustomer from './components/BuscadorCustomer';
import Coches from './components/Coches';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import Coches2 from './components/Coches2';
import MaestroDepartamentos from './components/MaestroDetalle/MaestroDepartamentos';
import TablaMultiplicar from './components/RutasParametros/TablaMultiplicar';
import PageNotFound from './components/RutasParametros/PageNotFound';
import MenuRutas from './components/RutasParametros/MenuRutas';
import Router from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <div className="App">
      {/* <ServicioCustomers />
      <BuscadorCustomer />
      <Coches2 />
      <DepartamentosEmpleados />
      <MaestroDepartamentos />
      <PageNotFound />
      <TablaMultiplicar numero="5"/>
      <TablaMultiplicar numero="11"/>*/}
      <MenuRutas />
      <Router/>
    </div>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
