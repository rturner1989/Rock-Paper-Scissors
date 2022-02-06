import { useState } from "react";
import { getSelectionAdvanced } from "../../Library/Data";
import { opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";

const RockPaperScissorsLizardSpock = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);

    if (!player) {
        return (
            <OpponentSelection
                playerSelection={setPlayer}
                title={"Rock Paper Scissors Lizard Spock"}
            />
        );
    }
    return (
        <GameComponent selections={getSelectionAdvanced} opponent={player} />
    );
};

export default RockPaperScissorsLizardSpock;
