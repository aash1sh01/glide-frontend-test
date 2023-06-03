import React from "react";
import SocialMediaPosts from "../Components/SocialMediaFeed";
import { FaCompass, FaListAlt, FaThumbsUp } from 'react-icons/fa';
import ToDoList from "../Components/ToDoList";
import UserProfile from "../Components/UserProfile";
import { Container, Row, Col } from 'reactstrap';
import "../Styles/Community.css";
import CreatePost from "../Components/CreatePost";
function Community() {
  return (
    <div className="community-container">
      <div className="community-content">
        <Container>
          <Row>
            <Col md="8">
              <div className="community-posts">
                <CreatePost/>
                <SocialMediaPosts />
              </div>
            </Col>
            <Col md="4">
              <div className="community-action-items">
                <UserProfile />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Community;
