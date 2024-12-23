import { 
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logo from "../Images/logo.png";
import { Link,useNavigate } from "react-router-dom";
import { logout } from "../Features/UserSlice"; 
import { useDispatch } from "react-redux";
import User from "./User"
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout())
    navigate("/");
}
    return (
    <div>
      <Navbar>
        <Nav>
          <NavItem>
              <Link><img src={logo} className="logo" alt=" "/></Link>
          </NavItem>          
          <NavItem>
              <Link to="/home">Home</Link>
          </NavItem>

          
          {/* Dropdown for Type */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Type
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="./type1">mountains</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="#">Caves</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="#">Seas & Wadi</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
              <Link to="/comment">Feadback</Link>
          </NavItem>
          <NavItem>
            <Link onClick={handleLogout}>Logout</Link> {/* to='/login' */}
          </NavItem>
        </Nav>
       < User/>
        {/* <div className="auth-buttons">
          <a href="/login" className="login-btn"onClick={handleLogout}>Logout</a>
          <a href=" " className="register-btn">Register</a>
        </div> */}
      </Navbar>
    </div>
  );
};

export default Header;