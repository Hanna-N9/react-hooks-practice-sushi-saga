import React from "react";

function Sushi({ sushi, eatSushi }) {
  const { name, img_url: image, price } = sushi;

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.eaten ? null : <img src={image} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
