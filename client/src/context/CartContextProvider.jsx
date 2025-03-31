import { useContext,useState } from "react";
import CartContext from "./cartContext";  

function CartContextProvider({children}) {

  const [cart,setCart]  = useState([])
   
  return (
    <CartContext.Provider value={{cart,setCart}} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
