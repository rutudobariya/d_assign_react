import React from 'react';
import ReactDOM from 'react-dom/client';
import "./componants/Style.css";
import reportWebVitals from './reportWebVitals';
import Functionstate from './componants/Functionstate';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById('functionstate'));
root.render(
  <React.StrictMode>
    <Functionstate />
  </React.StrictMode>
);
reportWebVitals();
