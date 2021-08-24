import React from "react";
import Service from "./service";
import nail1 from "../../Picture/nail_1.png";
import Topseller from "../topseller";
import { Link } from "react-router-dom";

// Test list service
const nail_service = [
  {
    id: "aa1",
    name: "Nhặt da",
    price: 20000,
  },
  {
    id: "aa2",
    name: "Sơn gel",
    price: 80000,
  },
  {
    id: "aa3",
    name: "Sơn thạch",
    price: 90000,
  },
  {
    id: "aa4",
    name: "Sơn lông",
    price: 90000,
  },
  {
    id: "aa5",
    name: "Sơn mắt mèo",
    price: 90000,
  },
  {
    id: "aa6",
    name: "Sơn giả bột",
    price: 90000,
  },
  {
    id: "aa7",
    name: "Sơn theo trend",
    price: 90000,
  },
  {
    id: "aa8",
    name: "Móng up",
    price: 90000,
  },
  {
    id: "aa9",
    name: "Đắp gel",
    price: 180000,
  },
  {
    id: "aa10",
    name: "Đắp bột",
    price: 150000,
  },
];

const nail_design = [
  {
    id: "bbb1",
    name: "Tráng gương",
    price: 10000,
  },
  {
    id: "bbb2",
    name: "Hoa nổi",
    price: 10000,
  },
  {
    id: "bbb3",
    name: "Đá rắc",
    price: 30000,
  },
  {
    id: "bbb4",
    name: "Vẽ gel theo trend",
    price: 30000,
  },
  {
    id: "bbb5",
    name: "Design bột",
    price: 35000,
  },
  {
    id: "bbb6",
    name: "Charm",
    price: 50000,
  },
  {
    id: "bbb7",
    name: "Đính đá",
    price: 5000,
  },
];

// Main
function Chooseservice(props) {
  // Function
  function handleChoose(data) {
    const service = [...nail_service, ...nail_design];

    if (data[0]) itemcheck.push(service.find((x) => x.id === data[1]));
    else itemcheck.splice(itemcheck.indexOf(data[1]), 1);
  }

  const handleClick = (e) => {};

  // Variables
  const itemcheck = props.itemcheck;

  return (
    <div className="d-flex justify-content-between">
      <div className="row align-items-end">
        <img src={nail1} alt="nail" />
      </div>

      <div>
        <h1 className="text-center">Chọn Dịch Vụ</h1>
        <div id="container-border" className="d-flex justify-content-between">
          <div style={{ width: "250px" }}>
            <h2 className="text-center">Nail Service</h2>
            <div className="d-flex justify-content-between">
              <h6 className="" style={{ marginTop: "0%" }}>
                TÊN DỊCH VỤ
              </h6>
              <h6>GIÁ TIỀN</h6>
            </div>
            {nail_service.map((item, index) => {
              return (
                <Service
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  idchoose={handleChoose}
                />
              );
            })}
          </div>

          <div style={{ width: "250px" }}>
            <h2 className="text-center">Nail Design</h2>

            <div className="d-flex justify-content-between">
              <h6 style={{ marginTop: "0%" }}>TÊN DỊCH VỤ</h6>
              <h6>GIÁ TIỀN</h6>
            </div>

            {nail_design.map((item, index) => {
              return (
                <Service
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  idchoose={handleChoose}
                />
              );
            })}
          </div>
        </div>

        <div className="text-center" style={{ marginBottom: "20px" }}>
          <Link to="information">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleClick}
            >
              {" "}
              Đặt Lịch
            </button>
          </Link>
        </div>
      </div>
      <div className="align-self-top">
        <Topseller />
      </div>
    </div>
  );
}

export default Chooseservice;
