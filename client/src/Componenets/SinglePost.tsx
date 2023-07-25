import React from 'react'
import PostProfile from './PostProfile'
import PostImage from './PostImage'
import Like_Comments from './Like_Comments'

const SinglePost = () => {
  return (
    <section className='min-h-screen bg-white'>
      <PostProfile/>
      <PostImage/>
      <Like_Comments/>
    </section>
  )
}

export default SinglePost
