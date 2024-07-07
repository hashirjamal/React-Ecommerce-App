import React from 'react'
// import {ReactComponent as logo} from "./logo.svg"
import logo from "./logo.svg"
import "./header.scss"
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
export default function Header({currentUser,auth}) {
  let user = {...currentUser}
  // console.log(currentUser,"header")
  return (
    <div className='navbar'>
        <div className="logo">
            <a href="/">
       <img src={logo} alt="" />
            </a>
                
        </div>
        <div className="links">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            {(user.currentUser)
            ?
          <a href='/sign-in-sign-up' onClick={()=>signOut(auth)}>Sign Out </a>
            :
          <a href="/sign-in-sign-up">Sign In</a>
          
          }
        </div>
    </div>
  )
}
