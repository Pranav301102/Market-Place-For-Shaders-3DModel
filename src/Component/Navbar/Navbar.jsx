import React from "react";
import "./Navbar.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link
              to="/"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Home
            </Link>
          </li>
          <li>Buy Now</li>
          <li>Contact Us</li>
          <li>Help</li>
          <Button radius="xl">
          <Link
              to="/login"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Login
            </Link></Button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
