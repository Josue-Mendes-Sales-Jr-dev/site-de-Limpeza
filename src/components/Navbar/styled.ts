import styled from "styled-components";

export const Container=styled.div`
    width:100vw;
   height:200px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    flex-wrap: wrap;
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
     }}
    }
     @media screen and (max-width:1050px){
        height: 160px;
        header{
            display:none;
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
    
    @media screen and (max-width:850px){
        visibility: hidden;
    

}
    
   
`
export const Position=styled.div`
    position:relative;
     z-index:1;
     display:flex;
    align-items:center;
    justify-content:space-around;
     width: 100%;
     color:var(--greenSite);

     
     a{ color: black;
        font-weight: 500;
        font-size:1.25rem;
        text-decoration:none;
        :hover{
            color: orange;
        }
     }
     @media screen and (max-width:1050px){
       a{
        font-size: 1.1rem;
        padding: 0 5px;;
       }
     }
     @media screen and (max-width:850px){
      background-color: black;
      min-height: 80px;
      margin-top: -80px;
      
      a{
        color: white;
        padding: 0 20px;
      }
    }
    @media screen and (max-width:850px){
    
    .menu{flex-direction: column;
    height: 30em;
    margin-top: 350px;
    justify-content: center;
    
    a{  
        margin-bottom: 2rem;
    }
      visibility: visible;
    }
}
@media screen and (max-height: 480px) {
    .menu{flex-direction: column;
    height: 10em;
    margin-top: 350px;
    justify-content: center;
    margin-bottom: 4rem;
    a{  
        margin-bottom: 1rem;
    }
      visibility: visible;
    }
}
`
export const Hamburguer=styled.div`
  display: none;
 @media screen and (max-width:850px){ 
    display: flex;
    visibility: visible;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
  
   .close{
    display: none;
   }

   .no-close{
    display: flex;
    font-size: 2rem;
    
   }

   .Open{
    display: flex;
    font-size: 2rem;
   }
   .no-open{
    display: none;
   }
   }
`