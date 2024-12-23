import React from "react";
import { Col, Row } from "reactstrap";
import twitter from "../Images/twitter.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#A67C6B", color: "white", padding: "20px", textAlign: "center" }}>
      <div>
        <Row className="justify-content-between align-items-left">
          {/* Column 1 */}
          <Col md="3" sm="6" xs="12" className="mb-3">
            <h2>EpicOman</h2><div>
              <br></br>
            <p>Follow Us | 
              <a href="https://www.facebook.com/"><img src={twitter} alt="Twitter" style={{ width: "20px", margin: "0 5px" , color:"white"}}/></a>
              <a href="#"><img src={facebook}alt="Facebook" style={{ width: "20px", margin: "0 5px" , color:"white"}}/></a>
              <a href="#"><img src={instagram} alt="Instagram" style={{ width: "20px", margin: "0 5px", color:"white" }}/></a>
              <a href="#"><img src={whatsapp} alt="WhatsApp" style={{ width: "20px", margin: "0 5px", color:"white"}}/></a>
              </p>
            </div>
          </Col>

          {/* Column 2 */}
          <Col md="2" sm="6" xs="12" className="mb-3">
            <h5>Website</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>About</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Tours</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Team</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacts</a></li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md="2" sm="6" xs="12" className="mb-3">
            <h5>Support</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Help & Support</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Terms & Conditions</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>24/7h Services</a></li>
            </ul>
          </Col>

          {/* Column 4 */}
          <Col md="3" sm="6" xs="12" className="mb-3">
            <h5>Communication</h5>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Drop a line: 999999999</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Email Address: tourism@gmail.com</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Visit Office: UTAS Nizwa</a></li>
            </ul>
          </Col>
        </Row>
        {/* Footer Bottom */}
        <hr/>
        <div  className="copyright">
          <p>Tourism Adventures &copy; Copyright 2024. Al-Anoud, Fatma, Heba.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;