import React, { Fragment } from "react";

function Itemservice(props) {
  return (
    <Fragment>
      <tr style={{ height: "60px" }}>
        <th scope="row">1</th>
        <td>Sơn Theo Trend</td>
        <td>90.000vnđ</td>
        <td>
          <div>
            <button type="button" className="btn btn-info mx-2">
              Sửa
            </button>
            <button type="button" className="btn btn-dark">
              Xoá
            </button>
          </div>
        </td>
      </tr>
    </Fragment>
  );
}

export default Itemservice;
