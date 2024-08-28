import React from "react";
import "./Capture.css";
import growfin_capture from "../../assets/growfin_capture.png";
import growfin_capture_house from "../../assets/growfin_capture_house.png";
import growfin_100 from "../../assets/growfin_100.png";

const Capture = () => {
  return (
    <div id="capture_section">
      <div className="capture">
        <div className="capture_left_container">
          <div className="capture_secondpart">
            <div className="capture_frontexplain">
              <p className="capture_frontheading">
                <span>Instantly Capture All </span>
                <span>Incoming Payments</span>
              </p>

              <p className="capture_subheading">
                Radically minimize manual intervention and achieve same-day
                closure with Growfin’s ML-powered Cash Application that delivers
                accurate, touchless posting.
              </p>
            </div>
            <div className="capture_container_banks">
              <div className="capture_container_banks1">
                <img src={growfin_capture_house} alt="" />
                <p>Integrates with all major banks</p>
              </div>
              <div className="capture_container_banks2">
                <img src={growfin_100} alt="" />
                <p>Identification of all transactions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="capture_image_container">
          <link rel="preload" href={growfin_capture} as="image" />
          <img src={growfin_capture} alt="" className="capture_houseimage" />
        </div>
      </div>
    </div>
  );
};

export default Capture;
