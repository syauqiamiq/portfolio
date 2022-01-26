import Head from "next/head";
import React from "react";
import FooterComponent from "../Footer/FooterComponent";
import NavbarComponent from "../Navbar/NavbarComponent";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Oki | Landing Page</title>
        <meta name="description" content="Syauqi Amiq Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
