import React from "react";
import "./Header.css"; //importing css file
import growfin_header from "../../assets/growfin_header.png";

const Header = () => {
  return (
    <div id="header_section">
      <div className="header">
        <div className="left_container">
          <div className="secondpart">
            <div className="frontexplain">
              <p className="frontheading">
                <span>Real-Time</span>
                <span> Cash Application</span>
                <span>Software</span>
              </p>

              <p className="subheading">
                Radically minimize manual intervention and achieve same-day
                closure with Growfin’s ML-powered Cash Application that delivers
                accurate, touchless posting.
              </p>
            </div>

            <div className="header_menu">
              <ul className="header_list grid">
                <li className="header_item">
                  <a
                    href="#header1_section"
                    className="header_link header_link_schedule"
                  >
                    Schedule a Demo
                  </a>
                </li>

                <li className="header_item">
                  <a
                    href="#header1_section"
                    className="header_link header_link_request"
                  >
                    Request Access
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="image_container">
          <link rel="preload" href={growfin_header} as="image" />
          <img src={growfin_header} alt="" className="houseimage" />
        </div>
      </div>
    </div>
  );
};

export default Header;
