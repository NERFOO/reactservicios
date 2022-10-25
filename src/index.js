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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      {/* <ServicioCustomers />
      <BuscadorCustomer />
      <Coches2 />*/}
      <DepartamentosEmpleados />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
