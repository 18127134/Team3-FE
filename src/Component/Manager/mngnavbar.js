import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Mngnavbar() {
  return (
    <Fragment>
      <div className="mng-navbar col">
        <div>
          <Link to="/">
            <button type="button" className="btn-sm button_nav">
              dthao01 <i className="bi bi-person-fill" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/mngwarehouse">
            <button type="button" className="btn-sm button_nav">
              Quản lý kho <i className="bi bi-house-door-fill" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/mngbooked">
            <button type="button" className="btn-sm button_nav">
              Xác nhận lịch <i className="bi bi-calendar-fill" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/mngposts">
            <button type="button" className="btn-sm button_nav">
              Thêm bài viết <i className="bi bi-newspaper" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/mngservices">
            <button type="button" className="btn-sm button_nav">
              Dịch Vụ <i className="bi bi-archive-fill" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/">
            <button type="button" className="btn-sm button_nav">
              Báo cáo <i className="bi bi-file-earmark-text-fill" />
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Mngnavbar;
