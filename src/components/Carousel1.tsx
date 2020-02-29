import React from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
type K = {
  visibleSlides: number;
  totalSlides: number;
  step: number;
  naturalSlideWidth: number;
  naturalSlideHeight: number;
  orientation: "horizontal" | "vertical" | undefined;
};

interface ICPorps {
  settings: K;
  carousel: JSX.Element[];
  btnType?: JSX.Element;
}

const Carousel1 = ({ settings, carousel, btnType }: ICPorps) => {
  return (
    <CarouselProvider
      orientation={settings.orientation}
      visibleSlides={settings.visibleSlides}
      totalSlides={settings.totalSlides}
      step={settings.step}
      naturalSlideWidth={settings.naturalSlideWidth}
      naturalSlideHeight={settings.naturalSlideHeight}
      hasMasterSpinner
    >
      <Slider>{carousel}</Slider>
      {btnType}
    </CarouselProvider>
  );
};

export default Carousel1;
