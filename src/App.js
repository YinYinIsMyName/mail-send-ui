import React from 'react';
import logo from './logo.svg';
import './App.css';
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import store from './store'
import {Provider} from 'react-redux'
import AppRoute from './routes/components/AppRoute'
const App = () => {
     return (
      <Provider store={store}>
       <AppRoute/>
      </Provider>
     )
}

export default App;
