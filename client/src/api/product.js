import axios from "axios";

const url = "https://server-nine-beta-37.vercel.app/api/products";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data); 
    return response.data; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
};

export const getProductById = async () =>{

}

export const addToCart = async () =>{
  
}
export const editCartItenQuantityById = async () =>{
  
}

export const deleteCartItemById = async () =>{
  
}

export const removeCartItems = async () =>{
  
}



