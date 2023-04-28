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
import '../Styles/GrammarChecker.css';

const GrammarChecker = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const checkGrammar = async () => {
    const apiUrl = `https://api.languagetool.org/v2/check?language=en-US&text=${encodeURIComponent(
      input,
    )}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();
      setResult(data.matches);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult('An error occurred. Please try again.');
    }
  };

  return (
    <Container className="grammar-checker">
      <Row>
        <Col>
          <h2>Grammar and Style Checker</h2>
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
              placeholder="Enter your text to check for grammar and style errors..."
            />
          </FormGroup>
          <Button color="primary" onClick={checkGrammar}>
            Check Grammar
          </Button>
        </Col>
      </Row>
      {result && (
        <Row className="mt-3">
          <Col>
            <Card className="result-card">
              <CardBody>
                <CardTitle tag="h3">Result:</CardTitle>
                {Array.isArray(result) && result.length > 0 ? (
                  result.map((match, index) => (
                    <CardText key={index}>
                      Error {index + 1}: {match.message} <br />
                      Line: {match.context.offset}, Length: {match.context.length}
                      <hr />
                    </CardText>
                  ))
                ) : (
                  <CardText>No grammar or style errors detected.</CardText>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default GrammarChecker;
