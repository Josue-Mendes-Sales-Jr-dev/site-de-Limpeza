import styled from "styled-components";

export const Container=styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding-bottom: 80px;
  .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: visible;
      position: fixed;
      cursor: pointer;
      bottom:10px;
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
  .CBox{
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 90%;
    .P{
      display: flex;
    justify-content: center;
    align-items:center;
    }
    p{
     
      text-align: center;
      width: 80%;
      height: 2rem;
    }
    padding: 30px 0;
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
  @media screen and (max-width:850px){
    width: 100%;
    .map{
      width: 80%;
    }
  }
  @media screen and (max-height:420px){
    padding-bottom: 100px;
  }

`
export const Form=styled.div`
  .form{
  width:30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding:30px 0;
  background: none;
  gap: 1rem;}
  input{
    width:30rem;


  }
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
  @media screen and (max-height:420px){
    .form{
      padding: 0;
      gap: 0.5rem;
    }
  input{
    width: 30rem;
    ::placeholder{
        color: gray;
        font-size: .9rem;
    }
  }
  .btnSubmit{
    width: 150px;
    height: 2.5rem;
    font-size: 1.1rem;
    margin: 10px 0;
  }
  }
  @media screen and (max-width:420px){
    .form{
    width:28rem;
    padding:30px 0;
    gap: 1rem;
  }


    input{
    width:18rem;
    height: 2rem;
    padding: 0 10px;
    border-bottom: 2px solid gray;
    border-radius: 2px;
    ::placeholder{
        color: gray;
        font-size: 1rem;
    }
  }


  .btnSubmit{
    width: 150px;
    height: 2.5rem;
    font-size: 1.1rem;
    margin: 20px 0;
  }

  }
 
`