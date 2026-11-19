import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'
import { useThemeStore } from './store/useThemeStore'
import { useAuthStore } from './store/useAuthStore'
import { useGalleryStore } from './store/useGalleryStore'

useThemeStore.getState().initTheme()
useAuthStore.getState().initialize()
useGalleryStore.getState().subscribe()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
