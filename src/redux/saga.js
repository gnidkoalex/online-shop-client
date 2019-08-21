import {takeEvery, fork, call, put} from "redux-saga/effects";
import { all } from "redux-saga/effects";

import{getProductsService} from "./services";
import{getCategoriesService} from "./services";
import{getProductsByCategoryService} from "./services";
import{addToCartService} from "./services";
import {allActions} from "./index";
import {ACTIONS} from "./action.config";
import {userLoginService} from "./services";
import {getCartItemsService} from "./services";
import {delCartItemService} from "./services";
import {verifySessionService} from "./services";
// import { getCategories } from "./actions";

function* getProducts(){
    try{
        const products =yield call(getProductsService); // after the getProductsService "," and your payload
        yield put(allActions.getProductsDone(products));
    }catch(ex){

    }

}
function* getProductsByCategory(action){
    try{
        const productsByCategory =yield call(getProductsByCategoryService,action.categoryId); // after the getProductsService "," and your payload
        yield put(allActions.getProductsByCategoryDone(productsByCategory));
    }catch(ex){

    }

}

function* getCategories(){
    try{
        const categories =yield call(getCategoriesService); // after the getProductsService "," and your payload
        yield put(allActions.getCategoriesDone(categories));
    }catch(ex){

    }

}
function* addToCart(action){
    try{
        const productTocart =yield call(addToCartService,action); // after the getProductsService "," and your payload
        yield put(allActions.addToCartDone(productTocart));
    }catch(ex){

    }

}
function* userLogin(action){
    
    try{
        const user =yield call(userLoginService,action); // after the getProductsService "," and your payload
        yield put(allActions.userLoginDone(user));
    }catch(ex){
        alert("user name and password doenst match")

    }

}
function* getCartItems(action){
    try{
        const cartItems =yield call(getCartItemsService,action); // after the getProductsService "," and your payload
        yield put(allActions.getCartItemsDone(cartItems));
    }catch(ex){

    }

}
function* delCartItem(action){
    try{
        const cartItems =yield call(delCartItemService,action); // after the getProductsService "," and your payload
        yield put(allActions.delCartItemDone(cartItems));
    }catch(ex){

    }

}
function* verifySession(action){
    try{
        const user =yield call(verifySessionService,action); // after the getProductsService "," and your payload
        yield put(allActions.userLoginDone(user));
    }catch(ex){

    }

}

function* GetCategories(){
    yield takeEvery(ACTIONS.GET_CATEGORIES,getCategories)

}

function* GetProducts(){
    yield takeEvery(ACTIONS.GET_PRODUCTS,getProducts)

}
function* GetProductsByCategory(){
    yield takeEvery(ACTIONS.GET_PRODUCTS_BY_CATEGORY,getProductsByCategory)
    

}
function* AddToCart(){
    yield takeEvery(ACTIONS.ADD_TO_CART,addToCart)
    

}
function* UserLogin(){
    yield takeEvery(ACTIONS.USER_LOGIN,userLogin)
    

}
function* GetCartItems(){
    yield takeEvery(ACTIONS.GET_CART_ITEMS,getCartItems)

}
function* DelCartItem(){
    yield takeEvery(ACTIONS.DEL_CART_ITEM,delCartItem)

}
function* VerifySession(){
    yield takeEvery(ACTIONS.VERIFY_SESSION,verifySession)

}

function* rootSaga(){
    yield all([fork(GetProducts),fork(GetCategories),fork(GetProductsByCategory),fork(AddToCart),fork(UserLogin),fork(GetCartItems),fork(DelCartItem),fork(VerifySession)]);
}

export default rootSaga;