import React, { Fragment } from "react";

function Mngbooked(props) {
  const dathanhtoan = "https://cdn.fast.vn/tmp/20201024113642-2.PNG";

  return (
    <Fragment>
      <div
        id="container-border"
        className="d-flex justify-content-between"
        style={{ height: "fit-content" }}
      >
        <div>
          <label style={{ marginTop: "0%" }}>23/08</label>
          <p style={{ fontSize: "130%" }}>Nguyễn Hà Thành</p>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-danger"
              disabled={props.status === 1 ? "" : "true"}
            >
              Xác Nhận
            </button>
          </div>
        </div>

        <div>
          <div className="d-flex">
            <b>Số người: &nbsp;</b>
            <p>1 người</p>
          </div>

          <div className="d-flex">
            <b>Thời gian: &nbsp;</b>
            <p>15h - 17h</p>
          </div>

          <div className="d-flex">
            <b>Hình thức thanh toán: &nbsp;</b>
            <p>Online</p>
          </div>

          <a href="/#">Chi tiết dịch vụ</a>
        </div>

        <div className="" style={{ width: "200px" }}>
          {props.status === 1 ? (
            <img
              src={dathanhtoan}
              alt="Dathanhtoan"
              style={{ width: "200px" }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Mngbooked;
