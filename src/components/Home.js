import React from 'react';
import Logo from "./Logo";
import NavigationItem from "./Navigation";
import './Home.css';
import { useHistory } from "react-router-dom";

const Home=()=>{
    
    // const items=["Collections","About","Register","Login"];
    const history=useHistory();
    const redirect=()=>{
        history.push("/collection")
    }
    const items = [{
        path:"/Register",
        name:"Register"
},
{
    path:"/collection",
    name:"Collections"
}]
return(
    <div class="main">
        <div className="header-content">
        <Logo/>
        <nav>
        <NavigationItem items={items}/>
        </nav>
    </div>
    <div className="content">
        <img src="https://i.pinimg.com/originals/91/95/8f/91958fb09638f15a97a368a89a371ad0.jpg" alt="products" className="content-image"/>
        <div>
        Filters is great,but Skincare is better
        <div><button onClick={redirect} className="btn">Start your skincare journey</button></div>
        <div className="sub-content">Existing user?Login</div>
        <p className="sub-content2">Free Shipping | COD Available | 20% Cashback | Secure Transactions</p>
        </div>
    </div>
   
    </div>
    
    
)
}

export default Home;