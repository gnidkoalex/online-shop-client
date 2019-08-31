import axios from "axios";

let mainUrl = "http://localhost:2200/";





export const getProductsService = async () => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:2200/products")
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}

export const getCategoriesService = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${mainUrl}category`)
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}

export const getProductsByCategoryService = async (category) => {
    return new Promise((resolve, reject) => {
        axios.get(`${mainUrl}products/${category}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}
export const addToCartService = async (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${mainUrl}cart/addCartItem`, { data })
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}

export const userLoginService = async (data) => {

    return new Promise((resolve, reject) => {
        axios.post(`${mainUrl}users/login`, { data })
            .then((response) => {
                let customerId = response.data.userId
                axios.post(`${mainUrl}cart/findCartByUser`, { customerId })
                    .then((response2) => {
                        let currUser = {}
                        currUser.name = response.data.name
                        currUser.userId = response.data.userId
                        currUser._id = response.data._id
                        currUser.session = response.data.session
                        currUser.role=response.data.role

                        localStorage.setItem("session", currUser.session);
                        localStorage.setItem("user", JSON.stringify(currUser));


                        if (response2.data[0]) {
                            currUser.cartId = response2.data[0]._id

                            resolve(currUser);
                        } else {
                            axios.post(`${mainUrl}cart/create`, { customerId })
                                .then((response3) => {

                                    currUser.cartId = response3.data
                                    resolve(currUser);
                                })
                        }
                    })
            })
            .catch(err => {
                reject(err);
            });
    });

}
export const getCartItemsService = async (cartId) => {
    console.log(cartId)
    return new Promise((resolve, reject) => {
        axios.get(`${mainUrl}cart/${cartId.cartId}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}
export const delCartItemService = async (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${mainUrl}cart/deleteCartItem`, { data })
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}

export const verifySessionService = async (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${mainUrl}users/verify`, { data })
            .then((response) => {
                let currUser = {}
                currUser.name = response.data.name
                currUser.userId = response.data.userId
                currUser._id = response.data._id
                currUser.session = data.session
                currUser.role=response.data.role
                let customerId = response.data.userId

                axios.post(`${mainUrl}cart/findCartByUser`, { customerId })
                    .then((response2) => {

                        currUser.cartId = response2.data[0]._id
                        resolve(currUser);
                    })

            })
            .catch(err => {
                reject(err);

            });
    });

}
export const logOutService = async (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${mainUrl}users/logout`, { data })
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}
export const registerService = async (data) => {

    return new Promise((resolve, reject) => {
        axios.post(`${mainUrl}users/create`, { data })
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}
export const deleleAllCartitemsService = async (data) => {

    return new Promise((resolve, reject) => {
        axios.post(`${mainUrl}cart/deleteAllCartItems`, { data })
            .then((response) => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}

export const getProductToEditService = async (productId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${mainUrl}products/edit/${productId.productId}`)
            .then((response) => {

                resolve(response.data);
            })
            .catch(err => {
                reject(err);

            });
    });

}

export const updateProductService = async (data)=>{

    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:2200/products/update`, data.data, {})
        .then((response) => {
            alert("product successfully updated")
            resolve(response.data);
        })
        .catch(err => {
            reject(err);

        });
    });

}
export const addProductService = async (data)=>{

    return new Promise((resolve, reject) => {
        axios
        .post(`http://localhost:2200/products/add`, data.data, {})
        .then((response) => {
            alert("product added successfully ")
            resolve(response.data);
        })
        .catch(err => {
            reject(err);

        });
    });

}
export const orderService = async (data)=>{

    return new Promise((resolve, reject) => {
        axios
        .post(`http://localhost:2200/cart/order`, data.data, {})
        .then((response) => {

            resolve(response.data);
        })
        .catch(err => {
            reject(err);

        });
    });

}





