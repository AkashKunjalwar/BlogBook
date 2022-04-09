import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("GET_POSTS", async () => {
  const response = await axios.get("http://localhost:5000/api/blogs");
  return response.data;
});

export const createPost = createAsyncThunk("CREATE_POST", async (blog) => {
  const headers = { "Content-Type": "application/json" };
  const response = await axios.post(`http://localhost:5000/api/blogs/`, blog, {
    headers,
  });
  return response;
});

export const fetchPost = createAsyncThunk("GET_POST", async (id) => {
  const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
  return response.data[0];
});

export const updatePost = createAsyncThunk("UPDATE_POST", async (blog) => {
  const headers = { "Content-Type": "application/json" };
  const response = await axios.put(
    `http://localhost:5000/api/blogs/${blog.BlogId}`,
    blog,
    { headers }
  );
  return response;
});

export const deletePost = createAsyncThunk("DELETE_POST", async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/blogs/${id}`);
  return response.data[0];
});

const initialState = {
  blogs: [],
  currentBlog: {},
};

const LocalReducer = createSlice({
  name: "localreducer",
  initialState,
  extraReducers: {
    [fetchPosts.fulfilled]: (state, { payload }) => {
      return { ...state, blogs: payload };
    },
    [fetchPost.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        currentBlog: payload,
      };
    },
  },
});

export const { updateBlogList, selectedBlog } = LocalReducer.actions;
export const getBlogList = (state) => state.LocalReducer.blogs;
export const getCurrentBlog = (state) => state.LocalReducer.currentBlog;
export default LocalReducer.reducer;
