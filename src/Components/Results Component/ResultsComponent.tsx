import React from "react";
import { selection } from "../../Library/Interfaces";

interface props {
    player: selection;
    opponent: selection;
    reset: () => void;
}

const ResultsComponent: React.FC<props> = ({ player, opponent, reset }) => {
    console.log(player);
    console.log(opponent);

    function getResults() {
        if (player.name === opponent.name) return "Draw";
        if (player.strength.includes(opponent.name)) return "Player Wins";
        return "Opponent Wins";
    }

    return (
        <div>
            <h2>{getResults()}</h2>
            <button onClick={reset}>Play Again</button>
        </div>
    );
};

export default ResultsComponent;
