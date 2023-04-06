import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {About} from "./pages/About"
import { Budget } from './pages/Budget'
import { Clients } from './pages/Clients'
import { Portifolio } from './pages/Portifolio'
import { Legislation} from './pages/Legislation'
import { Home } from './pages/home'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Budget' element={<Budget/>}/>
            <Route path='/Clients' element={<Clients/>}/>
            <Route path='/Portifolio' element={<Portifolio/>}/>
            <Route path='/Legislation' element={<Legislation/>}/>
          </Route>
      </Routes>    
     </BrowserRouter>
  </React.StrictMode>,
)
