import React from 'react'
import Header from './UserMessages/Header'


const Messages = () => {
  return (
    <div className='w-[27%] h-[100vh] bg-white sticky top-20'>
     <React.Fragment>
      <Header/>
     </React.Fragment>
     <hr />
     <input type="text" placeholder='Search messages' className='bg-[#eef3f8] p-1 w-[90%] mt-[0.8rem] mr-[1.2rem] mb-[0.8rem] ml-[1.2rem]'/>
    </div>
  )
}

export default Messages
