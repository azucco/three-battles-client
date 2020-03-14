import React, { useState } from "react";
import Line from "./Line";
import "../../styles/battle.scss";

function Battle() {

  const [armies, setArmies] = useState([
    { army: [0, 0, 0], color: "red" },
    { army: [0, 0, 0], color: "blue" },
    { army: [0, 0, 0], color: "green" },
    { army: [0, 0, 0], color: "yellow" },
  ])

  const [focusOn, setFocusOn] = useState(0)

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (focusOn === 0) {
    armies.sort((a, b) => {
      return b.army.reduce(reducer) - a.army.reduce(reducer);
    });
  }

  return (
    <div className="col-sm battle">
      {armies.map((el, index) => {
        const total = el.army.reduce((a, b) => a + b)
        return <Line
          row={index}
          armies={armies}
          setArmies={setArmies}
          total={total}
          focusOn={focusOn}
          setFocusOn={setFocusOn}
        />
      })}
    </div>
  );

}

export default Battle;