import {Container, TextBoxS02} from "./styled"
import { Link } from "react-router-dom"
import {ImCheckboxChecked} from "react-icons/im"
import Image02 from "../../../assets/imgs/pexels02.jpg"

export const Section02=()=>{
    return(
        <>
        <Container>
             <div className="text">
              <h1>O que tratamos</h1>
              <p>A nossa empresa trata da limpeza e manutenção de todo o tipo de chaminés, telhados e algerozes.
           Tratamos de tudo que está relacionado com a cobertura dos edifícios.
           Uma manutenção de topo no topo da sua habitação.</p>
             </div>
             <TextBoxS02>
              <div className="part1">
                  <div className="part2">
                    <Link to="/"><p>Limpeza de chaminés</p> <span><ImCheckboxChecked/></span></Link>
                    <Link to="/"><p>Limpeza de Algerozes </p> <span><ImCheckboxChecked/></span></Link>
                    <Link to="/"><p>Limpeza de telhados </p> <span><ImCheckboxChecked/></span></Link>
                  </div>
                   
              </div>
              
              <img src={Image02} alt="imag" />

              <div className="part1" >
                  <div className="part2">
                    <Link to="/"><span><ImCheckboxChecked/></span><p>Girândolas e chapéus</p></Link>
                    <Link to="/"><span><ImCheckboxChecked/></span><p>Inspecção Videos de condutas</p></Link>
                    <Link to="/"><span><ImCheckboxChecked/></span><p>Redes Anti-pássaros</p> </Link>
                  </div>
            
              </div>
             </TextBoxS02>
         </Container>
        </>
    )
}