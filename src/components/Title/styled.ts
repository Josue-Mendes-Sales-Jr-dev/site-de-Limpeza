import styled, { keyframes } from "styled-components";

const TranslateY=keyframes`
to{ transform:rotateX(0deg)}
from{transform:rotateX(100deg)}
`


export const Container=styled.div`
   padding:10px 0;
   h1{
    display:flex;
    gap:.5rem;
    font-size:2.5rem;
    font-weight:500;
   }
   .move{
          animation: ${TranslateY} 1s linear;
          color: var(--greenSite);
     }

`