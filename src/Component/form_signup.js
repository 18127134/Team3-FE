import React from 'react';
import { Link } from 'react-router-dom';

function onSubmit(event) {
    event.preventDefault();
}

function Formsignup() {
    return (
        <div className="container d-flex flex-column justify-content-center" style={{ marginTop: "25px", width: "30%" }}>

            <form onSubmit={onSubmit} className="form-signup shadow p-3 mb-5 bg-body rounded">
                <h1 className="text-center" style={{ color: "#940505", marginBottom: "0.5cm" }}>
                    Đăng Ký Tài Khoản
                </h1>
                <div >
                    <label className="form-label">Họ tên <i className="bi bi-asterisk align-top "></i></label>
                    <div className="input-group mb-3">
                        <input className="form-control" required />
                    </div>
                </div>

                <div >
                    <label className="form-label">Email <i className="bi bi-asterisk align-top"></i></label>
                    <div className="input-group mb-3">
                        <input className="form-control" required />
                    </div>
                </div>

                <div >
                    <label className="form-label">Tên đăng nhập <i className="bi bi-asterisk align-top"></i></label>
                    <div className="input-group mb-3">
                        <input className="form-control" required />
                    </div>
                </div>

                <div >
                    <label className="form-label">Mật khẩu <i className="bi bi-asterisk align-top"></i></label>
                    <div className="input-group mb-3">
                        <input className="form-control" required />
                    </div>
                </div>

                <div >
                    <label className="form-label ">Số điện thoại <i className="bi bi-asterisk align-top"></i></label>
                    <div className="input-group mb-3">
                        <input className="form-control" required />
                    </div>
                </div>

                <div>
                    <button type="submit" style={{ color: "#940505", marginBlock: "10px", width: "100%", backgroundColor: "#FD7878" }}>
                        <b>Đăng ký</b>
                    </button>
                </div>

                <div className="d-flex flex-column" style={{ fontSize: "15px", color: "#940505" }} >
                    <p>
                        Bạn có tài khoản? Đăng nhập <Link to="/signin">tại đây!</Link>
                    </p>
                </div>
            </form>






        </div>
    );
}

export default Formsignup;