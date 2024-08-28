import React from "react";
import "./Embrace.css"; //importing css file

const Embrace = () => {
  return (
    <div className="embrace_main">
      <div className="embrace_container">
        <div className="embrace_text">
          <p>Embrace the Future of Cash</p>
          <p>Application Today</p>
        </div>
        <div className="embrace_menu">
          <ul className="embrace_list grid">
            <li className="embrace_item">
              <a
                href="#embrace_section"
                className="embrace_link embrace_link_schedule"
              >
                Schedule a Demo
              </a>
            </li>

            <li className="embrace_item">
              <a
                href="#footer_section"
                className="embrace_link embrace_link_request"
              >
                Request Access
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Embrace;
