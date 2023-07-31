import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChampsProvider } from './ChampsContext.jsx'
import { store} from './store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChampsProvider>
      <Provider store={store}>
      <Router>
        <App />
      </Router>
      </Provider>
    </ChampsProvider>
      
  </React.StrictMode>,
)
