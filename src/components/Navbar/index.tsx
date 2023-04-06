import { Container,Menu,Box,BoxSpan,Position } from "./styled"
import { Link } from "react-router-dom"
import {BsInstagram}from "react-icons/bs"
import {BsFacebook}from "react-icons/bs"
import {BsYoutube}from "react-icons/bs"
import {BsSearch}from "react-icons/bs"
import {BsFillTelephoneFill}from "react-icons/bs"
import {MdOutlineWatchLater}from "react-icons/md"
import {AiOutlineMail}from "react-icons/ai"

export const Navbar=()=>{
    return(
        <Container>
            <header>
            <BoxSpan>
                <Link  className="bIcons" to="/"><MdOutlineWatchLater/><span className="span"> 8:00- 20:00 (todos os dias)</span></Link>
                <Link  className="bIcons" to="/"><BsFillTelephoneFill/><span> +455 91 875990000 /98 76688 8999</span></Link>
                <Link  className="bIcons" to="/"><AiOutlineMail/> <span>limpeza@gmail.com</span></Link>
            </BoxSpan>
             <div className="h3">
                <span>Redes sociais:</span>
                <div className="boxIcons">
                    <Link to="/"><BsInstagram/></Link>
                    <Link to="/"><BsFacebook/></Link>
                    <Link to="/"><BsYoutube/></Link>
                </div>
             </div>
            </header>

            <Box>
                
                <Position>
                    <Link to="/">Logo</Link>
                    <Menu>
                        <Link to="/About">Quem somos</Link>
                        <Link to="/">Serviços</Link>
                        <Link to="/Portifolio">Portifolio</Link>
                        <Link to="/Clients">Clientes</Link>
                        <Link to="/Legislation">Legislação</Link>
                        <Link to="/budget">Orçamento</Link>
                    </Menu>
                    <Link to='/'><BsSearch/></Link>
                </Position>
            </Box>
        </Container>
    )
}