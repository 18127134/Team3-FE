import React, { Fragment } from "react";

function Itempost() {
  return (
    <Fragment>
      <div className="d-flex">
        <div id="container-border" className="text-start">
          <b>Review sơn móng tay Innisfree với bảng màu đẹp và đầy đủ nhất</b>
          <p>24/08/2021</p>
          <p>
            Sơn móng tay Innisfree được rất nhiều người yêu thích. So với nhiều
            hãng khác, sơn của Innisfree có giá thành khá mềm, bảng màu đa dạng
            lên đến hàng trăm màu...
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button type="button" className="btn-sm">
            Chỉnh Sửa
          </button>

          <button type="button" className="btn-sm" style={{margin}}>
            Xoá
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Itempost;
