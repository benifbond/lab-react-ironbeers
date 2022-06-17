import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeers from "./components/RandomBeers";
import NewBeers from "./components/NewBeers";
import { Header } from "@mantine/core";
import Beer from "./components/Beer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeers beers={beers} />} />
        <Route path="/new-beer" element={<NewBeers />} />
        <Route path="/beers/:beerId" element={<Beer />} />
      </Routes>
    </div>
  );
}

export default App;
