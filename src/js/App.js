import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Castle from "./components/Castle";
import Battle from "./components/Battle";
import "../styles/app.css";
import "../styles/dashboard.css";

function App() {
    return (
        <div className="app">
            <Castle></Castle>
            <div className="row">
                <Battle></Battle>
                <Battle></Battle>
                <Battle></Battle>
            </div>
            <div className="row dashboard">
                Dashboard
            </div>
        </div>
    );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;