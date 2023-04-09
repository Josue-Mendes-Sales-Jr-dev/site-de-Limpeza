import { Card } from "./Card"
import {Container, Box} from "./styled"
import { useCallback} from "react"
import {BsFillArrowUpCircleFill} from "react-icons/bs"



export const Section03=()=>{
  const handleUp=useCallback(()=>{
    if(scrollY>200){
      scrollTo(0,0)
    }
  },[])
    return(
        <>
        <Container>
           <header className="header">
              <h2>
                Os Services
              </h2>
            </header>
            <button className="btn" onClick={handleUp}><BsFillArrowUpCircleFill className="up"/></button>
            <Box>
              <Card/>
              <Card/>
              <Card/>
            </Box>
         </Container>
        </>
    )
}