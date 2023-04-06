import styled from "styled-components";

export const Container=styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom:100px;
  gap: 2.5rem;
  h2{
    width: 100%;
    text-align: center;
    color: var(--greenSite);
    opacity: .5;
    display: flex;
  align-items: center;
  justify-content: center;
  }
  h3{
    color: gray;
    opacity: .7;
  }
  .box1{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  p{
    width: 100%;
  }
  }
  .box{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  .text{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  gap: .8rem;
  p{
    width: 100%;
    text-align: left;
  }
  }

  }
`