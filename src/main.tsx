import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import React from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  </React.StrictMode>

)
