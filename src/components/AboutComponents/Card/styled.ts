import styled from "styled-components";

export const Container=styled.div`
  width:20vw;
  height:65vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  .Tbox{
    padding-top:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;
    width:18vw;
    height:25vh;
    .iconAbout{
      font-size:2.8rem;
      border-radius:50%;
      color:var(--greenSite);
    }
  }
  img{
    width:18vw;
    height:40vh;
    border:5px solid gray;
  }
`