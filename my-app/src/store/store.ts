import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postsReducer from "./postsSlice"; // Adjust according to your file structure

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
