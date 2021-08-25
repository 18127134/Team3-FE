import React, { Fragment } from "react";
import Mnginformation from "./Manager/mnginformation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Customer/header";
import Footer from "./Customer/footer";
import Mngnavbar from "./Manager/mngnavbar";
import Mngbooked from "./Manager/mngcalendarbook";
import Mngwarehouse from "./Manager/warehouse/mngwarehouse";
import Mngposts from "./Manager/post/mngposts";
import Mngservices from "./Manager/service/mngservice";

function Mngpage() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="d-flex justify-content-around">
          <div id="container-border" className="row text-center ">
            <Mngnavbar />
            <Switch>
              <Route path="/" exact>
                <div className="col-md-auto">
                  <h1>Thông Tin Tổng Quan</h1>

                  <Mnginformation />
                </div>
              </Route>

              <Route path="/mngwarehouse">
                <div className="col-md-auto">
                  <h1>Quản Lý Kho &nbsp;</h1>
                  <p>(Cập nhật ngày 24/08/2021)</p>
                  <Mngwarehouse />
                </div>
              </Route>

              <Route path="/mngbooked">
                <div className="col-md-auto">
                  <h1>Xác Nhận Đặt Lịch</h1>
                  <Mngbooked status={1} />
                  <Mngbooked status={0} />
                  <Mngbooked status={1} />
                </div>
              </Route>

              <Route path="/mngposts">
                <div className="col-md-auto">
                  <h1>Quản Lý Bài Viết</h1>
                  <Mngposts />
                </div>
              </Route>

              <Route path="/mngservices">
                <div className="col-md-auto">
                  <h1>Quản Lý Dịch Vụ</h1>
                  <Mngservices />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default Mngpage;
