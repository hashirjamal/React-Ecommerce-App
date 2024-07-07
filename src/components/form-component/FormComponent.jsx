import React from 'react'
import "./form-component.scss"
import Button from '../button/Button'


export default function FormComponent({handleChange,...allProps}) {
  return (
    <div className='form-comp'>

    {(allProps.label)&& <label className={`inp-label ${(allProps.value.length)?"shrink": ""}`}>{allProps.label}</label> }


<input className="inp" onChange={handleChange} {...allProps} required   />


    </div>
  )
}
