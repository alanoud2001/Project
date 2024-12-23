import { Button,Container,Row,Col} from "reactstrap";
import fort from "../Images/fort.jpg";

import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
//import { addUser, delateUser } from "../Features/UserSlice";
//import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Features/UserSlice";

const Register = () => {
  //const userList = useSelector((state)=>state.users);
  const { user,msg}  = useSelector((state) => state.users);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

    // Handle form submission
    const onSubmit = (data) => {
      const userData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
      };
      //console.log("Submitting user data:", userData);
     dispatch(registerUser(userData))
     navigate("/login")
    }
  return (
    <Container >
      <Row>
           <Col style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src={fort}
              alt="Fort"
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
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
          {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
          <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
            </div>
            <section className="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name..."
                  onChange={(e)=>setname(e.target.value)}
                  {...register("name")} 
                />
                 <p className="error">{errors.name?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  onChange={(e)=>setemail(e.target.value)}
                  {...register("email")} 

                />
              <p className="error">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone..."
                  onChange={(e)=>setphone(e.target.value)}
                  {...register("phone")} 

                />
              <p className="error">{errors.phone?.message}</p>
              </div>


              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password..."
                  onChange={(e)=>setpassword(e.target.value)}
                  {...register("password")} 

                />
                 <p className="error">{errors.password?.message}</p>

              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password..."
                  onChange={(e)=>setconfirmPassword(e.target.value)}
                  {...register("confirmPassword")} 

                />
                 <p className="error">{errors.confirmPassword?.message}</p>

              </div>
              <button href = "/login" color="primary" className="button">
                Register
              </button>
            </section>
          </form>
        </Col>
        <Col className="columndiv2" lg="6">
        </Col>
        
      </Row>
      {/* <Row>
        <Col md={6}>
          List of Users
          <table>
            <tbody>
              {userList.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={()=>deleteHandler(user.id)}>Delete</button>
                  </td>
                  <td>
                  <Link to={`/update/${user.id}`} className="btn btn-info">
                    Update
                      </Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row> */}
      <Row>
        <Footer/>
      </Row>

    </Container>
  );
};

export default Register;
