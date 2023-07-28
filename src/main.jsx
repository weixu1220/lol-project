import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChampsProvider } from './ChampsContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChampsProvider>
      <Router>
        <App />
      </Router>
    </ChampsProvider>
      
  </React.StrictMode>,
)
