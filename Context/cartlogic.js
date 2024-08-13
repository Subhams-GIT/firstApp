import React, {createContext, useReducer, useContext} from "react";


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

const initialState = [];


const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {...action.payload, quantity: 1}];
    case REMOVE_FROM_CART:
      return state.filter(item => item.key !== action.payload.key);
    case UPDATE_QUANTITY:
      return state.map(item =>
        item.key === action.payload.key
          ? {...item, quantity: action.payload.quantity}
          : item
      );
    default:
      return state;
  }
};


export const CartContext = createContext();


export const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  
  const addToCart = product => {
    dispatch({type: ADD_TO_CART, payload: product});
  };

  const removeFromCart = key => {
    dispatch({type: REMOVE_FROM_CART, payload: {key}});
  };

  const updateQuantity = (key, quantity) => {
    dispatch({type: UPDATE_QUANTITY, payload: {key, quantity}});
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
