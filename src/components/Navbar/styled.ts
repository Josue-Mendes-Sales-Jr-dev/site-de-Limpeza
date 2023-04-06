import styled from "styled-components";

export const Container=styled.div`
    width:100vw;
   height:200px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    color: white;
   
    
   header{
    display:flex;
    align-items:center;
    justify-content:space-between;
     background-color:black;
     width: 100%;
     height: 55px;
     opacity: 0.93;
     padding: 0 30px;

     .h3{
        z-index:200;
        display:flex;
        align-items:center;
        justify-content:center;
        color:var(--greenSite);
        opacity: .9;
        span{
            font-size:.85rem;
            
        }
        .boxIcons{
        display:flex; 
        gap: .5rem;
        font-size:1.1rem;
        padding: 0 10px;
        a{
        display:flex;
        align-items:center;
        justify-content:center;
        color: var(--greenSite);
        :hover{
            color: orange;
        }
        }
     }
     
`
export const BoxSpan=styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        gap: 2.5rem;
        .bIcons{
         display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        gap:.5rem;
        font-size:.9rem;
        .span{
            text-transform:uppercase;
        }
        color: var(--greenSite);
        opacity:0.8;
        :hover{
            color: orange;
        }
     }
`
export const Box=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
     width: 100%;
     height: 145px;

    
`
export const Menu=styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-around;
     
   
`
export const Position=styled.div`
    position:relative;
     z-index:2;
     display:flex;
    align-items:center;
    justify-content:space-around;
     width: 100%;
     color:var(--greenSite);

     
     a{ color: var(--blackSite);
        font-size:1.3rem;
        text-decoration:none;
        :hover{
            color: orange;
        }
     }
`