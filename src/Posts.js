import React, { useState } from 'react'
import { VoteButton } from './VoteButton'
import { v4 as uuid } from 'uuid'

export const Posts = ({name, postText, depth}) => {
  const [postReplies, addReply]= useState([]);
  const [replyState, setReplyState] = useState(false);
  const [replyName, setName] = useState('');
  const [replyPostText, setPostText] = useState('');

  const addPost = () =>{
    if (!(replyName.length>0 && replyPostText.length>0)) {
      return
    }
    addReply([...postReplies, {
      name: replyName,
      postText: replyPostText,
      id: uuid()}])

    setName('');
    setPostText('');
    setReplyState(false);
  }

  const content = (
    <div>
      <VoteButton/>
      <div className="centertop">
        <h2>{name}</h2>
      </div>
      <div className="postRow">
        <h3>{postText}</h3>
      </div>
      <div className="is-right">
        {depth< 3 && postReplies.map(post => (
          <Posts depth={1+depth} key={post.id} {...post}/>
        ))}
      </div>
      <button onClick={() => setReplyState(!replyState)}>Reply</button>
      {replyState && (
        <div>
          <div className="replyForm">
            <label>
              <div className="row">
                <input className='li' type="text" placeholder="Name..." value={replyName} onChange={e => setName(e.target.value)} />
              </div>
              <div className="row">
                <textarea className='li' placeholder="Write a new post..." value={replyPostText} onChange={e => setPostText(e.target.value)}/>
              </div>
            </label>
            <div className="row">
              <button onClick={addPost}> Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
  return <h1 className="post">{content}</h1>
}