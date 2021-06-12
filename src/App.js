import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateDevelopers from "./components/create-developers.js";
import EditDevelopers from "./components/edit-developers.js";
import ListDevelopers from "./components/list-developers";

// import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" bg="transparent" expand="lg">
            <a className="navbar-brand" href="" target="_blank">
              {/* <img src={logo} width="30" height="30" alt="" /> */}
            </a>
            <Link to="/" className="navbar-brand">PROJECT-MANAGEMENT</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">DEVELOPERS</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">CREATE DEVELOPERS</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={ListDevelopers} />
          <Route path="/edit/:id" component={EditDevelopers} />
          <Route path="/create" component={CreateDevelopers} />
        </div>
      </Router>
    );
  }
}

export default App;