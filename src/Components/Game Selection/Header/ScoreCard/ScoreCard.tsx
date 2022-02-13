import React from "react";
import { opponentType } from "../../../../Library/Enums";

interface props {
    player: opponentType | null;
    opponent: number;
    user: number;
}

const ScoreCard: React.FC<props> = ({ player, opponent, user }) => {
    if (!player) {
        return (
            <div className="score-container">
                <div className="score-text">
                    <h3>Score vs Computer</h3>
                    <h3>{opponent}</h3>
                </div>
                <div className="score-text">
                    <h3>Score vs Player</h3>
                    <h3>{user}</h3>
                </div>
            </div>
        );
    }
    if (player === opponentType.COMPUTER) {
        return (
            <div className="score-container">
                <div className="score-text">
                    <h3>Score</h3>
                    <h3>{opponent}</h3>
                </div>
            </div>
        );
    }
    return (
        <div className="score-container">
            <div className="score-text">
                <h3>Score</h3>
                <h3>{user}</h3>
            </div>
        </div>
    );
};

export default ScoreCard;
