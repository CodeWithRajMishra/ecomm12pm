import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import './assets/css/style3.css'
// import './assets/css/style2.css'
import {Provider} from "react-redux";
import store from './Store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </StrictMode>,
)
