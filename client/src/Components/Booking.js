import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../Features/UserSlice";
import { Container, Row, Col, Form, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import sands from "../Images/sands.jpg";


const Booking = () => {
  const userList = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [numOfPeople, setNumOfPeople] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [ages, setAges] = useState([12]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      addUser({
        name: data.name,
        phone: data.phone,
        fromPlace: data.fromPlace,
        toPlace: data.toPlace,
        date: data.date,
        numOfPeople,
        totalPrice,
      })
    );
  };

  const calculateTotal = () => {
    let total = 0;
    ages.forEach((age) => {
      total += age > 12 ? 5 : 3.5;
    });
    setTotalPrice(total);
  };

  const handleAgeChange = (index, value) => {
    const newAges = [...ages];
    newAges[index] = value;
    setAges(newAges);
    calculateTotal();
  };

  const addPerson = () => {
    setAges([...ages, 12]);
    setNumOfPeople(numOfPeople + 1);
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
          <Form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Booking Form */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required." })}
            />
            <p className="error">{errors.name?.message}</p>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone"
              {...register("phone", {
                required: "Phone is required.",
                pattern: { value: /^\d+$/, message: "Phone must contain only digits." },
              })}
            />
            <p className="error">{errors.phone?.message}</p>

            <input
              type="text"
              className="form-control"
              placeholder="From place"
              {...register("fromPlace", { required: "From place is required." })}
            />
            <p className="error">{errors.fromPlace?.message}</p>

            <input
              type="text"
              className="form-control"
              placeholder="To place"
              {...register("toPlace", { required: "To place is required." })}
            />
            <p className="error">{errors.toPlace?.message}</p>

            <input
              type="date"
              className="form-control"
              {...register("date", { required: "Date is required." })}
            />
            <p className="error">{errors.date?.message}</p>

            <label>Number of People:</label>
            <input
              type="number"
              className="form-control"
              value={numOfPeople}
              onChange={(e) => {
                const newCount = parseInt(e.target.value);
                setNumOfPeople(newCount);
                setAges(Array(newCount).fill(12));
                calculateTotal();
              }}
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

            <div>Total Price: {totalPrice} OMR</div>
            <div>
              <button type="submit" className="button">Book Now</button>
            </div>
          </Form>
        </Col>
      </Row>

      <Row style={{marginTop:'60px'}}> 
        <Col>
        </Col>
        <Col lg="12">
          <h3>List of Bookings</h3>
          <table className="table table-striped table-warning">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>From Place</th>
                <th>To Place</th>
                <th>Date</th>
                <th>People</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.fromPlace}</td>
                  <td>{user.toPlace}</td>
                  <td>{user.date}</td>
                  <td>{user.numOfPeople}</td>
                  <td>{user.totalPrice} OMR</td>
                  <td>
                    <Button onClick={() => dispatch(deleteUser(user.id))}>Delete</Button>
                    <Link
                      to={`/update/${user.id}`}
                      className="btn btn-info"
                      state={{ user }}
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Footer/>
      </Row>
    </Container>
  );
};

export default Booking;
