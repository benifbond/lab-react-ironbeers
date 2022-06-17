import { Button } from "@mantine/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Beers from "./Beers";
import NewBeers from "./NewBeers";
import RandomBeers from "./RandomBeers";

function Home() {
  return (
    <div>
        <NavLink to="/beers">
          <Button> All beers</Button>
        </NavLink>
  
      <NavLink to="/random-beer"> 
      <Button> Random beers</Button>
       </NavLink>

      <NavLink to="/new-beer"> 
      <Button> New beer</Button>
    </NavLink>
    </div>
  );
}

export default Home;
