import {Container} from "./styled"
import Image  from "../../../assets/imgs/pexels01.jpg"

interface IcardProps{
    textP:string;
   
}
export const CardBox:React.FC<IcardProps>=({textP})=>{
    return(
        <Container className="box" >
           <img src={Image} alt="image1" />
           <div className="box">
               <h2>{textP}</h2>
           </div>
        </Container>
    )
}