import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Castle from "./components/Castle";
import Battle from "./components/Battle";

function App() {
    return (
        <div>
            <Castle></Castle>
            <div className="row">
                <div className="col-sm-9 row">
                    {/* <div classname="row"> */}
                        <Battle></Battle>
                        <Battle></Battle>
                        <Battle></Battle>
                    {/* </div> */}
                </div>
                <div className="col-sm-3">
                    Dashboard
                </div>

            </div>
        </div>
    );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;