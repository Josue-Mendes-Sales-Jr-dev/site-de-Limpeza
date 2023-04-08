import styled from "styled-components";

export const Container=styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .tarja{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 85%;
    height:9rem;
    border-radius: 2px;
    opacity: .7;
    border: none;
    background-color: var(--graySite);
    h3{ 
        line-height: 2rem;
        width: 60%;
        font-size: 1.4rem;
        text-align: center;
        opacity:.6;
    }
  }
  .tarja2{
    opacity: .7;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 12rem;
    background-color:var(--graySite);
    margin-bottom: 100px;
    border-radius: 2px;
    h3{ 
        line-height: 2rem;
        font-size: 1.4rem;
        width: 60%;
        text-align: center;
        opacity:.6;
    }
  }
  @media screen and (max-width:420px){
    .tarja{
      height: 16rem;
      h3{font-size:1rem}
    }
    .tarja2{
      height: 16rem;
      h3{font-size:1rem}
    }
        
      }

`
export const Box=styled.div`
  padding: 80px 0;
   display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
  ul{
    display: flex;
  align-items: center;
  flex-direction: column;
  }
  @media screen and (max-width:420px){
    width: 70%;
    font-size: 1rem;
    gap: 2rem;
   ul{ 
    font-size: 1rem;
    justify-content: center;
    li{font-size: 1rem;}
  }
  }
`