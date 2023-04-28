// ApplyJob.js
import React from 'react';
import ApplyForm from '../Components/ApplyForm';
import '../Styles/ApplyJob.css';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';

const ApplyJob = () => {
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <Container>
      <Row className="apply-job-row">
        <Col xs="12" md="6" className="job-info-container">
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Qualifications:</strong> {job.qualifications}</p>
          <p>{job.description}</p>
        </Col>
        <Col xs="12" md="6" className="job-info-container">
          <ApplyForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyJob;

