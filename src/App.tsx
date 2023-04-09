import Global from "../styles/index"
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Container } from "./styled_app"

function App() {
 
  

  return (
   <Container>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Global/>
   </Container>
  )
}
export default App
