import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailsPageView(props) {
  const params = useParams();
  const cards = useSelector(state => state.cards);
  console.log(params);
  console.log(cards);

  const currentCard = cards.find(card => card.id === params.cardId);
  console.log(currentCard);
  return (
    <>
      <h2>Details card</h2>
      <p>{params.cardId}</p>
    </>
  );
}
