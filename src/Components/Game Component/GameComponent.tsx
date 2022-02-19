import React, { useState } from "react";
import { gameType, opponentType } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";
import Button from "../Button/Button";
import ResultsComponent from "../Results Component/ResultsComponent";

interface props {
    selections: selection[];
    opponent: opponentType;
    gameMode: gameType;
    compCounter: number;
    setCompCounter: React.Dispatch<React.SetStateAction<number>>;
    playerCounter: number;
    setPlayerCounter: React.Dispatch<React.SetStateAction<number>>;
}

const GameComponent: React.FC<props> = ({
    selections,
    opponent,
    gameMode,
    compCounter,
    setCompCounter,
    playerCounter,
    setPlayerCounter,
}) => {
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
            if (!playerSelection)
                return <h2 className="game-heading">{opponentType.PLAYER}</h2>;
            return <h2 className="game-heading">{opponentType.OPPONENT}</h2>;
        }
        return;
    }

    if (playerSelection && opponentSelection) {
        return (
            <ResultsComponent
                player={playerSelection}
                computer={opponentSelection}
                opponent={opponent}
                reset={resetGame}
                counter={
                    opponent === opponentType.COMPUTER
                        ? compCounter
                        : playerCounter
                }
                setCounter={
                    opponent === opponentType.COMPUTER
                        ? setCompCounter
                        : setPlayerCounter
                }
            />
        );
    }
    return (
        <div className="game-container">
            {handlePlayerTurn()}
            <div className="game-btn-container">
                {selections.map((item) => {
                    const { name, image } = item;
                    return (
                        <Button
                            key={name}
                            btnClass={
                                gameMode === gameType.GAME1
                                    ? `game-btn ${name}`
                                    : `game-btn ${name}-advanced`
                            }
                            iconClass={
                                gameMode === gameType.GAME1
                                    ? "standard-bg"
                                    : "advanced-bg"
                            }
                            name={name}
                            image={image}
                            item={item}
                            handlePlayerChoice={() => {
                                handlePlayerChoice(item);
                            }}
                        />
                    );
                })}
                <img
                    className="game-background-img"
                    src={
                        gameMode === gameType.GAME1
                            ? "./Images/bg-triangle.svg"
                            : "./Images/bg-pentagon.svg"
                    }
                    alt="background shape"
                />
            </div>
        </div>
    );
};

export default GameComponent;
