import React, { useState } from 'react'
// // import "../menu-items/MenuItem.jsx"
// import MenuItem from '../menu-items/MenuItem.jsx'
import MenuItem from '../menu-items/MenuItem.jsx'
import "./directory.scss"
export default function Directory() {

    let [menuData,setMenuData] = useState([
        {
            title:"HATS",
            image :"https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            title:"JACKETS",
            image :"https://i.ibb.co/px2tCc3/jackets.png"
            
        },
        {
            title:"SNEAKERS",
            image :"https://i.ibb.co/0jqHpnp/sneakers.png"
            
        },
        {
            title:"WOMEN",
            image :"https://i.ibb.co/GCCdy8t/womens.png",
            height: "height"
            
        },
        {
            title:"MEN",
            image :"https://i.ibb.co/R70vBrQ/men.png",
            height: "height"

        }
    ])

  return (
    <div className='directory-cont'>
        {
            menuData.map(({title,image,height},i)=>{
                return <MenuItem key={i} title={title} image={image} height={height}  />
            })
        }
        
       
        
    </div>
  )
}
