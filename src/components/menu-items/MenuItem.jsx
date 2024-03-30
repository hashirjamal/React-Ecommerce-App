import React from 'react'
import "./menu-item.scss"
export default function MenuItem({title,image,height}) {
  return (
    <div className={`menu-item ${height}`} >
      <div className="bg-img" style={{background:`url(${image})` , backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100%'}}></div>
        <div className='content' >
            <h1>{title}</h1>
            <span>Shop Now</span>
        </div>
    </div>
  )
}
