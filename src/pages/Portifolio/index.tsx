import { CardBox } from "../../components/PortifolioComponents/CardsBox"
import { Title } from "../../components/Title"
import { Container,Box,CardsBox } from "./styled"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import {useCallback} from "react"

export const Portifolio=()=>{
    const box=document.getElementById('box')

    const handleShowAll=()=>{
            box?.classList.toggle('show')  
    }
    const handleShowBtn1=()=>{
         
    }

    const handleUp=useCallback(()=>{
        if(scrollY>200){
          scrollTo(0,0)
        }
      },[])
    return(

        <>
        <Container>
            <Title text1="" text2="Portifolio"/>
            <button className="btn" onClick={handleUp}><BsFillArrowUpCircleFill className="up"/></button>
             <Box>
                <nav>
                    <ul>
                        <li><button onClick={handleShowAll} type="button">
                                show all
                            </button>
                        </li>
                        <li>
                            <button  onClick={handleShowBtn1} type="button">
                                Algerozes
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                Chaminés
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                Chapéus
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                GirÂndolas
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                Redes
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                Telhados
                            </button>
                        </li>
                    </ul>
                </nav>
                <CardsBox id="box" >
                    <CardBox textP="Algerozes"/>
                    <CardBox textP="Chaminés" />
                    <CardBox textP="Chapéus" />
                    <CardBox textP="GirAndolas" />
                    <CardBox textP="Redes" />
                    <CardBox textP="Telhados" />
                </CardsBox>
             </Box>
        </Container>
        </>
    )
}