// store.js
import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./reducers/postsSlice";

export default configureStore({
  reducer: {
    post: postsSlice,
  },
});
