import React, { useState } from 'react'
import { Posts } from './Posts'
import { v4 as uuid } from 'uuid'

export const App = () => {
  const [posts, setPosts] = useState([])
  const [name, setName] = useState('')
  const [postText, setPostText] = useState('')

  const addPost = () => {
    if (!(name.length > 0 && postText.length > 0)) {
      return
    }
    setPosts([...posts, {
      name: name,
      postText: postText,
      id: uuid()
    }])

    setName('')
    setPostText('')
  }
  return (
    <div>
      <div className="center">
        <label>
          <div className="row">
            <input className='li' type="text" placeholder="Name..." value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="row">
            <textarea className='li' placeholder="Write a new post..." value={postText} onChange={e => setPostText(e.target.value)}/>
          </div>
        </label>
        <div className="row">
          <button onClick={addPost}> Submit</button>
        </div>
      </div>
      <ul>
        {posts.map(post => (
          <Posts depth={1} key={post.id} {...post}/>
        ))}
      </ul>
    </div>
  )
}
