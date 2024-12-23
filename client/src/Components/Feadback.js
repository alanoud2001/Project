//import logo from "../Images/logo-t.png";
import Posts from "./Posts";
import SharePosts from "./SharePost";
import { Row } from "reactstrap"; //import the Reactstrap Components
import Header from "./Header"; 
import Footer from "./Footer";
const Feadback = () => {

  return (
    <div>
      <Header/> 
    <div>
      <Row>
        <SharePosts />
      </Row>
      <Row>
        <Posts />
      </Row>
    </div>
    <Footer/> 
    </div>
  );
};

export default Feadback;
