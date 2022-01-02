import React from 'react';
import PostSearch from './PostSearch';
import Posts from './Posts';
import About from './About';
function Home(props) {
  return (
    <>
      <PostSearch />
      <Posts/>
      <About/>
    </>
  );
}
export default Home;