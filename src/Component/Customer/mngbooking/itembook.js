// Import modules
import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { bookContext } from "../../context/bookContext";
import { authContext } from "../../context/authContext";

// Main func
function Itembook(props) {
  // Variables
  const dathanhtoan = "https://cdn.fast.vn/tmp/20201024113642-2.PNG";
  const service = props.service;

  // Context
  const { deleteBooking, getAllBooking } = useContext(bookContext);
  const {
    authState: { user },
  } = useContext(authContext);

  // Router
  const history = useHistory();

  // Local State
  const [detail, setDetail] = useState(false);

  // Handle
  const handleClick = () => setDetail(!detail);

  const handleClickCancel = async () => {
    try {
      const res = await deleteBooking(props.id);
      console.log(res);

      await getAllBooking(user.username);
    } catch (error) {
      console.log(error);
    }
  };

  // Mapping
  let detail_service = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên Dịch Vụ</th>
          <th scope="col">Loại Dịch Vụ</th>
          <th scope="col">Giá tiền</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(service).map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{service[index].name}</td>
            <td>Otto</td>
            <td>{service[index].price}vnđ/Người</td>
          </tr>
        ))}
        <tr>
          <th scope="row"></th>
          <td></td>
          <td>TỔNG TIỀN: </td>
          <td>{props.price}VNĐ</td>
        </tr>
      </tbody>
    </table>
  );
  // Render FE
  return (
    <Fragment>
      <div id="container-border" className="d-flex justify-content-between">
        <div>
          <label style={{ marginTop: "0%" }}>{props.date.slice(0, 10)}</label>
          <p style={{ fontSize: "130%" }}>{props.name}</p>

          <div className="text-center">
            <button
              type="button"
              onClick={handleClickCancel}
              className="btn btn-danger"
            >
              Huỷ
            </button>
          </div>
        </div>

        <div>
          <div className="d-flex">
            <b>Số người: &nbsp;</b>
            <p>{`${props.people} người`}</p>
          </div>

          <div className="d-flex">
            <b>Thời gian: &nbsp;</b>
            <p>{props.time}</p>
          </div>

          <div className="d-flex">
            <b>Hình thức thanh toán: &nbsp;</b>
            <p>{props.payment}</p>
          </div>

          <button type="button" className="btn btn-info" onClick={handleClick}>
            Chi Tiết Dịch Vụ{" "}
          </button>
        </div>

        <div className="row align-items-center" style={{ width: "200px" }}>
          {props.sttPayment ? (
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

      {detail ? (
        <div
          id="container-border"
          className="d-flex justify-content-center"
          style={{ width: "732.23px" }}
        >
          {detail_service}
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Itembook;
