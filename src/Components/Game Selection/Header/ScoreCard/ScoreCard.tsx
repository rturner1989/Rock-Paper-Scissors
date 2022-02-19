import React from "react";
import useWindowDimensions from "../../../../Hooks/useWindowDimensions";
import { opponentType } from "../../../../Library/Enums";

interface props {
    player: opponentType | null;
    opponent: number;
    user: number;
}

const ScoreCard: React.FC<props> = ({ player, opponent, user }) => {
    const [windowDimensions] = useWindowDimensions();

    let scoreTextSize: string = "";
    if (windowDimensions.width < 325) scoreTextSize = "0.9rem";
    if (windowDimensions.width < 380) scoreTextSize = "1rem";

    let scoreCounterSize: string = "";
    if (windowDimensions.width < 325) scoreCounterSize = "1.2rem";
    if (windowDimensions.width < 380) scoreCounterSize = "1.4rem";

    if (!player) {
        if (windowDimensions.width < 430) {
            return (
                <div className="score-container">
                    <div className="score-text">
                        <h3
                            style={{ fontSize: scoreTextSize }}
                            className="score-title"
                        >
                            VS Computer
                        </h3>
                        <h3
                            style={{ fontSize: scoreCounterSize }}
                            className="score-counter"
                        >
                            {opponent}
                        </h3>
                    </div>
                    <div className="score-text">
                        <h3
                            style={{ fontSize: scoreTextSize }}
                            className="score-title"
                        >
                            VS Player
                        </h3>
                        <h3
                            style={{ fontSize: scoreCounterSize }}
                            className="score-counter"
                        >
                            {user}
                        </h3>
                    </div>
                </div>
            );
        }
        return (
            <div className="score-container">
                <div className="score-text">
                    <h3 className="score-title">Score vs Computer</h3>
                    <h3 className="score-counter">{opponent}</h3>
                </div>
                <div className="score-text">
                    <h3 className="score-title">Score vs Player</h3>
                    <h3 className="score-counter">{user}</h3>
                </div>
            </div>
        );
    }
    if (player === opponentType.COMPUTER) {
        return (
            <div className="single-score-container">
                <h3 className="single-score-title">Score</h3>
                <h3 className="single-score-counter">{opponent}</h3>
            </div>
        );
    }
    return (
        <div className="single-score-container">
            <h3 className="single-score-title">Score</h3>
            <h3 className="single-score-counter">{user}</h3>
        </div>
    );
};

export default ScoreCard;
