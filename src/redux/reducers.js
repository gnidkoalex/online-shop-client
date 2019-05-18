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

        case ACTIONS.GET_CATEGORIES_DONE:{
            let categories =action.categories;
           

            return{
                ...state,
                categories:categories,
            }
        }
        case ACTIONS.GET_PRODUCTS_BY_CATEGORY_DONE:{
            let productsByCategory =action.productsByCategory;
           

            return{
                ...state,
                productsByCategory:productsByCategory,
            }
        }
            
            
    
        default:
            return state;
    }
}