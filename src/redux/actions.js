import { ACTIONS } from "./action.config";

export const init = () => {
    return {
        type: ACTIONS.INIT
    };
};

export const getProducts = () => {
    return {
        type: ACTIONS.GET_PRODUCTS,
    }
}

export const getCategories = () => {
    return {
        type: ACTIONS.GET_CATEGORIES,
    }
}
export const getCategoriesDone = (categories) => {
    return {
        type: ACTIONS.GET_CATEGORIES_DONE,
        categories
    }
}
export const getProductsDone = (products) => {
    return {
        type: ACTIONS.GET_PRODUCTS_DONE,
        products
    }
}

export const getProductsByCategory = (category) => {
    let categoryId = category._id
    return {
        type: ACTIONS.GET_PRODUCTS_BY_CATEGORY,
        categoryId

    }
}
export const getProductsByCategoryDone = (productsByCategory) => {
    return {
        type: ACTIONS.GET_PRODUCTS_BY_CATEGORY_DONE,
        productsByCategory
    }
}

export const addToCart = (productId, amount,cartId) => {
    let currProduct = {}
    currProduct.productId = productId;
    currProduct.amount = amount;
    currProduct.cartId=cartId;
    return {
        type: ACTIONS.ADD_TO_CART,
        currProduct


    }
}
export const addToCartDone = (product) => {
    return {
        type: ACTIONS.ADD_TO_CART_DONE,
        product
    }
}

export const userLogin = (userName,password) => {
    let user = {}
    user.userName = userName;
    user.password = password;
    return {
        type: ACTIONS.USER_LOGIN,
        user
    }
}
export const userLoginDone = (data) => {
    return {
        type: ACTIONS.USER_LOGIN_DONE,
        data
    }
}

export const getCartItems = (cartId) => {
    return {
        type: ACTIONS.GET_CART_ITEMS,
        cartId
    }
}
export const getCartItemsDone = (data) => {
    return {
        type: ACTIONS.GET_CART_ITEMS_DONE,
        data
    }
}

export const delCartItem = (cartId,productId) => {
    let data={};
    data.cartId=cartId
    data.productId=productId
    return {
        type: ACTIONS.DEL_CART_ITEM,
        data
    }
}
export const delCartItemDone = (data) => {
    return {
        type: ACTIONS.DEL_CART_ITEM_DONE,
        data
    }
}
export const verifySession=(session)=>{
    return{
        type:ACTIONS.VERIFY_SESSION,
        session
    }
}
export const logOut=(session)=>{
    return{
        type:ACTIONS.LOGOUT,
        session
    }
}
export const logOutDone = (data) => {
    return {
        type: ACTIONS.LOGOUT_DONE,
        data
    }
}
export const register=(user)=>{
    return{
        type:ACTIONS.REGISTER,
        user
    }
}
export const registerDone = (data) => {
    return {
        type: ACTIONS.REGISTER_DONE,
        data
    }
}
export const deleteAllCartitems=(cartId)=>{
    return{
        type:ACTIONS.DELETE_ALL_CARTITEMS,
        cartId
    }
}
export const deleteAllCartitemsDone = (data) => {
    return {
        type: ACTIONS.DELETE_ALL_CARTITEMS_DONE,
        data
    }
}
export const getProductToEdit=(productId)=>{
    return{
        type:ACTIONS.GET_PRODUCT_TO_DEIT,
        productId
    }
}
export const getProductToEditDone = (data) => {
    return {
        type: ACTIONS.GET_PRODUCT_TO_DEIT_DONE,
        data
    }
}
export const updateProduct=(data)=>{
    return{
        type:ACTIONS.UPDATE_PRODUCT,
        data
    }
}
export const updataProductDone = (data) => {
    return {
        type: ACTIONS.UPDATE_PRODUCT_DONE,
        data
    }
}
export const addProduct=(data)=>{
    return{
        type:ACTIONS.ADD_PRODUCT,
        data
    }
}
export const addProductDone = (data) => {
    
    return {
        type: ACTIONS.ADD_PRODUCT_DONE,
        data
    }
}
export const order=(data)=>{
    return{
        type:ACTIONS.ORDER,
        data
    }
}
export const orderDone = (data) => {
    
    return {
        type: ACTIONS.ORDER_DONE,
        data
    }
}

