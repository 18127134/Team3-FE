import React, { Fragment } from "react";

function Mnginformation() {
  return (
    <Fragment>
      <h5 className="text-center">Thông Tin Quản Lý</h5>

      <div className="d-flex justify-content-around">
        <label>Họ Và Tên</label>
        <label>Số Điện Thoại</label>
        <label>Chức Vụ</label>
      </div>

      <div className="d-flex justify-content-around">
        <p>Nguyễn Đình Thảo</p>
        <p>0917845908</p>
        <p>Quản lý trưởng</p>
      </div>

      <h5 className="text-center">Số Lịch Cần Xác Nhận</h5>
      <p className="text-center">10 lịch cần xác nhận</p>

      <h5 className="text-center">Số Sản Phẩm Hiện Có</h5>
      <p className="text-center">100 sản phẩm</p>

      <h5 className="text-center">Báo Cáo Cập Nhật Lần Cuối</h5>
      <p className="text-center">23:30:29 23/08/2021</p>

      <h5 className="text-center">Số Lượng Lịch Huỷ Hôm Nay</h5>
      <p className="text-center">3 lịch đã bị huỷ</p>
    </Fragment>
  );
}

export default Mnginformation;
