import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ClientProvider } from './context/ClientContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ClientProvider>
      <App /> {/* Wrap the app with ClientProvider to make global state available */}
    </ClientProvider>

  </StrictMode>,
)
