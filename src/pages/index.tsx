import { Col, Container, Row } from 'react-bootstrap';
import Calculator from '../components/Calculator';
/**
 * app entry point
 *
 * @returns {JSX.Element} - entry point
 */
export default function App(): JSX.Element {
  return (
    <main>
      <h1>Neumorphic calculator</h1>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <Calculator />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
