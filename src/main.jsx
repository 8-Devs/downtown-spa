import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// BASE_URL comes from vite.config.js (`base: '/downtown-spa/'`). In dev it's '/'.
// React Router strips this prefix so route paths stay clean: "/services", "/about", etc.
// Trailing slash must be removed for BrowserRouter's basename to work correctly.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
