import React from "react";
import "./collections.css";
import Logo from "./Logo";
import { CartState } from "./ProductContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
const Collection=()=>{

     const {state:{products},dispatch}=CartState();
     const [keyword,setkey]=React.useState("");
     const[filteredProd,setfilter]=React.useState(products);
     const history=useHistory();
     const redirect=()=>{
          history.push("/cart")
      }
     let search=()=>{
         let items=products.filter(
              value=>{
                   let lowerCaseText=value.name.toLowerCase();
                   return lowerCaseText.includes(keyword.toLowerCase());
              }
         )
        if(items.length===0){
             alert("No items match your search");
             setfilter(products);
        }
        else{
            setfilter(items);
        }
      }

      let addToCart=(key)=>{
           dispatch({
                type:"ADD_TO_CART",
                payload:key
           }

           )
      }
     return(
          <div className="back">
                <div className="header">
                     <Logo/>
                     <div className="icn-btn"><button onClick={redirect}>Cart</button></div>
                </div>
                <div className="wrapper">
                    <div className="search-box">
                         <input type="text" className="search" placeholder="search" onChange={(event)=>{setkey(event.target.value)}}/>
                         <div className="search-btn" onClick={search}><FontAwesomeIcon icon={faSearch}/></div>
                    </div>
                </div>
                <div className="body-content">
                     <div className="grid-container">
                          { keyword==="" ?
                               products.map(key=>
                                   <div className="grid-item">
                                        <img src={key.image} alt="" className="card-img" key={key}/>
                                        <div key={key+5}>{key.name}</div>
                                        <div key={key+8}>{key.price}</div>
                                        <button className="cart-btn" onClick={()=>{addToCart(key)}}>Add to cart</button>
                                   </div>
                                   ): filteredProd.map(key=>
                                        <div className="grid-item">
                                        <img src={key.image} alt="" className="card-img" key={key}/>
                                        <div key={key+5}>{key.name}</div>
                                        <div key={key+8}>{key.price}</div>
                                        <button className="cart-btn" onClick={()=>{addToCart(key)}}>Add to cart</button>
                                   </div>
                                        )
                          }
                     </div>
                </div>
           </div>
)
     }
export default Collection