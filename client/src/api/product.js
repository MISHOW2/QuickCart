import axios from "axios";

const url = "https://quick-cart-api-eta.vercel.app/api";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${url}/products`);
    console.log("Fetched Products:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const addToCart = async (productId) => {
  try {
    const response = await axios.post(
      `${url}/addToCart`,
      { id: productId },
    );
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return null;
  }
};


