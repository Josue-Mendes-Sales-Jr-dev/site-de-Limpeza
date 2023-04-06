import { Card } from "./Card"
import {Container, Box} from "./styled"
import { Link } from "react-router-dom"


export const Section03=()=>{
    return(
        <>
        <Container>
           <header className="header">
              <h2>
                Os Services
              </h2>
            </header>
            <Box>
              <Card/>
              <Card/>
              <Card/>
            </Box>
         </Container>
        </>
    )
}