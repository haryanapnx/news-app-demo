import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "../routes/router";

const category = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology"
];
const Header = ({ isActive, search, handleSearch, submit }) => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link route="/">
          <Navbar.Brand href="/">Mark News</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {category.map((item, i) => (
              <Link
                key={i}
                route="category"
                params={{ slug: item.toLowerCase() }}
              >
                <Nav.Link
                  active={isActive === item.toLowerCase()}
                  href={`/categori/${item.toLowerCase()}`}
                >
                  {item}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
          <form className="form-inline" onSubmit={submit}>
            <FormControl
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
