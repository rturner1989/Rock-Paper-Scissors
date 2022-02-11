import { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { getSelectionAdvanced } from "../../Library/Data";
import { gameType, opponentType } from "../../Library/Enums";
import { showScore } from "../../Library/Helpers";
import GameComponent from "../Game Component/GameComponent";
import GameRule from "../Game Rule/GameRule";
import ModalContainer from "../Modal Container/ModalContainer";
import OpponentSelection from "../Opponent Selection/OpponentSelection";

const RockPaperScissorsLizardSpock = () => {
    const [player, setPlayer] = useState<opponentType | null>(null);
    const [compCounter, setCompCounter] = useLocalStorage("RPSLSComp", 0);
    const [playerCounter, setPlayerCounter] = useLocalStorage("RPSLSPlay", 0);
    const [isModalShown, setIsModalShown] = useState(false);

    function closeModal() {
        setIsModalShown(false);
    }

    return (
        <div className="RockPaperScissorsLizardSpock">
            {isModalShown && (
                <ModalContainer
                    modal={"RockPaperScissorsLizardSpockRules rules"}
                    handleClose={closeModal}
                >
                    <GameRule></GameRule>
                </ModalContainer>
            )}
            <div className="header advanced-header">
                <img src="./Images/logo-bonus.svg" alt="advanced rules logo" />
                {showScore(player, compCounter, playerCounter)}
                {!player && (
                    // fix bug when page refreshes it pulls previous count data
                    <button
                        onClick={() => {
                            setCompCounter(0);
                            setPlayerCounter(0);
                        }}
                    >
                        Reset Score
                    </button>
                )}
            </div>
            {!player ? (
                <OpponentSelection playerSelection={setPlayer} />
            ) : (
                <GameComponent
                    selections={getSelectionAdvanced}
                    opponent={player}
                    gameMode={gameType.GAME2}
                    compCounter={compCounter}
                    setCompCounter={setCompCounter}
                    playerCounter={playerCounter}
                    setPlayerCounter={setPlayerCounter}
                />
            )}
        </div>
    );
};

export default RockPaperScissorsLizardSpock;
