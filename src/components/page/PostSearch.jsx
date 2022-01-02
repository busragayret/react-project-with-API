import React from 'react';
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import posts from '../../data/posts';

function PostSearch() {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    fetch(`https://api.disneyapi.dev/characters`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
    }, 500);
  }, []);

  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get('query'));

  function formSubmit(event, data, q) {
    event.preventDefault();
    setQ(event.target.q.value);
    navigate(`/search?query=${event.target.q.value}`);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label mt-5">
            Search
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            defaultValue={q}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {location.pathname === '/search' ? (
        <h1>
          Search Results:{' '}
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
                        data.filter((data) => data.name.includes(q)).map((data) => (
                            <tr>
                                <th scope="row">{data._id}</th>
                                <td>
                                    <Link to={`/posts/${data._id}`}>
                                       <img src={`${data.imageUrl}`} alt="" />
                                    </Link>
                                </td>
                                <td>{data.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </h1>
      ) : null}
    </>
  );
}

export default PostSearch;