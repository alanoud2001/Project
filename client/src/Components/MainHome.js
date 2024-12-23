import oman from "../Images/oman.jpg";

import { Container, Row, Col } from "reactstrap";
import React from "react";

const MainHome = () => {
  return (
    <>
      <Container
        className="d-flex flex-column align-items-center text-center"
        style={{
          height: "100vh",
          justifyContent: "center",
          backgroundImage: `url(${oman})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row className="justify-content-center mb-4">
          <Col>
            <h1 style={{fontSize:'50px',color:'white',marginBottom: '100px',marginTop:'5px'}}>Welcome to EpicOman</h1>
            
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs="auto">
            <div className="auth-buttons" style={{ display: "inline-block", marginRight: "20px" ,marginTop:"30px" }}>
              <a href="/login" className="auth-buttons">Login</a>
            </div>
            <div className="auth-buttons" style={{ display: "inline-block" }}>
              <a href="/register" className="auth-buttons">Register</a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainHome;
