import { useState } from "react";
import { gameType, opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import { getSelectionBasic } from "../../Library/Data";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { showScore } from "../../Library/Helpers";

const RockPaperScissors = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [compCounter, setCompCounter] = useLocalStorage("RPS", 0);

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    return (
        <div>
            <div className="header standard-header">
                <img src="./Images/logo.svg" alt="standard rules logo" />
                {/* <div>
                    <h3>Score: {counter}</h3>
                </div> */}
                {showScore(player, first, second)}
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionBasic}
                    opponent={player}
                    gameMode={gameType.GAME1}
                    counter={compCounter}
                    setCounter={setCompCounter}
                />
            )}
        </div>
    );
};

export default RockPaperScissors;
