import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const Welcome = () => {
    const [windowDimensions] = useWindowDimensions();

    let headingOne: string = "";
    if (windowDimensions.width < 325) headingOne = "1.4rem";
    if (windowDimensions.width < 380) headingOne = "1.6rem";

    let headingTwo: string = "";
    if (windowDimensions.width < 325) headingTwo = "1rem";
    if (windowDimensions.width < 380) headingTwo = "1.2rem";

    let buttonSize: string = "";
    if (windowDimensions.width < 325) buttonSize = "0.8rem";
    if (windowDimensions.width < 380) buttonSize = "0.9rem";

    return (
        <div className="welcome-page">
            <div className="welcome-header">
                <h1 style={{ fontSize: headingOne }}>Welcome!</h1>
                <h2 style={{ fontSize: headingTwo }}>
                    Please select your game
                </h2>
            </div>
            <div className="welcome-navigation">
                <Link
                    style={{ fontSize: buttonSize }}
                    className="game-selection link"
                    to="/Rock-Paper-Scissors/RockPaperScissors"
                >
                    Rock Paper Scissors
                </Link>
                <Link
                    style={{ fontSize: buttonSize }}
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
