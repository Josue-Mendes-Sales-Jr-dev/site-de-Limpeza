import styled from "styled-components";

export const Container=styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  margin: 100px 0;
  position: relative;
  .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: visible;
      position: absolute;
      cursor: pointer;
      bottom:-90px;
      font-size: 2rem;
      z-index: 1;
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
  img{
    width:50%;
    height: 50%;
    padding:0 30px
  }
  @media screen and (max-width:950px){
   gap: 4rem;
   
  img{
    width: 70%;
    border-radius: 40px;
  }
}

 `
export const Box=styled.div`
   width:45%;
   display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media screen and (max-width:950px){
    width: 80%;
  }
   h2{
    width: 80%;
    font-size:2rem;
    font-weight:550;
    padding-bottom:2.5rem;
   }
   ul{
    width: 80%;
    li{ 
        list-style-type:circle;
        margin: 10px 0;
    }
   }
   .links{
    width: 80%;
    margin: 30px 0;
    a{
        color:black;
    }
    .lin{
      margin-bottom:1rem;
    }
   }
   .caixa{
    width: 80%;
    margin-bottom: 4rem;
   }

   
    
`