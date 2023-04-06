import styled from "styled-components";

export const Container=styled.section`
  width: 100%;
  height:100%;
  background-color:#FFFFFF;
  padding-bottom:7rem;
  .text{
    width: 100%;
    padding:80px 0;
    display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
   gap:1rem;
    h1{
      font-size:3rem;
      font-weight:500;
      color:gray;
    }
    P{
      width: 65%;
      font-size:1.25rem;
      line-height:2rem;
      text-align:center;
    }
  }
`
export const TextBoxS02=styled.section`
  display:flex;
  width: 100%;
  align-items:center;
  justify-content:space-around;
  flex-wrap:wrap;
  

  img{
    width: 25%;
    height: 22.5rem;
  }

  .part1{
  width: 26%;
  display:flex;
  align-items:center;
  justify-content:center;
  
   .part2{
    
    width: 100%;
    display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   font-size:1.5rem;
   gap:2rem;
    a{
    color: var(--greenSite);
    opacity:0.8;
    width: 30rem;
    display:flex;
    align-items:center;
     justify-content:center;
     text-decoration:none;
     padding: .5rem;
     gap:1rem;
     :hover{
      opacity:1;
     }
     span{
        flex-basis:20%;
        font-size:3rem;
     }
     p{
        flex-basis:45%;
        font-weight:600;

     }
    }
   }
  }
`