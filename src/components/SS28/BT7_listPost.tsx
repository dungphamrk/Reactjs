import { useState } from 'react';
import Post from './BT7_post';

let Bt7 = () => {
  let [posts] = useState([
    { id: 1, title: '1', content: '1', author: '1' },
    { id: 2, title: '2', content: '2', author: '2' },
    { id: 3, title: '3', content: '3', author: '3' }
  ]);

  return (
    <div>
        <h1>bt7</h1>
      <h2>List of Posts</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Bt7;