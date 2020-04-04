import React from "react";
import Header from "../header/Header";
import { Container } from "@material-ui/core";

import Title from "../Title";
import { useLocation } from "react-router-dom";

const ColDet = () => {
  const { name, ids } = useLocation().state;

  return (
    <>
      <Header />
      <Container>
        <Title text={name} />
      </Container>
    </>
  );
};

export default ColDet;
