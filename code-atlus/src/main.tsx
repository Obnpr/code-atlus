import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './components/MainPage/MainPage' //Change Start Page here
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
