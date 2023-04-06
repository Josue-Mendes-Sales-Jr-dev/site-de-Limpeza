import styled from "styled-components";

export const Container=styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  height: 100%;
  margin: 100px 0;
  img{
    width:50%;
    height: 50%;
    padding:0 30px
  }

`
export const Box=styled.div`
   width:45%;
   display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
   h2{
    width: 80%;
    font-size:2.5rem;
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