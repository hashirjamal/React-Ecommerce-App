import React from 'react'

export default function PreviewCollection({items}) {
    // console.log(items,"h")
  return (
    <div>{
        items.filter((v,i)=>i<4)
        .map(({id,...others})=>{
            return (
              <div key={id}> {others.name}</div>
            )
        })
    }
    </div>
  )
}
