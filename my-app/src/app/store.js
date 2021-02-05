import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());

function randomNum() {
  return Math.floor(Math.random() * 256);
}

function randomRGB() {
  var red = randomNum();
  var green = randomNum();
  var blue = randomNum();
  // return [red, green, blue];
  return `rgb(${red}, ${green}, ${blue})`;
  // randomRGB()[0] +
  // ', ' +
  // randomRGB()[1] +
  // ', ' +
  // randomRGB()[2] +
  // ')'
}
console.log(randomRGB());

const createColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
};

const createUniqueColor = cardList => {
  const color = randomRGB();
  const isInclude = cardList.some(card => card.color === color);
  console.log(isInclude);
  if (isInclude) {
    createUniqueColor(cardList);
  } else {
    return color;
  }

  // return isInclude ? createColor() : color;
};

const createPrice = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createCards = () => {
  const arr = [];

  while (arr.length < 5) {
    const id = uuidv4();
    const color = createUniqueColor(arr);
    const price = createPrice(10, 100);

    arr.push({ id, color, price });
  }
  return arr;
};
console.log(createCards());

const initialState = createCards();

const addCard = createAction('cards/add');
export const addNewCard = createAction('newCards/add');
export const addCardToOrder = createAction('addCardsToOrder');

// const cardsReducer =

const cards = createReducer(initialState, {
  [addCard]: (state, _) => [...state],
  [addNewCard]: (state, action) => [...state, ...action.payload],
  // [actions.deleteContact]: (state, { payload }) => {
  //   return state.filter(({ id }) => id !== payload);
  // },
});

const order = createReducer([], {
  [addCardToOrder]: (state, action) => [...state, ...action.payload],
});

export default configureStore({
  reducer: {
    counter: counterReducer,
    cards,
    order,
  },
});
