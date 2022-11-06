import ReactLogo from "../images/react-icon-small.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left-nav">
        <img className="nav-icon" src={ReactLogo}></img>
        <h3 className="nav-logo-text">ReactFacts</h3>
      </div>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
