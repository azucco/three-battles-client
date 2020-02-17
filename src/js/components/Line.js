import React, { Component, useState } from "react";

function Line() {

  const [color, setColor] = useState("");
  const [infantry, setInfantry] = useState(0);
  const [cavalry, setCavalry] = useState(0);
  const [archery, setArchery] = useState(0);

  return (
    <div>Line</div>
  );

}

export default Line;