import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Navbar extends Component {
  render() {
    const { totalCounter } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand mb-0 h1" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {totalCounter}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
