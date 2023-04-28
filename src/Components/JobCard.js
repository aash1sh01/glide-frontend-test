// JobCard.js
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaBriefcase } from 'react-icons/fa';
import '../Styles/JobCard.css';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job, expanded, onToggleExpand }) => {

  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onToggleExpand();
  };

  const history = useNavigate();


  const handleApplyClick = (event) => {
    event.stopPropagation();
    history('/apply', { state: { job: job } });
  };
  return (
    <Card className={`job-card ${expanded ? 'expanded' : ''}`} onClick={handleSeeMoreClick}>
      <CardBody>
        <CardTitle className="job-title">{job.title}</CardTitle>
        <CardText className={`job-description ${expanded ? '' : 'collapsed'}`}>
          {job.description}
        </CardText>
        <CardText className={expanded ? '' : 'collapsed'}>
          <small className="job-location">{job.location}</small>
        </CardText>
        <CardText className={`job-qualifications ${expanded ? '' : 'collapsed'}`}>
          <strong>Qualifications:</strong> {job.qualifications}
        </CardText>
        <CardText className={expanded ? '' : 'collapsed'}>
          <strong className="job-company">Company:</strong> {job.company}
        </CardText>
        <Button className="job-apply-button mt-3 mr-2" color="primary" onClick={handleApplyClick}>
          <FaBriefcase className="apply-icon mr-2" /> Apply
        </Button>
        <Button className="see-more-button mt-3" color="secondary" onClick={handleSeeMoreClick}>
          {expanded ? 'See Less' : 'See More'}
        </Button>
      </CardBody>
    </Card>
  );
};

export default JobCard;
