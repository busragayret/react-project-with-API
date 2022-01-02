import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/base/Footer';
import Nav from './components/base/Nav';
import routes from './routes';

export default function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <Routes>
            {routes.map((item, index) => (
              <Route path={item.path} key={index} element={<item.element />} />
            ))}
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
