import React, { Component, useState } from "react";
import Line from "./Line";
import "../../styles/battle.css";

function Battle() {

  const [redInfantry, setRedInfantry] = useState(0)
  const [blueInfantry, setBlueInfantry] = useState(0)
  const [greenInfantry, setGreenInfantry] = useState(0)
  const [yellowInfantry, setYellowInfantry] = useState(0)

  const [redArchery, setRedArchery] = useState(0)
  const [blueArchery, setBlueArchery] = useState(0)
  const [greenArchery, setGreenArchery] = useState(0)
  const [yellowArchery, setYellowArchery] = useState(0)

  const [redCavalry, setRedCavalry] = useState(0)
  const [blueCavalry, setBlueCavalry] = useState(0)
  const [greenCavalry, setGreenCavalry] = useState(0)
  const [yellowCavalry, setYellowCavalry] = useState(0)

  const lines = [
    {
      color: "red",
      infantry: redInfantry,
      cavalry: redCavalry,
      archery: redArchery,
      setInfantry: setRedInfantry,
      setCavalry: setRedCavalry,
      setArchery: setRedArchery
    },
    {
      color: "blue",
      infantry: blueInfantry,
      cavalry: blueCavalry,
      archery: blueArchery,
      setInfantry: setBlueInfantry,
      setCavalry: setBlueCavalry,
      setArchery: setBlueArchery
    },
    {
      color: "green",
      infantry: greenInfantry,
      cavalry: greenCavalry,
      archery: greenArchery,
      setInfantry: setGreenInfantry,
      setCavalry: setGreenCavalry,
      setArchery: setGreenArchery
    },
    {
      color: "yellow",
      infantry: yellowInfantry,
      cavalry: yellowCavalry,
      archery: yellowArchery,
      setInfantry: setYellowInfantry,
      setCavalry: setYellowCavalry,
      setArchery: setYellowArchery
    },
  ]

  lines.sort(function (a, b) {
    return a.archery - b.archery;
  });

  return (
    <div className="col-sm-4 battle">
      {lines.map(line => {
        return <Line
          color={line.color}
          infantry={line.infantry}
          cavalry={line.cavalry}
          archery={line.archery}
          setInfantry={line.setInfantry}
          setCavalry={line.setCavalry}
          setArchery={line.setArchery}
        />
      })}
    </div>
  );

}

export default Battle;