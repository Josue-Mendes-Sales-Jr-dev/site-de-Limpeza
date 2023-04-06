import styled, { keyframes } from "styled-components";

const translate1=keyframes`
to{ transform:translateY(0px)}
from{transform:translateY(-100px); opacity:0;}
`
const translate2=keyframes`
to{ transform:translateY(0px)}
from{transform:translateY(-100px); opacity:0;}
`
const translate3=keyframes`
to{ transform:translateY(0px)}
from{transform:translateY(-100px); opacity:0;}
`
const translate4=keyframes`
to{ transform:translateY(0px)}
from{transform:translateY(-100px); opacity:0;}
`
const translateX=keyframes`
to{ transform:translateX(0px)}
from{transform:translateX(-100px)}
`

export const Container=styled.div`
  width:100%;
  height: 100%;
  margin-top:-145px;
  position:relative;


`
export const Section01=styled.section`
  height:100%;
  background-color:#131313;
  
  width: 100vw;
  overflow:hidden;
  video{
    opacity:0.5;
    width: 100%;
    height: 100%;

  }

`
export const TextBox=styled.div`
 display:flex;
 flex-direction:column;
 padding:0 30px;
 gap:1rem;
 position:absolute;
 top:255px;
 width: 40%;
 height: 40%;
 font-size:1.8rem;
 color:(--greenSite);
 P{
  color: var(--whiteSite);
 }
 a{
  color:var(--greenSite);
  text-decoration:none;
  font-weight:600;

 }
 .p01{
  animation:${translate1} 2s linear;
 }
 .h01{
  animation:${translate2} 1.5s linear;
 }
 .h02{
  animation:${translate3} 1s linear;
 }
 .h03{
  animation:${translate4} .5s linear;
 }
 .LBox{
  display:flex;
 flex-direction:row;
 gap:1rem;
 opacity: 1;
 animation:${translateX} 1.2s linear;

 a{
  color:var(--greenSite);
  text-decoration:none;
 }
 .BTNServices{
   padding: .7rem 1rem;
   background-color:var(--blackSite);
   border-radius:5px;
   font-weight:400;
   color: var(--whiteSite);
   font-size:.9rem;
   :hover{
    background-color:black;

  }

 }
 .BTNOrcament{
  padding: .7rem 1rem;
  background-color:var(--greenSite);
  color: var(--whiteSite);
  border-radius:5px;
  font-weight:400;
  font-size:.9rem;
  :hover{
    background-color:var(--greenHoverSite);
    transition:3s linear;
  }
  
 }
 }
`
