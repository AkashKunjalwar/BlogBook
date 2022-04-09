import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UpdateBlog.module.css";
import { getCurrentBlog, updatePost } from "../../store/Reducers/LocalReducer";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentBlog = useSelector(getCurrentBlog);
  const [blogName, setBlogName] = useState("");
  const [blogShortDesc, setBlogShortDesc] = useState("");
  const [blog, setBlog] = useState("");

  useEffect(() => {
    setBlogName(currentBlog.BlogName);
    setBlogShortDesc(currentBlog.BlogShortDesc);
    setBlog(currentBlog.Blog);
  }, [currentBlog]);

  const updateBlogHandler = (e) => {
    if (e.target.id === "updateName") {
      setBlogName(e.target.value);
    } else if (e.target.id === "updateShortDesc") {
      setBlogShortDesc(e.target.value);
    } else if (e.target.id === "updatePost") {
      setBlog(e.target.value);
    }
  };

  const submitUpdatedBlogHandler = (e) => {
    navigate(`/blogs/${id}`);
    const updatedBlog = {
      BlogId: id,
      BlogName: blogName,
      BlogShortDesc: blogShortDesc,
      Blog: blog,
    };
    dispatch(updatePost(updatedBlog));
    e.preventDefault();
  };

  return (
    <div className={styles.updateBlogDiv}>
      <h2>Update Blog</h2>
      <form
        onSubmit={submitUpdatedBlogHandler}
        className={styles.updateBlogForm}
      >
        <input
          id="updateName"
          type="text"
          maxLength="100"
          value={blogName}
          onChange={updateBlogHandler}
        />
        <input
          id="updateShortDesc"
          type="text"
          maxLength="200"
          value={blogShortDesc}
          onChange={updateBlogHandler}
        />
        <textarea
          id="updatePost"
          rows="15"
          cols="30"
          value={blog}
          onChange={updateBlogHandler}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
