import styled from "styled-components";


export const Container=styled.div`
  min-height:100vh;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  gap:5rem;
  .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: visible;
      position: fixed;
      cursor: pointer;
      bottom:10px;
      font-size: 2rem;
      z-index: 1;
      right:10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      :hover{
         .up{
            color: white;
         }
      }
   }
  
  p{
    display:flex;
    flex-direction:column;
     align-items:center;
     margin-bottom:1rem;
    justify-content:center;
  }
  .TextP{
          width: 80%;
          height: 100%;
        
     }
  @media screen and (max-width:800px) {

     .TextP{
          width: 80%;
          height: 100%;
          margin-bottom: 5rem;
     }
  }
  @media screen and (max-width:420px) {

.TextP{
     width: 80%;
     height: 100%;
     margin-bottom: 10rem;
     text-align: center;
}
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

    @media screen and (max-width:1050px) {
       flex-direction: column;
       width: 80%;
    }
    
`
export const Section=styled.div`
     width:100%;
     min-height:100vh;
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
     @media screen and (max-width:850px) {
     margin-top: 5rem;
     padding: 30px 0;
    .boxAbout{
     flex-direction:column;
    }
}

@media screen and (max-width:420px) {
    padding-top:10rem;
    h2{
     text-align: center;
     width: 80%;
    }
}
`