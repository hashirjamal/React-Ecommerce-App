import React, { useState } from 'react'
import SHOP_DATA from './prod-data'
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

export default function ShopPage() {
    let [prodData, setProdData ]= useState(SHOP_DATA);
  return (
    <div className='shop-page-cont'>
       { prodData.map(({id,...otherKeys},i)=>{
            // console.log(otherKeys)
        return <div className='preview-container' key={id}>
            <h2>{otherKeys.title}</h2>
            <PreviewCollection items={otherKeys.items} />
            </div>
        })
}
    </div>
  )
}
