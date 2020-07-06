import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header";
import Jumbotron from "../../components/jumbotron";
import Table from "../../components/table";
import api from "../../services/api";

function Index() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await api.get("/api/items");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);

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
        <Jumbotron subtitle={"Listagem das aulas da maratona"} />
        <Table items={items} />
      </div>
    </>
  );
}

export default Index;
