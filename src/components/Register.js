import React from 'react'
import "./register.css";
import validator from 'validator';
import { useHistory } from 'react-router';
const Register=()=>{
    let inputStyle;
    const [values, setValues] = React.useState({
        Name: '',
        email: '',
        password:''
    });
    const[errorMessage,setMessage]=React.useState({
        messagePassword:'',
        messageEmail:'',
        check:true,
    });
    const history=useHistory();
    const redirect=()=>{
        history.push("/login");
    }
    const validatePassword=(value)=>{
       if(validator.isStrongPassword(value,{
        minLength:8,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    })){
            setMessage((values)=>({
                ...values,
                messagePassword:"Password is strong!",
                check:true
            }));
           setValues((values)=>({
            ...values,
            password:value
           }))
    } 
    else{
        setMessage((values)=>({
            ...values,
            messagePassword:"Weak Password!",
            check:false
        }));  
    }
    }
    const validateEmail=(value)=>{
        if(!validator.isEmail(value)){
            setMessage((values)=>({
                ...values,
                messageEmail:"Enter Valid Email",
                check:false 
            }));
        }
        else{
            setMessage((values)=>({
                ...values,
                messageEmail:'',
                check:true
            })); 
           setValues((values)=>({
               ...values,
               email:value
           }))
        }
    }
    let Submit=()=>{
        if(values.name===''||values.email===''||values.password===''||errorMessage.check===false){
            alert("All the fields must be filled properly")
            console.log(errorMessage.check);
        }
        else{
            localStorage.setItem("name",values.Name);
            localStorage.setItem("email",values.email);
            localStorage.setItem("password",values.password);
            redirect();
        }
    }
    errorMessage.check?inputStyle={color:"green"}:inputStyle={color:"red"};
    return(
        <div className="container">
            
         <div className="reg">
        
            <div className="written">
            <h4 className="signup">Sign Up</h4>
            <div>
            <input placeholder="Name" className="form-field" onChange={e=>{setValues((values)=>({...values,Name:e.target.value}))}}/>
            </div>
           <div>
           <input placeholder="Email" className="form-field" onChange={e=>validateEmail(e.target.value)}/>
           <div style={inputStyle}>{errorMessage.messageEmail}</div>
           </div>
           <div>
           <input placeholder="Password" className="form-field" onChange={e=>validatePassword(e.target.value)}/>
           <div style={inputStyle}>{errorMessage.messagePassword}</div>
           </div>
           <button className="submit" type="submit" onClick={Submit}>Submit</button>  
            </div>
            <div className="colored"></div>
         </div>
     </div>
    )
     
};
export default Register;