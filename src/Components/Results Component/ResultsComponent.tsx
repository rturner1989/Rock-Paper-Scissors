import React, { useState, useEffect } from "react";
import { gameResult } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";

interface props {
    player: selection;
    opponent: selection;
    reset: () => void;
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const ResultsComponent: React.FC<props> = ({
    player,
    opponent,
    reset,
    counter,
    setCounter,
}) => {
    const [result, setResult] = useState<string>("");

    function getResults() {
        if (player.name === opponent.name) return gameResult.DRAW;
        if (player.strength.includes(opponent.name)) {
            return gameResult.PLAYERWIN;
        }
        return gameResult.OPPONENTWIN;
    }

    function updateCounter(result: string) {
        return result === gameResult.PLAYERWIN
            ? counter + 1
            : result === gameResult.OPPONENTWIN
            ? counter - 1
            : counter;
    }

    useEffect(() => {
        if (!player || !opponent) return;
        const results = getResults();
        setResult(results);
        setCounter(updateCounter(results));
    }, [player, opponent]);

    return (
        <div>
            <h2>{result}</h2>
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
