import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome-page">
            <div className="welcome-header">
                <h1>Welcome!</h1>
                <h2>Please select your game</h2>
            </div>
            <div className="welcome-navigation">
                <button className="game-selection">
                    <Link to="/Rock-Paper-Scissors/RockPaperScissors">
                        Rock Paper Scissors
                    </Link>
                </button>
                <button className="game-selection">
                    <Link to="/Rock-Paper-Scissors/RockPaperScissorsLizardSpock">
                        Rock Paper Scissors Lizard Spock
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Welcome;
