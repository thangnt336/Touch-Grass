import React from "react";
import { Link, withRouter } from "react-router-dom";

function Login() {
  return (
    <div className="navigation">
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Touch Grass</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Login);


