import React, { useState } from 'react'
import Formulario from './Formulario'
import Card from './Card'
import '../hojas_de_Estilo/lista-de-card.css'


const ListarCard = () => {

    const [cards , setCard] = useState([])

    const agregarCard= (card) => {
    const cardsActualizadas = [card, ...cards]
    setCard(cardsActualizadas)

  }

  const eliminarCard = id =>{
   const  cardsActualizadas = cards.filter(card => card.id !== id)
   setCard(cardsActualizadas)
  }

  


  return (
    <>
    <Formulario onSubmit={agregarCard}/>

    <div className="lista-de-componentes">

   {
    cards.map((card) =>
      <Card
      key={card.id}
      id={card.id}
      texto={card.texto}
      texto2={card.texto2}
      eliminarCard = {eliminarCard}

      />
    )
   }

    </div>
    </>
  )
}

export default ListarCard