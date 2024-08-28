import React from "react";
import "./Perfection.css";
import growfin_perfection_image1 from "../../assets/growfin_perfection_image1.png";
import growfin_perfection_image2 from "../../assets/growfin_perfection_image2.png";
import growfin_perfection_image3 from "../../assets/growfin_perfection_image3.png";
import growfin_perfection_image4 from "../../assets/growfin_perfection_image4.png";

const Perfection = () => {
  return (
    <div id="perfection_section">
      <div className="perfection_maintext">
        <div className="perfection_text_container1">
          <div className="inside_perfection_container1">
            <span className="perfection_first">Experience</span>
            <span className="perfection_second">Cash Application</span>
            <span className="perfection_third">Perfection</span>
          </div>
        </div>
        <div className="perfection_text2">
          <div className="perfection_text_container2">
            <span>
              Achieve touchless cash application to enable faster and accurate
              financial reporting for your business and a better experience for
              your customers.
            </span>
          </div>
        </div>
      </div>
      <div className="perfection_cards">
        <div className="perfection_cards_container">
          <div className="perfection_card1">
            <img src={growfin_perfection_image1} alt="" />
            <p className="perfection_p">
              <b>Automate Cash Application</b>
            </p>
            <p className="perfection_p2">
              Auto-match payments and extract remittances from even unstructured
              data, and achieve straight-through posting.
            </p>
          </div>
          <div className="perfection_card2">
            <img src={growfin_perfection_image2} alt="" />
            <p className="perfection_p">
              <b>Achieve Exceptional Accuracy</b>
            </p>
            <p className="perfection_p2">
              Ensure precise payment matching, even with partial or
              overpayments, to reduce posting errors and compliance nightmares.
            </p>
          </div>

          <div className="perfection_card3">
            <img src={growfin_perfection_image3} alt="" />
            <p className="perfection_p">
              <b>Deliver Real-time Visibility</b>
            </p>
            <p className="perfection_p2">
              Gain real-time visibility into cash flow and AR aging to optimize
              collection strategies and improve forecasting accuracy.
            </p>
          </div>
          <div className="perfection_card4">
            <img src={growfin_perfection_image4} alt="" />
            <p className="perfection_p">
              <b>Enhance Customer Experience</b>
            </p>
            <p className="perfection_p2">
              Avoid disputes, incorrect follow-ups and improve customer
              satisfaction with real-time, touchless cash applications.
            </p>
          </div>
        </div>
      </div>
      <div className="perfection_menu">
        <ul className="perfection_list grid">
          <li className="perfection_item">
            <a
              href="#header1_section"
              className="perfection_link perfection_link_schedule"
            >
              Schedule a Demo
            </a>
          </li>

          <li className="perfection_item">
            <a
              href="#header1_section"
              className="perfection_link perfection_link_request"
            >
              Request Access
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Perfection;
