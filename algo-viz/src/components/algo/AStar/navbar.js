import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample(props) {

  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">AStar Algo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=> props.AddBlockers()}>Add Blockers</Nav.Link>
            <Nav.Link onClick={()=> props.visualizePath()} >
              SearchPath
            </Nav.Link>
            <Nav.Link onClick={()=>props.resetBoard()}>Reset</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;