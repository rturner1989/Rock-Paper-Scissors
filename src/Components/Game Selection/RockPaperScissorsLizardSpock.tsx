import { useState } from "react";
import { getSelectionAdvanced } from "../../Library/Data";
import { gameType, opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";

const RockPaperScissorsLizardSpock = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [counter, setCounter] = useState<number>(0);

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
                    gameMode={gameType.game2}
                />
            )}
        </div>
    );
};

export default RockPaperScissorsLizardSpock;
