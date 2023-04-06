import styled from "styled-components";

export const Container=styled.div`
   width:100vw;
   height:400px;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   color:white;
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
