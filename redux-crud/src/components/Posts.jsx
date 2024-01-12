import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  deletePost,
  editPost,
  createPost,
} from "../redux/reducers/postsSlice";
import "./post.css";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.data);
  const status = useSelector((state) => state.post.status);
  const error = useSelector((state) => state.post.error);

  const [newPostTitle, setNewPostTitle] = useState("");
  const [updatedPostTitle, setUpdatedPostTitle] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleEdit = () => {
    if (editingPostId && updatedPostTitle) {
      dispatch(editPost({ id: editingPostId, title: updatedPostTitle }));
      setEditingPostId(null);
      setUpdatedPostTitle("");
    }
  };

  const handleAddPost = () => {
    if (newPostTitle) {
      dispatch(createPost({ title: newPostTitle }));
      setNewPostTitle("");
    }
  };

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              {post.id === editingPostId ? (
                <>
                  <input
                    type="text"
                    value={updatedPostTitle}
                    onChange={(e) => setUpdatedPostTitle(e.target.value)}
                  />
                  <button onClick={handleEdit}>Save</button>
                </>
              ) : (
                <>
                  <div className="post-title">{post.title}</div>
                  <div className="post-buttons">
                    <button onClick={() => setEditingPostId(post.id)} className="edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(post.id)} className="delete">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="post-form">
        <h2>Add a new post</h2>
        <input
          type="text"
          placeholder="Post title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
    </div>
  );
}
