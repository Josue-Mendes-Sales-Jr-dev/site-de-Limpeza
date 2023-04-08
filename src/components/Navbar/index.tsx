import { Container,Menu,Box,BoxSpan,Position,Hamburguer } from "./styled"
import { Link } from "react-router-dom"
import {BsInstagram}from "react-icons/bs"
import {BsFacebook}from "react-icons/bs"
import {BsYoutube}from "react-icons/bs"
import {BsSearch}from "react-icons/bs"
import {BsFillTelephoneFill}from "react-icons/bs"
import {MdOutlineWatchLater}from "react-icons/md"
import {GiHamburgerMenu}from "react-icons/gi"
import {GrClose}from "react-icons/gr"
import {AiOutlineMail}from "react-icons/ai"
import { useCallback } from "react"

export const Navbar=()=>{
    const handleOpenMenu=useCallback(()=>{
       const active=document.querySelector('.Open')
       const desActive=document.querySelector('#Closed')
       const menu=document.querySelector('#menu')

       if( active?.classList.contains("Open")){
          active?.classList.toggle('no-open')
          desActive?.classList.toggle("no-close")
        }

    if(desActive?.classList.contains('no-close')){
        menu?.classList.add('menu')
    }else{
        menu?.classList.remove('menu')
    }
        },[])

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
                    <Menu id="menu">
                        <Link to="/About">Quem somos</Link>
                        <Link to="/">Serviços</Link>
                        <Link to="/Portifolio">Portifolio</Link>
                        <Link to="/Clients">Clientes</Link>
                        <Link to="/Legislation">Legislação</Link>
                        <Link to="/budget">Orçamento</Link>
                    </Menu>
                    <Hamburguer  onClick={handleOpenMenu}>
                        <span className="Open"><GiHamburgerMenu/></span>
                        <span className="close" id="Closed"><GrClose/></span>
                    </Hamburguer>
                    <Link to='/'><BsSearch/></Link>
                </Position>
            </Box>
        </Container>
    )
}