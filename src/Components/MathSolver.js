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
import '../Styles/MathSolver.css';
import nerdamer from 'nerdamer';
import 'nerdamer/Solve';
import 'nerdamer/Calculus';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MathEquationSolver = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const solveExpression = async (operation) => {
    try {
      let result;
      if (operation === 'integrate') {
        result = nerdamer.integrate(expression, 'x').toTeX();
      } else if (operation === 'simplify') {
        result = nerdamer(expression).toTeX();
      } else if (operation === 'solve for x') {
        result = nerdamer.solveEquations(expression).toString();
      }
      else if (operation === 'factor') {
        result = nerdamer(expression).factor().toTeX();
      } else if (operation === 'expand') {
        result = nerdamer(expression).expand().toTeX();
      } else if (operation === 'nth_derivative') {
        const n = parseInt(prompt('Enter the order of the derivative:'));
        if (!isNaN(n)) {
          result = nerdamer.diff(expression, 'x', n).toTeX();
        } else {
          result = 'Invalid order. Please try again.';
        }
      } else if (operation === 'substitute') {
        const substitution = prompt('Enter substitution (e.g., "x=2"):');
        if (substitution) {
          result = nerdamer(expression).evaluate(substitution).toTeX();
        } else {
          result = 'Invalid substitution. Please try again.';
        }
      } else if (operation === 'evaluate') {
        result = nerdamer(expression).evaluate().toTeX();
      }
  
      setResult(result);
    } catch (error) {
      console.error('Error solving expression:', error);
      setResult('Invalid expression. Please try again.');
    }
  };
      

  return (
    <Container className="math-equation-solver">
      <Row>
        <Col>
          <h2>Math Equation Solver</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="expression">Expression:</Label>
            <Input
              type="text"
              id="expression"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              placeholder="Enter a mathematical expression"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" onClick={() => solveExpression('integrate')}>
            Integrate
          </Button>{' '}
          <Button color="primary" onClick={() => solveExpression('simplify')}>
            Simplify
          </Button>{' '}
          <Button color="primary" onClick={() => solveExpression('solve for x')}>
            Solve for x
          </Button>
          <Button color="primary" onClick={() => solveExpression('factor')}>
      Factor
    </Button>{' '}
    <Button color="primary" onClick={() => solveExpression('expand')}>
      Expand
    </Button>{' '}
    <Button color="primary" onClick={() => solveExpression('nth_derivative')}>
      nth Derivative
    </Button>{' '}
    <Button color="primary" onClick={() => solveExpression('substitute')}>
      Substitute
    </Button>{' '}
    <Button color="primary" onClick={() => solveExpression('evaluate')}>
      Evaluate
    </Button>
        </Col>
      </Row>
      {result && (
        <Row className="mt-3">
          <Col>
            <Card className="result-card">
              <CardBody>
                <CardTitle tag="h3">Result:</CardTitle>
                <CardText>
                  <InlineMath math={result} />
                </CardText>
              </CardBody>

            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MathEquationSolver;
