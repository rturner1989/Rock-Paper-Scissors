import React from "react";
import { Routes, Route } from "react-router-dom";
import RockPaperScissors from "./Components/Game Selection/RockPaperScissors";
import RockPaperScissorsLizardSpock from "./Components/Game Selection/RockPaperScissorsLizardSpock";
import Welcome from "./Components/Welcome/Welcome";

function App() {
    return (
        <div className="App">
            <div>
                <h1>
                    Rock
                    <br />
                    Paper
                    <br />
                    Scissors
                </h1>
                <div>
                    <h3>Counter</h3>
                    {/* Temp count */}
                    <h4>12</h4>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route
                    path="RockPaperScissors"
                    element={<RockPaperScissors />}
                />
                <Route
                    path="RockPaperScissorsLizardSpock"
                    element={<RockPaperScissorsLizardSpock />}
                />
            </Routes>
            <h3>Rules</h3>
        </div>
    );
}

export default App;
