import React, { Fragment } from "react";
import Itemservice from "./mngitemservice";

function Mngservices() {
  return (
    <Fragment>
      <div>
        <div className="text-start m-2">
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#addposts"
          >
            Thêm Dịch Vụ
          </button>
          <div
            className="modal fade"
            id="addposts"
            tabindex="-1"
            aria-labelledby="addpostsLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addpostsLabel">
                    Dịch Vụ
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <div>
                    <label>Tên Dịch Vụ</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div>
                    <label>Giá Tiền</label>
                    <input type="text" class="form-control" />
                  </div>

                  <label>Kiểu Dịch Vụ</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <b class="form-check-label" for="flexRadioDefault1">
                      Nails Service
                    </b>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <b class="form-check-label" for="flexRadioDefault2">
                      Nails Design
                    </b>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Xác Nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Dịch Vụ</th>
              <th scope="col">Giá Tiền</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <Itemservice />
            <Itemservice />
            <Itemservice />
            <Itemservice />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Mngservices;
