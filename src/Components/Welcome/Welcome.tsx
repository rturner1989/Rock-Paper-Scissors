import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>Please select your game</h2>
            <button className="game-selection">
                <Link to="/RockPaperScissors">Rock Paper Scissors</Link>
            </button>
            <button className="game-selection">
                <Link to="/RockPaperScissorsLizardSpock">
                    Rock Paper Scissors Lizard Spock
                </Link>
            </button>
        </div>
    );
};

export default Welcome;
