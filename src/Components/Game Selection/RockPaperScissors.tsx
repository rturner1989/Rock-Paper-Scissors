import { useState } from "react";
import { gameType, opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import { getSelectionBasic } from "../../Library/Data";
import useLocalStorage from "../../Hooks/useLocalStorage";

const RockPaperScissors = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [counter, setCounter] = useLocalStorage("RPS", 0);

    return (
        <div>
            <div className="header standard-header">
                <img src="./Images/logo.svg" alt="standard rules logo" />
                <div>
                    <h3>Score: {counter}</h3>
                </div>
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionBasic}
                    opponent={player}
                    gameMode={gameType.GAME1}
                    counter={counter}
                    setCounter={setCounter}
                />
            )}
        </div>
    );
};

export default RockPaperScissors;
