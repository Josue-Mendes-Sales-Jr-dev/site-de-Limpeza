import styled, { keyframes } from "styled-components";
const Translate =keyframes`
to{
    transform:translateY(0px);
    
}
from{
    transform:translateY(30px);
    opacity:0;
}
`
export const Container=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22rem;
  height:25rem;
  overflow: hidden;
  border-radius: 5px;
  img{
    width: 22rem;
    height:25rem;
  }
  .box{
    display: none;
  }

  :hover{
        .box{
        display: flex;
        align-items: center;
        justify-content: center;
        h2{
            animation: ${Translate} .5s linear;
        }
        color: var(--whiteSite);
        width: 22rem;
        height:25rem;
        opacity: .6;
        background-color: var(--greenSite);
        }
        position: relative;
        img{
            position:absolute;
            z-index: -1;
        }
  }
`
