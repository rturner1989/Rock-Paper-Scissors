import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>Please select your game</h2>
            <button>
                <Link to="/RockPaperScissors">Game 1</Link>
            </button>
            <button>
                <Link to="/RockPaperScissorsLizardSpock">Game 2</Link>
            </button>
        </div>
    );
};

export default Welcome;
