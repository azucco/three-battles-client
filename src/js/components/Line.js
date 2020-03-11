import React from "react";
import "../../styles/line.css";

function Line(props) {

  const row = props.row
  let armies = props.armies;
  let army = armies[row].army;
  const color = armies[row].color;
  const rowClass = "row " + color;
  const setArmies = props.setArmies;
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
              armies.splice(row, 1, {army, color})
              return setArmies(newArmies)
            }}
          />
        )
      })}
      <input type="number" className="form-control col-sm-3" value={total} disabled />
    </div>
  );

}

export default Line;