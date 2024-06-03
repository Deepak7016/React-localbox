import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './Context/ThemeContext.jsx'
import { ToogleContextProvider } from './Context/ToogleContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <ToogleContextProvider>
    <App />
  </ToogleContextProvider>
  </ThemeContextProvider>
)
