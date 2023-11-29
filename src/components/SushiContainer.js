import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, eatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);
  const displayNumber = 4;

  //4 sushi are rendered
  //Sushi rotation effects and letting empty plates appear
  function handleScrollBelt() {
    setSushiIndex((sushiIndex + displayNumber) % sushis.length);
  }

  return (
    <div className="belt">
      {sushis.slice(sushiIndex, sushiIndex + displayNumber).map(sushi => (
        <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} />
      ))}
      <MoreButton handleClick={handleScrollBelt} />
    </div>
  );
}

export default SushiContainer;
