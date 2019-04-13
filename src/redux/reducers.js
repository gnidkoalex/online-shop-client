import {ACTIONS} from "./action.config";

export default function reducers (state={},action){
    switch (action.type) {
        case ACTIONS.INIT:{

            return{
                //somting to anolize
            }
        }
        case ACTIONS.GET_PRODUCTS_DONE:{
            let products =action.products;

            return{
                ...state,
                products:products,
            }
        }
            
            
    
        default:
            return state;
    }
}