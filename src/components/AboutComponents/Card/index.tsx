import { Container } from "./styled"
import Image from "../../../assets/imgs/pexels01.jpg"
import {ImCheckboxChecked} from "react-icons/im"

export const CardAbout=()=>{
    return(
        <>
         <Container>
            <div className="Tbox">
                <span>
                    < ImCheckboxChecked className="iconAbout"/>
                </span>
                <p>
                Evitar intoxicações por monóxido de carbono
                </p>
            </div>
            <img src={Image} alt="imagem Do pq" />
         </Container>
        </>
    )
}