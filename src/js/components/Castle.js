import React, { Component, useState } from "react";
import "../../styles/castle.scss";

function Castle() {

  const [defense, defenseX2] = useState(1);

  return (
    <div className="castle">Castle</div>
  );

}

export default Castle;