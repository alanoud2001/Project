import { useSelector } from "react-redux";
import userimg from "../Images/user.png";
import Location from "./Location";
import { Col, Row } from "reactstrap";

const User = () => {
 const { user } = useSelector((state) => state.users);
  return (
    
      <Row>
        <Col md={6}>
      <img src={userimg} className="userImage" alt=""   style={{width:'40px', height:'40px'}}/>
      <h6>{user?.name}</h6>
      <h6>{user?.email}</h6>
      <Location />
      </Col >
      </Row>
  );
};

export default User;
