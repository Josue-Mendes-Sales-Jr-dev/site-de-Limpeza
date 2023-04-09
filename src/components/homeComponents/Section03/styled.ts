import styled from "styled-components";

export const Container=styled.section`
  min-height:100vh;
  background-color:#E5E5E5;
  position: relative;
  .header{
    height: 120px;
    display:flex;
    align-items:center;
    text-align: center;
    font-size:1.8rem;
    color: gray;
    h2{
      width: 100%;
    }
  }
 
  @media screen and (max-width:850px){
   padding: 5rem 0;
}
  
`
export const Box=styled.section`
  min-height:60vh;
  background-color:#E5E5E5;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:2rem;
  @media screen and (max-width:1150px){
     flex-wrap: wrap;
     min-height:60vh;
     padding-bottom:5rem;
     gap: 5rem;
  }
 
`
