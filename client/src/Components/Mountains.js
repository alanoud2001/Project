import m2 from "../Images/m2.jpg";
import m1 from "../Images/m1.jpg";
import type1 from "../Images/type1.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col,  Button } from "reactstrap";

const Mountains = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src={type1}
              alt="Type1"
              style={{ width: '100%', height: '650px', transition: 'transform 1s ease-in-out' }}
            />
            <div style={{
              position: 'absolute',
              top: '0',
              width: '100%',
              color: 'white',
              padding: '20px'
            }}>
              <Header />
            </div>
          </Col>
        </Row>

        <Row style={{marginBottom: '200px'}}>
          
          <Col>
            <h4 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '5px', marginTop: '100px' }}>
              Jabel Akhdar
            </h4>
            <h6 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '20px', marginTop: '20px' }}>
            Jabel Akhdar - Ad Dakhiliyah
            </h6>
            <p style={{ textAlign: 'left', fontSize: '15px', marginBottom: '30px' }}>
            The Wilayat of Jabal Al Akhdar is located in the Ad Dakhiliyah Governorate in the Sultanate of Oman, 
            and is considered one of the most important tourist destinations thanks to its high altitude (10,000 feet) and 
            its moderate climate in the summer and cold in the winter, which is similar to the Mediterranean climate. 
            Jabal Al Akhdar is characterized by its picturesque nature, from agricultural terraces, unique trees and fruits,
             high mountains, diverse terrain, and beautiful valleys, which gives it a special charm.
            </p>
            <p style={{ textAlign: 'left', fontSize: '15px' }}>Activity</p>
            <ul>
              <li>Camping and Stargazing.</li>
              <li>Rock Climbing and Via Ferrata.</li>
              <li>Cultural Visits.</li>
            </ul>
            <p style={{ textAlign: 'left', fontSize: '15px' , marginBottom: '30px'}}>
              Location: <a href="https://maps.app.goo.gl/hBjfAAKU9PAJpeuG8">Click here and take the journey</a>
            </p>
            <button color="#9f7464" className="auth-buttons" style={{color:"white"}} >
            <a href="/booking" className="auth-buttons"> Book Transport
            </a>
              </button>
          </Col>
          <Col>
            <img
              src={m2}
              alt="M2"
              style={{ width: '90%', height: '100%', marginTop: '100px', marginBottom: '100px' }}
            />
          </Col>
          
        </Row>


        <Row style={{marginBottom:'300px'}}>
          <Col>
            <img src={m1} alt="M1" style={{ width: '90%', height: '100%', marginTop: '100px' }} />
          </Col>
          <Col>
            <h4 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '5px', marginTop: '100px' }}>
              Jabel Shams
            </h4>
            <h6 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '20px', marginTop: '20px' }}>
              Al Hamra - Ad Dakhiliyah
            </h6>
            <p style={{ textAlign: 'left', fontSize: '15px', marginBottom: '30px' }}>
              Jabal Shams or Jebel Shams is a mountain located in northeastern Oman north of the town of Al-Hamra.
              It is the highest mountain in Oman, and is part of the Jebel Akhdar or Jabal Akhdar Mountains, which in
              turn belongs to the Hajar range. The mountain is a popular sightseeing area located 240 km from Muscat.
              It is known as Jabal Shams because it is the first place to receive sunrise in Oman due to its high peak.
            </p>
            <p style={{ textAlign: 'left', fontSize: '15px' }}>Activity</p>
            <ul>
              <li>Camping and Stargazing.</li>
              <li>Rock Climbing and Via Ferrata.</li>
              <li>Cultural Visits.</li>
            </ul>
            <p style={{ textAlign: 'left', fontSize: '15px' }}>
              Location: <a href="https://maps.app.goo.gl/hXcwKKLMr7ftoLBw6">Click here and take the journey</a>
            </p>
            <button color="#9f7464" className="auth-buttons" style={{color:"white"}} >
            <a href="/booking" className="auth-buttons"> Book Transport
            </a>
              </button>
          </Col>
        </Row>

        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Mountains;
