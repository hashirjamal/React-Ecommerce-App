import React, { useState } from 'react'
import "./sign-in-page.scss"
import SignIn from '../../components/sign-in/SignIn.jsx'
import SignUp from '../../components/sign-up/SignUp.jsx'

export default function SignInPage(props) {
  console.log(props,"props");
  return (
    <div className='sign-in-page'>
        <SignIn />
        <SignUp />
    </div>
  )
}
