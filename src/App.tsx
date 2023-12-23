import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const router = useRoutes(routes)

  return (
    <div className='body container bg-gradient-to-br from-darkbg  via-whitebg to-darkbg bg-fixed    flex'>
      <div className='basis-1/4'>
      <Sidebar />
      </div>
      <div className="main basis-3/4">
      {router}
      </div>
    </div>
  )
}

export default App
