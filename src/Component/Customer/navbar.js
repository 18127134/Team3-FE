// Import module
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { authContext } from "../context/authContext";

// Main func
function Navbar() {
  // Context
  const {
    authState: { isAuthenticated, user },
    logoutUser,
  } = useContext(authContext);

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
          {!isAuthenticated ? (
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
          {!isAuthenticated ? (
            <Link to="/signup">
              <button type="button" className="btn-sm button_nav">
                Đăng ký <i className="bi bi-person-plus-fill" />
              </button>
            </Link>
          ) : (
            <div>
              <button
                type="button"
                onClick={logoutUser}
                className="btn-sm button_nav"
              >
                {user.username}
                <i className="bi bi-person-plus-fill" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
