import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Castle from "./components/Castle";
import Battle from "./components/Battle";
import "../styles/app.scss";
import "../styles/dashboard.scss";
import FightModal from './components/FightModal';

function App() {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="container">
            <Castle></Castle>
            <div className="row">
                <Battle></Battle>
                <Battle></Battle>
                <Battle></Battle>
            </div>
            <div className="row dashboard">
                <button type="button" className="btn btn-primary">Fight!</button>
            </div>
            <FightModal></FightModal>
        </div>
    );
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;