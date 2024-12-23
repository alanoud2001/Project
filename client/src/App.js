import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
//import UserUpdate from "./Components/UserUpdate";
import Booking from "./Components/Booking";
import UpdateBooking from "./Components/UpdateBooking";
import Mountains from "./Components/Mountains";
import MyBooking from "./Components/MyBooking";
import User from "./Components/User";



import MainHome from "./Components/MainHome";
import Feadback from "./Components/Feadback";

//import { useSelector } from "react-redux";

//<Route path="/update/:id" element={<UserUpdate />}></Route>

const App = () => {
  //const { user } = useSelector((state) => state.users);

  return (
    <Container fluid>
      {/* <Row>
      {user ? <Header /> : null}
      </Row> */}
      <Router>
      
      
      <Row className="main">
      <Routes>
           <Route path="/" element={<MainHome />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            {/* <Route path="/profile" element={<Profile />}></Route> */}
            <Route path="/comment" element={<Feadback />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/home/type1" element={<Mountains />}></Route>
            <Route path="/register" element={<Register />}></Route>
           <Route path="/mybooking" element={<MyBooking />}></Route>
           <Route path="/update/:id" element={<UpdateBooking />}></Route>
            <Route path="/user" element={<User />}></Route>







      </Routes>
      </Row>
      
      </Router>
    </Container>
  );
};

export default App;
