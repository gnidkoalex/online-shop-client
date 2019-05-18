import {takeEvery, fork, call, put} from "redux-saga/effects";
import { all } from "redux-saga/effects";

import{getProductsService} from "./services";
import{getCategoriesService} from "./services";
import{getProductsByCategoryService} from "./services";
import {allActions} from "./index";
import {ACTIONS} from "./action.config";
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

function* GetCategories(){
    yield takeEvery(ACTIONS.GET_CATEGORIES,getCategories)

}

function* GetProducts(){
    yield takeEvery(ACTIONS.GET_PRODUCTS,getProducts)

}
function* GetProductsByCategory(){
    yield takeEvery(ACTIONS.GET_PRODUCTS_BY_CATEGORY,getProductsByCategory)
    

}

function* rootSaga(){
    yield all([fork(GetProducts),fork(GetCategories),fork(GetProductsByCategory)]);
}

export default rootSaga;