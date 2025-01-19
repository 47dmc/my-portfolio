import React from "react";
import { useParams, Link } from "react-router-dom";
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="min-h-[80vh] px-6 sm:px-16 md:px-32 lg:px-48">
      <article className="bg-blue-900 mt-[4vh] px-8 max-sm:px-4">
        {post && (
          <div className="">
            <h2 className="text-2xl text-blue-100">{post.title}</h2>
            <p className="text-xs text-blue-300 mb-3">{post.datetime}</p>
            <p className="text-md text-blue-100">{post.body}</p>
            <div className="gap-6 flex">
              <div>
                <Link
                  className="inline-block text-lg px-2 rounded-xl bg-blue-300 text-black hover:text-gray-700 h-[5vh] flex justify-center items-center"
                  to={`/blogg/edit/${post.id}`}
                >
                  Edit Post
                </Link>
              </div>
              <button
                className="inline-block text-lg px-2 rounded-xl bg-blue-300 text-black hover:text-gray-700"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>
            </div>
          </div>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's dissapointing.</p>
            <p>
              <Link to="/blogg">Visit our Home Page</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
