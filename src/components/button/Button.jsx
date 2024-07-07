import React from 'react'
import "./button.scss"
export default function Button({children,isGoogle,...other}) {
  // console.log(children,isGoogle)
  return (
   <button className={ `${(isGoogle)?"google-btn":""}  custom-btn`} {...other}>
{children}
   </button>
  )
}
