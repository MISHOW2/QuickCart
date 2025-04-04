import axios from "axios";

const url = "http://localhost:5000/api";

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
    const response = await axios.post(`${url}/addToCart`, { id: productId });
    if (response.data.success) {
      return {
        cart: response.data.cart,
        totalPrice: response.data.totalPrice, // Store the total price
      };
    }
    return { cart: [], totalPrice: 0 }; // Default values
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return { cart: [], totalPrice: 0 };
  }
};



export const removeItem = async (productId) => {
  try {
    const response = await axios.delete(`${url}/deleteCartItem`, {
      data: { id: productId }, // Send ID in request body
    });

    if (response.data.success) {
      return response.data.cart; // Return updated cart
    }

    console.error("Error removing item:", response.data.msg);
    return null;
  } catch (error) {
    console.error("Failed to delete item:", error);
    return null;
  }
};


export const editCartItemQty = async (productId, change) => {
  console.log("Updating quantity for:", productId, "Change:", change); // Debugging
  try {
    const response = await axios.put(`${url}/editCartItemQuantity`, {
      id: productId,
      change, // Ensure this is a number
    });

    if (response.data.success) {
      return response.data.cart;
    }

    console.error("Error updating quantity:", response.data.msg);
    return null;
  } catch (error) {
    console.error("Failed to update quantity:", error);
    return null;
  }
};


