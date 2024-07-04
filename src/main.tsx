// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios'
import { URL_BACK } from './config/index.ts'

axios.defaults.baseURL = URL_BACK

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
)
