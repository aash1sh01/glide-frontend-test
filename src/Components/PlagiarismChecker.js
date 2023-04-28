import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import '../Styles/PlagiarismChecker.css';

const PlagiarismChecker = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const checkPlagiarism = async () => {
    // This is a mockup and does not actually check for plagiarism.
    // You would need to use an API or implement your own algorithm for checking plagiarism.
    setResult(Math.random() < 0.5 ? 'No plagiarism detected.' : 'Possible plagiarism detected.');
  };

  return (
    <Container className="plagiarism-checker">
      <Row>
        <Col>
          <h2>Plagiarism Checker</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="inputText">Enter your text:</Label>
            <Input
              type="textarea"
              id="inputText"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your text to check for plagiarism..."
            />
          </FormGroup>
          <Button color="primary" onClick={checkPlagiarism}>
            Check Plagiarism
          </Button>
        </Col>
      </Row>
      {result && (
        <Row className="mt-3">
          <Col>
            <Card className="result-card">
              <CardBody>
                <CardTitle tag="h3">Result:</CardTitle>
                <CardText>{result}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PlagiarismChecker;
