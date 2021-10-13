import React, { useState } from 'react'
import '../css/Post.css'

const fetchData = () => new Promise((_, reject)=>{
  setTimeout(()=>{
    reject('faild to get data')
  }, 2000)
})

export function Post(){
  const [postData, setPostData] = useState({
    reqStatus: 'idle',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis voluptas quis possimus reiciendis ducimus ab est quo nisi hic cumque officia dicta magni harum, ipsa accusantium eum culpa vel!...',
    error: null
  })
  const { reqStatus, content, error } = postData

  function clickHandler(){
    setPostData(prev => ({...prev, reqStatus: 'pending'}))
    fetchData()
      .then((res)=>{
        setPostData(prev => ({
          ...prev,
          reqStatus: 'successed',
          content: res.data
         }))
      })
      .catch(error => {
        setPostData(prev => ({
          ...prev,
          reqStatus: 'failed',
          error
         }))
      })
  }

  if(reqStatus === 'failed'){
    throw error
  }

  return(
    <div className='post-container'>
      <h2>How to use Error boundary ?</h2>
      <p>
        { reqStatus === 'pending' ?  'Loading....' : content }
      </p>
      <button onClick={clickHandler}>See more</button>
    </div>
  )
}

export default Post
