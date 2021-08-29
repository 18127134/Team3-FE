// Import modules
import React, { Fragment, useContext } from "react";

import Itembook from "./itembook";
import Topseller from "../topseller";
import nail1 from "../../Picture/nail_1.png";

import { bookContext } from "../../context/bookContext";
import { authContext } from "../../context/authContext";
// Main func
function Mngbooking() {
  // Context
  const { listBooking } = useContext(bookContext);
  const {
    authState: { user },
  } = useContext(authContext);

  // Render FE
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className="row align-items-end" style={{ width: "350px" }}>
          <img src={nail1} alt="nail" style={{ width: "350px" }} />
        </div>
        <div>
          <h1 className="text-center">Quản Lý Lịch Đặt</h1>
          {Object.keys(listBooking).map((item, index) => {
            return (
              <Itembook
                key={index}
                date={listBooking[index].date}
                name={user.name}
                people={listBooking[index].people}
                price={listBooking[index].totalPrice}
                payment={listBooking[index].typePayment}
                time={listBooking[index].time}
                sttPayment={listBooking[index].statusPayment}
                id={listBooking[index]._id}
                service={listBooking[index].service}
              />
            );
          })}
        </div>

        <Topseller />
      </div>
    </Fragment>
  );
}

export default Mngbooking;
