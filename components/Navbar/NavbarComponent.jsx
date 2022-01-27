import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import styles from "./Navbar.module.css";

const NavbarComponent = () => {
  const router = useRouter();
  return (
    <>
      <Navbar className={styles.navbar} expand="lg">
        <Container>
          <Navbar.Brand className={styles.navbarBrand}>SyauqiAmiq</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
            <Nav>
              <Link href="/">
                <a className={`${router.asPath === "/" ? styles.navLinkActive : styles.navLink} nav-link`}>Home</a>
              </Link>
              <Link href="/about">
                <a className={`${router.asPath === "/about" ? styles.navLinkActive : styles.navLink} nav-link`}>Tentang Saya</a>
              </Link>
              <Link href="/projects">
                <a className={`${router.asPath === "/projects" ? styles.navLinkActive : styles.navLink} nav-link`}>Projects</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Link href="/contact">
            <a className="nav-link">
              <Button className={styles.navButton}>Hubungi Saya</Button>
            </a>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
