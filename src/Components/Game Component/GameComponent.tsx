import { useState } from "react";
import { opponentType } from "../../Library/Enums";
import { selection } from "../../Library/Interfaces";
import ResultsComponent from "../Results Component/ResultsComponent";

interface props {
    selections: selection[];
    opponent: opponentType;
    background: string;
}

const GameComponent: React.FC<props> = ({
    selections,
    opponent,
    background,
}) => {
    const [playerSelection, setPlayerSelection] = useState<selection | null>(
        null
    );
    const [opponentSelection, setOpponentSelection] =
        useState<selection | null>(null);

    function getRandomSelection() {
        return Math.floor(Math.random() * selections.length);
    }

    function handleClick(item: selection) {
        if (opponent === opponentType.COMPUTER) {
            setPlayerSelection(item);
            setOpponentSelection(selections[getRandomSelection()]);
        }
        return;
    }

    function resetGame() {
        setPlayerSelection(null);
        setOpponentSelection(null);
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
            {selections.map((item) => {
                const { name, strength, image } = item;
                return (
                    <div key={item.name} className="game-btn-container">
                        <button
                            className={`game-btn ${name}`}
                            onClick={() => handleClick(item)}
                        >
                            <img src={image} alt={`${name} button`} />
                        </button>
                    </div>
                );
            })}
            <img src={background} alt="background shape" />
        </div>
    );
};

export default GameComponent;
