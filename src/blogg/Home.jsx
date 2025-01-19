import React from 'react'
import Feed from "./Feed";
const Home = ({posts}) => {
  return (
    <main className="flex pb-3 pt-3 min-h-[80vh] px-6 sm:px-16 md:px-32 lg:px-48">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
         <p className="">
            No posts to display. <br />
            *sorry the blog posts is not displayed if you are seeing this website on the browser since i haven't hosted the POST-DATA for the API(Application Programming Interface)*
         </p>
      )}
    </main>
  )
}

export default Home