import React, {useState, useEffect} from 'react';
import axios from 'axios';
function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default DataFetching;
