import React from "react"
import { Container,Box } from "./styled"
import { Title } from "../../components/Title"


export const Clients =()=>{
    return(
        <Container>
            <Title text1="Clientes " text2="Parceiros"/>
            <div className="tarja">
            <h3>
                OS NOSSOS CLIENTES SÃO MUITO IMPORTANTES PARA NÓS.
                UM CLIENTE NOVO É UM CLIENTE QUE FICA.
            </h3>
            </div>
            <Box>
               <ul>
                   <li>A&F Condomínios</li>
                   <li>MRCM, GC</li>
                   <li>LCM Gestão de Condomínios</li>
                   <li>MRCM, GC</li>
                   <li>MRCM, GC</li>
                   <li>A&Fdf Condomínios</li>
                   <li>REVIsdOBRA, Construção civil</li>
                   <li>Domus Matrixdsa</li>
                   <li>REVIsdOBRA, Construção civil</li>
                   <li>Domus Matrixdsa</li>
                   <li>MRCM, GC</li>
               </ul>
               <ul>
                   <li>MRCREVIOBRA, Construção civildM, GC</li>
                   <li>MRCM, GC</li>
                   <li>LCM Gestão de Condomínios</li>
                   <li>A&FsH Condomínios</li>
                   <li>MRCM, GC</li>
                   <li>MRCM, GC</li>
                   <li>A&FsH Condomínios</li>
                   <li>LCM Gestão de Condomínios</li>
                   <li>A&F Condomínios</li>
                   <li>Domus Matrixsd</li>
               </ul>
               <ul>
                   <li>MRCM, GC</li>
                   <li>LCM Gestão de Condomínios</li>
                   <li>MRCM, GC</li>
                   <li>A&F Condomínios</li>
                   <li>MRCM, GC</li>
                   <li>REVIOBRAsd, Construção civil</li>
                   <li>MRCM, GC</li>
                   <li>REVIOBRAsd, Construção civil</li>
                   <li>MRCM, GC</li>
                   <li>Domus Matrixds</li>
               </ul>
            </Box>
            <div className="tarja2">
            <h3>
                OS NOSSOS CLIENTES SÃO MUITO IMPORTANTES PARA NÓS.
                UM CLIENTE NOVO É UM CLIENTE QUE FICA.
            </h3>
            </div>
        </Container>
    )
}