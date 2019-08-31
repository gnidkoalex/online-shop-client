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
import {logOutService} from "./services";
import {registerService} from "./services";
import {deleleAllCartitemsService} from "./services";
import {getProductToEditService} from "./services";
import {updateProductService} from "./services";
import {addProductService} from "./services";
import {orderService} from "./services";










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
function* logOut(action){
    try{
        const data =yield call(logOutService,action); // after the getProductsService "," and your payload
        yield put(allActions.logOutDone(data));
    }catch(ex){

    }
}
function* register(action){ 
    try{
        const data =yield call(registerService,action); // after the getProductsService "," and your payload
        yield put(allActions.registerDone(data));
    }catch(ex){

    }

}
function* deleleAllCartitems(action){
    try{
        const data =yield call(deleleAllCartitemsService,action); // after the getProductsService "," and your payload
        yield put(allActions.deleleAllCartitemsDone(data));
    }catch(ex){

    }
}
function* getProductToEdit(action){
    try{
        const data =yield call(getProductToEditService,action); // after the getProductsService "," and your payload
        yield put(allActions.getProductToEditDone(data));
    }catch(ex){

    }
}
function* updateProduct(action){
    try{
        const data =yield call(updateProductService,action); // after the getProductsService "," and your payload
        yield put(allActions.updateProductDone(data));
    }catch(ex){

    }
}
function* addProduct(action){
    try{
        const data =yield call(addProductService,action); // after the getProductsService "," and your payload
        yield put(allActions.addProductDone(data));
    }catch(ex){

    }
}
function* order(action){
    try{
        const data =yield call(orderService,action); // after the getProductsService "," and your payload
        yield put(allActions.orderDone(data));
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
function* LogOut(){
    yield takeEvery(ACTIONS.LOGOUT,logOut)

}
function* Register(){
    yield takeEvery(ACTIONS.REGISTER,register)

}
function* DeleleAllCartitems(){
    yield takeEvery(ACTIONS.DELETE_ALL_CARTITEMS,deleleAllCartitems)

}
function* GetProductToEdit(){
    yield takeEvery(ACTIONS.GET_PRODUCT_TO_DEIT,getProductToEdit)

}
function* UpdateProduct(){
    yield takeEvery(ACTIONS.UPDATE_PRODUCT,updateProduct)

}
function* AddProduct(){
    yield takeEvery(ACTIONS.ADD_PRODUCT,addProduct)

}
function* Order(){
    yield takeEvery(ACTIONS.ORDER,order)

}


function* rootSaga(){
    yield all([fork(GetProducts),fork(GetCategories),fork(GetProductsByCategory),fork(AddToCart),fork(UserLogin),fork(GetCartItems),fork(DelCartItem),fork(VerifySession),fork(LogOut),fork(Register),fork(DeleleAllCartitems),fork(GetProductToEdit),fork(UpdateProduct),fork(AddProduct),fork(Order)]);
}

export default rootSaga;