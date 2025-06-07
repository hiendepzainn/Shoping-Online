import { useEffect, useState } from "react";
import "./ListProducts.css";

var ListProducts = () => {
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
            <button>Thêm vào giỏ hàng</button>
          </div>
        ))}
        {/* <div className="item">
          <div className="outer-img">
            <img
              src="https://vcdn1-vnexpress.vnecdn.net/2025/06/03/a1-1748923961-2339-1748924035.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=DDYZe3gYi37m0qbeSVclDw"
              alt="product"
            />
          </div>
          <div className="title">Iphone 17</div>
          <div className="real-price">$483</div>
          <div className="original-price">$520</div>
          <div className="discountPercentage">Giảm giá: 20%</div>
          <button>Thêm vào giỏ hàng</button>
        </div> */}
      </div>
    </>
  );
};

export default ListProducts;
