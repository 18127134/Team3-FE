import React, { Fragment, useState } from "react";
import nail300 from "../../Picture/nail300.png";
import nail1 from "../../Picture/nail_1.png";
import { Link } from "react-router-dom";

function Payment() {
  const momo = "https://sundaysea.com/wp-content/uploads/2019/07/logo-momo.png";

  const [payment, setpayment] = useState(1);
  // Function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payment);
  };

  const hanldeChange = (e) => {
    setpayment(Number(e.target.value));
  };
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="row align-items-end" style={{ width: "350px" }}>
          <img src={nail1} alt="nail" style={{ width: "350px" }} />
        </div>

        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Thanh Toán</h1>

          <div id="container-border">
            <h4>Thông tin chung</h4>

            <label>Họ tên:</label>
            <span>Nguyễn Hà Thành</span>

            <br />

            <label>Tổng tiền: </label>
            <span>230k</span>

            <br />
            <br />
            <h4>Hình thức thanh toán</h4>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="flexRadioDefault1"
                value="1"
                onChange={hanldeChange}
                defaultChecked
              />
              <label className="form-check-label">
                Thanh Toán Tại Cửa Hàng
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="flexRadioDefault2"
                value="2"
                onChange={hanldeChange}
              />
              <label className="form-check-label">Thanh Toán Online</label>
            </div>
            <br />
            <div className="text-center">
              <img src={momo} alt="Momo Payment" style={{ width: "80px" }} />
            </div>
          </div>

          <div className="text-center" style={{ marginBottom: "20px" }}>
            <Link to="../managementbooking">
              <button type="submit" className="btn btn-danger">
                Xác Nhận
              </button>
            </Link>
          </div>
        </form>

        <div className="align-self-center">
          <img src={nail300} alt="nail" style={{ width: "300px" }} />
        </div>
      </div>
    </Fragment>
  );
}

export default Payment;
