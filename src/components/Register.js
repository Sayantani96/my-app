import React from 'react'
import "./register.css";
const Register=()=>{
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password:''
    });
    return(
        <div className="container">
            
         <div className="reg">
        
            <div className="written">
            <h4>Sign Up</h4>
            </div>
            <div className="colored"></div>
         </div>
     </div>
    )
     
};
export default Register;