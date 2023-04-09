import Global from "../styles/index"
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
function App() {

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
