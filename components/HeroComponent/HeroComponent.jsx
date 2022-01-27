import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Hero.module.css";

const HeroComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <h1 className={styles.title}>
                Saya <span className={styles.titlespan}> Syauqi Amiq</span>
              </h1>
              <h1 className={styles.subTitle}>Frontend Developer</h1>
              <p className={styles.description}>Ini adalah portofolio dan CV saya yang dibuat di Figma, di sini Anda dapat melihat gaya prototyping saya saat mendesain antarmuka. Saya harap Anda menyukainya!</p>
              <div className="mt-4">
                <Row className="text-center justfify-content-center">
                  <Col>
                    <button className={styles.projectButton}>Projects</button>
                  </Col>
                  <Col>
                    <button className={styles.cvButton}>
                      {" "}
                      <FontAwesomeIcon icon={faDownload} className={styles.iconDownload} />
                      Download CV
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroComponent;
