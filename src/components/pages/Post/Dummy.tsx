import React from 'react';
import ScrollContainer from 'react-scroll-horizontal';
import './App.css';

interface Post {
  id: number;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  description: string;
  comments: string[];
}

const posts: Post[] = [
  {
    id: 1,
    username: 'JohnDoe',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/500',
    likes: 100,
    description: 'This is an example caption for post 1.',
    comments: ['Comment 1', 'Comment 2'],
  },
  {
    id: 2,
    username: 'JaneSmith',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/500',
    likes: 50,
    description: 'This is an example caption for post 2.',
    comments: ['Comment 3', 'Comment 4'],
  },
  {
    id: 3,
    username: 'EmilyJohnson',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/500',
    likes: 80,
    description: 'This is an example caption for post 3.',
    comments: ['Comment 5', 'Comment 6'],
  },
  {
    id: 4,
    username: 'AlexWilliams',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/500',
    likes: 120,
    description: 'This is an example caption for post 4.',
    comments: ['Comment 7', 'Comment 8'],
  },
  {
    id: 5,
    username: 'SarahBrown',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/500',
    likes: 70,
    description: 'This is an example caption for post 5.',
    comments: ['Comment 9', 'Comment 10'],
  },
];

function App() {
  return (
    <div className="app">
      <ScrollContainer className="post-container">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-header">
              <img className="post-avatar" src={post.avatar} alt="User Avatar" />
              <h3 className="post-username">{post.username}</h3>
            </div>
            <img className="post-image" src={post.image} alt="Post" />
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
            </div>
            <div className="post-caption">
              <span className="post-likes">{post.likes} likes</span>
              <p className="post-description">{post.description}</p>
              <div className="post-comments">
                {post.comments.map((comment, index) => (
                  <span className="comment" key={index}>
                    {comment}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default App;
