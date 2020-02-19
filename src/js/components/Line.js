import React, { useState } from "react";
import "../../styles/line.css";

function Line(props) {

  const rowClass = "row " + props.color;
  let army = props.army;
  let setArmy = props.setArmy;
  const total = props.total;
  
  return (
    <div className={rowClass}>
      {army.map((unit, index) => {
        return (
          <input
            type="number"
            className="form-control col-sm-3 trasparent"
            value={unit}
            onChange={e => {
              army[index] = parseInt(army[index]) + parseInt(e.target.value);
              return setArmy(army)
            }}
          />
        )
      })}
      <input type="number" className="form-control col-sm-3" value={total} disabled />
    </div>
  );

}

export default Line;