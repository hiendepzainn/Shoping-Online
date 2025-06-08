import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { decrease, increase, deleteThis, deleteAll } from "../../actions/cart";
import { useEffect, useState } from "react";

var Cart = () => {
  const data = useSelector((item) => item.cartReducer);
  const calling = useDispatch();
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    let tempPrice = 0;
    let tempTotalQuantity = 0;
    data.forEach((element) => {
      tempPrice +=
        element.quantity *
        Math.round(((100 - element.discountPercentage) / 100) * element.price);
      tempTotalQuantity += element.quantity;
    });
    setTotal(tempPrice);
    setTotalQuantity(tempTotalQuantity);
  }, [data]);
  console.log(data);
  return (
    <>
      <div className="upper-line">
        <h2>Giỏ hàng</h2>
        <div
          className="delete-all"
          onClick={() => {
            calling(deleteAll());
          }}
        >
          Xóa tất cả
        </div>
      </div>
      <div className="picked-products-list">
        {data.length === 0 ? (
          <div>Hiện chưa có sản phẩm nào</div>
        ) : (
          data.map((item) => (
            <div className="item">
              <div className="left-block">
                <div className="frame-img">
                  <img src={item.thumbnail} alt="picked-product" />
                </div>
                <div className="infor">
                  <div className="title">{item.title}</div>
                  <div className="real-price">
                    $
                    {Math.round(
                      ((100 - item.discountPercentage) * item.price) / 100
                    )}
                  </div>
                  <div className="original-price">${item.price}</div>
                </div>
              </div>
              <div className="right-block">
                <button
                  onClick={() => {
                    calling(decrease(item.id));
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => {
                    calling(increase(item.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    calling(deleteThis(item.id));
                  }}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="totalQuantity">
        Tổng số lượng: <span>{totalQuantity}</span>
      </div>
      <div className="total">
        Tổng tiền: <span>${total}</span>
      </div>
    </>
  );
};

export default Cart;
