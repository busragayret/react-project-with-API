import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardItemDetail from '../CardItemDetail';
function PostDetail(props) {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/characters/${params.postId}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [params.postId]); //postID degisince yap

  return (
    <>
      <CardItemDetail id={params.postId} src={data.imageUrl} name={data.name}/>
    </>
  );
}
export default PostDetail;