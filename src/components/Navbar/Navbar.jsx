import React, { useState } from "react";
import "./Navbar.css";
import growfin_logo from "../../assets/growfin_logo.png";

const Navbar = () => {
  const [header1, setHeader1] = useState(false);
  const changeBG = () => {
    if (window.scrollY >= 3) {
      setHeader1(true);
    } else {
      setHeader1(false);
    }
  };
  window.addEventListener("scroll", changeBG);

  const [Toggle, showMenu] = useState(false);
  function handleMenuClick() {
    showMenu(false);
  }

  return (
    <div id="header1_section">
      <div className={header1 ? "header1 scroll" : "header1"}>
        <div className="logo_imagetext">
          <img className="logo_image" src={growfin_logo} alt="" />
        </div>

        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#header1_section"
                className="nav_link nav_link_schedule"
                onClick={handleMenuClick}
              >
                Schedule a Demo
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#header1_section"
                className="nav_link nav_link_request"
                onClick={handleMenuClick}
              >
                Request Access
              </a>
            </li>
          </ul>
        </div>

        <div className="people_menu">
          <button className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            {Toggle ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
