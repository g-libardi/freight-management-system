import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import DefaultLayout from './layouts/default'
import { Button } from './components/ui/button'
import Dashboard from './pages/dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  </StrictMode>,
)
