import React, { useState } from 'react'
import '../hojas_de_Estilo/formulario.css'
import { v4 as uuidv4} from 'uuid'
import Swal from 'sweetalert2'

const Formulario = (props) => {



    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
  
    const manejarCambio = e =>{
     
    
         setInput(e.target.value).trim 
      
    }
    const manejarCambio2 = e =>{
       
        setInput2(e.target.value).trim
      }
  
    const manejarEnvio = e =>{
      e.preventDefault()
      
if(input.length < 3 || input2.length < 6){

  Swal.fire('No se puede crear card, revise cantidad de caracteres. ')
     

}else {
  
  const cardNueva = {
  id : uuidv4(),
  texto:input,
  texto2:input2

}
props.onSubmit(cardNueva)}



    }

  return (

<div>

<form className='formulario' 
onSubmit={manejarEnvio}>

<input className='input-form'

type="text"
placeholder='Agregar animal favorito'
name='texto'

onChange={manejarCambio}
/>
<input className='input-form'

type="text"
placeholder='¿Por que es tu animal favorito?'
name='texto2 '

onChange={manejarCambio2}
/>
<button className='form-boton' > 
    Enviar Respuesta
</button>


</form>


    </div>
  )
}

export default Formulario