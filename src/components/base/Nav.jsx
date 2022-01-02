import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';
function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand text-dark" to="/">
                    DisneyAPI
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {routes
                            .filter((item) => item.isNav)
                            .map((item, index) => (
                                <li className="nav-item">
                                    <Link key={index} className="nav-link active" to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Nav;