import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import Jumbotron from "../components/jumbotron";

function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <title>Maratona Full Cycle 3.0</title>
      </Head>
      <Header />
      <div className="container-fluid">
        <Jumbotron subtitle={""} />
      </div>
    </>
  );
}

export default Index;
