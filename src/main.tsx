import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/defaults.css'
import './styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>

<App />
</BrowserRouter>
)
