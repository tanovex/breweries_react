import * as React from "react";
import * as ReactDOM from "react-dom";
import { getBreweryListByCity } from './api/openBreweryDBapi';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
//import openBreweryDBapi from './api/openBreweryDBapi';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 getBreweryListByCity("Harrisburg").then((res) => console.log(res));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

