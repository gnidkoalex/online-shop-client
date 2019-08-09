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

export const addToCart = (id, amount) => {
    let currProduct = {}
    currProduct.id = id;
    currProduct.amount = amount;
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
console.log(password)
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
