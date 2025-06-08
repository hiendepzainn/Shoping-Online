import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

var Header = () => {
  const dataCart = useSelector((item) => item.cartReducer);
  const [totalProduct, setTotalProduct] = useState(0);
  useEffect(() => {
    let count = 0;
    dataCart.forEach((element) => {
      count += 1;
    });
    setTotalProduct(count);
  }, [dataCart]);
  return (
    <>
      <div className="header">
        <Link to={"/"}>Logo</Link>
        <Link to={"/cart"}>
          Cart{"("}
          {totalProduct}
          {")"}
        </Link>
      </div>
    </>
  );
};

export default Header;
