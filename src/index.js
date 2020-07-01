import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// Dépendance qui vont me servir à configurer mon routeur
// Router est un composant au meme titre que app   



import App from './containers/App'
import Home from './containers/Home';
ReactDOM.render(
 
   <App/>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

