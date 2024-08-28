import React from "react";
import "./Footer.css";
import footer_linkedin from "../../assets/footer_linkedin.png";
import footer_twitter from "../../assets/footer_twitter.png";
import footer_facebook from "../../assets/footer_facebook.png";
import footer_instagram from "../../assets/footer_instagram.png";

const Footer = () => {
  return (
    <div id="footer_section">
      <div className="footer_container">
        <div className="footer_container_inside">
          <div>
            <span>Features</span>
            <span>Strategize</span>
            <span>Collaboration</span>
            <span>Tracking</span>
            <span>Report</span>
          </div>
        </div>
        <div className="footer_container_inside">
          <div>
            <span>What's in it for you?</span>
            <span>By Role</span>
            <li className="cfo">CFOs and Directors of Finance</li>
            <li>Controllers</li>
            <li>AR Managers</li>
            <li>Collection Teams</li>
            <li>CSMs, AEs and AMs</li>
            <span>By Tech Stack</span>
          </div>
        </div>
        <div className="footer_container_inside">
          <div>
            <span>Resources</span>
            <span>Blog</span>
            <span>Webinars</span>
            <span>The Casheroes</span>
            <span>ROI Calculator</span>
          </div>
        </div>
        <div className="footer_container_inside">
          <div>
            <span>Company</span>
            <span>About us</span>
            <span>Careers</span>
            <span>Book a demo</span>
          </div>
        </div>
        <div className="footer_container_inside">
          <div>
            <span>Contact us</span>
            <span>
              <a className="footer_mail" href="mailto:hello@growfin.ai">
                hello@growfin.ai
              </a>
            </span>
            <span>3082, Moser Way,</span>
            <span>Marietta, GA 30060</span>
          </div>
        </div>
        <div className="footer_container_inside">
          <div>
            <span>Legal</span>
            <span>Terms of use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <div className="down_footer">
        <div className="footer_social">
          <img src={footer_linkedin} alt="" />
          <img src={footer_twitter} alt="" />
          <img src={footer_facebook} alt="" />
          <img src={footer_instagram} alt="" />
        </div>
        <div className="footer_copyright">
          <span>Copyright © 2023 Growfin. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
