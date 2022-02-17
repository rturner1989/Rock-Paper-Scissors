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
