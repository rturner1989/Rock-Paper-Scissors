import { Routes, Route } from "react-router-dom";
import RockPaperScissors from "./Components/Game Selection/RockPaperScissors";
import RockPaperScissorsLizardSpock from "./Components/Game Selection/RockPaperScissorsLizardSpock";
import Welcome from "./Components/Welcome/Welcome";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    // Switch paths before deploy otherwise wont display correctly
                    path="/"
                    // path="/Rock-Paper-Scissors"
                    element={<Welcome />}
                />
                <Route
                    path="/RockPaperScissors"
                    // path="/Rock-Paper-Scissors/RockPaperScissors"
                    element={<RockPaperScissors />}
                />
                <Route
                    path="/RockPaperScissorsLizardSpock"
                    // path="/Rock-Paper-Scissors/RockPaperScissorsLizardSpock"
                    element={<RockPaperScissorsLizardSpock />}
                />
            </Routes>
            <h3>Rules</h3>
        </div>
    );
}

export default App;
