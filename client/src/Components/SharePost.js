import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Row,
  Input,
} from "reactstrap";
import { savePost } from "../Features/PostSlice";

const SharePosts = () => {
  const [postMsg, setpostMsg] = useState("");
  const {user} = useSelector((state) => state.users);
  const dispatch=useDispatch()
  const handlePost=()=>{
    if(!postMsg.trim()){
      alert('post message is requied')
      return
    }
    const postData={
      postMsg:postMsg,
      email:user.email
    }
    dispatch(savePost(postData))
    setpostMsg('')
  }
  return (
    <Container>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your opinion about the trip..."
            type="textarea"
            value={postMsg}
            onChange={e=>setpostMsg(e.target.value)}
          />
          <button type="submit"  className="button w-100 mt-3" onClick={handlePost}>Share</button>
        </Col>
      </Row>
    </Container>
  );
};

export default SharePosts;
