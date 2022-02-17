import { Routes, Route } from "react-router-dom";
import RockPaperScissors from "./Components/Game Selection/RockPaperScissors";
import RockPaperScissorsLizardSpock from "./Components/Game Selection/RockPaperScissorsLizardSpock";
import Welcome from "./Components/Welcome/Welcome";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/Rock-Paper-Scissors/RockPaperScissors"
                    element={<RockPaperScissors />}
                />
                <Route
                    path="/Rock-Paper-Scissors/RockPaperScissorsLizardSpock"
                    element={<RockPaperScissorsLizardSpock />}
                />
                <Route path="/Rock-Paper-Scissors" element={<Welcome />} />
            </Routes>
        </div>
    );
}

export default App;
