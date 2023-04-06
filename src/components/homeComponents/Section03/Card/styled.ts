import styled, { keyframes } from "styled-components";

const Translate=keyframes`
to{ transform:rotate(0deg)}
from{
  transform:rotate(360deg)
}
`

export const Container=styled.div`
 display:flex;
  flex-direction:column;
  gap:2rem;
  height:18rem;
  width:22rem;
  p{
    text-align:center;
  }
`
export const BoxCards=styled.div`
  height:14rem;
  width:22rem;
  border-radius:5px;
  background-color:white;
  display:flex;
  flex-direction:column;
  padding:2rem;
  border:none;
  h4{   
        text-transform:uppercase;
        font-size:1.6rem;
        color: var(--greenSite);
        
    }
  header{
    height:8rem;
    padding-top:.3rem;
    p{
      padding-bottom:5px;
      text-align:left;
    }
  }
  a{
    text-transform:uppercase;
    font-weight:700;
    display:flex;
    align-items:center;
    gap:1rem;
    height: 4rem;
    text-decoration:none;
    font-size:1rem;
    color: var(--greenSite);
    opacity:0.5;
    padding-top:.5rem;
    span{
        padding-top:.5rem;
        font-size:3rem;
        border-radius:50%;
    }
  }
  :hover{
    background-color:var(--greenSite);
    color: white;
    box-shadow: .1px black;
    h4{
        color: white; 
    }
    a{  
        opacity: 1;
        color: white;
        .rotate{
        animation: ${Translate} 1s linear;
        }
    }
   
  }
`