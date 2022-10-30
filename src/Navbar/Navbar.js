import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left-nav">
        <img
          className="nav-icon"
          src={require("../images/react-icon-small.png")}
        ></img>
        <h3 className="nav-logo_text">ReactFacts</h3>
      </div>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
