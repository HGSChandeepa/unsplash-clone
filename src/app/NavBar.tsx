"use client";
import { Navbar, Container, Nav } from "react-bootstrap";

import React from "react";
import { Stick } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  // for get the url data wecan use new hook >>usepathnaeme
  const pathname = usePathname();
  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          Unspash Clone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav>
            <Nav.Link
              as={Link}
              href="/new-page"
              active={pathname === "new-page"}
            >
              new page
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              href="/cards-page"
              active={pathname === "cards-page"}
            >
              cards page
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
