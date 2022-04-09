import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, getBlogList } from "../../store/Reducers/LocalReducer";
import NoBlog from "../NoBlog/NoBlog";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(getBlogList);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogList key={Math.random()} blogList={blog} />)
      ) : (
        <NoBlog />
      )}
    </>
  );
};

export default Home;
