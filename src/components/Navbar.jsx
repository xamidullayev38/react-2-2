import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import SearchInput from "./input/Input";

export default function AppNavbar({ isDark, toggleTheme }) {
  const navLinks = [
    { id: 1, name: "Browse" },
    { id: 2, name: "Landings" },
    { id: 3, name: "Pages" },
    { id: 4, name: "Accounts" },
  ];
  return (
    <Navbar
      bg={isDark ? "dark" : "light"}
      variant={isDark ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand>Geeks</Navbar.Brand>

        <Nav className="me-auto">
          {/* Browse dropdown */}
          {navLinks.map((item) => {
            return (
              <NavDropdown
                title={item.name}
                key={item.id}
                id=""
                className={`fw-bold text-dark ${
                  isDark ? "text-white" : "text-dark"
                }`}
              >
                <NavDropdown.Item>Web Development</NavDropdown.Item>
                <NavDropdown.Item>Design</NavDropdown.Item>
                <NavDropdown.Item>Mobile App</NavDropdown.Item>
                <NavDropdown.Item>IT Software</NavDropdown.Item>
                <NavDropdown.Item>Marketing</NavDropdown.Item>
                <NavDropdown.Item>Music</NavDropdown.Item>
                <NavDropdown.Item>Life Style</NavDropdown.Item>
                <NavDropdown.Item>Business</NavDropdown.Item>
                <NavDropdown.Item>Photography</NavDropdown.Item>
              </NavDropdown>
            );
          })}
          <SearchInput />
        </Nav>

        {/* THEME DROPDOWN */}
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant={isDark ? "outline-light" : "outline-dark"}>
            🌙
          </Dropdown.Toggle>

          <Dropdown.Menu align="end">
            <Dropdown.Item onClick={() => toggleTheme("light")}>
              ☀️ Light
            </Dropdown.Item>
            <Dropdown.Item onClick={() => toggleTheme("dark")}>
              🌙 Dark
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
