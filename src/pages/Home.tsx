import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Minha home!!!</h1>
      <div>
        <Link to="/posts">Meus posts</Link>
      </div>
    </>
  );
};

export default HomePage;
