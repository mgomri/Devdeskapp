import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';
import './css/all.min.css';
import App from './App';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


