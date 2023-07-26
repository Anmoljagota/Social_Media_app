import React from 'react'

const Content = ({description}:{description:string}) => {
  return (
    <div  className='mt-3 w-[97%] m-auto text-base'>
      <p>{description}</p>
    </div>
  )
}

export default Content
