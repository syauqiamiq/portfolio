import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProfileCard.module.css";
import Avatar from "../../assets/images/pp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ProfileCardComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className={styles.card}>
              <Row className="text-center">
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Row className={styles.avatarWrapper}>
                    <Col>
                      <Image src={Avatar} alt="avatar" width={350} height={350} className={styles.avatar} />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Row className="text-start mt-2">
                    <Col>
                      <h2 className={styles.title}>Tentang Saya</h2>
                    </Col>
                  </Row>
                  <Row className="mt-2 ">
                    <Col>
                      <p className={styles.content}>
                        Halo! nama saya Oki (Syauqi Amiq), saya berumur 20 tahun dan merupakan mahasiswa aktif S1 Informatika Universitas Muhammadiyah Malang. Saya memiliki ketertarikan yang besar dibidang Web Development.
                      </p>
                      <p className={styles.content}>
                        Sebagai seorang Web Developer, saya percaya bahwa design dan performa website yang baik akan memuaskan user experience klien kita, sehingga diperlukan teknologi yang tepat untuk mengimplementasikannya. Dalam proses
                        pengembangan, saya lebih sering menggunakan menggunakan teknologi seperti HTML/CSS/JS, React, Node.js, dan Laravel.
                      </p>
                    </Col>
                  </Row>
                  <Row className="mt-1 text-start">
                    <Col>
                      <Link href="/about">
                        <a>
                          <button className={styles.actionButton}>
                            {" "}
                            Pelajari tentang saya
                            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                          </button>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfileCardComponent;
