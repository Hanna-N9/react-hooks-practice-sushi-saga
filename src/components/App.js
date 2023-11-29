import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const startBudget = 100;

function App() {
  const [sushis, setSushis] = useState([]);
  const [budget, setBudget] = useState(startBudget);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setSushis);
  }, []);

  //Rid of sushi from a plate
  //Amount of money remaining should go down by the cost of the sushi that was eaten
  //Can't xceeds the amount of money remaining in a user's balance
  function handleEatSushi(sus) {
    if (sus.price <= budget) {
      setSushis(
        sushis.map(sushi =>
          sus.id === sushi.id ? { ...sushi, eaten: true } : sushi,
        ),
      );
      setBudget(budget - sus.price);
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={handleEatSushi} />
      <Table budget={budget} />
    </div>
  );
}

export default App;
