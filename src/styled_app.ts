import styled from "styled-components"
export const Container=styled.div`
   width: 100vw;
   height: 100%;
   margin: 0px;
   background-color: aliceblue;
   overflow: hidden;
   
   button{
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: visible;
      position: fixed;
      cursor: pointer;
      top:550px;
      font-size: 2rem;
      z-index: 0;
      right:10px;
      width: 50px;
      height: 50px;
      background-color: var(--greenSite);
      border-radius: 50%;
      :hover{
         .up{
            color: white;
         }
      }
   }
`

