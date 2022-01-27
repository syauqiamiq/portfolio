import Head from "next/head";
import React from "react";
import FooterComponent from "../Footer/FooterComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.bg}>
        <Head>
          <title>Oki | Landing Page</title>
          <meta name="description" content="Syauqi Amiq Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarComponent />
        <main>{children}</main>
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;
