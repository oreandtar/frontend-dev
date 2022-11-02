import React from 'react';
import DB from '../DB.json';
import '../App.css';


const UserInfor = () => {
  return (
    <div className='content'>

      {
        DB.map(item => (
          <div className='content-inner'>
            <h2>{item.name}</h2>
            <p>{item.content}</p>
          </div>

        )
        )
      }

    </div>
  )
}

export default UserInfor