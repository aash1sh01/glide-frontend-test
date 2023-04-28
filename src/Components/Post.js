import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import '../Styles/SocialMediaPost.css';

const SocialMediaPost = ({ post }) => {
  return (
    <Card className="social-media-post">
      {post.image && (
        <CardImg top className="post-image" src={post.image} alt={post.title} />
      )}
      <CardBody>
        <CardTitle className="post-title">{post.title}</CardTitle>
        <CardText className="post-body">{post.body}</CardText>
        <div className="post-actions">
          <Button className="like-button">Like</Button>
          <Button className="comment-button">Comment</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default SocialMediaPost;