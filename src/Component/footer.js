import juneca from "../Picture/juneca.png"

function Footer() {
    return (
        <div className="footer d-flex flex-row justify-content-evenly " style={{ fontFamily: "Quicksand" }}>
            <div className="align-self-center" >
                <img src={juneca} style={{ width: "250px" }} alt="juneca" />
            </div>
            <div className="align-self-center " style={{ width: "400px" }} >
                <p>
                    Chúng tôi mong muốn Juneca sẽ trở thành “Nhà Nail”,
                    nơi mọi người giải tỏa được sự mệt mỏi và tìm thấy niềm vui,
                    sự sẻ chia thân tình bên bạn bè và người thân.
                </p>
            </div>

            <div className="align-self-center "  >

                <p><i className="bi bi-geo-alt-fill" /> <b>Địa chỉ:</b>
                    135 Trần Hưng Đạo, Phường Cầu Ông Lãnh, Quận 1, TP. Hồ Chí Minh
                </p>
                <p><i className="bi bi-telephone-fill" /> <b>Hotline:</b>
                    19006079
                </p>
            </div>

            <div className="align-self-center d-flex flex-column" >
                <img style={{ width: "100px" }} src="https://www.akb.com.vn/wp-content/uploads/2020/04/dang-ky-website-voi-bo-cong-thuong-3.jpg" className="img-footer " alt="bocongthuong" />
                <img style={{ width: "100px" }} src="https://itop.website/uploads/blog/video-example-dmca-policy-text.jpg" className="img-footer " alt="DCMA" />
            </div>
        </div>
    )
};

export default Footer;
