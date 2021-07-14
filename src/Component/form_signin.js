import React from 'react';


function onSubmit(event) {
    event.preventDefault();
    console.log(event);
}

function onInvalid(event) {
    console.log(event);
}

function Formsignin() {
    return (

        <div className="container d-flex flex-column justify-content-center"
            style={{ marginTop: "25px", width: "30%" }}>

            <form onSubmit={onSubmit} className="form-signup shadow p-3 mb-5 bg-body rounded">
                <h1 className="text-center" style={{ color: "#940505", marginBottom: "0.5cm" }}>
                    Đăng Nhập
                </h1>

                <div >
                    <label className="form-label">Tên đăng nhập <i className="bi bi-asterisk align-top"></i></label>
                    <div className="input-group mb-3">
                        <input className="form-control" onInvalid={onInvalid(this)} required />
                    </div>
                </div>

                <div >
                    <label className="form-label">Mật khẩu <i className="bi bi-asterisk align-top"></i></label>
                    <div className="input-group mb-3">
                        <input className="form-control" required />
                    </div>
                </div>

                <div>
                    <button type="submit" style={{ color: "#940505", marginBlock: "10px", width: "100%", backgroundColor: "#FD7878" }}>
                        <b>Đăng Nhập</b>
                    </button>
                </div>

                <div className="d-flex flex-column" style={{ color: "#940505" }} >
                    <p className="text-center">
                        Bạn chưa có tài khoản? Đăng ký tài khoản <a href="/#">tại đây!</a>
                    </p>
                </div>

                <div className="d-flex flex-column " style={{ fontSize: "13px", color: "#940505" }} >
                    <p className="text-center">
                        Quên mật khẩu? Bấm <a href="/#">vào đây</a> để đặt lại
                    </p>
                </div>
            </form>






        </div>
    );
}

export default Formsignin;