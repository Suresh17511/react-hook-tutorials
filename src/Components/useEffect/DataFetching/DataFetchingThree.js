import React, {useState, useEffect} from 'react';
import axios from 'axios';
function DataFetchingThree() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromInputField, setIdFromInputField] = useState(1);
  const changePost = () => {
    setIdFromInputField(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromInputField]);
  return (
    <div>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={changePost}>change post</button>
      </div>
      <div>
        <h2>{post.title}</h2>
      </div>
    </div>
  );
}

export default DataFetchingThree;
