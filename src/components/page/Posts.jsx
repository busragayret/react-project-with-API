import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Posts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const URL = 'https://api.disneyapi.dev/characters';
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          setData(json.data);
          setLoading(false);
        });
    }, 300); //5000
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr>
                                <th scope="row">{item._id}</th>
                                <td>
                                    <Link to={`/posts/${item._id}`}>
                                       <img src={`${item.imageUrl}`} alt="" />
                                    </Link>
                                </td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </>
  )
}
export default Posts;