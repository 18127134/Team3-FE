import React from "react";
import Serviceinfor from "../inforservice";
import nail1 from "../../Picture/nail_1.png";
import nail6 from "../../Picture/nail_6png.png";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Bookinginformation(props) {
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="row align-items-end" style={{ width: "350px" }}>
          <img src={nail1} alt="nail" style={{ width: "350px" }} />
        </div>
        <div style={{ width: "600px" }}>
          <h1 className="text-center">Thông Tin Lịch Đặt</h1>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="text-center">Khách Hàng</h4>

              <div id="container-border">
                <div>
                  <div>
                    <h6>Họ Và Tên</h6>

                    <p className="text-center">Nguyễn Hà Thành</p>
                  </div>

                  <div>
                    <h6>Số Điện Thoại</h6>

                    <p className="text-center">0898669171</p>
                  </div>

                  <div>
                    <h6>Thời Gian</h6>

                    <p className="text-center">9h - 12 giờ, ngày 14/08</p>
                  </div>

                  <div>
                    <h6>Số Người</h6>

                    <p className="text-center">1 người</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-center">Dịch Vụ</h4>

              <div id="container-border">
                <div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "200px" }}
                  >
                    <h6 style={{ marginTop: "0%" }}>Tên Dịch Vụ</h6>
                    <h6>Giá Tiền</h6>
                  </div>

                  <Serviceinfor name={"Tráng gương"} price={90000} />

                  <Serviceinfor name={"Sơn Gel"} price={50000} />

                  <Serviceinfor name={"Sơn Mắt Mèo"} price={90000} />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginBottom: "20px" }}>
            <Link to="payment">
              <button type="submit" className="btn btn-danger">
                Xác Nhận
              </button>
            </Link>
          </div>
        </div>
        <div className="align-self-center">
          <img src={nail6} alt="nail" style={{ width: "300px" }} />
        </div>
      </div>
    </Fragment>
  );
}

export default Bookinginformation;
