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
  .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: visible;
      position: absolute;
      cursor: pointer;
      bottom:10px;
      font-size: 2rem;
      z-index: 100;
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
