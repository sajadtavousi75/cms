import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const router = useRoutes(routes)

  return (
    <div className='body   bg-gradient-to-br from-darkbg  via-whitebg to-darkbg bg-fixed'>
      <div className="container flex">
      <div className='basis-1/5 '>
      <Sidebar />
      </div>
      <div className="main basis-4/5">
      {router}
      </div>
      </div>
    </div>
  )
}

export default App
