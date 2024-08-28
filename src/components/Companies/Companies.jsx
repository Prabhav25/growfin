import React from "react";
import "./Companies.css"; //importing css file
import growfin_companies from "../../assets/growfin_companies.png";

const Companies = () => {
  return (
    <div id="companies_section">
      <div className="companies">
        <div className="companies_image_container">
          <link rel="preload" href={growfin_companies} as="image" />
          <img
            src={growfin_companies}
            alt=""
            className="companies_house_image"
          />
        </div>
        <div className="companies_right_container">
          <div className="companies_text">
            "Growfin’s Cash Application has helped us streamline the entire cash
            application process with less manual intervention & timely posting
            of payments. We were able to achieve one of our key objectives
            within months of going live."
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
