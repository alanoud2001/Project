import { Container, Row, Col } from "reactstrap"; 
import wadi from "../Images/wadi.jpg";
import { useEffect, useState } from "react";
import { loginSchemaValidation } from "../Validations/LoginValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate, Link } from "react-router-dom"; // Import Link for routing

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { msg, isLogin, user } = useSelector((state) => state.users);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchemaValidation),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
    navigate("/home");
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [isLogin, user, navigate]);

  return (
    
      <Container>
        <div>
        <Row>
          <Col style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src={wadi}
              alt="wadi"
              style={{ width: '100%', height: '650px', transition: 'transform 1s ease-in-out' }}
            />
            <div style={{
              position: 'absolute',
              top: '0',
              width: '100%',
              color: 'white',
              padding: '20px'
            }}>
{/*               <Header />
 */}            </div>
          </Col>
        </Row>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email..."
              {...register("email", {
                onChange: (e) => setemail(e.target.value),
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              {...register("password", {
                onChange: (e) => setpassword(e.target.value),
              })}
            />
            <p className="error">{errors.password?.message}</p>
          </div>

          <button type="submit" color="primary" className="button w-100 mt-3">
            Sign In
          </button>
        </form>
        {msg && <div className="error-msg text-center mt-3">{msg}</div>}

        {/* Sign up link */}
        <div className="text-center mt-4">
          <p>
            Not a member?{" "}
            <Link to="/register" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </Container>
  );
};

export default Login;
