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

    function getResults() {
        if (player.name === computer.name) return gameResult.DRAW;
        if (player.strength.includes(computer.name)) {
            return gameResult.PLAYERWIN;
        }
        return opponent === opponentType.COMPUTER
            ? gameResult.COMPUTERWIN
            : gameResult.PLAYER2WIN;
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
        const results = getResults();
        setResult(results);
        setCounter(updateCounter(results));
    }, [player, computer]);

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
                    <button className={`game-btn ${computer.name}`}>
                        <img
                            src={computer.image}
                            alt={`${computer.name} button`}
                        />
                    </button>
                </div>
            </div>
            <button onClick={reset}>Play Again</button>
        </div>
    );
};

export default ResultsComponent;
