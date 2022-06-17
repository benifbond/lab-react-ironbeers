import React, { Fragment } from "react";
import beerImage from "../assets/beers.png";
import Header from "./Header";
import { Image } from "@mantine/core";

import { Link } from "react-router-dom";
function Beers({ beers }) {
  return (
    <div>
      <Header />
      {beers.map((beer) => {
        return (
          <Fragment key={beer._id}>
            <Image
              height="300px"
              width="70px"
              src={beer.image_url}
              alt="beers"
            />
            <p>{beer.tagline}</p>
            <h3>{beer.name}</h3>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}> Beer Detail</Link>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Beers;
