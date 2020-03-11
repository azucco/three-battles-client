import React, { useState } from "react";
import Line from "./Line";
import "../../styles/battle.css";

function Battle() {

  const [armies, setArmies] = useState([
    {army: [0, 0, 0], color: "red"},
    {army: [0, 0, 0], color: "blue"},
    {army: [0, 0, 0], color: "green"},
    {army: [0, 0, 0], color: "yellow"},
  ])

  /* lines.sort(function (a, b) {
    return parseInt(a.army) - parseInt(b.army);
  }); */

  

  return (
    <div className="col-sm-4 battle">
      {armies.map((el, index) => {
        const total = el.army.reduce((a, b) => a + b)
        return <Line
          row={index}
          armies={armies}
          setArmies={setArmies}
          total={total}
        />
      })}
    </div>
  );

}

export default Battle;