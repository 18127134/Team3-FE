import nail from "../Picture/nail_1.png"

function Homepage() {
    return (
        <div className="d-flex"  >
            <div>
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
                            Juneca khép mình ẩn náy trongmột không gian kín đáo, dịu dàng.
                            Nơi sẽ ngay lập tức như đưa bạn trở về nhà, như lạc về một miền kí ức thân thương
                            của những nồi nước lá xông thơm phức đến từng ngón tay, sợi tóc. Để cảm xúc được nâng niu,
                            chiều chuộng sau một ngày dài mệt mỏi...
                        </p>
                        Juneca Nail - đúng như tên gọi, theo đuổi tiêu chí làm đẹp..
                    </p>
                </div>
            </div>

            <div className="product-main-homepage d-flex flex-column">
                <div>
                    <h3 >TOP BÁN CHẠY</h3>
                </div>

                <div className="text-center">
                    <img src="https://product.hstatic.net/1000404680/product/product-deluxe_ds374_1875x1875px_7cee72c2658a406f9f2677783950c434_master.jpg"
                        alt="felina" style={{ width: "150px" }} className="rounded" />
                    <p>
                        Sơn móng tay Felina
                    </p>
                </div>

                <div className="text-center">
                    <img src="https://salt.tikicdn.com/ts/product/46/d7/be/6c8a6d79d5aa5e30f7d1c91c6aad60e5.jpg"
                        alt="elite" style={{ width: "150px" }} />

                    <p>
                        Sơn dưỡng móng Elite
                    </p>
                </div>

            </div>
        </div>
    )
};

export default Homepage;