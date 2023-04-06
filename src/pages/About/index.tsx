import { CardAbout } from "../../components/AboutComponents/Card"
import { Title } from "../../components/Title"
import { Container,TextBox,Section} from "./styled"
export const About=()=>{
    
    return(
        <Container>
            <Title text1="Quem" text2="Somos"/>
            <div>
                <p>
                    <strong>
                    LIMPEZA E MANUTENÇÃO DE TODO O TIPO DE CHAMINÉS, TELHADOS E ALGEROZES.
                    </strong>
                </p>
                <p>
                    FOI NA PRIMEIRA METADE DO SEC. XX QUE O ARQUITECTO LE CORBUSIER DEU O NOME DE QUINTA FACHADA À COBERTURA DOS EDIFÍCIOS.
                </p>
                <p>
                    <strong>
                    A QUINTA FACHADA TRATA DE TUDO O QUE ESTÁ RELACIONADO COM A COBERTURA DA SUA HABITAÇÃO.
                    </strong>
                </p>
            </div>
            <TextBox>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque minus, dolorum quo aliquam dignissimos modi, quas laboriosam iure consectetur unde iste, nemo rem delectus vero perferendis sint a dolorem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum totam eos error illo deserunt delectus. Tenetur nisi necessitatibus sit eos excepturi culpa! Est alias reiciendis nemo voluptatem illo accusantium?
                 </p>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque minus, dolorum quo aliquam dignissimos modi, quas laboriosam iure consectetur unde iste, nemo rem delectus vero perferendis sint a dolorem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum totam eos error illo deserunt delectus. Tenetur nisi necessitatibus sit eos excepturi culpa! Est alias reiciendis nemo voluptatem illo accusantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at doloribus delectus 
                 </p>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque minus, dolorum quo aliquam dignissimos modi, quas laboriosam iure consectetur unde iste, nemo rem delectus vero perferendis sint a dolorem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum totam eos error illo deserunt delectus. Tenetur nisi necessitatibus sit eos excepturi culpa! Est alias reiciendis nemo voluptatem illo accusantium?
                 </p>
            </TextBox>
            <Section>
                <h2>Porquê Limpar as <span>chaminés</span></h2>
                 <div className="boxAbout">
                     <CardAbout/>
                     <CardAbout/>
                     <CardAbout/>
                     <CardAbout/>
                 </div>
            </Section>
        </Container>
    )
}