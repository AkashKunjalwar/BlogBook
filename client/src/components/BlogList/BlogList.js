import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogList.module.css";

const BlogList = ({ blogList }) => {
  return (
    <div className={styles.blogs}>
      <div key={blogList.BlogId} className={styles.blogList}>
        <h3>{blogList.BlogName}</h3>
        <h4>{blogList.BlogShortDesc}</h4>
        <p>
          {blogList.Blog.slice(0, 200)} <span>...</span>
          <Link
            style={{ textDecoration: "none", color: "#619cec" }}
            to={`/blogs/${blogList.BlogID}`}
          >
            read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogList;
