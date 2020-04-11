import React from "react";
import Header from "../components/header/Header";
import axios from "axios";

function Photos() {
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=960&photoreference=CmRaAAAAF0aTHM6oBVYqn-v0NMWCocouLK4nV--3_-okzupN0_iF2FZ54zRB97CcAzKhntR_WDElXpChV82g9F0WuN9hyVkIaBHGUW6baxafEZrAG2sjskTmB1hIX3ENtkRCiKyaEhBfObkJcrydr37W4YH-ohMuGhRBTPUNenzmw_yMmSlpoZqmBns44Q&key=AIzaSyBIDPYFVWcF6oMGjC09UXAjXz7L735A36Y"
    )
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));

  return <Header />;
}

export default Photos;
