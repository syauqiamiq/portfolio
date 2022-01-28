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
              <div className={styles.contentWrapper}>
                <h3 className={styles.name}>SyauqiAmiq</h3>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <div className={styles.contentWrapper}>
                <Link href="/">
                  <a className={router.asPath === "/" ? styles.routeActive : styles.route}>Home</a>
                </Link>
                <Link href="/about">
                  <a className={router.asPath === "/about" ? styles.routeActive : styles.route}>Tentang Saya</a>
                </Link>
                <Link href="/projects">
                  <a className={router.asPath === "/projects" ? styles.routeActive : styles.route}>Projects</a>
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <div className={styles.contentWrapper}>
                <h3 className={styles.title}>Hubungi Saya</h3>
                <Link href="/">
                  <a className={styles.route}>Whatsapp</a>
                </Link>
                <Link href="/">
                  <a className={styles.route}>Email</a>
                </Link>
                <Link href="/">
                  <a className={styles.route}>Linkedin</a>
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <div className={styles.contentWrapper}>
                <h3 className={styles.title}>Social Media</h3>
                <Link href="https://www.facebook.com/syauqi.amiq.58/">
                  <a className={styles.iconWrapper}>
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/syauqi_amiq/">
                  <a className={styles.iconWrapper}>
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/muhammad-syauqi-amiq-amrullah-10128520b/">
                  <a className={styles.iconWrapper}>
                    {" "}
                    <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
                  </a>
                </Link>
                <Link href="https://github.com/syauqiamiq">
                  <a className={styles.iconWrapper}>
                    {" "}
                    <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
                  </a>
                </Link>
              </div>
            </Col>
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
