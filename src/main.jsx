import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainRoutes } from './mainRoutes';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
