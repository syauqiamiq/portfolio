import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import styles from "./CardSection.module.css";
import Icon1 from "../../assets/icons/Icon-2.png";
import Icon2 from "../../assets/icons/Icon-1.png";
import Icon3 from "../../assets/icons/Icon.png";
import Image from "next/image";

const CardSectionCompont = () => {
  return (
    <>
      <Container>
        <h1 className={styles.sectionTitle}>Kemampuan Saya</h1>
        <Row>
          <Col className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={Icon1} alt="icon-1" height={75} width={50} />
                </div>

                <Card.Title className={styles.cardTitle}>Responsive Design</Card.Title>
                <Card.Text className={styles.cardDescription}>
                  <p>Dengan pengalaman saya dalam pembuatan website, saya memiliki prinsip bahwa website yang saya buat harus menerapkan konsep desain yang responsif.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={Icon2} alt="icon-2" height={75} width={75} />
                </div>

                <Card.Title className={styles.cardTitle}>Problem Solving</Card.Title>
                <Card.Text className={styles.cardDescription}>
                  <p>Saya mempunyai skill problem solving yang cukup baik dalam bidang Web Development. Sebagai seorang Web Developer tentu skill ini sangat penting dalam proses pengembangan website.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={styles.cardWrapper}>
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <Image src={Icon3} alt="icon-3" height={75} width={75} />
                </div>

                <Card.Title className={styles.cardTitle}>Team Working</Card.Title>
                <Card.Text className={styles.cardDescription}>
                  <p>Saya senang bekerja dalam tim, karena bekerja dalam tim dapat mempercepat pekerjaan saya dan membuat saya bekerja secara optimal dan lebih efektif. </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardSectionCompont;
