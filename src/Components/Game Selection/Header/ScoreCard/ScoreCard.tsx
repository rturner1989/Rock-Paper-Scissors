import React from "react";
import { opponentType } from "../../../../Library/Enums";

interface props {
    player: opponentType | null;
    opponent: any;
    user: any;
}

const ScoreCard: React.FC<props> = ({ player, opponent, user }) => {
    if (!player) {
        return (
            <div className="score-container">
                <h3>Score vs Comp {opponent}</h3>
                <h3>Score vs Player {user}</h3>
            </div>
        );
    }
    if (player === opponentType.COMPUTER) {
        return (
            <div className="score-container">
                <h3>Score vs Comp {opponent}</h3>
            </div>
        );
    }
    return (
        <div className="score-container">
            <h3>Score vs Player {user}</h3>
        </div>
    );
};

export default ScoreCard;
