import React from "react";
import "./Integration.css"; //importing css file
import growfin_integration1 from "../../assets/growfin_integration1.png";
import growfin_integration3 from "../../assets/growfin_integration3.png";
import growfin_integration2 from "../../assets/growfin_integration2.png";

const Integration = () => {
  return (
    <div className="integration_main">
      <div className="integration_container">
        <div className="integration_container1">
          <span className="integration_bold">Tight ERP Integration</span>
          <div className="integration_text">
            <span>
              Keep your books accurate and up-to-date, and the auditors at bay
              with a seamless 2-way integration with your ERP.
            </span>
          </div>

          <div className="integration_container_image">
            <img src={growfin_integration1} alt="" />
          </div>
        </div>
        <div className="integration_container2">
          <span className="integration_bold">Unmatched Security</span>
          <div className="integration_text">
            <span>
              Stay confident and compliant with software that’s approved by the
              world’s most trusted certifications.
            </span>
          </div>
          <div className="integration_container_image">
            <img
              className="growfin_integration2_image"
              src={growfin_integration2}
              alt=""
            />
          </div>
        </div>
        <div className="integration_container3">
          <span className="integration_bold">Wide Bank Coverage</span>
          <div className="integration_text">
            <span>
              Out-of-the-box connection to all your bank accounts across
              geographies to read payments in real-time.
            </span>
          </div>
          <div className="integration_container_image">
            <img src={growfin_integration3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
