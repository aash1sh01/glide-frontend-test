// SocialMediaPosts.js

import React from 'react';
import SocialMediaPost from './Post';
import { Row, Col, Container } from 'reactstrap';
import '../Styles/SocialMediaPosts.css';

const SocialMediaPosts = () => {
  const posts = [
    {
      user: [{
        user_id: 1,
        name: 'Aashish',
        profilePicture: 'https://i.pravatar.cc/150?img=1',
      }],
      timestamp: '2 hours ago',
      type: 'text_image',
      title: 'KU Alum gets into Stanford',
      body: 'A person from KU got into Stanford!',
      image: 'https://picsum.photos/id/3/5000/3333',
    },
    {
      user: [{
        user_id: 2,
        name: 'Jessica',
        profilePicture: 'https://i.pravatar.cc/150?img=2',
      }],
      timestamp: '4 hours ago',
      type: 'text_image',
      title: 'Covid 19 has been a challenge',
      body: 'Many students have been dropping out of school due to Covid 19.',
      image: 'https://picsum.photos/id/4/5000/3333',
    },
    {
      user: [{
        user_id: 3,
        name: 'Michael',
        profilePicture: 'https://i.pravatar.cc/150?img=3',
      }],
      timestamp: '6 hours ago',
      type: 'image',
      title: 'A beautiful sunset',
      body: '',
      image: 'https://picsum.photos/id/5/5000/3333',
    },
    {
      user: [{
        user_id: 4,
        name: 'Sophia',
        profilePicture: 'https://i.pravatar.cc/150?img=4',
      }],
      timestamp: '8 hours ago',
      type: 'text',
      title: 'The importance of mental health',
      body: 'Mental health is crucial for overall well-being. Make sure to take breaks and practice self-care!',
      image: '',
    },
    {
      user: [{
        user_id: 5,
        name: 'Carlos',
        profilePicture: 'https://i.pravatar.cc/150?img=5',
      }],
      timestamp: '10 hours ago',
      type: 'text_file',
      title: 'New library resources',
      body: 'The university library has added new resources, including online books and research materials.',
      image: '',
      attachments: [
        {
          type: 'pdf',
          name: 'New_Resources.pdf',
          url: 'https://example.com/new_resources.pdf',
        },
      ],
    },
    {
      user: [{
        user_id: 6,
        name: 'Emily',
        profilePicture: 'https://i.pravatar.cc/150?img=6',
      }],
      timestamp: '12 hours ago',
      type: 'text_files',
      title: 'Upcoming event: Hackathon',
      body: 'Don\'t forget to sign up for the upcoming hackathon! Great prizes await the winners.',
      image: '',
      attachments: [
        {
          type: 'pdf',
          name: 'Hackathon_Rules.pdf',
          url: 'https://example.com/hackathon_rules.pdf',
        },
        {
          type: 'pdf',
          name: 'Hackathon_Schedule.pdf',
          url: 'https://example.com/hackathon_schedule.pdf',
        },
      ],
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