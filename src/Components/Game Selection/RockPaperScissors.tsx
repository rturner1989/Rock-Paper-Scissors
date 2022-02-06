import { useState } from "react";
import { opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import { getSelectionBasic } from "../../Library/Data";

const RockPaperScissors = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);

    return (
        <div>
            <div>
                <h1>ROCK PAPER SCISSORS</h1>
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionBasic}
                    opponent={player}
                    background="./Images/bg-triangle.svg"
                />
            )}
        </div>
    );
};

export default RockPaperScissors;
