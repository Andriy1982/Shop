import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

 const  createColor = () => {
  const r = Math.floor(Math.random() * (256));
 const g = Math.floor(Math.random() * (256));
  const  b = Math.floor(Math.random() * (256));
 const  color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
return color;
}

const createUniqueColor = (cardList) => {
  const color =createColor()
  const isInclude = cardList.some(card => card.color === color )
  return isInclude ? createColor() : color; 
} 



const createPrice = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const createCards = () => {
  const arr =[];

  while (arr.length < 5) {

    const color = createColor();
    const price = createPrice(1, 50);
    
 arr.push({color, price})

  }
return arr
  }
console.log( createCards());

const initialState = createCards();

const addCard =  createAction('cards/add');
export const addNewCard =  createAction('newCards/add');
export const addCardToOrder = createAction('addCardsToOrder');


// const cardsReducer = 

const cards = createReducer(initialState, 
{
  [addCard]: (state, _) => [...state],
  [addNewCard]: (state, action) => [...state, ...action.payload]
  // [actions.deleteContact]: (state, { payload }) => {
  //   return state.filter(({ id }) => id !== payload);
  // },
});

const order = createReducer([], {
  [addCardToOrder]:(state, action) => [...state, ...action.payload]
})





export default configureStore({
  reducer: {
    counter: counterReducer,
    cards,
    order
  },
});
