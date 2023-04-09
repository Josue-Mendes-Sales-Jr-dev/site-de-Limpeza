import styled from "styled-components";

export const Container=styled.div`
   width:100%;
   height:100%;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   color:white;
   position: relative;
   z-index: 3;
   
`
export const Box=styled.div`
   width:100%;
   height:300px;
   background-color:var(--blackSite);
   display:flex;
   align-items:center;
   justify-content:space-around;
   .box{
    width:80%;
    height: 100%;
    display:flex;
   align-items:center;
   justify-content:space-around;
   flex-wrap:wrap;
     .part1{
      width: 25%;
      height: 120px;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      flex-direction:column;
      gap:2rem;
       p{
        width: 80%;
        height: 100%;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        flex-direction:column;
        gap:.5rem;
        .L{
         color: var(--whiteSite);
         text-decoration:none;
         display:flex;
         align-items:center;
        justify-content:flex;
        gap: .5rem;
        width: 70%;
        .iconL{
         font-size:1.3rem;
        }
         :hover{
            color:var(--greenSite);
         }
        }
       }
       .icons{
         display:flex;
         align-items:center;
         font-size:2rem;
         gap: 1rem;
         .icon{
            :hover{
               cursor:pointer;
               color: var(--greenSite);}
         }
       }
     }
   }
 
      @media screen and (max-width:850px) {
         min-height:100vh;

        
         .box{
           
            flex-direction: column;
            .part1{
            width: 100%;
            text-align: center;
            p{
               width: 100%;
               text-align: center;
            }
         }
         }
      }   
      @media screen and (max-height: 480px) {
         min-height:150vh;
         padding: 30px 0;
     .box{
      flex-direction: row;
      flex-wrap:wrap;
      .part1{
            width: 80%;
            text-align: center;
            p{
               width:80%;
               text-align: center;
            }
     }
    
  }}
`
export const BoxFooter=styled.div`
   width: 100vw;
   height:100px;
   background-color:white;
   color: var(--greenSite);
   opacity: .7;
   display:flex;
   gap:.5rem;
   justify-content:center;
   flex-direction:column;
   padding:0 50px;
   
`
