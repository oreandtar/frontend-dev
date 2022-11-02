import React from 'react';
import DB from './DB.json'

function data() {
  return (


    <div>data
      {
        DB.map(item => (
          <p>
            {item.name}
            {item.content}
          </p>
        )
        )
      }
    </div>

  )
}

export default data
