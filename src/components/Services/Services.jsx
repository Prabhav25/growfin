import React from "react";
import "./Services.css"; //importing css file
import growfin_services from "../../assets/growfin_services.png";

const Services = () => {
  return (
    <div id="services_section">
      <div className="services">
        <div className="services_image_container">
          <link rel="preload" href={growfin_services} as="image" />
          <img src={growfin_services} alt="" className="services_house_image" />
        </div>
        <div className="services_right_container">
          <div className="services_secondpart">
            <div className="services_frontexplain">
              <p className="services_frontheading">
                <span className="services_percent">95%</span>
                <span className="services_explain">
                  Increase in same-day invoice posting
                </span>
              </p>
              <p className="services_frontheading">
                <span className="services_percent">70%</span>
                <span className="services_explain">
                  Reduction in posting delays and errors
                </span>
              </p>
              <p className="services_frontheading">
                <span className="services_percent">75%</span>
                <span className="services_explain">
                  Increase in automation for manual Cash Application
                </span>
              </p>
              <p className="services_frontheading">
                <span className="services_percent">90%</span>
                <span className="services_explain">
                  Improvement in customer communication & experience
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
