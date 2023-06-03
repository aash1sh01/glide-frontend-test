import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Button } from 'reactstrap';
import { FaFilePdf, FaFileWord, FaThumbsUp, FaComment } from 'react-icons/fa';
import '../Styles/SocialMediaPost.css';

const getFileIcon = (attachment) => {
  const extension = attachment.name.split('.').pop().toLowerCase();

  switch (extension) {
    case 'pdf':
      return <FaFilePdf className="file-icon" />;
    case 'doc':
    case 'docx':
      return <FaFileWord className="file-icon" />;
    default:
      return <span className="file-icon">{extension.toUpperCase()}</span>;
  }
};

const SocialMediaPost = ({ post }) => {
  const user = post.user[0]; // Access the first element of the user array

  return (
    <Card className="social-media-post">
      <div className="post-header">
        <img src={user.profilePicture} alt={user.name} className="profile-picture" />
        <div className="post-info">
          <h5 className="user-name">{user.name}</h5>
          <p className="post-timestamp">{post.timestamp}</p>
        </div>
      </div>
      {post.type === 'text_image' && post.image && (
        <CardImg top className="post-image" src={post.image} alt={post.title} />
      )}
      <CardBody>
        {post.title && <CardTitle className="post-title">{post.title}</CardTitle>}
        {post.body && <CardText className="post-body">{post.body}</CardText>}
        {post.attachments && post.attachments.map((attachment, index) => (
          <div key={index} className="attachment">
            {getFileIcon(attachment)}
            <a href={attachment.url} target="_blank" rel="noopener noreferrer">
              {attachment.name}
            </a>
          </div>
        ))}
      </CardBody>
      <div className="post-footer">
        <Button className="like-button"><FaThumbsUp /> Like</Button>
        <Button className="comment-button"><FaComment /> Comment</Button>
      </div>
    </Card>
  );
};

export default SocialMediaPost;
