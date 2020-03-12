import React from "react";
import "../../styles/line.scss";

function Line(props) {

  const row = props.row
  let armies = props.armies;
  let army = armies[row].army;
  const color = armies[row].color;
  const rowClass = "row " + color;
  const setArmies = props.setArmies;
  const total = props.total;
  const focusOn = props.focusOn;
  const setFocusOn = props.setFocusOn;
  
  return (
    <div className={rowClass}>
      {army.map((unit, index) => {
        return (
          <input
            type="number"
            className="form-control col-sm-3 trasparent"
            value={unit}
            onChange={e => {
              army[index] = parseInt(e.target.value);
              let newArmies = [...armies]
              newArmies.splice(row, 1, {army, color})
              return setArmies(newArmies)
            }}
            min="0"
            onFocus={() => setFocusOn(parseInt(focusOn) + 1)}
            onBlur={() => setFocusOn(parseInt(focusOn) - 1)}
          />
        )
      })}
      <input type="number" className="form-control col-sm-3" value={total} disabled />
    </div>
  );

}

export default Line;