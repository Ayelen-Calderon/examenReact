
import { BsFillTrash3Fill } from "react-icons/bs";


const Card = ({id, texto, texto2, eliminarCard}) => {
  return (
    <div>
        <div className="card-texto">
           <h1> { texto } </h1> 
           <h2>
           { texto2 }  
           </h2>

        </div>
        
        <div className="Card-icono" onClick={() =>eliminarCard(id)}>
          < BsFillTrash3Fill />
        </div>
    </div>
  )
}

export default Card