import React from "react";
import { Container } from "@material-ui/core";
import { useParams, useRouteMatch } from "react-router-dom";
import CardDetail from "../CardDetail";
import { Footer, Header, ScrollToTop } from "../";
import Hero from "./Hero";
import { ITriposoPoi } from "../../util/type";

interface IPDProps {
  data: ITriposoPoi[];
}

const AttractionDetail = ({ data }: IPDProps) => {
  const { id } = useParams();
  let { url } = useRouteMatch();
  if (!data || data.length === 0 || !id) {
    return null;
  }

  const dataFilter = (data: ITriposoPoi[]) =>
    data.filter(
      (item) =>
        item.name !== "Uluru" && item.structured_content.images.length !== 0
    );

  const getHeroImg = (data: Pick<ITriposoPoi, "structured_content">) => {
    const { images } = data.structured_content;
    const lookup = images.find((img) => {
      const { width, height } = img.sizes.medium;
      return width > 600 && height > 400;
    });
    return lookup ? lookup : images[0];
  };

  const getSelectedItem = (data: ITriposoPoi[]) =>
    data.find((item) => item.id === id) as ITriposoPoi;

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
  const filteredData = dataFilter(data); // excludes invalide media count and remove duplicated Uluru park
  const selectedItem = getSelectedItem(filteredData);
  const { name, structured_content } = selectedItem;
  const nextAttraction = getNextAttraction(filteredData);
  const heroImgData = getHeroImg({ structured_content });

  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero imgData={heroImgData} title={name} next={nextAttraction} />
      <Container>
        <CardDetail detail={{ structured_content }} />
      </Container>
      <Footer />
    </>
  );
};

export default AttractionDetail;
