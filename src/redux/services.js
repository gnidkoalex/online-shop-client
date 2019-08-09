import axios from "axios";

let mainUrl="http://localhost:2200/";





export const getProductsService = async ()=>{
    return new Promise ((resolve, reject)=>{
        axios.get("http://localhost:2200/products")
        .then((response)=>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);

        });
    });

}

export const getCategoriesService = async ()=>{
    return new Promise ((resolve, reject)=>{
        axios.get(`${mainUrl}category`)
        .then((response)=>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);

        });
    });

}

export const getProductsByCategoryService = async (category)=>{
    return new Promise ((resolve, reject)=>{
        axios.get(`${mainUrl}products/${category}`)
        .then((response)=>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);

        });
    });

}
export const addToCartService = async (product)=>{
    return product
    // return new Promise ((resolve, reject)=>{
    //     axios.get(`${mainUrl}products/${category}`)
    //     .then((response)=>{
    //         resolve(response.data);
    //     })
    //     .catch(err =>{
    //         reject(err);

    //     });
    // });

}

export const userLoginService = async (data)=>{
    
    return new Promise ((resolve, reject)=>{
        axios.post(`${mainUrl}users/login`,{data})
        .then((response)=>{
            console.log(response)
            resolve(response.data);
        })
        .catch(err =>{
            
            reject(err);

        });
    });

}
