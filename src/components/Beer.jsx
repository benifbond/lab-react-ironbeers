import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

import { Image } from "@mantine/core";

function Beer() {
  const { beerId } = useParams();

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      });
  }, [beerId]);
  console.log(beer);
  return (
    <Fragment>
      <Image
        height="300px"
        width="70px"
        src={beer.image_url}
        alt="beers"
        fit="cover"
      />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </Fragment>
  );
}

export default Beer;
