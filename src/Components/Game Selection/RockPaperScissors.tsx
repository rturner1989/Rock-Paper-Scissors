import { useState } from "react";
import { gameType, opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import { getSelectionBasic } from "../../Library/Data";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { showScore } from "../../Library/Helpers";

const RockPaperScissors = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [compCounter, setCompCounter] = useLocalStorage("RPSComp", 0);
    const [playerCounter, setPlayerCounter] = useLocalStorage("RPSPlay", 0);

    return (
        <div>
            <div className="header standard-header">
                <img src="./Images/logo.svg" alt="standard rules logo" />
                {showScore(player, compCounter, playerCounter)}
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionBasic}
                    opponent={player}
                    gameMode={gameType.GAME1}
                    compCounter={compCounter}
                    setCompCounter={setCompCounter}
                    playerCounter={playerCounter}
                    setPlayerCounter={setPlayerCounter}
                />
            )}
        </div>
    );
};

export default RockPaperScissors;
