import "./Cart.css";

var Cart = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  return (
    <>
      <div className="upper-line">
        <h2>Giỏ hàng</h2>
        <div className="delete-all">Xóa tất cả</div>
      </div>
      <div className="picked-products-list">
        {data.map((item) => (
          <div className="item">
            <div className="left-block">
              <div className="frame-img">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/2MYLPMnLxZENemQJ7D43mc-1200-80.jpg"
                  alt="picked-product"
                />
              </div>
              <div className="infor">
                <div className="title">Iphone 13</div>
                <div className="real-price">$746</div>
                <div className="original-price">$830</div>
              </div>
            </div>
            <div className="right-block">
              <button>-</button>
              <span>6</span>
              <button>+</button>
              <button>Xóa</button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="picked-products-list">
        <div className="item">
          <div className="left-block">
            <div className="frame-img">
              <img
                src="https://cdn.mos.cms.futurecdn.net/2MYLPMnLxZENemQJ7D43mc-1200-80.jpg"
                alt="picked-product"
              />
            </div>
            <div className="infor">
              <div className="title">Iphone 13</div>
              <div className="real-price">$746</div>
              <div className="original-price">$830</div>
            </div>
          </div>
          <div className="right-block">
            <button>-</button>
            <span>6</span>
            <button>+</button>
            <button>Xóa</button>
          </div>
        </div>
      </div> */}
      <div className="total">
        Tổng tiền: <span>$20831</span>
      </div>
    </>
  );
};

export default Cart;
