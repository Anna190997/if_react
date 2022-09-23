import './footer.css';
import FooterLinks from '../FooterLinks/footerLinks';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_elements">
          <div className="footer_menu">
            <div className="footer_items col-6">
              <ul className="about">
                <li className="about_items">About</li>
                <FooterLinks linksName="How Triphouse works" />
                <FooterLinks linksName="Careers" />
                <FooterLinks linksName="Privacy" />
                <FooterLinks linksName="Terms" />
              </ul>
            </div>
            <div className="footer_items col-6">
              <ul className="property_types">
                <li className="property_types_items">Property types</li>
                <FooterLinks linksName="Guest houses" />
                <FooterLinks linksName="Hotels" />
                <FooterLinks linksName="Apartments" />
                <FooterLinks linksName="Villas" />
                <FooterLinks linksName="Holiday homes" />
                <FooterLinks linksName="Hostels" />
              </ul>
            </div>
            <div className="footer_items col-6">
              <ul className="support">
                <li className="support_items">Support</li>
                <FooterLinks linksName="Contact Customer Service" />
                <FooterLinks linksName="FAQ" />
              </ul>
            </div>
          </div>
        </div>
        <div className="label">
          <div className="label_items">&copy;2020 Triphouse, Inc. All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
