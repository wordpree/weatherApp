import React from "react";
import Attractions from "./Attractions";
import {
  paris,
  rome,
  barelona,
  newyork,
  lodon,
  sydney,
  dubai,
  maldives,
  phuket,
  amsterdam
} from "../assets/cities";

function Recommend() {
  const imgUrls = [
    [paris, rome, barelona, newyork, lodon],
    [sydney, dubai, maldives, phuket, amsterdam]
  ];
  return (
    <section>
      {imgUrls.map((item, index) => (
        <Attractions
          key={index}
          urls={item}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
    </section>
  );
}

export default Recommend;
