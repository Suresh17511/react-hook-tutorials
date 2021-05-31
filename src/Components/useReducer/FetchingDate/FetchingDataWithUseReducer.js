import axios from 'axios';
import React, {useReducer, useEffect} from 'react';
const initialState = {
  loading: true,
  error: '',
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_FAILURE':
      return {
        loading: false,
        post: {},
        error: 'something went wrong',
      };
    default:
      return state;
  }
};
function FetchingDataWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({type: 'FETCH_SUCCESS', payload: res.data});
      })
      .catch((error) => {
        dispatch({type: 'FETCH_FAILURE'});
      });
  }, []);
  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchingDataWithUseReducer;
