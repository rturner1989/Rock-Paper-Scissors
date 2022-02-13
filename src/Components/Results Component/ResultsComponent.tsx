import React, { useState, useEffect } from "react";
import { gameResult, opponentType } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";

interface props {
    player: selection;
    computer: selection;
    opponent: opponentType;
    reset: () => void;
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const ResultsComponent: React.FC<props> = ({
    player,
    computer,
    opponent,
    reset,
    counter,
    setCounter,
}) => {
    const [result, setResult] = useState<string>("");

    function getResults(second: gameResult) {
        if (player.name === computer.name) return gameResult.DRAW;
        if (player.strength.includes(computer.name)) {
            return gameResult.PLAYERWIN;
        }
        return second;
    }

    function updateCounter(result: string) {
        if (
            result === gameResult.COMPUTERWIN ||
            result === gameResult.PLAYER2WIN
        )
            return counter > 0 ? counter - 1 : 0;
        if (result === gameResult.PLAYERWIN) {
            return counter + 1;
        }
        return counter;
    }

    useEffect(() => {
        if (!player || !computer) return;
        const results = getResults(gameResult.COMPUTERWIN);
        setResult(results);
        setCounter(updateCounter(results));
    }, [player, computer]);

    return (
        <div className="results-container">
            <div className="game-btn-container-result">
                <h3>You picked</h3>
                <button className={`result-btn ${player.name}-result`}>
                    <img src={player.image} alt={`${player.name} button`} />
                </button>
            </div>
            <div className="reset-result-container">
                <h2>{result}</h2>
                <button className="reset-btn" onClick={reset}>
                    Play Again
                </button>
            </div>
            <div className="game-btn-container-result">
                <h3>
                    {opponent === opponentType.COMPUTER
                        ? "The House Picked"
                        : "Opponent Picked"}
                </h3>
                <button className={`result-btn ${computer.name}-result`}>
                    <img src={computer.image} alt={`${computer.name} button`} />
                </button>
            </div>
        </div>
    );
};

export default ResultsComponent;
