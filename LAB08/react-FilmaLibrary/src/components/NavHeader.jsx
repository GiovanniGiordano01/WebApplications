import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Col';

function NavHeader (props) {
  return(
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container fluid="true">
        <Navbar.Brand>🍿FilmLibrary</Navbar.Brand>
      </Container>
        <Row>
          <Col xs="auto">
          <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="btn btn-warning">🔎</Button>
          </Col>
        </Row>
    </Navbar>
  );
}

export default NavHeader;