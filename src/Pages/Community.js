import React from "react";
import SocialMediaPosts from "../Components/SocialMediaFeed";
import { FaCompass, FaListAlt, FaThumbsUp } from 'react-icons/fa';
import ToDoList from "../Components/ToDoList";
import ActionItems from "../Components/ActionItems";
import { Container, Row, Col } from 'reactstrap';
import "../Styles/Community.css";

function Community() {
  return (
    <div className="community-container">
      <div className="community-header">
        <h1 className="community-title">
          <FaCompass className="community-icon" />
          Explore your space
          <FaListAlt className="community-icon" />
        </h1>
      </div>
      <div className="community-content">
        <Container>
          <Row>
            <Col md="4">
              <div className="community-todo">
                <ToDoList />
              </div>
            </Col>
            <Col md="4">
              <div className="community-posts">
                <SocialMediaPosts />
              </div>
            </Col>
            <Col md="4">
              <div className="community-action-items">
                <ActionItems />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Community;
