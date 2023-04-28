import React, { useState, useRef, useEffect } from 'react';
import JobCard from './JobCard';
import { FaSearch } from 'react-icons/fa';
import '../Styles/JobBoard.css'
import { Container, Row, Col, Input, InputGroupText, InputGroup} from 'reactstrap';

const JobBoard = () => {
    const jobs = [
        {
          id: 1,
          company: "Acme Inc.",
          title: "Software Engineer",
          description: "We are looking for a skilled software engineer to join our team.",
          location: "San Francisco, CA",
          qualifications:
            "Bachelor’s degree in computer science or related field, 5+ years of experience with full-stack development, experience with React, Node.js, and SQL",
        },
        {
          id: 2,
          company: "Globex Corporation",
          title: "Marketing Manager",
          description: "We are seeking an experienced marketing manager to lead our marketing efforts.",
          location: "New York, NY",
          qualifications:
            "Bachelor’s degree in marketing or related field, 7+ years of experience in marketing, experience with SEO, SEM, and social media marketing",
        },
        {
          id: 3,
          company: "Initech",
          title: "Product Designer",
          description: "We are looking for a talented product designer to join our design team.",
          location: "Los Angeles, CA",
          qualifications:
            "Bachelor’s degree in design or related field, 3+ years of experience in product design, proficiency with design tools such as Sketch, Figma, and Adobe Creative Suite",
        },
        {
          id: 4,
          company: "Stark Industries",
          title: "Backend Developer",
          description: "We are hiring a Backend Developer to join our team and help us build amazing products.",
          location: "Seattle, WA",
          qualifications:
            "Bachelor’s degree in computer science or related field, 3+ years of experience with backend development, experience with Node.js, SQL and AWS",
        },
        {
          id: 5,
          company: "Wayne Enterprises",
          title: "Frontend Developer",
          description: "We are seeking a talented Frontend Developer to join our team and help us build beautiful and responsive interfaces.",
          location: "Chicago, IL",
          qualifications:
            "Bachelor’s degree in computer science or related field, 3+ years of experience with frontend development, experience with React, Redux and CSS preprocessors",
        },
        {
          id: 6,
          company: "Umbrella Corporation",
          title: "Data Scientist",
          description: "We are looking for a Data Scientist to join our team and help us extract insights from large datasets.",
          location: "Boston, MA",
          qualifications:
            "Master’s degree in computer science, statistics or related field, 5+ years of experience with data analysis, experience with Python, R and SQL",
        },
        {
          id: 7,
          company: "Oscorp",
          title: "UI/UX Designer",
          description: "We are seeking a talented UI/UX Designer to join our design team and help us create engaging and intuitive user interfaces.",
          location: "Austin, TX",
          qualifications:
            "Bachelor’s degree in design or related field, 3+ years of experience in UI/UX design, proficiency with design tools such as Sketch, Figma and Adobe Creative Suite",
        },
      ];
      

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobs.filter(
    job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.qualifications.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [expandedJobId, setExpandedJobId] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => {
      setExpandedJobId(null);
    };

    if (expandedJobId !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedJobId]);
  
  return (
    <Container fluid className="job-board-container">
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Input
              type="text"
              placeholder="Search Jobs...(Enter a keyword)"
              value={searchTerm}
              onChange={handleSearch}
              className="job-search-input"
            />
                <FaSearch className="job-search-icon"/>
          </InputGroup>
        </Col>
      </Row>
      <Row className="job-card-row">
      {filteredJobs.map((job) => (
          <Col md={6} lg={4} key={job.id} className="mb-4">
            <JobCard job={job} expanded={job.id === expandedJobId} onToggleExpand={() => setExpandedJobId(job.id)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobBoard;



