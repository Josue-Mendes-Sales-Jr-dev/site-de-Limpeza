import {Container,Box} from "./styled"
import { Link } from "react-router-dom"
import Image from "../../../assets/imgs/pexels01.jpg"

export const Section04=()=>{
    return(
        <Container>
            <img src={Image} alt="" />
            <Box>
                <h2>Por que limpar?</h2>
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel maxime quas, inventore aliquid asperiores, molestiae consequatur, quaerat repudiandae voluptatibus possimus officia quod ad earum provident eaque laborum voluptas. 
                        Explicabo, laboriosam!</li>
                    <li>kkkkkk jj hi n niediijjj  jjjjkdkkn n nn nnnmmikhbn  kkdkdkdkdk
                         hhhdd</li>
                    <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet atque voluptates voluptate temporibus fugit non quos culpa rerum deserunt hic quibusdam quisquam explicabo, laborum voluptatibus est voluptatem
                         ipsam! Nulla, aliquid.
                    </li>
                </ul>
                <div className="links">
                <p className="lin">Saiba o que a DECO informa sobre a importância da limpeza das chaminés. </p>                  
                     <div>
                        <p>
                            <Link to="/">Falta de manutenção</Link> (Informação da DECO)
                        </p>
                        <p>
                            <Link to="/">Falta de limpeza</Link> (Informação da DECO)
                        </p>
                    </div>
                </div>
                
            </Box>
        </Container>
    )
}