import { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { getSelectionAdvanced } from "../../Library/Data";
import { gameType, opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";

const RockPaperScissorsLizardSpock = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [counter, setCounter] = useLocalStorage("RPSLS", 0);

    return (
        <div>
            <div className="header advanced-header">
                <img src="./Images/logo-bonus.svg" alt="advanced rules logo" />
                <div>
                    <h3>Score: {counter}</h3>
                </div>
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionAdvanced}
                    opponent={player}
                    gameMode={gameType.GAME2}
                    counter={counter}
                    setCounter={setCounter}
                />
            )}
        </div>
    );
};

export default RockPaperScissorsLizardSpock;
