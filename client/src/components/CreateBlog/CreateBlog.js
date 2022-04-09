import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/Reducers/LocalReducer";
import styles from "./CreateBlog.module.css";

const CreateBlog = () => {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitBlogHandler = (e) => {
    dispatch(
      createPost({
        BlogName: postName,
        BlogShortDesc: postDescription,
        Blog: post,
      })
    );
    setPostName("");
    setPostDescription("");
    setPost("");
    navigate("/");
    e.preventDefault();
  };

  return (
    <div className={styles.createBlogDiv}>
      <h2>Create a Blog</h2>
      <form onSubmit={submitBlogHandler} className={styles.createBlogForm}>
        <input
          type="text"
          placeholder="Enter the title of the Blog without exceeding 100 characters"
          maxLength="100"
          value={postName}
          onChange={(e) => {
            setPostName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter a short description for the Blog without exceeding 200 characters"
          maxLength="200"
          value={postDescription}
          onChange={(e) => {
            setPostDescription(e.target.value);
          }}
        />
        <textarea
          rows="15"
          cols="30"
          placeholder="Write your blog"
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreateBlog;
