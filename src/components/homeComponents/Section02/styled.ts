import styled from "styled-components";

export const Container=styled.section`
  width: 100%;
   min-height:80vh;
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
  @media screen and (max-width:420px){
    .text{h1{
      font-size:2rem;
      font-weight:500;
      color:gray;
    }
    p{
      font-size: 1rem;
    }
  }
  }
  
  
`
export const TextBoxS02=styled.section`
  display:flex;
  width: 100%;
  min-height: 100vh;
  align-items:center;
  justify-content:space-around;
  flex-wrap:wrap;
  img{
    width: 25%;
    height: 22.5rem;
    
  }
  
@media screen and (max-width:1050px){
  flex-direction: column;
  gap: 4rem;
  img{
    width: 50%;
    height: 22rem;
  }
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
     
  @media screen and (max-width:420px){
    img{
      width: 75%;
      border-radius: 5px;
    }
    .part1{
      width: 80%;
      .part2{
        width: 100%;
        span{
        display: none;
     }
      }
    }
  }
`