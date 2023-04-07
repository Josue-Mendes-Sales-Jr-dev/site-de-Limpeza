import {useState,useEffect} from "react"
import {Container} from "./styled"
export const Form1=()=>{
    const[name,setName]=useState('')
        const[email,setEmail]=useState('')
        const[tel,setTel]=useState('')
        const[local,setLocal]=useState('')
        const[message,setMessage]=useState('')

        

           const nameMessageError=document.getElementById('message')
            const emailMessageError=document.getElementById('messageEmail')
            const localMessageError=document.getElementById('messageLocal')
            const telMessageError=document.getElementById('messageTel')
            const messageMessageError=document.getElementById('messageMessage')
        
        


    const handleSubmit=(e:any)=>{
        e.preventDefault()
        if( name===''){
            nameMessageError?.classList.add('no-ok')
        }else{
            nameMessageError?.classList.remove('no-ok')
        }
        if(email===''){
            emailMessageError?.classList.add('no-ok')
        }else{
            emailMessageError?.classList.remove('no-ok')
        }
        if(local===''){
            localMessageError?.classList.add('no-ok')
        }else{ 
            localMessageError?.classList.remove('no-ok')
        }
        if(tel===''){
            telMessageError?.classList.add('no-ok')
        }else{
            telMessageError?.classList.remove('no-ok')
        }
        if(message===''){
            messageMessageError?.classList.add('no-ok')
        }else{
            messageMessageError?.classList.remove('no-ok')
        }
      
    }

    return(     
        <Container>
                    <form className="form" onSubmit={handleSubmit}>
                       <div className="Cform">
                         <h2> Dados para orçamento</h2>
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="Name"
                            value={name} onChange={(e)=>setName(e.target.value)}/>
                            <span id="message">Campo obrigatório</span>
                        </div>

                        <div className="inputBox">
                            <input type="email"placeholder="Email"
                            value={email} onChange={(e=>setEmail(e.target.value))}/>
                            <span id="messageEmail">Campo obrigatório</span>
                        </div>
                        
                        <div className="inputBox">
                            <input type="tel" placeholder="Telefone"
                            value={tel} onChange={e=>setTel(e.target.value)}/>
                            <span id="messageTel">Campo obrigatório</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="Localização"
                            value={local} onChange={e=>setLocal(e.target.value)}/>
                            <span id="messageLocal">Campo obrigatório</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="message"
                            value={message} onChange={e=>setMessage(e.target.value)}/>
                            <span id="messageMessage">Campo obrigatório</span>
                        </div >
                            <input type="submit" className="btnSubmit" value="Enviar"/>
                       
                        </form>
        </Container>
    )
}