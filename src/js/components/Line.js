import React, { useState } from "react";
import "../../styles/line.css";

function Line(props) {

  const rowClass = "row " + props.color;
  const total = parseInt(props.infantry) + parseInt(props.cavalry) + parseInt(props.archery);

  return (
    <div className={rowClass}>
      <input type="number" className="form-control col-sm-3 trasparent" value={props.infantry} onChange={e => props.setInfantry(e.target.value)} />
      <input type="number" className="form-control col-sm-3 trasparent" value={props.cavalry} onChange={e => props.setCavalry(e.target.value)} />
      <input type="number" className="form-control col-sm-3 trasparent" value={props.archery} onChange={e => props.setArchery(e.target.value)} />
      <input type="number" className="form-control col-sm-3" value={total} disabled />
    </div>
  );

}

export default Line;