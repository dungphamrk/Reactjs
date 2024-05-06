import React from 'react';

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
  };
}

let Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p><strong>Author:</strong> {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;