import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

function Menu(){
    return(
        <div className="Navbar">
            <Navbar collapseOnSelect expand="lg" className="menu">
                    <Navbar.Brand className="brand" href="#home">Meuble</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="link ml-auto mr-5 pr-5">
                        <Nav.Link href="#features" className="link">Home</Nav.Link>
                        <Nav.Link href="#pricing" className="link">Discover us</Nav.Link>
                        <Nav.Link href="#pricing" className="link">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </div>
    )
}
export default Menu