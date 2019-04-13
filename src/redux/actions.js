import {ACTIONS } from "./action.config";

export const init = () => {
    return {
        type:ACTIONS.INIT
    };
};

export const getProducts= ()=>{
    return {
        type:ACTIONS.GET_PRODUCTS,
    }
}
export const getProductsDone= (products)=>{
    return {
        type:ACTIONS.GET_PRODUCTS_DONE,
        products
    }
}
