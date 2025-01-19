import React from 'react'
import {Link} from "react-router-dom";
const Post = ({post}) => {
  return (
    <article className="border border-blue-900 bg-blue-900 relative group px-8 max-sm:px-4">
        <Link to={`/blogg/post/${post.id}`}>
        <h2 className="text-2xl text-blue-100">{post.title}</h2>
        <p className="text-xs text-blue-300">{post.datetime}</p>
        </Link>
        <span className="absolute right-1/2 bottom-1/2 text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to read the Article
        </span>
        <p className="mt-3">
            {
                (post.body).length <= 25
                ? post.body
                : `${(post.body).slice(0, 25)}...`
            }
        </p>
    </article>
  )
}

export default Post