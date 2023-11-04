import { ActionType } from "../constans/action-types";

const initialState = {
  products:[]
}


export const productReducer =(state=initialState,{type,payload})=>{
    switch (type){
    case ActionType.SET_PRODUCTS:
      return {...state,products:payload};
      default:
      return state;

    }
}
 export const selectedProductReducer = (state = {},{type,payload})=>{
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return{...state, ...payload}
  
    default:
      return state;
  }
 }

 export const removeSelectedProductReducer = (state = {},{type,payload})=>{
  switch (type) {
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return{ }
  
    default:
      return state;
  }
 }