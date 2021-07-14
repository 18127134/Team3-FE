import header from "../Picture/header.png";
import logo from "../Picture/logo.png";
import slogan from "../Picture/slogan.png"

function Header() {
    return (
        <div>
            <div className="text-header">
                <img src={header} className="img-header" alt="header" />
                <div className="centered ">
                    <img src={slogan} className="img-header" alt="slogan" />
                </div>
                <div className="top-left">
                    <img src={logo} className="logo" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Header;
