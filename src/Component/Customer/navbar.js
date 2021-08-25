import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="container" style={{ marginLeft: "150px" }}>
      <div
        className="d-flex flex-row justify-content-evenly "
        style={{ fontSize: "10px", margin: "10px" }}
      >
        <div
          className="input-group input-group-sm mb-3"
          style={{ width: "10cm" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm..."
          />
          <span
            className="input-group-text"
            style={{
              border: "1px solid #ff9797",
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            <i className="icon-search bi bi-search" />
          </span>
        </div>

        <div className="">
          <Link to="/">
            <button type="button" className="btn-sm button_nav">
              Trang chủ <i className="bi bi-house-door-fill" />
            </button>
          </Link>
        </div>
        <div className="">
          <button type="button" className="btn-sm button_nav">
            Tin tức <i className="bi bi-newspaper" />
          </button>
        </div>
        <div className="">
          <button type="button" className="btn-sm button_nav">
            Liên hệ <i className="bi bi-telephone-fill" />
          </button>
        </div>

        <div className="">
          {props.status === 1 ? (
            <Link to="/signin">
              <button type="button" className="btn-sm button_nav">
                Đăng nhập <i className="bi bi-person-check-fill" />
              </button>
            </Link>
          ) : (
            <Link to="/managementbooking">
              <button type="button" className="btn-sm button_nav">
                Quản lý lịch <i className="bi bi-calendar-check-fill" />
              </button>
            </Link>
          )}
        </div>
        <div className="">
          {props.status === 1 ? (
            <Link to="/signup">
              <button type="button" className="btn-sm button_nav">
                Đăng ký <i className="bi bi-person-plus-fill" />
              </button>
            </Link>
          ) : (
            <Link to="/profile">
              <button type="button" className="btn-sm button_nav">
                Hathanh07 <i className="bi bi-person-plus-fill" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
