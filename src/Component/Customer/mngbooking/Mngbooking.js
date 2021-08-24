import React, { Fragment } from "react";
import Itembook from "./itembook";
import Topseller from "../topseller";
import nail1 from "../../Picture/nail_1.png";

function Mngbooking() {
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="row align-items-end" style={{ width: "350px" }}>
          <img src={nail1} alt="nail" style={{ width: "350px" }} />
        </div>
        <div>
          <h1 className="text-center">Quản Lý Lịch Đặt</h1>

          <Itembook />
          <Itembook />
          <Itembook />
        </div>

        <Topseller />
      </div>
    </Fragment>
  );
}

export default Mngbooking;
