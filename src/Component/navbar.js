import React from 'react';

function Navbar() {
    return (
        <div className="container" style={{ marginLeft: "150px" }}>
            <div className="d-flex flex-row justify-content-evenly " style={{ fontSize: "10px", margin: "10px" }}>
                <div className="input-group input-group-sm mb-3" style={{ width: "10cm" }} >
                    <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                    <span className="input-group-text"
                        style={{ border: "1px solid #ff9797", borderTopRightRadius: "25px", borderBottomRightRadius: "25px" }} >
                        <i className="icon-search bi bi-search" />
                    </span>
                </div>

                <div className="">
                    <button type="button" className="btn-sm" >Trang chủ <i className="bi bi-house-door-fill" /></button>
                </div>
                <div className="">
                    <button type="button" className="btn-sm" >Tin tức  <i className="bi bi-newspaper" /></button>
                </div>
                <div className="">
                    <button type="button" className="btn-sm">Liên hệ <i className="bi bi-telephone-fill" /></button>
                </div>
                <div className="">
                    <button type="button" className="btn-sm">Đăng nhập <i className="bi bi-person-check-fill" /></button>
                </div>
                <div className="">
                    <button type="button" className="btn-sm">Đăng ký <i className="bi bi-person-plus-fill" /></button>
                </div>

            </div>
        </div>
    );
}

export default Navbar;