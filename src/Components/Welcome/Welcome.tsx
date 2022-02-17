import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome-page">
            <div className="welcome-header">
                <h1>Welcome!</h1>
                <h2>Please select your game</h2>
            </div>
            <div className="welcome-navigation">
                <Link
                    className="game-selection link"
                    to="/Rock-Paper-Scissors/RockPaperScissors"
                >
                    Rock Paper Scissors
                </Link>
                <Link
                    className="game-selection link"
                    to="/Rock-Paper-Scissors/RockPaperScissorsLizardSpock"
                >
                    Rock Paper Scissors Lizard Spock
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
