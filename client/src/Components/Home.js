import sands from "../Images/sands.jpg";
import aboutus from "../Images/aboutus.jpg";
import salalah from "../Images/salalah.jpg";
import sands2 from "../Images/sands2.jpg";
import Mutrah from "../Images/Mutrah.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Location from "./Location";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap"; //import the Reactstrap Components

const Home = () => {
  const { isLogin, user} = useSelector(state => state.users)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) { 
      navigate("/login") }
  
  },[user,isLogin])
  
  return (
    <>
    <Container>
    <Row>
          <Col style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src={sands}
              alt="sands"
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
        <Row>
        <Location />
        </Row>
      <Row>
        <Col>
        <img src={aboutus} alt="Aboutus" style={{width:'90%', height:'100%',marginTop:'100px'}}/>
        </Col>
        <Col>
        <h4 style={{textAlign:'center', fontSize:'30px',marginBottom: '20px',marginTop:'100px'}}>About Us</h4>
        <p  style={{textAlign:'left', fontSize:'25px',marginBottom: '30px'}}>Welcome to EpicOman, your gateway to experiencing the
           stunning beauty and rich culture of Oman. Founded with
            a passion for adventure and a love for Oman’s unique
             heritage, we are committed to creating unforgettable 
             journeys that immerse you in the natural wonders and
              vibrant traditions of this magnificent land.</p>
        <p  style={{textAlign:'left', fontSize:'25px', marginBottom: '30px'}}>From the golden dunes of Wahiba
           Sands to the towering cliffs of Jebel Shams,
            the tranquil waters of the Arabian Sea to the bustling 
            souks of Muscat, Oman offers a diverse landscape waiting 
            to be explored. Whether you’re an adrenaline seeker,
             a culture enthusiast or a nature lover, we offer customized
              tours that showcase the best of Oman’s landscape, culture
               and adventure.</p>
        <p style={{textAlign:'center', fontSize:'25px', fontWeight:'bold'}}> 
          Explore Oman. Embrace adventure. Live the extraordinary.</p>
          <p style={{textAlign:'center', fontSize:'25px', fontWeight:'bold'}}>
            Let’s start your adventure today!</p>
        </Col>
      </Row>
      <Row>
        <h1 style={{textAlign:'left', fontSize:'30px',marginBottom: '30px',marginTop:'150px'}}>Most recently visited</h1>
      </Row>

      <Row style={{marginBottom: '200px'}}>
          <Col>
            <Card className="w-100 h-100">
              <img src={salalah} alt="Salalah" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <CardBody>
                <CardTitle tag="h5">Salalah</CardTitle>
                <CardText>Darbat is a beautiful destination known for its natural landscapes and rich cultural heritage.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="w-100 h-100">
              <img src={sands2} alt="Sands" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <CardBody>
                <CardTitle tag="h5">Wahiba Sands</CardTitle>
                <CardText>Wahiba Sands is a stunning desert known for its golden dunes and endless horizons.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="w-100 h-100">
              <img src={Mutrah} alt="Mutrah" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <CardBody>
                <CardTitle tag="h5">Mutrah</CardTitle>
                <CardText>Mutrah is famous for its bustling souk and scenic coastal views.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
    </Container>
      
    </>
  );
};

export default Home;