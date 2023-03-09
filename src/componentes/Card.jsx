
import { BsFillTrash3Fill } from "react-icons/bs";
import "../hojas_de_Estilo/card.css"


const Card = ({id, texto, texto2, eliminarCard}) => {
  return (
    <div className="card-contenedor">
        <div className="card-texto">
           <div className="texto1"> { texto } </div> 
           <div className="texto2">
           { texto2 }  
           </div>

        </div>
        
        <div className="Card-icono" onClick={() =>eliminarCard(id)}>
          < BsFillTrash3Fill />
        </div>
    </div>
  )
}

export default Card