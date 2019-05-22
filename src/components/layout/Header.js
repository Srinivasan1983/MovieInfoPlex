import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              MovieInfoPlex
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <Link to="/">
              <li className="nav-item d-inline-block mr-4">
                <i className="fab fa-imdb fa-4x" id="imdb-logo" />
              </li>
            </Link>
            <Link to="/youtube">
              <li className="nav-item d-inline-block mr-4">
                <i className="fab fa-youtube fa-4x" id="youtube-logo" />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  .fa-imdb {
    color: #f3ce13;
  }
  .brand-text {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.5rem;
  }
  .fa-youtube {
    color: #c4302b;
  }
`;
