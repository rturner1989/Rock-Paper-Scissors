import { useState } from "react";
import { getSelectionAdvanced } from "../../Library/Data";
import { opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";

const RockPaperScissorsLizardSpock = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);

    return (
        <div>
            <div>
                <h1>ROCK PAPER SCISSORS LIZARD SPOCK</h1>
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionAdvanced}
                    opponent={player}
                    background="./Images/bg-pentagon.svg"
                />
            )}
        </div>
    );
};

export default RockPaperScissorsLizardSpock;
