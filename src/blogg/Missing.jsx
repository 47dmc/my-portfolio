import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <main className="min-h-[80vh] px-6 sm:px-16 md:px-32 lg:px-48">
      <h2>Post Not Found</h2>
      <p>Well, that's dissapointing.</p>
      <p>
        <Link to="/">Visit our Home Page</Link>
      </p>
    </main>
  );
};

export default Missing;
