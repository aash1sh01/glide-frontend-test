// SocialMediaPosts.js

import React from 'react';
import SocialMediaPost from './Post';
import { Row, Col, Container } from 'reactstrap';
import '../Styles/SocialMediaPosts.css';

const SocialMediaPosts = () => {
  const posts = [
    {
      title: 'KU Alum gets into Stanford',
      body: 'A person from KU got into Stanford!',
      image: 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g',
    },
    {
      title: 'Covid 19 has been a challenge',
      body: 'Many Students have been dropping out of school due to Covid 19',
      image: 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g',
    },
  ];

  return (
    <Container>
      <Row>
        {posts.map((post, index) => (
          <Col xs="12" key={index}>
            <SocialMediaPost post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SocialMediaPosts;
