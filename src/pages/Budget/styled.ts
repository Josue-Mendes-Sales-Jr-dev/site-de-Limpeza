import styled from "styled-components";

export const Container=styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  .CBox{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding: 40px 0;
  }
  .b{
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: var(--graySite);
  }
  @media screen and (max-width:420px){
    width: 360px;
  .b{
    width: 100%;
    p{
      width:70% ;
    }
  }

}
`

export const Box=styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  gap: 5rem;
  .map{
    width: 35%;
    height: 25rem;
   display: flex;
   flex-direction: column;
   border-radius: 5%;
   overflow: hidden;
  }
  @media screen and (max-width:420px){
   .map{
    width: 70%;
   }
}
`
export const Form=styled.div`
  .form{
  width:30rem;
  display: flex;
  flex-direction: column;
  padding:30px 0;
  background: none;
  gap: 1rem;}
  .Cform{
    color: var(--greenSite);
    padding:40px 0;
  }
  .btnSubmit{
    width: 200px;
    height: 3.5rem;
    font-size: 1.1rem;
    background-color: var(--greenSite);
    border:none;
    border-radius: 10px;
    margin: 30px 0;
    
    :hover{
        background-color: var(--greenHoverSite);
        cursor: pointer;
    }
    ::placeholder{
        text-transform: capitalize;
    }
  }
  input{
    height: 3rem;
    outline: none;
    border: none;
    background: none;
    padding: 0 10px;
    border-bottom: 2px solid gray;
    border-radius: 2px;
    ::placeholder{
        color: gray;
        font-size: 1.2rem;
    }
  }
  @media screen and (max-width:420px){
    width: 14rem;
    input{
      width: 13rem;
      ::placeholder{
        font-size: 1rem;
      }
    }
    .btnSubmit{
    width: 13rem;}
}
`