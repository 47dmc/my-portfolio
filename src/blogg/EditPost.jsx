import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="flex flex-col justify-start items-center min-h-[80vh] px-6 sm:px-16 md:px-32 lg:px-48 gap-[4vh]">
      {editTitle && (
        <>
          <h1 className="text-blue-300 font-bold text-3xl mt-[8vh]">EDIT POST</h1>
          <form
            className="flex flex-col items-center max-sm:w-[90%] sm:w-[80%] md:w-[80%] lg:w-[50%] text-black gap-[4vh]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="border-0 focus:outline-none focus:ring-0 rounded-md bg-blue-200 pl-2 text-md w-full text-black h-[5vh]"
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              className="border-0 focus:outline-none focus:ring-0 rounded-md bg-blue-200 pl-2 text-md w-full text-black h-[20vh]"
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button className="text-lg px-2 rounded-xl bg-blue-300 text-black hover:text-gray-700" type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && 
                <>
                  <h2>Post Not Found</h2>
                  <p>Well, that's dissapointing.</p>
                  <p>
                    <Link to="/">Visit our Home Page</Link>
                  </p>
                </>
              }
    </main>
  );
};

export default EditPost;
