import React, { useState } from 'react'
import FormComponent from "../form-component/FormComponent"
import "./sign-up.scss"
import "../sign-in/sign-in.scss"
// import firebase from "firebase/app"
import {getAuth,createUserWithEmailAndPassword, updateCurrentUser, updateProfile} from "firebase/auth"
import {auth,addDisplayName } from "../../firebase/firebase.utils"
import Button from '../button/Button'
import { createUserProfileDocument } from '../../firebase/firebase.utils'
export default function SignUp() {

    let handleSubmit = async (e)=>{
        e.preventDefault();
        // let auth = getAuth();
        let {email,password,confirmPassword,displayName} = signUpInfo;
        if(password===confirmPassword){
          await createUserWithEmailAndPassword(auth,email,password)
          .then(async (user)=>{
            user.displayName= displayName
            console.log(auth.currentUser,"hello");
            await addDisplayName(signUpInfo,auth.currentUser.uid);
      
          })
          .catch((err)=>{
            console.log(err.message,err)
          })

        }
        else{
          alert("Passwords donot match")
        }
        
    }


    let handleChange = (e)=>{
        let {name,value} = e.target;
        setSignUpInfo({
            ...signUpInfo,
            [name] : value
    })
    }

    let [signUpInfo,setSignUpInfo] = useState({
        displayName:'',
        email:'',
        password:"",
        confirmPassword: ""
      })
  return (
    <div className='sign-in-div'>
        
        <span className='tag title' >I donot have an account</span>
        <span className='tag'>Sign up with your email and password</span>
        <form className='form-box' onSubmit={(e)=>handleSubmit(e)}>
            
           
        <FormComponent type="text" label="Display Name" name="displayName" id="displayName" value={signUpInfo.displayName} onChange ={(e)=>handleChange(e)} />
        <FormComponent type="email" label="Email" name="email" id="sign-up-email" value={signUpInfo.email} onChange ={(e)=>handleChange(e)} />
        <FormComponent type="password" label="Password" name="password" id="sign-up-password" value={signUpInfo.password} onChange ={(e)=>handleChange(e)} />
        <FormComponent type="password" label="Confirm Password" name="confirmPassword" id="confirmPassword" value={signUpInfo.confirmPassword} onChange ={(e)=>handleChange(e)} />

        <Button type="submit">Sign Up</Button>
</form>
    </div>
  )
}
