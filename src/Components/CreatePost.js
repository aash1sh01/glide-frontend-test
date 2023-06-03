import React, { useState } from 'react';
import { Button, Input, Form, FormGroup, Label, InputGroup } from 'reactstrap';
import { FaImage, FaPaperclip } from 'react-icons/fa';
import FormData from 'form-data';

function CreatePost() {
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [postImages, setPostImages] = useState([]);
  const [postFiles, setPostFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', postTitle);
    formData.append('text', postText);
    postImages.forEach((image) => formData.append('images', image));
    postFiles.forEach((file) => formData.append('files', file));

    try {
      const response = await fetch('https://your-backend-api.example.com/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Post created successfully');
        // Handle successful post creation, e.g., clear form, show success message, etc.
      } else {
        console.error('Error creating post:', response.statusText);
        // Handle error during post creation
      }
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle network errors
    }
  };

  const handleImagesChange = (e) => {
    setPostImages([...e.target.files]);
  };

  const handleFilesChange = (e) => {
    setPostFiles([...e.target.files]);
  };

  return (
    <Form onSubmit={handleSubmit} className="create-post-form">
      <FormGroup>
        <Input
          type="text"
          name="postTitle"
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Post title"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="postText"
          id="postText"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="What's on your mind?"
        />
      </FormGroup>
      <InputGroup>
        <Label for="postImages" className="btn btn-secondary">
          <FaImage /> Add Images
        </Label>
        <input
          type="file"
          id="postImages"
          hidden
          accept="image/*"
          multiple
          onChange={handleImagesChange}
        />
        <Label for="postFiles" className="btn btn-secondary">
          <FaPaperclip /> Attach Files
        </Label>
        <input
          type="file"
          id="postFiles"
          hidden
          multiple
          onChange={handleFilesChange}
        />
        <Button color="primary" type="submit" className='submit-secondary'>
          Post
        </Button>
      </InputGroup>
    </Form>
  );
}

export default CreatePost;
