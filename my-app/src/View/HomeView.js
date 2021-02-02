import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../features/Card/Card'
import {addNewCard, createCards} from '../app/store'



export default function HomeView(props) {
    const cards = useSelector(state => state.cards)
    const dispatch = useDispatch()

    const handleButton = () => {
    dispatch(addNewCard(createCards()))
    }

console.log(cards[0].color);

    return (
        <>
           <h1>Hallow</h1> 
           <ul style= {{display: 'flex', flexWrap: 'wrap'}}>
            {cards.map((card, index )=> <Cards key = {card.color} 
            color= {card.color}
            price={card.price}
            />

            )}
           </ul>
           <button onClick = {() => handleButton()}>Load more</button>
        </>
    )
}
