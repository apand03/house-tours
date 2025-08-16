import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__list">
          <NavLink to="/" className="navbar__list--links">
            Home
          </NavLink>
          <NavLink to="/backyard" className="navbar__list--links">
            Backyard
          </NavLink>
          <NavLink to="/works" className="navbar__list--links">
            Works
          </NavLink>
          <NavLink to="/contact" className="navbar__list--links">
            Contact
          </NavLink>
        </ul>
        <NavLink to="/waitlist" className="waitList">
          Join the waitlist
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
