import {Container, BoxCards } from "./styled"
import { Link } from "react-router-dom"
import {ImCheckboxChecked} from "react-icons/im"

export const Card=()=>{
    return(
        <Container>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Quam, recusandae aperiam esse 
                     labore provident dolorum quo, vitae 
                     totam sapiente?
                </p>
            </div> 
            <BoxCards>
                <header>
                    <p>Limpeza e inspecção</p>
                    <h4>Chaminés</h4>
                </header>
                <span>
                    <Link to="/">
                       Saber <span className="rotate"><ImCheckboxChecked/></span>
                    </Link>
                </span>
            </BoxCards>
        </Container>
    )
}