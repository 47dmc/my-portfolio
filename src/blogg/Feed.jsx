import React from 'react'
import Post from "./Post";
const Feed = ({posts}) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed