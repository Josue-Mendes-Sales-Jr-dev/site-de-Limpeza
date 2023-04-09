import {Container,Box, BoxFooter} from "./styled"
import {BsLinkedin} from "react-icons/bs"
import {BsInstagram}from "react-icons/bs"
import {BsFacebook}from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsFillTelephoneFill} from "react-icons/bs"
import {TbHandClick} from "react-icons/tb"
import {Link} from "react-router-dom"

export const Footer=()=>{
    return(
       <Container>
        <Box>
          <div className="box">
              <div className="part1">
                  <h4>Contactos</h4>
                  <p>
                    <Link className="L" to="/"><BsFillTelephoneFill className="iconL"/> 20 3344 3332</Link>
                    <Link className="L" to="/"><BsFillTelephoneFill className="iconL"/> 32 3332 12 33</Link>
                    <Link className="L" to="/"><TbHandClick className="iconL"/>geral@gmail.com</Link>
                   
                 </p>
              </div>
              <div className="part1">
              <h4>Serviços</h4>
              <p>
                Lorem ipsum dolor sit
                 amet consectetur
                  adipisicing elit.     
                  adipisicing elit.     
                  adipisicing elit.     
              </p>
              </div>
              <div className="part1">
              <h4 >Redes Sociais</h4>
              <div className="icons">
                  <BsLinkedin className="icon"/>
                  <BsInstagram className="icon"/>
                  <BsFacebook className="icon"/>
                  <BsYoutube className="icon"/>
              </div>
              </div>
             
          </div>
        </Box>
        <BoxFooter>
           <p>Limpeza de chaminés &copy; 2023, todos os direitos</p>
           <p>Reservados, Design by:JM Tech</p>
        </BoxFooter>
       </Container>
    )
}