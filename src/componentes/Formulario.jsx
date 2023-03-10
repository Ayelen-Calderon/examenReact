import React, { useState } from 'react'
import '../hojas_de_Estilo/formulario.css'
import { v4 as uuidv4} from 'uuid'
import Swal from 'sweetalert2'

const Formulario = (props) => {
    const [input, setInput] = useState({
      texto:"",
      texto2:""
    })
  
    const manejarCambio = e =>{
      console.log(e.target.value);
         setInput({
          ...input,
          [e.target.name] : e.target.value
    })
    }
  
    const manejarEnvio = e =>{
      e.preventDefault()
if(input.texto.length < 3 || input.texto2.length < 6){

  Swal.fire('No se puede crear card, revise cantidad de caracteres.')
     

}else {
  
  const cardNueva = {
  id : uuidv4(),
  texto: input.texto,
  texto2:input.texto2
}
 props.onSubmit(cardNueva)


}
    }

  return (

<div>

<form className='formulario' 
onSubmit={manejarEnvio}>

<input className='input-form'
name='texto'
type="text"
placeholder='Agregar animal favorito'
value={input.texto}


onChange={manejarCambio}
/>
<input className='input-form'
name='texto2'
type="text"
placeholder='¿Por que es tu animal favorito?'
value={input.texto2}


onChange={manejarCambio}
/>
<button className='form-boton' > 
    Enviar Respuesta
</button>


</form>


    </div>
  )
}

export default Formulario