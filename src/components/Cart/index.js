import { useSelector } from "react-redux";
import "./Cart.css";

var Cart = () => {
  const data = useSelector((item) => item.cartReducer);
  console.log(data);
  return (
    <>
      <div className="upper-line">
        <h2>Giỏ hàng</h2>
        <div className="delete-all">Xóa tất cả</div>
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
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
                <button>Xóa</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="total">
        Tổng tiền: <span>$20831</span>
      </div>
    </>
  );
};

export default Cart;
