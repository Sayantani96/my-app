import React,{createContext} from 'react';
import { reducer } from './reducer';
import faker from "faker";
const Cart=createContext();
faker.seed(26);
const ProductContext = ({children}) => {
    const products=[...Array(27)].map(()=>
        (
            {
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            image:faker.random.image()
        }
        )
       )
       const [state,dispatch]=React.useReducer(reducer,{
        products:products,
        cart:[],
        qty:0
    });
    return (
           <Cart.Provider value={{state,dispatch}}>
               {children}
               </Cart.Provider> 
    )
}
export default ProductContext

export const CartState=()=>{
    return React.useContext(Cart);
}