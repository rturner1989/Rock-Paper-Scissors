import React from "react";
import { selection } from "../../Library/Interfaces";

interface props {
    player: selection;
    opponent: selection;
    reset: () => void;
}

const ResultsComponent: React.FC<props> = ({ player, opponent, reset }) => {
    function getResults() {
        if (player.name === opponent.name) return "Draw";
        if (player.strength.includes(opponent.name)) {
            return "Player Wins";
        }
        return "Opponent Wins";
    }

    return (
        <div>
            <div>{getResults()}</div>
            <div>
                <div className="game-btn-container result">
                    <button className={`game-btn ${player.name}`}>
                        <img src={player.image} alt={`${player.name} button`} />
                    </button>
                </div>
                <div className="game-btn-container result">
                    <button className={`game-btn ${opponent.name}`}>
                        <img
                            src={opponent.image}
                            alt={`${opponent.name} button`}
                        />
                    </button>
                </div>
            </div>
            <button onClick={reset}>Play Again</button>
        </div>
    );
};

export default ResultsComponent;
