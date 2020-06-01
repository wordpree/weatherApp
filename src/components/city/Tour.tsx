import React from "react";
import TourCard from "../attractions/ParkCard";
import bri from "../../assets/brisbane/";
import syd from "../../assets/sydney/";
import mel from "../../assets/melbourne/";
import per from "../../assets/perth/";
import ade from "../../assets/ade/";
import cai from "../../assets/cairns/";
import dar from "../../assets/darwin/";
import { Tours } from "./index";
import { Grow } from "@material-ui/core";
import { Loading } from "../";

interface ITProps {
  data: Tours;
}

const Tour = ({ data }: ITProps) => {
  const imgArr = [
    { name: "Brisbane", imgs: bri },
    { name: "Sydney", imgs: syd },
    { name: "Melbourne", imgs: mel },
    { name: "Perth2C_Western_Australia", imgs: per },
    { name: "Cairns", imgs: cai },
    { name: "Adelaide", imgs: ade },
    { name: "Darwin2C_Northern_Territory", imgs: dar },
  ];
  //insert images for tours <-- api doesn't provide them now
  const toursWithImg =
    data.hasOwnProperty("tours") && data.tours.length
      ? data.tours.slice(0, 3).map((tour, index) => {
          const image = imgArr.find((item) => item.name === data.city);
          return {
            ...tour,
            imgTour: image ? image.imgs[index] : "",
          };
        })
      : [];
  return toursWithImg.length ? (
    <Grow in={Boolean(toursWithImg.length)}>
      <div>
        {toursWithImg.map((item) => (
          <TourCard data={item} key={item.id} />
        ))}
      </div>
    </Grow>
  ) : (
    <Loading value={100} />
  );
};

export default Tour;
