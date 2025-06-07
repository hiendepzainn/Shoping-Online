import { useEffect, useState } from "react";
import "./ListProducts.css";
import { useDispatch } from "react-redux";
import { add } from "../../actions/cart";

var ListProducts = () => {
  const calling = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
      });
  }, []);
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <div className="list-products">
        {data.map((item) => (
          <div className="item">
            <div className="outer-img">
              <img src={item.thumbnail} alt="product" />
            </div>
            <div className="title">{item.title}</div>
            <div className="real-price">
              $
              {Math.round(((100 - item.discountPercentage) * item.price) / 100)}
            </div>
            <div className="original-price">${item.price}</div>
            <div className="discountPercentage">
              Giảm giá: {Math.round(item.discountPercentage)}%
            </div>
            <button
              onClick={() => {
                calling(add(item));
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProducts;
