import React, { Component, useState } from "react";
import Line from "./Line";
import "../../styles/battle.css";

function Battle() {

  const [color, setColor] = useState("");

  return (
    <div className="col-sm-4 battle">
        <Line></Line>
        <Line></Line>
        <Line></Line>
        <Line></Line>
    </div>
  );

}

export default Battle;