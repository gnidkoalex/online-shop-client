import axios from "axios";



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