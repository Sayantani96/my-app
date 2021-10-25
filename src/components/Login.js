import React from 'react'
import { useHistory } from 'react-router';
import './Login.css';
const Login=()=>{
    let check=false;
    const [values,setValues]=React.useState({
        Name:'',
        password:''
    })
    const history=useHistory();
    const redirect=()=>{
        history.push('/collection');
    }
    const checkName=(value)=>{
        if(localStorage.getItem("name")===value){
            check=true;
            setValues((values)=>({
                ...values,
                Name:value
            }))
        }
        else check=false;
        console.log(check);
    }
    const checkPassword=(value)=>{
        if(localStorage.getItem("password")===value){
            check=true;
            setValues((values)=>({
                ...values,
                password:value
            }))
        }
        else check=false;
        console.log(check);
    }
    const Login=()=>{
        console.log(values.Name.length);
        console.log(values.password.length);
        if(values.Name===localStorage.getItem("name") && values.password===localStorage.getItem("password")){
            redirect();
        }
        else {
            alert('You need to fill all the fields properly');
        }
    }
    return(
           <div className="spacer layer">
               <div className="login">
               <h3>Login</h3>
               <div>
            <input placeholder="Name" className="form-field" onChange={e=>checkName(e.target.value)}/>
            </div>
           <div>
           <input placeholder="Password" className="form-field" onChange={e=>checkPassword(e.target.value)}/>
               </div>
               <button className="login-btn" type="login" onClick={Login} >Login</button>   
           </div>
       </div>
    )
}
export default Login;