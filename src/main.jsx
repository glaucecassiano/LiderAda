import React from 'react'
import ReactDOM from 'react-dom/client'
import "./app.css"
import './index.css'


import { createBrowserRouter, RouterProvider} from "react-router-dom";

import { Home } from './pages/home.jsx';
import { QuemSomos } from './pages/quemsomos.jsx';
import { LoginSignup } from './pages/loginsignup.jsx';
import { Cadastro } from './pages/cadastro';
import { Forum } from './pages/forum'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>
  },

  { 
    path: "/quemsomos",
    element: <QuemSomos/>
  },

  {
    path: "/login",
    element: <LoginSignup/>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  },
  {
    path: "/forum",
    element: <Forum/>

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
    </React.StrictMode>,
)
