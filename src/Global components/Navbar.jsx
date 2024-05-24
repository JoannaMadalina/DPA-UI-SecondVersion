import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#globe">Globe</Nav.Link>
            <Nav.Link href="#calendar">Calendar</Nav.Link>
          </Nav>
        </Container>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Button type="export">Export</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
