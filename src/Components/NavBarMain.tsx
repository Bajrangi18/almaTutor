import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBarMain = () => {
  return(
    <header>
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:'#cddaf1'}}>
      <Container style={{fontFamily:'Work Sans',}}>
        <Navbar.Brand href="#home" style={{fontWeight:"700",color:'#0848b9'}}>
        <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/60/0848b9/tuition--v1.png" alt="tuition--v1" style={{color:"#4f4f5d"}}/> Alma-Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <img src="https://img.icons8.com/ios-filled/28/0848b9/menu--v5.png"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontWeight:"500"}}>
            <Nav.Link href="#features" style={{color:'#4f4f5d'}}>Buy a Project</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'#4f4f5d'}}>Courses</Nav.Link>
            <NavDropdown title={<span style={{color:'#4f4f5d'}}>Domains</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Internet of Things</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Robotics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Basic Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Radio Communication</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Want Something Else?</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" style={{color:'#4f4f5d'}}>About Us</Nav.Link>
          </Nav>
          <Nav style={{fontWeight:"500"}}>
            <Nav.Link eventKey={2} href="#memes" style={{color:'#4f4f5d'}}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavBarMain;
