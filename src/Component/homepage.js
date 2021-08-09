import nail from "../Picture/nail_1.png"
import React from 'react';
import Topseller from "./topseller";

function Homepage() {
    return (
        <div className="d-flex"  >
            <div className="row align-items-end">
                <img src={nail}
                    alt="nail" />
            </div>

            <div className="content-main-homepage ">
                <div>
                    <h3 style={{ fontFamily: "Allura", color: "#ff5959", fontSize: "100px" }}>Juneca</h3>
                </div>
                <div>
                    <i style={{ fontSize: "40px", fontWeight: "bold", color: "#810000" }}>
                        "Góc thân quen để chị em tụ tập"
                    </i>
                </div>
                <div>
                    <p>
                        <i>Tĩnh lặng và dịu sâu</i> -
                        đó là cảm giác đầu tiên khi khẽ mở cánh cửa quen thuộc của Nail Room
                        muốn mang đến cho khách hàng - những người bạn của mình.
                        <p>
                            Giữa trung tâm Sài Gòn náo nhiệt,
                            Juneca khép mình ẩn náy trong một không gian kín đáo, dịu dàng.
                            Nơi sẽ ngay lập tức như đưa bạn trở về nhà, như lạc về một miền kí ức thân thương
                            của những nồi nước lá xông thơm phức đến từng ngón tay, sợi tóc. Để cảm xúc được nâng niu,
                            chiều chuộng sau một ngày dài mệt mỏi...
                        </p>
                        Juneca Nail - đúng như tên gọi, theo đuổi tiêu chí làm đẹp..
                    </p>
                </div>
            </div>
            <Topseller />
        </div>

    )
};

export default Homepage;