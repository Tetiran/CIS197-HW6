import React, { useState } from 'react'

export const VoteButton = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='vote'>
      <img src="https://i.imgur.com/EFqRbev.png" style={{ height: 50 }} onClick={() => setCount(count + 1)} />
      <h1>{count}</h1>
      <img src="https://i.imgur.com/dF2W1e3.jpg" style={{ height: 50 }} onClick={() => setCount(count - 1)} />
    </div>
  )
}
