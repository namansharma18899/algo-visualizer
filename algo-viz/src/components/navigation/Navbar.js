import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function changeLoc(loc) {
  window.location = loc
}

function MainNavbar() {
  return (
    <Navbar bg="success" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Algo Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Algorithms" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=> changeLoc("/") }>Dijkstra Algo</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> changeLoc("/durstenfieldshuffle") }>Durstenfield Shuffle</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> changeLoc("/astar") }>A* Algo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;