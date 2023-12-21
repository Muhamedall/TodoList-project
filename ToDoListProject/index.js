
/*import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { Provider } from "react-redux";
import store from "./FormRedux/store"; 

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
 <Provider store={store}>
    <App />
</Provider>,
rootElement
);
*/
import ReactDOM from "react-dom/client";
import App from './App';
//import {Provider} from 'react-redux';

//import { configureStore } from "@reduxjs/toolkit";
//import userReducer from './components/StagairesSlice'
const root=ReactDOM.createRoot(document.getElementById("root"));
//const store=configureStore({
//reducer:{stagiaires:userReducer}
//})
root.render(<>
   
    <App/>
  
    </>)
    
