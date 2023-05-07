import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
// import antd 
import "@/assets/styles/global.scss"
import App from './App'
// import BaseRouter from "@/router/index"
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
