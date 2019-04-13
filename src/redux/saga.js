import {takeEvery, fork, call, put} from "redux-saga/effects";
import { all } from "redux-saga/effects";

import{getProductsService} from "./services";
import {allActions} from "./index";
import {ACTIONS} from "./action.config";

function* getProducts(){
    try{
        const products =yield call(getProductsService); // after the getProductsService "," and your payload
        yield put(allActions.getProductsDone(products));
    }catch(ex){

    }

}

function* GetProducts(){
    yield takeEvery(ACTIONS.GET_PRODUCTS,getProducts)

}

function* rootSaga(){
    yield all([fork(GetProducts)]);
}

export default rootSaga;