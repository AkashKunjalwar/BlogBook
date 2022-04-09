import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  fetchPost,
  getCurrentBlog,
} from "../../store/Reducers/LocalReducer";
import styles from "./BlogPost.module.css";

const BlogPost = () => {
  const { id } = useParams();
  const blog = useSelector(getCurrentBlog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const updatePostHandler = (e) => {
    navigate(`/updateblog/${id}`);
    e.preventDefault();
  };

  const deletePostHandler = (e) => {
    dispatch(deletePost(id));
    navigate("/");
    e.preventDefault();
  };

  return (
    <div className={styles.blog}>
      <div className={styles.actions}>
        <button onClick={updatePostHandler}>Edit Post</button>
        <button onClick={deletePostHandler}>Delete Post</button>
      </div>
      <h2>{blog.BlogName}</h2>
      <h4>{blog.BlogShortDesc}</h4>
      <p>{blog.Blog}</p>
    </div>
  );
};

export default BlogPost;
