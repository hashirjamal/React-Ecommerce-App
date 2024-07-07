import React, { useState } from 'react'
import FormComponent from '../form-component/FormComponent';
import "./sign-in.scss";
import Button from '../button/Button';
import { auth,signinWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
 

export default function SignIn() {
    let [loginCredentials,setLoginCredentials] = useState(
        {
            email: "",
            password: ""
        }
    )

    let handleSubmit = (event)=>{

        event.preventDefault();

        signInWithEmailAndPassword(auth,loginCredentials.email,loginCredentials.password)
        .then(res=>console.log(res,"res"))
        .catch(err=>console.log(err.message))


        setLoginCredentials({
            email: "",
            password: ""
        })
    }

    let handleChange = (e)=>{
        let {name,value } = e.target;
        setLoginCredentials({
            ...loginCredentials,
            [name] : value
        });
    }
  return (
    <div className='sign-in-div'>

        <span className='tag title' >I already have an account</span>
        <span className='tag'>Sign in with your email and password</span>
        <form className='form-box' onSubmit={(e)=>handleSubmit(e)}>
            
           

            <FormComponent handleChange={handleChange} type="email" name="email" id='email' value={loginCredentials.email} label="Email"  />


            <FormComponent handleChange={handleChange} type="password" name="password" id='password' value={loginCredentials.password} label="Password"  />


    <div className="btnCont">   
            <Button type="submit" >Log in</Button>
            <Button  onClick ={signinWithGoogle} isGoogle>Log in with Google</Button>
    </div>
        </form>

    </div>
  )
}
