import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,100&display=swap');

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style-type:none;
  }
  html,body,:root{
    max-width: 100vw;
    min-height:100vh;
    background:#FafaF1;
    font-family: 'Montserrat', sans-serif;
    --greenSite:#00A551;
    --whiteSite:#FafaF1;
    --blackSite:#16161A;
    --greenHoverSite:#23f169;
    --graySite:#c6c6c6;
  
  }
`