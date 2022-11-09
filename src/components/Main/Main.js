import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-content">
        <h1 className="main-title">
          Fun facts about <span style={{ color: "#61dafb" }}>React</span>
        </h1>
        <ul className="main-facts">
          <li className="main-items">Was first released in 2013</li>
          <li className="main-items">Was originally created by Jordan Walke</li>
          <li className="main-items">Has well over 100K stars on GitHub</li>
          <li className="main-items">Is maintained by Facebook</li>
          <li className="main-items">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
