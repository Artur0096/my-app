import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../store/useAppDispatch";
import { fetchPosts } from "../store/postsSlice";
import { RootState } from "../store/store";
import styles from "./styles/Posts.module.css";

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.posts}>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      <div className={styles.cards}>
        {posts.map((post) => (
          <div className={styles.card} key={post.id}>
            <h3>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
            <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
