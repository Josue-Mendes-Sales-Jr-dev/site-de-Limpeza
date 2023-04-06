import {Container} from "./styled"

interface ITitleProps{
    text1:string;
    text2:string;
}
export const Title:React.FC<ITitleProps> =({text1,text2})=>{
    return(
     <Container>
        <h1>{text1}<p className="move">{text2}</p></h1>
     </Container>
    )
}