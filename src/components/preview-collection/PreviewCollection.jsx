import React from 'react'
import CollectionItem from '../collection-items/CollectionItem'
import "./preview-collection.scss"
export default function PreviewCollection({items}) {
    // console.log(items,"h")
  return (
    <div className='collection-box'>{
        items.filter((v,i)=>i<4)
        .map(({id,...others})=>{
            return (
             <CollectionItem key={id} {...others} />
            )
        })
    }
    </div>
  )
}
