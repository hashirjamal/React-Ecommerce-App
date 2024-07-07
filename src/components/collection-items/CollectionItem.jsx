import React from 'react'
import "./collection-item.scss"
export default function CollectionItem({name,price,imageUrl}) {
    
  return (
    <div className="itemOuter">
        <div className="bg-img"
        style={{background:`url(${imageUrl})`, backgroundPosition:'center', backgroundSize:'cover', width: '100%', height: '100%'}}
        >
            </div>
        <div className="itemFooter" >
            <span>{name}</span>
            <span>${price    }</span>
        </div>
    </div>
  )
}
