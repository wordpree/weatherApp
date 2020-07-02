import React from "react";
import { Container } from "@material-ui/core";
import { useParams, useRouteMatch } from "react-router-dom";
import CardDetail from "../CardDetail";
import { Footer, Header, ScrollToTop } from "../";
import Hero from "./Hero";
import { ITriposoPoi } from "../../util/type";
import { getImgWithSize, getItemById } from "../../util/utils";

interface IPDProps {
  data: ITriposoPoi[];
}

const AttractionDetail = ({ data }: IPDProps) => {
  const { id } = useParams();
  let { url } = useRouteMatch();
  if (!data || data.length === 0 || !id) {
    return null;
  }

  const getNextAttraction = (data: ITriposoPoi[]) => {
    const relativePath = url.split("/")[1];
    const current = data.findIndex((item) => item.id === id);
    let index = 0;
    if (current !== data.length - 1) {
      index = current + 1;
    }
    return {
      path: `/${relativePath}/${data[index].id}`,
      info: data[index].intro,
    };
  };
  const selectedItem = getItemById(data, id);
  const nextAttraction = getNextAttraction(data);
  const heroImgData = getImgWithSize(selectedItem);
  const { name, structured_content, images } = selectedItem;

  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero imgData={heroImgData} title={name} next={nextAttraction} />
      <Container>
        <CardDetail detail={{ structured_content }} imgData={images} />
      </Container>
      <Footer />
    </>
  );
};

export default AttractionDetail;
