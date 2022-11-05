import React from 'react'
import Post from './Post'
import data from '../DB.json'
function feed() {
  return (
    <div>
        {data.map((item,index)=>{
            return(
                <div key={index} className="pb-10">
                 <Post user={item.name} content={item.content} />
                </div>
            )
       
        })}
      
    </div>
  )
}

export default feed