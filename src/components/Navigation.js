import React from 'react';
import { NavLink,BrowserRouter} from "react-router-dom";
import "./Navigation.css";
const NavigationItem=(props)=>{
   const items=props.items;
return(
    
        items.map((item)=>
        <BrowserRouter>
        <NavLink className="item" to={item.path}>
            {item.name}
        </NavLink>
   </BrowserRouter> 
)
)
}
export default NavigationItem;