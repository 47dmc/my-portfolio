import React from 'react'

const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
  return (
    <main className="flex flex-col justify-start items-center min-h-[80vh] px-6 sm:px-16 md:px-32 lg:px-48 gap-[4vh]">
      <h1 className="text-blue-300 font-bold text-3xl mt-[8vh]">CREATE NEW POST</h1>
      <form className="flex flex-col items-center  max-sm:w-[90%] sm:w-[80%] md:w-[80%] lg:w-[50%] text-black gap-[4vh]" onSubmit={handleSubmit}>
        <input 
        className="border-0 focus:outline-none focus:ring-0 rounded-md bg-blue-200 pl-2 text-md w-full text-black h-[5vh]"
         id="postTitle"
         type="text"
         placeholder='Type Title...'
         required
         value={postTitle}
         onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          id="postBody"
          required
          className="border-0 focus:outline-none focus:ring-0 rounded-md bg-blue-200 pl-2 text-md w-full text-black h-[20vh]"
          placeholder='Write your article here...'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className="text-lg px-2 rounded-xl bg-blue-300 text-black hover:text-gray-700" type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost