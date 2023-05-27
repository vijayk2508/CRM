import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="app">
      <div className="post">
        <div className="post-header">
          <img
            className="post-avatar"
            src="https://via.placeholder.com/50"
            alt="User Avatar"
          />
          <h3 className="post-username">Username</h3>
        </div>
        <img
          className="post-image"
          src="https://via.placeholder.com/500"
          alt="Post"
        />
        <div className="post-actions">
          <span className="action-icon">
            <i className="fas fa-heart"></i>
          </span>
          <span className="action-icon">
            <i className="fas fa-comment"></i>
          </span>
          <span className="action-icon">
            <i className="fas fa-share"></i>
          </span>
          <span className="action-icon">
            <i className="fas fa-save"></i>
          </span>
          <div className="post-caption">
          <span className="post-likes">100 likes</span>
          <p className="post-description">
            Post Discription
          </p>
          <div className="post-comments">
            <span className="comment">Comment 1</span>
            <span className="comment">Comment 2</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
