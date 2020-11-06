import React from "react";
const Navbar = ({ totalCounters }) => {
  // Be informed that ({totalCounter}) was synonimous to props. same as
  //   const { onReset, counters, onDelete, onIncrement } = this.props; at Counters.jsx

  return (
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
//2:06
