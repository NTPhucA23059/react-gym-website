import React, { useState } from "react";
import './Header.css';
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />

            {/* Hiển thị icon bars khi mobile và menu chưa mở */}
            {menuOpened === false && mobile === true ? (
                <div
                    style={{
                        backgroundColor: "var(--appColor)",
                        padding: "0.5rem",
                        borderRadius: "5px",
                    }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img
                        src={Bars}
                        alt=""
                        style={{ width: "1rem", height: "1rem" }}
                    />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="programs" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>Programs</Link>
                    </li>
                    <li>
                        <Link to="reasons" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>Why us</Link>
                    </li>
                    <li>
                        <Link to="plans" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>Plans</Link>
                    </li>
                    <li>
                        <Link to="testimonials" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>Testimonials</Link>
                    </li>
                </ul>

            )}
        </div>
    );
};

export default Header;
