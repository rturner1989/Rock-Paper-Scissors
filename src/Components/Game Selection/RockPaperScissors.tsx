import { useState } from "react";
import { opponentType } from "../../Library/Enums";
import GameComponent from "../Game Component/GameComponent";
import OpponentSelection from "../Opponent Selection/OpponentSelection";
import { getSelectionBasic } from "../../Library/Data";

const RockPaperScissors = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);

    if (!player) {
        return (
            <OpponentSelection
                playerSelection={setPlayer}
                title={"Rock Paper Scissors"}
            />
        );
    }
    return <GameComponent selections={getSelectionBasic} opponent={player} />;
};

export default RockPaperScissors;
