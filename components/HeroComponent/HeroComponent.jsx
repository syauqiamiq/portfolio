import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Hero.module.css";

const HeroComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <h1 className={styles.title}>
                Saya <span className={styles.titlespan}> Syauqi Amiq</span>
              </h1>
              <h1 className={styles.subTitle}>Seorang Web Developer</h1>
              <p className={styles.description}>Ini adalah portofolio dan CV saya yang pernah saya buat, di sini Anda dapat melihat beberapa macam project saya saat mengembangkan suatu aplikasi. Saya harap Anda menyukainya!</p>
              <div className="mt-4">
                <Row className="text-center justfify-content-center">
                  <Col>
                    <Link href="/projects">
                      <a>
                        {" "}
                        <button className={styles.projectButton}>Projects</button>
                      </a>
                    </Link>
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
