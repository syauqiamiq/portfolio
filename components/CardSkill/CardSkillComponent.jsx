import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Image from "next/image";
import styles from "./CardSkill.module.css";
import JSIcon from "../../assets/images/js.png";
import ReactIcon from "../../assets/images/react.png";
import BSIcon from "../../assets/images/bootstrap.png";
import HTMLIcon from "../../assets/images/html.png";
import CSSIcon from "../../assets/images/css.png";
import NodeJsIcon from "../../assets/images/nodejs.png";
import MySqlIcon from "../../assets/images/mysql.png";
import FigmaIcon from "../../assets/images/figma.png";
import GitIcon from "../../assets/images/git.png";
import SassIcon from "../../assets/images/sass.png";
import GoIcon from "../../assets/images/golang.png";

const CardSkillComponent = () => {
  return (
    <>
      <Container>
        <h1 className={styles.sectionTitle}>Tools yang Saya Gunakan</h1>
        <Row className={styles.wrapper}>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={HTMLIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>HTML5</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={CSSIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>CSS3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={JSIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={ReactIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>React</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={BSIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={GitIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>Git</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={NodeJsIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>Node.js</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={FigmaIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>Figma</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className={styles.sectionTitle}>Sedang Dipelajari</h1>
        <Row className={styles.wrapper}>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={SassIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>SASS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={MySqlIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>MySQL</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={GoIcon} alt="icon-1" height={75} width={75} />
                </div>
                <Card.Title className={styles.cardTitle}>Golang</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardSkillComponent;
