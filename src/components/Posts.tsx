import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import service from "services";
import { fetchAllPosts } from "state/action-create";

export default function Posts() {
  const dispatch = useDispatch();
  const postReducer = useSelector((state: RootState) => state.postReducers);

  const { posts, loading, success, error } = postReducer;

  console.log("PostReducer: ", postReducer, posts);

  // const getPosts = async () => {
  //   try {
  //     const response = await service.get("/posts");
  //     setPosts(response.data);
  //   } catch (e) {
  //     console.log("Exception: ", e);
  //   }
  // };

  useEffect(() => {
    // getPosts();
    dispatch(fetchAllPosts());
  }, []);

  if (loading) return <div>Loadingg.......</div>;
  if (error) return <div>{error}</div>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
