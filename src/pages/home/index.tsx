import { Container,Section01,TextBox} from "./styled"
import { Section02 } from "../../components/homeComponents/Section02"
import { Section03 } from "../../components/homeComponents/Section03"
import { Section04 } from "../../components/homeComponents/Section04"
import video from "../../assets/videos/video1.mp4"
import {Link, useFetcher} from "react-router-dom"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import {useCallback, useEffect} from "react"


export const Home =()=>{
    useEffect(()=>{
        const btn =document.getElementById('btn')
    if(scrollY>600){
       btn?.classList.add("r")
    }
    },[])
    
    const handleUp=useCallback(()=>{
        if(scrollY>200){
          scrollTo(0,0)
        }
      },[])
    return(
       <Container>
        <button id="btn" className="btn" onClick={handleUp}><BsFillArrowUpCircleFill className="up"/></button>

         <Section01>
          <video loop muted autoPlay>
              <source src={video} type="video/mp4"/>
          </video>
          <TextBox>
              <div className="local">
                  <p className="p01">LIMPEZA PROFISSIONAL</p>
                               <h2 className="h01"><Link to="/">Chaminés</Link></h2>
                               <h2 className="h02"><Link to="/">Telhados</Link> </h2>
                               <h2 className="h03"><Link to="/">Alerozes</Link></h2>
                               <div className="LBox">
                  <Link className="BTNServices" to="/">Serviços</Link>
                  <Link className="BTNOrcament" to="/Budget">Pedir orçamento</Link>
                               </div>
              </div>
          </TextBox>
         </Section01>
         <Section02/>
         <Section03/>
         <Section04/>
       </Container>
    )
}