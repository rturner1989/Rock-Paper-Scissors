import React, { useState } from "react";
import { gameType, opponentType } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";
import ResultsComponent from "../Results Component/ResultsComponent";

interface props {
    selections: selection[];
    opponent: opponentType;
    gameMode: string;
}

const GameComponent: React.FC<props> = ({ selections, opponent, gameMode }) => {
    const [playerSelection, setPlayerSelection] = useState<selection | null>(
        null
    );
    const [opponentSelection, setOpponentSelection] =
        useState<selection | null>(null);

    function getRandomNumber(upperLimit: number) {
        return Math.floor(Math.random() * upperLimit);
    }

    function handlePlayerChoice(item: selection) {
        if (opponent === opponentType.COMPUTER) {
            setPlayerSelection(item);
            setOpponentSelection(
                selections[getRandomNumber(selections.length)]
            );
        }
        if (opponent === opponentType.PLAYER) {
            playerSelection
                ? setOpponentSelection(item)
                : setPlayerSelection(item);
        }
    }

    function resetGame() {
        setPlayerSelection(null);
        setOpponentSelection(null);
    }

    function handlePlayerTurn() {
        if (opponent === opponentType.PLAYER) {
            if (!playerSelection) return <h2>Player 1</h2>;
            return <h2>Player 2</h2>;
        }
        return;
    }

    if (playerSelection && opponentSelection) {
        return (
            <ResultsComponent
                player={playerSelection}
                opponent={opponentSelection}
                reset={resetGame}
            />
        );
    }
    return (
        <div className="game-container">
            {handlePlayerTurn()}
            {selections.map((item) => {
                const { name, strength, image } = item;
                return (
                    <div key={item.name} className="game-btn-container">
                        <button
                            className={`game-btn ${name}`}
                            onClick={() => {
                                handlePlayerChoice(item);
                            }}
                        >
                            <img src={image} alt={`${name} button`} />
                        </button>
                    </div>
                );
            })}
            <img
                src={
                    gameMode === gameType.game1
                        ? "./Images/bg-triangle.svg"
                        : "./Images/bg-pentagon.svg"
                }
                alt="background shape"
            />
        </div>
    );
};

export default GameComponent;
