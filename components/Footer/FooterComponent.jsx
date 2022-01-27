import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import { faFacebook, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.footerBg}>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <h3 className={styles.name}>SyauqiAmiq</h3>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <h3 className={styles.routeActive}>Navigation</h3>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <h3 className={styles.routeActive}>Hubungi Saya</h3>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <h3 className={styles.routeActive}>Social Media</h3>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              {" "}
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <Link href="/">
                <a className={router.asPath === "/" ? styles.routeActive : styles.route}>Home</a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <Link href="/">
                <a className={styles.route}>Whatsapp</a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <Link href="/">
                <a className={styles.route}>
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
                </a>
              </Link>
              <Link href="/">
                <a className={styles.route}>
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                </a>
              </Link>
              <Link href="/">
                <a className={styles.route}>
                  {" "}
                  <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
                </a>
              </Link>
              <Link href="/">
                <a className={styles.route}>
                  {" "}
                  <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
                </a>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}></Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <Link href="/about">
                <a className={router.asPath === "/about" ? styles.routeActive : styles.route}>Tentang Saya</a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <Link href="/">
                <a className={styles.route}>Email</a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}></Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              {" "}
              <Link href="/projects">
                <a className={router.asPath === "/projects" ? styles.routeActive : styles.route}>Projects</a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <Link href="/">
                <a className={styles.route}>Linkedin</a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}></Col>
          </Row>
        </Container>
        <Container>
          <Row className="text-center mt-2 p-2">
            <Col>
              <p className={styles.copyright}>©SyauqiAmiq 2022</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterComponent;
