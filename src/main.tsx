import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter >
    <App />
   <Toaster/>
  </BrowserRouter>,
)
