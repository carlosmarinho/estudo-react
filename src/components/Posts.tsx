import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import service from "services";
import { fetchAllPosts } from "state/action-create";

export default function Posts() {
  const dispatch = useDispatch();
  const postReducer = useSelector((state: RootStateOrAny)  => state.postReducers);

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
    dispatch(fetchAllPosts())
  }, []);
  
  if(loading)
    return <div>Loadingg.......</div>

  return (
    <ul>
      {posts.map((post: any) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
};
