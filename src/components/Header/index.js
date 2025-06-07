import { Link } from "react-router-dom";
import "./Header.css";

var Header = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>Logo</Link>
        <Link to={"/cart"}>Cart{"(19)"}</Link>
      </div>
    </>
  );
};

export default Header;
