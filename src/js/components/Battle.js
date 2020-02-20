import React, { useState } from "react";
import Line from "./Line";
import "../../styles/battle.css";

function Battle() {

  const [redArmy, setRedArmy] = useState([0, 0, 0])
  const [blueArmy, setBlueArmy] = useState([0, 0, 0])
  const [greenArmy, setGreenArmy] = useState([0, 0, 0])
  const [yellowArmy, setYellowArmy] = useState([0, 0, 0])

  const lines = [
    {
      color: "red",
      army: redArmy,
      setArmy: setRedArmy
    },
    {
      color: "blue",
      army: blueArmy,
      setArmy: setBlueArmy
    },
    {
      color: "green",
      army: greenArmy,
      setArmy: setGreenArmy
    },
    {
      color: "yellow",
      army: yellowArmy,
      setArmy: setYellowArmy
    }
  ]

  lines.sort(function (a, b) {
    return parseInt(a.army) - parseInt(b.army);
  });

  return (
    <div className="col-sm-4 battle">
      {lines.map(line => {
        const total = line.army.reduce((a, b) => a + b)
        return <Line
          color={line.color}
          army={line.army}
          setArmy={line.setArmy}
          total={total}
        />
      })}
    </div>
  );

}

export default Battle;