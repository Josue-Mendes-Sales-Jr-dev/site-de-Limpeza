import styled from "styled-components";


export const Container=styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:2rem;

  
  p{
    display:flex;
    flex-direction:column;
     align-items:center;
     margin-bottom:1rem;
    justify-content:center;
  }
`

export const TextBox=styled.article`
     display:flex;
     align-items:center;
     justify-content:center;
     width:90%;
     height:20rem;
     column-count: 3;
     gap:2rem;
    p{  
         display: block;
         text-align:justify;
         width: 100%;
         height:14rem;
    }
    
`
export const Section=styled.div`
     width:100%;
     height:100%;
     display:flex;
     align-items:center;
     justify-content:center;
     flex-direction:column;
     padding-bottom:120px;
     h2{  
          font-size:1.8rem;
          padding-bottom:40px;
          span{
               color: var(--greenSite);
          }
     }
     .boxAbout{
     display:flex;
     align-items:center;
     justify-content:center;
     gap: 1rem;
     flex-wrap:wrap;
     }
    

`