import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigator from './components/nav';
import Cards from './components/infocards';
import { BrowserRouter } from 'react-router-dom';
import data from './components/cardata';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <BrowserRouter>
  //   <div>
  //     <Navigator />
  //     <Cards data={coin().coinsData}/>
  //   </div>
  // </BrowserRouter>
    <App/>
  
);

reportWebVitals();
