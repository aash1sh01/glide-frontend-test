import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
  Card
} from 'reactstrap';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    resume: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Submit the form data here
  };

  return (
    <Container className="apply-form-container">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3 className="apply-form-title">Apply!!</h3>
          <Form className="apply-form" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="resume">Resume</Label>
              <Input
                type="file"
                name="resume"
                id="resume"
                onChange={handleChange}
              />
              <FormText color="muted">
                Please attach your resume in PDF format.
              </FormText>
            </FormGroup>
            <Button type="submit" color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyForm;
