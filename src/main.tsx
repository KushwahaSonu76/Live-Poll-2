import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Buffer } from 'buffer'
import App from './App.tsx'

// Polyfill Buffer for stellar-sdk
if (typeof window !== 'undefined') {
  (window as any).Buffer = (window as any).Buffer || Buffer
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
