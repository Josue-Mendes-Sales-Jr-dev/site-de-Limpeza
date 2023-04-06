import { useState } from 'react'
import Global from "../styles/index"
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>  
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Global/>
   </>
  )
}

export default App
