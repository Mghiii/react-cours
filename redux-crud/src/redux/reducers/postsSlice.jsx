// redux/reducers/postsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return postId;
    } catch (error) {
      throw error;
    }
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async (updatedPost) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
        updatedPost
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (newPost) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.data = state.data.filter((post) => post.id !== action.payload);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default postSlice.reducer;
