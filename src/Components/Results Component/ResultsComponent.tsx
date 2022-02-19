import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { gameResult, opponentType } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";
import Button from "../Button/Button";

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
        let timer = setTimeout(() => {
            setCounter(updateCounter(results));
        }, 3500);
        return () => {
            clearTimeout(timer);
        };
    }, [player, computer]);

    const [windowDimensions] = useWindowDimensions();
    if (windowDimensions.width < 430) {
        return (
            <div className="results-container">
                <div className="mobile-result-btn-container">
                    <div className="game-btn-container-result">
                        <h3 className="result-heading user-heading">
                            You picked
                        </h3>
                        <Button
                            // Review this line
                            btnClass={
                                result === gameResult.PLAYERWIN
                                    ? `result-btn user-btn ${player.name} ${player.name}-advanced player-winner`
                                    : `result-btn user-btn ${player.name} ${player.name}-advanced`
                            }
                            iconClass={"standard-bg"}
                            name={player.name}
                            image={player.image}
                            item={player}
                            handlePlayerChoice={undefined}
                        />
                    </div>
                    <div className="game-btn-container-result">
                        <h3 className="result-heading opponent-heading">
                            {opponent === opponentType.COMPUTER
                                ? "The House Picked"
                                : "Opponent Picked"}
                        </h3>
                        <Button
                            // Review this line
                            btnClass={
                                result === gameResult.COMPUTERWIN ||
                                result === gameResult.PLAYER2WIN
                                    ? `result-btn opponent-btn ${computer.name} ${computer.name}-advanced opponent-winner`
                                    : `result-btn opponent-btn ${computer.name} ${computer.name}-advanced`
                            }
                            iconClass={"standard-bg"}
                            name={computer.name}
                            image={computer.image}
                            item={computer}
                            handlePlayerChoice={undefined}
                        />
                    </div>
                </div>
                <div className="reset-result-container">
                    <h2 className="winner-heading">{result}</h2>
                    <button className="reset-btn" onClick={reset}>
                        Play Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="results-container">
            <div className="game-btn-container-result">
                <h3 className="result-heading user-heading">You picked</h3>
                <Button
                    // Review this line
                    btnClass={
                        result === gameResult.PLAYERWIN
                            ? `result-btn user-btn ${player.name} ${player.name}-advanced player-winner`
                            : `result-btn user-btn ${player.name} ${player.name}-advanced`
                    }
                    iconClass={"standard-bg"}
                    name={player.name}
                    image={player.image}
                    item={player}
                    handlePlayerChoice={undefined}
                />
            </div>
            <div className="reset-result-container">
                <h2 className="winner-heading">{result}</h2>
                <button className="reset-btn" onClick={reset}>
                    Play Again
                </button>
            </div>
            <div className="game-btn-container-result">
                <h3 className="result-heading opponent-heading">
                    {opponent === opponentType.COMPUTER
                        ? "The House Picked"
                        : "Opponent Picked"}
                </h3>
                <Button
                    // Review this line
                    btnClass={
                        result === gameResult.COMPUTERWIN ||
                        result === gameResult.PLAYER2WIN
                            ? `result-btn opponent-btn ${computer.name} ${computer.name}-advanced opponent-winner`
                            : `result-btn opponent-btn ${computer.name} ${computer.name}-advanced`
                    }
                    iconClass={"standard-bg"}
                    name={computer.name}
                    image={computer.image}
                    item={computer}
                    handlePlayerChoice={undefined}
                />
            </div>
        </div>
    );
};

export default ResultsComponent;
