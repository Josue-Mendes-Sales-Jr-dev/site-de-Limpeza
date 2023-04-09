import Global from "../styles/index"
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Container } from "./styled_app"
import { useCallback} from "react"
import {BsFillArrowUpCircleFill} from "react-icons/bs"

function App() {
 
  const handleUp=useCallback(()=>{
    if(scrollY>200){
      scrollTo(0,0)
    }
  },[])

  return (
   <Container>
        <Navbar/>
        <Outlet/>
        <button onClick={handleUp}><BsFillArrowUpCircleFill className="up"/></button>
        <Footer/>
        <Global/>
   </Container>
  )
}
export default App
