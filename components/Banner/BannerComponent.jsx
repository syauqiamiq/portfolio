import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Banner.module.css";

const BannerComponent = () => {
  return (
    <>
      <Container fluid className={styles.container}>
        <Row>
          <Col lg={12} md={12} xs={12} xl={12}>
            <div className={styles.contentWrapper}>
              <h1 className={styles.contentTitle}>Muhammad Syauqi Amiq Amrullah</h1>
              <h1 className={styles.contentSubTitle}>A Frontend Developer</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BannerComponent;
