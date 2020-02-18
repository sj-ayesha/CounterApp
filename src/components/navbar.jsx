import React, { Component } from "react";

//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};
// class Navbar extends Component {
//   render() {}
// }

export default NavBar;
