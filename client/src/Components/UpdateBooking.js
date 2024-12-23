import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../Features/UserSlice";
import { Form, Container, Row, Col, Button } from "reactstrap";
import sands from "../Images/sands.jpg";
import Header from "./Header";
import Footer from "./Footer";

const UpdateBooking = () => {
  const { state } = useLocation();
  const user = state?.user || {};

  const [name, setName] = useState(user.name || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [fromPlace, setFromPlace] = useState(user.fromPlace || "");
  const [toPlace, setToPlace] = useState(user.toPlace || "");
  const [date, setDate] = useState(user.date || "");
  const [numOfPeople, setNumOfPeople] = useState(user.numOfPeople || 1);
  const [ages, setAges] = useState(user.ages || Array(user.numOfPeople).fill(12));
  const [totalPrice, setTotalPrice] = useState(user.totalPrice || 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to calculate the total price based on ages
  const calculateTotalPrice = (ages) => {
    let total = 0;
    ages.forEach((age) => {
      total += age > 12 ? 5 : 3.5; // Price logic: Adult = 5 OMR, Child = 3.5 OMR
    });
    setTotalPrice(total);
  };

  // Update age of a specific person
  const handleAgeChange = (index, value) => {
    const newAges = [...ages];
    newAges[index] = value;
    setAges(newAges);
    calculateTotalPrice(newAges);
  };

  // Handle number of people change
  const handleNumOfPeopleChange = (value) => {
    const count = parseInt(value);
    setNumOfPeople(count);
    const newAges = Array(count).fill(12);
    setAges(newAges);
    calculateTotalPrice(newAges);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: user.id,
        name,
        phone,
        fromPlace,
        toPlace,
        date,
        numOfPeople,
        ages,
        totalPrice,
      })
    );
    navigate("/Booking");
  };

  return (
    <Container fluid>
      
      
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
        <Col lg="6">
          <h3>Update Booking</h3>
          <Form className="div-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="From place"
              value={fromPlace}
              onChange={(e) => setFromPlace(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="To place"
              value={toPlace}
              onChange={(e) => setToPlace(e.target.value)}
            />
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label>Number of People:</label>
            <input
              type="number"
              className="form-control"
              value={numOfPeople}
              onChange={(e) => handleNumOfPeopleChange(e.target.value)}
            />

            {ages.map((age, index) => (
              <div key={index}>
                <label>Age of person {index + 1}:</label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) => handleAgeChange(index, parseInt(e.target.value))}
                />
              </div>
            ))}

            <div>
              <strong>Total Price:</strong> {totalPrice} OMR
            </div>

            <div>
              <Button type="submit" className="button">
                Update Booking
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
          <Footer />
        </Row>
    </Container>
  );
};

export default UpdateBooking;