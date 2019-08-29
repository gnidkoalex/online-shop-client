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
        case ACTIONS.GET_PRODUCTS_BY_CATEGORY_DONE:{
            let productsByCategory =action.productsByCategory;
           

            return{
                ...state,
                productsByCategory:productsByCategory,
            }
        }
        case ACTIONS.ADD_TO_CART_DONE:{
            let product =action.product;
           

            return{
                ...state,
                cart:product,
            }
        }
        case ACTIONS.USER_LOGIN_DONE:{
            let logedInUser =action.data;
           

            return{
                ...state,
                logedInUser:logedInUser,
            }
        }
        case ACTIONS.GET_CART_ITEMS_DONE:{
            let cartItems =action.data;
           

            return{
                ...state,
                cartItems:cartItems,
            }
        }
        case ACTIONS.LOGOUT_DONE:{
            localStorage.removeItem("session")
            localStorage.removeItem("user")
            
            return{
                
            }
        }
        case ACTIONS.REGISTER_DONE:{
            return{
                
            }
        }
        case ACTIONS.DELETE_ALL_CARTITEMS_DONE:{
            
           

            return{
                ...state,
                cartItems:[],
            }
        }
        case ACTIONS.GET_PRODUCT_TO_DEIT_DONE:{
            let productToEdit=action.data
            
           

            return{
                ...state,
                productToEdit:productToEdit
            }
        }
            
            
    
        default:
            return state;
    }
}