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
import Cite from 'citation-js';
import '../Styles/CitationGenerator.css';

const CitationGenerator = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [citationStyle, setCitationStyle] = useState('apa');
  const [citation, setCitation] = useState('');

  const generateCitation = () => {
    const reference = new Cite([
      {
        author: author.split(',').map((name) => ({ literal: name.trim() })),
        title,
        issued: { 'date-parts': [[parseInt(year, 10)]] },
      },
    ]);

    const citationOutput = reference.format('bibliography', {
      format: 'text',
      template: citationStyle,
      lang: 'en-US',
    });

    setCitation(citationOutput);
  };

  return (
    <Container className="citation-generator">
      <Row>
        <Col>
          <h2>Citation Generator</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="author">Author:</Label>
            <Input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter the author's name(s), separated by commas"
            />
          </FormGroup>
          <FormGroup>
            <Label for="title">Title:</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of the work"
            />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year:</Label>
            <Input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter the publication year"
            />
          </FormGroup>
          <FormGroup>
            <Label for="citationStyle">Citation Style:</Label>
            <Input
              type="select"
              id="citationStyle"
              value={citationStyle}
              onChange={(e) => setCitationStyle(e.target.value)}
            >
              <option value="apa">APA</option>
              <option value="harvard1">Harvard</option>
              <option value="chicago-fullnote-bibliography">Chicago</option>
              <option value="ieee">IEEE</option>
              <option value="mla">MLA</option>
            </Input>
          </FormGroup>
          <Button color="primary" onClick={generateCitation}>
            Generate Citation
          </Button>
        </Col>
      </Row>
      {citation && (
        <Row className="mt-3">
          <Col>
            <Card className="result-card">
              <CardBody>
                <CardTitle tag="h3">Citation:</CardTitle>
                <CardText>{citation}</CardText>
              </CardBody>
              </Card>
              </Col>
        </Row>
      )}
    </Container>
  );
};

export default CitationGenerator;
