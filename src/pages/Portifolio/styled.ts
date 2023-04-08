import styled from "styled-components";

export const Container=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 120px;
    .show{
        display: none;
       }

`
export const Box=styled.div`
     width: 90%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
   

    ul{
        display: flex;
       align-items: center;
       justify-content: center;
       gap:1rem;
       button{
        font-size: 1.2rem;
        border: none;
        padding: 0 30px;
        background: none;
        text-transform: capitalize;
        :hover{
            color: var(--greenSite);
            cursor: pointer;
        }
       }
    }
    @media screen and (max-width:950px){
        ul{
          display: grid;
          grid-template-columns: auto auto;
        }
    }
`
export const CardsBox=styled.div`
       margin: 2rem 0;
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1rem;
       flex-wrap: wrap;
       

`